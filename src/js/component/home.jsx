import React, { useState } from 'react';

//create your first component
function Home() {
	const [color, setColor] = useState("red")
	return (
		<>
         <div className="stick"></div>
		<div className="traffic">
			<div onClick={() => setColor("red")}
				className={
					"red" + (color === "red" ? " glow" : "")
				}> </div>
			<div onClick={() => setColor("yellow")}
				className={
					"yellow" + (color === "yellow" ? " glow" : "")
				}></div>
			<div onClick={() => setColor("green")}
				className={
					"green" + (color === "green" ? " glow" : "")
				}></div>
		</div>
		</>
	);
};

export default Home;
