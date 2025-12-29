export default function handler(req, res) {
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

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="520" height="70">
    <rect
      x="0"
      y="0"
      width="520"
      height="70"
      rx="35"
      ry="35"
      fill="#e60000"
    />
    <text
      x="260"
      y="44"
      text-anchor="middle"
      font-size="22"
      font-weight="600"
      fill="#ffffff"
      font-family="Arial, Helvetica, sans-serif">
      ${text}
    </text>
  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.status(200).send(svg);
}

