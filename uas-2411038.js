class Guitar {
  constructor(serialNumber, price, builder, model, type, backWood, topWood) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
  }

  getSerialNumber() { return this.serialNumber; }
  getPrice() { return this.price; }
  setPrice(newPrice) { this.price = newPrice; }
  getBuilder() { return this.builder; }
  getModel() { return this.model; }
  getType() { return this.type; }
  getBackWood() { return this.backWood; }
  getTopWood() { return this.topWood; }
}

module.exports = Guitar;
const Guitar = require("./Guitar");


class Inventory {
  constructor() {
    this.guitars = [];
  }

  addGuitar(sn, price, builder, model, type, backWood, topWood) {
    this.guitars.push(
      new Guitar(sn, price, builder, model, type, backWood, topWood)
    );
  }

  search(spec) {
    return this.guitars.filter(g =>
      (!spec.builder || spec.builder === g.getBuilder()) &&
      (!spec.model || spec.model.toLowerCase() === g.getModel().toLowerCase()) &&
      (!spec.type || spec.type === g.getType()) &&
      (!spec.backWood || spec.backWood === g.getBackWood()) &&
      (!spec.topWood || spec.topWood === g.getTopWood())
    );
  }
}

module.exports = Inventory;
