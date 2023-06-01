//your JS code here. If required.
function displayBrowserInfo() {
      const browserName = navigator.userAgent;
      const browserVersion = navigator.appVersion;

      const browserInfoDiv = document.getElementById("browser-info");
      browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
    }

displayBrowserInfo();