/**
* Controller - class for handle actions
*
* @Author: Andrey Chechkin
* @Date:   2017-01-05T11:45:35+03:00
* @Email:  andrey.chechkin@me.com
* @Last modified by:   andrey_chechkin
* @Last modified time: 2017-01-17T22:22:53+03:00
*/

import modelClass from "./model.js";
import viewClass from "./view.js";

const listBook = "#list-book";

//init classes
const Model = new modelClass();
const View = new viewClass();

class Controller {

	init() {
		View.render(listBook, View.generateAllItems(Model.getDataArr()));
	}

	deleteItem(selector) {
		const id = selector.dataset.id;
		Model.deleteItem(id);
		View.deleteItem(selector);
	}

	addItem(form, item) {
		if(form.dataset.id) {
			item.id = form.dataset.id;
			Model.updateItem(form.dataset.id, item);
			View.render(listBook, View.generateAllItems(Model.getDataArr()), true);
			delete form.dataset.id;
		} else {
			item["id"] = Model.data.length + 1;
			Model.addItem(item);
			View.render(listBook, View.generateItem(item));
		}
		form.reset();
	}

	transferDataForm(form, item) {
		const id = item.dataset.id;
		form.dataset.id = id;
		View.pushFormData(form, Model.getItemById(id));
	}
}

export default new Controller();
