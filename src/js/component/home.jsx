import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => { 
	const [brillando, cambiarBrillando] = useState (0) 
	return (
		<><div className="palito"></div><div className="traffic-light">
			<div className={`light red ${brillando == 1 ? "brillando" : ""}`} onClick={() => { cambiarBrillando(1); } }></div>
			<div className={`light yellow ${brillando == 2 ? "brillando" : ""}`} onClick={() => { cambiarBrillando(2); } }></div>
			<div className={`light green ${brillando == 3 ? "brillando" : ""}`} onClick={() => { cambiarBrillando(3); } }></div>


		</div></>
	);
};

export default Home;
