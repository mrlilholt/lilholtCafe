# Lilholt Cafe

Welcome to the Lilholt Cafe project! This is a full-page display application designed for use in a kitchen environment. The application streams a YouTube playlist, displays weekly dinner menus, shows the current time, and may include additional features such as a shopping list integration with Amazon Alexa.

## Features

- **YouTube Playlist Streaming**: Enjoy your favorite music or cooking videos with an embedded YouTube player.
- **Dinner Display**: View the planned dinners for the week in a user-friendly format.
- **Real-Time Clock**: Keep track of time with a live clock display.
- **Future Integrations**: Potential to integrate with Amazon Alexa for displaying shopping lists and other functionalities.

## Project Structure

```
lilholt-cafe-site
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── components
│   │   ├── Clock.js        # Component for displaying the current time
│   │   ├── DinnerDisplay.js # Component for displaying weekly dinners
│   │   └── YouTubePlayer.js # Component for embedding YouTube playlists
│   ├── styles
│   │   └── main.css        # CSS styles for the application
│   └── app.js              # Main JavaScript file that integrates components
├── netlify.toml            # Configuration for Netlify deployment
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with the Lilholt Cafe project, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone https://github.com/yourusername/lilholt-cafe-site.git
   cd lilholt-cafe-site
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Application**: 
   ```
   npm start
   ```

4. **Build for Production**: 
   ```
   npm run build
   ```

5. **Deploy to Netlify**: 
   Push your changes to GitHub, and Netlify will automatically deploy your site if connected.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.# lilholtCafe
