import _ from 'lodash';

//Auto detect the month and year for the url.  
let d = new Date();
let month = d.getMonth() + 1;
if(month<10){month = '0' + '' + month}

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
    fields:  [
      {label: 'Email Name', name: 'emailName', value: 'ce3'},
      {label: 'Month', name: 'month', value: month, 
          dropdown: [
              {value: '01', text: 'Send Month: January'}, 
              {value: '02', text: 'Send Month: February'},
              {value: '03', text: 'Send Month: March'}, 
              {value: '04', text: 'Send Month: April'},
              {value: '05', text: 'Send Month: May'}, 
              {value: '06', text: 'Send Month: June'},
              {value: '07', text: 'Send Month: July'}, 
              {value: '08', text: 'Send Month: August'},
              {value: '09', text: 'Send Month: September'}, 
              {value: '10', text: 'Send Month: October'},
              {value: '11', text: 'Send Month: November'}, 
              {value: '12', text: 'Send Month: December'},
          ]
      },
      {label: 'Year', name: 'year', value: year, 
      dropdown: [   
          {value: '2018', text: 'Send Year: 2018'},
          {value: '2019', text: 'Send Year: 2019'}, 
          {value: '2020', text: 'Send Year: 2020'},
          {value: '2021', text: 'Send Year: 2021'}, 
          {value: '2022', text: 'Send Year: 2022'}
      ]
      },
      {label: 'Masthead Link', name: 'mastheadLink'},
      {label: 'Masthead Image Source Link', name: 'mastheadSrc', value: 'http://placehold.it/600x80'},
      {label: 'Subscribe Link', name: 'subscribe'}
      ]
      },
  news:     {
    typeOfRow: 'news',
    header: 'News Section',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  [
      {label: 'Header', name: 'header', value: 'Upcoming Live Webinar'},
      {label: 'Title', name: 'title'},
      {label: 'Date', name: 'date'},
      {label: 'Presenter', name: 'presenter'},
      {label: 'Provider', name: 'provider'},
      {label: 'Commercial Supporter', name: 'supporter'},
      {label: 'Cost', name: 'cost'},
      {label: 'Credits', name: 'credits'},
      {label: 'Link', name: 'link'}
    ]
  },
  ce_header: {
    typeOfRow: 'ce_header',
    header: 'CE with Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  [
      {label: 'Title', name: 'title'},
      {label: 'Date', name: 'date'},
      {label: 'Presenter', name: 'presenter'},
      {label: 'Provider', name: 'provider'},
      {label: 'Commercial Supporter', name: 'supporter'},
      {label: 'Cost', name: 'cost'},
      {label: 'Credits', name: 'credits'},
      {label: 'Link', name: 'link'}
    ]
  },
  ce_wo_header: {
    typeOfRow: 'ce_wo_header',
    header: 'CE without Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  [
      {label: 'Header', name: 'header', value: 'Featured On-Demand Webinars'},
      {label: 'Title', name: 'title'},
      {label: 'Presenter', name: 'presenter'},
      {label: 'Provider', name: 'provider'},
      {label: 'Commercial Supporter', name: 'supporter'},
      {label: 'Cost', name: 'cost'},
      {label: 'Credits', name: 'credits'},
      {label: 'Link', name: 'link'}
    ]
  },
  center_banner: {
    typeOfRow: 'center_banner',
    header: 'center_banner',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  [
      {label: 'Title', name: 'title'},
      {label: 'Presenter', name: 'presenter'},
      {label: 'Provider', name: 'provider'},
      {label: 'Commercial Supporter', name: 'supporter'},
      {label: 'Cost', name: 'cost'},
      {label: 'Credits', name: 'credits'},
      {label: 'Link', name: 'link'}
    ]
  },
  clinical_header: {
    typeOfRow: 'clinical_header',
    header: "Clinical Article w/ Header",
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  [
      {label: 'Link', name: 'link'},
      {label: 'Image Source Link', name: 'imgSrc', value: 'http://placehold.it/600x70'},
    ]
  },
  clinical_wo_header: {
    typeOfRow: 'clinical_wo_header',
    header: 'Clinical w/o Header',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  [
      {label: 'Header', name: 'header', value: 'Featured CE Courses - New Content Added'},
      {label: 'Title', name: 'title'},
      {label: 'Presenter', name: 'presenter'},
      {label: 'Provider', name: 'provider'},
      {label: 'Source', name: 'source'},
      {label: 'Cost', name: 'cost'},
      {label: 'Credits', name: 'credits'},
      {label: 'Link', name: 'link'}
    ]
  },
  event: {
    typeOfRow: 'event',
    header: 'Featured Event',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  [
      {label: 'Title', name: 'title'},
      {label: 'Presenter', name: 'presenter'},
      {label: 'Provider', name: 'provider'},
      {label: 'Source', name: 'source'},
      {label: 'Cost', name: 'cost'},
      {label: 'Credits', name: 'credits'},
      {label: 'Link', name: 'link'}
    ]
  },
  video: {
    typeOfRow: 'video',
    header: 'Featured Video',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  []
  },
  new_product: {
    typeOfRow: 'new_product',
    header: 'New Products',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  [
      {label: 'Title', name: 'title'},
      {label: 'author', name: 'author'},
      {label: 'Commercial Supporter', name: 'supporter'},
      {label: 'Cost', name: 'cost'},
      {label: 'Source', name: 'source'},
      {label: 'Credits', name: 'credits'},
      {label: 'Description', name: 'description'},
      {label: 'Link', name: 'link'},
      {label: 'Image Link Source', name: 'imgSrc', value: 'http://placehold.it/155x180'}
    ]
  },
  featured_product: {
    typeOfRow: 'featured_product',
    header: 'Featured Product',
    closable: true,
    switchable: true,
    addable: true,
    draggable: true,
    fields:  [
      {label: 'Title', name: 'title'},
      {label: 'Presenter', name: 'presenter'},
      {label: 'Provider', name: 'provider'},
      {label: 'Source', name: 'source'},
      {label: 'Cost', name: 'cost'},
      {label: 'Credits', name: 'credits'},
      {label: 'Link', name: 'link'},
      {label: 'Partner Logo Source', name: 'imgSrc'},
      {label: 'Brand Link', name: 'brandLink'},
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
      {label: 'Month', name: 'month', value: month, 
      dropdown: [
          {value: '01', text: 'Send Month: January'}, 
          {value: '02', text: 'Send Month: February'},
          {value: '03', text: 'Send Month: March'}, 
          {value: '04', text: 'Send Month: April'},
          {value: '05', text: 'Send Month: May'}, 
          {value: '06', text: 'Send Month: June'},
          {value: '07', text: 'Send Month: July'}, 
          {value: '08', text: 'Send Month: August'},
          {value: '09', text: 'Send Month: September'}, 
          {value: '10', text: 'Send Month: October'},
          {value: '11', text: 'Send Month: November'}, 
          {value: '12', text: 'Send Month: December'},
      ]
  },
  {label: 'Year', name: 'year', value: year, 
  dropdown: [
       
      {value: '2018', text: 'Send Year: 2018'},
      {value: '2019', text: 'Send Year: 2019'}, 
      {value: '2020', text: 'Send Year: 2020'},
      {value: '2021', text: 'Send Year: 2021'}, 
      {value: '2022', text: 'Send Year: 2022'}
  ]
  },
    ]
  }
}

