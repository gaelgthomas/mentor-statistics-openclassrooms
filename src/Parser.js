class Parser {
  constructor() {
    this.counter = 0;
    this.stats = new Statistics();
    this.display = new Display();
    this.display.initializeTable($("div#js-jpax-dynamic-content"), this.stats);
  }

  isCanceled(string) {
    return string == "Annulée";
  }

  addSessionToStatistics(element) {
    this.stats.incrementSessionsNb();
    this.stats.addSessionEarning(
      element["Niveau d'expertise"],
      Price.getPriceByLevelAndStatus(
        element["Niveau d'expertise"],
        element["Statut"]
      )
    );
  }

  launchParsing(pageNb) {
    var currentMonth = DateUtils.getCurrentMonth();
    var previousMonth = DateUtils.getPreviousMonth();
    var loop = true;
    var that = this;

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

          if (month != currentMonth) {
            if (month == previousMonth) {
              loop = false;
              return false;
            }
          } else {
            if (!that.isCanceled(element["Statut"])) {
              that.addSessionToStatistics(element);
              that.display.refreshRow(that.stats);
            }
          }
        });

        if (loop) that.launchParsing(pageNb + 1);
      }
    });
  }
}
