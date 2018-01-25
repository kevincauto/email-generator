import _ from 'lodash';

//Auto detect the month and year.  
let d = new Date();
let currentMonth = d.getMonth() + 1;
if (currentMonth < 10) { currentMonth = '0' + '' + currentMonth }
currentMonth = currentMonth.toString();
let currentYear = d.getFullYear().toString();


export const idt_digital_forms = {
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
            { label: 'Header Image Source', name: 'headerSrc', value: 'https://www.aegisdentalnetwork.com/media/65652/' },
            { label: 'Cover Image Source', name: 'coverSrc', value: 'http://placehold.it/180x220' },
            { label: 'Digimag Link', name: 'link' }
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
            { label: 'Author', name: 'author' },
            { label: 'Link', name: 'link' }
        ]
    },
    dotted_line: {
        typeOfRow: 'dotted_line',
        header: 'Dotted Line Divider',
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
        draggable: false,
        fields: [
            { label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  ' },
            { label: 'Link', name: 'link' },
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
            { label: 'Subscribe Link', name: 'subscribe' },
        ]
    }
}

export const idt_digital_initial_state = [
    _.cloneDeep(idt_digital_forms.beginning),
    _.cloneDeep(idt_digital_forms.article),
    _.cloneDeep(idt_digital_forms.article),
    _.cloneDeep(idt_digital_forms.dotted_line),
    _.cloneDeep(idt_digital_forms.article),
    _.cloneDeep(idt_digital_forms.article),
    _.cloneDeep(idt_digital_forms.end)
];

