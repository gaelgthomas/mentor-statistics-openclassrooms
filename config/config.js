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
        Revenus: "{0}€ - {1} session(s)"
      },
      update: "getTotalSessionsStats"
    },
    totalNoShows: {
      idName: "totalNoShows",
      title: "Total no-shows",
      headers: {
        Mois: "{0}",
        "Niveau 1": "{0}€ - {1} session(s)",
        "Niveau 2": "{0}€ - {1} session(s)",
        "Niveau 3": "{0}€ - {1} session(s)",
        Revenus: "{0}€ - {1} session(s)"
      },
      update: "getTotalNoShowsStats"
    },
    totalIncomes: {
      idName: "totalIncomes",
      title: "Total",
      headers: {
        Mois: "{0}",
        "Moyenne horaire": "{0}€/h ({1}€/h sans no-shows)",
        "Heures de mentorat": "{0}h et {1}h en no-shows",
        Revenus: "{0}€ dont {1}€ en no-shows"
      },
      update: "getGlobalStatistics"
    }
  }
};
