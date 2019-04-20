/**
 * Class with all methods to store information in statistics.
 * @class
 */
class Statistics {
  /**
   * Statistics class contains all methods to store and get statistics on sessions.
   * @constructor
   */
  constructor() {
    this.normalIncomes = new Array();
    this.canceledIncomes = new Array();
    this.normalNb = new Array();
    this.canceledNb = new Array();
    this.sessionTypes = ["normal", "canceled"];
  }

  /**
   *
   * @param {SessionModel} session
   */
  addSession(session) {
    var sessionType =
      session.type == -1 ? this.sessionTypes[0] : this.sessionTypes[1];

    this[sessionType + "Nb"][session.month][session.level] += 1;
    this[sessionType + "Incomes"][session.month][session.level] +=
      session.income;
  }

  /**
   * Initialize a variable of the class by it's name.
   * @param {string} variableName - Class variable name
   * @param {string} month - A month name
   */
  initializeVariableByName(variableName, month) {
    var defaultValues = {
      "1": 0,
      "2": 0,
      "3": 0
    };

    this[variableName][month] = defaultValues;
  }

  /**
   * Initialize sessions number arrays and sessions incomes arrays.
   */
  initialize() {
    var self = this;

    $.each(config.months, function(mIndex, month) {
      $.each(self.sessionTypes, function(mType, type) {
        self.initializeVariableByName(type + "Nb", month);
        self.initializeVariableByName(type + "Incomes", month);
      });
    });
  }

  /**
   * Return number of sessions on a month.
   * @param {string} month - A month name.
   */
  getSessionsNb(month) {
    return this.sessionsNb[month];
  }

  /**
   * Return month total informations (income + number of sessions) by level.
   * @param {string} month - A month name.
   * @param {string} type - Type of session (normal or canceled).
   */
  getMonthTotalInfosByType(month, type) {
    var incomeType = type + "Incomes";
    var nbType = type + "Nb";

    return [
      this[incomeType][month]["1"] +
        this[incomeType][month]["2"] +
        this[incomeType][month]["3"],
      this[nbType][month]["1"] +
        this[nbType][month]["2"] +
        this[nbType][month]["3"]
    ];
  }

  /**
   * Return month level informations (income + number of sessions) by level.
   * @param {string} month - A month name.
   * @param {string} type - Type of session (normal or canceled).
   */
  getMonthLevelInfosByType(month, type, level) {
    return [
      this[type + "Incomes"][month][level],
      this[type + "Nb"][month][level]
    ];
  }

  /**
   * Return an array with all statistics (in order of headers).
   * @param {string} month - A month name.
   */
  getTotalSessionsStats(month) {
    return [
      month,
      this.getMonthLevelInfosByType(month, "normal", "1"),
      this.getMonthLevelInfosByType(month, "normal", "2"),
      this.getMonthLevelInfosByType(month, "normal", "3"),
      this.getMonthTotalInfosByType(month, "normal")
    ];
  }
}
