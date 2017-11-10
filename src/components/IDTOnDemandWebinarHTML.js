import React from 'react';
import DOMPurify from 'dompurify';


export default class IDTOnDemandWebinarHTML extends React.Component {
    render() {
        const { title, date, provider, supporter, cost, credits, description, lo1, lo2, lo3, presenter, link, tvLink, unsubscribe } = this.props.info[this.props.info.selected_template];
        let html;

        let start = `<!doctype html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>IDT Webinars</title>
        </head>
        
        <body style="background-color:#EBEBEB">
        <center>
        <table width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff;">
          <tbody>
            <tr>
              <td colspan="2" align="center" style="border-top:solid 1px #000000; border-bottom:solid 1px #000000;">
                  <div style="font-family:Arial, sans-serif; font-size:11px; color:#000000;">
                      Having trouble viewing this email? <a href="http://aegispublications.com/news/idt/2017/11/Planmeca-1-On-Demand.html" target="_blank" style="color:#db1f28; text-decoration:none; line-height:18px;">Click here.</a>
                </div>
              </td>
            </tr>
            <tr>
              <td valign="top"><img src="http://aegispublications.com/news/idt/2015/05/webinar-side.jpg" width="193" height="652" alt=""  style="border-top:#000000 solid 1px;"/></td>
              <td valign="top">
              <a href="https://cdeworld.com/webinars/20852-The_Collaboration_Between_the_Dentist_and_Laboratory_in_the_Digital_Age"><img src="http://aegispublications.com/news/idt/2016/11/idt-ondemand.jpg" width="407" height="156" alt=""/></a>
                <table width="394" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td width="424" valign="top" style="font-family:Arial, sans-serif; font-size:12px; color:#424b52; text-align:left; padding:14px 14px 14px 14px; ">
                      
        
        <span style="font-family:Arial, sans-serif; font-size:18px; color:#424b52; text-align:left; line-height:auto; font-weight:bold;">The Collaboration Between the Dentist and Laboratory in the Digital Age</span>
        <br>
        <strong><br>
        Presenter</strong>: Gary Kaye, DDS<br>
        <strong>Provider: </strong> AEGIS Publications, LLC<br>
        <strong>Commercial Supporter: </strong>: Planmeca - <em>E4D Technologies</em><br>
        <strong>CE Credits: </strong> 1 Self Study<br>
        <strong>Cost: </strong> $0.00<br>
        <strong>Available Dates: </strong>: Nov 9th, 2017 - Nov 30th, 2020<br>
        <br>
        <strong>Description:</strong><br />
        The presentation will detail the digital restorative workflow and highlight clinical cases that demonstrate how the dentist and laboratory are collaborating today to provide improved patient care.<br /><br />
        <strong>Leaning Objectives:</strong><br />
        <ul style="margin: 0px; padding: 0px 0px 0px 15px">
        	<li>Review all the elements within the digital workflow.</li>
        	<li>Discuss the capabilities of digital instrumentation and design software.</li>
        	<li>Describe the materials utilized within the digital restorative workflow.</li>
        </ul>
        <br />
        <strong>Disclosure: </strong><br />
        Dr. Kaye has received an honorarium for his preparation and presentation of this program.
        
        <a href="https://cdeworld.com/webinars/20852-The_Collaboration_Between_the_Dentist_and_Laboratory_in_the_Digital_Age" target="_blank" style="text-transform:uppercase; font-family:Gotham, sans-serif;  font-size:16px; background:#bf2a26; padding:10px 11px;color:#ffffff; border-radius:10px; font-weight:bold; display:block; width:193px; text-align:center;margin-bottom:18px; margin:14px 0 14px 0; text-decoration:none;">VIEW THE WEBINAR</a>
            </td>
                      </tr>
                    <tr>
                      <td valign="top" style="font-family:Arial, sans-serif; font-size:12px; color:#424b52; text-align:left; padding:14px 14px 14px 14px; "><img src="http://aegispublications.com/news/idt/2015/05/nbc.jpg" width="187" height="58" alt=""/></td>
                    </tr>
                    </tbody>
                </table>        </td>
            </tr>
            
        
            
        
            <!--<tr>
        
                <td colspan="2">
        
                    <hr size="1" color="#dedede" width="575" />
        
                </td>
        
            </tr>-->
        
        
            <tr>
              <td colspan="2" align="center" valign="top" 
                 style="font-family:Arial, sans-serif; font-size:10px; color:#424b52; text-align:center; padding:14px 14px 14px 14px; border-top:solid 1px #000000; border-bottom:solid 1px #000000;"> 
                                            Inside Dental Technology | 104 Pheasant Run, Suite 105 | Newtown, PA 18940<br>
                  %%PLUGIN_UNSUBSCRIBE: 2146841-UNSUBSCRIBE%%
                </td>
            </tr>
          </tbody>
        </table>
        </center>
        </body></html>`;

        html = start;
        //Sanitize data to avoid XSS attack
        let sanitizedHtml = DOMPurify.sanitize(html);
        let textEmail = `IDT On-Demand Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\nCommercial Supporter: ${supporter}\nDescription:\n${description}\n\n${link}`;

        return (
            <div >
                <div className="content" dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div><br />
                Generated HTML Code to Copy:< br />
                <textarea value={html} readOnly={true} className="copyArea" /><br />
                <br />
                TEXT EMAIL:< br />
                <textarea value={textEmail} readOnly={true} className="copyArea" />
            </div>
        );
    }
}