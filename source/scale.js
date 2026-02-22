function scale() {
  const configurations = [
    { min: 1400, scale: 3 },
    { min: 786, scale: 2 },
    { min: 567, scale: 1 },
  ];

  const width = window.innerWidth;
  for (const { min, scale } of configurations) {
    if (width >= min) {
      document.documentElement.setAttribute("scale", scale);
      break;
    }
  }
}

scale();

window.addEventListener("resize", scale);
