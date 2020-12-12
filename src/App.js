import React, { useContext } from 'react';
import { ContextOS } from 'store/OSContext';
import Card, { CardItem } from './components/Card';

const styleButton = {
  padding: '10px 15px',
  display: 'block',
  minWidth: '200px',
};

export default function App() {
  const { type, setType } = useContext(ContextOS);
  return (
    <div>
      <button
        style={styleButton}
        onClick={() => setType(type === 'android' ? 'ios' : 'android')}
      >
        {type === 'android' ? 'Android' : 'IOS'}
      </button>
      <hr />
      <Card>
        <CardItem bordered header>
          Header
        </CardItem>
        <CardItem bordered>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </CardItem>
        <CardItem bordered>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </CardItem>
        <CardItem bordered>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </CardItem>
        <CardItem bordered footer>
          Footer
        </CardItem>
      </Card>
    </div>
  );
}
