import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onformsubmit(this.state.inputText);
  };

  onInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={(event) => this.onFormSubmit(event)}
          className="ui form"
        >
          <div className="field">
            <label>Search Image</label>
            <div className="ui input">
              <input
                type="text"
                name="search"
                value={this.state.inputText}
                onChange={this.onInputChange}
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
