import { connect } from 'react-redux';
import Board from '../components/Board';
import { changeColour, incrementMoves } from '../data/actions/state-actions';

const mapState = ({ board, colour }) => ({
  board,
  playerColour: colour,
});

const mapDispatch = dispatch => ({
  handleColourChange: colour => dispatch(changeColour(colour)),
  incrementMoves: colour => dispatch(incrementMoves()),
})

export default connect(mapState, mapDispatch)(Board);
