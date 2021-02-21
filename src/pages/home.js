import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Search from "../components/search";
import "../css/home.css";
import "../css/player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import * as methods from "../services/getDeezer";
import icon from "../images/foxbel-music.png";

export default class Home extends Component {
  state = {
    elements: [],
    track: {
      album: "",
    },
  };
  componentDidMount() {
    methods.getElements().then((item) =>
      this.setState({
        elements: item,
      })
    );
  }
  searchElements = (term) => {
    methods.getElements(term).then((item) =>
      this.setState({
        elements: item,
      })
    );
  };
  renderElements() {
    const { elements } = this.state;
    return elements && elements.length
      ? elements.map((item, index) => (
          <Col key={index} md="3" mb="2" className="card-col">
            <div className="card">
              <div className="card-img-container">
                <img
                  src={item.album.cover_big}
                  alt=""
                  className="card-img-top"
                />
                {/* <Link to={`/player/${item.id}`} className="link">
                  <i className="card-icons">
                    <FontAwesomeIcon icon={faPlay} />
                  </i>
                </Link> */}
                <Link onClick={() => this.handleSort(item.id)} className="link">
                  <i className="card-icons">
                    <FontAwesomeIcon icon={faPlay} />
                  </i>
                </Link>
              </div>
              <div className="card-body">
                <div className="card-title">{item.title}</div>
                <span className="text-primary">{item.artist.name}</span>
              </div>
            </div>
          </Col>
        ))
      : null;
  }
  handleSort = (id) => {
    methods.getTrack(id).then((item) =>
      this.setState({
        track: item,
      })
    );
  };
  renderPlayer = () => {
    const { track } = this.state;
    return (
      <Row>
        <Col className="player-detail-img"  md="1">
          <img className="player-img" src={track.album.cover_medium} alt="" />
        </Col>
        <Col className="player-detail-name"  md="2">
          <p className="player-title">{track.title}</p>
          <span className="player-album">{track.album.title}</span>
        </Col>
        <Col className="player-resource">
          <audio src={track.preview} controls autoPlay>
            Your browser does not support the audio element.
          </audio>
        </Col>
      </Row>
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className="container container-main">
          <Row>
            <Col md="3" mx="auto" className="sidebar-container">
              <nav className="sidebar">
                <div class="sidebar-header">
                  <img className="logo-header" src={icon} />
                </div>
                <div className="sidebar-links">
                  <ul class="list-unstyled components">
                    <p className="list-links-header">Mi Librería</p>
                    <li className="active">
                      <a href="#" className="side-bar-link">
                        Recientes
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-link">
                        Artistas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-link">
                        Albums
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-link">
                        Canciones
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-link">
                        Estaciones
                      </a>
                    </li>
                  </ul>
                  <ul class="list-unstyled components">
                    <p className="list-links-header">Playlist</p>
                    <li>
                      <a href="#" className="side-bar-link">
                        Metal
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-link">
                        Para bailar
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-link">
                        Rock 90s
                      </a>
                    </li>
                    <li>
                      <a href="#" className="side-bar-link">
                        Baladas
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </Col>
            <Col md="9" mx="auto" className="content-container">
              <Search searchElements={this.searchElements} />
              <br />
              <p className="content-container-title">Resultados</p>
              <Row className="container-cards">{this.renderElements()}</Row>
            </Col>
          </Row>
          <div className="footer">{this.renderPlayer()}</div>
        </div>
      </React.Fragment>
    );
  }
}