export const cdew_thematic_initial_state = [
    _.cloneDeep(cdew_thematic_forms.beginning),
    _.cloneDeep(cdew_thematic_forms.news),
    _.cloneDeep(cdew_thematic_forms.ce_header),
    _.cloneDeep(cdew_thematic_forms.ce_wo_header),
    _.cloneDeep(cdew_thematic_forms.center_banner),
    _.cloneDeep(cdew_thematic_forms.clinical_header),
    _.cloneDeep(cdew_thematic_forms.clinical_wo_header),
    _.cloneDeep(cdew_thematic_forms.event),
    _.cloneDeep(cdew_thematic_forms.video),
    _.cloneDeep(cdew_thematic_forms.new_product),
    _.cloneDeep(cdew_thematic_forms.featured_product),
    _.cloneDeep(cdew_thematic_forms.end)
  ];

export function beginning(fields){
    let emailName = fields[0].value.trim().replace(/\s+/g, '-').toLowerCase();
    let month = fields[1].value;
    let year = fields[2].value;
    let mastheadLink = fields[3].value;
    let mastheadSrc = fields[4].value;
    let subscribe = fields[5].value;

    let monthName;
    if(month === '01'){monthName = 'January'};
    if(month === '02'){monthName = 'February'};
    if(month === '03'){monthName = 'March'};
    if(month === '04'){monthName = 'April'};
    if(month === '05'){monthName = 'May'};
    if(month === '06'){monthName = 'June'};
    if(month === '07'){monthName = 'July'};
    if(month === '08'){monthName = 'August'};
    if(month === '09'){monthName = 'September'};
    if(month === '10'){monthName = 'October'};
    if(month === '11'){monthName = 'November'};
    if(month === '12'){monthName = 'December'};


  return `
  <!DOCTYPE html>
  <html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta charset="UTF-8">
      <title>Laser eNews</title>
  </head>
  
  <body bgcolor="#f9f6f1" cz-shortcut-listen="true">
  <center>
  <table width="662" border="0" cellspacing="0" cellpadding="0" style="border:solid 1px #EAE9E2; background-color:#ffffff;">
    <tbody>
        <tr>
          <!--<td colspan="2" align="center"><div style="width:600px; height:70px; text-align:center; border:solid 1px #EAE9E2; margin:11px;"></div></td>-->
      </tr>
      <tr align="center">
        <td colspan="2" style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; clear:both; color:#9f9999; padding:0px 32px 0px 0px;"><a href="http://www.denmat.com/NV_Microlaser" target="_blank"><img src="http://aegispublications.com/news/cdeworld/2014/12/images/Shannon-AEGIS-banner.jpg" width="660" height="80" style="margin:0 0 0 34px;" border="0"/></a></td>
      </tr>    
      <tr>
        <td colspan="2" style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; clear:both; color:#9f9999; text-align:right; padding:0px 32px 0px 0px;">
            <br /><a href="http://www.cdeworld.com" target="_blank" style="color:#2f84c0;">Visit Our Website</a> | <a href="http://aegispublications.com/news/cdeworld/2014/12/laser-thematic.html" target="_blank" style="color:#2f84c0;">Read Online</a> | December 8, 2014
        </td>
      </tr>
      
      <tr>
        <td colspan="2"><table width="644" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td width="494" height="112">
                  <a href="http://www.cdeworld.com"><img src="http://aegispublications.com/news/cdeworld/2014/10/cde-logo.jpg" width="420" height="85" alt="" style="margin:0 18px 27px 22px;" border="0"></a>
              </td>
              <td width="170" style="padding-bottom: 31px; padding-left: 20px;">
                  <a href="http://aegispublications.com/machform/view.php?id=157" target="_blank"><img src="http://aegispublications.com/news/cdeworld/2014/10/email-subscribebtn.png" border="0" style="height:45px; width:170px;" /></a>
              </td>
            </tr>
          </tbody>
        </table></td>
      </tr>    
        <tr>
          <td colspan="2" align="center">
          <div style="text-align:left; width:600px; height:197px; border:solid 1px #8799a6;">
              <img src="http://aegispublications.com/news/cdeworld/2014/12/images/billboard.jpg" width="600" height="197" />
          </div>
          </td>
      </tr>
      <tr>
        <td colspan="2" style="font-family:Arial, sans-serif; font-size:30px; font-weight:bold; text-align:center; color:#333333;"><br /> Laser E-News</td>
      </tr>
      <tr>
        <td colspan="2" style="font-family: Georgia, Times, serif; font-size:16px; color:#333333; text-align:center;"><div style="margin:12px 32px 21px 32px;">In <em>Laser eNews</em>, brought to you quarterly by CDEWorld, you will find the latest industry and professional news, laser-related CE articles and case studies, live laser event announcements, informational videos, and much, much more. Subscribe today so you don’t miss an issue—click on the button at the top of the page to sign up now!</div></td>
      </tr>
      <!--END OF THE BEGINNING-->
  `
}

