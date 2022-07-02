import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Facebook, Instagram } from "react-bootstrap-icons"

const RightComponent = function (){
    return (
        <Fragment>
            <div id="wrapper-section-right" className="h-full w-[50%] p- sm:p-0 absolute sm:relative ml-[-250px] sm:ml-0 hidden sm:block bg-green sm:bg-transparent">
                    <ul className="block p-[10px] border-box items-center justify-around h-full leading-[40px] sm:p-0 sm:flex sm:font-open-sans">
                        <li className=""><Link to={""}> HOME </Link></li>
                        <li><Link to={""}> PROFILE </Link></li>
                        <div id="dropdown-act" className="group">
                            <li> PROGRAM KEAHLIAN </li>
                            <ul className="absolute hidden rounded-sm group-hover:block bg-white p-[5px] border-box text-slate-900">
                                <li>
                                    <Link to={"/"}>Teknik Komputer dan Jaringan</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Agribisnis Pengelolahan Hasil Pertanian</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Teknik Kendaraan Ringan</Link>
                                </li>
                            </ul>
                        </div>
                        <li><Link to={""}> PPDB </Link></li>
                        <div id="container-section-sosial-media" className="w-[20%] hidden sm:flex h-full justify-around items-center opacity-60">
                            <li><Link to={""}><Facebook size={25}></Facebook></Link></li>
                            <li><Link to={""}><Instagram size={25}></Instagram></Link></li>
                        </div>
                    </ul>
            </div>
        </Fragment>
    )
}

export default RightComponent
