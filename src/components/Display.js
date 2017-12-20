import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';

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
  cdew_dds
}

export default class Display extends React.Component {
    downloadHtml(html, fileName){
        if(!fileName){
          alert("This email needs a name in order to be downloaded.");
          return;
        };
        var file = new File([html], fileName + '.html', {type: "text/html"});
        saveAs(file);
    }
    
    downloadText(textEmail,fileName){
        if(!fileName){
          alert("This email needs a name in order to be downloaded.");
          return;
        };
        var file = new File([textEmail], fileName + '.txt', {type: "text/plain;charset=utf-8"});
        saveAs(file);
    }   

    render() {
    let layout = this.props.info[this.props.info.selected_template];

    //the line of code below calls the functions in the template file.
    //functions are named after the rowName
    //It uses the information in the fields array to generate an html row with the proper info
    //The info is mapped to an array and then joined into one string of html
    let html = layout.map(row=>{ 
      console.log(row);
      return TEMPLATES[this.props.info.selected_template][row.typeOfRow](row.fields)}).join('');
    
        //Sanitize data to avoid XSS attack
        //Sanitize strips css from the header and make the email render oddly.  Need to find a solution to clean without
        //messing up what it looks like
        //let cleanHtml = DOMPurify.sanitize(html);

    let textEmail = `This is the text email.\n\nTo be updated with data`
    //fix this.
    let emailName =  'Untitled';
        return(
          <div id="text-results">
        <div className="content" dangerouslySetInnerHTML={{__html: html}}></div>
        <br />
        <h3 className="download-header">3. Copy or download the email.</h3>
        <div className="copy-paste">
          <div className="copyArea html-copy">
            <textarea value={html} readOnly={true}  />
            {<button onClick={()=>this.downloadHtml(html,emailName)} className="download-button">Download HTML Email</button>}
          </div>
          <div className="copyArea text-copy">
            <textarea value={textEmail} readOnly={true}/>
            <button onClick={()=>this.downloadText(textEmail,emailName)} className="download-button">Download Text-Version Email</button>
          </div>
        </div>
      </div>
        )
    }
}