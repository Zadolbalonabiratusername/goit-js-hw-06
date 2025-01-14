class Storage {
	#items;
	
	constructor(elem) {
		this.#items = elem;
	}
	
	getItems() {
		return this.#items;
	}
	
	addItem(newItem) {
		this.#items.push(newItem);
	}
	
	removeItem(itemToRemove) {
		const itemsNew = [];
		for(const elem of this.#items) {
			if(elem !== itemToRemove) {
				itemsNew.push(elem);
			}
		}
		this.#items = itemsNew;
	}
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
