import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import * as methods from "../services/getDeezer";

export default class Player extends Component {
  state = {
    track: {},
  };
  componentDidMount() {
    methods.getTrack(this.props.match.params.id).then((item) => {
      this.setState({
        track: item,
      });
    });
  }
  renderPlayer = () => {
    const { track } = this.state;
    console.log(track);
    return (
      <div>
        {/* <a>{track.album.id}</a> */}
        <audio src={track.preview} controls autoPlay>
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };
  render() {
    console.log(this.state);
    return (
      <Row className="player-container">
        <Col md="12" mx="auto" className="player-section">
          {this.renderPlayer()}
        </Col>
      </Row>
    );
  }
}
