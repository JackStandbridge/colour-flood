import { connect } from 'react-redux';
import Score from '../components/Score';

const mapState = ({ score }) => ({ score });

export default connect(mapState)(Score);
