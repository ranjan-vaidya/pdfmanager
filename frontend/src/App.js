import './App.css';
import React,{useState, useEffect} from 'react';
import { Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Login';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup';

import Profile from "./components/Dashboard/profile/Profile";
import Postad from "./components/Dashboard/postad/Postad";
import Products from "./components/Dashboard/products/Products"
import Myposts from "./components/Dashboard/myposts/Myposts";
import Purchases from "./components/Dashboard/Purchases";

import {useDispatch, useSelector} from "react-redux"
import { loadUser } from './Actions/User';
import MyProductDetails from './components/Dashboard/myposts/MyProductDetails';
import ProductDetails from './components/Dashboard/products/ProductDetails';
import PdfViewer from './components/Pdfjs';
import Pdfjs from './components/Pdfjs';
// import Postad from './components/Postad';

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [post, setPost] = useState(null)
  const [pdfurl, setPdfUrl] = useState("")

  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state) => state.user)
  console.log(isAuthenticated)

  useEffect( ()=>{
    dispatch(loadUser())
  },[dispatch])

  useEffect( ()=>{
    console.log("THE updated url", post)
  },[post])

  return (
    <div>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          {/* <Route path="/pdf" element={<PdfViewer />}></Route> */}
          <Route path="/pdf" element={<Pdfjs pdfUrl={post} />}></Route>
          {/* <Route path="/postad" element={<Postad />}></Route> */}
          <Route path="/products" element={<Products setPost={setPost} setPdfUrl={setPdfUrl} />}>
          <Route path=':id' element={<ProductDetails post={post} />} />
          </Route>

          <Route path="/dashboard" element={isAuthenticated? <Dashboard sidebarOpen={sidebarOpen} /> : <Login/> }>
            <Route path="products" element={<Products setPost={setPost} />} >
              <Route path=':id' element={<ProductDetails post={post} />} />
            </Route>  
            <Route path="myposts" element={<Myposts setPost={setPost} />} >
              <Route path=':id' element={<MyProductDetails post={post}/>} />
            </Route>  

            <Route path="mypurchases" element={<Purchases />} />
            <Route path="postad" element={<Postad />} />
            <Route path="Profile" element={<Profile />} />
          </Route>

        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;