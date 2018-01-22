import _ from 'lodash';

//Auto detect the month and year.  
let d = new Date();
let currentMonth = d.getMonth() + 1;
if (currentMonth < 10) { currentMonth = '0' + '' + currentMonth }
currentMonth = currentMonth.toString();
let currentYear = d.getFullYear().toString();

//Establish every type of form, the attributes of the form, and all the fields within it.
export const cced_digital_forms = {
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
                label: 'Year', name: 'year', value: currentYear, dropdown: [

                    { value: '2018', text: 'Send Year: 2018' },
                    { value: '2019', text: 'Send Year: 2019' },
                    { value: '2020', text: 'Send Year: 2020' },
                    { value: '2021', text: 'Send Year: 2021' },
                    { value: '2022', text: 'Send Year: 2022' }
                ]
            },
            { label: 'Header Image Source', name: 'headerSrc', value: 'https://www.aegisdentalnetwork.com/media/66135/' },
            { label: 'Cover Image Source', name: 'coverSrc', value: 'http://placehold.it/180x220' },
            { label: 'Digimag Link', name: 'link' },
            { label: 'Subscribe Link', name: 'subscribe' },
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
                    { value: '2017', text: 'Send Year: 2017' },
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

//create a base layout.  (Be sure to include at least one of each form.)
export const cced_digital_initial_state = [
    _.cloneDeep(cced_digital_forms.beginning),
    _.cloneDeep(cced_digital_forms.article),
    _.cloneDeep(cced_digital_forms.article),
    _.cloneDeep(cced_digital_forms.dotted_line),
    _.cloneDeep(cced_digital_forms.article),
    _.cloneDeep(cced_digital_forms.article),
    _.cloneDeep(cced_digital_forms.end)
];

