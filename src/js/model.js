/**
* Model for data
*
* @Author: Andrey Chechkin
* @Date:   2017-01-05T11:33:18+03:00
* @Email:  andrey.chechkin@me.com
* @Last modified by:   andrey_chechkin
* @Last modified time: 2017-01-17T22:48:13+03:00
*/

export default class Model {
	constructor() {
		if(!localStorage.books) {
			this.data = [];
		} else {
			this.data = JSON.parse(localStorage.books);
		}
	}

	setLocalstorage() {
		localStorage.setItem("books", JSON.stringify(this.data));
	}

	getDataArr() {
		return this.data;
	}

	deleteItem(id) {
		this.data = this.data.filter(item => {
			return item.id != id;
		});
		this.setLocalstorage();
	}

	addItem(item) {
		this.data.push(item);
		this.setLocalstorage();
	}

	getItemById(id) {
		return this.data.find(item => {
			if(item.id == id) {
				return true;
			}
		});
	}

	updateItem(id, data) {
		const element = this.getItemById(id);
		for(const idx in data) {
			element[idx] = data[idx];
		}
		this.setLocalstorage();
	}
}
