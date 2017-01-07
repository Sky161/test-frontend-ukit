/**
* Controller - class for handle actions
*
* @Author: Andrey Chechkin
* @Date:   2017-01-05T11:45:35+03:00
* @Email:  andrey.chechkin@me.com
* @Last modified by:   andrey_chechkin
* @Last modified time: 2017-01-07T10:39:47+03:00
*/

import Model from "./model.js";
import View from "./view.js";

class Controller {
	init() {
		const data = Model.getDataArr();
		View.render("#list-book", View.generateAllItems(data));
	}
}

export default new Controller();
