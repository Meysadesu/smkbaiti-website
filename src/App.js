import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./component/container/home/home"
import Footer from "./component/element/footer/footer"
import Navbar from "./component/element/navbar/navbar"

function App() {
	return (
		<Fragment>
      			<Navbar></Navbar>
      			<Routes>
	 			<Route path="/" element={<Home></Home>}></Route>
      			</Routes>
			<Footer/>
		</Fragment>
	)
}

export default App
