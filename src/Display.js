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
  createRow(month, stats, tableConfig) {
    var row = $("<tr/>");

    row.attr("id", tableConfig.idName + month);
    $.each(stats[tableConfig.update](month), function(index, data) {
      row.append($("<td/>").text(data));
    });

    return row;
  }

  createTable(container, stats, tableConfig) {
    var self = this;
    var subContainer = $("<div/>").addClass("spacer-big");
    var table = $("<table/>")
      .addClass("crud-list")
      .attr("id", tableConfig.idName + "Table");
    var headers = this.createColumnHeaders(tableConfig.headers);
    var row = undefined;

    table.append(headers);
    $.each(config.months, function(index, month) {
      row = self.createRow(month, stats, tableConfig);
      table.append(row);
    });
    subContainer.prepend(table);
    subContainer.prepend("<h2>" + tableConfig.title + "</h2>");
    container.prepend(subContainer);
  }

  initializeTables(container, stats) {
    var self = this;

    $.each(config.tablesConfig, function(index, tableConfig) {
      self.createTable(container, stats, tableConfig);
    });
  }

  /**
   * Refresh values of one row (one month).
   * @param {string} month - A month name.
   * @param {Statistics} stats - Statistics object.
   */
  refreshRow(month, stats) {
    var self = this;
    var row = undefined;

    $.each(config.tablesConfig, function(index, tableConfig) {
      row = self.createRow(month, stats, tableConfig);
      $("#" + tableConfig.idName + month).replaceWith(row);
    });
  }
}
