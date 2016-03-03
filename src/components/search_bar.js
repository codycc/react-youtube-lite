import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''}; // Initial state is blank
  }

  render() {
    return (
      <div className="search-bar">
     <input
      value ={this.state.term}
      onChange={event => this.onInputChange(event.target.value)}/>
      {/*  above is saying that on key change run new function syntax which takes event and sets new state to the event target value
        then stores it in value by using this.state.term */}
     </div>
   );
  }

  onInputChange(term) { // the method from above being defined in this component
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
