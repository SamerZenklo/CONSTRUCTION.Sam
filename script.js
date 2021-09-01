const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const nError = document.getElementById("n-error");
const lnError = document.getElementById("ln-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");

//form.onsubmit = (e)=>{
form.addEventListener("submit", (e) => {
  let errors = {};
  /* Name */
  firstName.value.trim() === "" ? (errors["firstName"] = "First name is required") : null;

  /*  LastName */
  lastName.value.trim() === "" ? (errors["lastName"] = "Last name is required") : null;

  /* Phone*/
  if (phone.value.trim() === "") errors["phone"] = "phone is required";
  else if ( !telephoneCheck(phone.value.trim()) ) {
    errors["phone"] = "phone is mismatch";
  }

  /* Email */
  if (email.value.trim() === "") errors["email"] = "email is required";
  else if (!isEmailAddress(email.value.trim())) {
    errors["email"] = "email is mismatch";
  }

  if (Object.keys(errors).length > 0) {
    e.preventDefault();
    nError.innerText = errors.firstName ?? "";
    lnError.innerText = errors.lastName ?? "";
    phoneError.innerText = errors.phone ?? "";
    emailError.innerText = errors.email ?? "";
  }
});

function isEmailAddress(str) {
  //let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return str.match(pattern);
}

function telephoneCheck(phone) {
  let pattern = /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
  return phone.match(pattern);
}

function toggle() {
  const btn = document.getElementById("nav-btn");
  btn.classList.toggle("nav-btn-active");
  const title = document.getElementById("btn-test").getAttribute("data-text");
  let btnTest = document.getElementById("btn-test");
  if (title === "menu") {
    btnTest.classList.remove("fa-bars");
    btnTest.classList.add("fa-times-circle");
    btnTest.setAttribute("data-text", "close");
  } else {
    btnTest.setAttribute("data-text", "menu");
    btnTest.classList.remove("fa-times-circle");
    btnTest.classList.add("fa-bars");
  }
}
