import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';

export default class CCEDOnDemandWebinarHTML extends React.Component{
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

    render(){
    const {
        title = 'To Be Updated', 
        dates = 'Dates to Be Updated', 
        link, 
        description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        lo1, lo2, lo3, imgLink,  
        presenter = '', 
        provider = '', 
        supporter = '', 
        cost = '', 
        credits = '', 
        tvLink, 
        tagline = '', 
        disclosure, unsubscribe, lyrisName =''
    } = this.props.info[this.props.info.selected_template];
        
    let {month, year} = this.props.info;
      
    //Take the Lyris Name and make a url slug out of it.
    let slug = lyrisName.toString()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
    
    let url = `http://aegispublications.com/news/cced/${year}/${month}/${slug}.html`;
        let image = 'http://placehold.it/250x200';
        if(imgLink){image = imgLink.trim()}
        let html = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Now On Demand</title>
        <style type="text/css">
        body {
            margin-left: 0px;
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
        }
        </style>
        </head>
        
        <body bgcolor="#efefef">
            <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="font-family:'Helvetica','Arial',sans-serif;background-color:#ffffff">
            <tbody>
            <tr>
                <td colspan="2" style="font-size:9px; line-height:20px; text-transform:uppercase; text-align:center; color:#333333; background-color:#efefef;">
                Cannot view this email? 
                    <a href="${url}" target="_blank" style="text-decoration:none; color:#c2904a;">
                        Click here to view the HTML version.
                    </a>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tbody><tr>
                          <td height="39" colspan="2" align="center" valign="top" id="cover2"><a href="https://cced.cdeworld.com/" target="_blank"><img src="http://www.aegispublications.com/news/cdeworld/2016/03/cced-header.jpg" width="659" height="75" hspace="0" vspace="0" border="0" align="left"></a></td>
                      </tr>
                      <tr>
                    </tr></tbody></table>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <table width="590" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #e4e4e4; margin:0 32px 20px 32px">
                        <tbody><tr>
                            <td style="padding:21px 0 21px 0; font-family:'Times New Roman',serif;font-size:28px; font-style:italic; color:#c2904a;">Free On-Demand CE Webinar</td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            
            <tr>
                <td colspan="2" valign="top" style="padding:12px 32px 24px 32px;font-size:13px;color:#424242;line-height:16px">
                    <table cellpadding="0" cellspacing="0" border="0" align="right" style="padding:0 0 30px 0">
                    <tbody><tr>
                        <td bgcolor="#ffffff" style="border-collapse:collapse;padding:0 14px 10px 0"></td>
                      <td align="right" valign="top">
                        <a href="${link}" target="_blank"><img src="${image}" alt="" width="250"></a><br>
                        </td>
                    </tr>
                </tbody></table>	
                    <div style="font-size:18px; line-height:20px; font-weight:bold; width:40%;"><a href="${link}" target="_blank" style="color:#c2904a; text-decoration:none;">${title}</a></div>
                
                    
                    <a href="${link}" target="_blank" style="text-transform:uppercase; font-size:16px; background:#c2904a; padding:10px 11px;color:#ffffff; border-radius:10px; font-weight:bold; display:block; width:193px; text-align:center; margin:14px 0 14px 0; text-decoration:none;">VIEW THE WEBINAR</a><br />
                    <strong>Presenter:</strong> ${presenter}<br />
                    <strong>Provider:</strong> ${provider}<br>					
                    <em><strong>Commercial Supporter:</strong> ${supporter}</em><br>
                    <strong>CDE Credits:</strong> ${credits}<br />
                    <strong>Cost:</strong> ${cost}<br />
                    <strong>Available: </strong> ${dates}<br><br />
                    <strong>Description</strong><br>
                    <div style="margin:5px 0 0 0">${description} </div>		
                    <br>

                    <strong>Learning Objectives</strong>
                    <ul style="margin:5px 0 0 0; padding:0 0 0 1.3em;">
                        <li>${lo1}</li>
                        <li>${lo2}</li>
                        <li>${lo3}</li>
                    </ul>
                    <strong><br>

                    Disclosure</strong><br>
                    <div style="margin:5px 0 0 0;">${disclosure}</div>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <img src="http://aegispublications.com/news/id/webinars/webinar-footer.jpg" width="600" height="85" style="border-top:1px solid #e4e4e4;" />
                </td>
            </tr>
            <tr>
              <td colspan="2" align="center" style="font-size:10px; font-family:Arial, Helvetica, sans-serif; color:#424242; padding:11px 0 11px 0; border-top:solid 1px #efefef; background-color:#efefef;">
                  <a href="mailto:?subject=On Demand Webinar!&amp;body=I thought you might be interested in this: ${url}" target="_blank" style="text-decoration:none; color:#c2904a;">
                        Forward to a Colleague
                    </a>
                    &nbsp;&nbsp;|&nbsp;&nbsp; 
                    <a href="http://www.dentalaegis.com/privacy-policy/" target="_blank" style="text-decoration:none; color:#c2904a;">
                        Privacy Policy
                    </a>
                        <br />
                    <em>Compendium</em>  |  104 Pheasant Run, Suite 105  |  Newtown, PA 18940
                      <br />
                    
                ${unsubscribe}
        </div> 
              </td>
            </tr>	
          </tbody>
        </table>
        </body>
        </html>
        `

        let textEmail =  `Compendium On-Demand Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\nProvider: ${provider}\nCommercial Supporter: ${supporter}\nCost: ${cost}\nAvailable:\n${dates}Description:\n${description}\n\n${link}`
        
        //Sanitize data to avoid XSS attack
        let cleanHtml = DOMPurify.sanitize(html);

        return(
            <div >
            <div className="content" dangerouslySetInnerHTML={{__html: cleanHtml}}></div>
            <br />
            <h3 className="download-header">3. Copy or download the email.</h3>
            <div className="copy-paste">
              <div className="copyArea html-copy">
                <textarea value={html} readOnly={true}  />
                <button onClick={()=>this.downloadHtml(html,lyrisName)} className="download-button">Download HTML Email</button>
              </div>
              <div className="copyArea text-copy">
                <textarea value={textEmail} readOnly={true}/>
                <button onClick={()=>this.downloadText(textEmail,lyrisName)} className="download-button">Download Text-Version Email</button>
              </div>
            </div>
          </div>
        )
    }
}

