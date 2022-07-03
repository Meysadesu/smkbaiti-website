import { Fragment } from "react";
import Jumbotron from './element/jumbotron/jumbotron'
import Sarana from './element/sarana/sarana'
import TeacherProfile from './element/teacher-profile/teacher'
import PPDB from './element/ppdb/ppdb'
import Jurusan from './element/jurusan/jurusan'
import Extracurricular from './element/extracurricular/extracurricular'
import Kehumasan from './element/kehumasan/kehumasan'

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
