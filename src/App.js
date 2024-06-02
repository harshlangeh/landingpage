import logo from './logo.svg';
import './App.css';
import Payment from './components/payment/payment';
import Header from './components/header/header';
import Topbar from './components/topbar/topbar';
import Reviews from './components/reviews/Reviews';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import VideoSection from './components/VideoSection/VideoSection';

function App() {


  return (
    <div>
      <Topbar/>
      
      <Header/>
      <VideoSection/>
      <Hero/>
      <Services/>
      <Reviews/>
      <Payment/>
    </div>
  )
}

export default App;
