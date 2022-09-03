import React from 'react';
import Header from '../Header/Header';
import Results from '../Results/Results';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const names = require('@rstacruz/startup-name-generator');

class App extends React.Component {
  state = {
    headerText: 'Hello World!',
    headerExpanded: true,
    suggestedNames: []
  };

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? names(inputText) : []
    })
  }
  render() {
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded} />
        <SearchBox onInputChange={this.handleInputChange} />
        <Results suggestedNames={this.state.suggestedNames} />
      </div>
    )
  }
}

export default App