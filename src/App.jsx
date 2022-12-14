import React from "react";
import "./App.css";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    this.state.text == "" ||
      this.setState({ list: [...this.state.list, this.state.text] });

    this.state.text = "";

    e.preventDefault();
  }

  render() {

    const changeText = (event) => {
      this.setState({ text: event.target.value });
    };
    return (
      
      <div className="mainContainer">
      <Header />
      <div className="App container-fluid">

        <div className="appInnerContainer container shadow-lg">
          <form method={this.onSubmit}>
            <input
              className="form-control"
              onChange={changeText}
              type="text"
              value={this.state.text}
              placeholder="New Task"
            />
            <ul>
              {this.state.list.map((items, index) => {
                return <li key={index}>{items.toLocaleUpperCase()}</li>;
              })}
            </ul>
            <button
              className="btn btn-primary"
              onClick={this.onSubmit}
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>


      </div>
     
    );
  }
}

export default App;
