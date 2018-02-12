import _ from 'lodash';

//Auto detect the month and year for the url.  
let d = new Date();
let month = d.getMonth() + 1;
if (month < 10) { month = '0' + '' + month }

month = month.toString();
let year = d.getFullYear();


export const cdew_dds_forms = {
  beginning: {
    typeOfRow: 'beginning',
    header: 'Beginning Section',
    closable: false,
    switchable: false,
    addable: true,
    draggable: false,
    fields: [
      { label: 'Email Name', name: 'emailName', value: 'ce3' },
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
      { label: 'Subscribe Link', name: 'subscribe' }
    ]
  },
  live_webinar_w_header: {
    typeOfRow: 'live_webinar_w_header',
    header: 'Live Webinar w/ Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Upcoming Live Webinar' },
      { label: 'Title', name: 'title' },
      { label: 'Date', name: 'date' },
      { label: 'Presenter', name: 'presenter' },
      { label: 'Provider', name: 'provider' },
      { label: 'Commercial Supporter', name: 'supporter' },
      { label: 'Cost', name: 'cost' },
      { label: 'Credits', name: 'credits' },
      { label: 'Link', name: 'link' }
    ]
  },
  live_webinar_wo_header: {
    typeOfRow: 'live_webinar_wo_header',
    header: 'Live Webinar w/o Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Title', name: 'title' },
      { label: 'Date', name: 'date' },
      { label: 'Presenter', name: 'presenter' },
      { label: 'Provider', name: 'provider' },
      { label: 'Commercial Supporter', name: 'supporter' },
      { label: 'Cost', name: 'cost' },
      { label: 'Credits', name: 'credits' },
      { label: 'Link', name: 'link' }
    ]
  },
  on_demand_webinar_w_header: {
    typeOfRow: 'on_demand_webinar_w_header',
    header: 'On-Demand Webinar w/ Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Featured On-Demand Webinars' },
      { label: 'Title', name: 'title' },
      { label: 'Presenter', name: 'presenter' },
      { label: 'Provider', name: 'provider' },
      { label: 'Commercial Supporter', name: 'supporter' },
      { label: 'Cost', name: 'cost' },
      { label: 'Credits', name: 'credits' },
      { label: 'Link', name: 'link' }
    ]
  },
  on_demand_webinar_wo_header: {
    typeOfRow: 'on_demand_webinar_wo_header',
    header: 'On-Demand Webinar w/o Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Title', name: 'title' },
      { label: 'Presenter', name: 'presenter' },
      { label: 'Provider', name: 'provider' },
      { label: 'Commercial Supporter', name: 'supporter' },
      { label: 'Cost', name: 'cost' },
      { label: 'Credits', name: 'credits' },
      { label: 'Link', name: 'link' }
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
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/600x70' },
    ]
  },
  new_content_w_header: {
    typeOfRow: 'new_content_w_header',
    header: 'New Content w/ Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Featured CE Courses - New Content Added' },
      { label: 'Title', name: 'title' },
      { label: 'Presenter', name: 'presenter' },
      { label: 'Provider', name: 'provider' },
      { label: 'Source', name: 'source' },
      { label: 'Cost', name: 'cost' },
      { label: 'Credits', name: 'credits' },
      { label: 'Link', name: 'link' }
    ]
  },
  new_content_wo_header: {
    typeOfRow: 'new_content_wo_header',
    header: 'New Content Without Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Title', name: 'title' },
      { label: 'Presenter', name: 'presenter' },
      { label: 'Provider', name: 'provider' },
      { label: 'Source', name: 'source' },
      { label: 'Cost', name: 'cost' },
      { label: 'Credits', name: 'credits' },
      { label: 'Link', name: 'link' }
    ]
  },
  end_new_content: {
    typeOfRow: 'end_new_content',
    header: 'End of New Content',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: []
  },
  ebook: {
    typeOfRow: 'ebook',
    header: 'eBook',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Title', name: 'title' },
      { label: 'author', name: 'author' },
      { label: 'Commercial Supporter', name: 'supporter' },
      { label: 'Cost', name: 'cost' },
      { label: 'Source', name: 'source' },
      { label: 'Credits', name: 'credits' },
      { label: 'Description', name: 'description' },
      { label: 'Link', name: 'link' },
      { label: 'Image Link Source', name: 'imgSrc', value: 'http://placehold.it/155x180' }
    ]
  },
  portal_partner: {
    typeOfRow: 'portal_partner',
    header: 'Portal Partner',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Title', name: 'title' },
      { label: 'Presenter', name: 'presenter' },
      { label: 'Provider', name: 'provider' },
      { label: 'Source', name: 'source' },
      { label: 'Cost', name: 'cost' },
      { label: 'Credits', name: 'credits' },
      { label: 'Link', name: 'link' },
      { label: 'Partner Logo Source', name: 'imgSrc' },
      { label: 'Brand Link', name: 'brandLink' },
    ]
  },
  featured_event: {
    typeOfRow: 'featured_event',
    header: 'Featured Event',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'Featured Event' },
      { label: 'Title', name: 'title' },
      { label: 'Description', name: 'description' },
      { label: 'Location', name: 'location' },
      { label: 'Date', name: 'date' },
      { label: 'Credits', name: 'credits' },
      { label: 'Call-to-Action', name: 'cta', value: 'Learn More & Register here!' },
      { label: 'Link', name: 'link' },
      { label: 'Event Image Source', name: 'imgSrc', value: 'http://placehold.it/150x150' }
    ]
  },
  border: {
    typeOfRow: 'border',
    header: 'Border',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: []
  },
  end: {
    typeOfRow: 'end',
    header: 'End of the Email',
    closable: false,
    switchable: false,
    addable: false,
    draggable: true,
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
      },
    ]
  }
}

