import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';

export default class CCEDLiveWebinarHTML extends React.Component{
  
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
    //Import data from the form fields.
    let {
      title = 'To Be Updated',
      date = 'Date To Be Updated',
      link, 
      description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      lo1, lo2, lo3, headshot,  
      presenter='Lorem Ipsum, DDS', 
      provider = '',
      supporter = '',
      cost = '',
      credits = '',
      tvLink, tagline, unsubscribe, disclosure, 
      lyrisName=''
    } = this.props.info[this.props.info.selected_template];

    let {month, year} = this.props.info;
       
      
    //Take the Lyris Name and make a url slug out of it.
    lyrisName = lyrisName.toString()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
    
    let url = `http://aegispublications.com/news/cced/${year}/${month}/${lyrisName}.html`;
     
    //Set up a dummy image when the template first loads.
    let image = 'http://placehold.it/140x180';
    if(headshot){image = headshot}

    //Prevent whitespace from messing up link.
    if(link){link = link.trim()};

        const first=`
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title></title>
        </head>
        <body style="background-color:#bfbfbf;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="font-family:'Helvetica', 'Arial', sans-serif; background-color:#FFFFFF;">
          <tr>
                <td colspan="2" align="center">
                    <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="padding:0 32px 14px 32px;font-family:Arial, sans-serif; font-size:12px;text-align:right;color:#ffffff; background:#ffffff;">
                        <tr>
                            <td align="center">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tbody>
                                <tr>
                            <td colspan="3" align="center" valign="middle" style="font-size:10px; line-height:20px; color:#424242; font-family:Arial, Helvetica, sans-serif; text-transform:uppercase; text-align:center;">
                                Cannot view this email? <a href="${url}" target="_blank" style="font-size:10px; line-height:20px; color:#424242; font-family:Arial, Helvetica, sans-serif; text-transform:uppercase; text-decoration:none; font-weight:bold;">Click here to view HTML version</a>
                            </td>
                        </tr>
                                <tr>
                                    <td style="background:#c2904a;"><a href="https://cced.cdeworld.com/" target="_blank"><img src="http://www.aegispublications.com/news/cdeworld/2016/03/cced-header.jpg" width="659" height="75" hspace="0" vspace="0" border="0" align="left"></a></td>
                                    </tr>
                            </tbody></table>
                        </td>
                        </tr>
                    </table>
                </td>
            </tr>`

    //The tagline is commented out by default.
    let tag = `
        <!--	<tr>
            <td colspan="2">
              <table width="599" cellpadding="0" cellspacing="0" border="0" style="border-bottom: 1px solid #e4e4e4; margin:0 32px 20px 32px;">
                <tr>
                  <td style="padding:14px 0 14px 0; font-family:'Times New Roman', serif; font-size:25px; font-style:italic; color:#c2904a;">
              
        Don’t Forget – You’re Registered for Tomorrow's Webinar!
        </td>
                </tr>
              </table>
            </td>
          </tr>-->`

      //If, however, the tagline is filled out, display it.
      if(tagline){
        tag = `
            <tr>
            <td colspan="2">
              <table width="599" cellpadding="0" cellspacing="0" border="0" style="border-bottom: 1px solid #e4e4e4; margin:0 32px 20px 32px;">
                <tr>
                  <td style="padding:14px 0 14px 0; font-family:'Times New Roman', serif; font-size:25px; font-style:italic; color:#c2904a;"> 
                  ${tagline}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
            `
          }
        
