import React from "react";
import { connect } from "react-redux";

import Shape from "../Objects/Shape";

import { addToLeft, moveLeft, moveRight } from "../../store/actions";
import { TT_WIDTH, SHAPE_SPEED } from "../../constants";

class MovingShape extends React.Component {
  constructor(props) {
    super(props);

    this.board = document.querySelector("#board").getBoundingClientRect();
    this.state = {
      top: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.dropShapes, SHAPE_SPEED);

    if (this.props.paused) {
      clearInterval(this.timer);
    }
    window.addEventListener("keydown", this.moveShape);
  }

  componentDidUpdate(prevProps) {
    if (this.props.paused !== prevProps.paused) {
      if (this.props.paused) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(this.dropShapes, SHAPE_SPEED);
      }
    }

    if ((this.state.top + this.props.size) * 1.2 >= this.boardPosition()) {
      this.shapeLanded();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    window.removeEventListener("keydown", this.moveShape);
  }

  dropShapes = () => {
    this.setState(state => ({ ...state, top: state.top + 10 }));
  };

  moveShape = e => {
    if (e.keyCode === 37) {
      this.props.moveLeft();
    } else if (e.keyCode === 39) {
      this.props.moveRight();
    }
  };

  boardPosition = () => {
    const { top, bottom } = this.board;
    return this.props.bending >= 0
      ? top + ((bottom - top) / 2) * (1 - this.props.offset / (TT_WIDTH / 2))
      : bottom -
          ((bottom - top) / 2) * (1 - this.props.offset / (TT_WIDTH / 2));
  };

  shapeLanded = () => {
    clearInterval(this.timer);
    this.setState(state => ({ ...state, landed: true }));
    this.props.addToLeft();
  };

  render() {
    const { top } = this.state;
    return <Shape top={top} ref={r => (this.shape = r)} {...this.props} />;
  }
}

const mapStateToProps = ({ game: { bending, paused } }) => ({
  bending,
  paused
});

export default connect(mapStateToProps, { addToLeft, moveLeft, moveRight })(
  MovingShape
);
