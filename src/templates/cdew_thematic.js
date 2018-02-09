import _ from 'lodash';

//Auto detect the month and year for the url.  
let d = new Date();
let month = d.getMonth() + 1;
if (month < 10) { month = '0' + '' + month }

month = month.toString();
let year = d.getFullYear();

export const cdew_thematic_forms = {
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
                label: 'Month', name: 'month', value: month, dropdown: [
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
                label: 'Year', name: 'year', value: year, dropdown: [
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
            { label: 'Thematic Topic', name: 'topic' },
            { label: 'Banner Image Source', name: 'imgSrc', value: 'http://placehold.it/600x150' }
        ]
    },
    live_webinar: {
        typeOfRow: 'live_webinar',
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
    on_demand_webinar: {
        typeOfRow: 'on_demand_webinar',
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
    end_webinar_section: {
        typeOfRow: 'end_webinar_section',
        header: "End of Webinar Section",
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Message', name: 'message', value: 'Visit the CDEWorld Library for access to additional CE courses focused on Infection Control!' },
            { label: 'Link', name: 'link', value: 'https://cdeworld.com/courses/search?utf8=%E2%9C%93&q=&c=294&p=&o=&s=&commit=SEARCH' }
        ]
    },
    featured_ce: {
        typeOfRow: 'featured_ce',
        header: 'Featured CE w/ Header',
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
            { label: 'Supporter', name: 'supporter' },
            { label: 'Cost', name: 'cost' },
            { label: 'Credits', name: 'credits' },
            { label: 'Link', name: 'link' }
        ]
    },
    featured_ce_wo_header: {
        typeOfRow: 'featured_ce_wo_header',
        header: 'Featured CE w/o Header',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Title', name: 'title' },
            { label: 'Presenter', name: 'presenter' },
            { label: 'Provider', name: 'provider' },
            { label: 'Source', name: 'source' },
            { label: 'Supporter', name: 'supporter' },
            { label: 'Cost', name: 'cost' },
            { label: 'Credits', name: 'credits' },
            { label: 'Link', name: 'link' }
        ]
    },
    end_featured_ce_section: {
        typeOfRow: 'end_featured_ce_section',
        header: "End Featured CE Section",
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Message', name: 'message', value: 'Visit the CDEWorld Library for access to additional CE courses focused on Infection Control!' },
            { label: 'Link', name: 'link', value: 'https://cdeworld.com/courses/search?utf8=%E2%9C%93&q=&c=294&p=&o=&s=&commit=SEARCH' }
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
            { label: 'Image Source', name: 'imgSrc', value: 'http://placehold.it/600x70' },
        ]
    },
    featured_article: {
        typeOfRow: 'featured_article',
        header: 'Featured Article w/ Header',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header' },
            { label: 'Title', name: 'title' },
            { label: 'Author', name: 'author' },
            { label: 'Source', name: 'source' },
            { label: 'Link', name: 'link' }
        ]
    },
    featured_article_wo_header: {
        typeOfRow: 'featured_article_wo_header',
        header: "Featued Article w/o Header",
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Title', name: 'title' },
            { label: 'Author', name: 'author' },
            { label: 'Source', name: 'source' },
            { label: 'Link', name: 'link' }
        ]
    },
    ebook: {
        typeOfRow: 'ebook',
        header: 'eBook Section',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Title', name: 'title' },
            { label: 'Author', name: 'author' },
            { label: 'Supporter', name: 'supporter' },
            { label: 'Cost', name: 'cost' },
            { label: 'Credits', name: 'credits' },
            { label: 'Description', name: 'description' },
            { label: 'Link', name: 'link' },
            { label: 'Image Source', name: 'imgSrc', value: 'http://placehold.it/200x250' },
        ]
    },
    event: {
        typeOfRow: 'event',
        header: 'Featured Event',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header' },
            { label: 'Title', name: 'title' },
            { label: 'Details', name: 'details', value: 'November 18, 2017 | Boston, MA | 7 CEU' },
            { label: 'Description', name: 'description' },
            { label: 'Link', name: 'link' },
            { label: 'Image Source', name: 'imgSrc', value: 'http://placehold.it/200x150' }
        ]
    },
    video: {
        typeOfRow: 'video',
        header: 'Featured Video',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Title', name: 'title' },
            { label: 'Link', name: 'link' },
            { label: 'Image Source', name: 'imgSrc', value: 'http://placehold.it/200x150' }
        ]
    },
    featured_webinar: {
        typeOfRow: 'featured_webinar',
        header: 'Featured Webinar',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header', value: 'Featured Webinar' },
            { label: 'Title', name: 'title' },
            { label: 'Presenter', name: 'presenter' },
            { label: 'Dates', name: 'dates' },
            { label: 'Link', name: 'link' },
            { label: 'Image Source', name: 'imgSrc', value: 'http://placehold.it/200x150' }
        ]
    },
    featured_product: {
        typeOfRow: 'featured_product',
        header: 'Featured Product',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header' },
            { label: 'Title', name: 'title' },
            { label: 'Description', name: 'description' },
            { label: 'Link', name: 'link' },
            { label: 'Image Link Source', name: 'imgSrc', value: 'http://placehold.it/200150' }
        ]
    },
    products: {
        typeOfRow: 'products',
        header: 'Non-Featured Products',
        closable: true,
        switchable: true,
        addable: true,
        draggable: true,
        fields: [
            { label: 'Header', name: 'header', value: 'Regenerative Dentistry Products' },
            { label: 'First Product', name: 'product1' },
            { label: 'First Company', name: 'company1' },
            { label: 'First Description', name: 'description1' },
            { label: 'First Link', name: 'link1' },
            { label: 'First Image Source', name: 'imgSrc1' },
            { label: 'Second Product', name: 'product2' },
            { label: 'Second Company', name: 'company2' },
            { label: 'Second Description', name: 'description2' },
            { label: 'Second Link', name: 'link2' },
            { label: 'Second Image Source', name: 'imgSrc2' },
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

export const cdew_thematic_initial_state = [
    _.cloneDeep(cdew_thematic_forms.beginning),
    _.cloneDeep(cdew_thematic_forms.live_webinar),
    _.cloneDeep(cdew_thematic_forms.live_webinar_wo_header),
    _.cloneDeep(cdew_thematic_forms.on_demand_webinar),
    _.cloneDeep(cdew_thematic_forms.on_demand_webinar_wo_header),
    _.cloneDeep(cdew_thematic_forms.end_webinar_section),
    _.cloneDeep(cdew_thematic_forms.featured_ce),
    _.cloneDeep(cdew_thematic_forms.featured_ce_wo_header),
    _.cloneDeep(cdew_thematic_forms.end_featured_ce_section),
    _.cloneDeep(cdew_thematic_forms.center_banner),
    _.cloneDeep(cdew_thematic_forms.featured_article),
    _.cloneDeep(cdew_thematic_forms.featured_article_wo_header),
    _.cloneDeep(cdew_thematic_forms.ebook),
    _.cloneDeep(cdew_thematic_forms.event),
    _.cloneDeep(cdew_thematic_forms.video),
    _.cloneDeep(cdew_thematic_forms.featured_webinar),
    _.cloneDeep(cdew_thematic_forms.featured_product),
    _.cloneDeep(cdew_thematic_forms.products),
    _.cloneDeep(cdew_thematic_forms.end)
];

export function beginning(fields) {
    let emailName = fields[0].value.trim().replace(/\s+/g, '-').toLowerCase();
    let month = fields[1].value;
    let year = fields[2].value;
    let mastheadLink = fields[3].value;
    let mastheadSrc = fields[4].value;
    let subscribe = fields[5].value;
    let topic = fields[6].value || '';
    let imgSrc = fields[7].value;

    //uppercase all words.
    topic = topic.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });

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


    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>${topic} CE Opportunities</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <style type="text/css">
          
      /* RESET STYLES */
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      table { border-collapse: collapse !important; }
      body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
          
      @media (max-width: 425px) {
          /* General Styles */
          
          img {
              max-width: 100%;
          }
          .margin {
              margin-left: 15px !important;
              margin-right: 15px !important;
          }
      .clear {
            float: none !important;
              display: block !important;
              width: 100% !important;
              margin-bottom: 10px !important;
          }
          
          /* Email Container */
          
          .email-container {
              width: 100% !important;
          }
          .main-content,
          .main-content {
              width: 100% !important;
          }
          
          /* Header and Navigation */
          
          .nav-mod {
              padding: 20px 0 0 0 !important;
          }
          .nav-mod td {
              width: 100% !important;
              display: block;
              text-align: center;
          }
          .nav-mod td .soc {
              width: 56px !important;
              padding: 10px 0 !important;
          }
          .masthead {
              padding: 0 10px !important;
          }
          .image img {
              width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
          }
          .header-module table {
              width: 100% !important;
          }
          .header-module table td {
              width: 50% !important;
              text-align: center;
          }
          .cdeworld-logo,
          .subscribe-button {
              margin: 0 !important;  
              padding: 0 !important;
          }
          .cdeworld-logo {
              max-width: 95%;
              padding: 10px 0 !important;
          }
          .subscribe-button img {
              max-width: 73% !important;
              height: auto !important;
          }
          .main-image img {
              border: none !important;
          }
          .newsletter-title {
              font-size: 1.2em !important;
              padding-left: 15px !important;
              padding-right: 15px !important;
          }
          
          /* Modules */
          
          .module-title {
              padding: 0 15px !important;
          }
          .module-body {
              margin: 0 15px !important;
          }
          .columns td {
              width: 100% !important;
              display: block !important;
          }
          .link {
              padding: 12px 10px !important;
              display: inline-block !important;
              background-color: #2f84c0 !important;
              color: #ffffff !important;
              text-decoration: none !important;
              margin-bottom: 15px !important;
              margin-top: 7px !important;
          }
          
          /* Section End */
          .section-end-mod table {
              margin: 12px 15px 0 15px !important; 
          }
          
          /* Divider */
          .divider {
              text-align: center !important;
          }
          
          .featured-article {
              margin-top: 15px !important;
              margin-bottom: 15px !important;
          }
      }
      </style>
  </head>
  <body style="background-color: #f9f6f1;">
      <table class="email-container" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td>
          <div style="display:none;font-size:1px;color:#333333;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
             <a href="https://cdeworld.com"></a>
          </div>
        </td>
      </tr>
          <tr>
              <td bgcolor="#f9f6f1" align="center" style="padding: 8px;">
                  <!-- Main Table -->
                  <table class="main-content" width="662" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="border: 1px solid #eae9e2; background-color: #ffffff;">
                      <!-- Main Content -->
                      <tr>
                          <!-- "Navigation" Module -->
                          <td class="nav-mod" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; text-align:right; padding:20px 32px 0px 0px;">    
                              <table cellspacing="0" cellpadding="0" border="0" align="right">
                                  <tr>
                                      <td align="right">
                                          ${monthName} ${year} | <a href="http://www.cdeworld.com" target="_blank" style="color:#2f84c0;">Visit Our Website</a> | <a href="http://aegispublications.com/news/cdeworld/2017/12/${emailName}.html" target="_blank" style="color:#2f84c0;">Read Online</a> | <a href="mailto:?subject=FW: ${topic} eNews!&amp;body=I thought you might be interested in this: http://aegispublications.com/news/cdeworld/2017/12/${emailName}.html" target="_blank" style="color:#2f84c0;">Forward to a Colleague</a> |&nbsp;
                                      </td>
                                      <td align="right">
                                          <img class="soc" src="http://aegispublications.com/news/ce/2016/templates/soc-2.png" alt="" width="33" height="14" usemap="#Map2" style="padding-top:1px;">
                                      </td>
                                  </tr>
                              </table>
                          </td>
                          <!-- End of Navigation Module -->
                      </tr>
                      <tr>
                          <!-- Masthead Ad -->
                          <td align="center" class="masthead image" style="font-family:Arial, sans-serif; padding:21px 32px 20px 0px;">
                              <a href="${mastheadLink}" target="_blank"><img class="ads" src="${mastheadSrc}" width="600" height="80" style="margin:0 0 0 34px; border: 1px solid #efefef;" border="0"/></a>
                          </td>
                          <!-- End of Masthead Ad -->
                      </tr>
                      <tr>
                          <!-- Header Module -->
                          <td class="header-module">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                      <td>
                                          <a href="http://www.cdeworld.com" target="_blank">
                                              <img class="cdeworld-logo" src="http://aegispublications.com/news/cdeworld/2017/logos/cde-logo.jpg" width="420" height="85" alt="CDEWorld" style="margin:0 18px 27px 22px;" border="0">
                                          </a>
                                      </td>
                                      <td class="subscribe-button" width="170" style="padding-bottom: 31px; padding-left: 20px; padding-right: 28px;"><a href="${subscribe}" target="_blank"><img src="http://aegispublications.com/news/cdeworld/2014/10/email-subscribebtn.png" border="0" style="height:45px;" /></a></td>
                                  </tr>
                              </table>
                          </td>
                          <!-- End of Header Module -->
                      </tr>
                      <tr>
                          <!-- Image Banner -->
                          <td class="main-image banner" align="center">
                           <img alt="" src="${imgSrc}" style="margin:5px 0 1px 0; border:solid 1px #aaaaaa;" width="600"> 
                          </td>
                          <!-- End of Image Banner -->
                      </tr>
                      <tr>
                          <!-- Newsletter Title Module -->
                          <td class="newsletter-title" style="font-family:Arial, sans-serif; font-size:28px; font-weight:bold; padding: 1em 32px; color:#333333;">
                         ${topic} CE Opportunities         
                        </td>
                        
                          <!-- End of Newsletter Title Module -->
                      </tr>
          <!--END OF THE BEGINNING-->
  `
}

export function live_webinar(fields) {


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
        `
    <!--LIVE WEBINAR WITH HEADER-->
    <tr>
            <td>
                <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; font-weight:bold; color:#333333; padding: 0 32px 0 32px; line-height:27px;">${header}</div>
                <div class="module-body" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;">
                    <span style="color:#333333; font-weight: bold;">${title}</span>
                    <div style="margin:0px 0;">
                        ${date}<br>
                        <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:5px 0;">
                            <tr>
                                <td valign="top" width="48%">
                                    Presenter: ${presenter}<br>
                                    Provider: ${provider}<br>
                                    Commercial Supporter: <em>${supporter}</em>
                               </td>
                                <td valign="top">
                                    Credits: ${credits}<br>
                                    Cost: ${cost}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">REGISTER NOW</a> 
                </div>
  <!--END LIVE WEBINAR WITH HEADER SECTION-->
    `
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
    <!--START LIVE WEBINAR WITHOUT HEADER-->
    <div class="module-body" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;">
                      <span style="color:#333333; font-weight: bold;">${title}</span>
                      <div style="margin:0px 0;">
                          ${date}<br>
                          <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:5px 0;">
                              <tr>
                                  <td valign="top" width="48%">
                                      Presenter: ${presenter}<br>
                                      Provider: ${provider}<br>
                                      Commercial Supporter: <em>${supporter}</em>
                                 </td>
                                  <td valign="top">
                                      Credits: ${credits}<br>
                                      Cost: ${cost}
                                  </td>
                              </tr>
                          </table>
                      </div>
                      <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">REGISTER NOW</a> 
                  </div>
              </td>
          </tr>
    <!--START LIVE WEBINAR WITHOUT HEADER-->
    `
    )
}

