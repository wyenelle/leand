const hamburger = document.querySelector("#hamburger");
const dropdown = document.querySelector("#dropdown-content");
const cancel_Icon = document.querySelector("#hamburger2");
// This function opens the dropdown
function openDropdown() {
  dropdown.classList.add("active");
  hamburger.classList.add("cancel-icon");
  cancel_Icon.classList.remove("cancel-icon");
}

// this function closes the dropdown 
function closeDropdown() {
  dropdown.classList.remove("active");
  hamburger.classList.remove("cancel-icon");
  cancel_Icon.classList.add("cancel-icon");
}
