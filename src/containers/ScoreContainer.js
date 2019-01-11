import { connect } from 'react-redux';
import Score from '../components/Score';

const mapState = ({ moves, bestScore }) => ({ moves, bestScore });

export default connect(mapState)(Score);
