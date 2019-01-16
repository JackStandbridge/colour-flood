import { connect } from 'react-redux';
import Pipe from '../components/Pipe';

const mapState = ({ colour, difficulty }) => ({ colour, difficulty });

export default connect(mapState)(Pipe);
