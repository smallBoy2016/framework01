var React = require("react");
var ReactDOM = require("react-dom");

import App from './app';

var Hello = React.createClass({
  render:function(){
  	return 	(
  		<div>
  			<h1>react1</h1>
				<App />
  		</div>
  	)

  }

});

var div1 = document.createElement("div");

document.body.appendChild(div1);

ReactDOM.render(
  <Hello />,
  div1
 );