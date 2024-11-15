import './App.css';

import video from './videos/excursion.mp4';
import camp from './images/camp.jpg';
import iphone from './images/iphone-2.png'
import copyR from './images/copyright.png'

function App() {
  return (
    <div className="App">
      <h1 className='hr'>Discover hidden places in the world around you</h1>
      <h2>Download Excursion (coming soon!)</h2>
      <div>
        <video width='400' controls>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <h1 className='hrB'>Your personal travel guide</h1>
      <h3 className='hrC'>Escursion remember places you like, and recommends new points of interest around you</h3>
        <div>
          <img src={camp} alt='camp tent' className='tent'/> 
        </div>
        <div>
          <img src={iphone} alt='phone' className='phone'/>
        </div>
        <h1 className='hrD'>Coming soon for iPhone</h1>
        <div>
          <h3 className='ft'>Download Excursion (Coming soon)</h3>
        </div>
        <footer>
          <img src={copyR} alt='copyright'/>
          <h3>Excursion</h3>
        </footer>
    </div>
  );
}

export default App;
