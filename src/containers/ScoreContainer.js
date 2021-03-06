import { connect } from 'react-redux';
import Score from '../components/Score';

const mapState = ({ moves, bestScore, difficulty }) => ({ moves, bestScore, difficulty });

export default connect(mapState)(Score);
