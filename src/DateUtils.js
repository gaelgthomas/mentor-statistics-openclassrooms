class DateUtils {
  static monthNames = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ];

  static getCurrentMonth() {
    var date = new Date();

    return DateUtils.monthNames[date.getMonth()];
  }

  static getPreviousMonth() {
    var date = new Date();

    return DateUtils.monthNames[
      date.getMonth() == 0 ? 11 : date.getMonth() - 1
    ];
  }
}
