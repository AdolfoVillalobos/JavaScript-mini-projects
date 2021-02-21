const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #mapZoomLevel = 14;
  #workouts = [];
  constructor() {
    // Get Users Position
    this._getPosition();

    // Event Handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopUp.bind(this));

    // Get local storage
    this._getLocalStorage();
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        alert('Could not get your position')
      );
    }
  }

  _moveToPopUp(e) {
    const workoutEL = e.target.closest('.workout');
    if (!workoutEL) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEL.dataset.id
    );
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // workout.click()
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    this.#workouts.forEach(workout => {
      this._renderWorkoutMap(workout);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value =
      '';
    form.style.display = 'none';
    form.classList.add('hidden');
    ('');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _renderWorkoutMap(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxwidth: 250,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'}${workout.description}`
      )
      .openPopup();
  }

  _renderWorkoutList(workout) {
    form.insertAdjacentHTML(
      'afterend',
      `<li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
            <span class="workout__icon"> ${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'
            } </span>
            <span class="workout__value">${workout.distance}<span>
            <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">⚡</span>
            <span class="workout__value">${
              workout.type === 'running' ? workout.pace : workout.speed
            }</span>
            <span class="workout__unit">${
              workout.type === 'running' ? 'min/km' : 'km/h'
            }</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🦶️' : '🏔'
            }</span>
            <span class="workout__value">${
              workout.type === 'running'
                ? workout.cadence
                : workout.elevationGain
            }</span>
            <span class="workout__unit">${
              workout.type === 'running' ? 'spm' : 'm'
            }</span>
      </li>`
    );
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;
    this.#workouts = data.map(workout => {
      if (workout.type === 'running') {
        const run = new Running(
          workout.coords,
          workout.distance,
          workout.duration,
          workout.cadence
        );
        run.date = workout.date;
        run.id = workout.id;
        run.description = workout.description;
        return run;
      }
      if (workout.type === 'cycling') {
        const cyc = new Cycling(
          workout.coords,
          workout.distance,
          workout.duration,
          workout.elevation
        );
        cyc.id = workout.id;
        cyc.date = cyc.date;
        cyc.description = cyc.description;
        return cyc;
      }
    });
    this.#workouts.forEach(workout => {
      this._renderWorkoutList(workout);
    });
    console.log(this.#workouts);
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }

  _newWorkout(e) {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    // Get data from form

    const distance = Number(inputDistance.value);
    const duration = Number(inputDuration.value);
    const { lat, lng } = this.#mapEvent.latlng;
    const type = inputType.value;
    let workout;

    if (type === 'running') {
      const cadence = Number(inputCadence.value);
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs to be positive numbers');
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    if (type === 'cycling') {
      const elevation = Number(inputElevation.value);
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs to be positive numbers');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // If activity running, create running object, or cycling otherwise

    this.#workouts.push(workout);

    // Render workout on the map

    this._renderWorkoutMap(workout);

    // Render workout on the list

    this._renderWorkoutList(workout);

    // Hide the form + Clear Input fields

    this._hideForm();

    // Set Local Storage to all workouts

    this._setLocalStorage();
  }
}
