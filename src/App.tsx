import './App.css';
import { SummerJob } from './components/summer-job';
import { Competition } from './components/competition';

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 5fr' }}>
      <SummerJob />
      <Competition />
    </div>
  );
}

export default App;
