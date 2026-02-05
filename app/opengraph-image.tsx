import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Serengé Retreat";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#F7F7F7",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "200px",
                        height: "200px",
                        borderRadius: "100px",
                        background: "#7A5C3E",
                        color: "#F7F7F7",
                        fontSize: "80px",
                        marginBottom: "40px",
                    }}
                >
                    S
                </div>
                <div style={{ fontSize: "60px", color: "#1F1F1F" }}>SERENGÉ RETREAT</div>
                <div style={{ fontSize: "30px", color: "#6B6B6B", marginTop: "20px", textTransform: "uppercase", letterSpacing: "4px" }}>
                    Karakoram · Baltistan
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
