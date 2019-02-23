import * as React from 'react';
import ReactDOM from 'react-dom';
import { styled } from 'linaria/react';

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 16px;
`;

function App() {
  return <Title>Hello world</Title>;
}

ReactDOM.render(<App />, document.getElementById('root'));