export function news(fields){
  let header = fields[0].value;
  let title = fields[1].value;
  let date = fields[2].value;
  let presenter = fields[3].value;
  let provider= fields[4].value;
  let supporter = fields[5].value;
  let cost = fields[6].value;
  let credits = fields[7].value;
  let link = fields[8].value;

  return(
    `
    <!--START NEWS SECTION-->
    <tr>
      <td colspan="2">
      	<div style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; margin:0 32px 0 32px; line-height:27px;">In the News</div>
      	<div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
			Convergent Dental Unveils Award-Winning CO<sub>2</sub> Dental Laser at GNYDM<br />
			<a href="http://www.cnbc.com/id/102227458#" style="color:#2f84c0;">READ MORE</a><br /><br />
			BIOLASE Launches New EPIC X Diode Laser<br />
			<a href="http://www.marketwatch.com/story/biolase-launches-new-epictm-x-diode-laser-in-the-united-states-now-dentists-can-delight-their-patients-faster-2014-12-01" style="color:#2f84c0;">READ MORE</a>
      	</div>
     </td>
    </tr>

    <!--END NEWS SECTION -->
    `
  )
}

export function ce_header(fields){
  let title = fields[0].value;
  let date = fields[1].value;
  let presenter = fields[2].value;
  let provider= fields[3].value;
  let supporter = fields[4].value;
  let cost = fields[5].value;
  let credits = fields[6].value;
  let link = fields[7].value;
  return(
    `
    <!--CE WITH HEADER-->
    <tr>
        <td colspan="2" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin:0 0 -11px 0;"></td>
    </tr>
    <tr>
<td colspan="2">
	<div style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; margin:0 32px 0 32px;line-height:27px;">Featured CE</div>
	<div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; clear:both; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
		<strong style="color:#676262;">Diode Laser Soft-Tissue Surgery: Advancements Aimed at Consistent Cutting, Improved Clinical Outcomes</strong><br />
		Georgios E. Romanos, DDS, PhD, Prof Dr med dent<br>
		November/December 2013 Issue - Expires December 31, 2016<br>
		<em>Compendium of Continuing Education in Dentistry</em>
		<br />
		<a href="http://cdeworld.com/courses/4726-Diode_Laser_Soft-Tissue_Surgery:Advancements_Aimed_at_Consistent_Cutting-Improved_Clinical_Outcomes" style="color:#2f84c0;">READ MORE</a>
    </div>
</td>
</tr>
<!--END CE WITH HEADER-->
    `
  )
}

