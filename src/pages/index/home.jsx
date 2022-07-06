import { Fragment } from "react";
import Jumbotron from './component/jumbotron/jumbotron'
import Sarana from './component/sarana/sarana'
import TeacherProfile from './component/teacher-profile/teacher'
import PPDB from './component/ppdb/ppdb'
import Jurusan from './component/jurusan/jurusan'
import Extracurricular from './component/extracurricular/extracurricular'
import Kehumasan from './component/kehumasan/kehumasan'

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