export function on_demand_webinar(fields) {
    let header = fields[0].value;
    let title = fields[1].value;
    let presenter = fields[2].value;
    let provider = fields[3].value;
    let supporter = fields[4].value;
    let cost = fields[5].value;
    let credits = fields[6].value;
    let link = fields[7].value;
    return (
        `
    <!--START ON-DEMAND WEBINAR WITH HEADER-->
    <tr>
        <td>
            <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; padding: 0 32px 0 32px; line-height:27px;">${header}</div>
            <!-- Webinar # -->
            <div class="module-body" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;">
                <span style="color:#333333; font-weight: bold;">${title}</span>
                <div style="margin:0px 0px;">
                    <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:5px 0;">
                        <tr>
                            <td valign="top" width="48%">
                                Presenter: ${presenter}<br>
                                Provider: ${provider}<br>
                                Commercial Supporter: <em>${supporter}</em>
                          </td>
                            <td valign="top">
                                Credits: ${credits}<br>
                                Cost: ${cost}
                            </td>
                        </tr>
                    </table>
                </div>
                <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">CLICK HERE TO VIEW THE WEBINAR</a> 
            </div>
            <!-- End of Webinar # -->
        </td>
    </tr>
    <!--END ON-DEMAND WEBINAR WITH HEADER-->
    `
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
        `
    <!--START ON-DEMAND WEBINAR WITHOUT HEADER-->
    <tr>
        <td>
            <!-- Webinar # -->
            <div class="module-body" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;">
                <span style="color:#333333; font-weight: bold;">${title}</span>
                <div style="margin:0px 0px;">
                    <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:5px 0;">
                        <tr>
                            <td valign="top" width="48%">
                                Presenter: ${presenter}<br>
                                Provider: ${provider} <br>
                                Commercial Supporter: <em>${supporter}</em>
                          </td>
                            <td valign="top">
                                Credits: ${credits}<br>
                                Cost: ${cost}
                            </td>
                        </tr>
                    </table>
                </div>
                <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">CLICK HERE TO VIEW THE WEBINAR</a> 
            </div>
            <!-- End of Webinar # -->
        </td>
    </tr>
    <!--END ON-DEMAND WEBINAR WITHOUT HEADER-->
    `
    )
}

