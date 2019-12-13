import React, {Component} from 'react';

class SearchBar extends Component {

	render() {
		return (
			<div className="container">
				<div className="input-group my-2 px-2">
					<div className="input-group-prepend">
    				<span className="input-group-text">Select a gategory:</span>
  				</div>
					<select className="custom-select mw-25" value={this.props.selectValue} onChange={this.props.selectChange}>
						<option value="all">All</option>
						<option value="git">git</option>
						<option value="npm">npm</option>
						<option value="windows">Windows</option>
					</select>
					<input className="form-control w-50" type="search" placeholder="Enter a keyword" onChange={this.props.searchChange}/>
				</div>
			</div>
		)
	}
}

export default SearchBar;