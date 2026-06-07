package com.example.api.controller;

import com.example.api.service.WeatherService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "*")
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping
    public Map<String, Object> getWeather(
            @RequestParam(required = false, defaultValue = "Port Harcourt") String city
    ) {
        return weatherService.getWeather(city);
    }
}