import React from "react";

interface ISelectFile {
  onUpload: Function;
}

export default class SelectFile extends React.Component<ISelectFile> {
  fileInput: any;
  state: any;
  constructor(props: ISelectFile) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
    this.fileInput = React.createRef();
    this.state = { fileName: "" };
    this.fileSelected = this.fileSelected.bind(this);
  }
  uploadFile() {
    if (this.fileInput.current.files.length > 0)
      this.props.onUpload(this.fileInput.current.files[0]);
    else console.log("File not selected");
  }
  fileSelected() {
    if (this.fileInput.current.files.length > 0) {
      this.state = this.setState((state) => {
        return { fileName: this.fileInput.current.files[0].name };
      });
    }
  }
  render() {
    return (
      <form>
        <div className="input-group">
          <div className="custom-file">
            <input
              type="file"
              accept=".csv"
              className="custom-file-input"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              ref={this.fileInput}
              onChange={this.fileSelected}
            />
            <label className="custom-file-label">
              {this.state.fileName === "" ? "Choose file" : this.state.fileName}
            </label>
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="inputGroupFileAddon04"
              onClick={this.uploadFile}
            >
              Upload
            </button>
          </div>
        </div>
      </form>
    );
  }
}
