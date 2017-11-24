import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';


export default class IDLiveWebinarHTML extends React.Component {
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
        const {title, date, provider, supporter, cost, credits, 
            description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            lo1, lo2, lo3, presenter, link, headshot, tvLink, unsubscribe, disclosure,
            emailName=''
        } = this.props.info[this.props.info.selected_template];
        
    let {month, year} = this.props.info;
      
    //Take the Lyris Name and make a url slug out of it.
    let slug = emailName.toString()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
    
    let url = `http://aegispublications.com/news/cced/${year}/${month}/${slug}.html`;
            let image = 'http://placehold.it/140x180';
        if(headshot){image = headshot}
        let html 
        
        let start = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
                <title></title>
            </head>
        
            
        
            <body bgcolor="#bfbfbf">
            <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#ffffff" style="font-family:'Helvetica', 'Arial', sans-serif;">
            <tr>
                <td colspan="2" style="font-size:9px; line-height:20px; text-transform:uppercase; text-align:center; color:#333333;">
                Cannot view this email? 
                    <a href="${url}" target="_blank" style="text-decoration:none; color:#9d0707;">
                        Click here to view the HTML version.
                    </a>
                </td>
            </tr>
        
            
        
            <tr>
                <td colspan="2">
                    <a href="http://www.dentalaegis.com/id" target="_blank">
                        <img src="http://aegispublications.com/news/id/webinars/2016/08/webinar-email-header-id.jpg" width="600" />
                    </a>
                </td>
            </tr>
        
            
        
            <tr>
                <td width="395" style="padding:12px; font-family:'Times New Roman', serif; font-size:26px; font-style:italic; color:#9d0707;">
                    ${title}
                </td>
        
                <!-- Social Media Map -->
                <td width="205">
                    <img src="http://www.aegispublications.com/news/ce/2011/1011/drbenjamin/images/social.gif" width="95" height="27" align="right" usemap="#Map" />
                </td>
                <!-- /Social Media Map -->
            </tr>
        
            
        
            <tr>
                <td valign="top" style="padding:0px 12px 12px; font-size:15px; color:#333333;">
                    <br />
        
                    <span style="font-size:16px; line-height:auto; color:#63246a; font-family:Arial, Helvetica, sans-serif; font-weight:normal; color:#005fae; margin-bottom:5px;"><a href="${link}" target="_blank"  style="color: #FFF;  text-transform:uppercase; display: inline-block;background-color:#9d0707; padding:7px 17px 7px 17px;text-align: center;text-decoration: none;"><strong>${date}</strong></a></span></span><br />
        
                    <br />
        
                    <!-- Webinar Buttons -->
        
                    <span style="font-size:16px; line-height:auto; color:#63246a; font-family:Arial, Helvetica, sans-serif; font-weight:normal; color:#005fae; margin-bottom:5px;"><a href="${link}" target="_blank"  style="color: #FFF;  text-transform:uppercase; display: inline-block;background-color:#9d0707; padding:7px 17px 7px 17px;text-align: center;text-decoration: none;"><strong>VIEW THE WEBINAR</strong></a></span></span>
                    <br /><br />
                    <span style="font-size:11px; line-height:auto;">
                        <span style="color:#9d0707;"><strong>DESCRIPTION</strong></span><br /> ${description}
                    </span>
                    <br />
                    <br />
        
                    <span style="font-size:11px; font-weight:bold; color:#9d0707;">
                        LEARNING OBJECTIVES
                    </span>
                    <ul style="margin:5px 0 0 -17px; font-size:11px;">
                        <li>${lo1}</li>
                        <li>${lo2}</li>
                        <li>${lo3}</li>
                    </ul>`
                let disclosureSection = '';
                if(disclosure){
                    disclosureSection = `
                    <br />
                <span style="font-size:11px; font-weight:bold; color:#9d0707;">
                    DISCLOSURE:
                </span>
                <br />
                <span style="font-size:11px">
                ${disclosure}
                </span>`
                }

                    
        let presenterInfo = `
                </td>
        
                
        
                <!-- Presenter's Photo -->
        
                <td valign="top" style="padding:12px;">
                    <img src="${image}" width="138" style="clear:both; margin:0 0 14px 0;" /><br />
                    <div style="font-size:11px; line-height:auto;">
                        <span style="color:#9d0707; "><strong>Presenter:</strong></span> 
                            ${presenter}<br />
                        <span style="color:#9d0707;"><strong>Provider:</strong></span> ${provider}<br />			
                        <span style="color:#9d0707;"><strong>Commercial Supporter:</strong></span> <em>${supporter}</em><br />      
                        <span style="color:#9d0707;"><strong>Cost:</strong></span> ${cost}<br />
                        <span style="color:#9d0707;"><strong>Credits</strong></span>: ${credits}
                    </div>
                 </td>
        
                <!-- /Presenter's Photo -->
        
            </tr>
        
            <tr>
        
                <td colspan="2">
        
                    <hr size="1" color="#dedede" width="575" />
        
                </td>
        
            </tr>`
            let tv = '';

            if(tvLink){
                tv = `
                <tr>
            
                    <Webinar Software Requirements>
            
                    <td colspan="2" style="padding:12px; font-size:13px; color:#666666;">
            
                        <span style="font-weight:bold;">
            
