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
