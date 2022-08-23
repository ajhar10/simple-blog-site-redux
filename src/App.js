import { Provider } from 'react-redux';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      
    <Navbar/>
    <Header/>
    <Blogs/>
    <Footer/>

    </Provider>
   
  );
}

export default App;
