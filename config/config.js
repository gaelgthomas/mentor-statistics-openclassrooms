var config = {
  sessionsHistoryLink:
    "https://openclassrooms.com/fr/mentorship/dashboard/mentorship-sessions-history?page=",
  sessionPrices: {
    "1": 30,
    "2": 35,
    "3": 40
  },
  months: DateUtils.getLastThreeMonths(),
  stopMonth: DateUtils.getStopMonth(),
  tablesConfig: {
    totalSessions: {
      idName: "totalSessions",
      title: "Total sessions",
      headers: {
        Mois: "{0}",
        "Niveau 1": "{0}€ - {1} session(s)",
        "Niveau 2": "{0}€ - {1} session(s)",
        "Niveau 3": "{0}€ - {1} session(s)",
        Total: "{0}€ - {1} session(s)"
      },
      update: "getTotalSessionsStats"
    }
  }
};
