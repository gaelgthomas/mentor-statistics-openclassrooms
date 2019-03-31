class Statistics {
  constructor() {
    this.sessionsNb = 0;
    this.sessionsEarning = {
      "1": 0,
      "2": 0,
      "3": 0
    };
  }

  incrementSessionsNb() {
    this.sessionsNb += 1;
  }

  addSessionEarning(level, earning) {
    this.sessionsEarning[level] += earning;
  }

  getSessionsNb() {
    return this.sessionsNb;
  }

  getSessionsEarning() {
    return this.sessionsEarning;
  }

  getTotalEarning() {
    return (
      this.sessionsEarning["1"] +
      this.sessionsEarning["2"] +
      this.sessionsEarning["3"]
    );
  }

  getStatisticsHeaders() {
    return [
      "Total sessions",
      "Niveau 1",
      "Niveau 2",
      "Niveau 3",
      "Revenu total"
    ];
  }

  getStatisticsInArray() {
    return [
      this.sessionsNb,
      this.sessionsEarning["1"],
      this.sessionsEarning["2"],
      this.sessionsEarning["3"],
      this.getTotalEarning()
    ];
  }
}
