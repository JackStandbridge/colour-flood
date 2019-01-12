import { connect } from 'react-redux';
import Difficulty from '../components/Difficulty';
import { updateDifficulty } from '../data/actions/state-actions';

const mapDispatch = dispatch => ({
  handleDifficulty: difficulty => dispatch(updateDifficulty(difficulty)),
});

export default connect(null, mapDispatch)(Difficulty);
