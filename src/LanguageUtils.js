class LanguageUtils {
  static getDefaultLanguage(){
    return "fr";
  }

  static getAvailableLanguages(){
    return ["fr", "en"];
  }

  static getLanguage(){
    var urlRegex = /https:\/\/openclassrooms\.com\/([a-z]{2})\/mentorship\/dashboard\/mentorship-sessions-history/;

    var language = LanguageUtils.getDefaultLanguage();
    var matches = urlRegex.exec(window.location.href);
    if(matches != null){
      var detectedLanguage = matches[1];
      if(LanguageUtils.getAvailableLanguages().includes(detectedLanguage)){
        language = detectedLanguage;
      }
    }
    return language;
  }
}
