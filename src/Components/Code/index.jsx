import "./styles.css";

import React from "react";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function Code({ fileName, codeText, ...props }) {
	return (
		<div className="code-viewer">
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
                    height: "inherit"
				}}
			>
				{codeText}
			</SyntaxHighlighter>
		</div>
	);
}

export default Code;
