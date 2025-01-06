import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import DetailPage from "./pages/DetailPage"
import ShopPage from "./pages/ShopPage"
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
import DbHomePage from "./Dashboard/DbHomePage"
import AddProduct from "./Dashboard/AddProduct"
import UpdateProduct from "./Dashboard/UpdateProduct "



function App() {


  return (
    <>
   
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/detail/:id' element={<DetailPage/>} />
        <Route path='/shop' element={<AboutPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/signin' element={<SignInPage/>} />
        <Route path='/Dashboard' element={<DbHomePage/>} />
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/updateproduct/:id'element={<UpdateProduct/>}/>


      </Routes>
   
    </>
  )
}

export default App
