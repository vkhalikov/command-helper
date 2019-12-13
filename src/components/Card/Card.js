import React, {Component} from 'react';

class Card extends Component {
	render() {
		return (
			<div className="card card-body m-2 shadow-sm">
			<p className="card__command card-title"><code className="py-1 px-2">{this.props.command}</code></p>
			<p className="card__type card-subtitle text-muted">{this.props.category}</p>
			<p className="card__description card-text">{this.props.description}</p>
			</div> 
		)
	}
}

export default Card;