export function end_webinar_section(fields) {

    let message = fields[0].value;
    let link = fields[1].value;

    return (`
  <!--WEBINAR LIBRARY LINK-->
  <tr>
      <!-- Section-end Link -->
      <td class="section-end-mod">
          <table cellpadding="0" cellspacing="0" border="0" align="left" style="border: 1px solid #e6e6e6; margin-top: 12px; margin-left: 32px;">
              <tr>
                  <td>
                      <div style="padding: 18px 20px; font-family:Arial, sans-serif; font-size: 12px; line-height:1.4em; color:#525252;">
                          <a href="${link}" target="_blank" style="color: #2469aa; text-decoration: none;">${message}</a>
                      </div>
                  </td>
              </tr>
          </table>
      </td>
      <!-- End of Section-end Link -->
  </tr>
  <!--END WEBINAR LIBRARY LINK-->
  `)
}
export function featured_ce(fields) {
    let header = fields[0].value;
    let title = fields[1].value;
    let presenter = fields[2].value;
    let provider = fields[3].value;
    let source = fields[4].value;
    let supporter = fields[5].value;
    let cost = fields[6].value;
    let credits = fields[7].value;
    let link = fields[8].value;
    return (`
    <!--FEATURED CE COURSE WITH HEADER-->
    <tr>
        <!-- Divider -->
        <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
        <!-- End of Divider -->
    </tr>

    <tr>
        <!-- Featured Courses Module -->
        <td>
            <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; font-weight:bold; color:#333333; padding: 0 32px 0 32px;line-height:27px;">${header}</div>
            <!-- Course # -->
            <div class="module-body" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:25px 32px 15px 32px; line-height:16px;">
                <span style="color:#333333; font-weight: bold;">${title}</span><br />
                ${presenter}<br>
                <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:5px 0;">
                    <tr>
                        <td width="48%" height="32" valign="top">
                            Provider: ${provider}<br>
                            Source: <em>${source}</em>
                            ${supporter ? `<br />Commercial Supporter: <em>${supporter}</em>` : ''}
                        </td>
                        <td valign="top">
                            Credits: ${credits}<br>
                            Cost: ${cost}
                        </td>
                    </tr>
                </table>
                <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">FOR MORE INFORMATION</a> 
            </div>
            <!-- End of Course # -->
        </td>
    </tr>
    <!--END FEATURED CE COURSE WITH HEADER-->
    `)
}
export function featured_ce_wo_header(fields) {
    let title = fields[0].value;
    let presenter = fields[1].value;
    let provider = fields[2].value;
    let source = fields[3].value;
    let supporter = fields[4].value;
    let cost = fields[5].value;
    let credits = fields[6].value;
    let link = fields[7].value;

    return (`   
    <!--START FEATURED CE COURSE WITHOUT HEADER-->
    <tr>
      <td>
    <!-- Course # -->
    <div class="module-body" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:25px 32px 15px 32px; line-height:16px;">
        <span style="color:#333333; font-weight: bold;">${title}</span><br />
        ${presenter}<br>
        <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:5px 0;">
            <tr>
                <td valign="top" width="48%">
                    Provider: ${provider}<br>
                    Source: <em>${source}</em>
                    ${supporter ? `<br />Commercial Supporter: <em>${supporter}</em>` : ''}
                    
                </td>
                <td valign="top">
                    Credits: ${credits}<br>
                    Cost: ${cost}
                </td>
            </tr>
        </table>
      <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">FOR MORE INFORMATION</a> 
    </div>
    <!-- End of Course # -->
      <td>
    <tr>
<!--END FEATURED CE COURSE WITHOUT HEADER-->          
    `)
}

