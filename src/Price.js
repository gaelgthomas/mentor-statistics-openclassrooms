/**
 * Static class with all utilities to use compute a session price.
 * @class
 */
class Price {
  /**
   * Compute the price of the mentoring session by his level and status.
   * @param {String} level - The level of the mentoring session.
   * @param {String} status - The state of the mentoring session.
   */
  static computePriceByLevelAndStatus(level, status) {
    var price = config.sessionPrices[level];

    if (status == "Annulée tardivement" || status == "Étudiant absent" || status == "Étudiante absente") {
      price = price / 2;
    }

    return price;
  }
}
