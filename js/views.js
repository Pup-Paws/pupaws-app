let welcomescreen1Page = `
  <div class="content-wrapper setup">
    <header>
      <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
    </header>

    <div class="setup-content card">
      <div class="back-and-page">
        <p class="steps">1/2</p>
      </div>
      <h2>Welcome To Pup Paws</h2>
      <p class="centered-copy">We understand the love each owner has for their dog as they are an intimate extension of the family and should be treated as such. Our realization is that with furry friends, comes added responsibility to the owner’s daily schedule. This can cause added stress for owners of pets with medical conditions or disabilities of any sort. Here at PupPaws, we strive to serve your needs by offering an intuitive service, organizing, archiving, scheduling, and capable of sending formatted data to your veterinarian, through your busy work week, all at the touch of a finger.</p>
      <a href="/welcomescreen2" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Continue</a>
    </div>
  </div>
`;


let welcomeScreen2Page = `
<div class="content-wrapper setup">
  <header>
    <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
  </header>

  <div class="setup-content card">
    <div class="back-and-page">
      <p class="steps">2/2</p>
      <a href="/welcomescreen1" class="back">< back</a>
    </div>
    <h2>Welcome To Pup Paws</h2>
    <p class="centered-copy">First off we’re going to set up your profile, and your dog’s profile! You can update this information at any time! And, we promise to keep your information and your dog’s information strictly confidential!</p>
    <div class="setup-actions">
      <a href="/dashboard" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">skip</a>
      <a href="/adddog1" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Set Up Now</a>
    </div>

  </div>
</div>
`;


let addDog1Page = `
<section class="content-wrapper setup">
  <header>
    <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
  </header>

  <div class="setup-content card">
    <h2>What is your name?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" id="first-name-input">
      <label class="mdl-textfield__label" for="first-name-input">First Name</label>
    </div>

    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" id="last-name-input">
      <label class="mdl-textfield__label" for="last-name-input">Last Name</label>
    </div>

    <div class="setup-actions">
      <a href="/welcomescreen2" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">back</a>
      <a href="/adddog2" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="ownerInfo">Continue</a>
    </div>
  </div>
</section>

`;


let addDog2Page = `
<section class="content-wrapper setup">
  <header>
    <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
  </header>

  <div class="setup-content card">
    <h2>What is your pet's name?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" id="pet-name-input">
      <label class="mdl-textfield__label" for="pet-name-input">Pet Name</label>
    </div>
    <div class="setup-actions">
      <a href="/adddog1" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">back</a>
      <a href="/adddog3" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Continue</a>
    </div>
  </div>
</section>

`;


let addDog3Page = `
<section class="content-wrapper setup">
  <header>
    <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
  </header>

  <div class="setup-content card">
    <h2>What type of breed is Buddy?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" id="breed-input">
      <label class="mdl-textfield__label" for="breed-input">Breed</label>
    </div>
    <div class="setup-actions">
      <a href="/adddog2" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">back</a>
      <a href="/adddog4" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Continue</a>
    </div>
  </div>
</section>
`;


let addDog4Page = `
<section class="content-wrapper setup"><section>
  <header>
    <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
  </header>

  <div class="setup-content card">
    <h2>What is Buddy's date of birth?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="day-input">
      <label class="mdl-textfield__label" for="day-input">DD</label>
    </div>

    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="month-input">
      <label class="mdl-textfield__label" for="month-input">MM</label>
    </div>

    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="year-input">
      <label class="mdl-textfield__label" for="year-input">YYYY</label>
    </div>
    <div class="setup-actions">
      <a href="/adddog3" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">back</a>
      <a href="/adddog5" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Continue</a>
    </div>
  </div>
</section>

`;


