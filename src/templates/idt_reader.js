import _ from 'lodash';

//Auto detect the month and year.  
let d = new Date();
let currentMonth = d.getMonth() + 1;
if (currentMonth < 10) { currentMonth = '0' + '' + currentMonth }
currentMonth = currentMonth.toString();
let currentYear = d.getFullYear().toString();


export const idt_reader_forms = {
    beginning: {
        typeOfRow: 'beginning',
        header: 'Beginning Section',
        closable: false,
        switchable: false,
        addable: true,
        draggable: false,
        fields: [
            { label: 'Email Name', name: 'emailName' },
            {
                label: 'Month', name: 'month', value: currentMonth,
                dropdown: [
                    { value: '01', text: 'Send Month: January' },
                    { value: '02', text: 'Send Month: February' },
                    { value: '03', text: 'Send Month: March' },
                    { value: '04', text: 'Send Month: April' },
                    { value: '05', text: 'Send Month: May' },
                    { value: '06', text: 'Send Month: June' },
                    { value: '07', text: 'Send Month: July' },
                    { value: '08', text: 'Send Month: August' },
                    { value: '09', text: 'Send Month: September' },
                    { value: '10', text: 'Send Month: October' },
                    { value: '11', text: 'Send Month: November' },
                    { value: '12', text: 'Send Month: December' },
                ]
            },
            {
                label: 'Year', name: 'year', value: currentYear,
                dropdown: [

                    { value: '2018', text: 'Send Year: 2018' },
                    { value: '2019', text: 'Send Year: 2019' },
                    { value: '2020', text: 'Send Year: 2020' },
                    { value: '2021', text: 'Send Year: 2021' },
                    { value: '2022', text: 'Send Year: 2022' }
                ]
            },
            { label: 'Masthead Link', name: 'mastheadLink' },
            { label: 'Masthead Image Source Link', name: 'mastheadSrc', value: 'http://placehold.it/600x80' },
            { label: 'Volume Number', name: 'volume' },
            { label: 'Issue Number', name: 'issue' },
            { label: 'Header', name: 'header', value: 'Cover Story' },
            { label: 'Title', name: 'title' },
            { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  ' },
            { label: 'Author', name: 'author', value: 'Lorem Ipsum, DDS' },
            { label: 'Link', name: 'link' },
            { label: 'Cover Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x220' }
        ]
    },
    article: {
        typeOfRow: 'article',
        header: 'Article',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header', value: 'Header' },
            { label: 'Title', name: 'title' },
            { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos. ' },
            { label: 'Author', name: 'author', value: 'Lorem Ipsum, DDS' },
            { label: 'Article link', name: 'link' },
            { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x150' },
            { label: 'Image Link (Same? or Button Ad?)', name: 'imgLink' }
        ]
    },
    center_banner: {
        typeOfRow: 'center_banner',
        header: "Center Banner Ad",
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Link', name: 'link' },
            { label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/600x70' },
        ]
    },
    live_webinar: {
        typeOfRow: 'live_webinar',
        header: 'Live Webinar Section',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header', value: 'Live Webinar' },
            { label: 'Title', name: 'title' },
            { label: 'Author', name: 'author' },
            { label: 'Date', name: 'date' },
            { label: 'Credit', name: 'credit' },
            { label: 'Cost', name: 'cost' },
            { label: 'Provider', name: 'provider' },
            { label: 'Supporter', name: 'supporter' },
            { label: 'Link', name: 'link' },
            { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x150' },
        ]
    },
    on_demand_webinar: {
        typeOfRow: 'on_demand_webinar',
        header: 'On Demand Webinar Section',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header', value: 'On-Demand Webinar' },
            { label: 'Title', name: 'title' },
            { label: 'Author', name: 'author' },
            { label: 'Dates', name: 'dates' },
            { label: 'Credit', name: 'credit' },
            { label: 'Cost', name: 'cost' },
            { label: 'Provider', name: 'provider' },
            { label: 'Supporter', name: 'supporter' },
            { label: 'Link', name: 'link' },
            { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x150' },
        ]
    },
    featured: {
        typeOfRow: 'featured',
        header: 'Featured Gray Box Article',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header', value: 'Featured Header' },
            { label: 'Title', name: 'title' },
            { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  ' },
            { label: 'Author', name: 'author', value: 'Lorem Ipsum, DDS' },
            { label: 'Link', name: 'link' },
            { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x150' },
            { label: 'Image Link', name: 'imgLink' }
        ]
    },
    end: {
        typeOfRow: 'end',
        header: 'End of the Email',
        closable: false,
        switchable: false,
        addable: false,
        draggable: false,
        fields: [
            { label: 'header', name: 'header', value: 'Coming Next Month' },
            { label: 'title', name: 'title' },
            { label: 'description', name: 'description', value: 'Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  ' },
            {
                label: 'Month', name: 'month', value: currentMonth,
                dropdown: [
                    { value: '01', text: 'Send Month: January' },
                    { value: '02', text: 'Send Month: February' },
                    { value: '03', text: 'Send Month: March' },
                    { value: '04', text: 'Send Month: April' },
                    { value: '05', text: 'Send Month: May' },
                    { value: '06', text: 'Send Month: June' },
                    { value: '07', text: 'Send Month: July' },
                    { value: '08', text: 'Send Month: August' },
                    { value: '09', text: 'Send Month: September' },
                    { value: '10', text: 'Send Month: October' },
                    { value: '11', text: 'Send Month: November' },
                    { value: '12', text: 'Send Month: December' },
                ]
            },
            {
                label: 'Year', name: 'year', value: currentYear,
                dropdown: [

                    { value: '2018', text: 'Send Year: 2018' },
                    { value: '2019', text: 'Send Year: 2019' },
                    { value: '2020', text: 'Send Year: 2020' },
                    { value: '2021', text: 'Send Year: 2021' },
                    { value: '2022', text: 'Send Year: 2022' }
                ]
            }
        ]
    }
}

export const idt_reader_initial_state = [
    _.cloneDeep(idt_reader_forms.beginning),
    _.cloneDeep(idt_reader_forms.article),
    _.cloneDeep(idt_reader_forms.center_banner),
    _.cloneDeep(idt_reader_forms.article),
    _.cloneDeep(idt_reader_forms.article),
    _.cloneDeep(idt_reader_forms.featured),
    _.cloneDeep(idt_reader_forms.article),
    _.cloneDeep(idt_reader_forms.article),
    _.cloneDeep(idt_reader_forms.live_webinar),
    _.cloneDeep(idt_reader_forms.on_demand_webinar),
    _.cloneDeep(idt_reader_forms.end)
];

export function beginning(fields) {
    let emailName = fields[0].value;
    let month = fields[1].value;
    let year = fields[2].value;
    let mastheadLink = fields[3].value;
    let mastheadSrc = fields[4].value;
    let volume = fields[5].value;
    let issue = fields[6].value;
    let header = fields[7].value;
    let title = fields[8].value;
    let description = fields[9].value;
    let author = fields[10].value;
    let link = fields[11].value;
    let imgSrc = fields[12].value;

    let monthName;
    if (month === '01') { monthName = 'January' };
    if (month === '02') { monthName = 'February' };
    if (month === '03') { monthName = 'March' };
    if (month === '04') { monthName = 'April' };
    if (month === '05') { monthName = 'May' };
    if (month === '06') { monthName = 'June' };
    if (month === '07') { monthName = 'July' };
    if (month === '08') { monthName = 'August' };
    if (month === '09') { monthName = 'September' };
    if (month === '10') { monthName = 'October' };
    if (month === '11') { monthName = 'November' };
    if (month === '12') { monthName = 'December' };
    //put the url together
    let url = `https://www.dentalaegis.com/idt/${year}/${month}/newsletter`;

    return (`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
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
           text-decoration: none !important;
           }
           .black a, .black a:link, .black a:active, .black a:visited {
           color: #000000 !important;
           text-decoration: none !important;
           }
           .maroon a, .maroon a:link, .maroon a:active, .maroon a:visited {
           color: #ab1117 !important;
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
           table.w650 {
           width: 100% !important;
           height: auto !important;
           min-width: 100% !important;
           }
           table.w100, td.w100, img.w100 {
           width: 100% !important;
           height: auto !important;
           }
           .w180 {
           width: 180px !important;
           height: auto !important;
           }
           .pad {
           padding: 15px 10px !important;
           }
           .padT {
           padding-top: 0px !important;
           }
           .f16 {
           font-size: 14px !important;
           line-height: 18px !important;
           }
           .hide {
           display: none!important;
           }
           }		
        </style>
        <!--[if gte mso 9]>
        <style type="text/css">
           body, p, a, span, td, table {
           font-family:Arial, Helvetica, sans-serif !important;
           }
        </style>
        <![endif]-->	
     </head>
     <body bgcolor="#FFFFFF">
     <!-- g-link -->		
     <a href="https://www.dentalaegis.com/idt/" target="_blank"></a>	
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
           <tbody>
              <tr>
                 <td align="center">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                       <tbody>
                          <tr>
                             <td width="5">
                             </td>
                             <td align="center">
                                <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%">
                                   <tbody>
                                      <tr>
                                         <td align="center" height="20">
                                         </td>
                                      </tr>
                                      <tr>
                                         <td align="center">
                                            <table border="0" cellpadding="0" cellspacing="0" class="w650" style="min-width:650px; border:1px solid #000000;" width="650">
                                               <tbody>
                                                  <tr>
                                                     <td align="center" style="padding:5px 5px;">
                                                        <a href="${mastheadLink}" target="_blank"><img alt="" border="0" class="w100" src="${mastheadSrc}" style="display:block; margin:0px; max-width:600px;" width="600" /></a>
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td align="center" bgcolor="#000000" height="16" style="font-family:Arial, Helvetica, sans-serif; font-size:9px; line-height:10px; color:#efefef; text-transform:uppercase;">
                                                        Having trouble viewing this email? <span class="white"><a href="${url}" style="color:#ffffff; text-decoration:none;" target="_blank">Click here.</a></span>
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td align="center" bgcolor="#FFFFFF" style="background-color:#ffffff;">
                                                        <table border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;" width="100%">
                                                           <tbody>
                                                              <tr>
                                                                 <td class="pad" style="text-align: center; vertical-align: top; font-size: 0; padding:15px 20px;" valign="top">
                                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                       <tbody>
                                                                          <tr>
                                                                             <td style="text-align: center; vertical-align: top; font-size: 0; border-bottom:1px solid #000000;">
                                                                                <!--[if (gte mso 9)|(IE)]>
                                                                                <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;border-collapse:collapse;" >
                                                                                   <tr>
                                                                                      <td align="center" valign="top" width="383" style="width:383px;">
                                                                                         <![endif]-->																										
                                                                                         <div class="w100" style="width:100%;max-width:363px;display:inline-block;vertical-align:top;text-align:center;">
                                                                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;" width="100%">
                                                                                               <tbody>
                                                                                                  <tr>
                                                                                                     <td align="left">
                                                                                                        <table border="0" cellpadding="0" cellspacing="0" class="w100">
                                                                                                           <tbody>
                                                                                                              <tr>
                                                                                                                 <td align="center">
                                                                                                                    <a href="http://www.dentalaegis.com/idt" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/59782/" style="display:block; margin:0px; max-width:120px;" width="120" /> </a>
                                                                                                                 </td>
                                                                                                                 <td class="hide" width="25">
                                                                                                                 </td>
                                                                                                                 <td align="left" style="padding-top:11px;">
                                                                                                                    <table border="0" cellpadding="0" cellspacing="0">
                                                                                                                       <tbody>
                                                                                                                          <tr>
                                                                                                                             <td align="left" class="f16" style="font-family:'Times New Roman', Times, serif; font-size: 15px; font-weight: bold; line-height: 20px; color: #000000; padding-left:20px;">
                                                                                                                                <span class="black"><a href="http://www.dentalaegis.com/idt/${year}/${month}" style="color:#000000; text-decoration:none;" target="_blank">${monthName} ${year} | Vol. ${volume} No. ${issue} </a></span>
                                                                                                                             </td>
                                                                                                                          </tr>
                                                                                                                          <tr>
                                                                                                                             <td align="left" class="f16" style="font-family:'Times New Roman', Times, serif; font-size: 16px; font-weight: bold; line-height: 20px; color: #000000; padding-left:16px; font-style:italic;">
                                                                                                                                <span class="black"><a href="http://www.dentalaegis.com/idt" style="color:#000000; text-decoration:none;" target="_blank">insidedentaltech.com </a></span>
                                                                                                                             </td>
                                                                                                                          </tr>
                                                                                                                          <tr>
                                                                                                                             <td align="left" class="f16" style="font-family:'Times New Roman', Times, serif; font-size: 16px; font-weight: bold; line-height: 20px; color: #000000;padding-left:14px; font-style:italic;">
                                                                                                                                <span class="black"><a href="http://www.dentalaegis.com/idt/${year}/${month}/digital" style="color:#000000; text-decoration:none;" target="_blank">view the digital edition </a></span>
                                                                                                                             </td>
                                                                                                                          </tr>
                                                                                                                       </tbody>
                                                                                                                    </table>
                                                                                                                 </td>
                                                                                                              </tr>
                                                                                                           </tbody>
                                                                                                        </table>
                                                                                                     </td>
                                                                                                  </tr>
                                                                                               </tbody>
                                                                                            </table>
                                                                                         </div>
                                                                                         <!--[if (gte mso 9)|(IE)]>
                                                                                      </td>
                                                                                      <td align="center" valign="top" width="45" style="width:45px;" >
                                                                                         <![endif]-->																										
                                                                                         <div class="w100" style="width:100%;max-width:224px;display:inline-block;vertical-align:top;text-align:center;">
                                                                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;" width="100%">
                                                                                               <tbody>
                                                                                                  <tr>
                                                                                                     <td align="center" style="padding-top:20px; padding-bottom:10px; ">
                                                                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                           <tbody>
                                                                                                              <tr>
                                                                                                                 <td align="center" style="padding:5px 15px; border:1px solid #000000;box-shadow:6px -6px 0px -2px #e7e7e7;">
                                                                                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                                       <tbody>
                                                                                                                          <tr>
                                                                                                                             <td align="center" style="font-family:'Times New Roman', Times, serif; font-size:20px; line-height:24px; color:#000000; font-style:italic; font-weight:bold;">
                                                                                                                                Subscribe Today
                                                                                                                             </td>
                                                                                                                          </tr>
                                                                                                                          <tr>
                                                                                                                             <td align="center" style="font-family:'Times New Roman', Times, serif; font-size:16px; line-height:22px; color:#ab1117; font-style:italic; font-weight:bold;">
                                                                                                                                <span class="maroon"><a href="http://dentalaegis-sub.halldata.com/site/AEG000021IDnew/init.do" style="color:#ab1117; text-decoration:none;" target="_blank">Publication</a>  |  <a href="http://aegispublications.com/machform/view.php?id=155" style="color:#ab1117; text-decoration:none;" target="_blank">Newsletter</a></span>
                                                                                                                             </td>
                                                                                                                          </tr>
                                                                                                                       </tbody>
                                                                                                                    </table>
                                                                                                                 </td>
                                                                                                              </tr>
                                                                                                           </tbody>
                                                                                                        </table>
                                                                                                     </td>
                                                                                                  </tr>
                                                                                               </tbody>
                                                                                            </table>
                                                                                         </div>
                                                                                         <!--[if (gte mso 9)|(IE)]>
                                                                                      </td>
                                                                                   </tr>
                                                                                </table>
                                                                                <![endif]-->																									
                                                                             </td>
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
                                                     <td align="center">
                                                        <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px dashed #ab1117;" width="100%">
                                                           <tbody>
                                                              <tr>
                                                                 <td width="20">
                                                                 </td>
                                                                 <td align="center">
                                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                       <tbody>
                                                                          <tr>
                                                                             <td align="right">
                                                                                <table border="0" cellpadding="0" cellspacing="0" class="w100">
                                                                                   <tbody>
                                                                                      <tr>
                                                                                         <td align="center">
                                                                                            <a href="mailto:?subject=FW: Inside Dental Technology ${monthName} ${year} Issue Available Now&body=I thought you might be interested in this: ${url}?refer=true" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/59787/" style="display:block; margin:0px; max-width:140px;" width="140" /> </a>
                                                                                         </td>
                                                                                      </tr>
                                                                                   </tbody>
                                                                                </table>
                                                                             </td>
                                                                          </tr>
                                                                          <tr>
                                                                             <td align="center" height="20">
                                                                             </td>
                                                                          </tr>
                                                                          
                                                                          
  <tr>
                                                                             <td align="center">
                                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="395">
                                                                                   <tbody>
                                                                                      <tr>
                                                                                         <td align="left" dir="ltr" style="padding-left:3px; padding-bottom:7px;">
                                                                                            <table border="0" cellpadding="0" cellspacing="0" style="background-color: #ab1117; box-shadow: -3px 3px 0px #bbbbbb;">
                                                                                               <tbody>
                                                                                                  <tr>
                                                                                                     <td align="center" style="font-size: 18px; padding: 2px 9px; font-family: Times New Roman, serif; font-style: italic; font-weight: normal; color: #ffffff; text-align: left;">
                                                                                                        ${header}
                                                                                                     </td>
                                                                                                  </tr>
                                                                                               </tbody>
                                                                                            </table>
                                                                                         </td>
                                                                                      </tr>
                                                                                      <tr>
                                                                                         <td align="left" dir="ltr" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; font-weight:bold; line-height:20px; text-transform: uppercase;">
                                                                                            <a href="${link}" style="text-decoration:none; color:#000;" target="_blank">${title}</a>
                                                                                         </td>
                                                                                      </tr>
                                                                                      <tr>
                                                                                         <td align="left" dir="ltr" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#000000; padding-bottom:5px;">
                                                                                            ${description}<br />
                                                                                            ${author ? `<em>${author}</em>` : ``}
                                                                                         </td>
                                                                                      </tr>
                                                                                      <tr>
                                                                                         <td align="left" class="maroon" dir="ltr" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#ab1117; text-transform:uppercase; font-weight:bold;">
                                                                                            <a href="${link}" style="color:#; text-decoration:none;" target="_blank">Read More ➠</a>
                                                                                         </td>
                                                                                      </tr>
                                                                                      <tr>
                                                                                         <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                                                                         </td>
                                                                                      </tr>
                                                                                   </tbody>
                                                                                </table>
                                                                                <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="180">
                                                                                   <tbody>
                                                                                      <tr>
                                                                                         <td align="center">
                                                                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="w180" width="180">
                                                                                               <tbody>
                                                                                                  <tr>
                                                                                                     <td align="center" style="border:solid 1px #737373;" valign="top">
                                                                                                        <a href="https://www.dentalaegis.com/idt/${year}/${month}/" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; max-width:180px; width:180px;" width="100%" /></a>
                                                                                                     </td>
                                                                                                  </tr>
                                                                                                  <tr>
                                                                                                     <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                                                                                     </td>
                                                                                                  </tr>
                                                                                               </tbody>
                                                                                            </table>
                                                                                         </td>
                                                                                      </tr>
                                                                                   </tbody>
                                                                                </table>
                                                                             </td>
                                                                          </tr>
                                                                       </tbody>
                                                                    </table>
                                                                 </td>
                                                                 <td width="20">
                                                                 </td>
                                                              </tr>
                                                           </tbody>
                                                        </table>
                                                     </td>
                                                  </tr>
  <!--END OF THE BEGINNING-->
  `)
}

export function article(fields) {



    let header = fields[0].value;
    let title = fields[1].value;
    let description = fields[2].value;
    let author = fields[3].value;
    let link = fields[4].value;
    let imgSrc = fields[5].value;
    let imgLink = fields[6].value;


    return (
        `
    <!--ARTICLE SECTION-->
    
    <tr>
       <td align="center">
          <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px dashed #ab1117;" width="100%">
             <tbody>
                <tr>
                   <td width="20">
                   </td>
                   <td align="center">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                         <tbody>
                            <tr>
                               <td align="center" height="20">
                               </td>
                            </tr>
                            <tr>
                               <td align="center">
                                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="395">
                                     <tbody>
                                     ${header ? `                                        
                                <tr>
                                     <td align="left" style="padding-left:3px; padding-bottom:7px;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="background-color: #ab1117; box-shadow: -3px 3px 0px #bbbbbb;">
                                           <tbody>
                                              <tr>
                                                 <td align="center" style="font-size: 18px; padding: 2px 9px; font-family: Times New Roman, serif; font-style: italic; font-weight: normal; color: #ffffff; text-align: left;">
                                                    ${header}
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                  </tr>` : ``}

                                        <tr>
                                           <td align="left" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; font-weight:bold; line-height:20px;text-transform:uppercase;">
                                              <a href="${link}" style="text-decoration:none; color:#000;" target="_blank">${title}</a>
                                           </td>
                                        </tr>
                                        <tr>
                                           <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#000000; padding-bottom:5px;">
                                              ${description}
<br />
${author ? `<em>${author}</em>` : ``}
                                           </td>
                                        </tr>
                                        <tr>
                                           <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#ab1117; text-transform:uppercase; font-weight:bold;">
                                              <a href="${link}" style="color:#; text-decoration:none;" target="_blank">Read More ➠</a>
                                           </td>
                                        </tr>
                                        <tr>
                                           <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                           </td>
                                        </tr>
                                     </tbody>
                                  </table>
                                  <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="180">
                                     <tbody>
                                        <tr>
                                           <td align="center">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="w180" width="180">
                                                 <tbody>
                                                    <tr>
                                                       <td align="center" style="border:4px solid #aaaaaa;" valign="top">
                                                          <a href="${imgLink}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; max-width:180px; width:180px;" width="180" /> </a>
                                                       </td>
                                                    </tr>
                                                    <tr>
                                                       <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </td>
                                        </tr>
                                     </tbody>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                   <td width="20">
                   </td>
                </tr>
             </tbody>
          </table>
       </td>
    </tr>
<!--END OF ARTICLE SECTION-->
    `
    )
}

export function center_banner(fields) {

    let link = fields[0].value;
    let imgLink = fields[1].value;

    return (
        `        <!--START CENTER BANNER-->  
    <tr>
<td align="center" style="padding:15px 5px; border-bottom:1px dashed #ab1117;">             
<a href="${link}" target="_blank"> <img alt="" border="0" class="w100" src="${imgLink}" style="display:block; margin:0px; max-width:600px;" width="600" /> </a>
</td>                                             
</tr>	

<!--END CENTER BANNER-->  `
    )
}
export function live_webinar(fields) {

    let header = fields[0].value
    let title = fields[1].value
    let author = fields[2].value
    let date = fields[3].value
    let credit = fields[4].value
    let cost = fields[5].value
    let provider = fields[6].value
    let supporter = fields[7].value
    let link = fields[8].value
    let imgSrc = fields[9].value

    return `<!--LIVE WEBINAR SECTION-->                                                
  <tr>
     <td align="center">
     
         <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px dashed #ab1117;" width="100%">
     
             <tbody>
     
                 <tr>
     
                     <td width="20">
     
                          </td>
     
                     <td align="center">
     
                         <table border="0" cellpadding="0" cellspacing="0" width="100%">
     
                             <tbody>
     
                                 <tr>
     
                                     <td align="center" height="20">
     
                                          </td>
     
                                 </tr>
     
                                 <tr>
     
                                     <td align="center">
     
                                         <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="340">
     
                                             <tbody>
                                                ${header ? `                                                 
                                            <tr>
                                                <td align="left" style="padding-left:3px; padding-bottom:7px;">
                                                    <table border="0" cellpadding="0" cellspacing="0" style="background-color: #ab1117; box-shadow: -3px 3px 0px #bbbbbb;">
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" style="font-size: 18px; padding: 2px 9px; font-family: Times New Roman, serif; font-style: italic; font-weight: normal; color: #ffffff; text-align: left;">
                                                                    ${header}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>` : ``}
                                
     
                                                 <tr>
     
                                                     <td align="left" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; font-weight:bold; line-height:20px; text-transform:uppercase;">
     
                                                         <a href="${link}" style="text-decoration:none; color:#000;" target="_blank">${title}</a></td>
     
                                                 </tr>
     
                                                 <tr>
     
                                                     <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#000000; padding-bottom:5px;">
     
                                                         <em>${author}</em><br />
     
                                                         <strong>DATE:</strong> ${date}<br />
     
                                                         <strong>CREDIT:</strong> ${credit}<br />
     
                                                         <strong>COST:</strong> ${cost}<br />
     
                                                         <strong>PROVIDER:</strong> ${provider}<br />
     
                                                         <strong>COMMERCIAL SUPPORTER:</strong> <em>${supporter}</em></td>
     
                                                 </tr>
     
                                                 <tr>
     
                                                     <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#ab1117; text-transform:uppercase; font-weight:bold;">
     
                                                         <a href="${link}" style="color:#; text-decoration:none;" target="_blank">VIEW WEBINAR ➠</a></td>
     
                                                 </tr>
     
                                                 <tr>
     
                                                     <td align="center" height="20">
     
                                                          </td>
     
                                                 </tr>
     
                                             </tbody>
     
                                         </table>
     
                                         <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="180">
     
                                             <tbody>
     
                                                 <tr>
     
                                                     <td align="center">
     
                                                         <table align="left" border="0" cellpadding="0" cellspacing="0" class="w180" width="180">
     
                                                             <tbody>
     
                                                                 <tr>
     
                                                                     <td align="center" valign="top">
     
                                                                         <a href="${link}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; max-width:180px; width:180px;" width="180" /> </a></td>
     
                                                                 </tr>
     
                                                                 <tr>
     
                                                                     <td align="center" height="20">
     
                                                                          </td>
     
                                                                 </tr>
     
                                                             </tbody>
     
                                                         </table>
     
                                                     </td>
     
                                                 </tr>
     
                                             </tbody>
     
                                         </table>
     
                                     </td>
     
                                 </tr>
     
                             </tbody>
     
                         </table>
     
                     </td>
     
                     <td width="20">
     
                          </td>
     
                 </tr>
     
             </tbody>
     
         </table>
     
     </td>
     
     </tr>
<!--END LIVE WEBINAR SECTION-->`;
}

export function on_demand_webinar(fields) {
    let header = fields[0].value
    let title = fields[1].value
    let author = fields[2].value
    let dates = fields[3].value
    let credit = fields[4].value
    let cost = fields[5].value
    let provider = fields[6].value
    let supporter = fields[7].value
    let link = fields[8].value
    let imgSrc = fields[9].value
    return (
        `                               
    <!--START ON-DEMAND WEBINAR SECTION -->                                                             
    <tr>
    <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px dashed #ab1117;" width="100%">
            <tbody>
                <tr>
                    <td width="20">
                         </td>
                    <td align="center">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                                <tr>
                                    <td align="center" height="20">
                                         </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="340">
                                            <tbody>
                                               ${header ? `                                                 
                                           <tr>
                                               <td align="left" style="padding-left:3px; padding-bottom:7px;">
                                                   <table border="0" cellpadding="0" cellspacing="0" style="background-color: #ab1117; box-shadow: -3px 3px 0px #bbbbbb;">
                                                       <tbody>
                                                           <tr>
                                                               <td align="center" style="font-size: 18px; padding: 2px 9px; font-family: Times New Roman, serif; font-style: italic; font-weight: normal; color: #ffffff; text-align: left;">
                                                                   ${header}</td>
                                                           </tr>
                                                       </tbody>
                                                   </table>
                                               </td>
                                           </tr>` : ``}
                                                <tr>
                                                    <td align="left" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; font-weight:bold; line-height:20px; text-transform:uppercase;">
                                                        <a href="${link}" style="text-decoration:none; color:#000;" target="_blank">${title}</a></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#000000; padding-bottom:5px;">
                                                        <em>${author}</em><br />
                                                        <strong>DATES:</strong> ${dates}<br />
                                                        <strong>CREDIT:</strong> ${credit}<br />
                                                        <strong>COST:</strong> ${cost}<br />
                                                        <strong>PROVIDER:</strong> ${provider}<br />
                                                        <strong>COMMERCIAL SUPPORTER:</strong> <em>${supporter}</em></td>
                                                </tr>
                                                <tr>
                                                    <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#ab1117; text-transform:uppercase; font-weight:bold;">
                                                        <a href="${link}" style="color:#; text-decoration:none;" target="_blank">VIEW WEBINAR ➠</a></td>
                                                </tr>
                                                <tr>
                                                    <td align="center" height="20">
                                                         </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="180">
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <table align="left" border="0" cellpadding="0" cellspacing="0" class="w180" width="180">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" valign="top">
                                                                        <a href="${link}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; max-width:180px; width:180px;" width="180" /> </a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="center" height="20">
                                                                         </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td width="20">
                         </td>
                </tr>
            </tbody>
        </table>
    </td>
    </tr>
 
 
 
 
<!--END ON-DEMAND WEBINAR SECTION-->`
    )
}

export function featured(fields) {
    let header = fields[0].value;
    let title = fields[1].value;
    let description = fields[2].value;
    let author = fields[3].value;
    let link = fields[4].value;
    let imgSrc = fields[5].value;
    let imgLink = fields[6].value;

    return (
        `     <!--FEATURED GRAY BOX ARTICLE SECTION-->
    
    <tr style="background-color: #eee">
       <td align="center">
          <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px dashed #ab1117;" width="100%">
             <tbody>
                <tr>
                   <td width="20">
                   </td>
                   <td align="center">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                         <tbody>
                            <tr>
                               <td align="center" height="20">
                               </td>
                            </tr>
                            <tr>
                               <td align="center">
                                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="395">
                                     <tbody>
                                     ${header ? `                                        
                                  <tr>
                                     <td align="left" style="padding-left:3px; padding-bottom:7px;">
                                        <table border="0" cellpadding="0" cellspacing="0" style="background-color: #ab1117; box-shadow: -3px 3px 0px #bbbbbb;">
                                           <tbody>
                                              <tr>
                                                 <td align="center" style="font-size: 18px; padding: 2px 9px; font-family: Times New Roman, serif; font-style: italic; font-weight: normal; color: #ffffff; text-align: left;">
                                                    ${header}
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                  </tr>` : ``}
                                        <tr>
                                           <td align="left" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; font-weight:bold; line-height:20px;text-transform:uppercase;">
                                              <a href="${link}" style="text-decoration:none; color:#000;" target="_blank">${title}</a>
                                           </td>
                                        </tr>
                                        <tr>
                                           <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#000000; padding-bottom:5px;">
                                              ${description}
<br />
${author ? `<em>${author}</em>` : ``}
                                           </td>
                                        </tr>
                                        <tr>
                                           <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#ab1117; text-transform:uppercase; font-weight:bold;">
                                              <a href="${link}" style="color:#; text-decoration:none;" target="_blank">Read More ➠</a>
                                           </td>
                                        </tr>
                                        <tr>
                                           <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                           </td>
                                        </tr>
                                     </tbody>
                                  </table>
                                  <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="180">
                                     <tbody>
                                        <tr>
                                           <td align="center">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="w180" width="180">
                                                 <tbody>
                                                    <tr>
                                                       <td align="center" style="border:4px solid #aaaaaa;" valign="top">
                                                          <a href="${imgLink}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; max-width:180px; width:180px;" width="180" /> </a>
                                                       </td>
                                                    </tr>
                                                    <tr>
                                                       <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </td>
                                        </tr>
                                     </tbody>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                   <td width="20">
                   </td>
                </tr>
             </tbody>
          </table>
       </td>
    </tr>
<!--END OF ARTICLE SECTION-->
`
    )
}



export function end(fields) {

    let header = fields[0].value;
    let title = fields[1].value;
    let description = fields[2].value;
    let month = fields[3].value;
    let year = fields[4].value;

    let monthName;
    if (month === '01') { monthName = 'January' };
    if (month === '02') { monthName = 'February' };
    if (month === '03') { monthName = 'March' };
    if (month === '04') { monthName = 'April' };
    if (month === '05') { monthName = 'May' };
    if (month === '06') { monthName = 'June' };
    if (month === '07') { monthName = 'July' };
    if (month === '08') { monthName = 'August' };
    if (month === '09') { monthName = 'September' };
    if (month === '10') { monthName = 'October' };
    if (month === '11') { monthName = 'November' };
    if (month === '12') { monthName = 'December' };


    return (
        `                                <!--START OF THE END-->
    <tr>
       <td align="center" bgcolor="#FFFFFF" style="background-color:#ffffff;">
          <table border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;" width="100%">
             <tbody>
                <tr>
                   <td class="pad" style="text-align: left; vertical-align: top; font-size: 0; padding:20px 20px; border-bottom:1px dashed #ab1117;" valign="top">
                      <!--[if (gte mso 9)|(IE)]>
                      <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;border-collapse:collapse;" >
                         <tr>
                            <td align="left" valign="top">
                               <![endif]-->																						
                               <div style="width:100%;display:inline-block;vertical-align:top;text-align:center;">
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;" width="100%">
                                     <tbody>
                                        <tr>
                                           <td align="center">
                                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                 <tbody>
                                                 ${header ? `                                                    
                                            <tr>
                                                 <td align="left" style="padding-left:3px; padding-bottom:7px;">
                                                    <table border="0" cellpadding="0" cellspacing="0" style="background-color: #ab1117; box-shadow: -3px 3px 0px #bbbbbb;">
                                                       <tbody>
                                                          <tr>
                                                             <td align="center" style="font-size: 18px; padding: 2px 9px; font-family: Times New Roman, serif; font-style: italic; font-weight: normal; color: #ffffff; text-align: left;">
                                                                ${header}
                                                             </td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                 </td>
                                              </tr>`: ``}
                                                ${title ? `                                                    
                                            <tr>
                                                <td align="left" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:16px; font-weight:bold; line-height:20px; text-transform:uppercase;">
                                                   ${title}
                                                </td>
                                             </tr>`: ``}

                                                    <tr>
                                                       <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15px; color:#000000;">
                                                          ${description}
                                                       </td>
                                                    </tr>
                                                 </tbody>
                                              </table>
                                           </td>
                                           <td class="hide" width="35">
                                           </td>
                                        </tr>
                                     </tbody>
                                  </table>
                               </div>
                               <!--[if (gte mso 9)|(IE)]>
                            </td>
                         </tr>
                      </table>
                      <![endif]-->																					
                   </td>
                </tr>
             </tbody>
          </table>
       </td>
    </tr>
    <tr>
       <td align="center" height="20">
       </td>
    </tr>
    <tr>
       <td align="center">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
             <tbody>
                <tr>
                   <td width="20">
                   </td>
                   <td align="center">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                         <tbody>
                            <tr>
                               <td align="center">
                                  <img alt="" border="0" class="w100" src="http://aegispublications.com/news/idt/2017/04/dash.jpg" style="display:block; margin:0px; max-width:541px;" width="541" />
                               </td>
                            </tr>
                            <tr>
                               <td align="center" style="font-family:Arial, sans-serif; font-size:13px; line-height:16px; color:#9d0707; text-align:center; text-transform:uppercase; font-weight:bold; padding:10px 0px;">
                                  Connect with <em>Inside Dental Technology</em>
                               </td>
                            </tr>
                            <tr>
                               <td align="center" style="padding-bottom:10px;">
                                  <table border="0" cellpadding="0" cellspacing="0">
                                     <tbody>
                                        <tr>
                                           <td align="center">
                                              <a href="https://www.facebook.com/InsideDentalTechnology" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/59783/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
                                           </td>
                                           <td width="20">
                                           </td>
                                           <td align="center">
                                              <a href="https://twitter.com/InDentalTech" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/59784/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
                                           </td>
                                           <td width="20">
                                           </td>
                                           <td align="center">
                                              <a href="https://www.instagram.com/insidedentaltechnology/" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/59785/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
                                           </td>
                                           <td width="20">
                                           </td>
                                           <td align="center">
                                              <a href="https://www.youtube.com/InsideDentalTechnology" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/59786/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
                                           </td>
                                           <td width="20">
                                           </td>
                                           <td align="center">
                                              <a href="mailto:?subject=FW: Inside%20Dental%20Technology ${monthName} ${year} Issue Available Now&body=I thought you might be interested in this:%20https://www.dentalaegis.com/idt/${year}/${month}/newsletter?refer=true" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/59797/" style="display:block; margin:0px; max-width:31px;" width="31" /> </a>
                                           </td>
                                        </tr>
                                     </tbody>
                                  </table>
                               </td>
                            </tr>
                            <tr>
                               <td align="center">
                                  <img alt="" border="0" class="w100" src="http://aegispublications.com/news/idt/2017/04/dash.jpg" style="display:block; margin:0px; max-width:541px;" width="541" />
                               </td>
                            </tr>
                            <tr>
                               <td align="center" height="20">
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </td>
                   <td width="20">
                   </td>
                </tr>
             </tbody>
          </table>
       </td>
    </tr>
    <tr>
       <td align="center" height="10" style="border-top:1px dashed #ab1117; font-size:10px; line-height:10px;">
          <img alt="" border="0" height="10" src="https://www.dentalaegis.com/media/59795/" style="display:block; margin:0px; max-width:10px;" width="10" />
       </td>
    </tr>

    <tr>
    <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px" valign="middle">
  You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | <em>Inside Dental Technology</em>.<br />To ensure delivery, please add <a href="mailto:reply-289795@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-289795@news.aegispublications.com</a> to your address book<br />
  %%PLUGIN_UNSUBSCRIBE: 2146841-UNSUBSCRIBE%% <br />
         <em>Inside Dental Technology</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
  </tr>

 </tbody>
</table>
</td>
</tr>
<tr>
<td align="center" height="20">
</td>
</tr>
</tbody>
</table>
</td>
<td width="5">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</body>
</html>
`
    )
}