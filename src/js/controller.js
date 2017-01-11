/**
* Controller - class for handle actions
*
* @Author: Andrey Chechkin
* @Date:   2017-01-05T11:45:35+03:00
* @Email:  andrey.chechkin@me.com
* @Last modified by:   Andrey Chechkin
* @Last modified time: 2017-01-11T11:06:01+03:00
*/

import Model from "./model.js";
import View from "./view.js";

const listBook = "#list-book";

class Controller {

	init() {
		const data = Model.getDataArr();
		View.render(listBook, View.generateAllItems(data));
	}

	deleteItem(selector) {
		const id = selector.dataset.id;
		Model.deleteItem(id);
		View.deleteItem(selector);
	}

	addItem(item) {
		Model.addItem(item);
		View.render(listBook, View.generateItem(item));
	}

	getLengthData() {
		return Model.data.length;
	}

	transferDataForm(form, item) {
		const id = item.dataset.id;
		View.pushFormData(form, Model.getItemById(id));
	}
}

export default new Controller();
