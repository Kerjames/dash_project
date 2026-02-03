document.addEventListener("DOMContentLoaded", () => {
  // 1. Get references to the icon and the menu
  const menuIcon = document.getElementById("menu-icon");
  const dropdown = document.getElementById("dropdown-menu");

  // 2. Add the click listener to the icon
  menuIcon.addEventListener("click", (event) => {
    // This stops the click from immediately triggering the document listener below
    event.stopPropagation();

    // Toggle the "active" class (this shows/hides the menu via CSS)
    dropdown.classList.toggle("active");
    console.log("Menu toggled!"); // Check your console for this message
  });

  // 3. Close the menu if the user clicks anywhere else on the screen
  document.addEventListener("click", (event) => {
    // If the click happened OUTSIDE the dropdown AND OUTSIDE the icon
    if (!dropdown.contains(event.target) && event.target !== menuIcon) {
      dropdown.classList.remove("active");
    }
  });
});

// Logo click event to redirect to a specific URL
const logo = document.getElementsByClassName("logo-img");

logo[0].style.cursor = "pointer";
logo[0].title = "Tiklasana guzelim!";

logo[0].addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=Ooru55prkC0";
});

logo[0].addEventListener("mouseenter", () => {
  logo[0].style.opacity = "0.7";
  logo[0].style.transition = "opacity 0.3s";
});

logo[0].addEventListener("mouseleave", () => {
  logo[0].style.opacity = "1";
  logo[0].style.transition = "opacity 0.3s";
});

// Dropdown menu properties
// Upload file
const uploadButton = document.getElementById("upload-button");
const fileinput = document.getElementById("file-input");

uploadButton.addEventListener("click", () => {
  console.log("Button clicked!"); // If this shows up, the button is fine.
});
