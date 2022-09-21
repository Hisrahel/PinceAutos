import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home/Home'
import Footer from './pages/Home/Footer'
import Listing from './pages/Listing/List'
import Blog from './pages/Blog/Blog'
import Review from './pages/Review/Review'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Detail from './Detail';
import Error from './Error';

function App() {
  return (
    <> 
    <Router>
      <Navbar/>
     <Routes>
       <Route path="*" element={<Error/>}/>
       <Route path="/" element={<Home/>}/>
       <Route path="/listing" element={<Listing/>}/>
       <Route path="/blog" element={<Blog/>}/>
       <Route path="/reviews" element={<Review/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/detail/:id" element={<Detail/>}/>
     </Routes>
     {/* <Footer/> */}
   </Router>
 </>
  );
}

export default App;