let addDog5Page = `
<section class="content-wrapper setup">
  <header>
    <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
  </header>

  <div class="setup-content card">
    <h2>What is Buddy's gender?</h2>
    <div class="select-gender">
      <label class="gender-form-label" for="female-radio">
        <input type="radio" id="female-radio" class="gender-input" name="options" value="female" checked>
        <i class="fas fa-venus"></i>
      </label>

      <label class="gender-form-label" for="male-radio">
        <input type="radio" id="male-radio" class="gender-input" name="options" value="male">
        <i class="fas fa-mars"></i>
      </label>
    </div>

    <div class="setup-actions">
      <a href="/adddog4" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">back</a>
      <a href="/adddog8" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Continue</a>
    </div>
  </div>
</section>
`;

let addDog6Page = `
<!-- <section class="content-wrapper setup">
  <header>
    <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
  </header>

  <div class="setup-content card">
    <h2>What kind of food does Buddy eat?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="weight-input">
      <label class="mdl-textfield__label" for="food-input">Brand Name & Flavour</label>
    </div>

    <h2>How many times a day does Buddy eat?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="weight-input">
      <label class="mdl-textfield__label" for="meal-quantity-input">Number of Servings</label>
    </div>

    <h2>How much does Buddy eat (in grams)?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="weight-input">
      <label class="mdl-textfield__label" for="serving-quantity-input">Grams of Food</label>
    </div>

    <div class="setup-actions">
      <a href="/adddog5" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">back</a>
      <a href="/adddog7" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Continue</a>
    </div>
  </div>
</section> -->
`;

let addDog7Page = `
<!-- <section class="content-wrapper setup">
  <div class="setup-content card">
    <h2>What kind of medication does Buddy take?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="weight-input">
      <label class="mdl-textfield__label" for="food-input">Brand Name & Flavour</label>
    </div>

    <h2>How many times a day does Buddy take the medication?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="weight-input">
      <label class="mdl-textfield__label" for="meal-quantity-input">Number of Servings</label>
    </div>

    <h2>What is the dosage of medication?</h2>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="weight-input">
      <label class="mdl-textfield__label" for="serving-quantity-input">Grams of Food</label>
    </div>

    <div class="setup-actions">
      <a href="/adddog5" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">back</a>
      <a href="/dashboard" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Finish</a>
    </div>
  </div>
</section> -->
`;


let addDog8Page = `
<section class="content-wrapper setup">
  <header>
    <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
  </header>

  <div class="setup-content card">
    <h2>Upload your pet's photo.</h2>
    <span class="btn btn-default btn-file">
        Click here to choose a photo <input type="file" id="fileSelector">
    </span>

    <div id="image-here"></div>

    <div class="setup-actions">
      <a href="/adddog5" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">back</a>
      <a href="/dashboard" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Finish</a>
    </div>
  </div>
</section>
`;

/*let addDog8Page = `
<!-- <section class="content-wrapper setup">
  <header>
    <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
  </header>

  <div class="setup-content card">
    <h2>Would you like to add another dog?</h2>

    <div class="setup-actions">
      <a href="/dashboard" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">No</a>
      <a href="/adddog2" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Yes</a>
    </div>
  </div>
</section> -->
`;*/

