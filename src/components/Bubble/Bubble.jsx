import React from 'react';
import config from '../../config';
import './Bubble.css';

class Bubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      targetTick: 1,
      style: {
        top: this.randomPosition(this.props.height),
        left: this.randomPosition(this.props.width),
      },
    }
  }

  componentWillReceiveProps(props) {
    if (props.tick >= this.state.targetTick) {
      this.changeLocation();
    }
  }

  randomPosition = (bound) => {
    return Math.floor((Math.random() * bound) / config.UNIT) * config.UNIT;
  }

  randomTicks = () => {
    return Math.ceil(Math.random() * config.SPEED_K + config.SPEED_B);
  }

  changeLocation = () => {
    const ticks = this.randomTicks();

    const newStyle = {
      ...this.state.style,
      transitionDuration:  `${ticks * config.TICK / 1000}s`,
    };

    if (Math.random() > 0.5) {
      newStyle.top = this.randomPosition(this.props.height);
    } else {
      newStyle.left = this.randomPosition(this.props.width);
    }

    this.setState({
      style: newStyle,
      targetTick: this.state.targetTick + ticks,
    });
  }

  render() {
    // Artificially long execution time.
    const e = performance.now() + 0.8;
    while (performance.now() < e) {}

    return (
      <div className="Bubble" style={this.state.style}>
        <span className="Bubble__label">
          {this.state.targetTick - this.props.tick}
        </span>
      </div>
    )
  }
}

export default Bubble;
