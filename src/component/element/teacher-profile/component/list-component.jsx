import {Fragment} from "react"

const ListTeacher = function() {
	return (
		<Fragment>
			<div id="wrapper-for-list-teacher" className="w-full sm:w-[95%] m-auto h-[150px] flex mt-7 sm:mt-4 sm:p-[10px] border-box overflow-auto">
				<div className="w-[100000px] flex">
					{/* loop di sini*/}
					<div id="image" className=" h-[90px] sm:h-[120px] w-[90px] sm:w-[120px] rounded-[10px] bg-green mr-3"></div>
				</div>
			</div>
		</Fragment>
	)
}

export default ListTeacher