let dashboardPage = `
<div class="content-wrapper title">
    <!-- <h2>Dashboard</h2> -->
</div>
<section class="dog-summary-card">
  <img alt="Merlin" class="dog-photo" id="dog-photo" style="display:none"/>
  <div class="dog-info">
    <p class="dog-name">Merlin</p>
    <p class="dog-age">2 years old</p>
  </div>
</section>

<section class="dashboard-section reminders-section">
  <div class="dashboard-section-header">
      <h4>Reminders</h4>
      <a href="/addreminder"><i class="fas fa-plus"></i></a>
  </div>

  <ul class="reminders-list" id="reminders-list">
    <!-- <li class="reminder-item">
      <p class="reminder-date">3 days ago</p>
      <p class="reminder-description">Give Merlin the Heartgard pill</p>
      <div class="checkbox">
        <label for="checkbox-done1">
          <input id="checkbox-done1" type="checkbox" class="checkbox-done" />
          <span></span>
        </label>
      </div>
    </li>
    <li class="reminder-item">
      <p class="reminder-date">Tomorrow</p>
      <p class="reminder-description">Annual vaccination</p>
      <div class="checkbox">
        <label for="checkbox-done2">
          <input id="checkbox-done2" type="checkbox" class="checkbox-done" />
          <span></span>
        </label>
      </div>
    </li>
    <li class="reminder-item">
      <p class="reminder-date">10/12/2018</p>
      <p class="reminder-description">Bravecto</p>
      <div class="checkbox">
        <label for="checkbox-done3">
          <input id="checkbox-done3" type="checkbox" class="checkbox-done" />
          <span></span>
        </label>
      </div>
    </li> -->
  </ul>
</section>

<section class="dashboard-section weight-history-section">
  <div class="dashboard-section-header">
      <h4>Weight History</h4>
      <a href="/addweight"><i class="fas fa-plus"></i></a>
  </div>
  <div class="dashboard-chart weight-chart">
    <div class="ct-chart ct-perfect-fourth" id="weight-chart"></div>
  </div>
  <!-- <div class="see-details">
    <a href="#">See More</a>
  </div> -->
</section>

<section class="dashboard-section mood-history-section">
  <div class="dashboard-section-header">
      <h4>Mood History</h4>
      <a href="/addmood"><i class="fas fa-plus"></i></a>
  </div>
  <div class="dashboard-chart mood-chart">
    <div class="ct-chart ct-perfect-fourth" id="mood-chart"></div>
  </div>
  <!-- <div class="see-details">
    <a href="#">See More</a>
  </div> -->
</section>
`;

let addMoodPage = `
<section class="content-wrapper setup">
  <div class="setup-content card">
    <section >
      <form action="#">
        <h2>How is Buddy feeling today?</h2>
        <div class="select-mood">
          <label class="mood-form-label" for="sad-radio">
            <input type="radio" id="sad-radio" class="mood-input" name="options" value="0" checked>
            <i class="far fa-frown"></i>
          </label>

          <label class="mood-form-label" for="meh-radio">
            <input type="radio" id="meh-radio" class="mood-input" name="options" value="1">
            <i class="far fa-meh"></i>
          </label>

          <label class="mood-form-label" for="happy-radio">
            <input type="radio" id="happy-radio" class="mood-input" name="options" value="2">
            <i class="far fa-smile"></i>
          </label>
        </div>
      </form>
    </section>
    <div class="setup-actions">
      <a href="/dashboard" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</a>
      <button type="button" id="addMoodButton" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Save</button>
    </div>
  </div>
</section>
`;

let addWeightPage = `
<section class="content-wrapper setup">
  <div class="setup-content card">
    <section >
      <form action="#">
        <h2>How much is Buddy weighing today?</h2>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="weight-input">
          <label class="mdl-textfield__label" for="breed-input">Current weight</label>
        </div>
      </form>
    </section>
    <div class="setup-actions">
      <a href="/dashboard" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</a>
      <button type="button" id="addWeightButton" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Save</button>
    </div>
  </div>
</section>
`;

let addReminderPage = `
<section class="content-wrapper setup">
  <div class="setup-content card">
    <section >
      <form action="#">
        <h2>What do you want to be reminded of?</h2>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="reminder-description-input">
          <label class="mdl-textfield__label" for="first-name-input">Reminder description</label>
        </div>

        <h2>When do you want to be reminded?</h2>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="day-input">
          <label class="mdl-textfield__label" for="day-input">DD</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="month-input">
          <label class="mdl-textfield__label" for="month-input">MM</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="year-input">
          <label class="mdl-textfield__label" for="year-input">YYYY</label>
        </div>
      </form>
    </section>
    <div class="setup-actions">
      <a href="/dashboard" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</a>
      <button type="button" id="addReminderButton" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Save</button>
    </div>
  </div>
</section>
`;


let journalPage = `
<div class="journal-list" id="journal-list">

</div>
<div class="action-add-button">
  <a href="/journaladd" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
    <i class="material-icons">add</i>
  </a>
</div>
`;