export function end_featured_ce_section(fields) {

    let message = fields[0].value;
    let link = fields[1].value;

    return (
        `
      <!--START END OF FEATURED CE SECTION -->
      <tr>
          <td class="section-end-mod">
              <table cellpadding="0" cellspacing="0" border="0" align="left" style="border: 1px solid #e6e6e6; margin-top: 12px; margin-left: 32px;">
                  <tr>
                      <td>
                          <div style="padding: 18px 20px; font-family:Arial, sans-serif; font-size: 12px; line-height:1.4em; color: #525252;">
                            <a href="https://cdeworld.com/courses" target="_blank" style="color:#2469aa; text-decoration: none;">Visit the CDEWorld Library for access to additional dental CE courses!</a>
                          </div>
                      </td>
                  </tr>
              </table>
          </td>
          <!-- End of Featured Course Module -->
      </tr>
    <!--END END OF FEATURED CE SECTION -->
      `
    )
}

export function center_banner(fields) {
    let link = fields[0].value;
    let imgSrc = fields[1].value;

    return (
        `
      <!--START CENTER BANNER-->
      <tr>
          <!-- Divider -->
          <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
          <!-- End of Divider -->
      </tr>
      
      <tr>
          <!-- Center Banner Ad Module -->
        <td class="masthead image" align="center">
           <a href="${link}" target="_blank">
            <img class="ads" src="${imgSrc}" width="600" height="80" style="border: 1px solid #efefef;" border="0"/>
          </a>
        </td>
        <!-- End of Center Banner Ad Module -->
      </tr>
    <!--END CENTER BANNER-->
      `
    )
}

