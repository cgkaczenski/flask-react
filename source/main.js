import React from 'react';
import ReactDOM from 'react-dom';


const createListItemElement = React.createElement;

var h1 = React.createElement('h1', {className: 'header', key:'header'},
 'This is React');
var p = React.createElement('p', {className: 'content', key:'content'},
 'And this is how it works!');

var li1 = createListItemElement('li', { className: 'item-1', key: 'item-1' }, 'Item 1');
var li2 = createListItemElement('li', { className: 'item-2', key: 'item-2' }, 'Item 2');
var li3 = createListItemElement('li', { className: 'item-3', key: 'item-3' }, 'Item 3');

var reactFragment = [li1, li2, li3];
var listOfItems = React.createElement('ul', {className: 'listOfItems'},
 reactFragment);

var list2 = <ul className="list-of-items">
			<li className="item-1">Item 1</li>
			<li className="item-2">Item 2</li>
			<li className="item-3">Item 3</li>
			</ul>;

ReactDOM.render(list2, document.getElementById('root'));
