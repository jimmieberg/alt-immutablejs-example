'use strict';

import React from 'react';

export default class Counter extends React.Component {
    /**
     * Initiate button
     */
    constructor(props) {
        super(props);
    }

    /**
     * Add an item onClick
     */
    onClickButton() {
        this.props.ItemActions.addItem('Another item ' + Math.random() + ' !');
    }

    render() {
        return (
            <button onClick={this.onClickButton.bind(this)}>Click me</button>
        );
    }
};
