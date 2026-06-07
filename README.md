# weather-app
My first weather app, advanced ones yet to come.


Weather API (Spring Boot)

A simple weather backend built with Spring Boot that fetches real-time weather data from an external API and exposes it through REST endpoints. Built mainly for learning backend development, API integration, and caching concepts.

What it does
Fetches current weather for a given city
Returns clean JSON responses
Uses external weather API
Optional caching support (can be enabled/disabled)
Simple REST structure for easy extension
Tech Stack
Java
Spring Boot
Spring Web
RestTemplate (for API calls)
Maven
How to run it
1. Clone the repo
git clone https://github.com/your-username/weather-app.git
cd weather-app
2. Add your API key

Put your weather API key inside application.properties:

weather.api.key=YOUR_API_KEY
weather.api.url=https://api.openweathermap.org/data/2.5/weather
3. Run the app

Using Maven:

mvn spring-boot:run

Or run the main class directly from your IDE.

API Endpoints
Get weather by city
GET /weather?city=London
Response example
{
  "city": "London",
  "temperature": 28.4,
  "description": "clear sky",
  "humidity": 60
}
Project Structure
src/
 └── main/
     ├── java/
     │    └── com.example.api/
     │         ├── controller
     │         ├── service
     │         └── model
     └── resources/
          └── application.properties
Notes
Built mainly for practice and backend understanding
API responses depend on the external weather provider
Easy to extend (add caching, frontend, or database later)
Future improvements
Add Redis caching (reduce API calls)
Add error handling for invalid cities
Switch to WebClient instead of RestTemplate
Add rate limiting
Add frontend dashboard