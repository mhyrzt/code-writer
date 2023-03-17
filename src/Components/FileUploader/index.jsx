import React from "react";
import "./styles.css";

function FileUploader({ onLoad, ...props }) {
	async function onChange(event) {
		event.preventDefault();

		const reader = new FileReader();

		reader.onload = (e) => {
			const text = e.target.result;
			const name = event.target.files[0].name;
			const data = { name, text };
			onLoad(data);
		};

		reader.readAsText(event.target.files[0]);
	}

	return (
		<div className="flex-col-center">
			<h3>Local File</h3>
			<input
				id="file-uploader"
				type="file"
				onChange={onChange}
			/>
		</div>
	);
}

export default FileUploader;