//Several functions to generate the html sections of the email
export function beginning(fields) {
    let emailName = fields[0].value;
    let month = fields[1].value;
    let year = fields[2].value;
    let headerSrc = fields[3].value;
    let coverSrc = fields[4].value;
    let link = fields[5].value;
    let subscribe = fields[6].value;
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
          <title>Your Digital Edition is Now Available!</title>
      </head>
      <body bgcolor="#efefef">
  <!-- g-link -->	
  <a href="https://www.dentalaegis.com/cced/" target="_blank"></a>
  <center>
              <map name="Map2"><area coords="48,95,210,115" href="http://www.dentalaegis.com/cced/${year}/${month}/" shape="rect" target="_blank" /> <area coords="219,90,344,114" href="http://www.dentalaegis.com/cced/" shape="rect" target="_blank" /><area coords="153,17,461,83" href="http://www.dentalaegis.com/cced/" shape="rect" target="_blank" /><area coords="354,92,414,112" href="${subscribe}" shape="rect" target="_blank" /> <area coords="420,93,558,115" href="mailto:?subject=FW: Compendium ${monthName} Issue Available Now&body=I%20thought%20you%20might%20be%20interested%20in%20this: https://www.dentalaegis.com/cced/${year}/${month}/newsletter/digital?refer=true" shape="rect" target="_blank" /></map>
              <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="font-family:Arial, sans-serif; border:solid 1px #989797; color:#000000;" width="600">
                  <tbody>
                      <tr>
                          <td align="center" colspan="2" style="font-family:Arial, sans-serif; font-size:10px; color:#6d6f72; text-align:center; text-transform:uppercase; border-bottom:solid 1px #989797;">
                              Having trouble viewing this email? <a href="https://www.dentalaegis.com/cced/${year}/${month}/newsletter/digital" style="color:#9c8c30; text-decoration:none;" target="_blank">Click here</a>.</td>
                      </tr>
                      <tr>
                          <td align="center" colspan="2">
                              <a href="http://www.dentalaegis.com/cced" target="_blank"><img alt="" height="118" src="${headerSrc}" style="border-top:1px solid #ffffff; border-bottom:solid 1px #ffffff;" usemap="#Map2" width="600" /></a></td>
                      </tr>
                  <tr>
                          <td align="center" colspan="2" valign="top">
                              <table border="0" cellpadding="0" cellspacing="0" style="margin:4% 0 4% 0; background-color:#aaa;" width="555">
                                  <tbody>
                                      <tr>
                                          <td valign="middle" width="352">
                                              <div style="color:#ffffff;  font-size:39px; margin:0 21px 14px 21px; width:280px; font-family:'Noto Sans', Arial, sans-serif; text-align:left; font-size:37px;">
                                                  Your ${monthName} Digital Edition Is Here!</div>
                                              <a href="${link}" target="_blank"><img src="https://www.dentalaegis.com/media/59132/" style="margin:0 0 0 22px;" width="257" /></a></td>
                                          <td width="203">
                                              <a href="${link}" target="_blank"><img alt="" height="216px" src="${coverSrc}" style="margin:4%;" width="164" /></a></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </td>
                      </tr>
                      <tr>
                          <td align="center" colspan="2">
                              <div style="margin:1px 0 12px 0; clear:both; padding:1px 0 0 0;">
                                  <img alt="" src="http://aegispublications.com/news/cced/2015/img/dash.jpg" width="600" /></div>
                          </td>
                      </tr>
  <!--END OF THE BEGINNING-->
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
                <a href="${link}" style="text-decoration:none; color:#9c8c30; font-size:13px;" target="_blank">READ MORE</a></div>
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
  
                          <td align="center" colspan="2">
  
                              <div style="margin:1px 0 12px 0; clear:both; padding:1px 0 0 0;">
  
                                  <img alt="" src="http://aegispublications.com/news/cced/2015/img/dash.jpg" width="600" /></div>
  
                          </td>
  
                      </tr>
  
                      <tr>
  
                          <td align="center" bgcolor="#efefef" colspan="2">
  
                              <div style="font-family:Arial, sans-serif; color:#4c4c4c; font-size:14px; text-align:left; clear:both; font-weight:bold; margin:11px 8px 11px 4px; width:541px;">
  
                                  <a href="https://www.dentalaegis.com/cced/${year}/${month}" style="text-decoration: none; font-weight:bold; color: #4c4c4c;" target="_blank">${description}</a><br />
  
                                  <a href="https://www.dentalaegis.com/cced/${year}/${month}" style="text-decoration:none; color:#9c8c30; font-size:13px; text-align:left; font-weight:bold; margin:4px 8px 11px 0;" target="_blank">READ MORE</a></div>
  
                          </td>
  
                      </tr>
  
                      <tr>
  
                          <td colspan="2"> 
  
                              </td>
  
                      </tr>
  <tr>
      <td align="center" colspan="2">
          <div style="margin:1px 0 17px 0; clear:both; height:1px; background-color:#989797; width:598px">
               </div>
          <div style="width:100%; clear:both; font-family:Arial, sans-serif; font-size:13px; color:#9c8c30; text-align:center; text-transform:uppercase; margin:0 0 7px 0; font-weight:bold;">
              Connect with <em>Compendium</em></div>
      </td>
  </tr>
  <tr>
      <td align="center" colspan="2">
          <img src="http://aegispublications.com/news/cced/2016/04/share.jpg" usemap="#Map3" width="139" />
          <map name="Map3"><area coords="0,2,32,31" href="https://www.facebook.com/CompendiumDentistry" shape="rect" target="_blank" /> <area coords="54,3,84,32" href="https://twitter.com/compendiumced" shape="rect" target="_blank" /> <area coords="108,5,139,29" href="mailto:?subject=FW: Compendium ${monthName} Issue Available Now&body=I%20thought%20you%20might%20be%20interested%20in%20this: https://www.dentalaegis.com/cced/${year}/${month}/newsletter/digital?refer=true" shape="rect" target="_blank" /></map>
          </td>
  </tr>
  <tr>
      <td align="center" colspan="2">
          <div style="margin:11px 0 14px 0; clear:both; height:1px; background-color:#989797; width:598px">
               </div>
      </td>
  </tr>
  <tr>
  </tr>
  <tr>
  <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
                  <br>
  You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | <em>Compendium</em>.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-207852@news.aegispublications.com</a> to your address book<br />
  %%PLUGIN_UNSUBSCRIBE: 1089099-CCED UNSUBSCRIBE%% <br />
     <em>Compendium</em> an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
</tr>

</tbody>
</table>
</center>
</body>
</html>
  `)
}

