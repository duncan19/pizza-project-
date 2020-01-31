//add constructor
function Order() {
  this.pizzas = [],;
  this.currentId = 0;
}
function Pizza(size, topping, price) {
  this.size = size,;
  this.topping1 = topping,;
  this.price = price;
}
Order.prototype.addPizza = function(pizza) {
  contact.id = this.assignId();
  this.pizzas.push(pizza);
}
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//doc ready

var order = new Order;
var size = $("#size").val();

var toppingsArray = []
var price = size + toppingsArray.length();
$("input:checkbox[name=toppings]:checked").each(function(){
   var topping = $(this).val();
   toppingsArray.push(topping);
});
