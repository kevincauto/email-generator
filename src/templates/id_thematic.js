import _ from 'lodash';

//Auto detect the month and year.  
let d = new Date();
let currentMonth = d.getMonth() + 1;
if (currentMonth < 10) { currentMonth = '0' + '' + currentMonth }
currentMonth = currentMonth.toString();
let currentYear = d.getFullYear().toString();


export const id_thematic_forms = {
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
            { label: 'Masthead Link', name: 'mastheadLink', value: 'https://www.pulpdent.com' },
            { label: 'Masthead Image Source Link', name: 'mastheadSrc', value: 'http://placehold.it/600x80' },
            { label: 'Subscribe Link', name: 'subscribe' },
            { label: 'Thematic Topic', name: 'topic', value: 'Implantology' },
            { label: 'Main Image Link Source', name: 'mainImg', value: 'http://placehold.it/600x150' },
            { label: 'Intro Paragraph', name: 'intro', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
        ]
    },
    news: {
        typeOfRow: 'news',
        header: 'News Section',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'First News Title', name: 'title1' },
            { label: 'First News Description', name: 'description1' },
            { label: 'First News Link', name: 'link1' },
            { label: 'Second News Title', name: 'title2' },
            { label: 'Second News Description', name: 'description2' },
            { label: 'Second News Link', name: 'link2' },
        ]
    },
    ce: {
        typeOfRow: 'ce',
        header: 'Continuing Ed Section',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Title', name: 'title' },
            { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
            { label: 'Author', name: 'author' },
            { label: 'Credits', name: 'credits' },
            { label: 'Cost', name: 'cost' },
            { label: 'Source', name: 'source' },
            { label: 'Provider', name: 'provider' },
            { label: 'Available Dates', name: 'dates' },
            { label: 'Link', name: 'link' },
            { label: 'Image Link Source', name: 'imgSrc', value: 'http://placehold.it/180x140' },
        ]
    },
    article: {
        typeOfRow: 'article',
        header: 'Two-Column Article',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header', value: 'Featured Articles' },
            { label: 'Title', name: 'title' },
            { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
            { label: 'Author', name: 'author' },
            { label: 'Call-to-Action', name: 'cta', value: 'Read More' },
            { label: 'Link', name: 'link' },
            { label: 'Image Source', name: 'imgSrc', value: 'http://placehold.it/180x140' }
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
    featured: {
        typeOfRow: 'featured',
        header: 'Featured Gray Section',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header' },
            { label: 'Title', name: 'title' },
            { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
            { label: 'Link', name: 'link' },
            { label: 'Image Source Link', name: 'imgSrc' },
        ]
    },
    products: {
        typeOfRow: 'products',
        header: 'Products Section',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'First Product Name', name: 'product1' },
            { label: 'First Product Description', name: 'description1' },
            { label: 'First Product Link', name: 'link1' },

            { label: 'Second Product Name', name: 'product2' },
            { label: 'Second Product Description', name: 'description2' },
            { label: 'Second Product Link', name: 'link2' },
        ]
    },
    end: {
        typeOfRow: 'end',
        header: 'End of the Email',
        closable: false,
        switchable: false,
        addable: false,
        draggable: false,
        fields: []
    }
}

export const id_thematic_initial_state = [
    _.cloneDeep(id_thematic_forms.beginning),
    _.cloneDeep(id_thematic_forms.news),
    _.cloneDeep(id_thematic_forms.ce),
    _.cloneDeep(id_thematic_forms.article),
    _.cloneDeep(id_thematic_forms.article),
    _.cloneDeep(id_thematic_forms.center_banner),
    _.cloneDeep(id_thematic_forms.article),
    _.cloneDeep(id_thematic_forms.article),
    _.cloneDeep(id_thematic_forms.article),
    _.cloneDeep(id_thematic_forms.featured),
    _.cloneDeep(id_thematic_forms.products),
    _.cloneDeep(id_thematic_forms.end)
];

