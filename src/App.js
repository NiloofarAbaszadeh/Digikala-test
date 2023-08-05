import axios from 'axios';
import Header from './Header';
import './Style/temp.css';
import Navbar from './Navbar';
import Billboard from './Billboard';
import Highlights from './Highlights';
import SecondHighlight from './SecondHighlight';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Highlights />
      <Billboard />
      <SecondHighlight />
    </div>
  );
}

export default App;
