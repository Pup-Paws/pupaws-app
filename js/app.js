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

var previousMonth = 0;
var tasks = [
  {name:"Feed the dog", complete:0},
  {name:"Cut the grass", complete:0}
];
// Improvements: Tasks should be an Object

var current_dog_id = 1;

var moods = ["Sad =(", "Okay :|", "Happy :)"];

var dog = [
  {id: 1, name: "Merlin", breed: "Chihuahua x Jack Russel", date: {y:2018, m:10, d:1}, gender: "Male", photo: "dog1.jpg"},
  {id: 2, name: "Charles Barkly", breed: "American Bulldog", date: {y:2016, m:04, d:29}, gender: "Female", photo: "dog2.jpg"},
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
  {id: 1, title: "Bravecto", date: {y:2018, m:10, d:01}, status: 0, dog_id: 1  },
  {id: 2, title: "Heart Guard", date: {y:2018, m:10, d:03}, status: 0, dog_id: 1  },
  {id: 3, title: "Vet Appointment", date: {y:2018, m:10, d:5}, status: 0, dog_id: 1  },
  {id: 4, title: "Clean Ears", date: {y:2018, m:10, d:07}, status: 0, dog_id: 1  },
  {id: 5, title: "Dewormer", date: {y:2018, m:10, d:01}, status: 0, dog_id: 1  },
  {id: 6, title: "Grooming", date: {y:2018, m:10, d:06}, status: 0, dog_id: 1  },
]

var activities_history = [
  {
    id: 1,
    title: "Afternoon jog",
    description: "It was a nice jog in the park!",
    photo: "image1.jpg",
    date: {y:2018, m:10, d:1},
    status: 0,
    mood_history_id: 2,
    dog_id:1,
  },

  {
    id: 2,
    title: "Visited Grandma",
    description: "Charles was really calm but, happy to see grandma",
    photo: "image1.jpg",
    date: {y:2018, m:10, d:1},
    status: 0,
    mood_history_id: 2,
    dog_id:1,
  },

  {
    id: 3,
    title: "Dog Park Vist",
    description: "Played in the park with both Charles and Merlin",
    photo: "image1.jpg",
    date: {y:2018, m:10, d:1},
    status: 0,
    mood_history_id: 2,
    dog_id:1,
  },

  {
    id: 4,
    title: "Morning Run in Snow",
    description: "Charles was not happy in the snow",
    photo: "image1.jpg",
    date: {y:2018, m:10, d:1},
    status: 0,
    mood_history_id: 0,
    dog_id:1,
  },

  {
    id: 5,
    title: "Morning Run in Snow",
    description: "Charles was not happy in the snow",
    photo: "image1.jpg",
    date: {y:2018, m:9, d:1},
    status: 0,
    mood_history_id: 0,
    dog_id:1,
  },

  {
    id: 5,
    title: "Morning Run in Snow",
    description: "Charles was not happy in the snow",
    photo: "image1.jpg",
    date: {y:2018, m:8, d:1},
    status: 0,
    mood_history_id: 0,
    dog_id:1,
  },

  {
    id: 5,
    title: "Morning Run in Snow",
    description: "Charles was not happy in the snow",
    photo: "image1.jpg",
    date: {y:2018, m:8, d:1},
    status: 0,
    mood_history_id: 0,
    dog_id:1,
  }

]

document.getElementById('page').addEventListener('page', function (e) {
  componentHandler.upgradeDom();

  if(currPage == '/dashboard'){
    populateReminders();
    createWeightChart();
    createMoodChart();


  } else if (currPage == '/addreminder'){
    document.getElementById('addReminderButton').addEventListener('click', saveReminder);

  } else if (currPage == '/addweight'){
    document.getElementById('addWeightButton').addEventListener('click', saveWeight);

  }else if (currPage == '/addmood'){
    document.getElementById('addMoodButton').addEventListener('click', saveMood);

  }else if (currPage == '/journal') {
    populateJournal();

  } else if (currPage == '/addDog2Page') {

  } else if (currPage == '/addDog3Page') {

  } else if (currPage == '/addDog4Page') {

  } else if (currPage == '/addDog5Page') {

  } else if (currPage == '/addDog6Page') {

  } else if (currPage == '/addDog7Page') {

  } else if (currPage == '/addReminderPage') {

  } else if (currPage == '/addWeightPage') {

  } else if (currPage == '/journalAddPage') {

  }
}, false);

