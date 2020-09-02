import { connect } from 'react-redux';

import {
  increase, decrease, enable, disable,
} from './actions';
import App from '../../components/App';

const mapStateToProps = (state) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  count: state,
});

const mapDispatchToProps = {
  increase,
  decrease,
  enable,
  disable,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
