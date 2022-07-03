import {Fragment, useState, useEffect} from "react"
import CardComponent from "./component/card-component"
import { TeacherData } from "./untils/untils"
import Aos from "aos"
import 'aos/dist/aos.css'

const TeacherProfile = function() {
	useEffect(()=>{
        Aos.init({
            duration: 1000
        })
    },[])
	const [dataTeacher, setDataTeacher] = useState(TeacherData[0])
	return(
		<Fragment>
			<div id="wrapper-for-teacher-profile" className="w-full h-full relative lg:p-[10px] border-box mb-[80px] mt-7 lg:mt-0">
				<div id="sub-wrapper-for-teacher-profile" className="w-[90%] lg:w-[60%] m-auto h-full p-[10px] border-box">
					<p id="Header" className="font-poppins text-[30px] lg:text-[35px] lg:ml-[20px] mb-[30px]">Data informasi guru</p>
					<div id="main-content-for-teacher-profile" className="w-full h-full">
						<CardComponent id={dataTeacher.id} name={dataTeacher.name} jobs={dataTeacher.jobs} image={dataTeacher.image} description={dataTeacher.description}/>	
						<div id="wrapper-for-list-teacher" className="w-full lg:w-[95%] m-auto h-[150px] flex mt-7 lg:mt-4 lg:p-[10px] border-box overflow-auto">
							<div className="w-[100000px] flex">	
								{
									TeacherData.map(data => {
										return <div id="image" data-aos="fade-up" className=" h-[90px] lg:h-[120px] w-[90px] bg-cover bg-no-repeat lg:w-[120px] rounded-[10px] bg-green mr-3" style={{ backgroundImage: `url(${data.image})` }} onClick={ () => setDataTeacher(TeacherData[data.id])}></div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default TeacherProfile