export function featured_article(fields) {
    let header = fields[0].value;
    let title = fields[1].value;
    let author = fields[2].value;
    let source = fields[3].value;
    let link = fields[4].value;

    return (
        `
      <!--FEATURED ARTICLE WITH HEADER-->
      <tr>
          <!-- Divider -->
          <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
          <!-- End of Divider -->
      </tr>
      
      <tr>
          <!-- Featured Article Module -->
          <td>
            <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; padding:0 32px 0 32px; line-height:27px;">${header}</div>
              <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                      <!-- Article - Only -->
                      <td valign="top">
                          <div class="module-body featured-article" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;">
                              <span style="color:#333333; font-weight: bold;">${title}</span><br />
                          ${author}<br>
                              <em>${source}</em><br>
                            <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">READ MORE</a> 
                          </div>
                      </td>
                      <!-- End of Article - Only -->                                
                  </tr>
              </table>
          </td>
      </tr>
    <!--END FEATURED ARTICLE WITH HEADER-->
      `
    )
}

export function featured_article_wo_header(fields) {
    let title = fields[0].value;
    let author = fields[1].value;
    let source = fields[2].value;
    let link = fields[3].value;

    return (
        `
      <!--FEATURED ARTICLE WITHOUT HEADER-->
      <tr>
        <td>
          <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                  <!-- Article - Only -->
                  <td valign="top">
                      <div class="module-body featured-article" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;">
                          <span style="color:#333333; font-weight: bold;">${title}</span><br />
                      ${author}<br>
                          <em>${source}</em><br>
                        <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">READ MORE</a> 
                      </div>
                  </td>
                  <!-- End of Article - Only -->                                
              </tr>
          </table>        
        </td>
      <!-- End of Featured Article -->
      </tr>
      <!--END FEATURE ARTICLE WITHOUT HEADER-->
      `
    )
}

