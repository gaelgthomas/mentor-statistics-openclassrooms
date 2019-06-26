$(document).ready(function() {
  addEventListenerForLanguageSelectorForm();
  displayCurrentLanguage();
});

function getSelectedLanguage() {
  var selectedLanguage = $("#language-selection :selected").val();

  return selectedLanguage !== undefined ? selectedLanguage : "";
}

function saveUserLanguage() {
  var selectedLanguage = getSelectedLanguage();

  UserPreferences.setUserLanguage(selectedLanguage);
}

function addEventListenerForLanguageSelectorForm() {
  var languageSelectorForm = document.getElementById(
    "onSubmit-MentorStatisticsOpenClassrooms"
  );

  if (languageSelectorForm !== null) {
    languageSelectorForm.addEventListener("submit", saveUserLanguage);
  }
}

function displayCurrentLanguage() {
  document
    .getElementById("current-language")
    .replaceWith(UserPreferences.getUserLanguage());
}
