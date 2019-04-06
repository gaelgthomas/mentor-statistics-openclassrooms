/**
 * Static class with all utilities to use dates.
 * @class
 */
class DateUtils {
  /**
   * Return an array with all month names.
   * @static
   */
  static getMonthList() {
    var monthList = [
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

    return monthList;
  }

  /**
   * Return the current month name.
   * @static
   */
  static getCurrentMonth() {
    var date = new Date();

    return DateUtils.getMonthList()[date.getMonth()];
  }

  /**
   * Return the previous month name.
   * @static
   */
  static getPreviousMonth() {
    var date = new Date();

    return DateUtils.getMonthList()[
      date.getMonth() == 0 ? 11 : date.getMonth() - 1
    ];
  }

  /**
   * Return the month name where parser should stop to parse.
   * @static
   */
  static getStopMonth() {
    var date = new Date();

    return DateUtils.getMonthList()[
      date.getMonth() == 0 ? 10 : date.getMonth() - 2
    ];
  }
}