export function ce_wo_header(fields){
  let header = fields[0].value;
  let title = fields[1].value;
  let presenter = fields[2].value;
  let provider= fields[3].value;
  let supporter = fields[4].value;
  let cost = fields[5].value;
  let credits = fields[6].value;
  let link = fields[7].value;
  return(
    `
    <!--START CE WITHOUT HEADER-->
    <tr>
    <td colspan="2">
        <div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; clear:both; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
            <strong style="color:#676262;">Laser-Assisted Removal of Irritation Fibroma</strong><br />
            Robert Levine, DDS and Peter Vitruk, PhD, MInstP, CPhys<br>
            November 2014 Issue - Expires November 30, 2017<br>
            <em>CDEWorld</em><br>
            Because of the close match between coagulation depth and oral soft-tissue blood capillary diameters, a 10,600-nm CO2 laser is a highly efficient and spatially accurate photo-thermal ablation tool with excellent coagulation efficiency. The excision of benign soft-tissue masses, such as irritation fibroma, with the flexible fiber waveguide 10,600-nm CO2 laser is a minimally invasive and typically suture-free surgical modality that ensures dependable treatment of fibromas. It is, in many respects, superior to most of the alternative treatment options. Because of the excellent hemostasis it provides and the minimal damage it causes to the surrounding tissues, a CO2 laser is especially well suited for removing these lesions.<br>
            <a href="http://cdeworld.com/courses/20193-Laser-Assisted_Removal_of_Irritation_Fibroma" style="color:#2f84c0;">READ MORE</a>
        </div>
    </td>
        </tr>  
    <!--START CE WITHOUT HEADER-->
    `
  )
}

