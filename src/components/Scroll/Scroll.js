import React from 'react';

let styleObj = {overflowY: 'scroll', height: '92vh'};

function Scroll(props) {
	return (
		<div className="container" style={styleObj}>
			{props.children}
		</div>
	)
}

export default Scroll;
