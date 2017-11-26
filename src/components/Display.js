import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';
import {html_sections} from '../templates/cced_thematic'


export default class CCEDThematicHTML extends React.Component {
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

    
    let layout = this.props.info[this.props.info.selected_template]
    let arr = [];
    let html;
    for (let i=0; i<layout.length; i++){
        for(let j=0; j<html_sections.length; j++){
            if(layout[i].typeOfRow == html_sections[j].typeOfRow){
                html = html_sections[j].html;
                for(let k=0; k<layout[i].fields.length; k++){
                    if(layout[i].fields){
                        let variable = '{' + layout[i].fields[k].name + '}';
                        let val = layout[i].fields[k].value;
                        var regex = new RegExp(variable,'g');
                        html = html.replace(regex,val)
                    }
                }  
                arr.push(html);
            }   
        }

    }


    html = arr.join('');
    //   let html = html_sections.reduce((prev, current)=>{
            
    //         return(prev + current.html)
    //     },'');

    //     html =html.replace(/{{title1}}/g, 'WOW');

        //Sanitize data to avoid XSS attack
        //let cleanHtml = DOMPurify.sanitize(html);
        // let textEmail = `IDT On-Demand Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\nCommercial Supporter: ${supporter}\nDescription:\n${description}\n\n${link}`;
let cleanHtml = html;
        return(
        <div >
        <div className="content" dangerouslySetInnerHTML={{__html: cleanHtml}}></div>
        <br />
        <h3 className="download-header">3. Copy or download the email.</h3>
        <div className="copy-paste">
          <div className="copyArea html-copy">
            {/* <textarea value={html} readOnly={true}  />
            <button onClick={()=>this.downloadHtml(html,lyrisName)} className="download-button">Download HTML Email</button> */}
          </div>
          <div className="copyArea text-copy">
            {/* <textarea value={textEmail} readOnly={true}/>
            <button onClick={()=>this.downloadText(textEmail,lyrisName)} className="download-button">Download Text-Version Email</button> */}
          </div>
        </div>
      </div>
        )
    }
}