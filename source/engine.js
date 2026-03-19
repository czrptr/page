// userAgent is a lie and web development continues to be a joke
// see https://humanwhocodes.com/blog/2010/01/12/history-of-the-user-agent-string/

function detectEngine() {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes("firefox")) {
    return "gecko";
  }

  if (ua.includes("chrome")) {
    return "chromium";
  }

  if (ua.includes("safari") && !ua.includes("chrome")) {
    return "webkit";
  }

  return "unknown";
}

if (
  detectEngine() == "webkit" &&
  sessionStorage.getItem("safariWarningShown") == null
) {
  alert(
    "🍎 𝗡𝗼𝘁𝗶𝗰𝗲 🍎\n\n" +
      "Your 𝗦𝗮𝗳𝗮𝗿𝗶 browser is 𝗹𝗮𝗴𝗴𝗶𝗻𝗴 𝗯𝗲𝗵𝗶𝗻𝗱. " +
      "Modern web standards that work perfectly in other browsers just... 𝗱𝗼𝗻'𝘁 𝘄𝗼𝗿𝗸 here. " +
      "𝗔𝗽𝗽𝗹𝗲 refuses to keep 𝗦𝗮𝗳𝗮𝗿𝗶 up to date, and I refuse to spend my time fixing their problems.\n\n" +
      "This site, and most of the internet, works better anywhere else! " +
      "Please try 𝗙𝗶𝗿𝗲𝗳𝗼𝘅, 𝗖𝗵𝗿𝗼𝗺𝗲, or 𝗘𝗱𝗴𝗲 instead. 🚀",
  );

  sessionStorage.setItem("safariWarningShown", true);
}

document.documentElement.setAttribute("engine", detectEngine());
