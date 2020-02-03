var config = {
  sessionsHistoryLink: "https://openclassrooms.com/"+LanguageUtils.getLanguage()+"/mentorship/dashboard/mentorship-sessions-history?page=",
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
      title: Translation[LanguageUtils.getLanguage()].totalSessions,
      headers: {
        "monthTitle": "{0}",
        "level1Title": Translation[LanguageUtils.getLanguage()].level1Stats,
        "level2Title": Translation[LanguageUtils.getLanguage()].level2Stats,
        "level3Title": Translation[LanguageUtils.getLanguage()].level3Stats,
        "incomeTitle": Translation[LanguageUtils.getLanguage()].incomesStats
      },
      update: "getTotalSessionsStats"
    },
    totalNoShows: {
      idName: "totalNoShows",
      title: Translation[LanguageUtils.getLanguage()].totalNoShow,
      headers: {
        "monthTitle": "{0}",
        "level1Title": Translation[LanguageUtils.getLanguage()].level1Stats,
        "level2Title": Translation[LanguageUtils.getLanguage()].level2Stats,
        "level3Title": Translation[LanguageUtils.getLanguage()].level3Stats,
        "incomeTitle": Translation[LanguageUtils.getLanguage()].incomesStats
      },
      update: "getTotalNoShowsStats"
    },
    totalIncomes: {
      idName: "totalIncomes",
      title: Translation[LanguageUtils.getLanguage()].grandTotal,
      headers: {
        "monthTitle": "{0}",
        "grandTotalHourlyTitle": Translation[LanguageUtils.getLanguage()].grandTotalHourlyRate,
        "grandTotalMentorshipHoursTitle": Translation[LanguageUtils.getLanguage()].grandTotalMentorshipHours,
        "incomeTitle": Translation[LanguageUtils.getLanguage()].grandTotalIncome
      },
      update: "getGlobalStatistics"
    }
  }
};
