 ##                                                     Youtube-Subscribers Backend Database Project.
This backend API enables users to retrieve YouTube subscriber data through predefined route endpoints. By specifying a particular endpoint in the URL, users can access the full list of subscribers, retrieve only subscriber names, or fetch details of a specific subscriber using their unique ID.

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Content</summary>
    <ol>
        <li><a href="#demo">Introduction</a></li>
        <li><a href="#feature">Features</a></li>
        <li><a href="#tech-used">Technology/ Languages Used</a></li>
    </ol>
</details>



### Object Name               -->      Types
- _id                 -->       ObjectID
- name                -->       String
- subscribedChannel   -->       String
- subscribedDate      -->       Date
- __v                 -->       Int32

## **Feature**

- Retrieve all subscribers from a remotely hosted database.
- Access specific subscriber details using unique IDs.
- Get a list of subscribers with their names and subscribed channels.
- Fetch targeted data from the database through designated routes.
- Access the complete subscriber list stored in a remote database.

## **Tech Used**

- Expressjs
- MongoDB
- Mongoose
- HTML,CSS,JS for Docs Page


