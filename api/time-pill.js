import { createCanvas } from "canvas";

export default function handler(req, res) {
  const width = 520;
  const height = 70;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "#e60000";
  ctx.beginPath();
  ctx.roundRect(0, 0, width, height, 35);
  ctx.fill();

  const now = new Date();
  const text = now.toLocaleString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 22px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.send(canvas.toBuffer("image/png"));
}
