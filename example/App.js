import * as React from 'react';
import ReactDOM from 'react-dom';
import { styled } from 'linaria/react';

import constants from './constants';

const Title = styled.h1`
  font-family: ${constants.fontFamily};
  font-size: 16px;
  color: ${() => constants.primaryColor};
`;

function App() {
  return <Title>Hello world</Title>;
}

ReactDOM.render(<App />, document.getElementById('root'));
