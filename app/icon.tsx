import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const cell: React.CSSProperties = {
    width: 13,
    height: 13,
    borderRadius: 5,
    display: "flex",
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            display: "flex",
            flexWrap: "wrap",
            alignContent: "space-between",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              ...cell,
              background: "linear-gradient(180deg, #2a2e52, #3c416f)",
            }}
          />
          <div
            style={{
              ...cell,
              background: "linear-gradient(180deg, #6a8ced, #a8bdf0)",
            }}
          />
          <div
            style={{
              ...cell,
              background: "linear-gradient(180deg, #9a4ca0, #c56cbf)",
            }}
          />
          <div
            style={{
              ...cell,
              background: "linear-gradient(180deg, #d187c9, #ecaadb)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
