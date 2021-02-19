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
    this.display.initializeTables($(".tab.spacer"), this.stats);
  }

  /**
   * Check if a state is canceled or late canceled.
   * Return 0 = Canceled
   * Return 1 = Late canceled
   * Return -1 = Not canceled
   * @param  {string} str - String to compare
   */
  isCanceled(str) {
    var cancelType = Translation[LanguageUtils.getLanguage()]["cancel"];

    return cancelType.indexOf(str);
  }

  /**
   * Add a session to the statistic object.
   * @param  {string} month - A month name
   * @param  {Array} element - One row of the table
   * @param  {int} isCanceled - Define the type of cancel (1: late canceled, -1: not canceled)
   */
  addSessionToStatistics(month, element, isCanceled) {
    var session = new SessionModel();

    session.type = isCanceled;
    session.month = month;
    session.level =
      element[Translation[LanguageUtils.getLanguage()]["expertiseLevel"]];
    session.income = Price.computePriceByLevelAndStatus(
      element[Translation[LanguageUtils.getLanguage()]["expertiseLevel"]],
      element[Translation[LanguageUtils.getLanguage()]["status"]]
    );

    this.stats.addSession(session);
  }

  /**
   * Treat one element and define if it can be add to statistics or not.
   * @param {string} month - A month name
   * @param {string} year - The year (as a four character string, like "2020")
   * @param {Array} element - One row of the table
   */
  treatElement(month, year, element) {
    var isCanceled = -1;

    if (
      $.inArray(month, config.months) == -1 ||
      DateUtils.isOlderThanOneYear(month, year)
    ) {
      return false;
    }

    isCanceled = this.isCanceled(
      element[Translation[LanguageUtils.getLanguage()]["status"]]
    );
    if (isCanceled != 0 && isCanceled != 1) {
      this.addSessionToStatistics(month, element, isCanceled);
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
          .find(".crud-list:first")
          .tableToJSON({
            ignoreHiddenRows: false
          });

        $.each(json, function(index, element) {
          var dateArray = element[
            Translation[LanguageUtils.getLanguage()]["sessionDate"]
          ].split(" ");
          var month = Translation[
            LanguageUtils.getLanguage()
          ].getMonthFromSplittedDate(dateArray);
          var year = Translation[
            LanguageUtils.getLanguage()
          ].getYearFromSplittedDate(dateArray);

          if (self.treatElement(month, year, element) == false) {
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
