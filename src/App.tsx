import { Route, Routes } from 'react-router-dom';
import MarketMirrorPoc from './Component/MarketMirrorPoc';
import SeoxPoc from './Component/Seox';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarketMirrorPoc />} />
        <Route path="/seox" element={<SeoxPoc />} />
      </Routes>
    </>
  );
}

export default App;