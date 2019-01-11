import { connect } from 'react-redux';
import ResetButton from '../components/ResetButton';
import { resetBoard } from '../data/actions/state-actions';

const mapDispatch = dispatch => ({
  resetBoard: () => dispatch(resetBoard()),
})

export default connect(null, mapDispatch)(ResetButton);
