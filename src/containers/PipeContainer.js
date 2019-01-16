import { connect } from 'react-redux';
import Pipe from '../components/Pipe';

const mapState = ({ colour }) => ({ colour });

export default connect(mapState)(Pipe);
