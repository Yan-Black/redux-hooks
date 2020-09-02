import * as React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../../containers/App/actions';

import View from '../View';

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const onClickDecrease: React.MouseEventHandler = () => {
    dispatch(decrease());
  };
  const onClickIncrease: React.MouseEventHandler = () => {
    dispatch(increase());
  };

  return (
    <>
      <View />
      <button type="button" onClick={onClickDecrease}>Decrease</button>
      <button type="button" onClick={onClickIncrease}>Increase</button>
    </>
  );
};

export default App;
