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
    this.sessionsNb = new Array();
    this.sessionsIncomes = new Array();
  }

  /**
   * Initialize sessions number array and sessions incomes array.
   */
  initialize() {
    var self = this;

    $.each(config.months, function(index, month) {
      self.sessionsIncomes[month] = {
        "1": 0,
        "2": 0,
        "3": 0
      };
      self.sessionsNb[month] = 0;
    });
  }

  /**
   * Add 1 to current session number of the month.
   * @param {string} month - A month name.
   */
  incrementSessionsNb(month) {
    this.sessionsNb[month] += 1;
  }

  /**
   * Add income of a session.
   * @param {string} month - A month name.
   * @param {string} level - The level of session.
   * @param {int} income - The income of session.
   */
  addSessionIncome(month, level, income) {
    this.sessionsIncomes[month][level] += income;
  }

  /**
   * Return number of sessions on a month.
   * @param {string} month - A month name.
   */
  getSessionsNb(month) {
    return this.sessionsNb[month];
  }

  /**
   * Return total income of a month.
   * @param {string} month - A month name.
   */
  getTotalIncome(month) {
    return (
      this.sessionsIncomes[month]["1"] +
      this.sessionsIncomes[month]["2"] +
      this.sessionsIncomes[month]["3"]
    );
  }

  /**
   * Return an array with statistics headers (table headers).
   */
  getStatisticsHeaders() {
    return [
      "Mois",
      "Total sessions",
      "Niveau 1",
      "Niveau 2",
      "Niveau 3",
      "Revenu total"
    ];
  }

  /**
   * Return an array with all statistics (in order of headers).
   * @param {string} month - A month name.
   */
  getStatisticsInArray(month) {
    return [
      month,
      this.sessionsNb[month],
      this.sessionsIncomes[month]["1"] + "€",
      this.sessionsIncomes[month]["2"] + "€",
      this.sessionsIncomes[month]["3"] + "€",
      this.getTotalIncome(month) + "€"
    ];
  }
}
