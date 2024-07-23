// Course Creation
class Course {
    constructor(title, instructor, duration, modules) {
      this.title = title;
      this.instructor = instructor;
      this.duration = duration;
      this.modules = modules;
    }
  }
  
  function createCourse(title, instructor, duration, modules) {
    return new Course(title, instructor, duration, modules);
  }
  
  // User Preferences
  class UserPreferences {
    constructor() {
      this.preferences = {};
    }
  
    setPreference(key, value) {
      this.preferences[key] = value;
    }
  
    getPreference(key) {
      return this.preferences[key];
    }
  }
  
  const userPreferences = new UserPreferences();
  
  // Example usage:
  userPreferences.setPreference("theme", "dark");
  userPreferences.setPreference("notificationSettings", "daily");
  userPreferences.setPreference("preferredLearningPath", "beginner");
  
  // Displaying Course List and User Preferences
  function displayCourseList() {
    const courseListElement = document.getElementById("course-list");
    courseListElement.innerHTML = "";
    const courseListItem = document.createElement("li");
    courseListItem.textContent = course1.title;
    courseListElement.appendChild(courseListItem);
  }
  
  function displayUserPreferences() {
    const userPreferencesElement = document.getElementById("user-preferences");
    userPreferencesElement.innerHTML = "";
    const themePreference = document.createElement("p");
    themePreference.textContent = `Theme: ${userPreferences.getPreference("theme")}`;
    userPreferencesElement.appendChild(themePreference);
    const notificationSettingsPreference = document.createElement("p");
    notificationSettingsPreference.textContent = `Notification Settings: ${userPreferences.getPreference("notificationSettings")}`;
    userPreferencesElement.appendChild(notificationSettingsPreference);
    const preferredLearningPathPreference = document.createElement("p");
    preferredLearningPathPreference.textContent = `Preferred Learning Path: ${userPreferences.getPreference("preferredLearningPath")}`;
    userPreferencesElement.appendChild(preferredLearningPathPreference);
  }
  
  displayCourseList();
  displayUserPreferences();