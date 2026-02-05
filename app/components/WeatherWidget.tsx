"use client";

import { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, Snowflake, Wind } from "lucide-react";

type WeatherData = {
    temperature: number;
    condition: string;
};

// Shigar Coordinates: 35.4239° N, 75.7397° E
const LAT = 35.42;
const LON = 75.74;

export default function WeatherWidget() {
    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const res = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`
                );
                const data = await res.json();
                const code = data.current_weather.weathercode;

                let condition = "Clear";
                if (code > 0 && code <= 3) condition = "Cloudy";
                if (code > 3 && code <= 49) condition = "Fog";
                if (code >= 50 && code <= 69) condition = "Rain";
                if (code >= 70 && code <= 79) condition = "Snow";
                if (code >= 80) condition = "Rain";

                setWeather({
                    temperature: Math.round(data.current_weather.temperature),
                    condition,
                });
            } catch (err) {
                console.error("Failed to fetch weather", err);
            }
        }

        fetchWeather();
    }, []);

    if (!weather) return null;

    return (
        <div className="flex items-center gap-2 text-ink-muted text-xs tracking-widest uppercase">
            <span className="text-earth">
                {weather.condition === "Clear" && <Sun size={14} />}
                {weather.condition === "Cloudy" && <Cloud size={14} />}
                {weather.condition === "Rain" && <CloudRain size={14} />}
                {weather.condition === "Snow" && <Snowflake size={14} />}
                {weather.condition === "Fog" && <Wind size={14} />}
            </span>
            <span>{weather.temperature}°C</span>
            <span className="hidden md:inline text-ink-muted/50">|</span>
            <span className="hidden md:inline">Shigar Valley</span>
        </div>
    );
}
