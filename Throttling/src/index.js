//throttling

//it restricts the number of calls made by an user by
//limiting the rate of call
//eg. Once in 300ms

import "./styles.css";

let count = 0;
let throttleDelay = 600;

const btn = document.getElementById("btn");
//const body = document.getElementById("body");

btn.addEventListener("click", () => {
  //getApiCall();
  console.log("clicked");
  betterFunction();
});

window.addEventListener("resize", () => {
  betterFunction();
});

const getApiCall = () => console.log("DATA Fetched from server", ++count);

let flag = true;

const throttle = (functionCall, delay) => {
  return function () {
    let context = this;
    // //arguments is an Array-like object accessible inside functions that
    // //contains the values of the arguments passed to that function.
    let args = arguments;

    //this makes the fn call for the first time
    //then sets the flag to false
    //which means we cant make the function call
    //then only after {delay} time is passed the flag is
    //set to true again hence again a function call can be made
    if (flag) {
      functionCall.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterFunction = throttle(getApiCall, throttleDelay);
