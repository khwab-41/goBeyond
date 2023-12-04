let menu_list = document.getElementById("menu_list");
menu_list.style.maxHeight = "0px";
function togglemenu() {
  if (menu_list.style.maxHeight === "0px") {
    menu_list.style.maxHeight = "300px";
  } else {
    menu_list.style.maxHeight = "0px";
  }
}

var video = document.getElementById("myVideo");

// var btn = document.getElementById("myBtn");

let x = document.getElementById("login");
let y = document.getElementById("signup");
let z = document.getElementById("btn");

function signup() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}

let modal = document.getElementById("login_form");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var submit_btn_lgn = document.getElementById("submit_btn");
submit_btn.addEventListener("click", loginFromValidation);

function loginFromValidation() {
  let lg_email = document.querySelector("#lg_email").value;
  let lg_password = document.querySelector("#lg_password").value;

  if (
    check_email(
      lg_email,
      "Please input the field in the following format mrkhwab@gmail.com"
    )
  ) {
    if (
      check_password(
        lg_password,
        "Your password should contain at least one UpperCase character, one LowerCase character, one Digit and one Special Character"
      )
    ) {
      return true;
    }
  }
  return false;
}

var submit_btn_sgn = document.getElementById("sgn_submit");
submit_btn_sgn.addEventListener("click", signupFormValidation);

function signupFormValidation() {
  console.log("inside signup");
  let sg_fname = document.querySelector("#sg_fname").value;
  let sg_lname = document.querySelector("#sg_lname").value;
  let sg_password = document.querySelector("#sg_password").value;
  let sg_confirm_password = document.querySelector(
    "#sg_confirm_password"
  ).value;

  if (
    check_name(sg_fname, "Please only use alphabetical digits for your name")
  ) {
    if (
      check_name(sg_lname, "Please only use alphabetical digits for your name")
    ) {
      if (
        check_password(
          sg_password,
          "Your password should contain at least one UpperCase character, one LowerCase character, one Digit and one Special Character"
        )
      ) {
        if (
          confirm_password(
            sg_confirm_password,
            sg_password,
            "The input password doesnot matches the given password"
          )
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

function check_email(input, alertMessage) {
  // let validSequence = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let validSequence = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (validSequence.test(input)) {
    return true;
  } else {
    alert(alertMessage);
    return false;
  }
}

function check_password(input, alertMessage) {
  // let validSequence = /^[a-zA-Z0-9\.\@\-]+ $/;
  let validSequence =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (validSequence.test(input)) {
    return true;
  } else {
    alert(alertMessage);
    return false;
  }
}

function check_name(input, alertMessage) {
  console.log("Inside Check Name");
  let validSequence = /^[A-Za-z]+$/;
  if (validSequence.test(input)) {
    return true;
  } else {
    alert(alertMessage);
    return false;
  }
}

function confirm_password(cnf_pass, original_pass, alertMessage) {
  if (cnf_pass == original_pass) {
    return true;
  } else {
    alert(alertMessage);
    return false;
  }
}
