import _ from 'lodash';

let d = new Date();
let currentMonth = d.getMonth() + 1;
if (currentMonth < 10) { currentMonth = '0' + '' + currentMonth }
currentMonth = currentMonth.toString();
let currentYear = d.getFullYear().toString();

export const idt_thematic_forms = {
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
      { label: 'Subscribe Link', name: 'subscribe' },
      { label: 'Thematic Topic', name: 'topic', value: 'Implantology' },
      { label: 'Main Image Link Source', name: 'mainImg', value: 'http://placehold.it/600x150' },
      { label: 'Intro Paragraph', name: 'intro', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Thematic Topic Header', name: 'thematicSrc', value: 'https://www.dentalaegis.com/media/64338/' }
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
      { label: 'First News Link', name: 'link1' },
      { label: 'Second News Title', name: 'title2' },
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
      { label: 'Image Link Source', name: 'imgSrc', value: 'http://placehold.it/150x120' },
    ]
  },
  resources: {
    typeOfRow: 'resources',
    header: 'Resources Two-Column',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Thematic Topic', name: 'topic', value: '' },
      { label: 'First Title', name: 'title1' },
      { label: 'First Author', name: 'author1' },
      { label: 'First Description', name: 'description1', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'First Link', name: 'link1' },
      { label: 'Second Title', name: 'title2' },
      { label: 'Second Author', name: 'author2' },
      { label: 'Second Product Description', name: 'description2', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Second Product Link', name: 'link2' }
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
  featured_article: {
    typeOfRow: 'featured_article',
    header: 'Featured Article',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header' },
      { label: 'Title', name: 'title' },
      { label: 'Author', name: 'author' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/300x200' },
    ]
  },
  featured_video: {
    typeOfRow: 'featured_video',
    header: 'Featured Video',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields: [
      { label: 'Header', name: 'header', value: 'FEATURED VIDEO' },
      { label: 'Title', name: 'title' },
      { label: 'Author', name: 'author' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Link', name: 'link' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/300x200' }
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
      { label: 'Header', name: 'header', value: 'FEATURED WORKSHOP' },
      { label: 'Title', name: 'title' },
      { label: 'Author', name: 'author' },
      { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Link', name: 'link' },

      { label: 'First Product Name', name: 'product1' },
      { label: 'First Product Description', name: 'description1', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'First Product Link', name: 'link1' },

      { label: 'Second Product Name', name: 'product2' },
      { label: 'Second Product Description', name: 'description2', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Second Product Link', name: 'link2' },

      { label: 'Featured Product Name', name: 'product3' },
      { label: 'Featured Product Description', name: 'description3', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
      { label: 'Featured Link', name: 'link3' },
      { label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/150' }
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

export const idt_thematic_initial_state = [
  _.cloneDeep(idt_thematic_forms.beginning),
  _.cloneDeep(idt_thematic_forms.news),
  _.cloneDeep(idt_thematic_forms.ce),
  _.cloneDeep(idt_thematic_forms.resources),
  _.cloneDeep(idt_thematic_forms.center_banner),
  _.cloneDeep(idt_thematic_forms.featured_article),
  _.cloneDeep(idt_thematic_forms.featured_video),
  _.cloneDeep(idt_thematic_forms.products),
  _.cloneDeep(idt_thematic_forms.end)
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
  let thematicSrc = fields[9].value;

  //put the url together
  let url = `https://www.aegisdentalnetwork.com/idt/${year}/${month}/newsletter/${topic.trim().replace(/\s+/g, '-').toLowerCase()}`;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
  .maroon a, .maroon a:link, .maroon a:active, .maroon a:visited {
      color: #d2232a !important;
      text-decoration: none !important;
  }
  .maroon1 a, .maroon1 a:link, .maroon1 a:active, .maroon1 a:visited {
      color: #f26647 !important;
      text-decoration: none !important;
  }
  .black a, .black a:link, .black a:active, .black a:visited {
      color: #000000 !important;
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
  table.w616 {
      width: 100% !important;
      height: auto !important;
      min-width: 100% !important;
  }
  table.w100, td.w100, img.w100 {
      width: 100% !important;
      height: auto !important;
  }
  .menu {
      padding: 5px 8px 3px !important;
      font-size: 11px !important;
      line-height: 11px !important;
  }
  .w16 {
      width: 0px !important;
      height: auto !important;
  }
  .w18 {
      width: 14px !important;
      height: auto !important;
  }
  .w12 {
      width: 10px !important;
      height: auto !important;
  }
  .f12 {
      font-size: 11px !important;
      line-height: 11px !important;
  }
  .pad {
      padding: 5px !important;
  }
  .hide {
      display: none !important;
  }
  .border {
      border: 0px !important;
  }
  .block{
      display:block !important;
      width: 100% !important;
      height: auto !important;
  }
  }		</style>
  <!--[if gte mso 9]>
  <![endif]-->	</head>
      <body bgcolor="#ffffff">
          <!--g-link -->
          <a href="https://www.dentalaegis.com/idt"></a>
          <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tbody>
                  <tr>
                      <td width="10">
                           </td>
                      <td align="center" style="padding:10px 0px;">
                          <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="w616" style="min-width:616px;" width="616">
                              <tbody>
                                  <tr>
                                      <td align="center" height="20" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; color:#6d6f72;">
                                          Having trouble viewing this email? <span class="maroon" style="color:#d2232a;"><a href="${url}" style="font-size:12px; font-family:Arial, sans-serif; text-decoration:none; color:#d2232a; line-height:18px;" target="_blank">Click here</a></span>.</td>
                                  </tr>
                                  <tr>
                                      <td align="center">
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                              <tbody>
                                                  <tr>
                                                      <td class="w16" width="16">
                                                           </td>
                                                      <td align="center">
                                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                              <tbody>
                                                                  <tr>
                                                                      <td align="center">
                                                                          <a href="${mastheadLink}" target="_blank"> <img alt="" border="0" class="w100" src="${mastheadSrc}" style="display:block; margin:0px; max-width:600px;" width="600" /> </a></td>
                                                                  </tr>
                                                                  <tr>
                                                                      <td align="center" bgcolor="#575757" style="background-color:#575757; border-top:4px solid #ffffff;">
                                                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center" class="block">
                                                                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td align="center">
                                                                                                          <table border="0" cellpadding="0" cellspacing="0">
                                                                                                              <tbody>
                                                                                                                  <tr>
                                                                                                                      <td align="center" class="menu" style="color:#fff; font-size:10px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:4px 12px 4px 18px; font-weight:bold;">
                                                                                                                          <a href="http://www.dentalaegis.com/idt/" style=" text-decoration:none; color:#ffffff" target="_blank">Articles</a></td>
                                                                                                                      <td align="center" class="menu" style="color:#fff; font-size:10px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:4px 12px; font-weight:bold;">
                                                                                                                          <a href="http://www.dentalaegis.com/idt/archive" style=" text-decoration:none; color:#ffffff" target="_blank">Archive</a></td>
                                                                                                                      <td align="center" class="menu" style="color:#fff; font-size:10px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:4px 12px; font-weight:bold;">
                                                                                                                          <a href="http://idt.cdeworld.com/" style=" text-decoration:none; color:#ffffff" target="_blank">ce</a></td>
                                                                                                                      <td align="center" class="menu" style=" color:#fff; font-size:10px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:4px 12px; font-weight:bold;">
                                                                                                                          <a href="http://www.dentalaegis.com/idt/ebooks" style=" text-decoration:none; color:#ffffff" target="_blank">ebook</a></td>
                                                                                                                      <td align="center" class="menu" style=" color:#fff; font-size:10px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:4px 12px; font-weight:bold;">
                                                                                                                          <a href="https://www.aegisdentalnetwork.com/idt/products" style=" text-decoration:none; color:#ffffff" target="_blank">products</a></td>
                                                                                                                  </tr>
                                                                                                              </tbody>
                                                                                                          </table>
                                                                                                      </td>
                                                                                                  </tr>
                                                                                              </tbody>
                                                                                          </table>
                                                                                      </td>
                                                                                      <td align="center" class="block">
                                                                                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                              <tbody>
                                                                                                  <tr>
                                                                                                      <td align="center" valign="top">
                                                                                                          <table border="0" cellpadding="0" cellspacing="0">
                                                                                                              <tbody>
                                                                                                                  <tr>
                                                                                                                      <td align="center" class="menu" style="color:#fff; font-size:10px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:4px 10px; font-weight:bold;">
                                                                                                                          <a href="https://www.dentalaegis.com/idt/resource-center" style=" text-decoration:none; color:#ffffff" target="_blank">resource center</a></td>
                                                                                                                      <td align="center" class="menu" style="color:#fff; font-size:10px; text-transform:uppercase; font-family:Arial, Helvetica, sans-serif; padding:4px 10px; font-weight:bold;">
                                                                                                                          <a href="http://www.dentalaegis.com/go/e15599" style=" text-decoration:none; color:#ffffff" target="_blank">subscribe</a></td>
                                                                                                                      <td align="center" class="menu" style="padding:0px 10px;" width="12">
                                                                                                                          <a href="https://www.facebook.com/InsideDentalTechnology" target="_blank"> <img alt="" border="0" class="w12" src="https://www.dentalaegis.com/media/59863/" style="display:block; margin:0px; max-width:12px;" width="12" /> </a></td>
                                                                                                                      <td align="center" class="menu" style="padding:0px 10px 0px 10px;" width="18">
                                                                                                                          <a href="https://twitter.com/indentaltech" target="_blank"> <img alt="" border="0" class="w18" src="https://www.dentalaegis.com/media/59862/" style="display:block; margin:0px; max-width:18px;" width="18" /> </a></td>
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
                                                                  <tr>
                                                                      <td align="center">
                                                                          <img alt="" border="0" class="w100" src="${thematicSrc}" style="display:block; margin:0px; max-width:600px;" width="600" /></td>
                                                                  </tr>
                                                                  <tr>
                                                                      <td align="right" style="padding-bottom:4px;">
                                                                          <table border="0" cellpadding="0" cellspacing="0">
                                                                              <tbody>
                                                                                  <tr>
                                                                                      <td align="center">
                                                                                          <a href="mailto:?subject=FW: Inside Dental Technology Update&body=I thought you might be interested in this: ${url}?refer=true" target="_blank"> <img alt="" border="0" src="https://www.dentalaegis.com/media/59864/" style="display:block; margin:0px; max-width:20px;" width="20" /> </a></td>
                                                                                      <td align="center" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; line-height:18px; color:#d2232a; padding-left:3px; font-weight:bold;">
                                                                                          <a href="mailto:?subject=FW: Inside Dental Technology Update&body=I thought you might be interested in this: ${url}?refer=true" style="color:#d2232a; text-decoration:none;" target="_blank">Forward to a Colleague</a></td>
                                                                                      <td class="hide" width="30">
                                                                                           </td>
                                                                                  </tr>
                                                                              </tbody>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                                  <tr>
                                                                      <td align="center">
                                                                          <img alt="" border="0" class="w100" src="${mainImg}" style="display:block; margin:0px; max-width:582px;" width="582" /></td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                      <td class="w16" width="16">
                                                           </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15px; color:#000000; padding:15px 12px; border-bottom:1px solid #000000;">
                                          ${intro}</td>
                                  </tr>
                                  <!--END OF THE BEGINNING PART-->  
  `
}

export function news(fields) {

  let title1 = fields[0].value;
  let link1 = fields[1].value;
  let title2 = fields[2].value;
  let link2 = fields[3].value;

  return (
    `
    <!--START OF THE NEWS SECTION -->
    <tr>
      <td align="center" style="padding-top:15px;">
        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
              <td background="https://www.dentalaegis.com/media/59865/" bgcolor="#ffffff" height="109" style="background-repeat:no-repeat;" valign="top" width="616">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:616px;height:109px;">
<v:fill type="tile" src="https://www.dentalaegis.com/media/59865/" color="#ffffff" />
<v:textbox inset="0,0,0,0">
<![endif]-->														<div>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                      <tr>
                        <td align="center">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                              <tr>
                                <td width="86">
                                   </td>
                                <td align="center">
                                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" height="30">
                                           </td>
                                      </tr>
                                      <tr>
                                        <td align="left" class="f12" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; font-weight:bold; color:#000000;">
                                          <a href="${link1}" style="color:#000000; text-decoration:none; font-weight:bold;" target="_blank">${title1}</a><br />
                                          <span class="maroon"><a href="${link1}" style="color:#d2232a; text-decoration:none; font-weight:bold;" target="_blank">Read More</a></span></td>
                                      </tr>
                                      <tr>
                                        <td align="left" class="f12" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; font-weight:bold; color:#000000; padding-top:5px;">
                                          <a href="${link2}" style="color:#000000; text-decoration:none; font-weight:bold;" target="_blank">${title2}</a><br />
                                          <span class="maroon"><a href="${link2}" style="color:#d2232a; text-decoration:none; font-weight:bold;" target="_blank">Read More</a></span></td>
                                      </tr>
                                      <tr>
                                        <td align="center" height="11" style="font-size:11px; line-height:11px;">
                                          <img alt="" border="0" height="11" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px;" width="11" /></td>
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
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->													</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <!--END OF THE NEWS SECTION -->
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
    `        
    <!--START THE CE SECTION-->
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #000000;" width="100%">
          <tbody>
            <tr>
              <td align="center">
                <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="425">
                  <tbody>
                    <tr>
                      <td align="center" height="15" style="font-size:15px; line-height:15px;">
                        <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                    </tr>
                    <tr>
                      <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:16px;">
                        <span style="color:#febe10; font-weight:bold;font-size:13px; line-height:20px;">FEATURED CE</span><br />
                        <span style="color:#000000; font-weight:bold;"><a href="${link}" style="text-decoration:none; color:#000000;" target="_blank">${title}</a> </span><br />
                        <em>${author}</em><br />
                        <strong>Credits:</strong> ${credits}<br />
                        <strong>Cost:</strong> ${cost}<br />
                        <strong>Source:</strong> <em>${source}</em><br />
                        <strong>Available Dates: </strong>${dates}</td>
                    </tr>
                    <tr>
                      <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#d2232a; font-weight:bold;">
                        <a href="${link}" style="color:#d2232a; text-decoration:none;" target="_blank">Learn More</a></td>
                    </tr>
                    <tr>
                      <td align="center" class="hide" height="15" style="font-size:15px; line-height:15px;">
                        <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                    </tr>
                  </tbody>
                </table>
                <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="160">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                            </tr>
                            <tr>
                              <td align="center" valign="top">
                                <a href="${link}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; max-width:160px; width:160px;" width="160" /></a></td>
                            </tr>
                            <tr>
                              <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
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
    <!--END OF CE SECTION -->`
  )
}
export function resources(fields) {
  let topic = fields[0].value
  let title1 = fields[1].value
  let author1 = fields[2].value
  let description1 = fields[3].value
  let link1 = fields[4].value
  let title2 = fields[5].value
  let author2 = fields[6].value
  let description2 = fields[7].value
  let link2 = fields[8].value

  return `
  <tr>
  <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#d2232a; font-weight:bold; text-transform:uppercase; padding-top:13px;">
    ${topic} Resources</td>
</tr>
<tr>
  <td align="center">
    <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #000000;" width="100%">
      <tbody>
        <tr>
          <td align="center">
            <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="290">
              <tbody>
                <tr>
                  <td align="center" height="8" style="font-size:8px; line-height:8px;">
                    <img alt="" border="0" height="8" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:8px;" width="10" /></td>
                </tr>
                <tr>
                  <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:16px;">
                    <span style="color:#000000; font-weight:bold;"><a href="${link1}" style="text-decoration:none; color:#000000;" target="_blank">${title1}</a> </span><br />
                    <em>${author1}</em><br />
                    ${description1}</td>
                </tr>
                <tr>
                  <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#d2232a; font-weight:bold;">
                    <a href="${link1}" style="color:#d2232a; text-decoration:none;" target="_blank">Read More</a></td>
                </tr>
                <tr>
                  <td align="center" height="15" style="font-size:15px; line-height:15px;">
                    <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                </tr>
              </tbody>
            </table>
            <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="290">
              <tbody>
                <tr>
                  <td align="center" class="hide" height="8" style="font-size:8px; line-height:8px;">
                    <img alt="" border="0" height="8" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:8px;" width="8" /></td>
                </tr>
                <tr>
                  <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:16px;">
                    <span style="color:#000000; font-weight:bold;"><a href="${link2}" style="text-decoration:none; color:#000;" target="_blank"><strong>${title2}</strong></a> </span><br />
                    <em>${author2}</em><br />
                    ${description2}</td>
                </tr>
                <tr>
                  <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#d2232a; font-weight:bold;">
                    <a href="${link2}" style="color:#d2232a; text-decoration:none;" target="_blank">Read More</a></td>
                </tr>
                <tr>
                  <td align="center" height="15" style="font-size:15px; line-height:15px;">
                    <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>`;
}

export function center_banner(fields) {
  let link = fields[0].value;
  let imgLink = fields[1].value;
  return (
    `                               
     <!-- CENTER BANNER -->
    <tr>
      <td align="center" class="pad" style="padding:16px 10px; border-bottom:1px solid #000000;">
        <a href="${link}" target="_blank"> <img alt="" border="0" class="w100" src="${imgLink}" style="display:block; margin:0px; max-width:600px;" width="600" /> </a>
        </td>
          </tr>
            <!--END CENTER BANNER -->`
  )
}

export function featured_article(fields) {
  let header = fields[0].value;
  let title = fields[1].value;
  let author = fields[2].value;
  let description = fields[3].value;
  let link = fields[4].value;
  let imgSrc = fields[5].value;

  return (
    ` 
    <!--FEATURED ARTICLE SECTION -->
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #000000;" width="100%">
          <tbody>
            <tr>
              <td align="center">
                <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="390">
                  <tbody>
                    <tr>
                      <td align="center" height="15" style="font-size:15px; line-height:15px;">
                        <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                    </tr>
                    <tr>
                      <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:16px; padding-left:10px">
                        <span style="color:#f26647; font-weight:bold; font-size:13px; line-height:20px; text-transform:uppercase;">${header}</span><br />
                        <span style="color:#000000; font-weight:bold;"><a href="${link}" style="text-decoration:none; color:#000;" target="_blank"> ${title} </a></span><br />
                        <em>${author}</em><br />
                        ${description}</td>
                    </tr>
                    <tr>
                      <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#d2232a; font-weight:bold; padding-left:10px">
                        <a href="${link}" style="color:#d2232a; text-decoration:none;" target="_blank">Read More</a></td>
                    </tr>
                    <tr>
                      <td align="center" class="hide" height="15" style="font-size:15px; line-height:15px;">
                        <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                    </tr>
                  </tbody>
                </table>
<!--[if gte mso 9]>
                        </td>
                        <td align="center"  valign="top">
<![endif]-->														<table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="211">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                            </tr>
                            <tr>
                              <td align="center" valign="top">
                                <a href="${link}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; max-width:200px; width:200px;  border:solid 1px #aaaaaa;" width="200" /></a></td>
                            </tr>
                            <tr>
                              <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
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
    <!--END FEATURED ARTICLE SECTION -->     
`
  )
}

export function featured_video(fields) {
  let header = fields[0].value;
  let title = fields[1].value;
  let author = fields[2].value;
  let description = fields[3].value;
  let link = fields[4].value;
  let imgSrc = fields[5].value;

  return (
    `
    <!--START FEATURED VIDEO SECTION -->
    <tr>
      <td align="center" style="padding-top:10px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tbody>
            <tr>
              <td align="center" bgcolor="#eaf6f7">
                <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="384">
                  <tbody>
                    <tr>
                      <td align="center" height="15" style="font-size:15px; line-height:15px;">
                        <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                    </tr>
                    <tr>
                      <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:16px; padding-left:15px;">
                        <span style="color:#00bdcd; font-weight:bold; text-transform:uppercase;">${header}</span><br />
                        <span style="color:#000000; font-weight:bold;"><a href="${link}" style="text-decoration:none; color:#000;" target="_blank">${title}</a></span><br />
                        ${description}</td>
                    </tr>
                    <tr>
                      <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#d2232a; font-weight:bold; padding-left:15px;">
                        <a href="${link}" style="color:#d2232a; text-decoration:none; font-weight:bold; line-height:18px;" target="_blank">Watch Here</a></td>
                    </tr>
                    <tr>
                      <td align="center" height="15" style="font-size:15px; line-height:15px;">
                        <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                    </tr>
                  </tbody>
                </table>
<!--[if gte mso 9]>
                        </td>
                        <td align="center"  valign="top">
<![endif]-->														<table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="225">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table align="left" border="0" cellpadding="0" cellspacing="0">
                          <tbody>
                            <tr>
                              <td align="center" class="hide" height="15">
                                 </td>
                            </tr>
                            <tr>
                              <td align="center" style="padding-left:15px;" valign="top">
                                <a href="${link}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; max-width:196px; width:196px;  border:solid 1px #cccccc;" width="196" /></a></td>
                            </tr>
                            <tr>
                              <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
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
    <!--END FEATURED VIDEO SECTION--> `
  )
}

export function products(fields) {
  let header = fields[0].value;
  let title = fields[1].value;
  let author = fields[2].value;
  let description = fields[3].value;
  let link = fields[4].value;
  let product1 = fields[5].value;
  let description1 = fields[6].value;
  let link1 = fields[7].value;
  let product2 = fields[8].value;
  let description2 = fields[9].value;
  let link2 = fields[10].value;
  let product3 = fields[11].value;
  let description3 = fields[12].value;
  let link3 = fields[13].value;
  let imgSrc = fields[14].value;

  return (`
  <!--FEATURED WORKSHOP AND PRODUCTS -->
  <tr>
    <td align="center" style="padding-top:15px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td align="center" valign="top">
              <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="180">
                <tbody>
                  <tr>
                    <td align="center" valign="top">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                          <tr>
                            <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; color:#d2232a; font-size:13px; font-weight:bold; line-height:16px; padding-bottom:7px; text-transform:uppercase;">
                              ${header}</td>
                          </tr>
                          <tr>
                            <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:16px;">
                              <span style="color:#000000; font-weight:bold;"><a href="${link}" style="text-decoration:none; color:#000;" target="_blank">${title}</a> </span><br />
                              <em>${author}</em><br />
                              ${description}</td>
                          </tr>
                          <tr>
                            <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#d2232a; font-weight:bold;">
                              <a href="${link}" style="color:#d2232a; text-decoration:none;" target="_blank">Read More</a></td>
                          </tr>
                          <tr>
                            <td align="center" height="15" style="font-size:15px; line-height:15px;">
                              <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
<!--[if gte mso 9]>
                      </td>
                      <td align="center"  valign="top">
<![endif]-->														<table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="430">
                <tbody>
                  <tr>
                    <td align="center" class="border" style="border-left:1px solid #000000;">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                          <tr>
                            <td class="hide" width="20">
                               </td>
                            <td align="center">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="left" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:20px; color:#f26647; font-weight:bold; text-transform:uppercase;">
                                      PRODUCTS</td>
                                  </tr>
                                  <tr>
                                    <td align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="170">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:12px; line-height:16px;">
                                                      <span style="color:#000000; font-weight:bold; font-size:13px; line-height:16px;"><a href="${link1}" style="text-decoration:none; color:#000000;" target="_blank">${product1}</a> </span><br />
                                                      ${description1}</td>
                                                  </tr>
                                                  <tr>
                                                    <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; color:#d2232a; font-weight:bold;">
                                                      <a href="${link1}" style="color:#d2232a; text-decoration:none; font-weight:bold; line-height:18px;" target="_blank">Learn More</a></td>
                                                  </tr>
                                                  <tr>
                                                    <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                                      <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                                                  </tr>
                                                </tbody>
                                              </table>
<!--[if gte mso 9]>
                      </td>
                      <td align="center"  valign="top">
<![endif]-->																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="217">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" class="black" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:12px; line-height:16px;">
                                                      <span style="color:#000000; font-weight:bold;"><a href="${link2}" style="text-decoration:none; color:#000000;" target="_blank">${product2}</a> </span><br />
                                                      ${description2}</td>
                                                  </tr>
                                                  <tr>
                                                    <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; color:#d2232a; font-weight:bold;">
                                                      <a href="${link2}" style="color:#d2232a; text-decoration:none;" target="_blank">Learn More</a></td>
                                                  </tr>
                                                  <tr>
                                                    <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                                      <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
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
                                    <td align="center" bgcolor="#fdebe2">
                                      <table align="right" border="0" cellpadding="0" cellspacing="0" class="w100" width="210">
                                        <tbody>
                                          <tr>
                                            <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                              <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                                          </tr>
                                          <tr>
                                            <td align="left" style="font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:13px; line-height:16px; padding-left:15px;">
                                              <span class="maroon1" style="color:#f26647; font-weight:bold;">FEATURED PRODUCT</span><br />
                                              <span class="black" style="color:#000000; font-weight:bold;"><a href="${link3}" style="text-decoration:none; color:#000;" target="_blank">${product3}</a></span><br />
                                              ${description3}</td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="maroon" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:18px; color:#d2232a; font-weight:bold; padding-left:15px;">
                                              <a href="${link3}" style="color:#d2232a; text-decoration:none; font-weight:bold; line-height:18px;" target="_blank">Learn More </a></td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="hide" height="15" style="font-size:15px; line-height:15px;">
                                              <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" class="w100" width="180">
                                        <tbody>
                                          <tr>
                                            <td align="center">
                                              <table align="left" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                                      <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
                                                  </tr>
                                                  <tr>
                                                    <td align="center" style="padding-left:15px;" valign="top">
                                                      <a href="${link3}" target="_blank"> <img alt="" border="0" src="${imgSrc}" style="display:block; max-width:168px; width:168px;" width="168" /></a></td>
                                                  </tr>
                                                  <tr>
                                                    <td align="center" height="15" style="font-size:15px; line-height:15px;">
                                                      <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
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
  <!--END FEATURED WORKSHOP AND PRODUCTS-->
  `)
}

export function end() {
  return (
    `                                
    <!--LAST SECTION OF THE EMAIL -->
    <tr>
    <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px; border-bottom: #000 solid 1px;" valign="middle">
          <br>
  You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | <em>Inside Dental Technology</em>.<br />To ensure delivery, please add <a href="mailto:reply-289795@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-289795@news.aegispublications.com</a> to your address book<br />
  %%PLUGIN_UNSUBSCRIBE: 2146841-UNSUBSCRIBE%% <br />
         <em>Inside Dental Technology</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
  </tr>
    <tr>
      <td align="center" height="15" style="font-size:15px; line-height:15px;">
        <img alt="" border="0" height="15" src="https://www.dentalaegis.com/media/59866/" style="display:block; margin:0px; max-width:15px;" width="15" /></td>
    </tr>
  </tbody>
</table>
</td>
<td width="10">
 </td>
</tr>
</tbody>
</table>
</body>
</html>
`
  )
}