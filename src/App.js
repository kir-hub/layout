import logo from './logo.svg';
import Header from './components/Header/Header'
import VideoComponent from './components/VideoComponent/VideoComponent';
import Promote from './components/Offers/Promote';
import Features from './components/Features/Features'
import Team from './components/Team/Team'
import EmailSub from './components/EmailSub/EmailSub';
import GetInTouch from './components/GetInTouchForm/GetInTouch';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <VideoComponent/>
      <Promote/>
      <Features/>
      <Team/>
      <EmailSub/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
