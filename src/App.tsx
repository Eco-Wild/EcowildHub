import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './app/pages/Home';
import AboutUs from './app/pages/About';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Blogs from './app/Blogs';
import BlogDetails from './app/pages/BlogDetails';
import Contact from './app/pages/Contact';
import ImageGallery from './app/pages/ImageGallery';
import Destinations from './app/pages/Destinations';
import DestinationDetails from './app/pages/DestinationDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/destinations' element={<Destinations />}></Route>
        <Route
          path='/destinations/:id/destination-details'
          element={<DestinationDetails />}
        ></Route>
        <Route path='/publish/blogs' element={<Blogs />}></Route>
        <Route
          path='/publish/blogs/:id/blog-details'
          element={<BlogDetails />}
        ></Route>
        <Route path='media/image-gallery' element={<ImageGallery />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
