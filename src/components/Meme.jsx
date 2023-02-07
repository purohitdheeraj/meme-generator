import React from "react";

function Meme() {
	return (
		<main>
			<form className="form">
				<input
					className="form--input"
					type="text"
					placeholder="text 1"
				/>
				<input
					className="form--input"
					type="text"
					placeholder="text 2"
				/>
				<button className="btn form--btn">
					Get a new meme image 🖼
				</button>
			</form>
		</main>
	);
}

export default Meme;
