import _ from 'lodash';

//Auto detect the month and year.  
let d = new Date();
let currentMonth = d.getMonth() + 1;
if (currentMonth < 10) { currentMonth = '0' + '' + currentMonth }
currentMonth = currentMonth.toString();
let currentYear = d.getFullYear().toString();


export const id_reader_forms = {
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
      { label: 'Subscribe Link', name: 'subscribe' },
      { label: 'Header', name: 'header', value: 'Cover Story' },
      { label: 'Title', name: 'title' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  ' },
      { label: 'Author', name: 'author' },
      { label: 'Link', name: 'link' },
      { label: 'Cover Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x220' }
    ]
  },
  red_header: {
    typeOfRow: 'red_header',
    header: 'Red Banner Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Header' },
    ]
  },
  ce: {
    typeOfRow: 'ce',
    header: 'CE',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Title', name: 'title' },
      { label: 'Number of Credits', name: 'numCredits' },
      { label: 'Description', name: 'description' },
      { label: 'Author', name: 'author' },
      { label: 'Credits', name: 'credits' },
      { label: 'Cost', name: 'cost' },
      { label: 'Provider', name: 'provider' },
      { label: 'Supporter', name: 'supporter' },
      { label: 'Dates', name: 'dates' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x150' },
    ]
  },
  peer_reviewed: {
    typeOfRow: 'peer_reviewed',
    header: 'Peer-Review Article',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Title', name: 'title' },
      { label: 'Description', name: 'description' },
      { label: 'Author', name: 'author' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x150' },
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
      { label: 'Header', name: 'header', value: 'Header for Article' },
      { label: 'Title', name: 'title' },
      { label: 'Author', name: 'author' },
      { label: 'Link', name: 'link' },
    ]
  },
  featured: {
    typeOfRow: 'featured',
    header: 'Featured Gray Box (eBook)',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Featured eBook' },
      { label: 'Title', name: 'title' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  Lorem ipsum dolar emet eres dormus volenquar elementos.  ' },
      { label: 'Author', name: 'author' },
      { label: 'Call-to-Action', name: 'cta' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x150' },
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

export const id_reader_initial_state = [
  _.cloneDeep(id_reader_forms.beginning),
  _.cloneDeep(id_reader_forms.red_header),
  _.cloneDeep(id_reader_forms.ce),
  _.cloneDeep(id_reader_forms.red_header),
  _.cloneDeep(id_reader_forms.peer_reviewed),
  _.cloneDeep(id_reader_forms.peer_reviewed),
  _.cloneDeep(id_reader_forms.red_header),
  _.cloneDeep(id_reader_forms.article),
  _.cloneDeep(id_reader_forms.featured),
  _.cloneDeep(id_reader_forms.red_header),
  _.cloneDeep(id_reader_forms.article),
  _.cloneDeep(id_reader_forms.article),
  _.cloneDeep(id_reader_forms.end)
];

export function beginning(fields) {
  let emailName = fields[0].value;
  let month = fields[1].value;
  let year = fields[2].value;
  let mastheadLink = fields[3].value;
  let mastheadSrc = fields[4].value;
  let volume = fields[5].value;
  let issue = fields[6].value;
  let subscribe = fields[7].value;
  let header = fields[8].value;
  let title = fields[9].value;
  let description = fields[10].value;
  let author = fields[11].value;
  let link = fields[12].value;
  let imgSrc = fields[13].value;

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
  let url = `https://www.dentalaegis.com/id/${year}/${month}/newsletter`;

  return (`
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width" name="viewport" />
      <meta content="IE=edge" http-equiv="X-UA-Compatible" />
      <style type="text/css">
        /* BOILERPLATE STYLES */
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
      <a href="https://www.dentalaegis.com/id/"  target="_blank"></a>
      <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td bgcolor="#000000" width="1">
                    </td>
                    <td align="center">
                      <table border="0" cellpadding="0" cellspacing="0" class="w600" style="min-width:600px;" width="600">
                        <tbody>
                        ${mastheadLink ? `
                        <tr>
                        <td align="center" style="border-top:1px solid #000000;">
                          <a href="${mastheadLink}" target="_blank"> <img alt="" border="0" class="w100" src="${mastheadSrc}" style="display:block; margin:0px; max-width:600px;" width="600" /> </a></td>
                        </tr>`:
      `<!--<tr>
                        <td align="center" style="border-top:1px solid #000000;">
                          <a href="http://info.affordabledentures.com/owner" target="_blank"> <img alt="" border="0" class="w100" src="https://www.dentalaegis.com/media/61416/" style="display:block; margin:0px; max-width:600px;" width="600" /> </a></td>
                        </tr>-->`}
                          <tr>
                            <td align="center" bgcolor="#000000" height="16" style="font-family:Arial, Helvetica, sans-serif; font-size:9px; line-height:10px; color:#efefef; text-transform:uppercase;">
                              Having trouble viewing this email? <span class="white"><a href="https://www.dentalaegis.com/id/${year}/${month}/newsletter" style="color:#ffffff; text-decoration:underline;" target="_blank">Click here.</a></span>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="padding-top:10px;">
                              <img alt="" border="0" src="https://www.dentalaegis.com/media/60097/" style="display:block; margin:0px; max-width:211px;" width="211" /> 
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="padding:10px; border-bottom:1px dotted #333333; font-family:Georgia, 'Times New Roman', Times, serif; font-size:14px; color:#000000; padding:2px 0 7px 0; font-weight:bold;" valign="top">
                              <a href="https://www.dentalaegis.com/id/${year}/${month}/" style="text-decoration:none; color:#000000;" target="_blank">${monthName} ${year} <span style="color:#000000;">|</span> Vol. ${volume}, No. ${issue}</a> | <a href="https://www.dentalaegis.com/id" style="color:#9d0707; text-decoration:none;" target="_blank">insidedentistry.net</a><a href="https://www.dentalaegis.com/id/${year}/${month}/digital" style="color:#9d0707; text-decoration:none;" target="_blank"> <span style="color:#000000;">|</span> Digital Edition</a>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" bgcolor="#9d0707" style="background-color:#9d0707;">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" class="menu" style="color:#ffffff; font-size:14px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:3px 8px;">
                                      <span class="white1"><a href="https://id.cdeworld.com/" style=" text-decoration:none; color:#ffffff;" target="_blank">CE</a>  |  <a href="http://www.dentalaegis.com/news" style=" text-decoration:none; color:#ffffff" target="_blank">News</a>  |  <a href="https://www.dentalaegis.com/id/${year}/${month}/" style="text-decoration:none; color:#ffffff" target="_blank">Articles</a>  |  <a href="https://www.dentalaegis.com/id/archive" style=" text-decoration:none; color:#ffffff" target="_blank">Archive</a>  |   <a href="https://www.dentalaegis.com/id/products" style=" text-decoration:none; color:#ffffff" target="_blank">Products</a>  |  <a href="${subscribe}" style=" text-decoration:none; color:#ffffff" target="_blank">Subscribe</a>  |  <a href="https://www.dentalaegis.com/id/ebooks" style=" text-decoration:none; color:#ffffff" target="_blank">eBooks</a></span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="right" bgcolor="#aaaaaa" style="border-bottom:1px solid #cccccc; border-top:1px solid #cccccc;background-color:#aaaaaa;">
                              <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td align="right" height="20" style="padding-right:5px;" width="22">
                                      <img src="https://www.dentalaegis.com/media/59113/" style="vertical-align:bottom;" width="22" />
                                    </td>
                                    <td align="right" height="20" style="font-family:'Times New Roman', Times, serif; font-size:12px; text-transform:uppercase; padding-right:10px;">
                                      <a href="mailto:?subject=Forward: Inside Dentistry &body=I%20thought%20you%20might%20be%20interested%20in%20this: https://www.dentalaegis.com/id/${year}/${month}/newsletter?refer=true" style="text-decoration:none;color:#fff;" target="_blank">Forward to a Colleague</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px dotted #333333;" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="20"> 
                                    </td>
                                    <td align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>

                                        <!--START COVER STORY -->  
                                        <tr>
                                          <td align="center">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                              <tbody>
                                                <tr>
                                                  <td align="center">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="390">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" height="20"> 
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style=" font-size:24px; line-height:26px;  color:#000000;font-family:Helvetica, Arial, sans-serif; font-weight:bold; padding-bottom:7px;">
                                                            ${header}
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style="font-size:16px;  color:#9d0707; font-family:Helvetica, Arial, sans-serif; font-size:14px; line-height:18px; font-weight:bold; padding-bottom:0px;">
                                                            <span><a href="${link}" style="text-decoration:none; color:#000" target="_blank">${title}</a></span>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="left" style="font-family:Helvetica, Arial, sans-serif; font-size:13px; line-height:16px; color:#333333;">
                                                            ${description}
                                                          </td>
                                                        </tr>
                                                        ${author ? `<tr>
                                                        <td align="left" style="font-family:Helvetica, Arial, sans-serif; font-size:13px; line-height:16px; color:#333333; padding-top:7px;"><em>${author}</em></td>
                                                        </tr` :
      `<!--  <tr>
                                                        <td align="left" style="font-family:Helvetica, Arial, sans-serif; font-size:13px; line-height:16px; color:#333333; padding-top:7px;"><em>${author}</em></td>
                                                        </tr>-->`}
                                                   																											
                                                        <tr>
                                                          <td align="left" class="maroon" style="font-family:Helvetica, Arial, sans-serif; font-size:12px; color:#9d0707; padding-top:0px; font-style:oblique; font-weight:bold; text-decoration:none; text-transform:uppercase;">
                                                            <a href="${link}" style="font-family:Helvetica, sans-serif; color:#9d0707; text-decoration:none;" target="_blank"><span style="font-size:11px; line-height:14px;">▶</span> Read More </a>
                                                          </td>
                                                        </tr>
                                                  
                                                      </tbody>
                                                    </table>
                                                    <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="140">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" height="22"> 
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td align="center">
                                                            <a href="https://www.dentalaegis.com/id/${year}/${month}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; margin:0px; max-width:140px;" width="140" /> </a>
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
                                        <!--END COVER STORY-->
  `)
}

export function red_header(fields) {
  let header = fields[0].value;

  return (
    `
    <!--RED HEADER-->
    <tr>
    <td align="center" height="20"> 
    </td>
    </tr>
    <tr>
      <td align="left" height="20" style="background-color:#9d0707;  font-family:Arial, san-serif; text-transform:uppercase; font-size: 13px; line-height:16px; color:#ffffff; padding-left:10px;">
        ${header}
      </td>
    </tr>
    <tr>
    <td align="center" height="20"> 
    </td>
    </tr>
    <!--END HEADER-->
    `
  )
}

export function ce(fields) {

  let title = fields[0].value;
  let numCredits = fields[1].value;
  let description = fields[2].value;
  let author = fields[3].value;
  let credits = fields[4].value;
  let cost = fields[5].value;
  let provider = fields[6].value;
  let supporter = fields[7].value;
  let dates = fields[8].value;
  let link = fields[9].value;
  let imgSrc = fields[10].value;

  return (
    `
    <!--START CE-->
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
              <td align="center">
                <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="280">
                  <tbody>
                  
                    <tr>
                      <td align="center">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                            <tr>
                              <td align="left" style="font-size:16px;  color:#9d0707; font-family:Helvetica, Arial, sans-serif; font-size:14px; line-height:18px; font-weight:bold; padding-bottom:0px;">
                                <span><a href="${link}" style="text-decoration:none; color:#000" target="_blank">${title}</a></span>
                              </td>
                              <td width="" valign="top">
                                <a href="${link}" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/60075/" style="display:block; margin:0px; max-width:38px;" width="38" /> </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-family:Helvetica, Arial, sans-serif; font-size:13px; line-height:16px; color:#333333;">
                        <div style="font-family:Helvetica, sans-serif; font-size:13px; margin: 0px 0px 0px;">
                        <img src="http://aegispublications.com/news/id/2015/flags/news-ce-flag.png" style="vertical-align:middle; width:25px;" /> <strong>${numCredits} CREDITS</strong>: ${description}
    </div>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="font-family:Helvetica, Arial, sans-serif; font-size:13px; line-height:16px; color:#333333; padding-top:7px;">
                        <em>${author}</em>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="grey" style="font-family:Helvetica, Arial, sans-serif; font-size:13px; line-height:16px; color:#333333; padding-top:0px;">
                        <strong>Credits:</strong> ${credits}<br />
                        <strong>Cost:</strong> ${cost}<br />
                        <strong>Provider:</strong> ${provider}<br />
                        <strong>Available Dates: </strong>${dates}
                      </td>
                    </tr>
                    <tr>
                      <td align="left" class="maroon" style="font-family:Helvetica, Arial, sans-serif; font-size:12px; color:#9d0707; padding-top:0px; font-style:oblique; font-weight:bold; text-decoration:none; text-transform:uppercase;">
                        <a href="${link}" style="font-family:Helvetica, sans-serif; color:#9d0707; text-decoration:none;" target="_blank"><span style="font-size:11px; line-height:14px;">▶</span> View Course </a>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" class="hide" height="20"> 
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="260">
                  <tbody>
                    
                    <tr>
                      <td align="center">
                        <a href="${link}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; margin:0px; max-width:260px;" width="260" /> </a>
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
    <!--END CE -->
    `
  )
}
export function peer_reviewed(fields) {

  fields: [
    { label: 'Title', name: 'title' },
    { label: 'Description', name: 'description' },
    { label: 'Author', name: 'author' },
    { label: 'Link', name: 'link' },
    { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/180x150' },
  ]

  let title = fields[0].value;
  let description = fields[1].value;
  let author = fields[2].value;
  let link = fields[3].value;
  let imgSrc = fields[4].value;


  return `
  <!--PEER-REVIEWED-->
  <tr>
    <td align="center">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td align="center">
              <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="270">
                <tbody>
                  <tr>
                    <td align="center" height="20"> 
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                          <tr>
                            <td align="left" style="font-size:16px;  color:#9d0707; font-family:Helvetica, Arial, sans-serif; font-size:14px; line-height:18px; font-weight:bold; padding-bottom:0px;">
                              <span><a href="${link}" style="text-decoration:none; color:#000" target="_blank">${title}</a></span>
                            </td>
                            <td width="52" valign="top">
                              <a href="${link}" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/60075/" style="display:block; margin:0px; max-width:38px;" width="38" /> </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="font-family:Helvetica, Arial, sans-serif; font-size:13px; line-height:16px; color:#333333;">
                      ${description}
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="font-family:Helvetica, Arial, sans-serif; font-size:13px; line-height:16px; color:#333333; padding-top:7px;">
                      <em>${author}</em>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" class="maroon" style="font-family:Helvetica, Arial, sans-serif; font-size:12px; color:#9d0707; padding-top:0px; font-style:oblique; font-weight:bold; text-decoration:none; text-transform:uppercase;">
                      <a href="${link}" style="font-family:Helvetica, sans-serif; color:#9d0707; text-decoration:none;" target="_blank"><span style="font-size:11px; line-height:14px;">▶</span> Read More </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" class="hide" height="20"> 
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="260">
                <tbody>
                  <tr>
                    <td align="center" height="20"> 
                    </td>
                  </tr>
                  <tr>
                    <td class="hide" width="60"> 
                    </td>
                    <td align="center">
                      <a href="${link}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; margin:0px; max-width:220px;" width="200" /> </a>
                    </td>
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
  <!--END PEER-REVIEWED-->
  `;
}

export function article(fields) {

  let header = fields[0].value;
  let title = fields[1].value;
  let author = fields[2].value;
  let link = fields[3].value;

  return (`
    <!--START ARTICLE-->
    <tr>
    <td align="center">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tbody>
        <tr>
          <td align="center">
            <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="510">
              <tbody>
                <tr>
                  <td align="center" height="7"> 
                  </td>
                </tr>
                <tr>
                  <td align="left" style="font-size:16px;  color:#9d0707; font-family:Helvetica, Arial, sans-serif; font-size:14px; line-height:18px;">
                  ${header ? `<span class="maroon"><strong>${header}</strong></span><br />` : ``}

                    <span style="font-size:13px; line-height:16px; color:#333333;"><a href="${link}" style="text-decoration:none; color:#333333; font-family:Helvetica, sans-serif; font-size:13px; " target="_blank"><strong>${title}</strong></a></span>
                        <br />
                    ${author ? `<span style="font-size:12px; font-family:Arial, Helvetica, sans-serif; color:#333333;"><em>${author}</em></span>` : ``}
                  </td>
                </tr>
                <tr>
                  <td align="left" class="maroon" style="font-family:Helvetica, Arial, sans-serif; font-size:12px; color:#9d0707; padding-top:0px; font-style:oblique; font-weight:bold; text-decoration:none; text-transform:uppercase;">
                    <a href="${link}" style="font-family:Helvetica, sans-serif; color:#9d0707; text-decoration:none;" target="_blank"><span style="font-size:11px; line-height:14px;">▶</span> Read More </a>
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
    <td align="center" height="7"> 
    </td>
    </tr>
    <!--END ARTICLE-->
    `
  )
}

export function featured(fields) {

  let header = fields[0].value;
  let title = fields[1].value;
  let description = fields[2].value;
  let author = fields[3].value;
  let cta = fields[4].value;
  let link = fields[5].value;
  let imgSrc = fields[6].value;

  return (
    `
    <!--FEATURED GRAY BOX -->
    <tr>
      <td align="center" height="20"> 
    </td>
    <tr>
      <td align="left" height="20" style="background-color:#9d0707;  font-family:Arial, san-serif; text-transform:uppercase; font-size: 13px; line-height:16px; color:#ffffff; padding-left:10px;">
        ${header}
      </td>
    </tr>                                      
    <tr>
      <td align="center" style="padding-bottom:10px;">
        <table bgcolor="#efefef" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
              <td align="center" style="padding:10px 10px 0px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="385">
                          <tbody>
                            <tr>
                              <td align="left" style="font-size:16px;  color:#9d0707; font-family:Helvetica, Arial, sans-serif; font-size:14px; line-height:18px; padding:0px 0px;">
                                <span><a href="${link}" style="text-decoration:none; color:#000" target="_blank"><strong>${title}</strong></a></span>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style=" font-family:Helvetica, Arial, sans-serif;font-size:13px; line-height:18px; color:#333333;">
                                ${description}
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-family:Helvetica, Arial, sans-serif; font-size:12px; color:#9d0707; padding-top:0px; font-style:oblique; font-weight:bold; text-decoration:none; text-transform:uppercase; padding-bottom:10px;">
                                <a href="${link}" style="font-family:Helvetica, sans-serif; color:#9d0707; text-decoration:none;" target="_blank"><span style="font-size:11px; line-height:14px;">▶</span>${cta}</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="100">
                          <tbody>
                            <tr>
                              <td align="left" style=" padding-bottom:10px;">
                                <a href="${link}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; margin:0px; max-width:140px;" width="125" /> </a>
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
    </tr>
    <!--FEATURED GRAY BOX-->
    `
  )
}

export function end(fields) {


  let month = fields[0].value;
  let year = fields[1].value;

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


  return (`
    <!--START OF THE END-->
    <tr>
    <td align="center" height="20"> 
    </td>
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
<!--<tr>
    <td align="center" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:20px; color:#9d0707; text-transform:uppercase; font-weight:bold; padding:15px 5px 7px;">
CONNECT WITH <em>INSIDE DENTISTRY</em>
    </td>
    </tr>
    <tr>
    <td align="center" style="padding-bottom:10px; border-bottom:1px dotted #333333;">
    <table border="0" cellpadding="0" cellspacing="0">
    <tbody>
    <tr>
    <td align="center">
    <a href="https://www.facebook.com/InsideDentistry" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/60077/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
    </td>
    <td width="25"> 
    </td>
    <td align="center">
    <a href="https://twitter.com/insidedentistry" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/60078/" style="display:block; margin:0px; max-width:32px;" width="32" /> </a>
    </td>
    <td width="25"> 
    </td>
    <td align="center">
    <a href="mailto:?subject=Forward:%20Inside Dentistry%20&body=I%20thought%20you%20might%20be%20interested%20in%20this: https://www.dentalaegis.com/id/${year}/${month}/newsletter?refer=true" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/60079/" style="display:block; margin:0px; max-width:32px;" width="30" /> </a>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>-->
  
    
    <tr>
    <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px; border-bottom: #000 solid 1px;" valign="middle">
            <br>
    You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | <em>Inside Dentistry</em>.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-207852@news.aegispublications.com</a> to your address book<br />
    %%PLUGIN_UNSUBSCRIBE: 2145119-UNSUBSCRIBE%%
           <em>Inside Dentistry</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
    </tr>

    </tbody>
    </table>
    </td>
    <td bgcolor="#000000" width="1"></td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </body></html>
  `
  )
}