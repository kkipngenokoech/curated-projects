/** @format */

var login = async () => {
  console.log("loggin in");
  // grabs username and password from the form and tries to signin
  return new Promise((resolve, reject) => {
    // get userEmail
    var email = document.getElementById("email").value;
    /// get userPassword
    var password = document.getElementById("password").value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // email and password stringify
    var raw = JSON.stringify({ email: email, password: password });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/user/login", requestOptions)
      .then((response) => {
        if (response.status === 200) {
          currentDate = new Date();
          localStorage.setItem("startDate", currentDate);
          // if success, then display the timer
          document.getElementById("loginSys").style.display = "none";
          document.getElementById("afterlogin").style.display = "";
        } else {
          let currentDate = new Date();
          localStorage.setItem("startDate", currentDate);

          // if not success, then keep displaying the login page
          document.getElementById("loginSys").style.display = "";
          document.getElementById("afterlogin").style.display = "none";
        }
        response.json().then(async (data) => {
          console.log(data)
          if (data.error) {
            document.getElementById("errorMessage").style.display = "";
            document.getElementById("errorMessage").innerHTML = data.error;
          } else {
            resolve(data.data);
          data = data.data;
          document.getElementById("greeting").innerHTML = `Hello, ${data.email.split("@")[0]}`;
          await browser.storage.local.set({
            userToken: data.token,
            userEmail: data.email,
            userUUID: data.uuid,
          });
          }
          
        });
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

// when the user logsout remove all the data from the localstorage
// also shows the login page
var logout = async () => {
  await browser.storage.local.remove("lat");
  await browser.storage.local.remove("lng");
  await browser.storage.local.remove("urls");
  await browser.storage.local.remove("userEmail");
  await browser.storage.local.remove("userToken");
  await browser.storage.local.remove("userUUID");
  document.getElementById("loginSys").style.display = "";
  document.getElementById("afterlogin").style.display = "none";
};

// this function scraps token from localstorage
let scrapTokenFromLocalStorage2 = async () => {
  return new Promise(async (resolve, reject) => {
    let token = await browser.storage.local.get("userToken");
    resolve(token);
  });
};

// checks if login or not, if logged in, then it will display the timer, if not it will display the login page
let checkIfLoggedInOrNot = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let token = await scrapTokenFromLocalStorage2();
  if (!token) {
    document.getElementById("loginSys").style.display = "none";
    document.getElementById("afterlogin").style.display = "";
  } else {
    var raw = JSON.stringify({ token: token.userToken });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:5000/api/user/checktoken", requestOptions).then(
      (response) => {
        if (response.status === 200) {
          document.getElementById("loginSys").style.display = "none";
          document.getElementById("afterlogin").style.display = "";
        } else {
          document.getElementById("loginSys").style.display = "";
          document.getElementById("afterlogin").style.display = "none";
        }
      }
    );
  }
};

checkIfLoggedInOrNot();

document.addEventListener("DOMContentLoaded", async () => {
  var LoginButton = document.getElementById("loginButton");
  LoginButton.addEventListener("click", () => {
    // document.getElementById("errorMessage").style.display = "none";
    login();
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  var LogoutButton = document.getElementById("logoutButton");
  LogoutButton.addEventListener("click", () => {
    // document.getElementById("errorMessage").style.display = "none";
    logout();
  });
});