export function ebook(fields) {
    let title = fields[0].value;
    let author = fields[1].value;
    let supporter = fields[2].value;
    let cost = fields[3].value;
    let credits = fields[4].value;
    let description = fields[5].value;
    let link = fields[6].value;
    let imgSrc = fields[7].value;

    return (`
    <!--START EBOOK-->
    <tr>
        <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
    </tr>
    
    <tr>
        <td>
            <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; font-weight:bold; color:#333333; padding:0 32px 0 32px; line-height:27px;">Featured eBook</div>
          <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td valign="top">
                        <a href="${link}" target="_blank">
                            <img class="margin" src="${imgSrc}" width="154" border="0" style="margin:15px 0 15px 32px;">
                        </a>
                    </td>
                    <td valign="top" width="70%">
                        <div class="margin" style="font-family:Arial, sans-serif; font-size:13px; color:#676262; margin:15px 42px 15px 32px; line-height:18px;">
                            <span style="color:#333333; font-weight: bold;">
${title}</span>
                            <div style="margin:8px 0;">
                            ${author ? `<strong>By:</strong> ${author}<br>` : ''}
                            <strong>Supported By: </strong><em>${supporter}</em><br>
                                <strong>Cost: </strong>${cost} | <strong>Credits:</strong> ${credits} 
                          </div>
                            <div style="margin-top: 4px;">${description}
</div>
                            <a href="${link}" target="_blank" style="color: #fff;display:inline-block; margin-top:14px; background-color:#2f84c0;text-decoration: none;padding: 10px 12px;border-radius: 5px;">Download your free eBook</a>
                        </div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    
    <tr>
        <td class="section-end-mod">
            <table cellpadding="0" cellspacing="0" border="0" align="left" style="border: 1px solid #e6e6e6; margin-top: 12px; margin-left: 32px;">
                <tr>
                    <td>
                        <div style="padding: 18px 20px; font-family:Arial, sans-serif; font-size: 12px; line-height:1.4em; color:#525252;">
                            <a href="https://cdeworld.com/ebooks" target="_blank" style="color: #2469aa; text-decoration: none;">Visit the CDEWorld eBook Library for access to the dental information you need, when you need it.</a>
                        </div>
                    </td>
                </tr>
            </table>
        </td>
        <!-- End of Featured eBook -->
    </tr>
<!--END EBOOK-->
    `)
}
export function event(fields) {
    let header = fields[0].value;
    let title = fields[1].value;
    let details = fields[2].value;
    let description = fields[3].value;
    let link = fields[4].value;
    let imgSrc = fields[5].value;
    return (`
      <!--FEATURED EVENT-->
      <tr>
          <!-- Divider -->
          <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
          <!-- End of Divider -->
      </tr>
      <tr>
          <td>
              <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; font-weight:bold; color:#333333; padding:0 32px 0 32px; line-height:27px;">Featured Event</div>
            <table class="columns" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                      <td valign="top">
                          <a href="${link}" target="_blank">
                              <img class="margin" src="${imgSrc}" width="154" height="204" border="0" style="margin:15px 0 15px 32px;">
                          </a>
                      </td>
                      <td valign="top" width="70%">
                          <div class="margin" style="font-family:Arial, sans-serif; font-size:13px; color:#676262; margin:15px 42px 15px 32px; line-height:18px;">
                              <span style="color:#333333; font-weight: bold;">${title}</span>
                              <div style="margin:8px 0;">
                                  <strong>${details}</strong>
                              </div>
                              <div style="margin-top: 4px;">${description}</div>
                              <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">READ MORE</a> 
                          </div>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <!--END FEATURED EVENT-->
      `)
}
export function video(fields) {
    let title = fields[0].value;
    let link = fields[1].value;
    let imgSrc = fields[2].value;

    return (`   
      <!--START FEATURED VIDEO-->
      <tr>
          <!-- Divider -->
          <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
          <!-- End of Divider -->
      </tr>
      <tr>
          <!-- Featured Video Module -->
          <td>
              <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; padding:0 32px 0 32px; line-height:27px;">Featured Video</div>
              <table class="columns">
                  <!-- Video -->
                  <tr>
                    <td valign="top">
                          <a href="${link}" target="_blank"><img class="margin" src="${imgSrc}" alt="" border="0" style="margin:15px 23px 15px 32px;"></a>
                      </td>
                      <td valign="top">
                          <div class="margin" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 23px 15px 32px; line-height:16px; width:276px;">
                          <div style="margin-bottom: 5px;"> <strong>${title}</strong><br>
</div>
                                  <a class="link" href="${link}" target="_blank" style="color:#2f84c0;">Click on the video to learn more.</a> </div>
                      </td>
                  </tr>
                  <!-- End of Video -->
              </table>
          </td>
          <!-- End of Featured Video Module -->
      </tr>
      <!--END FEATURED VIDEO-->             
      `)
}

