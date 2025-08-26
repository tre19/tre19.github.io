const darkMode = { bg: "bg-[#3B3B3B]", text: "text-gray-100" };

const lightModes = [
  { bg: "bg-[#CDDDBC]", text: "text-black" },
  { bg: "bg-[#FFCB99]", text: "text-black" },
  { bg: "bg-[#F8EFEA]", text: "text-black" },
  { bg: "bg-[#E9D6EC]", text: "text-black" },
  { bg: "bg-[#B0D1DF]", text: "text-black" }
];

let isDark = false;
let lightIndex = 0;
let rotation = 0; // track degrees rotated

const body = document.body;
const toggleBtn = document.getElementById("color-toggle");
const icon = document.getElementById("toggle-icon");

body.classList.add("transition-colors", "duration-500");

toggleBtn.addEventListener("click", () => {
  // remove old theme classes
  body.classList.remove(
    darkMode.bg, darkMode.text,
    ...lightModes.map(c => c.bg),
    ...lightModes.map(c => c.text)
  );

  // increment rotation by 180 degrees each click
  rotation += 180;
  icon.style.transform = `rotate(${rotation}deg)`;
  icon.style.transition = "transform 0.6s ease-in-out"; // smooth

  if (!isDark) {
    // Dark mode
    body.classList.add(darkMode.bg, darkMode.text);
    isDark = true;
  } else {
    // Light mode → cycle next
    lightIndex = (lightIndex + 1) % lightModes.length;
    body.classList.add(lightModes[lightIndex].bg, lightModes[lightIndex].text);
    isDark = false;
  }
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
