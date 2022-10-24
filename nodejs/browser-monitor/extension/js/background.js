
// this function is used when browser cant get geolocation
// using this function to nulify the error
let failedGeoInfoCondition = async () => {
  await browser.storage.local.set({
    lat: null,
    lng: null
  })
}

// get geoLocation with the help of browser api
let geoLocationFinder = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      var location_timeout = setTimeout("failedGeoInfoCondition()", 10000);

      // firefox extension api provides navigator which have child function geolocation
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          clearTimeout(location_timeout);

          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          let locObj = {
            lat, lng
          }

          // saving the location data to localstorage for further use
          await browser.storage.local.set({ location: JSON.stringify(locObj) })
          resolve(locObj)
        },
        function (error) {
          clearTimeout(location_timeout);
          failedGeoInfoCondition();
        }
      );
    } else {
      // Fallback for no geolocation
      failedGeoInfoCondition();
    }
  })
};

// function to capture the current screen
// user firefox extension api
let captureScreen = async () => {
  return new Promise(async (resolve, reject) => {
    let capturedURI = await browser.tabs.captureVisibleTab();
    resolve(capturedURI)
  })
}


// get url from locastorage
// the urls are stored on localstorage by other functions
let scrapUrlsFromLocalStorage = async () => {
  return new Promise(async (resolve, reject) => {
    let urls = await browser.storage.local.get('urls');
    resolve(urls)
  })
}

// get token from localstorage
// which is kept in there when logged in
let scrapTokenFromLocalStorage = async () => {
  return new Promise(async (resolve, reject) => {
    let token = await browser.storage.local.get('userToken');
    resolve(token)
  })
}

// clear localstorage function which can be used when user logs out
let clearLocalStorage = async () => {
  return new Promise(async (resolve, reject) => {
    console.log('clearned')
  })
}

// removing specefic data from localstorage
// here urls and location data from the localstorage are removed
let clearDataFromLocalStorageAfterSend = async () => {
  await browser.storage.local.remove(['urls', 'location'])
}


// a function which sends data from the browser
let sendDataTobackend = async () => {
  return new Promise(async (resolve, reject) => {
    let urls = await scrapUrlsFromLocalStorage()
    let screenShot = await captureScreen()
    let where = await geoLocationFinder()
    let token = await scrapTokenFromLocalStorage()

    // if localstorage doesnt contain urls, send null in a array
    if (!urls.urls) {
      urls.urls = [null]
    }
    token = token.userToken
    urls = urls.urls
    where = {
      lat: where.lat,
      lng: where.lng
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "token": token, "urls": urls, "location": where, "screenShot": screenShot });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // the url is from the backend api which is then hit with data
    // and the data are being stored in backend with this
    fetch("http://localhost:5000/api/user/log", requestOptions)
      .then(response => response.json().then((data) => console.log(data)))
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      // after api request is complete call clearing locastorage function 
    await clearDataFromLocalStorageAfterSend()
    resolve()
  })
}

let checkIfLoggedIn = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let token = await scrapTokenFromLocalStorage();
  var raw = JSON.stringify({ token: token.userToken });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch("http://localhost:5000/api/user/checktoken", requestOptions)
  .then((response) => {
      if (response.status === 200) {
        var minutes = 10,
          the_interval = minutes * 60 * 1000;
        setInterval(function () {
          console.log("checking every 5 min");
          sendDataTobackend();
        }, the_interval);
      } else {
        console.log("logged out");
      }
    }
  );
};

// checks as soon as the browser opens, since the background.js is always active
checkIfLoggedIn();

// time keeper

/** @format */

// this module displays the time user had been using the browser extension
try {
  var countDownDate = localStorage.getItem("startDate");
  if (countDownDate) {
    countDownDate = new Date(countDownDate);
    currentDate = new Date();

    if (!(countDownDate.getDay() === currentDate.getDay())) {
      localStorage.setItem("startDate", currentDate);
      countDownDate = currentDate;
    }
  } else {
    countDownDate = new Date();
    localStorage.setItem("startDate", countDownDate);
  }
} catch (e) {
  console.log(e);
}

// Update the count down every 1 second
// setInterval(function () {
//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = now - countDownDate.getTime();

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementsById("hours")[0].innerHTML = hours;
//   document.getElementsById("minutes")[0].innerHTML = minutes;
//   document.getElementsById("seconds")[0].innerHTML = seconds;
// }, 1000);


// a functions which tries to find out if the user is loggedin to the extension or not


