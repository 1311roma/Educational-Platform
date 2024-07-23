
const courses = [
    {
        title: "Introduction to JavaScript",
        instructor: "Amin Khan",
        duration: "4 hours",
        modules: ["Variables", "Data Types", "Functions"]
    },
    {
        title: "Introduction to HTML/CSS",
        instructor: "Amita Sharma",
        duration: "3 hours",
        modules: ["HTML Basics", "CSS Basics", "Responsive Design"]
    },
    {
        title: "Introduction to React",
        instructor: "Kane Smith",
        duration: "6 hours",
        modules: ["React Basics", "Components", "State and Props"]
    }
];

const courseListElement = document.getElementById("course-list");

courses.forEach((course) => {
    const courseListItem = document.createElement("li");
    
    courseListItem.innerHTML = `
      <h3>${course.title}</h3>
      <p>Instructor: ${course.instructor}</p>
      <p>Duration: ${course.duration}</p>
      <p>Modules: ${course.modules.join(", ")}</p>`;
     
   
    courseListElement.appendChild(courseListItem);
});

const themeSelectElement = document.getElementById("theme");
const notificationSettingsSelectElement = document.getElementById("notificationSettings");
const savePreferencesButtonElement = document.getElementById("save-preferences");

let userPreferences = {
    theme: "light",
    notificationSettings: "daily"
};

themeSelectElement.value = userPreferences.theme;
notificationSettingsSelectElement.value = userPreferences.notificationSettings;

themeSelectElement.addEventListener("change", (e) => {
    userPreferences.theme = e.target.value;
    updateTheme();
});

notificationSettingsSelectElement.addEventListener("change", (e) => {
    userPreferences.notificationSettings = e.target.value;
});

savePreferencesButtonElement.addEventListener("click", () => {
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
    alert("Preferences saved!");
});

function updateTheme() {
    if (userPreferences.theme === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

// Load user preferences from local storage
if (localStorage.getItem("userPreferences")) {
    userPreferences = JSON.parse(localStorage.getItem("userPreferences"));
    themeSelectElement.value = userPreferences.theme;
    notificationSettingsSelectElement.value = userPreferences.notificationSettings;
    updateTheme();
}