export function center_banner(fields){
  let title = fields[0].value;
  let presenter = fields[1].value;
  let provider= fields[2].value;
  let supporter = fields[3].value;
  let cost = fields[4].value;
  let credits = fields[5].value;
  let link = fields[6].value;

  return(
    `
    <!--CENTER BANNER-->
    <tr>
      <td colspan="2" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin:00;"></td>
  </tr>
  <tr>
    <td colspan="2"><div style="text-align:left; width:600px; height:80px; margin:0 32px 0 32px;"><a href="http://www.denmat.com/NV_Microlaser" target="_blank"><img src="http://aegispublications.com/news/cdeworld/2014/12/images/Shannon-AEGIS-banner.jpg" border="0"></a></div></td>
  </tr>
<!--CENTER BANNER-->
    `
  )
}

export function clinical_header(fields){
  let link = fields[0].value;
  let imgSrc = fields[1].value;
  return(`
  <!--CLINICAL ARTICLE WITH HEADER -->
  <tr>
    <td colspan="2" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin:0 0 -11px 0;"></td>
  </tr>
  <tr>
    <td colspan="2"><div style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; margin:0 32px 0 32px; line-height:27px;">Clinical Articles</div>
      <div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
          <strong style="color:#676262;">Laser Soft Tissue Crown Lengthening</strong><br />
          Scott D. Benjamin, DDS<br />
          <a href="http://www.dentalaegis.com/id/2010/06/laser-soft-tissue-crown-lengthening" style="color:#2f84c0;">READ MORE</a>
      </div>
   </td>
   </tr> 
<!--END CLINICAL ARTICLE WITH HEADER-->
  `)
}
export function clinical_wo_header(fields){
  let header = fields[0].value;
  let title = fields[1].value;
  let presenter = fields[2].value;
  let provider= fields[3].value;
  let source = fields[4].value;
  let cost = fields[5].value;
  let credits = fields[6].value;
  let link = fields[7].value;
    return(`
    <!--START CLINICAL ARTICLE WITHOUT HEADER-->  
    <tr>
     <td colspan="2">
       <div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
           <strong style="color:#676262;">Dental Lasers</strong><br />
           Allison M. DiMatteo, BA, MPS, and Terri Rafferty, BA, MA<br />
           <a href="http://www.dentalaegis.com/id/2012/11/dental-lasers" style="color:#2f84c0;">READ MORE</a>
       </div>
     </td>
   </tr>
<!--END CLINICAL ARTICLE WITHOUT HEADER-->
    `)
  }
  export function event(fields){
    let title = fields[0].value;
    let presenter = fields[1].value;
    let provider= fields[2].value;
    let source = fields[3].value;
    let cost = fields[4].value;
    let credits = fields[5].value;
    let link = fields[6].value;
  
    return(`   
    <!--START EVENT SECTION-->
    <tr>
      <td colspan="2" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin:0 0 -11px 0;"></td>
    </tr>
    <tr>
      <td colspan="2"><div style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; margin:0 32px 0 32px; line-height:27px;">Upcoming Events</div>
	  	<div style="margin:15px 32px 15px 32px;"><img src="http://aegispublications.com/news/cdeworld/2014/12/images/gloh-event.jpg"></div>
		<div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
			<strong style="color:#676262;">Introduction to Laser Science with Clinical and Hygiene Applications</strong><br />
			During this 2-day program and workshop at ASDOH, the participants will have the opportunity to gain knowledge with a thorough understanding of the principles of laser science. Hard- and soft-tissue applications will be demonstrated via hands-on cases with actual patients.<br><br>
			February 20, 2015 7:30 AM - February 21, 2015 5:00 PM | Arizona School of Dentistry & Oral Health<br>
			<a href="http://gloh-education.cdeworld.com/events/137" target="_blank" style="color:#2f84c0;">CLICK HERE TO REGISTER </a>
		</div>
      </td>
    </tr> 
<!--END EVENT SECTION-->                        
    `)
  }

  export function video(fields){
    return(
  `
  <!--START VIDEO SECTION-->  
  <tr>
    <td colspan="2" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin:0 0 -11px 0;"></td>
</tr>
<tr>
    <td>
        <div style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; margin:0 32px 0 32px; line-height:27px;">Featured Videos</div>
    </td>
    <td>
        <div style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; margin:0 32px 0 32px; line-height:27px;"></div>
    </td>
</tr>
<tr>
  <td colspan="1" valign="top">
    <div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
        <a href="http://aegispublications.com/news/cdeworld/2014/12/images/classvgingivoplasty.mov" target="_blank"><img src="http://aegispublications.com/news/cdeworld/2014/12/images/denmat-featured-video.jpg" border="0" /></a><br /><br />
        <strong style="color:#676262;">NV Microlaser</strong><br />
        The NV Microlaser from DenMat delivers the full power and capabilities of much larger desktop soft-tissue lasers in a pen-sized package. Weighs only 1.9 ounces and is completely self-contained and wireless.<br>
<a href="http://aegispublications.com/news/cdeworld/2014/12/images/classvgingivoplasty.mov" target="_blank" style="color:#2f84c0;">Click on the video to learn more.</a>
    </div>
  </td>
  <td colspan="1" valign="top">
    <div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
        <a href="https://www.youtube.com/watch?v=0RGTcusFHMA" target="_blank"><img src="http://aegispublications.com/news/cdeworld/2014/12/images/odyssey-featured-video.jpg" style="border:solid 1px #666666;" border="0" /></a><br /><br />
        <strong style="color:#676262;">Odyssey Diode Laser</strong><br />
        The Odyssey® Diode Lasers from Ivoclar Vivadent, Inc. represent the latest diode laser technology available for soft-tissue modification and preventive care.<br>
        <a href="https://www.youtube.com/watch?v=0RGTcusFHMA" target="_blank" style="color:#2f84c0;">Click on the video to learn more.</a>
    </div>
  </td>
</tr>
<!--END VIDEO SECTION -->
  `)
}

