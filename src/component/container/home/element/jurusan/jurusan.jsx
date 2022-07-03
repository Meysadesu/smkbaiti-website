import { Fragment } from "react"
import CardComponent from "./component/card-component"
import { JurusanData } from "./untils/untils"

const Jurusan = function() {
    return (
        <Fragment>
            <div id="wrapper" className="w-full h-full relative">
	    	    <div className="w-[100vw] overflow-hidden lg:w-[70%] m-auto mb-[80px]">
		    	{JurusanData.map((e) => {
					    return <CardComponent 
                                    id={e.id}
                                    name={e.name} 
                                    image={e.image} 
                                    description1={e.description1} 
                                    description2={e.description2} 
                                    path={e.path}
                                />})}
	    	    </div> 
            </div>
        </Fragment>
    )
}

export default Jurusan
