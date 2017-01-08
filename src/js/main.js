/**
* Entry point in app
*
* @Author: Andrey Chechkin
* @Date:   2017-01-03T18:08:28+03:00
* @Email:  andrey.chechkin@me.com
* @Last modified by:   andrey_chechkin
* @Last modified time: 2017-01-08T21:25:22+03:00
*/

import styles from "../sass/main.sass";
import Controller from "./controller.js";

document.addEventListener("DOMContentLoaded", () => {
	Controller.init();

	const listBookSelector = document.body.querySelector("#list-book");
	listBookSelector.addEventListener("click", e => {
		const panelBlock = e.target.closest(".panel-default");
		if(e.target.classList.contains("btn-danger")) {
			e.preventDefault();
			Controller.deleteItem(panelBlock);
		}
	});
});
