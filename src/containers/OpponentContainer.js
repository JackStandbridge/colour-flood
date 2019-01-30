import { connect } from 'react-redux';
import Opponent from '../components/Opponent';
import { opponentMove } from '../data/actions/state-actions';

const mapDispatch = dispatch => ({
  handleOpponentMove: () => dispatch(opponentMove()),
})

export default connect(null, mapDispatch)(Opponent);
