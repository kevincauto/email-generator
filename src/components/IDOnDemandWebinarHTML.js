import React from 'react';
import DOMPurify from 'dompurify';


export default class IDOnDemandWebinarHTML extends React.Component {
    render(){
        const {title, date, provider, supporter, cost, credits, description, lo1, lo2, lo3, presenter, link, tvLink, unsubscribe, disclosure, image} = this.props.info[this.props.info.selected_template]
        let image2 = 'http://placehold.it/200x150';
        if(image){image2 = image.trim()}
        
        let start = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>
                On-Demand Inside Dentistry Webinar
            </title>
        </head>
        
        <body bgcolor="#bfbfbf">
        <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#ffffff" style="font-family:'Helvetica', 'Arial', sans-serif;">
        <tr>
            <td colspan="2" style="font-size:10px; line-height:20px; text-transform:uppercase; text-align:center; color:#83878c;">
            Cannot view this email? 
                <a href="http://aegispublications.com/news/id/2017/11/Brassler-3-On-Demand.html" target="_blank" style="text-decoration:none; color:#83878c;">
                    Click here to view the HTML version.
                </a>
            </td>
        </tr>
        
        <tr>
            <td colspan="2">
                <a href="http://www.dentalaegis.com/id" target="_blank">
                    <img src="http://aegispublications.com/news/id/webinars/2016/images/webinar-email-header-id.jpg" width="600" />
                </a>
            </td>
        </tr>
        
        <tr>
            <td width="280" style="padding:12px; font-family:'Times New Roman', serif; font-size:26px; font-style:italic; color:#ad112b;">
                New On-Demand Webinar
            </td>
            <!-- Social Media Map -->
            <td width="220">
                <img src="http://www.aegispublications.com/news/ce/2011/1011/drbenjamin/images/social.gif" width="95" height="27" align="right" usemap="#Map" />
            </td>
            <!-- /Social Media Map -->
        </tr>
        
        <tr>
            <td valign="top" style="padding:12px;">
                <span style="font-size:16px; line-height:20px; color:#c2904a; font-family:Arial, Helvetica, sans-serif; font-weight:normal; color:#ad112b; margin-bottom:5px;">
        
         
         
         <strong>${title}</strong>
                
                <div style="font-size:11px; line-height:15px; clear:both; margin:9px 0 0 0;">
                    <div style="color:#ad112b;"><strong>PRESENTER:</strong>
                        <span style="color:#333333;">${presenter}</span>
                    </div> 
                    <div style="color:#ad112b; clear:both;"><strong>CDE CREDITS:</strong> 
                        <span style="color:#333333;">${credits}</span> 
                    </div>
                    <div style="color:#ad112b; clear:both;"><strong>COST:</strong> 
                        <span style="color:#333333;">${cost}</span>
                    </div>
                    <div style="color:#ad112b; clear:both;"><strong>COMMERCIAL SUPPORTER:</strong>
                        <span style="color:#333333;"><em>${supporter}</em></span>
                    </div>
                <div style="color:#ad112b; clear:both;"><strong>PROVIDER:</strong>
                        <span style="color:#333333;"><em>${provider}</em></span>
                    </div>
                       <div style="color:#ad112b; clear:both; margin:0 0 7px 0;"><strong>AVAILABLE:</strong>
                        <span style="color:#333333;"><em>${date}</em></span>
                    </div> 
                </div>
         
         
         
        <span style="font-size:17px; line-height:auto; color:#63246a; font-family:Arial, Helvetica, sans-serif; font-weight:normal; color:#005fae; margin-bottom:5px;"><a href="${link}" target="_blank" ><img src="http://aegispublications.com/news/id/webinars/2016/05/click.jpg" alt="Click to View Webinar" width="302" border="0" style="margin:7px 0 0 0;" /></a></span></span>
        
        
        
            </td>
            
            <!-- Presenter's Photo -->
            <td valign="top" align="center" style="padding:12px;">
                <img src="${image2}" width="220"  />
            </td>
            <!-- /Presenter's Photo -->
        </tr>
        <tr>
            <td valign="top" style="padding:0px 12px 12px 12px;" colspan="2">
                            <div style="font-size:11px; line-height:15px; clear:both; margin:0px 0 0 0;">
                    <div style="color:#ad112b;"><strong>DESCRIPTION:</strong>
                        <span style="color:#333333;"><br />
                       ${description}
        </span>
                    </div>
        
                
                    <div style="color:#ad112b; margin: 7px 0px 0px"><strong>LEARNING OBJECTIVES:</strong>
                        <span style="color:#333333;"><br />
                        <ul style="margin: 0px; padding: 0px 0px 0px 15px">
                            <li>${lo1}</li>
                            <li>${lo2}</li>
                            <li>${lo3}</li>
                        </ul>
                        </span>
                    </div>
                                <div style="color:#ad112b; margin: 7px 0px 0px 0px"><strong>DISCLOSURE:</strong>
                        <span style="color:#333333;"><br />
                        ${disclosure}
        </span>
                    </div>
                    </div>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <hr size="1" color="#dedede" width="575" />
            </td>
        </tr>
        
        <tr>
            <td colspan="2" height="10">
            </td>
        </tr>
        
        <tr>
        <td colspan="2" align="center" style="font-size:11px; color:#444444;">
                Inside Dentistry
                &nbsp;&nbsp;|&nbsp;&nbsp;
                104 Pheasant Run, Suite 105
                &nbsp;&nbsp;|&nbsp;&nbsp;
                Newtown, PA 18940
                <br />
            
                
                <a href="mailto:?subject=ID Webinar&body=I thought you might be interested in this: http://aegispublications.com/news/id/2017/11/Brassler-3-On-Demand.html" style="text-decoration:none; color:#526687;">
                    Forward to a Colleague
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp; 
                <a href="http://www.dentalaegis.com/privacy-policy/" style="text-decoration:none; color:#526687;">
                    Privacy Policy
                </a><br />
                ${unsubscribe}
            </td>
        </tr>
        
        <tr>
            <td colspan="2" height="10">
            </td>
        </tr>
        
        
        
        
        
        <tr>
            <td colspan="2" height="10">
            </td>
        </tr>
        </table>
        
        <map name="Map" id="Map">
            <area shape="rect" coords="4,5,21,22" href="http://www.facebook.com/share.php?u=http://aegispublications.com/news/id/2017/11/Brassler-3-On-Demand.html&amp;title=CDE Webinar" target="_blank" alt="fb">
            <area shape="rect" coords="30,3,50,21" href="http://twitter.com/home?status=Live CDE Webinar+http://aegispublications.com/news/id/2017/11/Brassler-3-On-Demand.html" target="_blank" alt="twitter">
            <area shape="rect" coords="58,3,83,23" href="mailto:?subject=FW: Live CDE Webinar&amp;body=I thought you might be interested in this: http://aegispublications.com/news/id/2017/11/Brassler-3-On-Demand.html" target="_blank" alt="mailto">
        </map>
        
        
        </body>
        </html>
        `;

        let html = start;    
        //Sanitize data to avoid XSS attack
        let sanitizedHtml = DOMPurify.sanitize(html); 
        let textEmail = `Inside Dentistry On-Demand Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\n${date}\nCommercial Supporter: ${supporter}\nCost: ${cost}\nCredits: ${credits}\nDescription:\n${description}\n\n${link}`;

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