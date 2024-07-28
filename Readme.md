# Weather Telegram Bot - Nest.js, Nodejs and React

Weather Telegram Bot is a Telegram bot built using Nest.js that provides weather updates to subscribed users. Users can register to receive weather updates for a specific city.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Users can subscribe to receive weather updates.
- Weather updates are sent periodically to subscribed users.
- Users can unsubscribe to stop receiving weather updates.
- MongoDB is used to store user data.
- Integration with the OpenWeatherMap API for weather data.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

## Prerequisites

1. Telegram Bot Image
<img src="https://raw.githubusercontent.com/SumitM28/telegram-weather-bot/main/previews/1.png" />

2. Admin Page Images
<img src="https://raw.githubusercontent.com/SumitM28/telegram-weather-bot/main/previews/2.png" />
<img src="https://raw.githubusercontent.com/SumitM28/telegram-weather-bot/main/previews/3.png" />
<img src="https://raw.githubusercontent.com/SumitM28/telegram-weather-bot/main/previews/4.png" />
<img src="https://raw.githubusercontent.com/SumitM28/telegram-weather-bot/main/previews/5.png" />
<img src="https://raw.githubusercontent.com/SumitM28/telegram-weather-bot/main/previews/6.png" />

## Getting Started

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/SumitM28/telegram-weather-bot.git
   ```

2. Navigate to root folder
    ```
   cd telegram-weather-bot
   ```

3. Navigate to Backend Server for bot
    ```
   cd nest-backend-bot
   npm install
   ```

4. Create a .env file:
    ```
    TELEGRAM_BOT_TOKEN =
    WEATHER_API_KEY =
    DATABASE_CONNECTION_STRING = 
    ```

5. Start the Nest.js application:
    ```
    npm start
    ```

6. Now, Navigate to Admin Dashboard Frontend 
    ```
   cd weather-bot-admin-panel
   npm install
   ```

7. Enter your firebase credentias for google authentication
    ```
    const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
    }
   ```

8. Run the Admin Dashboard
    ```
   npm start
   ```

    
8. Your Telegram bot is now running and ready to receive commands.

9. Users can interact with the bot by sending commands like /subscribe and /unsubscribe.


## Contributing
- Contributions are welcome! Please follow these guidelines:

    - Fork the repository.
    - Create a new branch: git checkout -b feature/your-feature.
    - Commit your changes: git commit -m 'Add new feature'.
    - Push to your branch: git push origin feature/your-feature.
    - Create a pull request.
    
## Licence

- This is a open source project, users can contribute according to open source guidelines.


