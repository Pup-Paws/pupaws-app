let homePage = `
  <div class="content-wrapper setup">
    <header>
      <img src="images/logo_500px.png" alt="dog icon" class="dog-logo">
    </header>

    <div class="setup-content card">
      <div class="back-and-page">
        <p class="steps">1/2</p>
      </div>
      <h2>Welcome To Pup Paws</h2>
      <p class="centered-copy">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
      <a href="/" class="back">< back</a>
    </div>
    <h2>Welcome To Pup Paws</h2>
    <p class="centered-copy">Now we're gonna set up: dog, food, med.<br />And also a lot of other stuff.<br/>And some other stuff as well!</p>
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
      <a href="welcome-screen2.html" class="skip-button mdl-button mdl-js-button mdl-js-ripple-effect">back</a>
      <a href="/adddog2" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Continue</a>
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
      <a href="/dashboard" class="setup-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Continue</a>
    </div>
  </div>
</section>
`;



let dashboardPage = `
<section class="dog-summary-card mdl-card mdl-shadow--2dp">
  <img src="images/merlin.jpg" alt="Merlin" class="dog-photo"/>
  <h3>Merlin</h3>
  <p class="dog-age">2 years old</p>
</section>

<section class="dashboard-section reminders-section">
  <h4>Reminders</h4>
  <ul class="reminders-list">
    <li class="reminder-item">
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
    </li>
  </ul>
</section>

<section class="dashboard-section weight-history-section">
  <h4>Weight History</h4>
  <div class="weight-chart">
    <div class="ct-chart ct-perfect-fourth" id="weight-chart"></div>
  </div>
  <!-- <div class="see-details">
    <a href="#">See More</a>
  </div> -->
</section>

<section class="dashboard-section mood-history-section">
  <h4>Mood History</h4>
  <div class="mood-chart">
    <div class="ct-chart ct-perfect-fourth" id="mood-chart"></div>
  </div>
  <!-- <div class="see-details">
    <a href="#">See More</a>
  </div> -->
</section>
`;
