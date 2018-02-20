import React, { Component } from 'react';

class SaveDialog extends Component {
  constructor() {
    super()
    this.state({
      fileName: null
    })
  }
  render() {
    return (
      <div className="popup" >
        <div className='popup_inner'>
          <p className="float-right" onClick={() => this.toggleDialog()}>[x]</p>
          <img src="https://www.aegisdentalnetwork.com/img/layout/general/da-logo-large.png" width="250" />
          <p className="popup-para">
            Name this file...</p>
          <form>
            <input className="save-text-input" placeholder="File Name" />
            <button type="submit" className="download-button" onClick={() => this.saveAs}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SaveDialog;