![image](https://github.com/user-attachments/assets/e96a186e-e836-41db-80c2-0ce9945bc15e)# Movie Search Web App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The Movie Search Web App is a simple, intuitive, and responsive application that allows users to search for movies, view detailed information about them, and save their favorite movies. The app uses the TMDb API to fetch movie data and supports features like theme toggling and managing a list of favorite movies.

## Features
Search Functionality: Users can search for movies by title, with dynamic suggestions as they type.
Movie Details: Detailed information including the title, release date, synopsis, genre, cast, and ratings.
Favorites: Users can add movies to their favorites list and remove them as needed.
Responsive Design: The app is fully responsive, ensuring a seamless experience across all devices.
Theme Toggle: Users can switch between day and night themes.

In the project directory, you can run:

## Setup Instructions

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- A TMDb API key (sign up [here](https://www.themoviedb.org/) to get one)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/movie-search-app.git
   cd movie-search-app

2. **Install Dependencies

   ```bash
   npm install

3. **Set Up Environment Variables
   Create a .env file in the root directory and add your TMDb API key:

   ```bash
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key

4. **Start the Development Server
   ```bash
   npm start
The app will be available at http://localhost:3000.



### Deployement

To deploy the app on Vercel:

1. **Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel

2. **Deploy the Project
   ```bash
   vercel


### API Usage

This app uses the TMDb API to fetch movie data. Key endpoints used include:

Search Movie: /search/movie?query={movie_name}
Movie Details: /movie/{movie_id}
Popular Movies (optional): /movie/popular
Images: /movie/{movie_id}/images

### Screenshots

1. **Home Page

   ![image](https://github.com/user-attachments/assets/2d890d18-7ecf-443a-9e6f-17ef0a7b403b)

2. **Movie Details

   ![image](https://github.com/user-attachments/assets/db506fbd-b895-4b3f-b477-907aa86d734c)

3. **Favourite List

   ![image](https://github.com/user-attachments/assets/587e8b53-8179-408d-9ed6-8500de93c122)

4. **Recommendations

   ![image](https://github.com/user-attachments/assets/ecf80482-3a51-4ac0-9758-524fb8f31a22)


###Contributing

Feel free to fork this repository and submit pull requests to improve the app. Any contributions are welcome!

###License

This project is licensed under the MIT License. See the LICENSE file for more details.


   
