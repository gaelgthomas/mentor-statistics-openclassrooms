class Parser {
  constructor() {
    this.counter = 0;
    this.stats = new Statistics();
    this.stats.initialize();
    this.display = new Display();
    this.display.initializeTable($("div#js-jpax-dynamic-content"), this.stats);
  }

  isCanceled(string) {
    return string == "Annulée";
  }

  addSessionToStatistics(month, element) {
    this.stats.incrementSessionsNb(month);
    this.stats.addSessionEarning(
      month,
      element["Niveau d'expertise"],
      Price.getPriceByLevelAndStatus(
        element["Niveau d'expertise"],
        element["Statut"]
      )
    );
  }

  treatElement(month, element) {
    if ($.inArray(month, config.months) == -1) {
      return false;
    }
    if (!this.isCanceled(element["Statut"])) {
      this.addSessionToStatistics(month, element);
      this.display.refreshRow(month, this.stats);
    }
  }

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
