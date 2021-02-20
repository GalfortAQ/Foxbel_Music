import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import "../css/search.css";

class Search extends Component {
  state = {
    term: "",
  };
  handleInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  submitSearch = (event) => {
    event.preventDefault();
    let { term } = this.state;
    this.props.searchElements(term);
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="search">
          <Row className="search-row">
            <Col md="10">
              <div className="search-input">
                <form onSubmit={(event) => this.submitSearch(event)}>
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Buscar"
                      className="form-control"
                      value={this.state.term}
                      onChange={(event) => this.handleInputChange(event)}
                    />
                    <div class="input-group-append">
                      <button class="btn" type="submit">
                        <i className="fas fa-search">
                          <FontAwesomeIcon icon={faSearch} />
                        </i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <Col md="2" className="user-section">
              <span className="user-content">
                <i className="fas fa-search user-icon">
                  <FontAwesomeIcon icon={faUser} />
                </i>
              </span>
              <span> User Name</span>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Search;
