import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      picture: '',
      friends: []
    }
  }
  handlePictureChange(e){
    let picture = e.target.value
    this.setState({
      picture
    })
  }
  handleNameChange(e){
    let name = e.target.value
    this.setState({
      name
    })
  }
  handleClick(){
    let { name, picture } = this.state
    let friend = {
      name: this.state.name,
      picture: this.state.picture

    }
    let friends = this.state.friends
    friends.push(friend)
    this.setState({
      friends
    })
  }
  

  render() {
    return (
      <div>
        <label>Picture:</label>
        <input type="text" onChange={e => this.handlePictureChange(e)}/>
        <label>Name</label>
        <input type="text" onChange={e => this.handleNameChange(e)}/>
        <button onClick= {() => this.handleClick()}>Add Friend</button>
        {this.state.friends.map((friend, i) => {
          return (
            <div key={i}>
              <h1 style={{color: 'green'}}>{friend.name}</h1>
              <img width={200} height={200} src={friend.picture} alt=""/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