export function beginning(fields) {
    let emailName = fields[0].value;
    let month = fields[1].value;
    let year = fields[2].value;
    let mastheadLink = fields[3].value;
    let mastheadSrc = fields[4].value;
    let subscribe = fields[5].value;
    let topic = fields[6].value;
    let mainImg = fields[7].value;
    let intro = fields[8].value;

    //put the url together
    let url = `https://www.aegisdentalnetwork.com/id/${year}/${month}/newsletter/${topic.trim().replace(/\s+/g, '-').toLowerCase()}`;

    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  
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
  
      margin: 0 !important;
  
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
  
      /*text-align: left;*/
  
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
  
      text-align: center;
  
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
  
      text-align: center;
  
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
  
   @media screen and (max-width: 400px) {
  
  .two-column .column,  .three-column .column {
  
      max-width: 100% !important;
  
  }
  
  .two-column img {
  
  /*	max-width: 100% !important;*/
  
  }
  
  .right-sidebar left {
  
      max-width: 100% !important;
  
  }
  
  .three-column img {
  
      max-width: 50% !important;
  
  }
  
  .pad {
  
      font-size: 9px !important;
  
      line-height: 11px !important;
  
  }
  
  .w50 {
  
      width: 13px !important;
  
      height: auto !important;
  
  }
  
  .hide{
  
      display:none !important;
  
  }
  
  }
  
  @media screen and (min-width: 401px) and (max-width: 620px) {
  
  .three-column .column {
  
      max-width: 33% !important;
  
  }
  
  .two-column .column {
  
      max-width: 50% !important;
  
  }
  
  .pad {
  
      font-size: 9px !important;
  
      line-height: 11px !important;
  
  }
  
  .w50 {
  
      width: 13px !important;
  
      height: auto !important;
  
  }
  
  .hide{
  
      display:none !important;
  
  }
  
  }
  
  @media screen and (min-width: 600px) and (max-width: 600px) {
  
  .pad {
  
      font-size: 9px !important;
  
      line-height: 11px !important;
  
  }
  
  .hide{
  
      display:none !important;
  
  }
  
  .w50 {
  
      width: 13px !important;
  
      height: auto !important;
  
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
  
      <![endif]-->	</head>
  
      <body style="margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;background-color:#ffffff;font-family:'Times New Roman', Times, serif;">
  
  <!-- g link -->		
  <a href="https://www.dentalaegis.com/id/"  target="_blank"></a>
  
  <center class="wrapper" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  
              <div class="webkit" style="max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;">
  
  <!--[if (gte mso 9)|(IE)]>
  
              <table width="600" align="center" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
  
              <tr>
  
              <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
  
              <![endif]-->				<table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
  
                      <tbody>
  
                          <tr>
  
                              <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
  
                                  <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">
  
                                      <tbody>
  
                                          <tr>
  
                                              <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:left;">
  
                                                  <div style="font-size:12px;text-align:center;font-family:'Times New Roman', serif;">
  
                                                      Having Trouble Viewing This Email? <a href="${url}" style="color:#000000;text-decoration:underline;" target="_blank">Click here</a></div>
  
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
  
                                              <td class="full-width-image" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
  
                                                  <center>
  
                                                      <a href="${mastheadLink}" style="color:#ee6a56;text-decoration:underline;" target="_blank"> <img alt="" src="${mastheadSrc}" style="border-width:0;width:100%;max-width:600px;height:auto;" width="600" /> </a></center>
  
                                              </td>
  
                                          </tr>
  
                                      </tbody>
  
                                  </table>
  
                              </td>
  
                          </tr>
  
  <!--four-column nav -->						<tr>
  
                              <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
  
                                  <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">
  
                                      <tbody>
  
                                          <tr>
  
                                              <td align="center" bgcolor="#9d0707" class="inner contents" style="padding-top:5px;padding-bottom:5px;padding-right:10px;padding-left:10px;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333; text-transform:uppercase;">
  
                                                  <table border="0" cellpadding="0" cellspacing="0">
  
                                                      <tbody>
  
                                                          <tr>
  
  <!--<td width="30" class="hide"></td>-->															<td align="center" class="pad" style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:14px;Margin-bottom:0px; color:#fff; font-size:10px; text-transform:uppercase; font-family: Arial;">
  
                                                                  <a href="http://www.dentalaegis.com/id/" style=" text-decoration:none; color:#ffffff" target="_blank">Articles</a></td>
  
                                                              <td class="w50" width="50">
  
                                                                   </td>
  
                                                              <td align="center" class="pad" style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:14px;Margin-bottom:0px; color:#fff; font-size:10px; text-transform:uppercase; font-family: Arial;">
  
                                                                  <a href="http://www.dentalaegis.com/id/products/" style=" text-decoration:none; color:#ffffff" target="_blank">Products</a></td>
  
                                                              <td class="w50" width="55">
  
                                                                   </td>
  
                                                              <td align="center" class="pad" style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:14px;Margin-bottom:0px; color:#fff; font-size:10px; text-transform:uppercase; font-family: Arial;">
  
                                                                  <a href="http://www.dentalaegis.com/id/resource-center/" style=" text-decoration:none; color:#ffffff" target="_blank">Resource Center</a></td>
  
                                                              <td class="w50" width="50">
  
                                                                   </td>
  
                                                              <td align="center" class="pad" style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:14px;Margin-bottom:0px; color:#fff; font-size:10px; text-transform:uppercase; font-family: Arial;">
  
                                                                  <a href="http://www.dentalaegis.com/id/subscribe/thematic?campaign=071917a" style=" text-decoration:none; color:#ffffff" target="_blank">Subscribe</a></td>
  
                                                              <td class="w50" width="50">
  
                                                                   </td>
  
                                                              <td align="center" width="10">
  
                                                                  <a href="https://www.facebook.com/InsideDentistry" style="text-decoration:none;color:#fff;" target="_blank"><img src="https://www.dentalaegis.com/media/59095/" style="width:12px;border-width:0; vertical-align:middle" width="10" /></a></td>
  
                                                              <td width="5">
  
                                                                   </td>
  
                                                              <td align="center" width="12">
  
                                                                  <a href="https://twitter.com/insidedentistry" style="text-decoration:none;color:#fff;" target="_blank"><img src="https://www.dentalaegis.com/media/59096/" style="width:13px;border-width:0; vertical-align:middle" width="12" /></a></td>
  
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
  
                                              <td class="full-width-image" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
  
                                                  <img alt="" src="https://www.aegisdentalnetwork.com/media/66081/" style="border-width:0;width:100%;max-width:600px;height:auto;" width="600" /></td>
  
                                          </tr>
  
                                      </tbody>
  
                                  </table>
  
                              </td>
  
                          </tr>
  
                          <tr>
  
                              <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
  
                                  <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">
  
                                      <tbody>
  
                                          <tr>
  
                                              <td class="inner contents" style="padding-top:0px;padding-bottom:5px;padding-right:10px;padding-left:10px;text-align:left;">
  
                                                  <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:2.4em;Margin-bottom:0px;">
  
                                                      ${topic} <span style="color:#9d0707;">Update</span></p>
  
                                              </td>
  
                                          </tr>
  
                                      </tbody>
  
                                  </table>
  
                              </td>
  
                          </tr>
  
                          <tr>
  
                              <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
  
                                  <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">
  
                                      <tbody>
  
                                          <tr>
  
                                              <td class="inner contents" style="padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:0px;text-align:right;">
  
                                                  <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:22px;Margin-bottom:0px;padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:0px;">
  
                                                       </p>
  
                                                  <div style="border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#cccccc;border-top-width:1px;border-top-style:solid;border-top-color:#cccccc;">
  
                                                      <span style="font-size:12px;font-family:'Times New Roman', Times, serif;text-transform:uppercase;text-align:right;">Earn CE Credits | <a href="mailto:?subject=Forward: Inside Dentistry ${topic} &body=I thought you might be interested in this: ${url}?refer=true" style="text-decoration:none;color:#000;" target="_blank">Forward to a <span style="color:#9d0707;">Colleague</span></a></span></div>
  
                                                  <p>
  
                                                       </p>
  
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
  
                                              <td class="full-width-image" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
  
                                                  <img alt="" src="${mainImg}" style="border-width:0;width:100%;max-width:600px;height:auto;" width="600" /></td>
  
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
  
                                              <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:left;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333;">
  
                                                  <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:14px;Margin-bottom:10px;">
  
                                                      ${intro}</p>
  
                                              </td>
  
                                          </tr>
  
                                      </tbody>
  
                                  </table>
  
                              </td>
  
                          </tr>
  <!--END OF THE BEGINNING SECTION-->
  `
}

export function news(fields) {

    let title1 = fields[0].value;
    let description1 = fields[1].value;
    let link1 = fields[2].value;
    let title2 = fields[3].value;
    let description2 = fields[4].value;
    let link2 = fields[5].value;

    return (
        `
    <!--START NEWS SECTION -->
    <tr>

        <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">

            <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">

                <tbody>

                    <tr>

                        <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:left;">

                            <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:15px;Margin-bottom:10px;text-transform:uppercase;color:#888;">

                                News & Notes</p>

                            <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:20px;Margin-bottom:4px;">

                                <a href="${link1}" style="text-decoration:none;color:#444;" target="_blank">${title1}</a></p>
    ${description1 ?
            `<p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:14px;Margin-bottom:4px;">
                                ${description1} </p>` :
            ``
        }
											<p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:15px;Margin-bottom:10px;text-transform:uppercase;color:#9d0707;">

                                <a href="${link1}" style="text-decoration:none;text-transform:uppercase;color:#9d0707;" target="_blank">Read More</a></p>

                        </td>

                    </tr>

                </tbody>

            </table>

        </td>

    </tr>

    <tr>

        <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">

            <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">

                <tbody>

                    <tr>

                        <td class="inner contents" style="padding-top:0px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:left;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333;">

                            <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:20px;Margin-bottom:4px;">

                                <a href="${link2}" style="text-decoration:none;color:#444;" target="_blank">${title2}</a></p>

                                ${description2 ?
            `<p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:14px;Margin-bottom:4px;">
                                    ${description2} </p>` :
            ``
        }
											<p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:15px;Margin-bottom:10px;text-transform:uppercase;color:#9d0707;">

                                <a href="${link2}" style="text-decoration:none;text-transform:uppercase;color:#9d0707;" target="_blank">Read More</a></p>

                        </td>

                    </tr>

                </tbody>

            </table>

        </td>

    </tr>
<!--END NEWS SECTION-->
    `
    )
}

export function ce(fields) {

    let title = fields[0].value;
    let description = fields[1].value;
    let author = fields[2].value;
    let credits = fields[3].value;
    let cost = fields[4].value;
    let source = fields[5].value;
    let provider = fields[6].value;
    let dates = fields[7].value;
    let link = fields[8].value;
    let imgSrc = fields[9].value;
    return (
        `       <!--START CE SECTION-->
    <tr>

        <td class="right-sidebar" dir="rtl" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333;">

<!--[if (gte mso 9)|(IE)]>

    <table width="100%" dir="rtl" style="border-spacing:0;font-family:sans-serif;color:#333333;" >

    <tr>

    <td width="400" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >

    <![endif]-->								<div class="column left" dir="ltr" style="width:100%;display:inline-block;vertical-align:middle;max-width:400px;">

                <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">

                    <tbody>

                        <tr>

                            <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;font-size:14px;text-align:left;">

                                <p style="font-family:'Times New Roman', Times, serif;font-size:15px;Margin-bottom:10px;text-transform:uppercase;color:#888;Margin:0;">

                                    Featured CE</p>

                                <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:20px;Margin-bottom:4px;">

                                    <a href="${link}" style="text-decoration:none;color:#444;" target="_blank">${title}</a></p>

                                <em style="font-family:'Times New Roman', Times, serif;">${author}</em><br />

                                <p style="font-family:arial, 'sans serif';font-size:13px;margin:5px 0px 0px 0px;">

                                    <strong>Credits:</strong> ${credits}<br />

                                    <strong>Cost: </strong>${cost}<br />

                                    <strong>Source: </strong><em>${source}</em><br />

                                    <strong>Provider: </strong>${provider}<br />

                                    <strong>Available Dates: </strong>${dates}</p>

                                <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:15px; margin:5px 0px 10px 0px; text-transform:uppercase;color:#9d0707;">

                                    <a href="${link}" style="text-decoration:none;text-transform:uppercase;color:#9d0707;" target="_blank">Read More</a></p>

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

<!--[if (gte mso 9)|(IE)]>

    </td><td width="200" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >

    <![endif]-->								<div class="column right" dir="ltr" style="width:100%;display:inline-block;vertical-align:middle;max-width:200px;">

                <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">

                    <tbody>

                        <tr>

                            <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;font-size:14px;text-align:center;">

                                <a href="${link}" target="_blank"><img alt="" src="${imgSrc}" style="border-width:0;" width="180" /></a></td>

                        </tr>

                    </tbody>

                </table>

            </div>

<!--[if (gte mso 9)|(IE)]>

    </td>

    </tr>

    </table>

    <![endif]-->							</td>

    </tr>
<!--END CE SECTION-->`
    )
}
export function article(fields) {

    let header = fields[0].value
    let title = fields[1].value
    let description = fields[2].value
    let author = fields[3].value
    let cta = fields[4].value
    let link = fields[5].value
    let imgSrc = fields[6].value


    return (
        `<!--ARTICLE SECTION-->
  <tr>

      <td class="right-sidebar" dir="rtl" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333;">

<!--[if (gte mso 9)|(IE)]>

  <table width="100%" dir="rtl" style="border-spacing:0;font-family:sans-serif;color:#333333;" >

  <tr>

  <td width="400" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >

  <![endif]-->								<div class="column left" dir="ltr" style="width:100%;display:inline-block;vertical-align:middle;max-width:400px;">

              <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">

                  <tbody>

                      <tr>

                          <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;font-size:14px;text-align:left;">
                            ${header ? `<p style="font-family:'Times New Roman', Times, serif;font-size:15px;Margin-bottom:10px;text-transform:uppercase;color:#888;Margin:0;">
                            
                                                              ${header}</p>` : ``}
                              

                              <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:20px;Margin-bottom:4px;">

                                  <a href="${link}" style="text-decoration:none;color:#444;" target="_blank">${title}</a></p>

                              <div style="font-family:'Times New Roman', Times, serif;">

                                  ${description}</div>

                              <div style="margin:5px 0px 0px 0px">

                                  <em style="font-family:'Times New Roman', Times, serif; ">${author}</em></div>

                              <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:15px;Margin-bottom:10px; margin-top:5px; text-transform:uppercase;color:#9d0707;">

                                  <a href="${link}" style="text-decoration:none;text-transform:uppercase;color:#9d0707;" target="_blank">${cta}</a></p>

                          </td>

                      </tr>

                  </tbody>

              </table>

          </div>

<!--[if (gte mso 9)|(IE)]>

  </td><td width="200" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >

  <![endif]-->								<div class="column right" dir="ltr" style="width:100%;display:inline-block;vertical-align:middle;max-width:200px;">

              <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">

                  <tbody>

                      <tr>

                          <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;font-size:14px;text-align:center;">

                              <center>

                                  <a href="${link}" target="_blank"><img alt="" src="${imgSrc}" style="border-width:0;" width="180" /></a></center>

                          </td>

                      </tr>

                  </tbody>

              </table>

          </div>

<!--[if (gte mso 9)|(IE)]>

  </td>

  </tr>

  </table>

  <![endif]-->							</td>

  </tr>
<!--END ARTICLE SECTION-->`);
}

export function center_banner(fields) {
    let link = fields[0].value;
    let imgLink = fields[1].value;
    return (
        `                               
    <!-- CENTER BANNER PLACEMENT -->						
    <tr>

        <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">

            <table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">

                <tbody>

                    <tr>

                        <td class="full-width-image" style="padding-top:10px;padding-bottom:10px;padding-right:0;padding-left:0;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333;">

                            <center>

                                <a href="${link}" style="color:#ee6a56;text-decoration:underline;" target="_blank"> <img alt="" src="${imgLink}" style="border-width:0;width:100%;max-width:600px;height:auto;" width="600" /> </a></center>

                        </td>

                    </tr>

                </tbody>

            </table>

        </td>

    </tr>
<!-- END CENTER BANNER PLACEMENT -->`
    )
}

export function featured(fields) {

    let header = fields[0].value;
    let title = fields[1].value;
    let description = fields[2].value;
    let link = fields[3].value;
    let imgSrc = fields[4].value;

    return (
        ` <!--FEATURED PRODUCT-->
    
                            <tr>
    
                                <td class="two-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333;background-color:#e8e8e9;">
    
    <!--[if (gte mso 9)|(IE)]>
    
                            <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
    
                            <tr>
    
                            <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
    
                            <![endif]-->								<div class="column" style="width:100%;max-width:300px;display:inline-block;vertical-align:top;">
    
                                        <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">
    
                                            <tbody>
    
                                                <tr>
    
                                                    <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
    
                                                        <table class="contents" style="border-spacing:0;font-family:sans-serif;color:#333333;font-size:14px;text-align:left;">
    
                                                            <tbody>
    
                                                                <tr>
    
                                                                    <td class="text" style="padding-bottom:0;padding-right:0;padding-left:10px;padding-top:10px;">
    
                                                                        <div style="font-size:15px; font-weight:normal; margin:0 0 0 0; font-family:'Times New Roman', serif; width:160px;  text-transform:uppercase; width:94%;color:#9d0707;">
    
                                                                            ${header}</div>
    
                                                                        <div style="font-size:19px; font-weight:normal; margin:4px 0 4px 0; font-family:'Times New Roman', serif;  width:94%;">
    
                                                                            <a href="${link}" style="text-decoration:none; color:#000;" target="_blank">${title}</a></div>
    
                                                                        <p>
    
                                                                            ${description}</p>
    
                                                                        <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:15px;Margin-bottom:10px;text-transform:uppercase;color:#9d0707; margin-top:5px;">
    
                                                                            <a href="${link}" style="text-decoration:none;text-transform:uppercase;color:#9d0707;" target="_blank">Learn More</a></p>
    
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
    
                            </td><td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
    
                            <![endif]-->								<div class="column" style="width:100%;max-width:300px;display:inline-block;">
    
                                        <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">
    
                                            <tbody>
    
                                                <tr>
    
                                                    <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
    
                                                        <center>
    
                                                            <table align="center" class="contents" style="border-spacing:0;font-family:sans-serif;color:#333333;font-size:14px;text-align:center;">
    
                                                                <tbody>
    
                                                                    <tr>
    
                                                                        <td class="text" style="padding-bottom:0;padding-right:0;padding-left:0;padding-top:10px;">
    
                                                                            <center>
    
                                                                                <a href="${link}" target="_blank"><img alt="" src="${imgSrc}" style="border-width:0;max-width:200px;" width="200" /></a></center>
    
                                                                        </td>
    
                                                                    </tr>
    
                                                                </tbody>
    
                                                            </table>
    
                                                        </center>
    
                                                    </td>
    
                                                </tr>
    
                                            </tbody>
    
                                        </table>
    
                                    </div>
    
    <!--[if (gte mso 9)|(IE)]>
    
                            </td>
    
                            </tr>
    
                            </table>
    
                            <![endif]-->							</td>
    
                            </tr>
    <!--END FEATURED PRODUCT-->    
`
    )
}

export function products(fields) {

    let product1 = fields[0].value;
    let description1 = fields[1].value;
    let link1 = fields[2].value;
    let product2 = fields[3].value;
    let description2 = fields[4].value;
    let link2 = fields[5].value;

    return (
        `
    <!--START PRODUCTS SECTION -->
    <tr>

        <td class="two-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333;">

<!--[if (gte mso 9)|(IE)]>

    <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >

    <tr>

    <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >

    <![endif]-->								<div class="column" style="width:100%;max-width:300px;display:inline-block;vertical-align:top;">

                <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">

                    <tbody>

                        <tr>

                            <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">

                                <table class="contents" style="border-spacing:0;font-family:sans-serif;color:#333333;font-size:14px;text-align:left;">

                                    <tbody>

                                        <tr>

                                            <td class="text" style="padding-bottom:0;padding-right:0;padding-left:0;padding-top:10px;">

                                                <div style="font-size:15px; font-weight:normal; margin:0 0 0 14; font-family:'Times New Roman', serif; width:160px; color:#918f93; text-transform:uppercase; width:94%;">

                                                    PRODUCTS</div>

                                                <div style="font-size:19px; font-weight:normal; margin:4px 0 4px 0; font-family:'Times New Roman', serif;  width:94%;">

                                                    <a href="${link1}" style="text-decoration:none; color:#000;" target="_blank">${product1}</a></div>

                                                <div style="font-size:14px; width:94%; margin:5px 0px 0px 0px; font-family:'Times New Roman', serif; font-weight:normal;">

                                                    ${description1}</div>

                                                <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:15px;Margin-bottom:10px;margin-top: 5px; text-transform:uppercase;color:#9d0707;">

                                                    <a href="${link1}" style="text-decoration:none;text-transform:uppercase;color:#9d0707;" target="_blank">Learn More</a></p>

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

    </td><td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >

    <![endif]-->								<div class="column" style="width:100%;max-width:300px;display:inline-block;">

                <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">

                    <tbody>

                        <tr>

                            <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">

                                <table class="contents" style="border-spacing:0;font-family:sans-serif;color:#333333;font-size:14px;text-align:left;">

                                    <tbody>

                                        <tr>

                                            <td class="text" style="padding-bottom:0;padding-right:0;padding-left:0;padding-top:10px;">

                                                <div style="font-size:15px; font-weight:normal; margin:0 0 0 0; font-family:'Times New Roman', serif; width:160px; color:#918f93; text-transform:uppercase; width:94%;">

                                                     </div>

                                                <div style="font-size:19px; font-weight:normal; margin:4px 0px 4px 0px; font-family:'Times New Roman', serif;  width:94%;">

                                                    <a href="${link2}" style="text-decoration:none; color:#000;" target="_blank">${product2}</a></div>

                                                <div style="font-size:14px; width:94%; margin:5px 0px 0px 0px; font-family:'Times New Roman', serif; font-weight:normal;">

                                                    ${description2}</div>

                                                <div style="font-family:Gotham, sans-serif; font-size:12px; margin:5px 0 4px 14; width:94%; font-size:15px;">

                                                    <p style="Margin:0;font-family:'Times New Roman', Times, serif;font-size:15px;Margin-bottom:10px; margin-top:5px; text-transform:uppercase;color:#9d0707;">

                                                        <a href="${link2}" style="text-decoration:none;text-transform:uppercase;color:#9d0707;" target="_blank">Learn More</a></p>

                                                </div>

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

    <![endif]-->							</td>

    </tr>
<!--END PRODUCTS SECTION --> `
    )
}

export function end(fields) {
    return (`
  <!--END OF EMAIL-->
  <tr>

      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">

          <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">

              <tbody>

              <tr>
              <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
                      <br>
              You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | <em>Inside Dentistry</em>.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-207852@news.aegispublications.com</a> to your address book<br />
              %%PLUGIN_UNSUBSCRIBE: 2145119-UNSUBSCRIBE%%
                     <em>Inside Dentistry</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
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

<![endif]-->			
</div>

</center>

</body>

</html>

  `)
}

