import React from "react";
import memesData from "../memesData.js";

function Meme() {
	// * STATE : here our image is variable
	// * every time it will change on btn click
	// const [memeImage, setMemeImage] = React.useState("");

	// complex state : object
	// refactor

	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [memeImages, setMemeImages] =
		React.useState(memesData);

	function getMemeImage(e) {
		e.preventDefault();

		const memesArr = memeImages.data.memes;

		const randomNum = Math.floor(
			Math.random() * memesArr.length
		);

		const imageUrl = memesArr[randomNum].url;

		setMeme((prev) => ({
			...prev,
			randomImage: imageUrl,
		}));
	}

	return (
		<main className="main--wrapper">
			<form className="form">
				<input
					className="form--input"
					type="text"
					placeholder="top text"
				/>
				<input
					className="form--input"
					type="text"
					placeholder="bottom text"
				/>
				<button
					onClick={getMemeImage}
					className="btn form--btn"
				>
					Get a new meme image 🖼
				</button>
			</form>
			<div className="display--image">
				{meme.randomImage && (
					<img
						className="meme--image"
						src={meme.randomImage}
						alt="a meme"
					/>
				)}
			</div>
		</main>
	);
}

export default Meme;