export function beginning(fields) {
    let emailName = fields[0].value;
    let month = fields[1].value;
    let year = fields[2].value;
    let headerSrc = fields[3].value;
    let coverSrc = fields[4].value;
    let link = fields[5].value;
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
  <!doctype html>
  <html>
      <head>
          <meta charset="UTF-8" />
          <title>Inside Dental Technology</title>
      </head>
      <body>
  <!-- g-link -->		
  <a href="https://www.dentalaegis.com/idt/" target="_blank"></a>
  <center>
              <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="font-family:Arial, sans-serif; border:solid 1px #e7e7e8; color:#000000; border:solid 1px #aaa;" width="612">
                  <tbody>
                      <tr>
                          <td align="center" colspan="2" style="font-size:11px; line-height:16px; border-bottom:solid 1px #aaa;">
                              Having trouble viewing this email? <a href="https://www.dentalaegis.com/idt/${year}/${month}/newsletter/digital" style="color:#db1f28; text-decoration:none;" target="_blank">Click here</a>.</td>
                      </tr>
                      <tr>
                          <td align="center" colspan="2">
                              <a href="http://www.dentalaegis.com/idt/" target="_blank"><img alt="" height="118" src="${headerSrc}" usemap="#Map4" width="600" /></a></td>
                      </tr>
                      <tr>
                          <td align="center" colspan="2">
                              <table border="0" cellpadding="0" cellspacing="0" style="margin:4% 0 0 0; background-color:#aaa;" width="555">
                                  <tbody>
                                      <tr>
                                          <td valign="middle" width="337">
                                              <div style="color:#ffffff;  font-size:34px; margin:14px 21px 4px 21px; width:300px; font-family:Arial, sans-serif; text-align:left; font-size:35px;">
                                                  <a href="${link}" style="color:#fff; text-decoration:none;" target="_blank">Your ${monthName}<br />
                                                  Digital Edition<br />
                                                  Is Here!</a></div>
                                              <a href="${link}" target="_blank"> <img alt="" src="https://www.dentalaegis.com/media/58943/" style="margin:0 22px 14px 22px" width="242" /></a></td>
                                          <td valign="middle" width="218">
                                              <a href="${link}" target="_blank"><img alt="" src="${coverSrc}" style="margin:4%;" width="152" /></a></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td align="center" colspan="2">
                              <div style="margin:14px 0 12px 0; clear:both; padding:14 0 0 0;">
                                  <img alt="" src="http://aegispublications.com/news/cced/2015/img/dash.jpg" width="600" /></div>
                          </td>
                      </tr>
  <!--END OF BEGINING-->
  `)
}

export function article(fields) {

    let header = fields[0].value;
    let title = fields[1].value;
    let author = fields[2].value;
    let link = fields[3].value;

    return (
        `<!--START OF ARTICLE-->
    ${header ? `
    <tr>
    <td colspan="2" valign="top">
        <div style="font-family:Arial, sans-serif; font-size:20px; color:#000; margin:0 28px 0 29px; width:326px;">
            <strong>${header}</strong></div>
    </td>
    </tr>`: ``}

    <tr>
        <td colspan="2">
            <div style="font-family:Arial, sans-serif; color:#4c4c4c; font-size:14px; text-align:left; clear:both; margin:11px 8px 4px 29px; width:541px; font-weight:bold;">
                <a href="${link}" style="text-decoration:none; color:#000;" target="_blank">${title}</a></div>
            ${author ? `<div style="font-family:Arial, sans-serif; color:#000; font-size:14px; text-align:left; clear:both; font-style:italic; margin:4px 28px 4px 29px; width:541px;">
            ${author}</div>` : ``}

            <div style="font-family:Arial, sans-serif; color:#d99316; font-size:13px; text-align:left; clear:both; font-weight:bold; margin:0 1px 11px 29px; width:326px;">
                <a href="${link}" style="text-decoration:none; color:#9d0707; font-size:13px;" target="_blank">READ MORE</a></div>
        </td>
    </tr>
<!--START OF ARTICLE-->`
    )
}

export function dotted_line(fields) {
    return (`
  <!--DOTTED LINE-->
    <tr>
        <td align="center" colspan="2">
            <div style="margin:1px 0 12px 0; clear:both; padding:1px 0 0 0;">
            <img alt="" src="http://aegispublications.com/news/cced/2015/img/dash.jpg" width="600" /></div>
        </td>
    </tr>
  <!--END DOTTED LINE SECTION-->`
    )
}


export function end(fields) {
    let description = fields[0].value;
    let link = fields[1].value;
    let month = fields[2].value;
    let year = fields[3].value;
    let subscribe = fields[4].value;
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
  <!--END-->
  <tr>
  <td bgcolor="#aaaaaa" colspan="2">
      <div style="font-family:Arial, sans-serif; color:#ffffff; font-size:14px; text-align:left; clear:both; margin:14px 28px 4px 29px; width:541px;">
          <a href="${link}" style="text-decoration:none; color:#fff;" target="_blank">${description} </a></div>
      <div style="font-family:Arial, sans-serif; color:#d99316; font-size:13px; text-align:left; clear:both; font-weight:bold; margin:0 1px 11px 29px; width:326px;">
          <a href="${link}" style="text-decoration:none; color:#ab1117; font-size:13px;" target="_blank">READ MORE</a></div>
  </td>
  </tr>
  <tr>
                          <td bgcolor="#ffffff" colspan="5" height="5" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
                              <div style="margin:2px 0 12px 0; clear:both;">
                                  <img alt="" src="http://aegispublications.com/news/cced/2015/img/dash.jpg" width="600" /></div>
                              <div style="width:100%; clear:both; font-family:Arial, sans-serif; font-size:13px; color:#9d0707; text-align:center; text-transform:uppercase; margin:0 0 7px 0; font-weight:bold;">
                                  Connect with <em>Inside Dental Technology</em></div>
                          </td>
                      </tr>
                      <tr>
                          <td align="center" bgcolor="#ffffff" colspan="5" height="5" valign="middle">
                              <img height="32" src="http://aegispublications.com/news/idt/2016/04/social.jpg" style="margin:0 0 -11px 0;" usemap="#Map3" width="238" />
                              <div style="margin:2px 0 12px 0; clear:both;">
                                  <img alt="" src="http://aegispublications.com/news/cced/2015/img/dash.jpg" style="padding:17px 0 0 0;" width="600" /></div>
                          </td>
                      </tr>


                      <tr>
                        <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
                              <br>
                      You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | <em>Inside Dental Technology</em>.<br />To ensure delivery, please add <a href="mailto:reply-289795@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-289795@news.aegispublications.com</a> to your address book<br />
                      %%PLUGIN_UNSUBSCRIBE: 1654490-UNSUBSCRIBE%%
                             <br /><em>Inside Dental Technology</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
                      </tr>

                  </tbody>
              </table>
          </center>
          <p>
              <map name="Map2"><area coords="10,3,134,79" href="http://www.dentalaegis.com/idt" shape="rect" target="_blank" /> <area coords="178,32,327,47" href="http://www.dentalaegis.com/idt" shape="rect" target="_blank" /> <area coords="176,52,328,68" href="http://www.dentalaegis.com/idt/${year}/${month}/digital" shape="rect" target="_blank" /> <area coords="376,48,470,70" href="http://dentalaegis-sub.halldata.com/site/AEG000021IDnew/init.do" shape="rect" target="_blank" /> <area coords="157,11,347,30" href="http://www.dentalaegis.com/idt/${year}/${month}" shape="rect" target="_blank" /> <area coords="486,47,574,71" href="http://aegispublications.com/machform/view.php?id=155" shape="rect" target="_blank" /> <area coords="408,93,550,115" href="mailto:?subject=FW:%20Inside%20Dental%20Technology%20${monthName}%20${year}%20Issue%20Available%20Now&body=I%20thought%20you%20might%20be%20interested%20in%20this: https://www.dentalaegis.com/idt/${year}/${month}/newsletter/digital?refer=true" shape="rect" /></map><map name="Map"><area coords="9,6,233,57" href="https://twitter.com/InDentalTech" shape="rect" target="_blank" /> <area coords="409,7,592,30" href="https://www.facebook.com/InsideDentalTechnology" shape="rect" target="_blank" /> <area coords="409,35,592,56" href="https://www.youtube.com/InsideDentalTechnology" shape="rect" target="_blank" /></map><map name="Map3"><area coords="1,1,31,34" href="https://www.facebook.com/InsideDentalTechnology" shape="rect" target="_blank" /> <area coords="51,2,84,34" href="https://twitter.com/InDentalTech" shape="rect" target="_blank" /> <area coords="104,0,134,36" href="https://www.instagram.com/insidedentaltechnology/" shape="rect" target="_blank" /> <area coords="158,2,186,39" href="https://www.youtube.com/InsideDentalTechnology" shape="rect" target="_blank" /> <area coords="208,2,247,38" href="mailto:?subject=FW:%20Inside%20Dental%20Technology%20${monthName}%20${year}%20Digital%20Edition%20&body=I%20thought%20you%20might%20be%20interested%20in%20this: https://www.dentalaegis.com/idt/${year}/${month}/newsletter/digital?refer=true" shape="rect" target="_blank" /></map><map name="Map"><area coords="371,4,441,29" href="https://twitter.com/indentaltech" shape="rect" target="_blank" /> <area coords="454,4,536,29" href="https://www.facebook.com/InsideDentalTechnology" shape="rect" target="_blank" /></map><map name="Map4"><area coords="37,92,221,113" href="http://www.dentalaegis.com/idt/${year}/${month}" shape="rect" target="_blank" /> <area coords="231,95,351,113" href="http://insidedentaltech.com" shape="rect" target="_blank" /> <area coords="361,94,421,112" href="https://dentalaegis-sub.halldata.com/site/AEG000021IDnew/init.do" shape="rect" target="_blank" /> <area coords="430,93,566,112" href="mailto:?subject=FW:%20Inside%20Dental%20Technology%20${monthName}%20${year}%20Digital%20Edition%20&body=I%20thought%20you%20might%20be%20interested%20in%20this: https://www.dentalaegis.com/idt/${year}/${month}/newsletter/digital?refer=true" shape="rect" target="_blank" /></map></p>
  
      </body>
  
  </html>
  `)
}

