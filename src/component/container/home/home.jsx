import { Fragment } from "react";
import Jumbotron from "../../element/jumbotron/jumbotron";
import Jurusan from "../../element/jurusan/jurusan";
import Sarana from "../../element/sarana/sarana";
import Extracurricular from "../../element/extracurricular/extracurricular"
import PPDB from "../../element/ppdb/ppdb";
import Kehumasan from "../../element/kehumasan/kehumasan";
import TeacherProfile from "../../element/teacher-profile/teacher";

const Home = function() {
	return(
		<Fragment>
		<Jumbotron/>	
		<Sarana/>
	    	<TeacherProfile/>
	        <PPDB/>
                <Jurusan/>
	    	<Extracurricular/>
		<Kehumasan/>
		</Fragment>
    );
}

export default Home;
