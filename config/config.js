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
      headers: ["Mois", "Niveau 1", "Niveau 2", "Niveau 3", "Total"],
      update: "getTotalSessionsStats"
    }
  }
};
