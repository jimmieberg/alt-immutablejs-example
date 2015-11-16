const alt = require('alt-instance.js');

class ItemActions {
	/**
	 * Add an item
	 */
	addItem(item) {
		this.dispatch(item);
	}
}

module.exports = alt.createActions(ItemActions);