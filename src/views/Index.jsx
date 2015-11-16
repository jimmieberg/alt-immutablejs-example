'use strict';

// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Button from 'components/Button.jsx';
// Stores
import ItemStore from 'stores/ItemStore.js';
import ItemActions from 'actions/ItemActions.js';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Listen to store mutation
    	ItemStore.listen(this.onChange.bind(this));
    }

    /**
     * On store update
     */
    onChange(state) {
    	this.setState(state);
    }

    render() {
        // List element
        let List = ItemStore.getState().items.filter(function(item) {
            return true;
        }).map(function(item, i) {
            return <div key={i}>{ item }</div>;
        });
        return (
            <div>
                <h1>App</h1>
				<hr />
				<Button ItemStore={ItemStore} ItemActions={ItemActions}></Button>
				<br />
				{ItemStore.getState().items.size} items:
                <br />
                <br />
                { List }
            </div>
        );
    }
};

// Render view
var Index = {
	init: function(elementId) {
		ReactDOM.render(
			<div>
				<App />
			</div>,
			document.getElementById(elementId)
		);
	}
};

module.exports = Index;