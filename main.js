function countdownTimer() {
       setInterval(countdownTimer, 1000);
  const difference = +new Date("2021-01-01") - +new Date();
  let remaining = "Go get a job!";

  if (difference > 0) {
    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    remaining = Object.keys(parts)
      .map((part) => {
        if (!parts[part]) return;
        return `${parts[part]} ${part}`;
      })
      .join(" ");
  }

  document.getElementById("countdown").innerHTML = remaining;

};

