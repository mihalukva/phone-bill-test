import React from "react";

export default class SelectFile extends React.Component {
  fileInput: any;
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event: any) {
    event.preventDefault();
    console.log(this.fileInput.current.files[0]);
    let formData = new FormData();

    formData.append('username', 'abc123');
    formData.append('avatar', this.fileInput.current.files[0]);
    
    fetch('/upload', {
      method: 'PUT',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });



    var reader = new FileReader();
    reader.onload = function (evt: any) {
      console.log(evt.target.result);
    };
    reader.readAsText(this.fileInput.current.files[0]);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" accept=".csv" ref={this.fileInput} />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
