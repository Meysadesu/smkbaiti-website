import { Link } from "react-router-dom"

const ButtonComponent = function(props) {
        return <Link to={`${props.path}`} className=" text-[14px] p-[15px] border-box bg-green rounded-[5px] z-100 font-poppins text-white">Baca Selengkapnya..</Link>
}

export default ButtonComponent
