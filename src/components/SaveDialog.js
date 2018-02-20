import React, { Component } from 'react';

class SaveDialog extends Component {
  constructor() {
    super();
    this.state = {
      fileName: ''
    };
  }
  // componentDidUpdate() {
  //   console.log(this.state);
  // }
  closeDialog() {
    this.props.closeSaveDialog();
  }
  handleFieldChange(value) {
    this.setState({ fileName: value })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.OnUpdateFilenName(this.state.fileName);
    this.props.closeSaveDialog();
  }
  render() {
    return (
      <div className="popup" >
        <div className='popup_inner'>
          <p className="float-right" onClick={() => this.closeDialog()}>[x]</p>
          <img src="https://www.aegisdentalnetwork.com/img/layout/general/da-logo-large.png" width="250" />
          <p className="popup-para">Name this file...</p>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input className="save-text-input" placeholder="File Name" value={this.state.fileName} onChange={(e) => this.handleFieldChange(e.target.value)} />
            <button type="submit" className="download-button">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SaveDialog;