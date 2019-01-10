import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { changeColour } from '../data/actions/state-actions';

const mapState = ({ difficulty }) => ({ difficulty });

const mapDispatch = dispatch => ({
  handleColourChange: colour => dispatch(changeColour(colour)),
});

export default connect(mapState, mapDispatch)(Controls);
