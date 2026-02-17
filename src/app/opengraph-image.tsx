import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tuhin Roy - Senior Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            TR
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              letterSpacing: "0.05em",
            }}
          >
            roy.dev
          </div>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "16px",
            background: "linear-gradient(90deg, #ffffff 0%, #c7d2fe 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Tuhin Roy
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#a78bfa",
            fontWeight: 500,
            marginBottom: "24px",
          }}
        >
          Senior Backend Engineer
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          6.5+ years building scalable backend systems with Node.js, TypeScript & AWS
        </div>
      </div>
    ),
    { ...size }
  );
}