export function new_product(fields){

  let title = fields[0].value;
  let author = fields[1].value;
  let supporter = fields[2].value;
  let cost = fields[3].value;
  let source = fields[4].value;
  let credits = fields[5].value;
  let description = fields[6].value;
  let link = fields[7].value;
  let imgSrc = fields[8].value;

  return(
`
<!--START NEW PRODUCT SECTION -->
<tr>
  <td colspan="2" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin:0 0 -11px 0;"></td>
</tr>
<tr>
  <td colspan="2">
      <div style="font-family:Arial, sans-serif; font-size:16px; clear:both; font-weight:bold; color:#333333; margin:0 32px 0 32px;line-height:27px;">New Products</div>
    
  </td>
</tr>
<tr>
  <td valign="top">
      <div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; clear:both; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
            <img src="http://aegispublications.com/news/cdeworld/2014/12/images/convergent-dental-solea.png" width="140" height="85" alt=""/ style="float:right;">
            <strong style="color:#676262;">Solea</strong><br />
            Convergent Dental<br />
            Solea is the first CO2 laser system ever cleared by the FDA for hard- and soft-tissue ablation. It’s fast, precise, virtually noiseless, and anesthesia-free for the vast majority of procedures.<br>
            <a href="http://www.convergentdental.com/solea/" target="_blank" style="color:#2f84c0;">READ MORE</a>
      </div>
        
        
    </td>
  <td valign="top">
      <div style="font-family:Arial, sans-serif; font-size:12px; clear:both; font-weight:normal; clear:both; color:#9f9999; margin:15px 32px 15px 32px; line-height:16px;">
            <img src="http://aegispublications.com/news/cdeworld/2014/12/images/biolase-epicx.png" width="140" height="85" alt="" style="float:right;"/>
            <strong style="color:#676262;">EPIC X</strong><br />
            BIOLASE<br>
            EPIC X features innovations such as pre-initiated tips, laser-assisted whitening, and temporary relief of minor pain, all from a single diode laser solution.<br />
            <a href="http://go.biolase.com/epic-x" target="_blank" style="color:#2f84c0;">READ MORE</a>
      </div>
    </td>
</tr>
<!--END NEW PRODUCT SECTION -->`
  )}

