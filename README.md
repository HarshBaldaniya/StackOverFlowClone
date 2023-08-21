
# StackOverFlow Clone

Welcome to the StackOverFlow Clone project! This backend project aims to replicate some of the core functionalities of the popular Stack Overflow platform. Here, I've built a set of APIs that enable various interactions related to user registration, question creation, updating questions, deleting questions, and listing all questions.




## Demo

To see a demo of this project, check out this [Live](https://stackoverflowclone-1crj.onrender.com/). But for this we need to give authenticated. 
- its work in my local address: '127.0.0.1'.

- Create User:- POST -> http://localhost:8081/register
- Login:- POST -> http://localhost:8081/login
- Logout:- GET -> http://localhost:8081/logout
- Create Questions:- POST -> http://localhost:8081/create-question
- Update Questions:- POST -> http://localhost:8081/update-question
- Delete Questions:- POST -> http://localhost:8081/delete-question
- All Questions:- GET -> http://localhost:8081/list

How to use and run the project

- npm i
- set the database name in database -> db.js
- set mysql username and password
- create two table in database
    - login
        - id, 
        - name, 
        - email, 
        - password, 
        - is_admin (small int "0 OR 1")
    - questions
        - id, 
        - user_id (foreign key with login table "id"), 
        - title, 
        - content, 
        - created_at
    
    In the future, we change to dynamic with sequelize mysql database, create the model file and set the scheme for all table.

- nodemon server.js

## Features

- User Registration: Users can easily register themselves on the system by providing necessary details.

- Question Creation: Authenticated users can create new questions, which can then be viewed and answered by the community.

- Question Updates: Users have the ability to update the content of their questions, keeping them relevant and accurate.

- Question Deletion: If a user wishes to remove a question for any reason, they can do so through the provided APIs.

- Listing All Questions: A comprehensive list of all questions is available, providing users with a quick overview of the discussions taking place.

- User Management: The project allows the addition of multiple users through the provided API endpoints.

- CRUD Operations: The project employs Create, Read, Update, and Delete (CRUD) operations to facilitate smooth interactions between users and questions.

- JWT Token Generation: To enhance security and user authentication, the project generates JSON Web Tokens (JWT) for all registered users. This helps in secure and efficient communication between the client and the server.

Feel free to explore the APIs and utilize the features to experience a simplified version of the Stack Overflow platform. This project serves as a learning exercise and showcases the implementation of fundamental backend functionalities. If you have any questions or suggestions, please don't hesitate to get in touch. Happy coding!










## Tech Stack

- Nodejs
- MySQL
- Express
- cors
- bcrypt
- cookieParser

## Screenshots

- Database:-
  
![2023-08-21 14_14_41-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/e851b0fb-7f94-444f-9476-ee4db0c6c469)
![2023-08-21 14_15_02-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/8495d126-56e2-48ee-90b8-d546fef02b3f)
![2023-08-21 14_14_51-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/f4bec50f-8ddd-4fcf-8d91-e0d2fe2172ce)
![2023-08-21 14_28_24-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/9fc75f52-22b3-4d2f-b215-6acb9b25fc3e)
![2023-08-21 14_28_15-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/c560f2de-82e8-4494-a2b2-c717765bd056)



- TestAPI:-

![2023-08-21 13_20_59-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/d4bff746-974c-4795-be70-6aebad9be994)
![2023-08-21 13_21_03-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/0a7f79dd-4875-48d6-a787-29636f40eb84)
![2023-08-21 13_21_12-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/c09594bc-2617-43fa-a18c-c43adbcf25c1)
![2023-08-21 13_21_27-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/1d02a2ed-6cfc-4f3f-847e-fb95b1bad009)
![2023-08-21 13_21_36-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/91178d58-79de-4d3b-90db-6c4d61952b8e)
![2023-08-21 13_21_42-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/f7f88347-c106-4ef6-9662-29b29c66a93a)
![2023-08-21 13_21_55-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/57036314-f95c-4892-8780-1e39e134f0fd)
![2023-08-21 13_21_48-Greenshot](https://github.com/HarshBaldaniya/StackOverFlowClone/assets/89580214/c30f0705-36b7-4eed-8f88-48b591cb7e2e)









## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.harshbaldaniya.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hb134/)

