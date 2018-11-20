if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'Service Worker registration failed')
  );
}

// Where can we go?
const routes = {
  '/welcomescreen1': welcomescreen1Page,
  '/welcomescreen2': welcomeScreen2Page,
  '/adddog1': addDog1Page,
  '/adddog2': addDog2Page,
  '/adddog3': addDog3Page,
  '/adddog4': addDog4Page,
  '/adddog5': addDog5Page,
  '/adddog6': addDog6Page,
  '/adddog7': addDog7Page,
  '/adddog8': addDog8Page,
  '/dashboard': dashboardPage,
  '/journal': journalPage,
  '/journaladd': journalAddPage,
  '/profile': profilePage,
  '/addreminder': addReminderPage,
  '/addweight': addWeightPage,
  '/addmood': addMoodPage,
  // '/credits': creditPage
  // ADD NEW ROUTES HERE THAT POINT TO VIEWS
};


// Temporary data, replace with cached data:
// https://developers.google.com/web/ilt/pwa/live-data-in-the-service-worker
// https://github.com/jakearchibald/idb (https://www.npmjs.com/package/idb)
var tasks = [
  {name:"Feed the dog", complete:0},
  {name:"Cut the grass", complete:0}
];
// Improvements: Tasks should be an Object



// DATA UPDATER:
// Fires every time a page changes
document.getElementById('page').addEventListener('page', function (e) {
  // If the current page is the todoListPage, grab the data for it
  // This needs some improvement

  if(currPage == '/dashboard'){
    createWeightChart();
    createMoodChart();
  }

  componentHandler.upgradeDom();

  if (currPage == '/todolist') {
    // Find the main task list
    var taskList = document.getElementById('taskList');
    // For each task, call createTask and join them all together with a linebreak between
    taskList.innerHTML = tasks.map(createTask).join('\n');

    // Now setup the click listener on the button to add a new task
    document.getElementById('addtask').addEventListener('click', function() {
      // Create a new task based on the user's input value (this is ugly)
      var newTask = {name:document.getElementById('newtask').value, complete:0};
      // Add to our "dataset"
      tasks.push(newTask);
      // createTask creates a new task
      taskList.innerHTML += createTask(newTask);

      // Could also trigger a refresh when the task data is changed (then task data should be a class!!)
    });
  }
}, false);


// -------------------------------------- OLD CODE

// // Functions for each chunk of repeating data
// function createTask(task) {
//   return `<li class="task">${task.name}</li>`;
// }
//
// // On load of the application
// window.addEventListener('load', (e) => {
//   // Draw the first page
//   drawPage();
//
//   // If we hit our history button, redraw the page
//   window.addEventListener('popstate', event => {
//     drawPage();
//   });
//
//   // If we clich an Anchor (<a>) in HTML, route to it's HREF value without reloading
//   document.addEventListener('click', (e) => {
//     if (e.target.nodeName == 'A') {
//       e.preventDefault();
//       history.pushState(null, '', e.target.pathname);
//       drawPage();
//     }
//   })
//
//   createWeightChart();
//   createMoodChart();
// });
//
// function drawPage() {
//   pageContent.innerHTML = routes[window.location.pathname];
// }












// ------------------------------- FUNCTIONS TO CREATE CHARTS -------------

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
        if (value == 0) { return 'Sad =(' }
        if (value == 1) { return 'Okay :|'}
        if (value == 2) { return 'Happy :)'}
      },
    }
  } ;

  new Chartist.Line('#mood-chart', moodData, options);
}
