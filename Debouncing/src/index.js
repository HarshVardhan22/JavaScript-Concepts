import "./styles.css";

const btn = document.getElementById("btn");
const inp = document.getElementById("inp");

const debounceDelay = 300;

//the function below is a usual function where we
//call the api on every input
//change, i.e. on every key pressed
inp.addEventListener("keyup", () => {
  //Directly calling the fetch function on a event will
  //result in multiple calls
  //which we would like to avoid
  // fetchApi()
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
  betterFunction();
});

//fetchApi is a simulation function of a real fetch API function
//this fetch function will return data in 2 seconds
const getApi = () =>
  new Promise((res, rej) => {
    try {
      let data = "DATA fetched from server";
      setTimeout(() => {
        res(data);
      }, 2000);
    } catch (err) {
      rej(new Error(err));
    }
  });

//calling the fetchAPI's getMethod
const fetchApi = () => {
  getApi().then((res) => {
    console.log(res);
  });
};

//implementing debouncing
const debounce = (functionCall, delay) => {
  //we want to make the function call only when the difference
  // between 2 consecutive inputs of a user is greater than 300ms
  //i.e. we assume that the user stops typing if he has not typed anything in 300ms
  //hence we make the function call
  let timer;
  return function () {
    //to make sure we are passing the right
    let context = this;

    let args = arguments;
    clearTimeout(timer);
    //clearing the old timer everytime before
    //creating a new timer
    //or else multiple timers will be created in the web API
    //and each of them will go to taskQueue/ macroTask Q
    //and eventually will be executed
    timer = setTimeout(() => {
      console.log(context);
      functionCall.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(fetchApi, debounceDelay);