/* <section class="monthly-entries">
   <div class="month-title">
    <h3>October</h3>
  </div>
  <div class="activities-list">
    <ul>
      <li class="activity-entry">
        <div class="entry-photo">
          <img src="http://placekitten.com/70/70" alt="">
        </div>
        <div class="entry-text">
          <h4 class="date">October 21, 2018</h4>
          <p class="title">Very Energetic!</p>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </li>
      <li class="activity-entry">
        <div class="entry-photo">
          <img src="http://placekitten.com/70/70" alt="">
        </div>
        <div class="entry-text">
          <h4 class="date">October 20, 2018</h4>
          <p class="title">Very Energetic!</p>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </li>
    </ul>
  </div>
</section>
<section class="monthly-entries">
  <div class="month-title">
    <h3>September</h3>
  </div>
  <div class="activities-list">
    <ul>
      <li class="activity-entry">
        <div class="entry-photo">
          <img src="http://placekitten.com/70/70" alt="">
        </div>
        <div class="entry-text">
          <h4 class="date">September 09, 2018</h4>
          <p class="title">Lorem Ipsum</p>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </li>
    </ul>
  </div>
</section>
<section class="monthly-entries">
  <div class="month-title">
    <h3>August</h3>
  </div>
  <div class="activities-list">
    <ul>
      <li class="activity-entry">
        <div class="entry-photo">
          <img src="http://placekitten.com/70/70" alt="">
        </div>
        <div class="entry-text">
          <h4 class="date">August 09, 2018</h4>
          <p class="title">Lorem Ipsum</p>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </li>
    </ul>
  </div>
</section> */


let journalAddPage = `
<section class="content-wrapper setup">
  <div class="setup-content card">
    <section >
      <form action="#">
        <h2>Log activity</h2>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input class="mdl-textfield__input" type="text" id="weight-input">
          <label class="mdl-textfield__label" for="food-input">Activity title</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <textarea class="mdl-textfield__input" type="text" rows= "1" id="sample5" ></textarea>
          <label class="mdl-textfield__label" for="sample5">Description</label>
        </div>
        <div class="select-mood">
          <label class="mood-form-label" for="sad-radio">
            <input type="radio" id="sad-radio" class="mood-input" name="options" value="0" checked>
            <i class="far fa-frown"></i>
          </label>

          <label class="mood-form-label" for="meh-radio">
            <input type="radio" id="meh-radio" class="mood-input" name="options" value="1">
            <i class="far fa-meh"></i>
          </label>

          <label class="mood-form-label" for="happy-radio">
            <input type="radio" id="happy-radio" class="mood-input" name="options" value="2">
            <i class="far fa-smile"></i>
          </label>
        </div>
        <div>
          <h2>When did the activity happen?</h2>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="day-input">
            <label class="mdl-textfield__label" for="day-input">DD</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="month-input">
            <label class="mdl-textfield__label" for="month-input">MM</label>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" pattern="-?[0-9]*(\.[0-9]+)?" type="text" id="year-input">
            <label class="mdl-textfield__label" for="year-input">YYYY</label>
          </div>
        </div>
      </form>
    </section>
    <div class="setup-actions">
      <a href="/journal" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</a>
      <button type="button" id="addActivityButton" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Save</button>
    </div>
  </div>
</section>
`;

let profilePage = `
<div class="content-wrapper">
  <div class="owner-info">
    <img src="https://fillmurray.com/300/300" alt="" class="profile-image"/>
    <h3 id="owner-name">Bill Murray</h3>
  </div>
  <div class="dogs-info">
    <ul>
      <li>
        <img src="../images/merlin.jpg" alt="" class="dog-photo"/>
        <h4>Merlin</h3>
        <a href="#" class="delete"><i class="fas fa-times"></i></a>
      </li>
      <li>
        <img src="../images/merlin.jpg" alt="" class="dog-photo"/>
        <h4>Gandalf</h3>
        <a href="#" class="delete"><i class="fas fa-times"></i></a>
      </li>
    </ul>
  </div>
</div>
`;
