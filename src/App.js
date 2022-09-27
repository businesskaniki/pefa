import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './mobile.css'
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
