import { connect } from 'react-redux';
import Score from '../components/Score';

const mapState = ({ moves }) => ({ moves });

export default connect(mapState)(Score);
