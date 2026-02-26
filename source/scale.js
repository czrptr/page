function scale() {
  const configurations = [
    { min: 1400, scale: 3 },
    { min: 768, scale: 2 },
    { min: 567, scale: 1 },
  ];

  const dimention =
    window.innerWidth < window.innerHeight
      ? window.innerWidth
      : window.innerHeight;

  for (const { min, scale } of configurations) {
    if (dimention >= min) {
      document.documentElement.setAttribute("scale", scale);
      break;
    }
  }
}

scale();

window.addEventListener("resize", scale);
