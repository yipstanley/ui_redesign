var container = document.getElementById("orderItems");

class Order {
	constructor(name, cost, size) {
		this.name = name;
		this.cost = cost;
		this.size = size;
	}
}

var orders = 	[	new Order("Cheese Pizza", 12.25, "Large"),
				 	new Order("Pepperoni Pizza", 11.35, "Medium"),
				 	new Order("Hawaiian Pizza", 12.95, "Medium")
				];

function createText(text, bold, fontSize) {
	var newText = document.createElement("div");
	newText.textContent = text;
	newText.style.fontSize = fontSize;
	newText.style.margin = "0 5px 0 5px";
	newText.style.fontWeight = "5s00";
	if (bold) {
		newText.style.fontWeight = "Bold";
	}
	return newText;
}

function createItem(order) {
	var div = document.createElement("div");
	div.style.display = "grid";
	div.style.gridTemplateColumns = "12px 5fr 1fr";
	div.style.gridTemplateRows = "1fr 10px";
	div.style.margin = "5px 0 5px 0";
	
	var x = createText("X", false, "1.1vw");
	x.style.color = "#FE4848";	
	x.style.gridColumn = "1";
	x.style.gridRow = "1";
	
	var text = createText(order.size + " " + order.name, false, "1.1vw");
	text.style.gridColumn = "2";
	text.style.gridRow = "1";
	
	var cost = createText("$" + order.cost, false, "1.1vw");
	cost.style.gridColumn = "3";
	cost.style.gridRow = "1";
	cost.style.textAlign = "right";
	
	var edit = createText("(EDIT)", false, "1vw");
	edit.style.color = "#6270EB";
	edit.style.gridColumn = "2 / 4";
	edit.style.gridRow = "2";
	edit.style.verticalAlign = "Top";
	edit.style.marginTop = "-3px";
	
	div.appendChild(text);
	div.appendChild(x);
	div.appendChild(cost);
	div.appendChild(edit);
	
	container.appendChild(div);
}

var i;
for (i = 0; i < orders.length; i++) {
	createItem(orders[i]);
}