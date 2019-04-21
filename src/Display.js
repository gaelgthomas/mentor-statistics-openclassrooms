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
    $.each(headersList, function(key, format) {
      row.append($("<td/>").text(key));
    });
    headers.append(row);

    return headers;
  }

  getFormattedRowData(month, stats, tableConfig) {
    var rowData = stats[tableConfig.update](month);
    var formattedRowData = [];
    var index = 0;

    $.each(tableConfig.headers, function(key, value) {
      formattedRowData.push(value.format(rowData[index]));
      index++;
    });

    return formattedRowData;
  }

  /**
   * Create a row with statistics of one month.
   * @param {string} month - A month name.
   * @param {Statistics} stats - Statistics object.
   */
  createRow(month, stats, tableConfig) {
    var row = $("<tr/>");
    var data = stats[tableConfig.update](month);
    var formattedRowData = this.getFormattedRowData(month, stats, tableConfig);

    row.attr("id", tableConfig.idName + month);
    $.each(formattedRowData, function(index, data) {
      row.append($("<td/>").text(data));
    });

    return row;
  }

  createTable(stats, tableConfig) {
    var self = this;
    var subContainer = $("<div/>").addClass("spacer-big");
    var table = $("<table/>")
      .addClass("crud-list")
      .attr("id", tableConfig.idName + "Table");
    var headers = this.createColumnHeaders(tableConfig.headers);

    table.append(headers);
    $.each(config.months, function(index, month) {
      table.append(self.createRow(month, stats, tableConfig));
    });

    subContainer.prepend(table);
    subContainer.prepend($("<h2>").text(tableConfig.title));

    return subContainer;
  }

  initializeTables(mainContainer, stats) {
    var self = this;
    var subContainer = $("<div/>").attr("id", "tablesContainer");

    $.each(config.tablesConfig, function(index, tableConfig) {
      subContainer.append(self.createTable(stats, tableConfig));
    });
    mainContainer.prepend(subContainer);
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
