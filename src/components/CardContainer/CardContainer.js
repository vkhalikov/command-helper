import React from 'react';
import Card from '../Card/Card';
import gitData from '../../data/git';
import npmData from '../../data/npm';
import windowsData from '../../data/windows';


function CardContainer(props) {

	let data = [];

	switch (props.selectFilter) {
		case 'all': data = gitData.concat(npmData, windowsData);
								break;
		case 'git': data = gitData;
								break;
		case 'npm': data = npmData;
								break;
		case 'windows': data = windowsData;
								break;
	}

	let filteredData = data.filter((object) => {
		return (object.command.toLowerCase()
													.includes(props.searchFilter.toLowerCase()) ||
						object.category.toLowerCase().
													includes(props.searchFilter.toLowerCase()) ||
						object.description.toLowerCase()
													.includes(props.searchFilter.toLowerCase()))
	});

	let cards = filteredData.map((obj, i) => {
  	return <Card 
  	key={i} 
  	command={obj.command} 
		category={obj.category} 
  	description={obj.description} 
  	/>;
	});

	return (
		<div className="container d-flex flex-row flex-wrap justify-content-between">
		{cards}
		</div> 
	)
}

export default CardContainer;