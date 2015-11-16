const alt = require('alt-instance.js');
const ItemActions = require('actions/ItemActions.js');
const { Map, List } = require('immutable');

class ItemStore {
    /**
     * Initiate store. Contains a immutable.List of items
     */
    constructor() {
        this.bindListeners({
            handleAddItem: ItemActions.ADD_ITEM
        });
        this.state = {
            items: List()
        };
    }
    /**
     * Adds an item to the store
     */
    handleAddItem(item) {
        this.setState({ items: this.state.items.push(item) });
    }
};

export default alt.createStore(ItemStore, 'ItemStore');