import "./App.css";
import React from "react";

import Code from "./Components/Code";
import Header from "./Components/Header";
import FileSelect from "./Components/FileSelect";

function App() {
	const [code, setCode] = React.useState({
		name: "",
		text: "",
	});
	return (
		<div>
			<Header />
			<FileSelect onLoad={setCode} />
			<Code fileName={code.name} codeText={code.text} />
		</div>
	);
}

export default App;
