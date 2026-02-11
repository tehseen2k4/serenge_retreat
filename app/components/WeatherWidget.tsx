"use client";

import { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, Snowflake, Wind, Thermometer } from "lucide-react";

type WeatherData = {
    temperature: number;
    condition: string;
};

export default function WeatherWidget() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                // Using wttr.in - completely free, no API key needed
                // Format: JSON with current weather for Shigar, Pakistan
                const res = await fetch(
                    `https://wttr.in/Shigar,Pakistan?format=j1`,
                    {
                        headers: {
                            'User-Agent': 'curl/7.68.0' // wttr.in prefers curl user agent
                        }
                    }
                );

                if (!res.ok) {
                    throw new Error(`API returned ${res.status}`);
                }

                const data = await res.json();
                console.log("Weather API Response (wttr.in):", data);

                // Get current weather
                const current = data.current_condition[0];
                const temp = parseInt(current.temp_C);
                const weatherDesc = current.weatherDesc[0].value.toLowerCase();

                let condition = "Clear";
                if (weatherDesc.includes("cloud") || weatherDesc.includes("overcast")) condition = "Cloudy";
                if (weatherDesc.includes("rain") || weatherDesc.includes("drizzle")) condition = "Rain";
                if (weatherDesc.includes("snow")) condition = "Snow";
                if (weatherDesc.includes("mist") || weatherDesc.includes("fog")) condition = "Fog";

                console.log("Parsed Weather:", {
                    temperature: temp,
                    condition,
                    description: weatherDesc,
                    feelsLike: current.FeelsLikeC
                });

                setWeather({
                    temperature: temp,
                    condition,
                });
            } catch (err) {
                console.error("Weather fetch error:", err);
                setError(err instanceof Error ? err.message : "Failed to load weather");
            }
        }

        fetchWeather();

        // Refresh every 30 minutes (wttr.in updates frequently)
        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    // Show nothing while loading
    if (!weather && !error) return null;

    // Show error state
    if (error) {
        return (
            <div className="flex items-center gap-2 text-ink-muted/50 text-xs">
                <Thermometer size={14} />
                <span>Shigar</span>
            </div>
        );
    }

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
