<div align="center">

  <h3 align="center" >Stree - Empowering Women's Safety and Growth</h3>

</div>

Stree is a platform focused on empowering women to take charge of their safety by anonymously reporting crimes, accessing resources on tech communities, and growing within the tech industry. Through an interactive map, users can pinpoint and visualize crime incidents to identify safe and unsafe areas, fostering a supportive environment where women feel secure and informed.

<br>
![Image 1](https://i.ibb.co/ZWDtRJS/Screenshot-2024-12-02-193538.png)
![Image 2](https://i.ibb.co/sVggft1/Screenshot-2024-12-02-193553.png)
![Image 2](https://i.ibb.co/PwTnd5y/Screenshot-2024-12-02-193706.png)
![Image 2](https://i.ibb.co/9rw3vjd/Screenshot-2024-12-02-193759.png)
![Image 2](https://i.ibb.co/1RtBg12/Screenshot-2024-12-02-193815.png)
## Technologies Used

### Frontend

- **React**: Used for building the user interface.
- **React Router**: For client-side routing.
- **Recoil**: State management for React.
- **Leaflet & React-Leaflet**: Used for mapping and location-based services.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling the application.

### Backend

- **Node.js & Express**: Backend framework for handling requests and routing.
- **MongoDB & Mongoose**: Database and ORM for storing and managing data.
- **JWT (jsonwebtoken)**: For handling user authentication and security.
- **Zod**: For schema validation.
- **bcryptjs**: For hashing passwords.

## Installation



### Steps

1. **Fork the Repository**

2. **Clone the Repository**:
   ```bash
   git clone ${url_of_your_forked_repo}
   cd stree
   ```

3. **Setup the Client**:

    ```bash
    cd client
    npm install
    ```
  
  
4. **Setup the Server**:
    ```bash
    cd ../server
    npm install
    ```



5. **Create a `.env` File**:

   - In the `client` and `server` directories, create a `.env` file and add the necessary environment variables.

   - **Example for `server/.env`**:
     ```plaintext
     MONGO_URI=your_mongodb_uri
     JWT_SECRET_KEY=your_jwt_secret_key
     FRONTEND_URL=http://localhost:your_local_port
     ```

   - **Example for `client/.env`**:
     ```plaintext
     VITE_BACKEND_URL=http://localhost:your_backend_port
     ```
   
   Make sure to replace `your_mongodb_uri`, `your_jwt_secret_key`, `localhost:xyxy`, and `localhost:your_backend_port` with the appropriate values based on your local setup.

## Run the Application

1. **Start the backend**

    ```bash
    cd server
    nodemon index.js
    ```
2. **Start the frontend**

    ```bash
    cd client
    npm run dev
   ```

## Access the application

- Open your browser and go to http://localhost:5173 to view the application.



## Ways to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<p align="right">(<a href="#readme-top">back to top</a>)</p> 

