import * as React from 'react';
import { useSelector } from 'react-redux';

const View: React.FC = () => {
  const result = useSelector((state) => state);
  return <div>{result}</div>;
};
export default View;
