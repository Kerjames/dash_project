/* =========================================
   1. MENU / DROPDOWN INITIALIZATION
   ========================================= */
function initMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const dropdown = document.getElementById("dropdown-menu");

  if (!menuIcon || !dropdown) {
    console.warn("Menu elements not found in DOM");
    return;
  }

  // Toggle dropdown on icon click
  menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();

    // Toggle the "active" class (this shows/hides the menu via CSS)
    dropdown.classList.toggle("active");
    console.log("Menu toggled!");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target) && event.target !== menuIcon) {
      dropdown.classList.remove("active");
    }
  });
}

/* =========================================
   2. ECHART INITIALIZATION
   ========================================= */
function initECharts() {
  if (typeof echarts === "undefined") {
    console.warn(
      "ECharts not found — ensure the ECharts script is included in index.html",
    );
    return;
  }

  const leftChartDom = document.getElementById("left-chart");
  // q: what does this line do below?
  if (!leftChartDom) return;

  const leftChart = echarts.init(leftChartDom, null, { renderer: "svg" });

  const option = {
    title: {
      text: "Line chart",
      left: "center",
      textStyle: { color: "#cbd5e1" },
    },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: { lineStyle: { color: "#334155" } },
      axisLabel: { color: "#94a3b8" },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      splitLine: { lineStyle: { color: "#0b1117" } },
      axisLabel: { color: "#94a3b8" },
    },
    series: [
      {
        name: "Visits",
        type: "line",
        data: [120, 200, 150, 80, 70, 110, 130],
        smooth: true,
        lineStyle: { color: "#ffcc00" },
        itemStyle: { color: "#ffcc00" },
      },
    ],
    backgroundColor: "transparent",
  };

  leftChart.setOption(option);
  window.addEventListener("resize", () => leftChart.resize());
}

/* =========================================
   3. LOGO EVENT HANDLERS
   ========================================= */
function initLogo() {
  const logo = document.getElementsByClassName("logo-img")[0];
  if (!logo) return;

  logo.style.cursor = "pointer";
  logo.title = "Tiklasana guzelim!";

  logo.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/watch?v=Ooru55prkC0";
  });

  logo.addEventListener("mouseenter", () => {
    logo.style.opacity = "0.7";
    logo.style.transition = "opacity 0.3s";
  });

  logo.addEventListener("mouseleave", () => {
    logo.style.opacity = "1";
    logo.style.transition = "opacity 0.3s";
  });
}

/* =========================================
   4. UPLOAD BUTTON HANDLER
   ========================================= */
function initUploadButton() {
  const uploadButton = document.getElementById("upload-button");
  const fileInput = document.getElementById("file-input");

  if (!uploadButton || !fileInput) {
    console.warn("Upload elements not found in DOM");
    return;
  }

  uploadButton.addEventListener("click", () => {
    fileInput.click(); // Opens the file picker
  });

  // Handle file selection
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      // TODO: Parse and load file data into chart
    }
  });
}

/* =========================================
   5. MAIN INITIALIZATION
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initECharts();
  initLogo();
  initUploadButton();
});
