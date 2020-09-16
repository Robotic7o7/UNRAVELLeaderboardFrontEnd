import React, { Component } from "react";
import "./styles.css";
import Leaderboard from "./Leaderboard";

import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data:[] }
  }

  componentDidMount() {  
    axios
      .get("https://backupform-2.robotic7o7.repl.co/api/users")
      .then(res => {
        var score = res.data;
        console.log(res.data)
        this.setState({ data: score});
      })
      .catch(error => {
        console.log(error);
      });
  }

  
  render() {
    return (
      <Leaderboard title='Leaderboard WiE Unravel' data={this.state.data} />
    );
  }
}

export default App
