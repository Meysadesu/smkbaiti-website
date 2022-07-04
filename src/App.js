import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./component/index/home"
import Profile from "./component/profile/profile"
import Navbar from "./component/navbar/navbar"
import Footer from "./component/footer/footer"
import PPDB from "./component/ppdb/ppdb"
import Majorpage from "./component/major/major"

function App() {
	return (
		<Fragment>
      		<Navbar></Navbar>
      		<Routes>
	 			<Route  path="/" exact element={<Home></Home>}></Route>
	 			<Route path="/smk/profile" element={<Profile></Profile>}></Route>
	 			<Route path="/smk/ppdb" element={<PPDB></PPDB>}></Route>
	 			<Route path="/smk/tkj" element={<Majorpage></Majorpage>}></Route>
      		</Routes>
			<Footer/>
		</Fragment>
	)
}

export default App
