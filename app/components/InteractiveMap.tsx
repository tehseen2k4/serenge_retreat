"use client";

import { GoogleMap, MarkerF, useLoadScript, InfoWindowF } from "@react-google-maps/api";
import { useState, useMemo } from "react";

// Map Defaults
const center = { lat: 35.423, lng: 75.742 }; // Shigar Fort / Serenge Anchor
const zoom = 9;

// Custom Styling (Monochrome / Earth)
const mapStyles = [
    {
        "elementType": "geometry",
        "stylers": [{ "color": "#f7f7f7" }] // Canvas color
    },
    {
        "elementType": "labels.icon",
        "stylers": [{ "visibility": "off" }]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#616161" }]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#f5f5f5" }]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#bdbdbd" }]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{ "color": "#eeeeee" }]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#757575" }]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{ "color": "#e5e5e5" }]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#9e9e9e" }]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{ "color": "#ffffff" }]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#757575" }]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{ "color": "#dadada" }]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#616161" }]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#9e9e9e" }]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{ "color": "#e5e5e5" }]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{ "color": "#eeeeee" }]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{ "color": "#d9d9d9" }] // Subtle Grey Water
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#9e9e9e" }]
    }
];

// Locations Data
const locations = [
    {
        id: 1,
        name: "Serengé Retreat",
        position: { lat: 35.423, lng: 75.742 },
        desc: "Shigar Valley. Your Sanctuary.",
        type: "retreat"
    },
    {
        id: 2,
        name: "K2 (8611m)",
        position: { lat: 35.881, lng: 76.513 },
        desc: "The Savage Mountain. 4-5 days trek from Askole.",
        type: "landmark"
    },
    {
        id: 3,
        name: "Khosar Gang",
        position: { lat: 35.719, lng: 75.631 },
        desc: "The Guardian Peak (6040m). Visible from the retreat.",
        type: "landmark"
    },
    {
        id: 4,
        name: "Blind Lake (Jarba Xho)",
        position: { lat: 35.362, lng: 75.698 },
        desc: "A mystical lake with no visible inlet or outlet.",
        type: "landmark"
    },
    {
        id: 5,
        name: "Sarfaranga Cold Desert",
        position: { lat: 35.315, lng: 75.753 },
        desc: "The world's highest cold desert.",
        type: "landmark"
    },
];


export default function InteractiveMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Graceful fallback if missing
    });

    const [selectedLocation, setSelectedLocation] = useState<any>(null);

    const containerStyle = {
        width: "100%",
        height: "600px",
    };

    // Memoize options to prevent re-renders
    const options = useMemo(() => ({
        styles: mapStyles,
        disableDefaultUI: true, // Clean look
        zoomControl: true,
    }), []);

    if (!isLoaded) return <div className="w-full h-[600px] bg-stone/20 animate-pulse flex items-center justify-center text-ink-muted">Loading Map...</div>;

    return (
        <div className="w-full h-[600px] bg-stone/10 relative">
            {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
                <div className="absolute top-0 left-0 right-0 bg-red-500/80 text-white text-center text-xs py-1 z-50">
                    Dev Note: Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local
                </div>
            )}

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                options={options}
            >
                {locations.map((loc) => (
                    <MarkerF
                        key={loc.id}
                        position={loc.position}
                        onClick={() => setSelectedLocation(loc)}
                        // Custom icons can be added here later (e.g. svg paths)
                        icon={loc.type === "retreat" ? {
                            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z", // Simple Pin
                            fillColor: "#7A5C3E", // Earth Color
                            fillOpacity: 1,
                            strokeWeight: 1,
                            strokeColor: "#ffffff",
                            scale: 2,
                            anchor: new google.maps.Point(12, 24),
                        } : undefined}
                    />
                ))}

                {selectedLocation && (
                    <InfoWindowF
                        position={selectedLocation.position}
                        onCloseClick={() => setSelectedLocation(null)}
                    >
                        <div className="p-2 max-w-xs">
                            <h3 className="font-serif text-ink text-lg">{selectedLocation.name}</h3>
                            <p className="text-ink-soft text-sm mt-1">{selectedLocation.desc}</p>
                        </div>
                    </InfoWindowF>
                )}
            </GoogleMap>
        </div>
    );
}
