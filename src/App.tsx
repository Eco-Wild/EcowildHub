import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './app/pages/Home';
import About from './app/pages/About';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Blogs from './app/pages/Blogs';
import BlogDetails from './app/pages/BlogDetails';
import Contact from './app/pages/Contact';
import ImageGallery from './app/pages/ImageGallery';
import Destinations from './app/pages/Destinations';
import DestinationDetails from './app/pages/DestinationDetails';
import News from './app/pages/News';
import NewsDetails from './app/pages/NewsDetails';
import Events from './app/pages/Events';
import VideoGallery from './app/pages/VideoGallery';
import EventDetails from './app/pages/EventDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<About />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route
          path='/events/:id/event-details'
          element={<EventDetails />}
        ></Route>
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

        <Route path='/publish/news' element={<News />}></Route>
        <Route
          path='/publish/news/:id/news-details'
          element={<NewsDetails />}
        ></Route>
        <Route path='media/image-gallery' element={<ImageGallery />}></Route>
        <Route path='media/video-gallery' element={<VideoGallery />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
