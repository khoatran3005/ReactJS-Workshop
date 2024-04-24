import logo from './logo.svg';
import './App.css';
import HelloWorld from './component/HelloWorld';
import State from './component/State';
import ParentComponent from './component/ParentComponent';

function App() {
  return (
    <div>
      <HelloWorld></HelloWorld>
      <State></State>
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
