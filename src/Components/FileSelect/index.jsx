import "./styles.css";
import FileGithub from "../FileGithub";
import FileUploader from "../FileUploader";

function FileSelect({ onLoad, ...props }) {
	return (
		<div>
			<h2>📄 Load Your Source Code From ...</h2>
			<div className="file-selector">
				<FileGithub onLoad={onLoad} />
				<FileUploader onLoad={onLoad} />
			</div>
		</div>
	);
}

export default FileSelect;
