import React, {Component} from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    //somecodehere
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json() //making sure it's a JSON object
      })
      .then(data => {
        console.log("This is line 18 at App.js", data);
        this.setState({
          items: data,
          isLoaded: true,
        });
      });
  }


  render() {
    var {items, isLoaded} = this.state;
    return (
      <div className="App">
      <div className="names">
      <ul>
        {items.map(el => {
          return(
            <li key={el.id}>
              Name: {el.name} | UserName: {el.username} | <a href={"https://" + el.website}>Website</a>
            </li>
          )
        })}
      </ul>
      </div>
      </div>
    );
  }
}

export default App;
