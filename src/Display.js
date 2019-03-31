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

  createRow(stats) {
    var row = $("<tr/>");

    row.attr("id", "statisticsRow");
    $.each(stats.getStatisticsInArray(), function(index, data) {
      row.append($("<td/>").text(data));
    });

    return row;
  }

  initializeTable(container, stats) {
    var table = $("<table/>")
      .addClass("crud-list")
      .attr("id", "statisticsTable");
    var headers = this.createColumnHeaders(stats.getStatisticsHeaders());
    var row = this.createRow(stats);

    table.append(headers);
    table.append(row);
    container.prepend(table);
  }

  refreshRow(stats) {
    var row = this.createRow(stats);

    $("#statisticsRow").replaceWith(row);
  }
}
