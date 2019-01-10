import { connect } from 'react-redux';
import ColourButton from '../components/ColourButton';
import { incrementMoves } from '../data/actions/state-actions';

const mapDispatch = dispatch => ({
  incrementMoves: () => dispatch(incrementMoves()),
})

export default connect(null, mapDispatch)(ColourButton);
