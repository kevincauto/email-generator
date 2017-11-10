import React from 'react';
import DOMPurify from 'dompurify';


export default class IDLiveWebinarHTML extends React.Component {
    render(){
        const {title, date, provider, supporter, cost, credits, description, lo1, lo2, lo3, presenter, link, headshot, tvLink, unsubscribe, disclosure} = this.props.info[this.props.info.selected_template]
        let html 
        
        let start = `<!doctype html>
        <html>
        <head>
            <title></title>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <meta content="width=device-width" name="viewport" />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <style type="text/css">
              #outlook a {
              padding: 0;
              }
              .ReadMsgBody {
              width: 100%;
              }
              .ExternalClass {
              width: 100%;
              }
              .ExternalClass, .ExternalClass span, .ExternalClass td, .ExternalClass div {
              line-height: 100%;
              }
              body, table, td, a {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              }
              table, td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              }
              img {
              -ms-interpolation-mode: bicubic;
              }
              body {
              height: 100% !important;
              margin: 0;
              padding: 0;
              width: 100% !important;
              }
              img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
              }
              /* LINK STYLES */
              .white a, .white a:link, .white a:active, .white a:visited {
              color: #FFFFFF !important;
              text-decoration: underline !important;
              }
              .white1 a, .white1 a:link, .white1 a:active, .white1 a:visited {
              color: #FFFFFF !important;
              text-decoration: none !important;
              }
              .maroon a, .maroon a:link, .maroon a:active, .maroon a:visited {
              color: #9d0707 !important;
              text-decoration: none !important;
              }
              .black a, .black a:link, .black a:active, .black a:visited {
              color: #000000 !important;
              text-decoration: none !important;
              }
              .grey a, .grey a:link, .grey a:active, .grey a:visited {
              color: #333333 !important;
              text-decoration: none !important;
              }
              .link-hover:hover {
              text-decoration: none !important;
              }
              @media screen and (max-width: 600px), screen and (max-device-width: 600px) {
              body {
              width: 100% !important;
              height: auto !important;
              }
              table.w600 {
              width: 100% !important;
              height: auto !important;
              min-width: 100% !important;
              }
              table.w100, td.w100, img.w100 {
              width: 100% !important;
              height: auto !important;
              }
              .hide {
              display: none !important;
              }
              .menu {
              padding: 3px !important;
              font-size: 8px !important;
              line-height: 11px !important;
              }
              .f12 {
              font-size: 8px !important;
              line-height: 11px !important;
              }
              }		
            </style>
            <!--[if gte mso 9]>
            <![endif]-->	
          </head>
        
          <body bgcolor="#FFFFFF">
            <!--g link -->		
            <a href="https://www.dentalaegis.com/id/" style="color:#ffffff; text-decoration:underline;" target="_blank"></a>
            <!--THIS WRAPS THE WHOLE PAGE -->
            <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tbody>
                <tr>
                  <td align="center">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tbody>
                      <tr>
                          <!--THIS IS THE 1 PX BORDER ON THE LEFT -->
                          <td bgcolor="#000000" width="1">
                          </td>
                          <!--END THE 1 PX BORDER ON THE LEFT -->
                          <td align="center">
                            <!-- ***THIS 600 PX MAIN CONTENT AREA -->
                          <table border="0" cellpadding="0" cellspacing="0" class="w600" style="min-width:600px;" width="600">
                           <tbody>
                           
                           
                               <!--TOP BORDER + MASTHEAD AD -->
                               <tr>
                                 <td align="center" style="border-top:1px solid #000000;">
                                 <a href="#" target="_blank"> <img alt="" border="0" class="w100" src="http://placehold.it/600x80" style="display:block; margin:0px; max-width:600px;" width="600" /> </a>
                                 
                                 </td>
                               </tr>
                               <!--END TOP BORDER + MASTHEAD AD --> 
                           
                           
                               <!--VIEW IN BROWSER SECTION -->
                               <tr>
                                 <td align="center" bgcolor="#000000" height="16" style="font-family:Arial, Helvetica, sans-serif; font-size:9px; line-height:10px; color:#efefef; text-transform:uppercase;">
                                        Having trouble viewing this email? <span class="white"><a href="https://www.dentalaegis.com/id/2017/10/newsletter" style="color:#ffffff; text-decoration:underline;" target="_blank">Click here.</a></span>
                                  </td>
                                </tr>
                                <!--END VIEW IN BROWSER SECTION -->
                           
                                   <!--ID LOGO -->
                                <tr>
                                  <td align="center" style="padding-top:10px;">
                                    <img alt="" border="0" src="https://www.dentalaegis.com/media/60097/" style="display:block; margin:0px; max-width:211px;" width="211" /> 
                                  </td>
                                </tr>
                                <!--END ID LOGO -->

                                <!--ISSUE SPECIFIC DATA -->
                                <tr>
                                  <td align="center" style="padding:10px; border-bottom:1px dotted #333333; font-family:Georgia, 'Times New Roman', Times, serif; font-size:14px; color:#000000; padding:2px 0 7px 0; font-weight:bold;" valign="top">
                                    <a href="https://www.dentalaegis.com/id/2017/10/" style="text-decoration:none; color:#000000;" target="_blank">October 2017 <span style="color:#000000;">|</span> Vol. 13, No. 10</a> | <a href="https://www.dentalaegis.com/id" style="color:#9d0707; text-decoration:none;" target="_blank">insidedentistry.net</a><a href="https://www.dentalaegis.com/id/2017/10/digital" style="color:#9d0707; text-decoration:none;" target="_blank"> <span style="color:#000000;">|</span> Digital Edition</a>
                                  </td>
                                </tr>
                                <!--END ISSUE SPECIFIC DATA -->
                                
                                <!--NAVIGATION -->
                                <tr>
                                  <td align="center" bgcolor="#9d0707" style="background-color:#9d0707;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                      <tbody>
                                        <tr>
                                          <td align="center" class="menu" style="color:#ffffff; font-size:14px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:3px 8px;">
                                            <span class="white1"><a href="https://id.cdeworld.com/" style=" text-decoration:none; color:#ffffff;" target="_blank">CE</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://www.dentalaegis.com/news" style=" text-decoration:none; color:#ffffff" target="_blank">News</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.dentalaegis.com/id/2017/10/" style="text-decoration:none; color:#ffffff" target="_blank">Articles</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.dentalaegis.com/id/archive" style=" text-decoration:none; color:#ffffff" target="_blank">Archive</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a href="https://www.dentalaegis.com/id/products" style=" text-decoration:none; color:#ffffff" target="_blank">Products</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://www.dentalaegis.com/id/subscribe/thematic?109017b" style=" text-decoration:none; color:#ffffff" target="_blank">Subscribe</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.dentalaegis.com/id/ebooks" style=" text-decoration:none; color:#ffffff" target="_blank">eBooks</a></span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <!-- END NAVIGATION -->
                                
                                
                                <!-- GRAY FORWARD TO A COLLEAGUE BAR--> 
                                <tr>
                                  <td align="right" bgcolor="#aaaaaa" style="border-bottom:1px solid #cccccc; border-top:1px solid #cccccc;background-color:#aaaaaa;">
                                    <table border="0" cellpadding="0" cellspacing="0">
                                      <tbody>
                                        <tr>
                                          <td align="right" height="20" style="padding-right:5px;" width="22">
                                            <img src="https://www.dentalaegis.com/media/59113/" style="vertical-align:bottom;" width="22" />
                                          </td>
                                          <td align="right" height="20" style="font-family:'Times New Roman', Times, serif; font-size:12px; text-transform:uppercase; padding-right:10px;">
                                            <a href="mailto:?subject=Forward: Inside Dentistry &amp;body=I%20thought%20you%20might%20be%20interested%20in%20this: https://www.dentalaegis.com/id/2017/10/newsletter?refer=true" style="text-decoration:none;color:#fff;" target="_blank">Forward to a Colleague</a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <!-- END GRAY FORWARD TO A COLLEAGUE BAR--> 
        
        
                                 <!-- START OF MAIN CONTENT WITH 20PX GUTTERS -->
                                <tr>
                                  <td align="center">
                                   <!-- THIS TABLE CONTAINS GUTTERS WITH MAIN CONTENT SANDWICHED IN BETWEEN AND SETS UP  DOTTED BOTTOM BOARDER -->
                                    <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px dotted #333333;" width="100%">
                                      <tbody>
                                        <tr>
                                        
                                          <!--LEFT 20PX GUTTER-->
                                          <td width="20">&nbsp;
                                          </td>
                                          <!--END LEFT 20PX GUTTER-->
                                          
                                          
                                          <!--MAIN CONTENT ABOUT 560 FULL WIDTH -->
                                          <td align="center">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                              <tbody>
                                              
                                              <!--This is where the magic happens-->
                                              <!--table rows-->
                                              
                                              </tbody>
                                            </table>
                                          </td>
                                          
                                          
                                           <!--RIGHT 20PX GUTTER-->
                                          <td width="20">&nbsp;
                                          </td>
                                          <!--END RIGHT 20PX GUTTER-->
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!-- END TABLE CONTAINS GUTTERS WITH MAIN CONTENT SANDWICHED IN BETWEEN AND SETS UP  DOTTED BOTTOM BOARDER -->
                                  </td>
                                </tr>
                                <!-- END OF MAIN CONTENT WITH 20PX GUTTERS -->
                                
                                
                                <!--CONNECT TAGLINE-->
                                <tr>
                                  <td align="center" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:20px; color:#9d0707; text-transform:uppercase; font-weight:bold; padding:15px 5px 7px;">
                                    <span style="text-decoration:none; color:#9d0707" target="_blank">CONNECT WITH <em>INSIDE DENTISTRY</em></span>
                                  </td>
                                </tr>
                                <!--END CONNECT TAGLINE-->
                                
                                
                                <!--SOCIAL BUTTONS-->
                                <tr>
                                  <td align="center" style="padding-bottom:10px; border-bottom:1px dotted #333333;">
                                    <table border="0" cellpadding="0" cellspacing="0">
                                      <tbody>
                                        <tr>
                                          <td align="center">
                                            <a href="https://www.facebook.com/InsideDentistry" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/60077/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
                                          </td>
                                          <td width="25">&nbsp;
                                          </td>
                                          <td align="center">
                                            <a href="https://twitter.com/insidedentistry" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/60078/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
                                          </td>
                                          <td width="25">&nbsp;
                                          </td>
                                          <td align="center">
                                            <a href="mailto:?subject=Forward:%20Inside Dentistry%20&amp;body=I%20thought%20you%20might%20be%20interested%20in%20this: https://www.dentalaegis.com/id/2017/10/newsletter?refer=true" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/60079/" style="display:block; margin:0px; max-width:32px;" width="30" /> </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <!--END SOCIAL BUTTONS-->
                                
                                
                                <!--FOOTER AND UNSUBSCRIBE-->
                                <tr>
                                  <td align="center" style="font-family:'Times New Roman', Times, serif; font-size:12px;  color:#000000; padding-top:0px; border-bottom:1px solid #000000;"><br /><span><em>Inside Dentistry</em> | 104 Pheasant Run, Suite 105 | Newtown, PA 18940</span><br />
                                    <span>To ensure delivery, please add <a href="mailto:reply-207851@news.aegispublications.com" style="color:#000000; text-decoration:none;" target="_blank">reply-207851@news.aegispublications.com</a></span><span> to your address book<br />
                                    ${unsubscribe} </span><br /><br />
                                  </td>
                                </tr>
                                <!--END FOOTER AND UNSUBSCRIBE-->
                                
                                
                           </tbody>
                          </table>
                          <!-- ***END 600PX CONTENT AREA-->
                          </td>
                          <!-- 1 PX BORDER ON RIGHT -->
                          <td bgcolor="#000000" width="1"></td>
                          <!-- END 1 PX BORDER ON RIGHT -->
                        </tr>
                        <!--END GIANT ROW CONTAINS LEFT BORDER, MAIN, AND RIGHT BORDER -->
                      </tbody>
                    </table>
                    <!--END TABLE THAT CONTAINS LEFT BORDER, MAIN, AND RIGHT (NON- SPECIFIED, BUT 602 WIDTH?) --> 
                  </td>
                </tr>
              </tbody>
            </table>
            <!--END OF THE PAGE WRAP -->
          </body>
        </html>
        `;

        html = start;    
        //Sanitize data to avoid XSS attack
        let sanitizedHtml = DOMPurify.sanitize(html); 
        let textEmail = `Inside Dentistry Webinar\n${title}\n${link}\n\nPresenter: ${presenter}\n${date}\nCommercial Supporter: ${supporter}\nCost: ${cost}\nCredits: ${credits}\nDescription:\n${description}\n\n${link}`;

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