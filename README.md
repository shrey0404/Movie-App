# Movie Search Web App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The Movie Search Web App is a simple, intuitive, and responsive application that allows users to search for movies, view detailed information about them, and save their favorite movies. The app uses the TMDb API to fetch movie data and supports features like theme toggling and managing a list of favorite movies.

## Features
Search Functionality: Users can search for movies by title, with dynamic suggestions as they type.
Movie Details: Detailed information including the title, release date, synopsis, genre, cast, and ratings.
Favorites: Users can add movies to their favorites list and remove them as needed.
Responsive Design: The app is fully responsive, ensuring a seamless experience across all devices.
Theme Toggle: Users can switch between day and night themes.

In the project directory, you can run:

### Set-up Instructions

Installation
Clone the Repository

bash
git clone [https://github.com/shrey0404/movie-app.git](https://github.com/shrey0404/Movie-App)
cd movie-search-app
Install Dependencies

bash
npm install
Set Up Environment Variables

Create a .env file in the root directory and add your TMDb API key:

bash
Copy code
REACT_APP_TMDB_API_KEY=f58d151980ce688441d99c072222cbe9
Start the Development Server

bash
Copy code
npm start
The app will be available at http://localhost:3000.


### Deployement

To deploy the app on Vercel:

Install Vercel CLI (if not already installed):


npm install -g vercel
Deploy the Project:


vercel
Follow the prompts to complete the deployment. You’ll receive a URL where the app is deployed.

![image](https://github.com/user-attachments/assets/e68f284e-b84f-4d7f-8bda-d8cdd7b799f4)


### API Usage

This app uses the TMDb API to fetch movie data. Key endpoints used include:

Search Movie: /search/movie?query={movie_name}
Movie Details: /movie/{movie_id}
Popular Movies (optional): /movie/popular
Images: /movie/{movie_id}/images

### Screenshots
