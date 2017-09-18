import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FishInfoPage from './FishInfoPage.js';
import FishRecipePage from './FishRecipePage.js';

import './css/InfoPageStyle.css';

class InfoPage extends Component
{
  constructor(props) {
    super(props);
    this.ExitPage = this.ExitPage.bind(this);
    this.state = {
      info: "active",
      receta: ""
    }
  }

  ExitPage() {
    this.props.exit();
  }

  ChangeTab(tab) {
    if(tab === "info") {
      this.setState({
        info: "active",
        receta: ""
      });
    }
    else {
      this.setState({
        info: "",
        receta: "active"
      });
    }
  }

  render() {
    return (
      <div id="InfoPage"
        className="Drawer"
        aria-hidden={this.props.visibleInfo ? 'false' : 'true'}
        tabIndex="0">
        <div className="container-fluid content">
          <div className="row pageHeader">
            <div className="col-sm-2 image">
              <img src={this.props.pez.url} alt={"Foto de "+this.props.pez.nombre}/>
            </div>
            <div className="col-sm-10 name">
              <h1>{this.props.pez.nombre}</h1>
            </div>
            <div className="exit" onClick={() => this.ExitPage()}>
              <img src="./assets/icons/exit.svg" alt="Boton de salida"/>
            </div>
          </div>
          <div className="row tabPage">
            <div className={"col-sm-4 tab " + this.state.info} onClick={() => this.ChangeTab("info")}>
              <h4>Información</h4>
            </div>
            <div className={"col-sm-4 tab " + this.state.receta} onClick={() => this.ChangeTab("receta")}>
              <h4>{this.props.pez.recetas && this.props.pez.recetas.length !== 0? "Recetas" : "¿Donde lo encontraste?"}</h4>
            </div>
          </div>
          <FishInfoPage pez={this.props.pez} active={this.state.info}/>
          <FishRecipePage recetas={this.props.pez.recetas?this.props.pez.recetas:[] } active={this.state.receta}/>
        </div>
      </div>
    );
  }
}

InfoPage.propTypes = {
  pez: PropTypes.object.isRequired,
  visibleInfo: PropTypes.bool.isRequired,
  exit: PropTypes.func.isRequired
}

export default InfoPage;
