'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

const renderCountry = function (data, className = '') {
  const html = ` 
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   // AJAX CALL countr 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     // Render Country 1
//     renderCountry(data);
//   });
// };

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);

//     const [neighbor] = data.borders;

//     if (!neighbor) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('chile');

// const request = fetch(`https://restcountries.eu/rest/v2/name/portugal`);
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`);
//   request
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found: (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbor = data[0].borders[0];
//       const neighbor = 'ddsda';

//       if (!neighbor) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong :( ${err.message}). Try Again `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) throw new Error(`No neighbor found`);

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong :( ${err.message}). Try Again `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// getCountryData('dasdqwew');

/////// Challenge

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with GeoCoding (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err.message}`);
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test Start');

// setTimeout(() => console.log('0 sec timer '), 0);

// Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(res);
// });
// console.log('Test End');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotery draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN :)');
//     } else {
//       reject(new Error('You Lost Your Money :('));
//     }
//   }, 1000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log('Waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('Waited for 1 second'));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with GeoCoding (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err.message}`);
//     });
// };

// btn.addEventListener('click', whereAmI);

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      // img.classList.add('parallel');
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not Found'));
    });
  });
};

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   });

// Await / Async

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse GeoCoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await resGeo.json();

    // Country Data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    if (!res.ok) throw new Error(`Problem getting country data`);
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}.`;
  } catch (err) {
    console.error(`${err}`);
    renderError(`${err.message}`);
    throw err;
  }
};

// console.log('1: Will Get Location');
// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.err(`${err.message}`))
// //   .finally(() => console.log('3: Finished'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.err(err);
//   }

//   console.log(`3: Finished`);
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
// const [data1] = await getJSON(
//   `https://restcountries.eu/rest/v2/name/${c1}`
// );
// const [data2] = await getJSON(
//   `https://restcountries.eu/rest/v2/name/${c2}`
// );
// const [data3] = await getJSON(
//   `https://restcountries.eu/rest/v2/name/${c3}`
// );

//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('portugal', 'chile', 'tanzania');

// (async function () {
//   const data = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/chile`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexiqwdco`),
//   ]);
//   console.log(data[0]);
// })();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long`));
    }, s * 1000);
  });
};

// (async function () {
//   const data = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/chile`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//     timeout(1),
//   ]);
//   console.log(data);
// })();

// (async function () {
//   const data = await Promise.allSettled([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/chile`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//     timeout(1),
//   ]);
//   console.log(data);
// })();

// (async function () {
//   const data = await Promise.any([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/chile`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//     timeout(1),
//   ]);
//   console.log(data);
// })();

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   });

// Challenge 3

// Part 1
// const loadNPause = async function (ip1, ip2) {
//   try {
//     const img1 = await createImage(ip1);
//     await wait(2);
//     img1.style.display = 'none';
//     const img2 = await createImage(ip2);
//     await wait(2);
//     img2.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadNPause('img/img-1.jpg', 'img/img-2.jpg');

// Part 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
