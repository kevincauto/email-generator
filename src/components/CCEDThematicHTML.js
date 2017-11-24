import React from 'react';
import DOMPurify from 'dompurify';
import {saveAs} from 'file-saver';


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
       
        let {month, year} = this.props.info;
    
         //Take the Lyris Name and make a url slug out of it.
        // let slug = lyrisName.toString()
        //     .replace(/\s+/g, '-')           // Replace spaces with -
        //     .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        //     .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        //     .replace(/^-+/, '')             // Trim - from start of text
        //     .replace(/-+$/, '');            // Trim - from end of text
    
        // let url = `http://aegispublications.com/news/cced/${year}/${month}/${slug}.html`;
        

        let html = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <!--[if !mso]><!-->		<meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <!--<![endif]-->		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title></title>
                <style type="text/css">
        body {
            margin: 0 !important;
            padding: 0;
            background-color: #ffffff;
            font-family: "Times New Roman", Times, serif;
        }
        
        table {
            border-spacing: 0;
            font-family: sans-serif;
            color: #333333;
        }
        
        td {
            padding: 0;
        }
        
        img {
            border: 0;
        }
        
        div[style*="margin: 16px 0"] { 
            margin:0 !important;
        }
        
        .wrapper {
            width: 100%;
            table-layout: fixed;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        .webkit {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .outer {
        Margin: 0 auto;
            width: 100%;
            max-width: 600px;
        }
        
        .full-width-image img {
            width: 100%;
            max-width: 600px;
            height: auto;
        }
        
        .inner {
        padding: 10px;
        }
        
        p {
            Margin: 0;
           font-family: "Times New Roman", Times, serif;
        }
        
        a {
            color: #ee6a56;
            text-decoration: underline;
        }
        
        .h1 {
            font-size: 21px;
            font-weight: bold;
            Margin-bottom: 18px;
        }
        
        .h2 {
            font-size: 18px;
            font-weight: bold;
            Margin-bottom: 12px;
        }
        
        .one-column .contents {
            text-align: left;
        }
        
        .one-column p {
            font-size: 14px;
            Margin-bottom: 10px;
        }
        
        .two-column {
            text-align: center;
            font-size: 0;
        }
        
        .two-column .column {
            width: 100%;
            max-width: 300px;
            display: inline-block;
            vertical-align: top;
        }
        
        .two-column .contents {
        font-size: 14px;
            text-align: left;
        }
        
        .two-column img {
            width: 100%;
            max-width: 280px;
            height: auto;
        }
        
        .two-column .text {
            padding-top: 10px;
        }
        
        .three-column {
            /*text-align: center;*/
            font-size: 0;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        
        .three-column .column {
            width: 100%;
            max-width: 200px;
            display: inline-block;
            vertical-align: top;
        }
        
        .three-column .contents {
            font-size: 14px;
            /*text-align: center;*/
        }
        
        .three-column img {
            width: 100%;
            max-width: 180px;
            height: auto;
        }
        
        .three-column .text {
            padding-top: 10px;
        }
        
        .four-column {
            text-align: center;
            font-size: 0;
        }
        
        .four-column .column {
            width: 100%;
            max-width: 150px;
            display: inline-block;
            vertical-align: top;
        }
        
        .four-column .contents {
            font-size: 14px;
            text-align: center;
        }
        
        .four-column img {
            width: 100%;
            max-width: 130px;
            height: auto;
        }
        
        .four-column .text {
            padding-top: 10px;
        }
        
        
        .left-sidebar {
        text-align: center;
            font-size: 0;
        }
        
        .left-sidebar .column {
            width: 100%;
            display: inline-block;
            vertical-align: middle;
        }
        
        .left-sidebar .left {
            max-width: 100px;
        }
        
        .left-sidebar .right {
            max-width: 500px;
        }
        
        .left-sidebar .img {
            width: 100%;
            max-width: 80px;
            height: auto;
        }
        
        .left-sidebar .contents {
        font-size: 14px;
            text-align: center;
        }
        
        .left-sidebar a {
            color: #85ab70;
        }
        
        .right-sidebar {
        text-align: center;
            font-size: 0;
        }
        
        .right-sidebar .column {
            width: 100%;
            display: inline-block;
            vertical-align: middle;
        }
        
        .right-sidebar .left {
            max-width: 100px;
        }
        
        .right-sidebar .right {
            max-width: 500px;
        }
        
        .right-sidebar .img {
            width: 100%;
            max-width: 80px;
            height: auto;
        }
        
        .right-sidebar .contents {
            font-size: 14px;
            text-align: center;
        }
        
        .right-sidebar a {
            color: #70bbd9;
        }
        
        @media screen and (max-width: 500px) {
        .two-column .column,
            .three-column .column {
                max-width: 100% !important;
            }
        
        /*    .two-column img {
                max-width: 100% !important;
            }*/
        
            .two-column .text{
                max-width: 80% !important;
                }
        
            .three-column img {
                max-width: 50% !important;
            }
        
        }
        
        @media screen and (min-width: 501px) and (max-width: 620px) {
        .three-column .column {
                max-width: 33% !important;
            }
        
            .two-column .column {
                max-width: 50% !important;
            }
        }
        
        
        
        .right-sidebar {
        text-align: center;
            font-size: 0;
        }
        
        .right-sidebar .column {
            width: 100%;
            display: inline-block;
            vertical-align: middle;
        }
        
        .right-sidebar .left {
            max-width: 100px;
        }
        
        .right-sidebar .right {
            max-width: 500px;
        }
        
        .right-sidebar .img {
            width: 100%;
            max-width: 80px;
            height: auto;
        }
        
        .right-sidebar .contents {
            font-size: 14px;
            text-align: center;
        }
        
        .right-sidebar a {
            color: #70bbd9;
        }		</style>
        <!--[if (gte mso 9)|(IE)]>
        
            <style type="text/css">
        
                table {border-collapse: collapse !important !important !important;}
        
            </style>
        
            <![endif]-->	
        </head>
        
            <body style="margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;background-color:#ffffff;font-family:'Times New Roman', Times, serif;">
        <!-- g link -->		<center class="wrapper" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
                    <div class="webkit" style="max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;">
        <!--[if (gte mso 9)|(IE)]>
        
                    <table width="600" align="center" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
        
                    <tr>
        
                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
        
                    <![endif]-->				<table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
                            <tbody>
                                <tr>
                                    <td style="padding-top:0px;padding-bottom:;padding-right:0;padding-left:0;">
                                        <div style="text-align:center;font-family:'Times New Roman', Times, serif; font-size:12px; margin:5px 0px;">
                                            Having Trouble Viewing This Email? <a href="https://www.dentalaegis.com/cced/2017/11/newsletter/bioactivity" style="color:#000;" target="_blank">Click Here</a></div>
                                        <table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
                                            <tbody>
                                                <tr>
                                                    <td class="full-width-image" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                                        <a href="https://www.pulpdent.com/activa-bioactive-hands-on-demo-by-dr-john-comisi-at-gnydm-2017/" style="color:#ee6a56;text-decoration:underline;" target="_blank"> <img alt="" src="https://www.dentalaegis.com/media/64582/" style="border-width:0;width:100%;max-width:600px;height:auto;" /> </a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                
                            <tr>
                                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                        <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="inner contents" style="padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:0px;text-align:left;">
                                                        <div bgcolor="#eeede9" style="background-color:#eeede9; background-image:url(https://www.dentalaegis.com/media/59254/); background-repeat:repeat-x; font-family:Arial, san-serif; padding: 0px 10px 10px; margin: 0px 0px 0px; font-size: 13px; text-align: left; font-weight: 300; letter-spacing: .8; display:block;
        
        overflow:auto;">
                                                            <div style="font-family:'Times New Roman', Times, serif;font-size:28px;font-weight:lighter; color:#444; padding:10px 10px;">
                                                                Bioactivity eNews</div>
                                                            <center>
                                                                <img src="https://www.dentalaegis.com/img/layout/general/cced-logo-large.png" style="width:70%" /></center>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr bgcolor="#eeede9">
                                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                        <table style="border-spacing:0;color:#333333; " width="100%">
                                            <tbody>
                                                <tr>
                                                    <td align="center" class="inner contents" colspan="3" style="padding-top:10px;padding-bottom:10px;padding-right:0px;padding-left:0px;text-align:center;font-family:'Times New Roman', serif; font-size:11px; color:#000000; padding:2px 0 7px 0; vertical-align:middle;" valign="top">
                                                        <table width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="float:left;">
                                                                        <a href="mailto:?subject=Forward: Compendium Bioactivity&body=I thought you might be interested in this: https://www.dentalaegis.com/cced/2017/11/newsletter/bioactivity?refer=true" style="text-decoration:none; color:#000000; padding-left:10px; font-family:'Times New Roman', serif; font-size:11px;">▶ Forward to a Colleague</a> <a href="http://www.dentalaegis.com/cced/subscribe/thematic?111417a" style="text-decoration:none; color:#000000;padding-left:10px; font-family:'Times New Roman', serif; font-size:11px;" target="_blank">▶ Subscribe</a></td>
                                                                    <td style="float:right; vertical-align:center;">
                                                                        <a href="https://www.facebook.com/CompendiumDentistry" style="padding: 0px; margin: 0px" target="_blank"><img src="https://www.dentalaegis.com/media/59236/" style="padding: 0px; margin: 0px; vertical-align:central;" /></a> <a href="https://twitter.com/compendiumced" style="padding: 0px; margin: 0px" target="_blank"><img src="https://www.dentalaegis.com/media/59237/" style="padding: 0px 10px 0px 0px; margin: 0px" /></a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                        <table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
                                            <tbody>
                                                <tr>
                                                    <td align="center" class="full-width-image" style="padding-top:0px;padding-bottom:0;padding-right:0;padding-left:0;">
                                                        <a href="#" style="color:#ee6a56;text-decoration:underline;" target="_blank"> </a>
                                                        <center>
                                                            <img alt="" src="https://www.dentalaegis.com/media/64522/" style="border-width:0;width:100%;max-width:598px;height:auto; border:solid 1px #ddd;" /></center>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                        <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:left;">
                                                        <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:14px;Margin-bottom:0px;">
                                                            Welcome to the Bioactivity newsletter, featuring continuing education opportunities and other clinical material from the pages of <em>Compendium</em>.</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                
        
      
                                <tr>
                                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                                        <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="inner contents" style="padding-top:0px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:left;">
                                                        <center>
                                                            <div style="font-family:Gotham, sans-serif; display:block; padding:0 10px 0 10px; margin:0; font-size:10px; color:#000; text-decoration:none;">
                                                                <em>Compendium</em> | 104 Pheasant Run, Suite 105 | Newtown, PA 18940</div>
                                                            <small style="font-family:Gotham, sans-serif; display:block; padding:0 10px 0 10px; margin:0; font-size:10px; color:#000; text-decoration:none;">To ensure delivery, please add reply-207851@news.aegispublications.com to your address book</small> <small style="font-family:Gotham, sans-serif; display:block; padding:0 10px 0 10px; margin:0; font-size:10px; color:#000; text-decoration:none;">%%PLUGIN_UNSUBSCRIBE: 1089099-CCED UNSUBSCRIBE%%</small></center>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
        <!--[if (gte mso 9)|(IE)]>
        
                    </td>
        
                    </tr>
        
                    </table>
        
                    <![endif]-->			</div>
                </center>
            </body>
        </html>
        
        
        
        
        `;

   
        //Sanitize data to avoid XSS attack
        let cleanHtml = DOMPurify.sanitize(html);
        // let textEmail = `IDT On-Demand Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\nCommercial Supporter: ${supporter}\nDescription:\n${description}\n\n${link}`;
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