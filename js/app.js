if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'Service Worker registration failed')
  );
}


// Where in the page will the content be?
const pageContent = document.getElementById('page');

// Where can we go?
const routes = {
  '/': homePage,
  '/welcomescreen2': welcomeScreen2Page,
  '/adddog1': addDog1Page,
  '/adddog2': addDog2Page,
  '/adddog3': addDog3Page,
  '/adddog4': addDog4Page,
  '/adddog5': addDog5Page,
  '/dashboard': dashboardPage,
  // '/credits': creditPage
  // ADD NEW ROUTES HERE THAT POINT TO VIEWS
};

// On load of the application
window.addEventListener('load', (e) => {
  // Draw the first page
  drawPage();

  // If we hit our history button, redraw the page
  window.addEventListener('popstate', event => {
    drawPage();
  });

  // If we clich an Anchor (<a>) in HTML, route to it's HREF value without reloading
  document.addEventListener('click', (e) => {
    if (e.target.nodeName == 'A') {
      e.preventDefault();
      history.pushState(null, '', e.target.pathname);
      drawPage();
    }
  })

  createWeightChart();
  createMoodChart();
});

function drawPage() {
  pageContent.innerHTML = routes[window.location.pathname];
}

function createWeightChart(){
  var weightData = {
    // A labels array that can contain any sort of values
    labels: ['Oct 1', 'Oct 8', 'Oct 15', 'Oct 22', 'Oct 29'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [12.5, 12.8, 13, 13.4, 14]
    ]
  };

  var options = {
    axisY: {
      offset: 60,
      labelInterpolationFnc: function(value) {
        return value + ' lbs'
      },
    }
  } ;

  new Chartist.Line('#weight-chart', weightData, options);
}

function createMoodChart(){
  var moodData = {
    // A labels array that can contain any sort of values
    labels: ['Oct 1', 'Oct 8', 'Oct 15', 'Oct 22', 'Oct 29'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [2, 0, 1, 1, 2]
    ]
  };

  var options = {
    axisY: {
      offset: 60,
      labelInterpolationFnc: function(value) {
        if (value == 0) {
          return 'Sad =('
        }

        if (value == 1) {
          return 'Okay :|'
        }

        if (value == 2) {
          return 'Happy :)'
        }
      },
    }
  } ;

  new Chartist.Line('#mood-chart', moodData, options);
}
