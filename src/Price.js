class Price {
  static getPriceByLevelAndStatus(level, status) {
    var price = config.sessionPrices[level];

    if (status == "Annulée tardivement" || status == "Étudiant absent") {
      price = price / 2;
    }

    return price;
  }
}