export const cdew_dds_initial_state = [
  _.cloneDeep(cdew_dds_forms.beginning),
  _.cloneDeep(cdew_dds_forms.live_webinar_w_header),
  _.cloneDeep(cdew_dds_forms.live_webinar_wo_header),
  _.cloneDeep(cdew_dds_forms.on_demand_webinar_w_header),
  _.cloneDeep(cdew_dds_forms.on_demand_webinar_wo_header),
  _.cloneDeep(cdew_dds_forms.center_banner),
  _.cloneDeep(cdew_dds_forms.new_content_w_header),
  _.cloneDeep(cdew_dds_forms.new_content_wo_header),
  _.cloneDeep(cdew_dds_forms.end_new_content),
  _.cloneDeep(cdew_dds_forms.ebook),
  _.cloneDeep(cdew_dds_forms.portal_partner),
  _.cloneDeep(cdew_dds_forms.featured_event),
  _.cloneDeep(cdew_dds_forms.border),
  _.cloneDeep(cdew_dds_forms.end)
];

export function beginning(fields) {
  let emailName = fields[0].value.trim().replace(/\s+/g, '-').toLowerCase();
  let month = fields[1].value;
  let year = fields[2].value;
  let mastheadLink = fields[3].value;
  let mastheadSrc = fields[4].value;
  let subscribe = fields[5].value;

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
  //let url = `https://www.aegisdentalnetwork.com/cced/${year}/${month}/newsletter/${topic.trim().replace(/\s+/g, '-').toLowerCase()}`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  <title>New CE Opportunities for Dentists</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
  .white1 a, .white1 a:link, .white1 a:active, .white1 a:visited {
    color: #FFFFFF !important;
    text-decoration: underline !important;
  }
  .blue a, .blue a:link, .blue a:active, .blue a:visited {
    color: #2f84c0 !important;
    text-decoration: underline !important;
  }
  .blue1 a, .blue1 a:link, .blue1 a:active, .blue1 a:visited {
    color: #2f84c0 !important;
    text-decoration: none !important;
  }
  .black a, .black a:link, .black a:active, .black a:visited {
    color: #333333 !important;
    text-decoration: none !important;
  }
  .grey a, .grey a:link, .grey a:active, .grey a:visited {
    color: #818181 !important;
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
  table.w662 {
    width: 100% !important;
    height: auto !important;
    min-width: 100% !important;
  }
  table.w100, td.w100, img.w100 {
    width: 100% !important;
    height: auto !important;
  }
  .w420 {
    width: 192px !important;
    height: auto !important;
  }
  .w170 {
    width: 91px !important;
    height: auto !important;
  }
  .padL {
    padding-left: 10px !important;
  }
  .w20 {
    width: 8px !important;
    height: auto !important;
  }
  .w35 {
    width: 5px !important;
    height: auto !important;
  }
  .menu {
    font-size: 12px !important;
    line-height: 14px !important;
  }
  .f12 {
    font-size: 11px !important;
    line-height: 14px !important;
    padding-left: 5px !important;
  }
  .f26 {
    font-size: 23px !important;
    line-height: 26px !important;
  }
  .center {
    text-align: center !important;
  }
  }
  </style>
  <!--[if gte mso 9]>
  <![endif]-->
  </head>
  
  <body bgcolor="#f9f6f1">
  <!-- g-link -->	
  <a href="http://www.cdeworld.com" target="_blank"></a>
  <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#f9f6f1">
    <tr>
      <td align="center"> <table cellpadding="0" cellspacing="0" border="0" width="662" style="min-width:662px;" class="w662">
          <tr>
            <td height="20" align="center"></td>
          </tr>
          <tr>
            <td align="center" style="padding:0px 10px;"><a href="${mastheadLink}" target="_blank"> <img src="${mastheadSrc}" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100"/> </a></td>
          </tr>
          <tr>
            <td height="20" align="center"></td>
          </tr>
          <tr>
            <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ffffff" style="border:solid 1px #EAE9E2;">
                <tr>
                  <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td width="20"></td>
                        <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                              <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
                                  <tr>
                                    <td style="padding:12px 0 0;"><a href="http://www.cdeworld.com" target="_blank"><img src="http://aegispublications.com/news/cdeworld/2017/logos/cdew-logo.jpg" width="420" height="85" alt="" border="0" class="w420"></a></td>
                                    <td width="170" style="padding-left: 20px;" class="padL"><a href="http://aegispublications.com/machform/view.php?id=77" target="_blank"><img src="https://www.dentalaegis.com/media/60260/" border="0" style="height:45px; width:170px;" width="170" class="w170"></a></td>
                                  </tr>
                                </table></td>
                            </tr>
                            <tr>
                              <td height="20" align="center"></td>
                            </tr>
                          </table></td>
                        <td width="20"></td>
                      </tr>
                    </table></td>
                </tr>
                <tr>
                  <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td width="30" class="w20"></td>
                        <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                              <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#2f84c0">
                                  <tr>
                                    <td align="center" class="f12" height="50" valign="middle" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; color:#ffffff;"><span class="white">${monthName} ${year}</span> | <span class="white1"> <a href="http://www.cdeworld.com" target="_blank" style="color:#ffffff;">Visit Our Website</a></span> | <span class="white1"><a href="http://aegispublications.com/news/ce/${year}/${month}/dds.html" target="_blank" style="color:#ffffff;">Read Online</a></span> | <span class="white1"><a href="mailto:?subject=FW: Dentist News&amp;body=I thought you might be interested in this: http://aegispublications.com/news/ce/${year}/${month}/dds.html" target="_blank" style="color:#ffffff;">Forward&nbsp;to&nbsp;a&nbsp;Colleague</a></span></td>
                                    <td width="25"><a href="https://www.facebook.com/CDEWorldDentistry/" target="_blank"> <img src="https://www.dentalaegis.com/media/60261/" alt="" border="0" style="display:block; margin:0px; max-width:25px;" width="25"/> </a></td>
                                    <td width="25"><a href="https://twitter.com/CDEWorld" target="_blank"> <img src="https://www.dentalaegis.com/media/60286/" alt="" border="0" style="display:block; margin:0px; max-width:25px;" width="25"/> </a></td>
                                    <td width="35" class="w35"></td>
                                  </tr>
                                </table></td>
                            </tr>
                            <tr>
                              <td align="center" bgcolor="#2469AA"><table align="center" width="100%">
                                  <tr>
                                    <td align="center" height="30" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:18px; color:#fffff;border-right:1px solid #315D86; text-transform:uppercase;" class="menu"><span class="white"><a href="https://cdeworld.com/courses/search?c=279" target="_blank" style=" color:#ffffff; text-decoration:none;">Courses</a></span></td>
                                    <td align="center" height="30" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:18px; color:#fffff;border-right:1px solid #315D86; text-transform:uppercase;" class="menu"><span class="white"><a href="https://cdeworld.com/events" target="_blank" style=" color: #ffffff; text-decoration:none;">Events</a></span></td>
                                    <td align="center" height="30" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:18px; color:#fffff;border-right:1px solid #315D86; text-transform:uppercase;" class="menu"><span class="white"><a href="https://cdeworld.com/webinars/search?c=279" target="_blank" style=" color: #ffffff;text-decoration:none;">Webinars</a></span></td>
                                    <td align="center" height="30" style="font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:18px; color:#fffff;text-transform:uppercase;" class="menu"><span class="white"><a href="https://cdeworld.com/ebooks" target="_blank" style=" color: #ffffff; text-decoration:none;">eBooks</a></span></td>
                                  </tr>
                                </table></td>
                            </tr>
                            <tr>
                              <td height="30" align="center"></td>
                            </tr>
                            <tr>
                              <td align="center" class="f26" style="font-family:Arial, Helvetica, sans-serif; font-size:21px; line-height:30px; font-weight:bold; color:#333333; padding-bottom:10px;">New CE Opportunities for Dentists | ${monthName} ${year}</td>
                            </tr>
                            <tr>
                              <td align="center" style="font-family:Georgia, 'Times New Roman', Times, serif; font-size:16px; line-height:18px; color:#333333;">CDEWorld, your partner in continuing education, has created and curated new CE opportunities to fit into your busy schedule. Explore our newest CE courses below.</td>
                            </tr>
    <!--END OF BEGINNING-->`
}

export function live_webinar_w_header(fields) {
  let header = fields[0].value;
  let title = fields[1].value;
  let date = fields[2].value;
  let presenter = fields[3].value;
  let provider = fields[4].value;
  let supporter = fields[5].value;
  let cost = fields[6].value;
  let credits = fields[7].value;
  let link = fields[8].value;

  return (
    `<!--LIVE WEBINAR WITH HEADER-->
    <tr>
      <td height="30" align="center"></td>
    </tr>
<tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:18px; color:#333333; font-weight:bold;">${header}</td>
    </tr>
    <tr>
      <td height="20" align="center"></td>
    </tr>

<tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:22px; color:#333333;"><strong>${title}</strong><br />
        <span class="black">${date}</span></td>
    </tr>
    <tr>
      <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center"><table cellpadding="0" cellspacing="0" border="0" align="left" class="w100" width="305">
                <tr>
                  <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333; width:305"> Presenter: ${presenter}<br>
                    Provider: ${provider}<br>
                    Commercial Supporter: <em>${supporter}</em></td>
                </tr>
              </table>
              
              <!--[if gte mso 9]>
              </td>
              <td align="center"  valign="top">
<![endif]-->
              
              <table cellpadding="0" cellspacing="0" border="0" width="265" align="left" style="margin:0 0 0 14px;" class="w100">
                <tr>
                  <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;">Cost: ${cost}<br />
                    Credits: ${credits}</td>
                </tr>
              </table></td>
          </tr>
        </table></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#2f84c0; padding-top:15px;"><a href="https://cdeworld.com/webinars/register/20856" target="_blank" style="color:#2f84c0; text-decoration:underline;">REGISTER HERE</a></td>
    </tr>
    <!--END LIVE WEBINAR WITH HEADER -->`
  )
}

export function live_webinar_wo_header(fields) {
  let title = fields[0].value;
  let date = fields[1].value;
  let presenter = fields[2].value;
  let provider = fields[3].value;
  let supporter = fields[4].value;
  let cost = fields[5].value;
  let credits = fields[6].value;
  let link = fields[7].value;
  return (
    `
    <!--LIVE WEBINAR WITHOUT HEADER-->
    <tr>
      <td height="20" align="center"></td>
    </tr>

<tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:22px; color:#333333;"><strong>${title}</strong><br />
        <span class="black">${date}</span></td>
    </tr>
    <tr>
      <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center"><table cellpadding="0" cellspacing="0" border="0" align="left" class="w100" width="305">
                <tr>
                  <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333; width:305"> Presenter: ${presenter}<br>
                    Provider: ${provider}<br>
                    Commercial Supporter: <em>${supporter}</em></td>
                </tr>
              </table>
              
              <!--[if gte mso 9]>
              </td>
              <td align="center"  valign="top">
<![endif]-->
              
              <table cellpadding="0" cellspacing="0" border="0" width="265" align="left" style="margin:0 0 0 14px;" class="w100">
                <tr>
                  <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;">Cost: ${cost}<br />
                    Credits: ${credits}</td>
                </tr>
              </table></td>
          </tr>
        </table></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#2f84c0; padding-top:15px;"><a href="${link}" target="_blank" style="color:#2f84c0; text-decoration:underline;">REGISTER HERE</a></td>
    </tr>
    <!--END LIVE WEBINAR-->`
  )
}

export function on_demand_webinar_w_header(fields) {
  let header = fields[0].value;
  let title = fields[1].value;
  let presenter = fields[2].value;
  let provider = fields[3].value;
  let supporter = fields[4].value;
  let cost = fields[5].value;
  let credits = fields[6].value;
  let link = fields[7].value;

  return (
    `<!--ON-DEMAND WEBINAR WITH HEADER-->
    <tr>
      <td height="30" align="center"></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:18px; color:#333333; font-weight:bold;">${header}</td>
    </tr>
    <tr>
      <td height="20" align="center"></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#333333; padding-bottom:12px;"><table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tbody>
          <tr>
            <td align="left"><strong>${title}</strong></td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
      </td>
    </tr>
    <tr>
      <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="305" align="left" class="w100">
                <tr>
                  <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;"> Presenter: ${presenter}  <br>
                    Provider: ${provider}<br>
                    Commercial Supporter: <em>${supporter}</em></td>
                </tr>
              </table>
              
              <!--[if gte mso 9]>
              </td>
              <td align="center"  valign="top">
<![endif]-->
              
              <table cellpadding="0" cellspacing="0" border="0" width="265" align="left" style="margin:0 0 0 14px;" class="w100">
                <tr>
                  <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;">Cost: ${cost}<br>
                  Credits: ${credits}</td>
                </tr>
              </table></td>
          </tr>
        </table></td>
    </tr>
    <tr>
      <td align="left" class="blue" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#2f84c0; padding-top:10px;"><a href="${link}" target="_blank" style="color:#2f84c0; text-decoration:underline;">CLICK HERE TO VIEW THE WEBINAR</a></td>
    </tr>
    <!--END ON-DEMAND WEBINAR WITH HEADER-->`
  )
}

export function on_demand_webinar_wo_header(fields) {

  let title = fields[0].value;
  let presenter = fields[1].value;
  let provider = fields[2].value;
  let supporter = fields[3].value;
  let cost = fields[4].value;
  let credits = fields[5].value;
  let link = fields[6].value;

  return (
    `<!--ON-DEMAND WEBINAR WITHOUT HEADER-->
    <tr>
      <td height="20" align="center"></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#333333; padding-bottom:12px;"><strong>
${title}</strong></td>
    </tr>
    <tr>
      <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="305" align="left" class="w100">
                <tr>
                  <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;"> Presenter:  ${presenter}<br>
                    Provider: ${provider}<br>
                    Commercial Supporter: <em>${supporter}</em></td>
                </tr>
              </table>
              
              <!--[if gte mso 9]>
              </td>
              <td align="center"  valign="top">
<![endif]-->
              
              <table cellpadding="0" cellspacing="0" border="0" width="265" align="left" style="margin:0 0 0 14px;" class="w100">
                <tr>
                  <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;">Cost: ${cost}<br>
                  Credits: ${credits}</td>
                </tr>
              </table></td>
          </tr>
        </table></td>
    </tr>
    <tr>
      <td align="left" class="blue" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#2f84c0; padding-top:10px;"><a href="${link}" target="_blank" style="color:#2f84c0; text-decoration:underline;">CLICK HERE TO VIEW THE WEBINAR</a></td>
    </tr>
    <!--END ON-DEMAND WEBINAR WITHOUT HEADER-->`
  )
}

export function center_banner(fields) {
  let link = fields[0].value;
  let imgSrc = fields[1].value;

  return (`
  <!--CENTER BANNER-->
  <tr>
  <td height="20" align="center"></td>
</tr>
<tr>
  <td align="left" class="blue1" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:22px; color:#2f84c0; font-weight:bold;"><a href="https://cdeworld.com/webinars/search?c=279 " target="_blank" style="color:#2f84c0;text-decoration:none;">Visit the CDEWorld Library for access to more FREE CE programs »</a></td>
</tr>
<tr>
  <td height="20" align="center"></td>
</tr>
<tr>
  <td align="center"><img src="https://www.dentalaegis.com/media/60287/" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100"/></td>
</tr>
<tr>
   <td align="center"><a href="${link}" target="_blank"><img src="${imgSrc}" width="600" height="80" alt=""/></a>
   </td>
</tr>   
<tr>
  <td align="center"><img src="https://www.dentalaegis.com/media/60287/" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100"/></td>
</tr>
  <!--END CENTER BANNER-->`)
}
export function new_content_w_header(fields) {
  let header = fields[0].value;
  let title = fields[1].value;
  let presenter = fields[2].value;
  let provider = fields[3].value;
  let source = fields[4].value;
  let cost = fields[5].value;
  let credits = fields[6].value;
  let link = fields[7].value;

  return (`<!--NEW CONTENT WITH HEADER-->
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:18px; color:#333333; font-weight:bold; padding-top:10px;">${header}</td>
    </tr>
    <tr>
      <td height="20" align="center"></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:22px; color:#333333;"><strong>${title}</strong><br />
        ${presenter}</td>
    </tr>
    <tr>
      <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="305" align="left" class="w100">
                <tr>
                  <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;"> Provider: ${provider}<br>
                    Source: <em>${source}</em></td>
                </tr>
              </table>

              
              <table cellpadding="0" cellspacing="0" border="0" width="265" align="left" class="w100" style="margin:0 0 0 14px;">
                <tr>
                  <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;">Cost: ${cost}<br>
                    Credits: ${credits}</td>
                </tr>
              </table></td>
          </tr>
        </table></td>
    </tr>
    <tr>
      <td align="left" class="blue" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#2f84c0; padding-top:15px;"><a href="${link}" target="_blank" style="color:#2f84c0; text-decoration:underline;">MORE INFORMATION</a></td>
    </tr>
    <!--END OF NEW CONTENT WITH HEADER-->`)
}
export function new_content_wo_header(fields) {

  let title = fields[0].value;
  let presenter = fields[1].value;
  let provider = fields[2].value;
  let source = fields[3].value;
  let cost = fields[4].value;
  let credits = fields[5].value;
  let link = fields[6].value;

  return (`                          <!--NEW CONTENT WITHOUT HEADER-->
    <tr>
      <td height="20" align="center"></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:22px; color:#333333; "><strong>
${title}</strong><br />
        <span style="font-size:13px; line-height:18px;">${presenter}</span></td>
    </tr>
    <tr>
      <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="305" align="left" class="w100">
                <tr>
                  <td width="307" align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;"> Provider: ${provider}<br>
                    Source: <em>${source}</em></td>
                </tr>
              </table>
              
              <!--[if gte mso 9]>
              </td>
              <td align="center"  valign="top">
<![endif]-->
              
              <table cellpadding="0" cellspacing="0" border="0" width="265" align="left" class="w100" style="margin:0 0 0 14px;">
                <tr>
                  <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;">Cost: ${cost}<br>
                    Credits: ${credits}</td>
                </tr>
              </table></td>
          </tr>
        </table></td>
    </tr>
    <tr>
      <td align="left" class="blue" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#2f84c0; padding-top:15px;"><a href="${link}" target="_blank" style="color:#2f84c0; text-decoration:underline;">MORE INFORMATION</a></td>
    </tr>
    <!--END OF NEW CONTENT WITHOUT HEADER-->`)
}

export function end_new_content(fields) {
  return (
    `                          <tr>
  <td height="20" align="center"></td>
</tr>
<tr>
  <td align="left" class="blue1" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:22px; color:#2f84c0; font-weight:bold;"><a href="https://cdeworld.com/courses/search?c=279&hq_e=el&hq_m=4255273&hq_l=19&hq_v=1030197208" target="_blank" style="color:#2f84c0;text-decoration:none;">Visit the CDEWorld Library for access to more  CE programs!  »
  </a></td>
</tr>
<tr>
  <td height="20" align="center"></td>
</tr>`)
}

export function ebook(fields) {

  let title = fields[0].value;
  let author = fields[1].value;
  let supporter = fields[2].value;
  let cost = fields[3].value;
  let source = fields[4].value;
  let credits = fields[5].value;
  let description = fields[6].value;
  let link = fields[7].value;
  let imgSrc = fields[8].value;

  return (
    `<!--START EBOOK SECTION -->
    <tr>
    <td align="center"><img src="https://www.dentalaegis.com/media/60287/" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100"/></td>
  </tr>
  <tr>
    <td height="20" align="center"></td>
  </tr>
<tr>
  <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:18px; color:#333333; font-weight:bold;">Featured CE eBook</td>
</tr>
<tr>
  <td height="20" align="center"></td>
</tr>
<tr>
  <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="154" align="left" class="w100">
            <tr>
              <td align="left"><a href="${link}" target="_blank"> <img src="${imgSrc}" alt="" border="0" style="display:block; margin:0px; max-width:154px;" width="154"/> </a></td>
            </tr>
            <tr>
              <td height="20" align="center"></td>
            </tr>
          </table>
          
          <!--[if gte mso 9]>
          </td>
          <td align="center"  valign="top">
<![endif]-->
          
          <table cellpadding="0" cellspacing="0" border="0" width="420" align="right" class="w100">
            <tr>
              <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#333333; padding-bottom:7px;"><strong>${title}</strong></td>
            </tr>
            <tr>
              <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#676262;"><p><strong>By:</strong> ${author}<strong><br />
              Supported By:</strong> <em>${supporter}</em><br>
                  <strong>Cost:</strong> ${cost}  | <strong>Source:</strong> ${source}<strong><br>
                    Credits:</strong> ${credits} </p></td>
            </tr>
            <tr>
              <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:17px; padding-top:4px; color:#676262;">${description}</td>
            </tr>
            <tr>
              <td align="left" style="padding-top:15px;"><table cellpadding="0" cellspacing="0" border="0" bgcolor="#2f84c0" style="border-radius: 5px;">
                  <tr>
                    <td width="10"></td>
                    <td align="left" height="40" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#ffffff;"><a href="${link}" target="_blank" style="color:#ffffff; text-decoration:none;">Download your free eBook</a></td>
                    <td width="15"></td>
                  </tr>
                </table></td>
            </tr>
            <tr>
              <td height="20" align="center"></td>
            </tr>
          </table></td>
      </tr>
    </table></td>
</tr>
<tr>
  <td height="20" align="center"></td>
</tr>
<tr>
  <td align="left" class="blue1" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:22px; color:#2f84c0; font-weight:bold;"><a href="http://cdeworld.com/ebooks" target="_blank" style="color:#2f84c0;text-decoration:none;">Visit the CDEWorld eBook Library for access to the dental information <br>
    you need, when you need it »</a></td>
</tr>
<tr>
  <td height="20" align="center"></td>
</tr>
                       
<!--END EBOOK SECTION --> `
  )
}

export function portal_partner(fields) {

  let title = fields[0].value;
  let presenter = fields[1].value;
  let provider = fields[2].value;
  let source = fields[3].value;
  let cost = fields[4].value;
  let credits = fields[5].value;
  let link = fields[6].value;
  let imgSrc = fields[7].value;
  let brandLink = fields[8].value;

  return (
    `<!--FEATURED PORTAL PARTNER-->
    <tr>
    <td align="center"><img src="https://www.dentalaegis.com/media/60287/" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100"/></td>
  </tr>
  <tr>
    <td height="20" align="center"></td>
  </tr>
  <tr>
    <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:18px; color:#333333; font-weight:bold;">Featured Portal Partner</td>
  </tr>
  <tr>
    <td height="25" align="center"></td>
  </tr>
  <tr>
    <td align="left" style="padding-bottom:10px;"><a href="${brandLink}" target="_blank"> <img src="${imgSrc}" alt="" width="190" border="0" style="display:block; margin:0px;"/> </a></td>
  </tr>
  <tr>
    <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:17px; color:#333333; padding-bottom:15px;"><strong>${title}</strong></td>
  </tr>
  <tr>
    <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:auto; color:#333333; ">${presenter}</td>
  </tr>
  <tr>
    <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td align="center"><table cellpadding="0" cellspacing="0" border="0" width="240" align="left" class="w100">
              <tr>
                <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;"> Provider: ${provider}<br>
                  Source: <em>${source}</em>
                  </td>
              </tr>
            </table>
            
            <!--[if gte mso 9]>
            </td>
            <td align="center"  valign="top">
<![endif]-->
            
            <table cellpadding="0" cellspacing="0" border="0" width="320" align="right" class="w100">
              <tr>
                <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;">Cost: ${cost}<br>
                  Credits: ${credits}</td>
              </tr>
            </table></td>
        </tr>
      </table></td>
  </tr>
  <tr>
    <td height="20" align="center"></td>
  </tr>
  <tr>
    <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#2f84c0;"><a href="${link}" target="_blank" style="color:#2f84c0; text-decoration:underline;">MORE INFORMATION</a></td>
  </tr>
  <tr>
    <td height="30" align="center"></td>
  </tr>
  <!--<tr>
    <td align="center"><img src="http://placehold.it/600x70" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100"/></td>
  </tr>-->

<!--END FEATURED PORTAL PARTNER-->
`)
}

export function featured_event(fields) {

  let header = fields[0].value;
  let title = fields[1].value;
  let description = fields[2].value;
  let location = fields[3].value;
  let date = fields[4].value;
  let credits = fields[5].value;
  let cta = fields[6].value;
  let link = fields[7].value;
  let imgSrc = fields[8].value;

  return (
    `<!--FEATURED EVENT -->
    <tr>
    <td align="center"><img src="https://www.dentalaegis.com/media/60287/" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100"/></td>
  </tr>
  <tr>
    <td height="20" align="center"></td>
  </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:18px; color:#333333; font-weight:bold;">${header}</td>
    </tr>
<tr>
      <td height="20" align="center"></td>
    </tr>
    <tr>
      <td align="left"><a href="${link}" target="_blank"> <img src="${imgSrc}" alt="" border="0" style="display:block; margin:0px; max-width:156px;" width="156"/> </a></td>
    </tr>
    <tr>
      <td height="25" align="center"></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:16px; color:#333333; padding-bottom:7px;"><strong>${title}</strong></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#333333;">${description}<br />
        <span style="font-size:13px; line-height:28px;">${location} | ${date} | ${credits}</span></td>
    </tr>
    <tr>
      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#2f84c0; padding-top:7px;"><a href="${link}" target="_blank" style="color:#2f84c0; text-decoration:underline; text-transform: uppercase">${cta}</a></td>
    </tr>
<tr>
<td height="31" align="center"></td>
</tr>
    <tr>
      <td align="left" class="blue1" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:22px; color:#2f84c0; font-weight:bold;"><a href="https://cdeworld.com/events" target="_blank" style="color:#2f84c0;text-decoration:none;">Visit the CDEWorld Event Listing for exciting upcoming live events »</a></td>
    </tr>
    <tr>
      <td height="20" align="center"></td>
    </tr>
<!--END FEATURED EVENT -->   
`)
}
export function border(fields) {
  return (
    `<tr>
      <td align="center"><img src="http://aegispublications.com/news/ce/2015/02/images/divide.png" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100" /></td>
    </tr>`
  )
}
export function end(fields) {
  let month = fields[0].value;
  let year = fields[1].value;
  return (
    `  <!--START OF THE END -->
    <tr>
                 <td align="center"><img src="https://www.dentalaegis.com/media/60287/" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100"/></td>
               </tr>


               <tr>
                 <td align="center" style="padding:10px 0px;"> <img src="https://cdeworld.com/media/14014/" alt="" border="0" style="display:block; margin:0px; max-width:600px;" width="600" class="w100"/></td>
               </tr>
             </table></td>
           <td width="30" class="w20"></td>
         </tr>
       </table></td>
   </tr>
 </table></td>
</tr>


<tr>
<td height="22" align="center"></td>
</tr>

<tr>
<td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px; " valign="middle">
      <br>
You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | CDEWorld.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-207852@news.aegispublications.com</a> to your address book<br />
%%PLUGIN_UNSUBSCRIBE: 1146575-UNSUBSCRIBE%% <br />
CDEWorld a part of the AEGIS Dental Network | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
</tr>
<tr>
<td height="22" align="center"></td>
</tr>
</table></td>
</tr>
</table>
</body>
</html>

`
  )
}