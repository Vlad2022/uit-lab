window.onload = function() {
  var view = new View()
  var ship = new PirateShip()
  var controller = new Controller(view,ship)
  controller.bindListeners()
}


var Controller = function(display, model) {
  this.display = display;
  this.model = model;
}

Controller.prototype = {
  bindListeners:  function() {
    var button = this.display.getButton();
    button.addEventListener('click', this.moveModel.bind(this));
  },

  moveModel: function() {
    this.model.incrementLocation()
    var newLocation = this.model.location
    this.display.setShipLocation(newLocation)
  }
}
