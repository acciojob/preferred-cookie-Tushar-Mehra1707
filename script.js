//your JS code here. If required.
 function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function applyPreferences() {
      const savedFontSize = getCookie('fontsize');
      const savedFontColor = getCookie('fontcolor');

      if (savedFontSize) {
        document.documentElement.style.setProperty('--fontsize', `${savedFontSize}px`);
        document.getElementById('fontsize').value = savedFontSize;
      }

      if (savedFontColor) {
        document.documentElement.style.setProperty('--fontcolor', savedFontColor);
        document.getElementById('fontcolor').value = savedFontColor;
      }
    }

    document.getElementById('preferencesForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const fontsize = document.getElementById('fontsize').value;
      const fontcolor = document.getElementById('fontcolor').value;
      document.cookie = `fontsize=${fontsize}; path=/; max-age=${30 * 24 * 60 * 60}`;
      document.cookie = `fontcolor=${fontcolor}; path=/; max-age=${30 * 24 * 60 * 60}`;
      document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
      document.documentElement.style.setProperty('--fontcolor', fontcolor);
    });
    window.addEventListener('DOMContentLoaded', applyPreferences);
  