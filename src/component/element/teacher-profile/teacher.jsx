import {Fragment} from "react"
import CardComponent from "./component/card-component"
import ListTeacher from "./component/list-component"

const TeacherProfile = function() {
	return(
		<Fragment>
			<div id="wrapper-for-teacher-profile" className="w-full h-full p-[10px] border-box mb-[80px] mt-7 sm:mt-0">
				<div id="sub-wrapper-for-teacher-profile" className="w-[90%] sm:w-[60%] m-auto h-full p-[10px] border-box">
					<p id="Header" className="font-poppins text-[35px] sm:ml-[20px] mb-[30px]">Data informasi guru :</p>
					<div id="main-content-for-teacher-profile" className="w-full h-full">
						<CardComponent/>	
						<ListTeacher/>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default TeacherProfile
