import "./search-panel.css";
import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  onChangeValue = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onSetSearchName(value);
  };

  render() {
    return (
      <input
        value={this.state.value}
        onChange={this.onChangeValue}
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
      />
    );
  }
}

export default SearchPanel;
