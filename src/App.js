import './App.css';
import Profilecomponent from './profile/Profilecomponent';
import img from './logo.svg'

function App() {
  return (
   <div>
    <Profilecomponent bio="I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well."
      profession="Web developper" ><img className='img' src={img} /></Profilecomponent>
     </div>
  );
}

export default App;
