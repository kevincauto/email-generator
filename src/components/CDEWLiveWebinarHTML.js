import React from 'react';
import DOMPurify from 'dompurify';


export default class CDEWLiveWebinarHTML extends React.Component {
    render(){
        const {title, date, provider, supporter, cost, credits, description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', lo1, lo2, lo3, presenter, link, headshot, tvLink, unsubscribe} = this.props.info[this.props.info.selected_template]
        let image = 'http://placehold.it/130x160';
        if(headshot){image = headshot.trim()}
        
        let start = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        
        <html xmlns="http://www.w3.org/1999/xhtml">
        
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title></title>
        </head>
        
        <body style="background-color:#bfbfbf;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="font-family:'Helvetica', 'Arial', sans-serif; background-color:#FFFFFF;">
        <tr>
          <td colspan="2" style="font-size:9px; text-align:center; color:#333333; padding: 5px 0;"><table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="font-family:'Helvetica', 'Arial', sans-serif; background-color:#FFFFFF;">
        
            <tr>
              <td colspan="2" style="font-size:9px; line-height:20px; text-transform:uppercase; text-align:center; color:#333333; padding: 5px 0;"> Cannot view this email? <a href="http://aegispublications.com/news/cdeworld/2017/10/pelton-3-rem.html" target="_blank" style="text-decoration:none; color:#005fae;"> Click here to view the HTML version. </a></td>
            </tr>
            <tr>
              <td colspan="2"><a href="https://cdeworld.com" target="_blank"> <img src="http://www.aegispublications.com/news/cdeworld/09/images/header1.jpg" width="600" height="90" border="0" /> </a></td>
            </tr>
            <tr>
              <td colspan="2" align="left"><div style="padding:20px 0 10px 32px; font-family:'Times New Roman', serif; font-size:26px; font-style:italic; color:#005fae; width:67%; float:left;">${title}</div>
              <!-- Social Media Map -->
                <img src="http://www.aegispublications.com/news/ce/2011/1011/drbenjamin/images/social.gif" width="95" height="27" align="right" usemap="#Map" style="float:right; margin:20px 24px 0 0;" /></td>
              <!-- /Social Media Map -->
            </tr>
            <tr>
              <td align="left" valign="top" style="padding:12px 12px 12px 32px; font-size:13px; color:#005fae;"><span style="font-size:16px; line-height:auto; color:#005fae; font-family:Arial, Helvetica, sans-serif; font-weight:normal; color:#005fae; margin-bottom:5px;"> 
              <a href="${link}" target="_blank" style="color: #FFF;  text-transform:uppercase; display: inline-block;background-color:#005fae; padding:7px 17px 7px 17px;text-align: center;text-decoration: none; font-weight: bold;">${date}</a> </span><br />
              <a href="${link}" target="_blank" style="font-size: 14px; font-weight:bold; display: inline-block;background-color: #005fae;padding: 14px;color: #fff;text-decoration: none; text-transform:uppercase; margin: 14px 0 14px 0;"> View Webinar </a> <br />
                <br />
                <strong>Description:</strong><br />
                ${description}<br />
                <br />
                <strong>Learning Objectives:</strong>
                <ul style="margin:5px 0 0 0; padding-left:1.3em;">
                  <li>${lo1}</li>
                  <li>${lo2}</li>
                  <li>${lo3}</li>
                </ul>
        
                </td>
              <!-- Presenter's Photo -->
              <td align="left" valign="top" style="padding:12px 32px 12px 12px; font-size: 11px; color:#005fae; float:right;"><a href="${link}" target="_blank"><img src="${image}" width="138" style="padding-right: 24px; margin-bottom: 14px;" /></a> <br />
              <strong>Presenter: </strong>${presenter}<br />
                <strong>Provider: </strong> ${provider}<br />
                <strong>Commercial Supporter:</strong> <em>${supporter}</em><br />
                <strong>Cost:</strong> ${cost}<br>
                <strong>CDE Credits:</strong> ${credits} </td>
              <!-- /Presenter's Photo -->
            </tr>
            <tr>
              <td colspan="2" style="padding:12px 32px; font-size:13px; color:#005fae;"></td>
            </tr>`
        
            let tv = ``;
            
            if(tvLink){
                tv = `<tr>
                <td colspan="3" align="left" style="padding:14px 32px; border-top:solid 1px #ebebeb;"><table cellpadding="0" cellspacing="0" border="0" align="left" bgcolor="#FFFFFF">
                  <tbody>
                    <tr>
                      <td width="74"><a href="${tvLink}" style="text-decoration:none;" target="_blank"><img src="http://forms.coronapro.com/images/tv_with_interference_full.gif" alt="Video Test" width="74" height="86" border="0" /></a></td>
                      <td valign="center" align="left" width="328"><p style="font-weight: bold; font-size: 9pt; color:#D97B03; margin: 0; padding: 11px 0 0 11px; font-family:Arial, Helvetica, sans-serif">
                      <a href="${tvLink}" style="color:#005fae; text-decoration:none;" target="_blank">Be sure to test your setup here <em><span style="font-size:10pt;'">BEFORE</span></em> the Webinar to ensure everything is working properly!</a></p></td>
                    </tr>
                  </tbody>
                </table>
                  <table cellpadding="0" cellspacing="0" border="0" align="left" style="padding-top:12px;">
                    <tbody>
                      <tr>
                        <td><div style="font-size:11px; font-family:Arial, Helvetica, sans-serif; color:#666666;"><span style="font-size:16px;">Webinar Hardware/Software Requirements</span><br />
                          CDEWorld requires Internet Explorer<sup>®</sup> version 7.0 or higher, or Firefox 3.0 or higher, a computer running Windows<sup>®</sup> XP, Windows<sup>®</sup> Vista, Windows<sup>®</sup> 7, or Mac OS X, 512MB of RAM or greater, 1.5 GHZ or faster processor, and a screen resolution of 1024x768 or higher. This activity will be marked with the information and/or links to the required software. That software may be <a href="http://www.elabs10.com/c.html?rtr=on&amp;s=x8pagq,racs,4878,dqdc,3h2l,fdfx,lduw&amp;MLM_MID=1273132&amp;MLM_UNIQUEID=af1cdf3968" target="_blank" style="text-decoration:none; font-size:11px; font-family:Arial, Helvetica, sans-serif; color:#005fae;">Adobe<sup>®</sup> Acrobat<sup>®</sup></a>, <a href="http://www.elabs10.com/c.html?rtr=on&amp;s=x8pagq,racs,4878,g69i,kpb9,fdfx,lduw&amp;MLM_MID=1273132&amp;MLM_UNIQUEID=af1cdf3968" target="_blank" style="text-decoration:none; font-size:11px; font-family:Arial, Helvetica, sans-serif; color:#005fae;">Windows Media<sup>®</sup>Player</a> or <a href="http://www.elabs10.com/c.html?rtr=on&amp;s=x8pagq,racs,4878,41l,5cn7,fdfx,lduw&amp;MLM_MID=1273132&amp;MLM_UNIQUEID=af1cdf3968" target="_blank" style="text-decoration:none; font-size:11px; line-height:16px; font-family:Arial, Helvetica, sans-serif; color:#005fae;">Microsoft<sup>®</sup> Silverlight™</a>.</div></td>
                      </tr>
                    </tbody>
                  </table></td>
              </tr>`
            }

            let end =`
            <tr>
              <!-- Fine Print Footer -->
              <td colspan="2" align="center"><img src="http://cdeworld.com/media/3742" width="575" height="76" style="margin-top:20px; padding-top:20px; padding-bottom:10px; border-top:1px solid #dedede;" /></td>
              <!-- /Fine Print Footer -->
            </tr>
            <tr>
              <td colspan="2" height="10"></td>
            </tr>
            <!--<tr>
                <td colspan="2" align="center" style="padding:12px 0;">
                    <span style="font-size:11px; text-decoration:none; color:#526687;">
                        %%PLUGIN_UNSUBSCRIBE: 1147025-CDEWorld Unsubscribe%%
                    </span>
                </td>
            </tr>-->
          </table>    <a href="http://aegispublications.com/news/cdeworld/2017/06/UCCI-8-Reminder.html" target="_blank" style="text-decoration:none; color:#005fae;"></a></td>
        </tr>
        </table>
        <table width="600" align="center" cellspacing="0" cellpadding="0" border="0" style="font-family:'Helvetica', 'Arial', sans-serif;">
          <tr>
              <td colspan="2" align="center" style="font-size:10px; color:#444444; padding:11px 0 11px 0;">
                <!--<div style="padding-bottom:7px;">
                    Dental Learning Systems
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    P.O. Box 510
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    Newtown, PA 18940
                </div>-->
                <div style="padding-bottom:7px;">
                  © 2017 CDEWorld. All rights reserved.<br /> PO Box 510, Newtown, PA 18940<br />
        <a href="mailto:?subject=CDEWorld Webinar&amp;body=I thought you might be interested in this: http://aegispublications.com/news/cdeworld/2017/08/pds-3-rem.html" target="_blank" style="text-decoration:none; color:#526687;">
                        Forward to a Colleague
                    </a> &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="http://www.dentalaegis.com/privacy-policy/" target="_blank" style="text-decoration:none; color:#526687;">
                        Privacy Policy
                    </a><br />%%PLUGIN_UNSUBSCRIBE: 1680329-UNSUBSCRIBE%%
                </div>
                
              </td>
            </tr>
          </table>
        
          <map name="Map" id="Map">
            <area shape="rect" coords="57,2,85,24" href="mailto:?subject=Free CE Webinar &amp;body=I thought you might be interested in this: http://aegispublications.com/news/cdeworld/2017/10/pelton-3-rem.html" target="_blank" alt="mailto" />
            <area shape="rect" coords="27,4,48,23" href="http://twitter.com/home?status=Free CE Webinar +http://cdeworld.coronapro.com/live/2017-08-22/pds3" target="_blank" alt="twitter" />
            <area shape="rect" coords="5,3,21,24" href="http://aegispublications.com/news/cdeworld/2017/10/pelton-3-rem.html&title=Free%20CE%20Webinar!"  target="_blank" alt="fb" />
        </map>
        
        
        </body></html>`
            
        let html;
        html = start + tv + end;    
        //Sanitize data to avoid XSS attack
        let sanitizedHtml = DOMPurify.sanitize(html); 
        let textEmail = `Inside Dentistry Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\nCommercial Supporter: ${supporter}\nDescription:\n${description}\n\n${link}`;

        return(
          <div >
            <div className="content" dangerouslySetInnerHTML={{__html: sanitizedHtml}}></div><br />
            Generated HTML Code to Copy:< br />
            <textarea value={html} readOnly={true} className="copyArea" /><br />
            <br />
            TEXT EMAIL:< br />
            <textarea value={textEmail} readOnly={true} className="copyArea"/>
          </div>
        );
    }
}