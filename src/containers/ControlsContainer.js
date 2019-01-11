import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { changeColour, incrementMoves } from '../data/actions/state-actions';

const mapState = ({ difficulty, colour }) => ({
  difficulty,
  playerColour: colour
});

const mapDispatch = dispatch => ({
  handleColourChange: colour => dispatch(changeColour(colour)),
  incrementMoves: colour => dispatch(incrementMoves()),
});

export default connect(mapState, mapDispatch)(Controls);
