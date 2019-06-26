/**
 * Static class with all utilities to store user preferences.
 * @class
 */
class UserPreferences {
  /**
   * Return string with the user language.
   * @static
   */
  static getUserLanguage() {
    // TODO: Manage storage with web extension
    var userLanguage = "";

    if (
      userLanguage &&
      userLanguage !== undefined &&
      config.availableLanguages.includes(userLanguage)
    ) {
      return userLanguage;
    }
    return config.defaultLanguage;
  }

  /**
   * Save language passed as parameter as new user language.
   * @param {string} language - The language.
   */
  static setUserLanguage(language) {
    if (
      language &&
      language !== undefined &&
      config.availableLanguages.includes(language)
    ) {
      // TODO: Manage storage with web extension

      return true;
    }
    return false;
  }
}
