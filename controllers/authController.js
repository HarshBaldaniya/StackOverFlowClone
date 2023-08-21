import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../database/db.js";

const salt = 10;
const secretKey = "jwt-secret-key";

export const register = (req, res) => {
  const sql =
    "INSERT INTO login (`name`,`email`,`password`,`is_admin`) VALUES (?, ?, ?, ?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) {
      return res.json({ Error: "Error hashing password." });
    }
    const isAdmin = req.body.is_admin === "true";
    const values = [req.body.name, req.body.email, hash, isAdmin];
    db.query(sql, values, (err, result) => {
      if (err) {
        return res.json({ Error: "Error inserting data into the database." });
      }
      return res.json({ Status: "Success" });
    });
  });
};

export const login = (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Login error in server!" });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, isMatch) => {
          if (err) return res.json({ Error: "Password Hash error!" });
          if (isMatch) {
            const name = data[0].name;
            const token = jwt.sign({ name }, secretKey, { expiresIn: "1d" });
            res.cookie("token", token);
            return res.json({ Status: "Success", token });
          } else return res.json({ Error: "Password not matched." });
        }
      );
    } else {
      return res.json({ Error: "Email is not found." });
    }
  });
};

export const logout = (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
};

export const getUserData = (req, res) => {
  const sql = "SELECT name, is_admin FROM login";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ Error: "Error fetching user data." });
    }

    const user = result.find((user) => user.name === req.name);

    if (!user) {
      return res.json({ Error: "User not found." });
    }

    const isAdmin = user.is_admin === 1;

    if (isAdmin) {
      const allUsers = result.map((user) => user.name);
      return res.json({
        Status: "Success",
        adminName: req.name,
        isAdmin: true,
        users: allUsers,
      });
    } else {
      const adminNames = result
        .filter((user) => user.is_admin === 1)
        .map((admin) => admin.name);

      return res.json({
        Status: "Success",
        userName: req.name,
        isAdmin: false,
        admins: adminNames,
      });
    }
  });
};

export const getUserIdFromName = (name) => {
  const sql = "SELECT id FROM login WHERE name = ?";
  return new Promise((resolve, reject) => {
    db.query(sql, [name], (err, result) => {
      if (err) {
        reject(err);
      } else {
        const user = result[0];
        if (user) {
          resolve(user.id);
        } else {
          resolve(null);
        }
      }
    });
  });
};

export const createQuestion = async (req, res) => {
  try {
    const userId = await getUserIdFromName(req.name);
    const userName = req.name;
    if (!userId) {
      return res.json({ Error: "User not found." });
    }

    const { title, content } = req.body;

    const sql =
      "INSERT INTO questions (`user_id`, `title`, `content`) VALUES (?, ?, ?)";
    const values = [userId, title, content];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.json({ Error: "Error creating question." });
      }
      return res.json({
        Status: "Question created successfully.",
        userName,
        title,
        content,
      });
    });
  } catch (error) {
    return res.json({ Error: "An error occurred." });
  }
};

export const updateQuestion = async (req, res) => {
  try {
    const { questionId, title, content } = req.body;

    const sql =
      "UPDATE questions SET `title` = ?, `content` = ? WHERE `id` = ?";
    const values = [title, content, questionId];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.json({ Error: "Error updating question." });
      }
      return res.json({ Status: "Question updated successfully.", title });
    });
  } catch (error) {
    return res.json({ Error: "An error occurred." });
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const { questionId } = req.body;

    const sql = "DELETE FROM questions WHERE id = ?";
    const values = [questionId];

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.json({ Error: "Error deleting question." });
      }
      if (result.affectedRows === 0) {
        return res.json({
          Error:
            "Question not found or you don't have permission to delete it.",
        });
      }
      return res.json({ Status: "Question deleted successfully." });
    });
  } catch (error) {
    return res.json({ Error: "An error occurred." });
  }
};

export const getAllQuestions = (req, res) => {
  const sql = "SELECT * FROM questions";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ Error: "Error fetching questions." });
    }
    return res.json({ Status: "Success", questions: result });
  });
};

