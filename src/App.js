import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./component/container/home/home"
import Profile from "./component/container/profile/profile"
import Navbar from "./component/container/navbar/navbar"
import Footer from "./component/container/footer/footer"
import PPDB from "./component/container/ppdb/ppdb"
import Majorpage from "./component/container/major/major"

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
