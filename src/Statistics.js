class Statistics {
  constructor() {
    this.sessionsNb = new Array();
    this.sessionsEarning = new Array();
  }

  initialize() {
    var self = this;

    $.each(config.months, function(index, month) {
      self.sessionsEarning[month] = {
        "1": 0,
        "2": 0,
        "3": 0
      };
      self.sessionsNb[month] = 0;
    });
  }

  incrementSessionsNb(month) {
    this.sessionsNb[month] += 1;
  }

  addSessionEarning(month, level, earning) {
    this.sessionsEarning[month][level] += earning;
  }

  getSessionsNb(month) {
    return this.sessionsNb[month];
  }

  getSessionsEarning(month) {
    return this.sessionsEarning[month];
  }

  getTotalEarning(month) {
    return (
      this.sessionsEarning[month]["1"] +
      this.sessionsEarning[month]["2"] +
      this.sessionsEarning[month]["3"]
    );
  }

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

  getStatisticsInArray(month) {
    return [
      month,
      this.sessionsNb[month],
      this.sessionsEarning[month]["1"] + "€",
      this.sessionsEarning[month]["2"] + "€",
      this.sessionsEarning[month]["3"] + "€",
      this.getTotalEarning(month) + "€"
    ];
  }
}
