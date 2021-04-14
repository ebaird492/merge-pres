import merge from './merge-ex.png';
import example from './merge-sort.png';
import code from './merge.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h>Merge Sort ...</h>
        <img src={merge} className="App-logo" alt="logo" />
      </header>
      <div className="Text">
        <p>
          Merge sort divides the array into smaller components
        </p>
        <p>
          Isn't it easier to sort a two element array rather than one of a much larger size?
        </p>
        <img src={example} className="Example" alt="example" />
        <img src={code} className="Code" alt="code example" />
      </div>
    </div>
  );
}

export default App;