export function featured_product(fields){

  let title = fields[0].value;
  let presenter = fields[1].value;
  let provider = fields[2].value;
  let source = fields[3].value;
  let cost = fields[4].value;
  let credits = fields[5].value;
  let link = fields[6].value;
  let imgSrc = fields[7].value;
  let brandLink = fields[8].value;

  return(
  `

`)
}


export function end(fields){
  let month = fields[0].value;
  let year = fields[1].value;
  return(
    `  
    <!--START OF THE END-->
    <tr>
      <td colspan="2" align="center"><img src="http://aegispublications.com/news/cdeworld/2014/10/theme-email-divide.jpg" width="600" height="45" alt="" style="margin:0;"></td>
    </tr>    

    <tr>
        <td align="center" style="font-family:Arial, sans-serif; font-size:11px; text-align:center; color:#666666; font-size:10px;" valign="middle" colspan="2">
              <br>
        You received this e-mail because you are a customer of <a href="https://www.aegisdentalnetwork.com" target="_blank" style="color:#666 !important; text-decoration:none;">AEGIS Dental Network</a> | CDEWorld.<br />To ensure delivery, please add <a href="mailto:reply-207852@news.aegispublications.com" style="color:#666 !important; text-decoration:none;" target="_blank">reply-207852@news.aegispublications.com</a> to your address book<br />
        %%PLUGIN_UNSUBSCRIBE: 1146575-UNSUBSCRIBE%% <br />
             CDEWorld an AEGIS Publication | 104 Pheasant Run, Suite 105 | Newtown, PA 18940 | <a href="https://www.aegisdentalnetwork.com/privacy-policy" target="_blank" style="color:#666; text-decoration:none;">Privacy Policy</a><br><br></td>
        </tr>
    <tr>
      <td colspan="2">&nbsp;</td>
    </tr>
  <tr>
    <td colspan="2"></td></tr></tbody>
</table>

</center>

<map name="Map">
  <area shape="rect" coords="-1,2,26,25" href="https://www.facebook.com/pages/CDE-World/141910839256792?ref=br_tf">
  <area shape="rect" coords="29,2,51,30" href="https://twitter.com/CDE_World#">
  <area shape="rect" coords="54,2,77,33" href="mailto:?subject=FW: Laser eNews&amp;body=I thought you might be interested in this: http://aegispublications.com/news/cdeworld/2014/12/laser-thematic.html">
</map>

</body></html>
`
  )
}