var config = {
  defaultLanguage: "FR",
  localKeyLanguage: "Mentor-Statistics-OpenClassrooms-Language-Configuration",
  availableLanguages: ["FR", "EN"],
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
    totalIncomes: {
      idName: "totalIncomes",
      title: "TOTAL",
      headers: {
        MONTH: "MONTH_TEXT",
        HOURLY_AVERAGE: "HOURLY_AVERAGE_TEXT",
        MENTORING_HOURS: "MENTORING_HOURS_TEXT",
        INCOMES: "INCOMES_TEXT"
      },
      update: "getGlobalStatistics"
    },
    totalSessions: {
      idName: "totalSessions",
      title: "TOTAL_SESSIONS",
      headers: {
        MONTH: "MONTH_TEXT",
        LEVEL_1: "LEVEL_TEXT",
        LEVEL_2: "LEVEL_TEXT",
        LEVEL_3: "LEVEL_TEXT",
        INCOMES: "LEVEL_TEXT"
      },
      update: "getTotalSessionsStats"
    },
    totalNoShows: {
      idName: "totalNoShows",
      title: "TOTAL_NOSHOWS",
      headers: {
        MONTH: "MONTH_TEXT",
        LEVEL_1: "LEVEL_TEXT",
        LEVEL_2: "LEVEL_TEXT",
        LEVEL_3: "LEVEL_TEXT",
        INCOMES: "LEVEL_TEXT"
      },
      update: "getTotalNoShowsStats"
    }
  }
};