      let main = `
          <tr>
            <td height="348" colspan="2" valign="top" style="padding:12px 32px 24px 32px; font-size:13px; color:#c2904a; line-height:16px; border-bottom: 1px solid #e4e4e4;">
              <table cellpadding="0" cellspacing="0" border="0" align="right" style="padding:0 0 50px 0;">
              <tr>
                <td width="191" bgcolor="#ffffff" style="border-collapse:collapse; padding: 0 30px 10px 0;">
                  <a href="${link}" target="_blank"><img src="${image}" width="138" style="border:solid 1px #efefef; margin:17px 0 14px 0;" /></a><br /> <span style="color:#424242;">
                    <strong>Presenter:</strong> ${presenter}<br />
                    <strong>Provider:</strong> ${provider}<br />
                    <strong>Commercial Supporter:</strong> <em>${supporter}</em><br />
                    <strong>Cost:</strong> ${cost}<br>
                    <strong>CDE Credits:</strong> ${credits}</span>			    </td>
                </tr>
            </table>		
                
              <div style="font-size:18px; color:#c2904a; line-height:20px; font-weight:bold; width:440px; margin:17px 0 0 0;">
              ${title}</div><br />
              <a href="${link}" target="_blank" style="font-size: 16px; font-weight:bold; display: inline-block;background-color: #c2904a;padding: 10px 11px; color: #fff;text-decoration: none; text-transform:uppercase; border-radius: 10px; text-align:center; margin:0 0 7px 0;">${date}</a> <br />
                    <a href="${link}" target="_blank" style="font-size: 16px; font-weight:bold; display: inline-block;background-color: #c2904a;padding: 10px 11px; color: #fff;text-decoration: none; text-transform:uppercase; border-radius: 10px; text-align:center;">
                View the Webinar
              </a><br />
              <br />
                    <span>
              <strong style="color:#424242;">Description:</strong><br /></span>
              <div style="margin:5px 0 0 0; color:#424242; width:57%;">${description}</div>		
              `
              
        //Logic to render Learning Objectives based on how many LOs there are.
        let lo = '';
        

        if(lo1 && !lo2 && !lo3 ) {
          lo = `
                <br />
                <span style="color:#424242; font-weight:bold;">Learning Objective:</span>
                <ul style="margin:5px 0 0 0; padding-left:1.3em; color:#424242; width:57%;">
                    <li>${lo1}</li>
                  </ul>`  
        };
        if(lo1 && lo2 && !lo3 ) {
          lo = `
                <br />
                <span style="color:#424242; font-weight:bold;">Learning Objectives:</span>
                <ul style="margin:5px 0 0 0; padding-left:1.3em; color:#424242; width:57%;">
                    <li>${lo1}</li>
                    <li>${lo2}</li>
                  </ul>`  
          };
        if(lo1 && lo2 && lo3){
            lo = `
                <br />
                <span style="color:#424242; font-weight:bold;">Learning Objectives:</span>
                <ul style="margin:5px 0 0 0; padding-left:1.3em; color:#424242; width:57%;">
                    <li>${lo1}</li>
                    <li>${lo2}</li>
                    <li>${lo3}</li>
                  </ul>
                  `
          }
        let dis = '';
          if(disclosure){
                dis = `
                <br />
                <strong style="color:#424242;">Disclosure:</strong><br /></span>
                <div style="margin:5px 0 0 0; color:#424242; width:57%;">${disclosure}</div>		
                <br />
                `
          }
        let trEnd=
              `                  
              </td>
              </tr>
              `
          //The Bottom TV Section is only used in the reminder emails.
          let tv; 
          if(!tvLink){
            tv = '';
          }
          else{
            tv = `
                <tr>
                <td colspan="2" valign="top" style="padding:12px 32px 24px 32px; font-size:13px; color:#c2904a; line-height:16px; border-bottom: 1px solid #e4e4e4;">
                  <table cellpadding="0" cellspacing="0" border="0" align="left" bgcolor="#FFFFFF"  >
                <tr>
                    <td width="74">
                        <a href="${tvLink}" style="text-decoration:none;" target="_blank"><img src="http://forms.coronapro.com/images/tv_with_interference_full.gif" alt="Video Test" width="74" height="86" border="0" /></a>
                    </td>
                    <td valign="center" align="left" width="328">
                        <p style="font-weight: bold; font-size: 9pt; color:#D97B03; line-height: 13pt; margin: 0; padding: 11px 0 0 11px; font-family:Arial, Helvetica, sans-serif"><a href="${tvLink}" style="color:#c2904a; text-decoration:none;" target="_blank">Be sure to test your setup here <em><span style="font-size:10pt;'">BEFORE</span></em> the Webinar to ensure everything is working properly!</a></p>
                    </td>
                </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" align="left" style="padding-top:12px;">
              <tr>
                <td>
            <div style="font-size:11px; line-height:16px; font-family:Arial, Helvetica, sans-serif; color:#666666;"><span style="font-size:16px;">Webinar Hardware/Software Requirements</span><br />
            CDEWorld requires Internet Explorer<sup>&reg;</sup> version 7.0 or higher, or Firefox 3.0 or higher, a computer running Windows<sup>&reg;</sup> XP, Windows<sup>&reg;</sup> Vista, Windows<sup>&reg;</sup> 7, or Mac OS X, 512MB of RAM or greater, 1.5 GHZ or faster processor, and a screen resolution of 1024x768 or higher. This activity will be marked with the information and/or links to the required software. That software may be <a href="http://www.elabs10.com/c.html?rtr=on&s=x8pagq,racs,4878,dqdc,3h2l,fdfx,lduw&MLM_MID=1273132&MLM_UNIQUEID=af1cdf3968" target="_blank" style="text-decoration:none; font-size:11px; line-height:16px; font-family:Arial, Helvetica, sans-serif; color:#c2904a;">Adobe<sup>&reg;</sup> Acrobat<sup>&reg;</sup></a>, <a href="http://www.elabs10.com/c.html?rtr=on&s=x8pagq,racs,4878,g69i,kpb9,fdfx,lduw&MLM_MID=1273132&MLM_UNIQUEID=af1cdf3968" target="_blank" style="text-decoration:none; font-size:11px; line-height:16px; font-family:Arial, Helvetica, sans-serif; color:#c2904a;">Windows Media<sup>&reg;</sup>Player</a> or <a href="http://www.elabs10.com/c.html?rtr=on&s=x8pagq,racs,4878,41l,5cn7,fdfx,lduw&MLM_MID=1273132&MLM_UNIQUEID=af1cdf3968" target="_blank" style="text-decoration:none; font-size:11px; line-height:16px; font-family:Arial, Helvetica, sans-serif; color:#c2904a;">Microsoft<sup>&reg;</sup> Silverlight™</a>.</div>
                </td>
              </tr>
            </table>
                  
                  </td>
              </tr>
                `
            }
        
