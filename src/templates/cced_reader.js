import _ from 'lodash';

//Auto detect the month and year for the url.  
let d = new Date();
let month = d.getMonth() + 1;
if (month < 10) { month = '0' + '' + month }

month = month.toString();
let year = d.getFullYear().toString();


export const cced_reader_forms = {
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
        label: 'Month', name: 'month', value: month,
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
        label: 'Year', name: 'year', value: year,
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
      { label: 'Subscribe Link', name: 'subscribe' },
      { label: 'Volume Number', name: 'volume' },
      { label: 'Issue Number', name: 'issue' }
    ]
  },
  ce: {
    typeOfRow: 'ce',
    header: 'CE Section',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'New CE Courses' },
      { label: 'Title', name: 'title' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
      { label: 'Author', name: 'author' },
      { label: 'Credits', name: 'credits' },
      { label: 'Cost', name: 'cost' },
      { label: 'Provider', name: 'provider' },
      { label: 'Source', name: 'source' },
      { label: 'Dates', name: 'dates' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source', name: 'imgSrc', value: 'http://placehold.it/165' }
    ]
  },
  center_banner: {
    typeOfRow: 'center_banner',
    header: 'Center Banner',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Link', name: 'link' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/600x70' },
    ]
  },
  article: {
    typeOfRow: 'article',
    header: "Article No Image",
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Header' },
      { label: 'Subheader Description (rarely used)', name: 'subheader' },
      { label: 'Title', name: 'title' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
      { label: 'Author', name: 'author' },
      { label: 'Link', name: 'link' },
    ]
  },
  dotted_line: {
    typeOfRow: 'dotted_line',
    header: 'Dotted-Line Divider',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: []
  },
  image_article: {
    typeOfRow: 'image_article',
    header: 'Article With Image',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Featured Event' },
      { label: 'Title', name: 'title' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Author', name: 'author' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/150' }
    ]
  },
  featured_article: {
    typeOfRow: 'featured_article',
    header: 'Featured Article Gray',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Featured eBook' },
      { label: 'Title', name: 'title' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Author', name: 'author' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/150' }
    ]
  },
  live_webinar: {
    typeOfRow: 'live_webinar',
    header: 'Live Webinar',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Live Webinar' },
      { label: 'Title', name: 'title' },
      { label: 'Date', name: 'date' },
      { label: 'Presenter', name: 'presenter' },
      { label: 'Credits', name: 'credits' },
      { label: 'Cost', name: 'cost' },
      { label: 'Provider', name: 'provider' },
      { label: 'Supporter', name: 'supporter' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source', name: 'imgSrc', value: 'http://placehold.it/150' }
    ]
  },
  on_demand_webinar: {
    typeOfRow: 'on_demand_webinar',
    header: 'On-Demand Webinar',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'On-Demand Webinar' },
      { label: 'Title', name: 'title' },
      { label: 'Presenter', name: 'presenter' },
      { label: 'Credits', name: 'credits' },
      { label: 'Cost', name: 'cost' },
      { label: 'Provider', name: 'provider' },
      { label: 'Supporter', name: 'supporter' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source', name: 'imgSrc', value: 'http://placehold.it/150' }
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
        label: 'Month', name: 'month', value: month,
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
        label: 'Year', name: 'year', value: year,
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

export const cced_reader_initial_state = [
  _.cloneDeep(cced_reader_forms.beginning),
  _.cloneDeep(cced_reader_forms.ce),
  _.cloneDeep(cced_reader_forms.center_banner),
  _.cloneDeep(cced_reader_forms.article),
  _.cloneDeep(cced_reader_forms.dotted_line),
  _.cloneDeep(cced_reader_forms.image_article),
  _.cloneDeep(cced_reader_forms.dotted_line),
  _.cloneDeep(cced_reader_forms.featured_article),
  _.cloneDeep(cced_reader_forms.dotted_line),
  _.cloneDeep(cced_reader_forms.live_webinar),
  _.cloneDeep(cced_reader_forms.dotted_line),
  _.cloneDeep(cced_reader_forms.on_demand_webinar),
  _.cloneDeep(cced_reader_forms.on_demand_webinar),
  _.cloneDeep(cced_reader_forms.dotted_line),
  _.cloneDeep(cced_reader_forms.end)
];

export function beginning(fields) {

  let emailName = fields[0].value;
  let month = fields[1].value;
  let year = fields[2].value;
  let mastheadLink = fields[3].value;
  let mastheadSrc = fields[4].value;
  let subscribe = fields[5].value;
  let volume = fields[6].value;
  let issue = fields[7].value;

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
  let url = `https://www.aegisdentalnetwork.com/cced/${year}/${month}/newsletter`;

  return `<!DOCTYPE html>
  <html>
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="width=device-width" name="viewport">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
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
       text-decoration: none !important;
    }
  
    .black a, .black a:link, .black a:active, .black a:visited {
       color: #000000 !important;
       text-decoration: none !important;
    }
  
    .grey a, .grey a:link, .grey a:active, .grey a:visited {
       color: #6d6f72 !important;
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
  
    table.w600 {
       width: 100% !important;
       height: auto !important;
       min-width: 100% !important;
    }
  
    table.w100, td.w100, img.w100 {
       width: 100% !important;
       height: auto !important;
    }
  
    .w28 {
       width: 15px !important;
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
  
    .f14 {
       font-size: 13px !important;
       line-height: 18px !important;
    }
  
    .hide {
       display: none!important;
    }
  
    .menu {
       padding: 7px 3px !important;
       font-size: 8px !important;
       line-height: 11px !important;
    }
  
    }
  
    </style><!--[if gte mso 9]>
  <style type="text/css">
  body, p, a, span, td, table {
   font-family:Arial, Helvetica, sans-serif !important;
  }
  
  </style>
  
  <![endif]-->
  </head>
  <body bgcolor="#FFFFFF">
  <!-- g-link -->	
  <a href="https://www.dentalaegis.com/cced/" target="_blank"></a>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="5"></td>
              <td align="center">
                <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="center" height="20"></td>
                  </tr>
                  <tr>
                    <td align="center">
                      <table border="0" cellpadding="0" cellspacing="0" class="w600" style="min-width:600px; border:1px solid #000000;" width="600">
                        <tr>
                          <td align="center" height="20" style="font-family:Arial, Helvetica, sans-serif; font-size:9px; line-height:10px; color:#6d6f72; text-transform:uppercase;">Having trouble viewing this email? <span class="grey"><a href="https://www.dentalaegis.com/cced/${year}/${month}/newsletter" style="color:#ffffff; text-decoration:none;" target="_blank">Click here.</a></span></td>
                        </tr>
                        <tr>
                          <td align="center"><a href="${mastheadLink}" target="_blank"><img alt="" border="0" class="w100" src="${mastheadSrc}" style="display:block; margin:0px; max-width:600px;" width="600"></a></td>
                        </tr>
                        <tr>
                          <td align="center"><img alt="" border="0" class="w100" src="http://aegispublications.com/news/cced/2017/dash-3.jpg" style="display:block; margin:0px; max-width:600px;" width="600"></td>
                        </tr>
                        <tr>
                          <td align="center">
                            <center>
                              <a href="http://www.dentalaegis.com/cced" target="_blank"><img alt="" border="0" src="https://www.dentalaegis.com/media/59468/" style="display:block; margin:0px; max-width:300px; width: 100%"></a>
                            </center>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" bgcolor="#9C8C30" class="f14" style="background-color:#9c8c30; color:#ffffff; margin:0px; padding: 7px 0px; font-size:14px; font-family:'Times New Roman', Times, serif; border-bottom:2px solid #ffffff;"><a href="http://www.dentalaegis.com/cced/${year}/${month}" style="text-decoration: none; color:#ffffff">${monthName} ${year} | Vol. ${volume} No. ${issue}</a> | <span class="hide"><a href="http://www.dentalaegis.com/cced/" style="text-decoration: none; color:#ffffff">compendiumlive.com</a> |</span> <a href="mailto:?subject=FW:%20${monthName}%20${year}%20Issue%20Available%20Now&body=I%20thought%20you%20might%20be%20interested%20in%20this:%20https://www.dentalaegis.com/cced/${year}/${month}/newsletter?refer=true" style="text-decoration: none; color:#ffffff">Forward to a Colleague</a></td>
                        </tr>
                        <tr>
                          <td align="center" bgcolor="#8E682A" style="background-color:#8E682A;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td align="center" class="menu" style="color:#fff; font-size:12px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:10px 8px 10px 19px; border-right:1px solid #775623;"><a href="http://www.dentalaegis.com/cced/${year}/${month}/" style=" text-decoration:none; color:#ffffff" target="_blank">Articles</a></td>
                                <td align="center" class="menu" style="color:#fff; font-size:12px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:10px 8px; border-right:1px solid #775623;"><a href="http://www.dentalaegis.com/cced/archive" style=" text-decoration:none; color:#ffffff" target="_blank">Archive</a></td>
                                <td align="center" class="menu" style="color:#fff; font-size:12px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:10px 7px; border-right:1px solid #775623;"><a href="http://cced.cdeworld.com/" style=" text-decoration:none; color:#ffffff" target="_blank">ce</a></td>
                                <td align="center" class="menu" style=" color:#fff; font-size:12px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:10px 6px; border-right:1px solid #775623;"><a href="http://www.dentalaegis.com/cced/webinars" style=" text-decoration:none; color:#ffffff" target="_blank">webinars</a></td>
                                <td align="center" class="menu" style=" color:#fff; font-size:12px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:10px 8px; border-right:1px solid #775623;"><a href="http://www.dentalaegis.com/news" style=" text-decoration:none; color:#ffffff" target="_blank">news</a></td>
                                <td align="center" class="menu" style="color:#fff; font-size:12px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:10px 5px; border-right:1px solid #775623;"><a href="${subscribe}" style=" text-decoration:none; color:#ffffff" target="_blank">subscribe</a></td>
                                <td align="center" class="menu" style="color:#fff; font-size:12px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:10px 20px 10px 8px;"><a href="http://www.dentalaegis.com/cced/${year}/${month}/digital" style=" text-decoration:none; color:#ffffff" target="_blank">Digital Edition</a></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td align="center"><img alt="" border="0" class="w100" src="http://aegispublications.com/news/cced/2017/dash-3.jpg" style="display:block; margin:0px; max-width:600px;" width="600"></td>
                        </tr><!--END OF BEGINNING -->                  
  `
}

export function ce(fields) {
  let header = fields[0].value;
  let title = fields[1].value;
  let description = fields[2].value;
  let author = fields[3].value;
  let credits = fields[4].value;
  let cost = fields[5].value;
  let provider = fields[6].value;
  let source = fields[7].value;
  let dates = fields[8].value;
  let link = fields[9].value;
  let imgSrc = fields[10].value;

  return (
    `
    <!--START CE -->
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td class="w28" width="28"></td>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" height="20"></td>
                </tr>
                <tr>
                  <td align="left" style="font-size: 20px; line-height:22px; font-family:Georgia, 'Times New Roman', Times, serif; font-weight: normal; color: #000000;">${header}</td>
                </tr>
                <tr>
                  <td align="center">
                    <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="345">
                      <tr>
                        <td align="center" height="12" style="font-size:12px; line-height:12px;"></td>
                      </tr>
                      <tr>
                        <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#4c4c4c; font-size:14px; line-height:16px;"><a href="${link}" style="text-decoration:none; color:#4c4c4c;" target="blank"><strong>${title}</strong></a><br>
                       ${description}<br>
                        <em>${author}</em><br>
                        <br>
                        <strong>Credits:</strong> ${credits}<br>
                        <strong>Cost:</strong> ${cost}<br>
                        <strong>Provider:</strong> ${provider}<br>
                        <strong>Source:</strong> <em>${source}</em><br>
                        <strong>Dates:</strong> ${dates}</td>
                      </tr>
                      <tr>
                        <td align="left" class="golden" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#9c8d30; text-transform:uppercase; font-weight:bold;"><a href="${link}" style="color:#9c8d30; text-decoration:none;" target="_blank">VIEW COURSE</a></td>
                      </tr>
                    </table>
                    <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="165">
                      <tr>
                        <td align="center">
                          <table align="left" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                            </tr>
                            <tr>
                              <td align="center" valign="top"><a href="${link}" target="_blank"><img alt="" border="0" src="${imgSrc}" style="display:block; max-width:165px; width:165px;" width="165"></a></td>
                            </tr>
                            <tr>
                              <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" class="hide" height="20"></td>
                </tr>													
              </table>
            </td>
            <td class="w28" width="28"></td>
          </tr>
        </table>
      </td>
    </tr>
    <!--END CE SECTION-->   
    `
  )
}

export function center_banner(fields) {

  let link = fields[0].value;
  let imgSrc = fields[1].value;
  return (
    `       <!--CENTER BANNER AD-->
    <tr>
      <td align="center" style="padding-bottom:10px;"><img alt="" border="0" class="w100" src="http://aegispublications.com/news/cced/2017/dash-3.jpg" style="display:block; margin:0px; max-width:600px;" width="600"></td>
    </tr>
    <tr>
      <td align="center" style=" border:1px solid #aaaaaa;"><a href="${link}" target="_blank"><img alt="" border="0" class="w100" src="${imgSrc}" style="display:block; margin:0px; max-width:600px;" width="600"></a></td>
    </tr>
    <tr>
      <td align="center" style="padding-top:10px;"><img alt="" border="0" class="w100" src="http://aegispublications.com/news/cced/2017/dash-3.jpg" style="display:block; margin:0px; max-width:600px;" width="600"></td>
    </tr>
            <!--END CENTER BANNER AD-->`
  )
}

export function article(fields) {

  let header = fields[0].value;
  let subheader = fields[1].value;
  let title = fields[2].value;
  let description = fields[3].value;
  let author = fields[4].value;
  let link = fields[5].value;

  return (
    `<!--ARTICLE-->
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td class="w28" width="28"></td>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">

                ${header ? `      
              <tr>
                <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
              </tr>          
              <tr>
                <td align="left" style="font-size: 20px; line-height:22px; font-family:Georgia, 'Times New Roman', Times, serif; font-weight: normal; color: #000000;">${header}</td>
              </tr>
              <tr>
                <td align="center" height="12" style="font-size:12px; line-height:12px;"></td>
              </tr>`: ``}

              ${subheader ? `
            <!--OPTIONAL SUB-HEADER-->
              <tr>
                <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#4c4c4c; font-size:14px; line-height:16px; padding-bottom:10px;">${subheader}</td>
              </tr>
            <!--END OPTIONAL SUB-HEADER-->` : ``}

                <tr>
                  <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#4c4c4c; font-size:14px; line-height:16px;"><strong><a href="${link}" style="text-decoration:none; color:#4c4c4c" target="blank">${title}</a></strong><br>
                  ${description ? `${description}<br />` : ``}
                  ${author ? `
                  <em>${author}</em>` :
      ``}

                  
                  </td>
                </tr>
                <tr>
                  <td align="left" class="golden" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#9c8d30; text-transform:uppercase; font-weight:bold;"><a href="${link}" style="text-decoration:none; color:#9c8d30;" target="_blank">READ MORE</a></td>
                </tr>
                <tr>
                  <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                </tr>
              </table>
            </td>
            <td class="w28" width="28"></td>
          </tr>
        </table>
      </td>
    </tr>
<!--END ARTICLE-->`
  )
}

export function dotted_line(fields) {
  return (
    `<!--DOTTED LINE-->
    <tr>
      <td align="center"><img alt="" border="0" class="w100" src="http://aegispublications.com/news/cced/2017/dash-3.jpg" style="display:block; margin:0px; max-width:600px;" width="600"></td>
    </tr>
    <!--END DOTTED LINE -->    
`
  )
}

export function image_article(fields) {

  let header = fields[0].value;
  let title = fields[1].value;
  let description = fields[2].value;
  let author = fields[3].value;
  let link = fields[4].value;
  let imgSrc = fields[5].value;

  return (
    `
    <!--START IMAGE ARTICLE -->
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td class="w28" width="28"></td>
            <td align="center">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                </tr>
                <tr>
                  <td align="left" style="font-size: 20px; line-height:22px; font-family:Georgia, 'Times New Roman', Times, serif; font-weight: normal; color: #000000;">${header}</td>
                </tr>
                <tr>
                  <td align="center">
                    <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="355">
                      <tr>
                        <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                      </tr>
                      <tr>
                        <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#4c4c4c; font-size:14px; line-height:16px;"><strong><a href="${link}" style="text-decoration:none; color:#4c4c4c" target="blank">${title}</a></strong><br>
                        ${description}<br></td>
                      </tr>
                      <tr>
                        <td align="left" class="golden" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#9c8d30; text-transform:uppercase; font-weight:bold;"><a href="${link}" style="text-decoration:none; color:#9c8d30;" target="_blank">LEARN NOW</a></td>
                      </tr>
                      <tr>
                        <td align="center" class="hide" height="15" style="font-size:15px; line-height:15px;"></td>
                      </tr>
                    </table>
                    <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="120">
                      <tr>
                        <td align="center">
                          <table align="left" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                            </tr>
                            <tr>
                              <td align="center" valign="top"><a href="${link}" target="_blank"><img alt="" border="0" src="${imgSrc}" style="display:block; max-width:120px; width:120px;" width="120"></a></td>
                            </tr>
                            <tr>
                              <td align="center" height="20"></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td class="w28" width="28"></td>
          </tr>
        </table>
      </td>
    </tr>
    <!--END IMAGE ARTICLE -->`
  )
}

export function featured_article(fields) {


  let header = fields[0].value;
  let title = fields[1].value;
  let description = fields[2].value;
  let author = fields[3].value;
  let link = fields[4].value;
  let imgSrc = fields[5].value;

  return (`
  <tr bgcolor="#EFEFEF">
  <td align="center">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td class="w28" width="28"></td>
        <td align="center">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
            </tr>
            <tr>
              <td align="left" style="font-size: 20px; line-height:22px; font-family:Georgia, 'Times New Roman', Times, serif; font-weight: normal; color: #000000;">${header}</td>
            </tr>
            <tr>
              <td align="center">
                <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="355">
                  <tr>
                    <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                  </tr>
                  <tr>
                    <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#4c4c4c; font-size:14px; line-height:16px;"><strong><a href="${link}" style="text-decoration:none; color:#4c4c4c" target="blank">${title}</a></strong><br>
                    ${description ? `${description}<br>` : ``}
                    ${author ? `<em>${author}</em>` : ``}</td>
                  </tr>
                  <tr>
                    <td align="left" class="golden" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#9c8d30; text-transform:uppercase; font-weight:bold;"><a href="${link}" style="text-decoration:none; color:#9c8d30;" target="_blank">DOWNLOAD NOW</a></td>
                  </tr>
                  <tr>
                    <td align="center" class="hide" height="15" style="font-size:15px; line-height:15px;"></td>
                  </tr>
                </table>
                <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="120">
                  <tr>
                    <td align="center">
                      <table align="left" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                        </tr>
                        <tr>
                          <td align="center" valign="top"><a href="${link}" target="_blank"><img alt="" border="0" src="${imgSrc}" style="display:block; max-width:120px; width:120px;" width="120"></a></td>
                        </tr>
                        <tr>
                          <td align="center" height="20"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <td class="w28" width="28"></td>
      </tr>
    </table>
  </td>
</tr>
  `)
}

export function live_webinar(fields) {

  let header = fields[0].value;
  let title = fields[1].value;
  let date = fields[2].value;
  let presenter = fields[3].value;
  let credits = fields[4].value;
  let cost = fields[5].value;
  let provider = fields[6].value;
  let supporter = fields[7].value;
  let link = fields[8].value;
  let imgSrc = fields[9].value;

  return (
    `<tr>
    <td align="center">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td class="w28" width="28"></td>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
            ${header ? `              
          <tr>
            <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
          </tr>
          <tr>
            <td align="left" style="font-size: 20px; line-height:22px; font-family:Georgia, 'Times New Roman', Times, serif; font-weight: normal; color: #000000;">${header}</td>
          </tr>`: ``}

              <tr>
                <td align="center">
                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="355">
                    <tr>
                      <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                    </tr>
                    <tr>
                      <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#4c4c4c; font-size:14px; line-height:16px;"><strong><a href="${link}" style="text-decoration:none; color:#4c4c4c" target="blank">${title}</a></strong><br>
                      <strong>When:</strong> ${date}<br>
                      <strong>Presenter:</strong> ${presenter}<br>
                      <strong>Credits:</strong> ${credits}<br>
                      <strong>Cost:</strong> ${cost}<br>
                      <strong>Provider:</strong> ${provider}<br>
                      <strong>Commercial Supporter:</strong> <em>${supporter}</em></td>
                    </tr>
                    <tr>
                      <td align="left" class="golden" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#9c8d30; text-transform:uppercase; font-weight:bold;"><a href="${link}" style="text-decoration:none; color:#9c8d30;" target="_blank">REGISTER TODAY</a></td>
                    </tr>
                    <tr>
                      <td align="center" class="hide" height="15" style="font-size:15px; line-height:15px;"></td>
                    </tr>
                  </table>
                  <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="120">
                    <tr>
                      <td align="center">
                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top"><a href="${link}" target="_blank"><img alt="" border="0" src="${imgSrc}" style="display:block; max-width:120px; width:120px;" width="120"></a></td>
                          </tr>
                          <tr>
                            <td align="center" height="20"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td class="w28" width="28"></td>
        </tr>
      </table>
    </td>
  </tr>`
  )
}
export function on_demand_webinar(fields) {

  let header = fields[0].value;
  let title = fields[1].value;
  let presenter = fields[2].value;
  let credits = fields[3].value;
  let cost = fields[4].value;
  let provider = fields[5].value;
  let supporter = fields[6].value;
  let link = fields[7].value;
  let imgSrc = fields[8].value;

  return (
    `<tr>
    <td align="center">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td class="w28" width="28"></td>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
            ${header ? `              
            <tr>
              <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
            </tr>
            <tr>
              <td align="left" style="font-size: 20px; line-height:22px; font-family:Georgia, 'Times New Roman', Times, serif; font-weight: normal; color: #000000;">${header}</td>
            </tr>`: ``}
              <tr>
                <td align="center">
                  <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="355">
                    <tr>
                      <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                    </tr>
                    <tr>
                      <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#4c4c4c; font-size:14px; line-height:16px;"><strong><a href="${link}" style="text-decoration:none; color:#4c4c4c" target="blank">${title}</a></strong><br>
                      <strong>Presenter:</strong> ${presenter}<br>
                      <strong>Credits:</strong> ${credits}<br>
                      <strong>Cost:</strong> ${cost}<br>
                      <strong>Provider:</strong> ${provider}<br>
                      <strong>Commercial Supporter:</strong> <em>${supporter}</em></td>
                    </tr>
                    <tr>
                      <td align="left" class="golden" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#9c8d30; text-transform:uppercase; font-weight:bold;"><a href="${link}" style="text-decoration:none; color:#9c8d30;" target="_blank">REGISTER TODAY</a></td>
                    </tr>
                    <tr>
                      <td align="center" height="15" style="font-size:15px; line-height:15px;"></td>
                    </tr>
                  </table>
                  <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="120">
                    <tr>
                      <td align="center">
                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="center" height="15" style="font-size:15px; line-height:20px;"></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top"><a href="${link}" target="_blank"><img alt="" border="0" src="${imgSrc}" style="display:block; max-width:120px; width:120px;" width="120"></a></td>
                          </tr>
                          <tr>
                            <td align="center" height="12" style="font-size:12px; line-height:12px;"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td class="w28" width="28"></td>
        </tr>
      </table>
    </td>
  </tr>`
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
  //put the url together
  let url = `https://www.aegisdentalnetwork.com/cced/${year}/${month}/newsletter`;

  return (
    `<tr>
    <td align="center">
      <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #989797;" width="100%">
        <tr>
          <td width="20"></td>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td align="center" style="font-family:Arial, sans-serif; font-size:13px; line-height:16px; color:#9c8d30; text-align:center; text-transform:uppercase; font-weight:bold; padding:15px 0px 10px;">Connect with <em>Compendium</em></td>
              </tr>
              <tr>
                <td align="center" style="padding-bottom:10px;">
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center"><a href="https://www.facebook.com/CompendiumDentistry" target="_blank"><img alt="" border="0" src="https://www.dentalaegis.com/media/59473/" style="display:block; margin:0px; max-width:32px;" width="32"></a></td>
                      <td width="23"></td>
                      <td align="center"><a href="https://twitter.com/compendiumced" target="_blank"><img alt="" border="0" src="https://www.dentalaegis.com/media/59474/" style="display:block; margin:0px; max-width:32px;" width="32"></a></td>
                      <td width="23"></td>
                      <td align="center"><a href="mailto:?subject=FW:%20${monthName}%20${year}%20Issue%20Available%20Now&body=I%20thought%20you%20might%20be%20interested%20in%20this:%20https://www.dentalaegis.com/cced/${year}/${month}/newsletter?refer=true" target="_blank"><img alt="" border="0" src="https://www.dentalaegis.com/media/59475/" style="display:block; margin:0px; max-width:31px;" width="31"></a></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td width="20"></td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td align="center" height="10"></td>
  </tr>

  <tr>
    <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
          <br>
  You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | <em>Compendium</em>.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-207852@news.aegispublications.com</a> to your address book<br />
  %%PLUGIN_UNSUBSCRIBE: 1089099-CCED UNSUBSCRIBE%%
         <em>Compendium</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
</tr>
</table>
</td>
</tr>
<tr>
<td align="center" height="20"></td>
</tr>
</table>
</td>
<td width="5"></td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`
  )
}