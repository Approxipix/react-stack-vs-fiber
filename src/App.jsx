import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Field from './components/Field/Field';
import config from './config';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tick: 0,
      isFiberEnabled: false,
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(this.handleTick, config.TICK);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    this.setState((prevState) => ({
      tick: prevState.tick + 1,
    }));
  }

  handleTick = () => {
    if (this.state.isFiberEnabled) {
      ReactDOM.unstable_deferredUpdates(this.tick);
    } else {
      this.tick();
    }
  }

  toggleFiber = value => {
    this.setState({
      isFiberEnabled: value,
    });
  }

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <button
            type="button"
            className={`App__button ${!this.state.isFiberEnabled && 'App__button--active'}`}
            onClick={() => this.toggleFiber(false)}
          >
            Stack
          </button>
          <button
            type="button"
            className={`App__button ${this.state.isFiberEnabled && 'App__button--active'}`}
            onClick={() => this.toggleFiber(true)}
          >
            Fiber
          </button>
        </header>

        <Field tick={this.state.tick} />
      </main>
    )
  }
}

export default App
