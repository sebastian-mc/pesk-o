import React, {Component} from 'react';

import SearchBar from './components/SearchBar.js';
import FishGrid from './components/FishGrid.js';
import InfoPage from './components/InfoPage.js';

class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      peces: [
        {image: "url", name: "pez"},
        {image: "url", name: "OtroPez"},

      ],
      pez: {},
      visibleInfo: false,
      search: ""
    }
  }

  search(text) {
    console.log("Here: "+text);
    this.setState({
      search: text
    });
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar search={(txt) => this.search(txt)}/>
        </div>
        <div>
          <FishGrid peces={this.state.peces.filter((p) => {
            return p.name.toLowerCase().startsWith(this.state.search.toLowerCase());
          }) }/>
        </div>
        <div>
          <InfoPage pez={this.state.pez}
            visibleInfo={this.state.visibleInfo}/>
        </div>
      </div>
    );
  }
}

export default App;