function populateReminders(){
  var remindersList = document.getElementById('reminders-list');
  var _reminders = reminders.filter(function(reminder) {return reminder.dog_id == current_dog_id;});
  remindersList.innerHTML = _reminders.map(makeReminder).join('\n');
}

function populateJournal(){
  var journalList = document.getElementById('journal-list');
  var _activities_history = activities_history.filter(function(activity) {return activity.dog_id == current_dog_id;});

  // Sort data first
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  for (var i = 12; i >= 1; i--) {
    // filter to this month
    var _monthly_activities = _activities_history.filter(_record => _record.date.m == i);

    var monthsectionHTML = document.createElement('section');
    monthsectionHTML.className = 'monthly-entries';
    monthsectionHTML.innerHTML = `<div class="month-title"><h3>${months[i-1]}</h3></div>`
    journalList.appendChild(monthsectionHTML);

    if (_monthly_activities.length) {
      var activitiesHTML = document.createElement('ul');
      activitiesHTML.innerHTML = _monthly_activities.map(makeActivityItem).join('\n');
      monthsectionHTML.appendChild(activitiesHTML);
    }
    else {
      monthsectionHTML.innerHTML += `<p class="not-found">There are no activities for this month.</p>`;
    }
  }
}

function makeActivityItem(activity, index){
  activityListItem = `<li class="activity-entry">
    <div class="entry-photo">
      <img src="../images/dogs/${activity.dog_id}/${activity.photo}" alt="">
    </div>
    <div class="entry-text">
      <h4 class="date">${activity.date.y}-${activity.date.m}-${activity.date.d}</h4>
      <p class="title">${activity.title}</p>
      <p class="description">${activity.description}</p>
    </div>
  </li>`;

  return activityListItem;
}

function makeReminder(reminder) {
  // For now, use a standard date format. But later we can use moment.js
  return `
    <li class="reminder-item">
      <p class="reminder-date">${reminder.date.y}-${reminder.date.m}-${reminder.date.d}</p>
      <p class="reminder-description">${reminder.title}</p>
      <div class="checkbox">
        <label for="checkbox-done${reminder.id}">
          <input id="checkbox-done${reminder.id}" type="checkbox" class="checkbox-done" />
          <span></span>
        </label>
      </div>
    </li>`;
}

function saveReminder(){
  var reminderDescription = document.getElementById('reminder-description-input');
  var reminderDay = document.getElementById('day-input');
  var reminderMonth = document.getElementById('month-input');
  var reminderYear = document.getElementById('year-input');

  reminderToBeSaved = {
    title: reminderDescription.value,
    date: {y:reminderYear.value, m:reminderMonth.value, d:reminderDay.value},
    status: 0,
    dog_id: 1
  }

  reminders.push(reminderToBeSaved);
  goToPage('/dashboard');
}

function saveWeight(){
  var _weight = document.getElementById('weight-input');
  var today = new Date();

  weightToBeSaved = {
    weight: _weight.value,
    date: {y:today.getFullYear(), m:today.getMonth()+1, d:today.getDate()},
    dog_id: 1
  }

  weight_history.push(weightToBeSaved);
  goToPage('/dashboard');
}

function saveMood(){
  var checkedValue = document.querySelector('.mood-input:checked').value;
  var today = new Date();

  moodToBeSaved = {
    mood_id: checkedValue,
    date: {y:today.getFullYear(), m:today.getMonth()+1, d:today.getDate()},
    dog_id: 1
  }

  mood_history.push(moodToBeSaved);
  goToPage('/dashboard');
}



// ------------------------------- FUNCTIONS TO CREATE CHARTS -------------
function createWeightChart(){
  var _weightEntries = weight_history.map(weight_entry => weight_entry.weight);
  var _weightDates = weight_history.map(weight_entry => `${weight_entry.date.d}-${weight_entry.date.m}`);

  var weightData = {
    labels: _weightDates,
    series: [
      _weightEntries
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
  var _moodEntries = mood_history.map(mood_entry => mood_entry.mood_id);
  var _moodDates = mood_history.map(mood_entry => `${mood_entry.date.d}-${mood_entry.date.m}`);

  var moodData = {
    labels: _moodDates,
    series: [
      _moodEntries
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
