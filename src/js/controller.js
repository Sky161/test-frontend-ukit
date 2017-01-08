/**
* Controller - class for handle actions
*
* @Author: Andrey Chechkin
* @Date:   2017-01-05T11:45:35+03:00
* @Email:  andrey.chechkin@me.com
* @Last modified by:   andrey_chechkin
* @Last modified time: 2017-01-08T21:21:10+03:00
*/

import Model from "./model.js";
import View from "./view.js";

class Controller {
	init() {
		const data = Model.getDataArr();
		View.render("#list-book", View.generateAllItems(data));
	}

	deleteItem(selector) {
		const id = selector.dataset.id;
		Model.deleteItem(id);
		View.deleteItem(selector);
	}
}

export default new Controller();
