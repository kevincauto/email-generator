import _ from 'lodash';

//Auto detect the month and year for the url.  
let d = new Date();
let month = d.getMonth() + 1;
if (month < 10) { month = '0' + '' + month }

month = month.toString();
let year = d.getFullYear();


export const cced_thematic_forms = {
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
      { label: 'Masthead Link', name: 'mastheadLink', value: 'https://www.pulpdent.com' },
      { label: 'Masthead Image Source Link', name: 'mastheadSrc', value: 'http://placehold.it/600x80' },
      { label: 'Thematic Topic', name: 'topic', value: 'Implantology' },
      { label: 'Subscribe Link', name: 'subscribe' },
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
      { label: 'Header', name: 'header', value: 'IN THE NEWS' },
      { label: 'First News Title', name: 'title1' },
      { label: 'Description', name: 'description1', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'First News Link', name: 'link1' },
      { label: 'Second News Title', name: 'title2' },
      { label: 'Description', name: 'description2', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'First News Link', name: 'link2' },

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
      { label: 'Image Link Source', name: 'imgSrc', value: 'http://placehold.it/120x100' },
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
  three_column: {
    typeOfRow: 'three_column',
    header: '3 Column Section',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'First Header', name: 'header1' },
      { label: 'First Title', name: 'title1' },
      { label: 'First Author', name: 'author1' },
      { label: 'First Link', name: 'link1' },
      { label: 'Second Header', name: 'header2' },
      { label: 'Second Title', name: 'title2' },
      { label: 'Second Author', name: 'author2' },
      { label: 'Second Link', name: 'link2' },
      { label: 'Third Header', name: 'header3' },
      { label: 'Third Title', name: 'title3' },
      { label: 'Third Author', name: 'author3' },
      { label: 'Third Link', name: 'link3' },
    ]
  },
  featured: {
    typeOfRow: 'featured',
    header: 'Featured Section',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'FEATURED EVENT' },
      { label: 'Title', name: 'title' },
      { label: 'Author', name: 'author' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150' }
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
      { label: 'Header', name: 'header', value: 'FEATURED PRODUCTS' },
      { label: 'First Product', name: 'product1' },
      { label: 'First Description', name: 'description1', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'First Link', name: 'link1' },
      { label: 'Second Product', name: 'product2' },
      { label: 'Second Description', name: 'description2', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Second Link', name: 'link2' },
      { label: 'Featured Product', name: 'product3' },
      { label: 'Featured Description', name: 'description3', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Featured Link', name: 'link3' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/150' },
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

export const cced_thematic_initial_state = [
  _.cloneDeep(cced_thematic_forms.beginning),
  _.cloneDeep(cced_thematic_forms.news),
  _.cloneDeep(cced_thematic_forms.ce),
  _.cloneDeep(cced_thematic_forms.center_banner),
  _.cloneDeep(cced_thematic_forms.three_column),
  _.cloneDeep(cced_thematic_forms.featured),
  _.cloneDeep(cced_thematic_forms.products),
  _.cloneDeep(cced_thematic_forms.featured),
  _.cloneDeep(cced_thematic_forms.end)
];

export function beginning(fields) {
  let emailName = fields[0].value;
  let month = fields[1].value;
  let year = fields[2].value;
  let mastheadLink = fields[3].value;
  let mastheadSrc = fields[4].value;
  let topic = fields[5].value;
  let subscribe = fields[6].value;
  let mainImg = fields[7].value;
  let intro = fields[8].value;
  //put the url together
  let url = `https://www.aegisdentalnetwork.com/cced/${year}/${month}/newsletter/${topic.trim().replace(/\s+/g, '-').toLowerCase()}`;

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
  <!-- g link -->		
  <a href="https://www.dentalaegis.com/cced/"></a>
  <center class="wrapper" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
        <div class="webkit" style="max-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;">
  <!--[if (gte mso 9)|(IE)]>
  
              <table width="600" align="center" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
  
              <tr>
  
              <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
  
              <![endif]-->				<table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
            <tbody>
              <tr>
                <td style="padding-top:0px;padding-bottom:0px;padding-right:0;padding-left:0;">
                  <div style="text-align:center;font-family:'Times New Roman', Times, serif; font-size:12px; margin:5px 0px;">
                    Having Trouble Viewing This Email? <a href="${url}" style="color:#000;" target="_blank">Click Here</a></div>
                  <table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
                    <tbody>
                      <tr>
                        <td class="full-width-image" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                          <a href="${mastheadLink}" style="color:#ee6a56;text-decoration:underline;" target="_blank"> <img alt="" src="${mastheadSrc}" style="border-width:0;width:100%;max-width:600px;height:auto;" /> </a></td>
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
                              ${topic} eNews</div>
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
                                  <a href="mailto:?subject=Forward: Compendium ${topic}&body=I thought you might be interested in this: ${url}?refer=true" style="text-decoration:none; color:#000000; padding-left:10px; font-family:'Times New Roman', serif; font-size:11px;">▶ Forward to a Colleague</a> <a href="${subscribe}" style="text-decoration:none; color:#000000;padding-left:10px; font-family:'Times New Roman', serif; font-size:11px;" target="_blank">▶ Subscribe</a></td>
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
                          <center>
                            <img alt="" src="${mainImg}" style="border-width:0;width:100%;max-width:598px;height:auto; border:solid 1px #ddd;" /></center>
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
                            ${intro}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                          </tr>
  <!--END BEGINNING SECTION-->                       
  `
}

export function news(fields) {
  let header = fields[0].value;
  let title1 = fields[1].value;
  let description1 = fields[2].value;
  let link1 = fields[3].value;
  let title2 = fields[4].value;
  let description2 = fields[5].value;
  let link2 = fields[6].value;

  return (
    `
    <!-- NEWS ITEMS -->
                <tr>
                  <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">
                      <tbody>
                        <tr>
                          <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:0px;padding-left:0px;text-align:left;">
                            <div style=" border-top:solid 1px #d0d0d2; border-bottom:solid 1px #d0d0d2; background-image:url(http://aegispublications.com/news/cced/2016/02/webinar-bg.jpg); background-repeat:repeat-x; font-family:Arial, san-serif; padding: 0px 10px 10px; margin: 0px 0px 0px; font-size: 13px; text-align: left; color:#000; font-weight: 300; letter-spacing: .8; display:block;
    
    overflow:auto;">
                              <center>
                                <div style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top;  text-align:center;">
                                  ${header}</div>
                                                        </center>
                                                        
                                                        <!--SINGLE NEWS ITEM -->
                              <div style="font-size:16px; font-weight:bold; margin:0 0 0 14px; font-family:'Times New Roman', serif;">
                                <a href="${link1}" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">
                                ${title1}</a></div>
                              <div style="font-size:14px; margin:0 0 0 14px; font-family:'Times New Roman', serif; font-weight:normal;">
                                ${description1}</div>
                              <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 14px 14px;">
                                                            <a href="${link1}" style="color:#76706a; text-decoration:none; font-weight:normal;" target="_blank">More Info ▶</a></div>
                                                        <!--END SINGLE NEWS ITEM -->    
  <!--SECOND NEWS ITEM --> 
                              <div style="font-size:16px; font-weight:bold; margin:0 0 0 14px; font-family:'Times New Roman', serif;">
                                <a href="${link2}" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">${title2}</a></div>
                              <div style="font-size:14px;  margin:0 0 0 14px; font-family:'Times New Roman', serif; font-weight:normal;">
                                ${description2}</div>
                              <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 14px 14px;">
                                <a href="${link2}" style="color:#76706a; text-decoration:none; font-weight:normal;" target="_blank">More Info ▶</a></div>
                                                        </div>
                                                        
    
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                            </tr>
                <!-- END NEWS ITEMS -->       
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
    `        <!--START SINGLE CE -->
    
                <tr>
                  <td class="two-column" dir="rtl" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;">
    <!--[if (gte mso 9)|(IE)]>
    
                            <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >
    
                            <tr>
    
                            <td width="75%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
    
                            <![endif]-->								<div class="column" dir="ltr" style="width:100%;max-width:450px;display:inline-block;vertical-align:top;">
                      <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">
                        <tbody>
                          <tr>
                            <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
                              <table class="contents" style="border-spacing:0;font-family:sans-serif;color:#333333;font-size:14px;text-align:left;">
                                <tbody>
                                  <tr>
                                    <td class="text" style="padding-bottom:0;padding-right:0;padding-left:10px;padding-top:10px;">
                                      <div style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0 14px 0; width:78px;">
                                        Featured CE</div>
                                      <br />
                                      <div style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif;">
                                        <a href="${link}" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">${title}</a></div>
                                    <div style="font-size:14px; font-family:'Times New Roman', serif;">
                                        ${description}<br />
                                        <em>${author} </em><br />
                                        <strong>Credits:</strong> ${credits}<br />
                                        <strong>Cost:</strong> ${cost}<br />
                                        <strong>Source:</strong> <em>${source}</em><br />
                                        <strong>Provider:</strong> ${provider}<br />
                                        <strong>Available Dates: </strong>${dates}</div>
                                      <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 14px 0;">
                                                                            <a href="${link}" style="color:#76706a; text-decoration:none; " target="_blank">Read More ▶</a></div>
                                                                            
                                                                            
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
    
                            </td><td width="25%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
    
                            <![endif]-->								<div class="column" dir="ltr" style="width:100%;max-width:150px;display:inline-block;">
                      <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">
                        <tbody>
                          <tr>
                            <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
                              <center>
                                <table align="center" class="contents" style="border-spacing:0;font-family:sans-serif;color:#333333;font-size:14px;text-align:center;">
                                  <tbody>
                                    <tr>
                                    </tr>
                                    <tr>
                                      <td style="padding-bottom:0;padding-right:10px;padding-left:0;padding-top:10px; ">
                                        <center>
                                          <a href="${link}" target="_blank"><img alt="" src="${imgSrc}" style="border-width:0;max-width:120px; border: 1px solid #666" width="120" /></a></center>
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
    
    <!--END SINGLE CE -->`
  )
}

export function center_banner(fields) {
  let link = fields[0].value;
  let imgLink = fields[1].value;
  return (
    `<!-- START CENTER BANNER -->
    <tr>
      <td style="padding-top:0px;padding-bottom:;padding-right:0;padding-left:0;">
        <table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
          <tbody>
            <tr>
              <td class="full-width-image" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                <a href="${link}" style="color:#ee6a56;text-decoration:underline;" target="_blank"> <img alt="" src="${imgLink}" style="border-width:0;width:100%;max-width:600px;height:auto; padding-bottom: 3px; margin-bottom:3px; border-bottom:solid 1px #bbb;" /> </a></td>
            </tr>
          </tbody>
        </table>
      </td>
                </tr>
<!-- END CENTER BANNER -->   `
  )
}

export function three_column(fields) {
  let header1 = fields[0].value;
  let title1 = fields[1].value;
  let author1 = fields[2].value;
  let link1 = fields[3].value;
  let header2 = fields[4].value;
  let title2 = fields[5].value;
  let author2 = fields[6].value;
  let link2 = fields[7].value;
  let header3 = fields[8].value;
  let title3 = fields[9].value;
  let author3 = fields[10].value;
  let link3 = fields[11].value;
  return (
    `<!--START 3 COLUMN-->
    <tr>
      <td class="three-column">
<!--[if (gte mso 9)|(IE)]>

    <table width="100%">

    <tr>

    <td width="200" valign="top">

    <![endif]-->								<div class="column">
          <table width="100%">
            <tbody>
              <tr>
                <td class="inner contents">
                  <span align="left" style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top; text-align:left; font-weight:normal; text-align:left;" >${header1}</span><br />
                  <p style="text-align:left; font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none; text-align:left;">
                    <a href="${link1}" style="text-decoration:none;color:#000;" target="_blank">${title1}</a></p>
                  <div style="font-size:14px; font-family:'Times New Roman', serif; margin:0 7px 0 0; text-align:left;">
                    <em>${author1}</em></div>
                  <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 0px 0; text-align:left;">
                    <a href="${link1}" style="color:#76706a; text-decoration:none;" target="_blank">Read More ▶</a></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
<!--[if (gte mso 9)|(IE)]>

    </td><td width="200" valign="top">

                <![endif]-->
                        <div class="column">
          <table width="100%">
            <tbody>
              <tr>
                <td class="inner contents">
${header2 ?
      `<span align="left" style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top; text-align:left; font-weight:normal; text-align:left;">
${header2}</span>	`
      :
      ``}
												<br />
                  <p style="text-align:left; font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none; text-align:left; margin-top:12px;">
                    <a href="${link2}" style="text-decoration:none;color:#000;" target="_blank">${title2}</a></p>
                  <div style="font-size:14px; font-family:'Times New Roman', serif; margin:0 7px 0 0; text-align:left;">
                    <em>${author2}</em></div>
                  <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 0px 0; text-align:left;">
                    <a href="${link2}" style="color:#76706a; text-decoration:none;" target="_blank">Read More ▶</a></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
<!--[if (gte mso 9)|(IE)]>

    </td><td width="200" valign="top">

    <![endif]-->								<div class="column">
          <table width="100%">
            <tbody>
              <tr>
                <td class="inner contents">
                  <span align="left" style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top; text-align:left; font-weight:normal; text-align:left;">${header3}</span><br />
                  <p style="text-align:left; font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none; text-align:left; margin-top:0px;">
                    <a href="${link3}" style="text-decoration:none;color:#000;" target="_blank">${title3}</a></p>
                  <div style="font-size:14px; font-family:'Times New Roman', serif; margin:0 7px 0 0; text-align:left;">
                  <em>${author3}</em></div>
                  <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 0px 0; text-align:left;">
                    <a href="${link3}" style="color:#76706a; text-decoration:none;" target="_blank">Read More ▶</a></div>
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
<!--END 3 COLUMN-->      
`
  )
}

export function featured(fields) {
  let header = fields[0].value;
  let title = fields[1].value;
  let author = fields[2].value;
  let description = fields[3].value;
  let link = fields[4].value;
  let imgLink = fields[5].value;

  return (
    `
    <!-- Featured Section -->
    
                <tr>
                  <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">
                      <tbody>
                        <tr>
                          <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:0px;padding-left:0px;text-align:left;">
                            <div style=" border-top:solid 1px #d0d0d2; background-image:url(http://aegispublications.com/news/cced/2016/02/webinar-bg.jpg); background-repeat:repeat-x; font-family:Arial, san-serif; padding: 0px 10px 10px; margin: 0px 0px 0px; font-size: 13px; text-align: left; color:#000; font-weight: 300; letter-spacing: .8; display:block;
    
    overflow:auto;">
                              <center>
                                <div style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top;">
                                  ${header}</div>
                              </center>
                              <table>
                                <tbody>
                                  <tr>
                                    <td width="60%">
                                      <div style="font-size:16px; font-weight:bold; margin:0 0 0 14px; font-family:'Times New Roman', serif;">
                                        <a href="${link}" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">${title}</a></div>
                                      <div style="font-size:14px; margin:0 0 0 14px; font-family:'Times New Roman', serif;">
                                        ${description}<br />
                                        <a href="${link}" style="color:#76706a; text-decoration:none; font-family:Gotham, sans-serif; font-size:12px;" target="_blank">Learn More ▶</a></div>
                                    </td>
                                    <td width="40%">
                                      <center>
                                        <a href="${link}" target="_blank"><img align="right" alt="" src="${imgLink}" style="border-width:0;max-width:150px; margin-right:10px;" width="150" /></a></center>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                            </tr>
    <!-- FEATURED SECTION -->  `
  )
}

export function products(fields) {
  let header = fields[0].value;
  let product1 = fields[1].value;
  let description1 = fields[2].value;
  let link1 = fields[3].value;
  let product2 = fields[4].value;
  let description2 = fields[5].value;
  let link2 = fields[6].value;
  let product3 = fields[7].value;
  let description3 = fields[8].value;
  let link3 = fields[9].value;
  let imgSrc = fields[10].value;

  return (`
  <!--PRODUCT SECTION -->
  <tr>
    <td class="two-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0; ">
<!--[if (gte mso 9)|(IE)]>

              <table width="100%" style="border-spacing:0;font-family:sans-serif;color:#333333;" >

              <tr>

              <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >

              <![endif]-->								<div class="column" style="width:100%;max-width:300px;display:inline-block;vertical-align:top;">
        <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">
          <tbody>
            <tr>
              <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:0px;padding-left:0px;">
                <table class="contents" style="border-spacing:0;font-family:sans-serif;color:#333333;font-size:14px;text-align:left;">
                  <tbody>
                    <tr>
                      <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                         </td>
                    </tr>
                    <tr>
                      <td class="text" style="padding-bottom:0;padding-right:0;padding-left:10px;padding-top:10px;">
                        <div style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top;">
                          ${header}</div>
                        <br />
                        <div style="font-size:16px; font-weight:bold; margin:0 0 0 0px; font-family:'Times New Roman', serif; ">
                          <a href="${link1}" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">${product1}</a></div>
                        <div style="font-size:14px; margin:0 0 0 0px; font-family:'Times New Roman', serif;">
                          ${description1}<br />
                          <a href="${link1}" style="color:#76706a; text-decoration:none; font-family:Gotham, sans-serif; font-size:12px;" target="_blank">Learn More ▶</a></div>
                        <br />
                        <div style="font-size:16px; font-weight:bold; margin:0 0 0 0px; font-family:'Times New Roman', serif; ">
                          <a href="${link2}" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">${product2}</a></div>
                        <div style="font-size:14px; margin:0 0 0 0px; font-family:'Times New Roman', serif;">
                          ${description2}<br />
                          <a href="${link2}" style="color:#76706a; text-decoration:none; font-family:Gotham, sans-serif; font-size:12px;" target="_blank">Learn More ▶</a></div>
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

              <![endif]-->								<div class="column" style="width:100%;max-width:300px;  display:inline-block;">
        <table style="border-spacing:0;font-family:sans-serif;color:#333333;" width="100%">
          <tbody>
            <tr>
              <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
                <center>
                  <table align="left" class="contents" style="border-spacing:0;font-family:sans-serif;color:#333333;font-size:14px;text-align:left;">
                    <tbody>
                      <tr>
                        <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                           </td>
                      </tr>
                      <tr>
                        <td class="text" style="padding-bottom:10px;padding-right:10px;padding-left:10px;padding-top:10px; border: solid 1px #aaaaaa">
                          <div style="font-size:16px; font-weight:bold; margin:0 0 0 0px; font-family:'Times New Roman', serif; ">
                            <a href="${link3}" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">${product3}</a></div>
                          <div style="font-size:14px; margin:0 0 0 0px; font-family:'Times New Roman', serif;">
                            ${description3}<br />
                            <a href="${link3}" style="color:#76706a; text-decoration:none; font-family:Gotham, sans-serif; font-size:12px;" target="_blank">Learn More ▶</a></div>
                          <br />
                          <center>
                            <a href="${link3}" target="_blank"><img alt="" src="${imgSrc}" style="margin:0 0 0 0; clear:both; border:solid 1px #aaaaaa; margin:0 0 0 0px; width:150px;" width="150" /></a></center>
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
  `)
}

export function end() {
  return (
    `<tr>
    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
      <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">
        <tbody>

          
          <tr>
          <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
          You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | <em>Compendium</em>.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-207852@news.aegispublications.com</a> to your address book<br />
          %%PLUGIN_UNSUBSCRIBE: 1089099-CCED UNSUBSCRIBE%%
                 <em>Compendium</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
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
</html>`
  )
}