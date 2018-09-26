import React, { Component } from 'react';

// first we will make a new context
const myContext = React.createContext()

// Then create a provider component
class MyProvider extends React.Component {
  state = {
    name: "Wes",
    age: 100,
    cool: true 
  }

  render() {
    return (
      <myContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}> 
        {this.props.children}
      </myContext.Provider>
    )
  }
}


const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends React.Component {
  render() {
    return (
      <div className="person">
        <myContext.Consumer >
          {(context) => (
            <React.Fragment> {/* Allow you to return more than a value*/}
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}>Make me older</button>
            </React.Fragment>
          )}
        </myContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the app</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}


export default App;
