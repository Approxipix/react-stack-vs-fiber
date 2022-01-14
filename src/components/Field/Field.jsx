import React from 'react';
import config from '../../config';
import Bubble from '../Bubble/Bubble';
import './Field.css';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.fieldRef = React.createRef();
  }

  render() {
    const bubblesArray = Array.from({ length: config.COUNT });

    let fieldWidth;
    let fieldHeight;

    if (this.fieldRef.current) {
      fieldWidth = this.fieldRef.current.getBoundingClientRect().width;
      fieldHeight = this.fieldRef.current.getBoundingClientRect().height;
    }

    return (
      <div ref={this.fieldRef} className="Field">
        {fieldWidth && fieldHeight && bubblesArray.map((_, index) => (
          <Bubble
            key={index}
            tick={this.props.tick}
            height={fieldHeight}
            width={fieldWidth}
          />
        ))}
      </div>
    );
  }
}

export default Field;
