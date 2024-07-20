# Toot: Tweet from Your Terminal

## Description

Toot is a command-line interface (CLI) tool that allows you to compose and send tweets directly from your terminal. It's designed for developers and power users who want to quickly share thoughts or updates on Twitter without leaving their command-line environment.

## Features

- Compose and send tweets directly from the terminal
- Simple and intuitive command-line interface
- Avoids the distraction of opening the full Twitter website or app

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (usually comes with Node.js)
- A Twitter Developer account with API keys and tokens

### Steps

1. Clone the repository: git clone https://github.com/tinkerer-shubh/toot.git
cd toot
2. Install dependencies: npm install
3. Set up your environment variables:
Create a `.env` file in the root directory with the following content:TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret
Replace the placeholders with your actual Twitter API credentials.

4. Make the CLI globally accessible: npm link


## Usage

To send a tweet: toot -t "Your tweet message here"

Or use the long-form option: toot --tweet "Your tweet message here"

## Configuration

The CLI uses your Twitter API credentials to authenticate and post tweets. Make sure to keep your `.env` file secure and never commit it to version control.

## Development

To run the CLI in development mode: npm run dev

This will use nodemon to automatically restart the application when you make changes to the code.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Twitter API for enabling tweet functionality
- Commander.js for CLI argument parsing
- Dotenv for environment variable management

