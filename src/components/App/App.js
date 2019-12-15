import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CardContainer from '../CardContainer/CardContainer';
import Scroll from '../Scroll/Scroll';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '', 
      select: 'all'
    }
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSelectChange = (event) => {
    this.setState({ select: event.target.value})
  }

  render() {
    return (
    <div className="t">
    <h1 className="title-main text-center mb-3">Command Helper</h1>
    <SearchBar selectValue={this.state.select} searchChange={this.handleSearchChange} selectChange={this.handleSelectChange} />
    <Scroll>
    <CardContainer searchFilter={this.state.search} selectFilter={this.state.select} />
    </Scroll>
    </div>
    )
  }
}
 
export default App;