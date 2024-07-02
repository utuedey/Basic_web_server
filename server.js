require('dotenv').config();

const express = require('express');
const axios = require('axios');
const requestIp = require('request-ip');

const app = express();
const PORT = process.env.PORT || 3060;
const api_key = process.env.WEATHER_API_KEY;

// middleware to extracts the IP address and attaches it to the req object as req.clientIp.
app.use(requestIp.mw());

app.get('/api/hello', async (req, res) => {

    const visitorName = req.query.visitor_name || 'world!';
    const clientIp = req.clientIp;

    try {
        
        // Fetch geolocation data
        const geoResponse = await axios.get(`http://ip-api.com/json/${clientIp}`);
        const { city } = geoResponse.data;

        // Fetch weather data
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
        const temperature = weatherResponse.data.main.temp;

        const greeting = `Hello, ${visitorName}!, the temperature is ${temperature} degree Celcius in ${city}`;

        res.status(200).json({
          client_ip : clientIp,
          location: city,
          greeting: greeting,

        });

    } catch(error) {
        res.status(500).json({ error: 'cannnot fetch data'});
    };
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
