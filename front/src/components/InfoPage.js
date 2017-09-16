import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './css/InfoPageStyle.css';

class InfoPage extends Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="InfoPage"
        className="Drawer"
        aria-hidden={this.props.visibleInfo ? 'false' : 'true'}
        tabIndex="0">
        InfoPage
      </div>
    );
  }
}

InfoPage.propTypes = {
  pez: PropTypes.object.isRequired,
  visibleInfo: PropTypes.bool.isRequired
}

export default InfoPage;