          const theRest = `
          <tr>
            <!-- Fine Print Footer -->
            <td colspan="2" align="center">
              <img src="http://aegispublications.com/news/id/webinars/webinar-footer.jpg" width="600" height="85" />
            </td>
            <!-- /Fine Print Footer -->
          </tr>
        </table>
        <table width="600" align="center" cellspacing="0" cellpadding="0" border="0" style="font-family:Arial, Helvetica, sans-serif;">
          <tbody><tr>
          <td colspan="2" align="center" style="font-size:10px; color:#444444; padding:11px 0 0 0;">
              <a href="mailto:?subject=Live Webinar!&amp;body=I thought you might be interested in this: ${url}" target="_blank" style="text-decoration:none; color:#444444;">
                Forward to a Colleague
              </a>
              &nbsp;&nbsp;|&nbsp;&nbsp; 
              <a href="http://www.dentalaegis.com/privacy-policy/" target="_blank" style="text-decoration:none; color:#444444;">
                Privacy Policy
              </a>
                <br />
              Compendium  |  104 Pheasant Run, Suite 105  |  Newtown, PA 18940
                <br />       
            ${unsubscribe}
        </div>
            </td>
          </tr>
        </tbody></table>
          
        <map name="Map" id="Map">
          <area shape="rect" coords="57,2,85,24" href="mailto:?subject=Live CDE Webinar&amp;body=I thought you might be interested in this: ${url}" target="_blank" alt="mailto" />
          <area shape="rect" coords="27,4,48,23" href="http://twitter.com/home?status=Live CDE Webinar+${url}" target="_blank" alt="twitter" />
          <area shape="rect" coords="5,3,21,24" href="http://www.facebook.com/share.php?u=${url}&amp;title=Live CDE Webinar"  target="_blank" alt="fb" />
        </map>
        </body></html>
        `;

        let html = first + tag + main + lo + dis + trEnd + tv + theRest;

        //Sanitize data to avoid XSS attack
        let cleanHtml = DOMPurify.sanitize(html);

        //if learning objectives exist, display in text email
        let loText = '';
        if(lo1){loText = `\nLearning Objectives:\n${lo1}\n${lo2}\n${lo3}\n`};

        //if a disclosure exists, display in text email
        let disText = '';
        if(disclosure){disText = `\nDisclosure:\n${disclosure}\n`}

        let textEmail =  `Compendium\n${title}\n${link}\n\nPresenter: ${presenter}\nProvider: ${provider}\nCommercial Supporter: ${supporter}\nCost: ${cost}\n\nDescription:\n${description}\n${loText}${disText}`;

        return(
          <div >
            <div className="content" dangerouslySetInnerHTML={{__html: cleanHtml}}></div><br />
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
