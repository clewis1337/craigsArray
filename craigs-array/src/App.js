import React, { Component } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    
  };

  function = id => {
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header />
        
      </Wrapper>
    );
  }
}

export default App;