export function featured_webinar(fields) {
    let header = fields[0].value;
    let title = fields[1].value;
    let presenter = fields[2].value;
    let dates = fields[3].value;
    let link = fields[4].value;
    let imgSrc = fields[5].value;

    return (
        `
  <!--START FEATURED WEBINAR SECTION-->       
  <tr>
      <!-- Divider -->
      <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
      <!-- End of Divider -->
  </tr>
  <tr>
      <td>
          
          <table class="columns" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>
                  
                  <td width="50%" valign="top">
                  <a href="${link}" target="_blank"><img src="${imgSrc}" alt="" width="140" class="clear" style="float:right; margin:0 47px 0 27px;"></a>
                    <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; font-weight:bold; color:#333333; padding:0 32px 0 32px;line-height:27px;">${header}</div>
                      <div class="margin" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;">
                        <div style="margin:8px 0;"><strong>${title}</strong><br>${presenter}<br>
                        ${dates}
                        <a href="${link}" target="_blank" style="color:#2f84c0;"><br>
                        READ MORE</a></div>

                    </div>
                  </td>
                 
              </tr>
          </table>
      </td>
  </tr>
<!--END FEATURED WEBINAR SECTION-->
  `)
}

export function featured_product(fields) {
    let header = fields[0].value;
    let title = fields[1].value;
    let description = fields[2].value;
    let link = fields[3].value;
    let imgSrc = fields[4].value;
    return (
        `
<!--START FEATURED PRODUCT SECTION-->
<tr>
    <!-- Divider -->
    <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
    <!-- End of Divider -->
</tr>
<tr>
    <!-- Featured Product Module -->
    <td>
        
        <table class="columns" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
                <!-- Product # -->
                <td width="50%" valign="top">
                <a href="${link}" target="_blank"><img src="${imgSrc}" alt="" width="240" class="clear" style="float:right; margin:0 27px 0 0;"></a>
                  <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; font-weight:bold; color:#333333; padding:0 32px 0 32px;line-height:27px;">${header}</div>
                    <div class="margin" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;">
                      <div style="margin:8px 0;"><strong>${title}</strong><br>${description}<br>
                      <a href="${link}" target="_blank" style="color:#2f84c0;">READ MORE</a></div>

                  </div>
                </td>
                <!-- End of Product # -->
            </tr>
        </table>
    </td>
    <!-- End of Featured Product Module -->
</tr>
<!--END FEATURED PRODUCT SECTION-->
`
    )
}

