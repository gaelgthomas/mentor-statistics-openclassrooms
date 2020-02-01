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
   * Returns whether the given month and year are older than one year or not.
   * ATTENTION: If we are in January 2020, January 2019 will return false
   * @param {string} month The name of the month of the date to check
   * @param {string} year The year (as a 4 characters string) of the date to check
   * @return {boolean} whether the given month and year are older than one year or not
   */
  static isOlderThanOneYear(month, year) {
    var monthIndex = DateUtils.getMonthList().indexOf(month);
    var yearInt = parseInt(year)-1900;

    var date = new Date();
    var currentMonth = date.getMonth();
    var currentYear = date.getYear();

    return (currentMonth < monthIndex || currentYear > yearInt) && (currentMonth >= monthIndex || currentYear > yearInt+1);
  }

  /**
   * Return the month name (based on index) before current month.
   * Example: Index = 1; Current month = February; Return (February - Index) = January.
   * @param {int} index
   */
  static getMonthFromCurrentMonth(index) {
    var date = new Date();

    return DateUtils.getMonthList()[
      (12 + date.getMonth() - index)%12
    ];
  }

  /**
   * Return the last three month names.
   * @static
   */
  static getLastThreeMonths() {
    var index = 0;
    var monthList = [];

    for (index; index < 3; index++) {
      monthList.push(DateUtils.getMonthFromCurrentMonth(index));
    }

    return monthList;
  }

  /**
   * Return the month name where parser should stop to parse.
   * @static
   */
  static getStopMonth() {
    var date = new Date();

    return DateUtils.getMonthList()[
      date.getMonth() == 0 ? 9 : date.getMonth() - 3
    ];
  }
}
