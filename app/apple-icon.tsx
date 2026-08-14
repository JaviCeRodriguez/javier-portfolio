import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#302c28",
          color: "#faf7f0",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          fontSize: 88,
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-10px",
          position: "relative",
          width: "100%",
        }}
      >
        JR
        <div style={{ background: "#e47b34", bottom: 20, height: 7, position: "absolute", width: 106 }} />
      </div>
    ),
    size,
  );
}