export function products(fields) {
    fields: [
        { label: 'Header', name: 'header' },
        { label: 'First Product', name: 'product1' },
        { label: 'First Company', name: 'company1' },
        { label: 'First Description', name: 'description1' },
        { label: 'First Link', name: 'link1' },
        { label: 'First Image Source', name: 'imgSrc1' },
        { label: 'Second Product', name: 'product2' },
        { label: 'Second Company', name: 'company2' },
        { label: 'Second Description', name: 'description2' },
        { label: 'Second Link', name: 'link2' },
        { label: 'Second Image Source', name: 'imgSrc2' },
    ]


    let header = fields[0].value;
    let product1 = fields[1].value;
    let company1 = fields[2].value;
    let description1 = fields[3].value;
    let link1 = fields[4].value;
    let imgSrc1 = fields[5].value;
    let product2 = fields[6].value;
    let company2 = fields[7].value;
    let description2 = fields[8].value;
    let link2 = fields[9].value;
    let imgSrc2 = fields[10].value;

    return (
        `
  <!--START NON-FEATURED PRODUCTS-->
  <tr>
      <!-- Divider -->
      <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
      <!-- End of Divider -->
  </tr>
  
  <tr>
      <!-- Products Module -->
      <td>
          <div class="module-title" style="font-family:Arial, sans-serif; font-size:16px; font-weight:bold; color:#333333; padding:0 32px 0 32px;line-height:27px;"><strong>${header}</strong></div>
          <table class="columns" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>
                  <!-- Product # -->
                  <td width="50%" valign="top">
                      <div class="margin" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;"> 
                        <a class="link" href="${link1}" target="_blank"><img class="clear" src="${imgSrc1}" width="140" alt="" style="float:right;"></a>
                          <span style="color:#333333; font-weight: bold;">${product1}</span><br />
                          <em>${company1}</em>
                          <div style="margin:8px 0;">${description1}</div>
                        <a class="link" href="${link1}" target="_blank" style="color:#2f84c0;">READ MORE</a> 
                      </div>
                  </td>
                  <!-- End of Product # -->
                  <!-- Product # -->
                  <td width="50%" valign="top">
                      <div class="margin" style="font-family:Arial, sans-serif; font-size:12px; color:#54575A; margin:15px 32px 15px 32px; line-height:16px;"> 
                        <a class="link" href="  ${link2}" target="_blank"><img class="clear" src="${imgSrc2}" width="140" alt="" style="float:right;"></a>
                          <span style="color:#333333; font-weight: bold;">${product2}</span><br />
                          <em>${company2}</em>
                          <div style="margin:8px 0;">${description2}</div>
                        <a class="link" href="  ${link2}" target="_blank" style="color:#2f84c0;">READ MORE</a> 
                      </div>
                  </td>
                  <!-- End of Product # -->
              </tr>
          </table>
      </td>
      <!-- End of Products Module -->
  </tr>
<!--END NON-FEATURED PRODUCTS-->
`)
}


export function end(fields) {

    return (
        `  
    <!--START OF THE END OF THE EMAIL-->
    <tr>
        <!-- Divider -->
        <td class="divider" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin: 12px 0;"></td>
        <!-- End of Divider -->
    </tr>
    
    <tr>
        <!-- Fine Print - Credits -->
        <td class="masthead image">
            <img class="ads" src="http://aegispublications.com/news/cdeworld/2017/08/images/dls-fineprint.jpg" width="540" alt="" style="margin-left:25px;">
        </td>
        <!-- End of Fine Print - Credits -->
    </tr>
    


    
    <!-- End of Main Content -->
</table>    
</td>
</tr>
</table>
<table width="662" cellpadding="0" cellspacing="0" border="0" align="center">
<tr>
<td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle">
  <br>
You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | CDEWorld.<br />To ensure delivery, please add <a href="mailto:reply-215892@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-215892@news.aegispublications.com</a> to your address book<br />
%%PLUGIN_UNSUBSCRIBE: 1146575-UNSUBSCRIBE%% <br />
 CDEWorld a part of the AEGIS Dental Network | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
</tr>
</table>
<map name="Map">
<area shape="rect" coords="-1,2,26,25" href="https://www.facebook.com/pages/CDE-World/141910839256792?ref=br_tf" target="_blank">
<area shape="rect" coords="29,2,51,30" href="https://twitter.com/CDEWorld#" target="_blank">
<area shape="rect" coords="54,2,77,33" href="mailto:?subject=FW: Regenerative Dentistry eNews!&amp;body=I thought you might be interested in this: http://aegispublications.com/news/cdeworld/2017/12/regen-thematic.html">
</map>
<map name="Map2" id="Map2">
<area shape="rect" coords="17,0,32,13" href="https://twitter.com/CDEWorld#" target="_blank">
<area shape="rect" coords="0,0,16,14" href="https://www.facebook.com/pages/CDE-World/141910839256792?ref=br_tf" target="_blank">
</map>
</body></html>
`
    )
}