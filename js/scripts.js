//back end
function Order() {
  this.pizzas = [],
  this.currentId = 0
}
Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
};
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
Order.prototype.findId = function(id) {
  for (var i=0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  }
  return false;
};
function displayPizza(pizzaToDisplay) {
  var pizzaList = $("ul#pizzas");
  var htmlForPizza = "";
  pizzaToDisplay.pizzas.forEach(function(pizza){
    htmlForPizza += "<li id=" + pizza.id + ">" + "Pizza" + pizza.id + " will cost $" + pizza.price +  "</li>";
  });
  pizzaList.html(htmlForPizza);
}

function Pizza() {
  this.size = "default",
  this.price = "default",
  this.topping = "defualt"
}
Pizza.prototype.setSize = function(sizeName) {
  this.size = sizeName;
};
Pizza.prototype.setPrice = function(price) {
  this.price = price;
};
Pizza.prototype.setTopping = function(toppingsArray) {
  this.topping = toppingsArray;
};


//front end
$(document).ready(function(){
  var order = new Order();
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    var toppingsArray = [];
    var size = $("#size").val();
    var sizeName = "default";
    if(size == 1){
      sizeName = "small";
    }if(size == 2){
      sizeName = "medium";
    }if(size == 3){
      sizeName = "large";
    }
    $("input:checkbox[name=topping]:checked").each(function(){
       var topping = $(this).val();
       toppingsArray.push(topping);
    });
    var price = size + toppingsArray.length;
    var pizza = new Pizza();
    pizza.setSize(sizeName);
    pizza.setPrice(price);
    pizza.setTopping(toppingsArray);
    order.addPizza(pizza);
    displayPizza(order);
  });
});
