var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./index.css');

ReactDOM.render(	
	<div>
		<h1 className={style.h2}>Hello World!</h1>
		<h2 className='h2'>Hello Webpack Css!</h2>
	</div>,
	document.getElementById("example")
);