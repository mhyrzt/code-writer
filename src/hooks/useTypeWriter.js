import React from "react";

function useTypeWriter(code, delay=0.5) {
	const [id, setId] = React.useState(null);
	const [writer, setWriter] = React.useState({
		idx: 0,
		text: "",
	});

	function clean() {
		setWriter({
			idx: 0,
			text: "",
		});
	}

	function show() {
		setWriter({
			idx: code.length,
			text: code,
		});
	}

	function stop() {
		id && clearInterval(id);
	}

	function start() {
		clean();
		const writerInterval = setInterval(() => {
			setId(writerInterval);
			setWriter(({ idx, text }) => {
				if (code[idx] === undefined) {
					stop();
					return { idx, text };
				}
				return {
					idx: idx + 1,
					text: text + code[idx],
				};
			});
		}, delay);
	}

	return {
		writer: writer.text,
		clean,
		show,
		stop,
		start,
	};
}

export default useTypeWriter;