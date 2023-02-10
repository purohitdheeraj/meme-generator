import React from "react";

function Meme() {
	// * STATE : here our image is variable
	// * every time it will change on btn click
	// const [memeImage, setMemeImage] = React.useState("");

	// complex state : object
	// refactor

	const [memeImages, setMemeImages] = React.useState([]);

	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	React.useEffect(() => {
		// using IIFE and async await syntax
		(async () => {
			const memesData = await fetch(
				"https://api.imgflip.com/get_memes"
			);
			const parseData = await memesData.json();

			const data = parseData.data.memes;
			setMemeImages(data);
		})();

		// simple fetch call
		// fetch("https://api.imgflip.com/get_memes")
		// 	.then((res) => res.json())
		// 	.then((data) => setMemeImages(data.data.memes));
	}, []);

	function getMemeImage(e) {
		const randomNum = Math.floor(
			Math.random() * memeImages.length
		);

		const imageUrl = memeImages[randomNum].url;

		setMeme((prev) => ({
			...prev,
			randomImage: imageUrl,
		}));
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<main className="main--wrapper">
			<form className="form">
				<input
					className="form--input"
					type="text"
					placeholder="top text"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					className="form--input"
					type="text"
					placeholder="bottom text"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button
					onClick={getMemeImage}
					className="btn form--btn"
					type="button"
				>
					Get a new meme image 🖼
				</button>
			</form>

			<div className="meme">
				<div className="top-text">
					{meme.topText}
				</div>

				<img
					className="meme--image"
					src={meme.randomImage}
					alt="a meme"
				/>

				<div className="bottom-text">
					{meme.bottomText}
				</div>
			</div>
		</main>
	);
}

export default Meme;
