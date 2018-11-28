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

var current_dog_id = 1;

var moods = ["Sad =(", "Okay :|", "Happy :)"];

var dog = [
  {id: 1, name: "Merlin", breed: "Chihuahua x Jack Russel", date: {y:2018, m:10, d:1}, gender: "Male", photo: "dog1.jpg"},
  // TASK: CREATE MORE DOGS HERE
];

var weight_history = [
  {id: 1, weight: 12.5, date: {y:2018, m:10, d:1} },
  {id: 2, weight: 12.8, date: {y:2018, m:10, d:8} },
  {id: 3, weight: 13, date: {y:2018, m:10, d:15} },
  {id: 4, weight: 13.5, date: {y:2018, m:10, d:22} },
  {id: 5, weight: 12.6, date: {y:2018, m:10, d:29} }
]

var mood_history = [
  {id: 1, mood_id: 0, date: {y:2018, m:10, d:1} },
  {id: 2, mood_id: 1, date: {y:2018, m:10, d:8} },
  {id: 3, mood_id: 1, date: {y:2018, m:10, d:15} },
  {id: 4, mood_id: 2, date: {y:2018, m:10, d:22} },
  {id: 5, mood_id: 1, date: {y:2018, m:10, d:29} }
]

var reminders = [
  {id: 1, title: "Bravecto", date: {y:2018, m:10, d:1}, status: 0, dog_id: 1 },
  // TASK: CREATE MORE SAMPLE REMINDERS HERE
]

var activities_history = [
  {
    id: 1,
    title: "Afternoon jog",
    description: "It was a nice jog in the park!",
    photo: "image1.jpg",
    date: {y:2018, m:10, d:1},
    status: 0,
    mood_history_id: 2
  },
  // TASK: CREATE MORE SAMPLE ACTIVITIES HERE
]



// CREATE FUNCTIONS FOR THINGS THAT REPEAT ON SCREEN: ACTIVITIES & REMINDERS

function makeReminder(reminder) {
  // For now, use a standard date format. But later we can use moment.js

  return `
    <li class="reminder-item">
      <p class="reminder-date">${reminder.date.y}-${reminder.date.m}-${reminder.date.d}</p>
      <p class="reminder-description">Give Merlin the Heartgard pill</p>
      <div class="checkbox">
        <label for="checkbox-done1">
          <input id="checkbox-done1" type="checkbox" class="checkbox-done" />
          <span></span>
        </label>
      </div>
    </li>`;
}



// DATA UPDATER:
// Fires every time a page changes
document.getElementById('page').addEventListener('page', function (e) {
  // If the current page is the todoListPage, grab the data for it
  // This needs some improvement

  componentHandler.upgradeDom();

  if(currPage == '/dashboard'){
    populateReminders();
    createWeightChart();
    createMoodChart();
  }
  else if (currPage == '/addDog1Page') {

  } else if (currPage == '/addDog2Page') {

  } else if (currPage == '/addDog3Page') {

  } else if (currPage == '/addDog4Page') {

  } else if (currPage == '/addDog5Page') {

  } else if (currPage == '/addDog6Page') {

  } else if (currPage == '/addDog7Page') {

  } else if (currPage == '/addReminderPage') {

  } else if (currPage == '/addWeightPage') {

  } else if (currPage == '/journalAddPage') {





    // // Now setup the click listener on the button to add a new task
    // document.getElementById('addtask').addEventListener('click', function() {
    //   // Create a new task based on the user's input value (this is ugly)
    //   var newTask = {name:document.getElementById('newtask').value, complete:0};
    //   // Add to our "dataset"
    //   tasks.push(newTask);
    //   // createTask creates a new task
    //   taskList.innerHTML += createTask(newTask);
    //   // Could also trigger a refresh when the task data is changed (then task data should be a class!!)
    // });
}, false);

function populateReminders(){
  var remindersList = document.getElementById('reminders-list');
  var _reminders = reminders.filter(function(reminder) {return reminder.dog_id == current_dog_id;});
  remindersList.innerHTML = _reminders.map(makeReminder).join('\n');
}


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
