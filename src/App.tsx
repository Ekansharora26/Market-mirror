import { Route, Routes } from 'react-router-dom';
import MarketMirrorPoc from './Component/MarketMirrorPoc';
import SeoxPoc from './Component/Seox';
import BlossomPoc from './Component/Blossom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarketMirrorPoc />} />
        <Route path="/seox" element={<SeoxPoc />} />
        <Route path="/blossom" element={<BlossomPoc />} />
      </Routes>
    </>
  );
}

export default App;