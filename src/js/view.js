/**
* Class for render view
*
* @Author: Andrey Chechkin
* @Date:   2017-01-05T11:45:43+03:00
* @Email:  andrey.chechkin@me.com
* @Last modified by:   andrey_chechkin
* @Last modified time: 2017-01-08T21:20:22+03:00
*/

class View {
	generateItem(item) {
		return `
			<div class="panel panel-default" data-id="${item.id}">
				<div class="panel-heading">
					<h3 class="panel-title">${item.name}</h3>
				</div>
				<div class="panel-body">
					Автор: ${item.author}
				</div>
				<div class="panel-footer">
					<button type="button" class="btn btn-primary">Редактировать</button>
					<button type="button" class="btn btn-danger">Удалить</button>
				</div>
			</div>`;
	}

	generateAllItems(arrItems) {
		let res = "";
		arrItems.map(item => {
			res += this.generateItem(item);
		});
		return res;
	}

	render(selector, html) {
		document.body.querySelector(selector).innerHTML = html;
	}

	deleteItem(item) {
		item.remove();
	}
}

export default new View();