                            Webinar Hardware/Software Requirements
            
                        </span>
            
                        <br />
            
                        <table cellpadding="0" cellspacing="0" border="0">
            
                            <tr>
            
                                <td style="font-size:11px;">

                                    CDEWorld requires Internet Explorer® version 7.0 or higher, or Firefox 3.0 or higher, a computer running Windows® XP, Windows® Vista, Windows® 7, or Mac OS X, 512MB of RAM or greater, 1.5 GHZ or faster processor, and a screen resolution of 1024x768 or higher. This activity will be marked with the information and/or links to the required software. That software may be 
            
                                    <a href="http://success.adobe.com/en/na/sem/products/acrobat/acrobat.html" target="_blank" style="text-decoration:none; color:#005fae;">Adobe® Acrobat®</a>, 
            
                                    <a href="http://windows.microsoft.com/en-us/windows/download-windows-media-player?hq_e=el&hq_m=1273132&hq_l=5&hq_v=af1cdf3968" target="_blank" style="text-decoration:none; color:#005fae;">Windows Media® Player</a>, or 
            
                                    <a href="http://www.microsoft.com/getsilverlight/get-started/install/default.aspx?hq_e=el&hq_m=1273132&hq_l=6&hq_v=af1cdf3968" target="_blank" style="text-decoration:none; color:#005fae;">Microsoft® Silverlight</a>.
            
                                </td>
            
                                <td>
            
                                    <table cellpadding="0" cellspacing="0" border="0" width="240">
            
                                        <tr>
            
                                            <td width="74">
            
                                                <a href="${tvLink}" target="_blank" style="text-decoration:none;">
            
                                                    <img src="http://forms.coronapro.com/images/tv_with_interference_full.gif" width="74" height="86" />
            
                                                </a>
            
                                            </td>
            
                                            <td style="font-size:11px; line-height:13px;">
            
                                                <a href="${tvLink}" target="_blank" style="color:#9d0707; text-decoration:none;">
            
                                                    Be sure to test your setup here <em><strong>BEFORE</strong></em> the Webinar to ensure everything is working properly! Click here to test your setup!
            
                                                </a>
            
                                            </td>
            
                                        </tr>
            
                                    </table>
            
                                </td>
            
                            </tr>
            
                        </table>
            
                    </td>
            
                    <!-- /Webinar Software Requirements -->
            
                <!--</tr>-->       
                <tr>
                    <td colspan="2" height="10">
                    </td>
                </tr>
            
                `
            }
            
        
        
           let end = `<tr>
        
            <td colspan="2" align="center" style="font-size:11px; color:#444444;">
        
                    Inside Dentistry
        
                    &nbsp;&nbsp;|&nbsp;&nbsp;
        
                    104 Pheasant Run, Suite 105
        
                    &nbsp;&nbsp;|&nbsp;&nbsp;
        
                    Newtown, PA 18940
        
                    
        
                    <hr size="1" color="#555555" width="500" />
        
                    
        
                    <a href="mailto:?subject=Live CDE Webinar!&body=I thought you might be interested in this: ${url}" target="_blank" style="text-decoration:none; color:#526687;">
                        Forward to a Colleague
                    </a>
        
                    &nbsp;&nbsp;|&nbsp;&nbsp; 
        
                    <a href="http://www.dentalaegis.com/privacy-policy/" target="_blank" style="text-decoration:none; color:#526687;">
                        Privacy Policy
                    </a><br />
                    ${unsubscribe}
                </td>
            </tr>
            <tr>
                <td colspan="2" height="10">
                </td>
            </tr>
            </table>
            <map id="Map" name="Map">
                <area shape="rect" coords="4,5,21,22" href="http://www.facebook.com/share.php?u=${url}l&amp;title=Live CDE Webinar" target="_blank" alt="fb">
                <area shape="rect" coords="30,3,50,21" href="http://twitter.com/home?status=Live CDE Webinar+${url}" target="_blank" alt="twitter">
                <area shape="rect" coords="58,2,83,22" href="mailto:?subject=FW: Live CDE Webinar&amp;body=I thought you might be interested in this: ${url}" target="_blank" alt="mailto">
            </map>
            </body></html>`;

        html = start +  disclosureSection + presenterInfo + tv + end;    

        //Sanitize data to avoid XSS attack
        let cleanHtml = DOMPurify.sanitize(html);
        let textEmail = `Inside Dentistry Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\n${date}\nCommercial Supporter: ${supporter}\nCost: ${cost}\nCredits: ${credits}\nDescription:\n${description}\n\n${link}`;

        return(
            <div >
            <div className="content" dangerouslySetInnerHTML={{__html: cleanHtml}}></div>
            <br />
            <h3 className="download-header">3. Copy or download the email.</h3>
            <div className="copy-paste">
              <div className="copyArea html-copy">
                <textarea value={html} readOnly={true}  />
                <button onClick={()=>this.downloadHtml(html,emailName)} className="download-button">Download HTML Email</button>
              </div>
              <div className="copyArea text-copy">
                <textarea value={textEmail} readOnly={true}/>
                <button onClick={()=>this.downloadText(textEmail,emailName)} className="download-button">Download Text-Version Email</button>
              </div>
            </div>
          </div>
        );
    }
}