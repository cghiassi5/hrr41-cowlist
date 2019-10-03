import React, { Component} from "react";
import axios from "axios";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cows:[]
    }
  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8080/cows')
      .then(
        res => {
          console.log('worked')
          var cows = res.data.map(i=> i.name);
          console.log(cows)
          this.setState({cows})
        }
      )
        .catch(() => console.log('cant access url, blocked by browser?'))
  }

  render(){
    return(
      <div className="App">
        <h1> Cyrus! </h1>
        <h1>{this.state.cows}</h1>
      </div>
    );
  }
}

export default App;