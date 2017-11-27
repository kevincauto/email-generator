import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';
import {html_sections} from '../templates/cced_thematic';
import * as cced_thematic from '../templates/cced_thematic.js';

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
    //I would prefer a more dynamic solution in the line below.
    //cced_thematic should be variable depending on the selected template
    //the line of code below calls the functions in the cced_thematic.js
    //It uses the information in the fields array to generate an html row with the proper info
    //The info is mapped to an array and then joined into one string of html
    let html = layout.map(row=>{ return cced_thematic[row.typeOfRow](row.fields)}).join('');
    
        //Sanitize data to avoid XSS attack
        //Sanitize strips css from the header and make the email render oddly.  Need to find a solution to clean without
        //messing up what it looks like
        //let cleanHtml = DOMPurify.sanitize(html);

    let textEmail = `This is the text email.\n\nTo be updated with data`
    let emailName = this.props.info[this.props.info.selected_template][0].fields[0].value
        return(
        <div >
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