import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ratnagari from "./pages/products/Ratnagari";
import Devgad from "./pages/products/Devgad";
import Pawas from "./pages/products/Pawas";
import ScrollToTop from "./scrollToTop";

import Gallery from "./components/Gallery";
import AmrutPairi from "./pages/products/AmrutPairi";
import GanpatiMurti from "./pages/products/GanpatiMurti";
import Faral from "./pages/products/Faral";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import ProductDesc from "./pages/ProductDesc";

const App = () => {
  {
    console.error(
      ```FirebaseAuthError: Decoding Firebase ID token failed. Make sure you passed the entire string JWT which represents an ID token. See https://firebase.google.com/docs/auth/admin/verify-id-tokens for details on how to retrieve an ID token.
    at FirebaseAuthError.FirebaseError [as constructor] (thepathtomyfolder\node_modules\firebase-admin\lib\utils\error.js:44:28)
    at FirebaseAuthError.PrefixedFirebaseError [as constructor] (thepathtomyfolder\node_modules\firebase-admin\lib\utils\error.js:90:28)
    at new FirebaseAuthError (thepathtomyfolder\node_modules\firebase-admin\lib\utils\error.js:149:16)
    at thepathtomyfolder\node_modules\firebase-admin\lib\auth\token-verifier.js:180:23
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  errorInfo: {
    code: 'auth/argument-error',
    message: 'Decoding Firebase ID token failed. Make sure you passed the entire string JWT which represents an ID token. See https://firebase.google.com/docs/auth/admin/verify-id-tokens for details on how to retrieve an ID token.'
  },
  codePrefix: 'auth'
}```
    );
  }
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blog_id" element={<BlogPage />} />
        <Route path="/category/:category_name" element={<CategoryProducts />} />
        <Route path="/products/:product_name" element={<ProductDesc />} />
      </Routes>

      <Routes>
        <Route path="/ratnagari" element={<Ratnagari />} />
        <Route path="/devgad" element={<Devgad />} />
        <Route path="/pawas" element={<Pawas />} />
        <Route path="/amrut-pairi" element={<AmrutPairi />} />
        <Route path="/faral" element={<Faral />} />
        <Route path="/ganesh-murti" element={<GanpatiMurti />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
