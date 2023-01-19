import Footer from './components/footer/Footer';
import Header from './components/navbar/Navbar';
import CallToAction from './components/section1/CallToAction';
import Video from './components/section2/Video';
import CardService from './components/section3/CardService';
import Text from './components/section4/Text';
import CardProduct from './components/section5/CardProduct';
import FinalCallToAction from './components/section6/FinalCallToAction';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <CallToAction />
        <Video />
        <CardService />
        <Text />
        <CardProduct />
        <FinalCallToAction />
      </div>
      <Footer/>
    </>
  );
}

export default App;
