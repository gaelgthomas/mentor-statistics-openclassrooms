/**
 * Class with all methods to parse to parse mentorship sessions history pages.
 * @class
 */
class Parser {
  /**
   * Initialization of required variables.
   * @constructor
   */
  constructor() {
    this.stats = new Statistics();
    this.stats.initialize();
    this.display = new Display();
    this.display.initializeTable($("div#js-jpax-dynamic-content"), this.stats);
  }

  /**
   * Check if a state is canceled.
   * @param  {string} str - String to compare
   */
  isCanceled(str) {
    return str == "Annulée";
  }

  /**
   * Add a session to the statistic object.
   * @param  {string} month - A month name
   * @param  {Array} element - One row of the table
   */
  addSessionToStatistics(month, element) {
    this.stats.incrementSessionsNb(month);
    this.stats.addSessionIncome(
      month,
      element["Niveau d'expertise"],
      Price.computePriceByLevelAndStatus(
        element["Niveau d'expertise"],
        element["Statut"]
      )
    );
  }

  /**
   * Treat one element and define if it can be add to statistics or not.
   * @param {string} month - A month name
   * @param {Array} element - One row of the table
   */
  treatElement(month, element) {
    if ($.inArray(month, config.months) == -1) {
      return false;
    }
    if (!this.isCanceled(element["Statut"])) {
      this.addSessionToStatistics(month, element);
      this.display.refreshRow(month, this.stats);
    }
  }

  /**
   * Parse a mentorship session history page with his index.
   * @param {int} pageNb - The page index
   */
  launchParsing(pageNb) {
    var loop = true;
    var self = this;

    $.ajax({
      url: config.sessionsHistoryLink + pageNb,
      type: "GET",
      success: function(res) {
        var json = $(res)
          .find("div#js-jpax-dynamic-content table")
          .tableToJSON({
            ignoreHiddenRows: false
          });

        $.each(json, function(index, element) {
          var dateArray = element["Date de session"].split(" ");
          var month = dateArray[1];

          if (self.treatElement(month, element) == false) {
            if (month == config.stopMonth) {
              loop = false;
              return false;
            }
          }
        });

        if (loop) self.launchParsing(pageNb + 1);
      }
    });
  }
}
