// write js code here if required
function updateTimer() {
      // Get the current date and time
      const now = new Date();

      // Format the date in the required format
      const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

      // Format the time in the required format
      const formattedTime = `${now.getHours()}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;

      // Display the formatted date and time in the <p> tag
      document.getElementById('timer').innerText = `${formattedDate}, ${formattedTime}`;

      // Update the timer every second
      setTimeout(updateTimer, 1000);
    }

    // Function to pad single-digit minutes and seconds with a leading zero
    function padZero(value) {
      return value < 10 ? `0${value}` : value;
    }

    // Initial call to start the timer
    updateTimer();