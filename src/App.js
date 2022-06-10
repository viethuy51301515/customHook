import './App.css';
import useArray from './utils/useArray';
import useTimeout from './utils/useTimeout';

function App() {
  const newArray = ['Hoa hong', 'Hoa Hue', 'Hoa Tulip'];
  const { array, push } = useArray(newArray);
  console.log('init app');
  useTimeout(() => console.log('123'), 3000);
  return (
    <div className="App">
      {array.map((i) => (
        <div key={i}>
          <h3>{i}</h3>
        </div>
      ))}
      <button
        onClick={() => {
          push('hello');
        }}>
        click
      </button>
    </div>
  );
}

export default App;
