/**
 * Class with all methods to display the statistics (by creating table).
 * @class
 */
class Display {
  /**
   * Create column headers with the array of headers.
   * @param {Array} headersList - Array with the name of headers.
   */
  createColumnHeaders(headersList) {
    var headers = $("<thead/>");

    var row = $("<tr/>");
    $.each(headersList, function(index, element) {
      row.append($("<td/>").text(element));
    });
    headers.append(row);

    return headers;
  }

  /**
   * Create a row with statistics of one month.
   * @param {string} month - A month name.
   * @param {Statistics} stats - Statistics object.
   */
  createRow(month, stats) {
    var row = $("<tr/>");

    row.attr("id", "statisticsRow" + month);
    $.each(stats.getStatisticsInArray(month), function(index, data) {
      row.append($("<td/>").text(data));
    });

    return row;
  }

  /**
   * Initialize the table with default values and headers.
   * @param {*} container - DOM element selector.
   * @param {Statistics} stats - Statistics object.
   */
  initializeTable(container, stats) {
    var self = this;
    var table = $("<table/>")
      .addClass("crud-list")
      .attr("id", "statisticsTable");
    var headers = this.createColumnHeaders(stats.getStatisticsHeaders());
    var row = undefined;

    table.append(headers);
    $.each(config.months, function(index, month) {
      row = self.createRow(month, stats);
      table.append(row);
    });
    container.prepend(table);
  }

  /**
   * Refresh values of one row (one month).
   * @param {string} month - A month name.
   * @param {Statistics} stats - Statistics object.
   */
  refreshRow(month, stats) {
    var row = this.createRow(month, stats);

    $("#statisticsRow" + month).replaceWith(row);
  }
}
