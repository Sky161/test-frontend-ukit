/**
* Model for data
*
* @Author: Andrey Chechkin
* @Date:   2017-01-05T11:33:18+03:00
* @Email:  andrey.chechkin@me.com
* @Last modified by:   Andrey Chechkin
* @Last modified time: 2017-01-12T11:28:10+03:00
*/

const DATA = [{
	"id": 1,
	"name": "Keylex",
	"author": "Jennifer George",
	"est": "02.07.2016",
	"count-page": 64
}, {
	"id": 2,
	"name": "Bitwolf",
	"author": "Christopher Brooks",
	"est": "05.09.2016",
	"count-page": 564
}, {
	"id": 3,
	"name": "Alphazap",
	"author": "Melissa Campbell",
	"est": "08.10.2016",
	"count-page": 551
}, {
	"id": 4,
	"name": "Flowdesk",
	"author": "Ralph Bradley",
	"est": "07.09.2016",
	"count-page": 333
}, {
	"id": 5,
	"name": "Voltsillam",
	"author": "Tina Russell",
	"est": "05.02.2016",
	"count-page": 259
}, {
	"id": 6,
	"name": "Wrapsafe",
	"author": "Lori Fernandez",
	"est": "31.05.2016",
	"count-page": 512
}, {
	"id": 7,
	"name": "Asoka",
	"author": "Daniel Ortiz",
	"est": "09.03.2016",
	"count-page": 354
}, {
	"id": 8,
	"name": "Stringtough",
	"author": "Arthur Pierce",
	"est": "13.09.2016",
	"count-page": 85
}, {
	"id": 9,
	"name": "Temp",
	"author": "Steven Martin",
	"est": "24.08.2016",
	"count-page": 332
}, {
	"id": 10,
	"name": "Voltsillam",
	"author": "Earl Anderson",
	"est": "09.08.2016",
	"count-page": 699
}];

class Model {
	constructor(data) {
		this.data = data;
	}

	getDataArr() {
		return this.data;
	}

	deleteItem(id) {
		this.data = this.data.filter(item => {
			return item.id != id;
		});
	}

	addItem(item) {
		this.data.push(item);
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
	}
}

export default new Model(DATA);
