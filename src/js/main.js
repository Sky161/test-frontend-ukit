/**
* Entry point in app
*
* @Author: Andrey Chechkin
* @Date:   2017-01-03T18:08:28+03:00
* @Email:  andrey.chechkin@me.com
* @Last modified by:   Andrey Chechkin
* @Last modified time: 2017-01-12T10:58:04+03:00
*/

import styles from "../sass/main.sass";
import Controller from "./controller.js";

document.addEventListener("DOMContentLoaded", () => {
	Controller.init();

	const mainSelector = document.body.querySelector("main");
	const listBookSelector = mainSelector.querySelector("#list-book");
	const formSelector = mainSelector.querySelector("#add-book");

	formSelector.reset();

	listBookSelector.addEventListener("click", e => {
		const panelBlock = e.target.closest(".panel-default");
		if(e.target.classList.contains("btn-danger")) {
			Controller.deleteItem(panelBlock);
		} else if(e.target.classList.contains("btn-primary")) {
			Controller.transferDataForm(formSelector, panelBlock);
		}
	});

	formSelector.addEventListener("submit", e => {
		e.preventDefault();
		const res = {};

		for (let i = 0; i < formSelector.elements.length; i++) {
			const name = formSelector.elements[i].name;
			const val = formSelector.elements[i].value;
			if(name) {
				res[name] = val;
			}
		}
		Controller.addItem(formSelector, res);
	});

});
