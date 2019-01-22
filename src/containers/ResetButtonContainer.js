import { connect } from 'react-redux';
import ResetButton from '../components/ResetButton';
import { resetBoard, undo } from '../data/actions/state-actions';

const mapDispatch = dispatch => ({
  resetBoard: () => dispatch(resetBoard()),
  undo: () => dispatch(undo()),
})

export default connect(null, mapDispatch)(ResetButton);
