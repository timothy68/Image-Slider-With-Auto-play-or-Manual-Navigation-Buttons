function autoRun() {
  var counter = 1;
  setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 3000);
}

// Call the function to start auto-running upon page load
autoRun();
