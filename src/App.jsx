import "./App.css";
import React from "react";
import FileSelect from "./Components/FileSelect";
import Header from "./Components/Header";
function App() {
	const [code, setCode] = React.useState({
		name: "",
		text: "",
	});
	return (
		<div>
			<Header />
			<FileSelect onLoad={setCode} />

			<div>
				<pre>{code.name}</pre>
				<pre>{code.text}</pre>
			</div>
		</div>
	);
}

export default App;
