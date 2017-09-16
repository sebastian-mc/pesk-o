import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './css/SearchBarStyle.css';

class SearchBar extends Component
{
  constructor(props) {
    super(props);
    this.OnInput = this.OnInput.bind(this);
  }

  OnInput(evt) {
    this.props.search(evt.target.value);
  }

  render() {
    return (
      <div id="SearchBox">
        <div className="content">
          <h4 className="SearchLabel">Busca un pez</h4>
          <input className="InputBox"
            type="text"
            placeholder="Busqueda"
            onInput= {(e) => this.OnInput(e)}/>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
}

export default SearchBar;
