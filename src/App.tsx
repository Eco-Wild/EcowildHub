import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
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
import Signin from './app/Dashboard/pages/auth/Signin';
import DashboardLayout from './app/Dashboard/components/DashboardLayout';
import Overview from './app/Dashboard/pages/Overview';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:id/event-details' element={<EventDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route
            path='/destinations/:id/destination-details'
            element={<DestinationDetails />}
          />
          <Route path='/publish/blogs' element={<Blogs />} />
          <Route
            path='/publish/blogs/:id/blog-details'
            element={<BlogDetails />}
          />
          <Route path='/publish/news' element={<News />} />
          <Route
            path='/publish/news/:id/news-details'
            element={<NewsDetails />}
          />
          <Route path='media/image-gallery' element={<ImageGallery />} />
          <Route path='media/video-gallery' element={<VideoGallery />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard/overview' element={<Overview />} />
        </Route>

        {/* Routes without any layout */}
        <Route path='/dashboard/signin' element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
