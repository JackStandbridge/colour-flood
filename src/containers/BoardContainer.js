import { connect } from 'react-redux';
import Board from '../components/Board';

const mapState = ({ board, colour }) => ({
  board,
  colour,
});

export default connect(mapState)(Board);
