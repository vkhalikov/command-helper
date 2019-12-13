import React from 'react';

let styleObj = {overflowY: 'scroll', height: '92vh', paddingLeft: '15px'};

function Scroll(props) {
	return (
		<div style={styleObj}>
			{props.children}
		</div>
	)
}

export default Scroll;
