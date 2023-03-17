import "./styles.css";

import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/prism";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Code({ fileName, codeText, ...props }) {
	console.log(SyntaxHighlighter.supportedLanguages);
	console.log(Object.keys(styles));
	return (
		<div>
			<SyntaxHighlighter
				style={oneDark}
				customStyle={{
					marginBottom: 0,
					borderBottomLeftRadius: 0,
					borderBottomRightRadius: 0,
				}}
			>
				{fileName}
			</SyntaxHighlighter>
			<SyntaxHighlighter
				style={oneDark}
				language="javascript"
				showLineNumbers
				customStyle={{
					marginTop: 0,
					borderTopLeftRadius: 0,
					borderTopRightRadius: 0,
				}}
			>
				{codeText}
			</SyntaxHighlighter>
		</div>
	);
}

export default Code;
