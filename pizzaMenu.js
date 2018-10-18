var container = document.getElementById("pizzaContainer");

const mq = window.matchMedia( "only screen and (max-width: 600px)" );

class Pizza {
	constructor(name, description, image, cost) {
		this.name = name;
		this.description = description;
		this.image = image;
		this.cost = cost;
	}
}

var pizzas = 	[	new Pizza("Cheese", "Mozzarella Cheese and Tomato Sauce", "cheese.jpg", "15.35"),
					new Pizza("Pepperoni", "Pepperoni, Mozzarella Cheese, and Tomato Sauce", "pepperoni.jpg", "19.60"),
					new Pizza("Hawaiian", "Ham, Pineapple, Mozzarella Cheese, and Tomato Sauce", "hawaiian.jpg", "23.90"),
					new Pizza("Buffalo Chicken", "Spicy Chicken, Blue Cheese, Mozzarella Cheese, and Creme Fraiche", "buffalochicken.jpg", "23.90"),
					new Pizza("Spinach Ricotta", "Sauteed Spinach with Mushrooms and Onions, Dollops of Ricotta Cheese and Mozzarella Cheese", "spinachfeta.jpg", "23.90"),
					new Pizza("Meat Craver's", "Pepperoni, Ground Beef, Sausage, and Ham", "meatlovers.jpg", "26.05"),
				]

function createText(text, bold, fontSize) {
	var newText = document.createElement("div");
	newText.textContent = text;
	newText.style.fontSize = fontSize;
	newText.style.margin = "0 5px 0 5px";
	if (bold) {
		newText.style.fontWeight = "Bold";
	}
	return newText;
}

function createComboBox(label, options) {
	var sel = document.createElement("select");
	sel.name = label;
	sel.style.margin = "5px";
	sel.style.minHeight = "20px";
	sel.style.minWidth = "60px";
	sel.style.textAlign = "right";
	var j;
	for (j = 0; j < options.length; j++) {
		var opt = document.createElement("option");
		opt.value = options[j];
		opt.textContent = options[j];
		sel.appendChild(opt);
	}

	return sel;
}

function createItem(pizza) {
	var div = document.createElement("div");
	div.style.width = "45%";
	div.style.minWidth = "250px";
	div.style.height = "15vw";
	div.style.minHeight = "150px";
	div.style.background = "white";
	div.style.border = "2px solid black";
	div.style.marginTop = "1em";
	div.style.padding = "10px 10px 10px 5px";
	div.style.float = "left";
	div.style.display = "grid";
	div.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
	div.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 50px";

	var name = createText(pizza.name, true, "1.5vw");
	name.style.gridColumn = "1 / 3";
	name.style.gridRow = "1";

	var image = document.createElement("div");
	image.style.gridColumn = "3 / 5";
	image.style.gridRow = "1 / 6";
	image.style.backgroundImage = "url(" + pizza.image + ")";
	image.style.backgroundSize = "cover";
	image.style.borderRadius = "10px";
	image.style.border = "1px solid black";

	var desc = createText(pizza.description, false, "1vw");
	desc.style.gridColumn = "1 / 3";
	desc.style.gridRow = "2 / 4";
	desc.style.overflow = "hidden";

	var size = createText("Size:", false, "1.25vw");
	size.style.gridColumn = "1";
	size.style.gridRow = "4";
	size.style.margin = "5px";

	var sizeChoose = createComboBox("Size", ["Small", "Medium", "Large", "Extra Large"]);
	sizeChoose.style.gridColumn = "2";
	sizeChoose.style.gridRow  = "4";

	var quantity = createText("Quantity:", false, "1.25vw");
	quantity.style.gridColumn = "1";
	quantity.style.gridRow = "5";
	quantity.style.margin = "5px";

	var quantChoose = createComboBox("Quantity", ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
	quantChoose.style.gridColumn = "2";
	quantChoose.style.gridRow  = "5";

	var btn = document.createElement("button");
	btn.style.gridColumn = "1 / 3";
	btn.style.margin = "5px";
	btn.textContent = "ADD TO ORDER";
	btn.style.fontSize = "1.4vw";
	btn.style.background = "#BF0000";
	btn.style.color = "white";
	btn.style.border = "none";
	btn.style.boxShadow = "4px 4px 0px 0px black"

	var costLabel = createText("COST:", false, "1.5vw");
	costLabel.style.gridColumn = "3";
	costLabel.style.gridRow = "6";
	costLabel.style.margin = "auto 5px";

	var cost = createText("$" + pizza.cost, false, "1.5vw");
	cost.style.gridColumn = "4";
	cost.style.gridRow = "6";
	cost.style.textAlign = "right";
	cost.style.margin = "auto 5px";

	if (matchMedia) {
		const mq = window.matchMedia( "only screen and (max-width: 600px)" );
		mq.addListener(function() {
			if (mq.matches) {
				div.style.width = "90%";
				div.style.height = "250px";
				name.style.fontSize = "20pt";
				desc.style.fontSize = "12pt";
				size.style.fontSize = "14pt";
				quantity.style.fontSize = "10pt";
				btn.style.fontSize = "10pt";
				costLabel.style.fontSize = "14pt";
				cost.style.fontSize = "14pt";
			}
			else {
				div.style.width = "45%";
				div.style.height = "15vw";
				name.style.fontSize = "1.5vw";
				desc.style.fontSize = "1vw";
				size.style.fontSize = "1.25vw";
				quantity.style.fontSize = "1.25vw";
				btn.style.fontSize = "1.5vw";
				costLabel.style.fontSize = "1.5vw";
				cost.style.fontSize = "1.5vw";
			}
		});
	};

	div.appendChild(name);
	div.appendChild(image);
	div.appendChild(desc);
	div.appendChild(size);
	div.appendChild(sizeChoose);
	div.appendChild(quantity);
	div.appendChild(quantChoose);
	div.appendChild(btn);
	div.appendChild(costLabel);
	div.appendChild(cost);

	// div.appendChild(createRightSide(pizza.image, createText(pizza.cost, false, 20)));
	// div.appendChild(createLeftSide(createText(pizza.name, true, "20pt"), createText(pizza.description, false, "16pt")));
	container.appendChild(div);
}

var i;
for (i = 0; i < pizzas.length; i++) {
	createItem(pizzas[i]);
}