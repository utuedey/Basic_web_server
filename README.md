# HNG Internship Backend Task

This is a basic web server built using Node.js and Express. The server provides an API endpoint that returns the client's IP address, location, and a greeting message. The project is part of the HNG Internship backend track task.

## Features

- Get the client's IP address
- Fetch geolocation data based on IP address
- Provide a greeting message with temperature information

## API Endpoint

### [GET] `/api/hello`

**Query Parameters:**

- `visitor_name` (optional): The name of the visitor to include in the greeting message.

**Response:**

```json
{
  "client_ip": "127.0.0.1",
  "location": "New York",
  "greeting": "Hello, Mark!, the temperature is 11 degrees Celsius in New York"
}
```

## Prerequisites

- Node.js
- npm (Node Package Manager)
- An API key for geolocation and weather services (if needed)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/basic_web_server.git
   cd basic_web_server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys (if required):

   ```env
   WEATHER_API_KEY=your_weather_api_key_here
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. Access the API endpoint in your browser or via a tool like `curl` or Postman:

   ```
   http://localhost:3000/api/hello?visitor_name=Mark
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express](https://expressjs.com/)
- [axios](https://github.com/axios/axios)
- [request-ip](https://github.com/pbojinov/request-ip)
- [ip-api](http://ip-api.com/)

## Author

- [Joseph Utuedeye](https://x.com/joecodes2)