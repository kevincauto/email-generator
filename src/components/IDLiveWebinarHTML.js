import React from 'react';
import DOMPurify from 'dompurify';


export default class IDLiveWebinarHTML extends React.Component {
    render(){
        const {title, date, provider, supporter, cost, credits, description, lo1, lo2, lo3, presenter, link, headshot, tvLink, unsubscribe} = this.props.info[this.props.info.selected_template]
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
                    <a href="http://aegispublications.com/news/id/2017/10/Brasseler-3-Reminder.html" target="_blank" style="text-decoration:none; color:#9d0707;">
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
                    </ul>
        
                </td>
        
                
        
                <!-- Presenter's Photo -->
        
                <td valign="top" style="padding:12px;">
        
                    <img src="${headshot}" width="138" style="clear:both; margin:0 0 14px 0;" />
        
                    <div style="font-size:11px; line-height:auto;">
        
                    <span style="color:#9d0707; "><strong>Presenter:</strong></span> 
        
                        ${presenter}<br />			
        
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
            
                
            
                <!--<tr>
            
                    <td colspan="2">
            
                        <hr size="1" color="#dedede" width="575" />
            
                    </td>
            
                </tr>-->
            
                
            
                <tr>
            
                    <td colspan="2" height="10">
            
                    </td>
            
                </tr>
            
                `
            }
            
        
        
           let end = `<tr>
        
            <td colspan="2" align="center" style="font-size:11px; color:#444444;">
        
                    AEGIS Communications
        
                    &nbsp;&nbsp;|&nbsp;&nbsp;
        
                    104 Pheasant Run, Suite 105
        
                    &nbsp;&nbsp;|&nbsp;&nbsp;
        
                    Newtown, PA 18940
        
                    
        
                    <hr size="1" color="#555555" width="500" />
        
                    
        
                    <a href="mailto:?subject=Live CDE Webinar!&body=I thought you might be interested in this: http://aegispublications.com/news/id/2017/10/Brasseler-3-Reminder.html" target="_blank" style="text-decoration:none; color:#526687;">
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
                <area shape="rect" coords="4,5,21,22" href="http://www.facebook.com/share.php?u=http://aegispublications.com/news/id/2017/10/Brasseler-3-Reminder.html&amp;title=Live CDE Webinar" target="_blank" alt="fb">
                <area shape="rect" coords="30,3,50,21" href="http://twitter.com/home?status=Live CDE Webinar+http://aegispublications.com/news/id/2017/10/Brasseler-3-Reminder.html" target="_blank" alt="twitter">
                <area shape="rect" coords="58,2,83,22" href="mailto:?subject=FW: Live CDE Webinar&amp;body=I thought you might be interested in this: http://aegispublications.com/news/id/2017/10/Brasseler-3-Reminder.html" target="_blank" alt="mailto">
            </map>
            </body></html>`;

        html = start + tv + end;    
        //Sanitize data to avoid XSS attack
        let sanitizedHtml = DOMPurify.sanitize(html); 
        let textEmail = `Inside Dentistry Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\nCommercial Supporter: ${supporter}\nDescription:\n${description}\n\n${link}`;

        return(
          <div >
            <div className="content" dangerouslySetInnerHTML={{__html: sanitizedHtml}}></div><br />
            HTML:< br />
            <textarea value={html} readOnly={true} className="copyArea" /><br />
            <br />
            TEXT EMAIL:< br />
            <textarea value={textEmail} readOnly={true} className="copyArea"/>
          </div>
        );
    }
}