import "./styles.css";

import React from "react";

function FileGithub({ onLoad, ...props }) {
	const [URL, setURL] = React.useState("");
	const [err, setErr] = React.useState(false);
	const regex =
		/^https:\/\/raw.githubusercontent.com\/(.+)\/(.+)\/(.+)\/(.+)$/;

	function loadFile(event) {
		event.preventDefault();
		if (!regex.test(URL)) {
			setErr(true);
			return;
		}
		fetch(URL)
			.then((resp) => {
				if (resp.status !== 200) {
					throw "Error";
				}
				return resp.text();
			})
			.then((text) => {
				const name = URL.split("/").pop();
				onLoad({ name, text });
			})
			.catch((_) => setErr(true));
	}

	return (
		<div className="flex-col-center">
			<h3>GitHub</h3>
			<input
				id="file-github"
				type="url"
				value={URL}
				onChange={({ target }) => setURL(target.value)}
				placeholder="https://raw.githubusercontent.com/:user/:repo/:branch/:file"
			/>
			{err && <span>"please make sure url is valid"</span>}
			<button onClick={loadFile} className="load-btn">
				Load
			</button>
		</div>
	);
}

export default FileGithub;
