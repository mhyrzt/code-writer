import "./App.css";
import React from "react";

import Code from "./Components/Code";
import Header from "./Components/Header";
import FileSelect from "./Components/FileSelect";
import useTypeWriter from "./hooks/useTypeWriter";

function App() {
	const [code, setCode] = React.useState({
		name: "",
		text: "",
	});

	const { writer, clean, show, stop, start } = useTypeWriter(
		code.text, 5
	);
	React.useEffect(show, [code]);

	return (
		<div>
			<Header />
			<FileSelect onLoad={setCode} />

			<button onClick={start}>Start</button>
			<button onClick={stop}>Stop</button>
			<button onClick={clean}>Clean</button>
			<button onClick={show}>Show</button>

			<Code fileName={code.name} codeText={writer} />
		</div>
	);
}

export default App;
