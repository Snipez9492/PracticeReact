import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

export default (props) => {
  return (
    <Button color="danger">Danger!</Button>
  );
};
