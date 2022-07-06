import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/index/home"
import Profile from "./pages/profile/profile"
import Navbar from "./component/navbar/navbar"
import Footer from "./component/footer/footer"
import PPDB from "./pages/ppdb/ppdb"
import Majorpage from "./pages/major/major"
import { MAJOR } from "./majordata"

function App() {
	return (
		<Fragment>
      		<Navbar></Navbar>
      		<Routes>
	 			<Route  path="/" exact element={<Home></Home>}></Route>
	 			<Route path="/smk/profile" element={<Profile></Profile>}></Route>
	 			<Route path="/smk/ppdb" element={<PPDB></PPDB>}></Route>
	 			{
	 				MAJOR.map(e => {
	 					return <Route path={e.path} element={<Majorpage name={e.name} whatis={e.whatis} tujuan={e.tujuan}></Majorpage>}></Route>
	 				})
	 			}
      		</Routes>
			<Footer/>
		</Fragment>
	)
}

export default App
