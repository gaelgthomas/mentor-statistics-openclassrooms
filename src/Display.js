class Display {
  constructor() {}

  createColumnHeaders(headersList) {
    var headers = $("<thead/>");

    var row = $("<tr/>");
    $.each(headersList, function(index, element) {
      row.append($("<td/>").text(element));
    });
    headers.append(row);

    return headers;
  }

  createRow(month, stats) {
    var row = $("<tr/>");

    row.attr("id", "statisticsRow" + month);
    $.each(stats.getStatisticsInArray(month), function(index, data) {
      row.append($("<td/>").text(data));
    });

    return row;
  }

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

  refreshRow(month, stats) {
    var row = this.createRow(month, stats);

    $("#statisticsRow" + month).replaceWith(row);
  }
}
