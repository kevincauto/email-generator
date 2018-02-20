import React from 'react';
import DOMPurify from 'dompurify';
import { saveAs } from 'file-saver';
import axios from 'axios';

import * as cced_thematic from '../templates/cced_thematic.js';
import * as idt_thematic from '../templates/idt_thematic.js';
import * as id_thematic from '../templates/id_thematic.js';
import * as idt_reader from '../templates/idt_reader.js';
import * as cced_reader from '../templates/cced_reader.js';
import * as id_reader from '../templates/id_reader.js';
import * as id_digital from '../templates/id_digital.js';
import * as idt_digital from '../templates/idt_digital.js';
import * as cced_digital from '../templates/cced_digital.js';
import * as cdew_da from '../templates/cdew_da.js';
import * as cdew_dds from '../templates/cdew_dds.js';
import * as cdew_dh from '../templates/cdew_dh.js';
import * as cdew_lab from '../templates/cdew_lab.js';
import * as cdew_thematic from '../templates/cdew_thematic.js';

const TEMPLATES = {
  cced_thematic,
  idt_thematic,
  id_thematic,
  idt_reader,
  cced_reader,
  id_reader,
  id_digital,
  idt_digital,
  cced_digital,
  cdew_da,
  cdew_dds,
  cdew_dh,
  cdew_lab,
  cdew_thematic
}

class RightSideDisplay extends React.Component {
  downloadHtml(html, fileName) {
    if (!fileName) {
      alert("This email needs a name in order to be downloaded.");
      return;
    };
    var file = new File([html], fileName + '.html', { type: "text/html" });
    saveAs(file);
  }

  downloadText(textEmail, fileName) {
    if (!fileName) {
      alert("This email needs a name in order to be downloaded.");
      return;
    };
    var file = new File([textEmail], fileName + '.txt', { type: "text/plain;charset=utf-8" });
    saveAs(file);
  }

  handleSave() {

  }
  handleSaveAs() {
    console.log('save as')
    this.props.onSaveAs();
  }
  handleOpen() {
    this.props.onOpen();
  }

  render() {
    let layout = this.props.info[this.props.info.selected_template];

    //the line of code below calls the functions in the template file.
    //functions are named after the rowName
    //It uses the information in the fields array to generate an html row with the proper info
    //The info is mapped to an array and then joined into one string of html
    let html = layout.map(row => {
      return TEMPLATES[this.props.info.selected_template][row.typeOfRow](row.fields)
    }).join('');

    //Sanitize data to avoid XSS attack
    //Sanitize strips css from the header and make the email render oddly.  Need to find a solution to clean without
    //messing up what it looks like
    //let cleanHtml = DOMPurify.sanitize(html);

    let textEmail = layout
      .filter(form => (form.fields.length > 0))
      .map(form => (form.fields
        .map(field => (field.value))
        .filter(value => (value !== undefined && value !== ''))
        .join('\n'))
      ).join('\n\n')



    //fix this.
    // let emailName =  'Untitled';
    return (
      <div id="text-results">
        <div className="content" dangerouslySetInnerHTML={{ __html: html }}></div>
        <br />
        <h3 className="download-header">3. Copy the email.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        File: {this.props.info.fileName ? this.props.info.fileName : '[ none ]'}</h3>
        <div className="copy-paste">
          <div className="copyArea html-copy">
            {/* HTML Version: */}
            <textarea value={html} readOnly={true} />
            {/* <button onClick={()=>this.downloadHtml(html,emailName)} className="download-button">Download HTML Email</button> */}
          </div>
          <br />
          <div className="copyArea text-copy">
            {/* Text Version:
            <textarea value={textEmail} readOnly={true}/>
            <button onClick={()=>this.downloadText(textEmail,emailName)} className="download-button">Download Text-Version Email</button>  */}
            <button onClick={() => this.handleSave()} className="download-button">Save</button>
            <button onClick={() => this.handleSaveAs()} className="download-button">Save As</button>
            <button onClick={() => this.handleOpen()} className="download-button">Open</button>
            <button onClick={() => window.location.reload()} className="download-button">Clear All</button>
          </div>

        </div>

      </div>
    )
  }
}

export default RightSideDisplay;