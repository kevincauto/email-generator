let title1, title2, description1, description2, link1, link2 = undefined;

export const cced_thematic_template = [
    {
      typeOfRow: 'beginning',
      header: 'Beginning Section',
      fields:  [
        {label: 'Title', name: 'title', value: undefined},
        {label: 'Description', name: 'description', value: undefined},
        {label: 'Month', name: 'month', value: '1', 
            dropdown: [
                {value: '1', text: 'Send Month: January'}, 
                {value: '2', text: 'Send Month: February'},
                {value: '3', text: 'Send Month: January'}, 
                {value: '4', text: 'Send Month: February'},
            ]
        }
      ]
    },
    {
      typeOfRow: 'news',
      header: 'News Section',
      fields:  [
        {label: 'Header', name: 'header', value: 'IN THE NEWS'},
        {label: 'First News Title', name: 'title1'},
        {label: 'Description', name: 'description1', value: 'Lorem ipsum dolar...'},
        {label: 'First News Link', name: 'link1'},
        {label: 'Second News Title', name: 'title2'},
        {label: 'Description', name: 'description2', value: 'Lorem ipsum dolar...'},
        {label: 'First News Link', name: 'link2'},
        {label: 'Month', name: 'month', value: ''}
      ]
    },
    {
        typeOfRow: 'ce',
        header: 'Continuing Education Section',
        fields:  [
          {label: 'Title', name: 'title'},
          {label: 'Description', name: 'description'},
          {label: 'Author', name: 'author'},
          {label: 'Description', name: 'description'},
          {label: 'Credits', name: 'credits'},
          {label: 'Cost', name: 'cost'},
          {label: 'Source', name: 'source'},
          {label: 'Provider', name: 'provider'},
          {label: 'Available Dates', name: 'dates'},
          {label: 'Link', name: 'link'}
        ]
      },
      {
        typeOfRow: 'center_banner',
        header: "Center Banner Ad",
        fields:  [
          {label: 'Link', name: 'link'},
          {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/600x70'},
        ]
      },
      {
        typeOfRow: '3_column',
        header: '3 Column Section',
        fields:  [
            {label: 'First Header', name: 'header1'},
            {label: 'First Title', name: 'title1'},
            {label: 'First Author', name: 'author1'},
            {label: 'First Link', name: 'link1'},
            {label: 'Second Header', name: 'header2'},
            {label: 'Second Title', name: 'title2'},
            {label: 'Second Author', name: 'author2'},
            {label: 'Second Link', name: 'link2'},
            {label: 'Third Header', name: 'header3'},
            {label: 'Third Title', name: 'title3'},
            {label: 'Third Author', name: 'author3'},
            {label: 'Third Link', name: 'link3'},            
        ]
      },
      {
        typeOfRow: 'featured',
        header: 'Featured Section',
        fields:  [
            {label: 'Header', name: 'header', value: 'FEATURED EVENT'},
            {label: 'Title', name: 'title'},
            {label: 'Author', name: 'author'},
            {label: 'Description', name: 'description'},
            {label: 'Link', name: 'link'},
            {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150'}
        ]
      },
      {
      typeOfRow: 'products',
      header: 'Products Section',
      fields:  [
          {label: 'Header', name: 'header', value: 'FEATURED PRODUCTS'},
          {label: 'First Product', name: 'product1'},
          {label: 'First Description', name: 'description1'},
          {label: 'First Link', name: 'link2'},
          {label: 'Second Product', name: 'product1'},
          {label: 'Second Description', name: 'description1'},
          {label: 'Second Link', name: 'link2'},
          {label: 'Featured Product', name: 'product3'},
          {label: 'Featured Description', name: 'description3'},
          {label: 'Featured Link', name: 'link3'},
          {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150'},
      ]
    },
    {
        typeOfRow: 'featured',
        header: 'Featured Section',
        fields:  [
            {label: 'Header', name: 'header', value: 'FEATURED VIDEO'},
            {label: 'Title', name: 'title'},
            {label: 'Author', name: 'author'},
            {label: 'Description', name: 'description'},
            {label: 'Link', name: 'link'},
            {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150'}
        ]
      },
      {
        typeOfRow: 'end',
        header: 'End of the Email',
        fields: []
      },
  ];

export const html_sections = [
  {typeOfRow: 'beginning', 
    html: 
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
                  <td style="padding-top:0px;padding-bottom:;padding-right:0;padding-left:0;">
                    <div style="text-align:center;font-family:'Times New Roman', Times, serif; font-size:12px; margin:5px 0px;">
                      Having Trouble Viewing This Email? <a href="https://www.dentalaegis.com/cced/2017/11/newsletter/bioactivity" style="color:#000;" target="_blank">Click Here</a></div>
                    <table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
                      <tbody>
                        <tr>
                          <td class="full-width-image" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                            <a href="https://www.pulpdent.com/activa-bioactive-hands-on-demo-by-dr-john-comisi-at-gnydm-2017/" style="color:#ee6a56;text-decoration:underline;" target="_blank"> <img alt="" src="https://www.dentalaegis.com/media/64582/" style="border-width:0;width:100%;max-width:600px;height:auto;" /> </a></td>
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
                                Bioactivity eNews</div>
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
                                    <a href="mailto:?subject=Forward: Compendium Bioactivity&body=I thought you might be interested in this: https://www.dentalaegis.com/cced/2017/11/newsletter/bioactivity?refer=true" style="text-decoration:none; color:#000000; padding-left:10px; font-family:'Times New Roman', serif; font-size:11px;">▶ Forward to a Colleague</a> <a href="http://www.dentalaegis.com/cced/subscribe/thematic?111417a" style="text-decoration:none; color:#000000;padding-left:10px; font-family:'Times New Roman', serif; font-size:11px;" target="_blank">▶ Subscribe</a></td>
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
                            <a href="#" style="color:#ee6a56;text-decoration:underline;" target="_blank"> </a>
                            <center>
                              <img alt="" src="https://www.dentalaegis.com/media/64522/" style="border-width:0;width:100%;max-width:598px;height:auto; border:solid 1px #ddd;" /></center>
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
                              Welcome to the Bioactivity newsletter, featuring continuing education opportunities and other clinical material from the pages of <em>Compendium</em>.</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                            </tr>
    <!--END BEGINNING SECTION-->                       
    `},
    {typeOfRow: 'news',
      html: 
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
                                  <div style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top; width:73px; text-align:center;">
                                    In The News</div>
                                                          </center>
                                                          
                                                          <!--SINGLE NEWS ITEM -->
                                <div style="font-size:16px; font-weight:bold; margin:0 0 0 14px; font-family:'Times New Roman', serif;">
                                  <a href="{link1}" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">
                                  {title1}</a></div>
                                <div style="font-size:14px; margin:0 0 0 14px; font-family:'Times New Roman', serif; font-weight:normal;">
                                  {description1}</div>
                                <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 14px 14px;">
                                                              <a href="{link1}" style="color:#76706a; text-decoration:none; font-weight:normal;" target="_blank">More Info ▶</a></div>
                                                          <!--END SINGLE NEWS ITEM -->    
    <!--SECOND NEWS ITEM --> 
                                <div style="font-size:16px; font-weight:bold; margin:0 0 0 14px; font-family:'Times New Roman', serif;">
                                  <a href="{link2}" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">{title2}</a></div>
                                <div style="font-size:14px;  margin:0 0 0 14px; font-family:'Times New Roman', serif; font-weight:normal;">
                                  {description2}</div>
                                <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 14px 14px;">
                                  <a href="{link2}" style="color:#76706a; text-decoration:none; font-weight:normal;" target="_blank">More Info ▶</a></div>
                                                          </div>
                                                          
      
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                              </tr>
                  <!-- END NEWS ITEMS -->       
      `
    },
    {
      typeOfRow: 'ce',
      html:
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
                                          <a href="https://cced.cdeworld.com/courses/5054Preservation_in_Young_Patients_of_Pulp_Vitality_and_Anatomical-Functional_Restoration_of_the_Lost_Structure" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">Preservation in Young Patients of Pulp Vitality and Anatomical-Functional Restoration of the Lost Structure </a></div>
                                      <div style="font-size:14px; font-family:'Times New Roman', serif;">
                                          Read about a successful pulp capping and stepwise excavation associated with restorative treatment for deep caries lesions of anterior upper teeth.<br />
                                          <em>Carlos Andres Villavicencio Espinoza, DDS, MSc, PhD; Juan Fernando Ordoñez Aguilera, DDS, MSc; </em><br />
                                          <strong>Credits:</strong> 2 SI<br />
                                          <strong>Cost:</strong> $16.00<br />
                                          <strong>Source:</strong> <em>Compendium of Continuing Education in Dentistry</em><br />
                                          <strong>Provider:</strong> AEGIS Publications, LLC<br />
                                          <strong>Available Dates: </strong>March 1, 2017 - March 31, 2020</div>
                                        <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 14px 0;">
                                                                              <a href="https://cced.cdeworld.com/courses/5054Preservation_in_Young_Patients_of_Pulp_Vitality_and_Anatomical-Functional_Restoration_of_the_Lost_Structure" style="color:#76706a; text-decoration:none; " target="_blank">Read More ▶</a></div>
                                                                              
                                                                              
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
                                            <a href="https://cced.cdeworld.com/courses/5054Preservation_in_Young_Patients_of_Pulp_Vitality_and_Anatomical-Functional_Restoration_of_the_Lost_Structure" target="_blank"><img alt="" src="https://cced.cdeworld.com/media/13355" style="border-width:0;max-width:120px; border: 1px solid #666" width="120" /></a></center>
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
    },
    {
      typeOfRow: 'center_banner',
      html:
      `<!-- START CENTER BANNER -->
      <tr>
        <td style="padding-top:0px;padding-bottom:;padding-right:0;padding-left:0;">
          <table align="center" class="outer" style="border-spacing:0;font-family:sans-serif;color:#333333;Margin:0 auto;width:100%;max-width:600px;">
            <tbody>
              <tr>
                <td class="full-width-image" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                  <a href="http://www.pulpdent.com/cement/" style="color:#ee6a56;text-decoration:underline;" target="_blank"> <img alt="" src="https://www.dentalaegis.com/media/64581/" style="border-width:0;width:100%;max-width:600px;height:auto; padding-bottom: 3px; margin-bottom:3px; border-bottom:solid 1px #bbb;" /> </a></td>
              </tr>
            </tbody>
          </table>
        </td>
                  </tr>
<!-- END CENTER BANNER -->   `
    },
    {
      typeOfRow: '3_column',
      html: `<!--START 3 COLUMN-->
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
                    <span align="left" style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top; text-align:left; font-weight:normal; text-align:left; width: 110px">Clinical Articles</span><br />
                    <p style="text-align:left; font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none; text-align:left;">
                      <a href="http://www.dentalaegis.com/cced/2016/05/Contemporary-Use-of-Bioactive-Materials-in-Restorative-Dentistry" style="text-decoration:none;color:#000;" target="_blank">Contemporary Use of Bioactive Materials in Restorative Dentistry</a></p>
                    <div style="font-size:14px; font-family:'Times New Roman', serif; margin:0 7px 0 0; text-align:left;">
                      <em>Gerard Kugel, DMD, MS, PhD; and Steven Eisen, DMD</em></div>
                    <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 0px 0; text-align:left;">
                      <a href="http://www.dentalaegis.com/cced/2016/05/Contemporary-Use-of-Bioactive-Materials-in-Restorative-Dentistry" style="color:#76706a; text-decoration:none;" target="_blank">Read More ▶</a></div>
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
<span align="left" style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top; text-align:left; font-weight:normal; text-align:left;">

          Featured Products</span>													<br />
                    <p style="text-align:left; font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none; text-align:left; margin-top:12px;">
                      <a href="http://www.dentalaegis.com/cced/2017/04/oral-hygiene-past-present-and-future" style="text-decoration:none;color:#000;" target="_blank">Oral Hygiene: Past, Present, and Future</a></p>
                    <div style="font-size:14px; font-family:'Times New Roman', serif; margin:0 7px 0 0; text-align:left;">
                      <em>Michael P. Rethman, DDS, MS</em></div>
                    <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 0px 0; text-align:left;">
                      <a href="http://www.dentalaegis.com/cced/2017/04/oral-hygiene-past-present-and-future" style="color:#76706a; text-decoration:none;" target="_blank">Read More ▶</a></div>
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
                    <span align="left" style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top; text-align:left; font-weight:normal; text-align:left; width: 110px">Featured Article</span><br />
                    <p style="text-align:left; font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none; text-align:left; margin-top:0px;">
                      <a href="https://www.pulpdent.com/da-2-year-recall-activa-bioactive/" style="text-decoration:none;color:#000;" target="_blank">Dental Advisor Awards ACTIVA BioACTIVE the Excellent Rating in Two-Year Recall</a></p>
                    <div style="font-size:14px; font-family:'Times New Roman', serif; margin:0 7px 0 0; text-align:left;">
                       </div>
                    <div style="font-family:Gotham, sans-serif; font-size:12px; margin:0 0 0px 0; text-align:left;">
                      <a href="https://www.pulpdent.com/da-2-year-recall-activa-bioactive/" style="color:#76706a; text-decoration:none;" target="_blank">Read More ▶</a></div>
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
    },
    {
      typeOfRow: 'featured',
      html:
      `
      <!-- Featured Section -->
      
                  <tr>
                    <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                      <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">
                        <tbody>
                          <tr>
                            <td class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:0px;padding-left:0px;text-align:left;">
                              <div style=" border-top:solid 1px #d0d0d2; border-bottom:solid 1px #d0d0d2; background-image:url(http://aegispublications.com/news/cced/2016/02/webinar-bg.jpg); background-repeat:repeat-x; font-family:Arial, san-serif; padding: 0px 10px 10px; margin: 0px 0px 0px; font-size: 13px; text-align: left; color:#000; font-weight: 300; letter-spacing: .8; display:block;
      
      overflow:auto;">
                                <center>
                                  <div style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top; width: 136px">
                                    Featured Event</div>
                                </center>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td width="60%">
                                        <div style="font-size:16px; font-weight:bold; margin:0 0 0 14px; font-family:'Times New Roman', serif;">
                                          <a href="https://www.pulpdent.com/activa-bioactive-hands-on-demo-by-dr-john-comisi-at-gnydm-2017/" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">ACTIVA BioACTIVE Hands-On Demo</a></div>
                                        <div style="font-size:14px; margin:0 0 0 14px; font-family:'Times New Roman', serif;">
                                          ACTIVA BioACTIVE hands-on demo by Dr. John Comisi at the Greater New York Dental Meeting on Sunday, November 26 at Booth #2212<br />
                                          <a href="https://www.pulpdent.com/activa-bioactive-hands-on-demo-by-dr-john-comisi-at-gnydm-2017/" style="color:#76706a; text-decoration:none; font-family:Gotham, sans-serif; font-size:12px;" target="_blank">Learn More ▶</a></div>
                                      </td>
                                      <td width="40%">
                                        <center>
                                          <a href="https://www.pulpdent.com/activa-bioactive-hands-on-demo-by-dr-john-comisi-at-gnydm-2017/" target="_blank"><img align="right" alt="" src="https://www.dentalaegis.com/media/64589/" style="border-width:0;max-width:150px; margin-right:10px;" width="150" /></a></center>
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
    },
    {
      typeOfRow: 'products',
      html: `
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
                            <div style="background-color:#333333; color:#fff; text-transform:uppercase; font-size:10px; font-family:Arial, San Serif; padding:2px 6px; display: inline-block; letter-spacing: .5px; margin:0px 0px 14px 0px; vertical-align:top; width: 124px">
                              Featured Products</div>
                            <br />
                            <div style="font-size:16px; font-weight:bold; margin:0 0 0 0px; font-family:'Times New Roman', serif; ">
                              <a href="https://www.dentalaegis.com/id/products/shofu/beautifil-ii/?pc=composites" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">BEAUTIFIL II</a></div>
                            <div style="font-size:14px; margin:0 0 0 0px; font-family:'Times New Roman', serif;">
                              Shofu’s BEAUTIFIL® II is a universal nano-hybrid composite incorporating S-PRG (surface pre-reacted glass ionomer) technology that contains a stable phase of glass-ionomer for esthetic and long-lasting restorations that release and recharge fluoride.<br />
                              <a href="https://www.dentalaegis.com/id/products/shofu/beautifil-ii/?pc=composites" style="color:#76706a; text-decoration:none; font-family:Gotham, sans-serif; font-size:12px;" target="_blank">Learn More ▶</a></div>
                            <br />
                            <div style="font-size:16px; font-weight:bold; margin:0 0 0 0px; font-family:'Times New Roman', serif; ">
                              <a href="https://www.dentalaegis.com/id/products/brasseler-usa/endosequence-bc-sealer/" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">EndoSequence BC RRM</a></div>
                            <div style="font-size:14px; margin:0 0 0 0px; font-family:'Times New Roman', serif;">
                              Unlike conventional base/catalyst sealers, BC Sealer™ utilizes the moisture naturally present in the dentinal tubules to initiate its setting reaction.<br />
                              <a href="https://www.dentalaegis.com/id/products/brasseler-usa/endosequence-bc-sealer/" style="color:#76706a; text-decoration:none; font-family:Gotham, sans-serif; font-size:12px;" target="_blank">Learn More ▶</a></div>
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
                                <a href="https://www.pulpdent.com/dr-ramsey-reviews-activa-bioactive-baseliner-cement/" style="font-size:16px; font-weight:bold; font-family:'Times New Roman', serif; color:#000000; text-decoration:none;" target="_blank">ACTIVA BioACTIVE-BASE/LINER</a></div>
                              <div style="font-size:14px; margin:0 0 0 0px; font-family:'Times New Roman', serif;">
                                The ACTIVA BioACTIVE-BASE/LINER releases calcium, phosphate, and fluoride, chemically bonds to teeth, and seals out microleakage with no etching or bonding required. It also contains a wear-resistant, shock-absorbing rubberized resin.<br />
                                <a href="https://www.pulpdent.com/dr-ramsey-reviews-activa-bioactive-baseliner-cement/" style="color:#76706a; text-decoration:none; font-family:Gotham, sans-serif; font-size:12px;" target="_blank">Learn More ▶</a></div>
                              <br />
                              <center>
                                <a href="https://www.pulpdent.com/dr-ramsey-reviews-activa-bioactive-baseliner-cement/" target="_blank"><img alt="" src="https://www.dentalaegis.com/media/64567/" style="margin:0 0 0 0; clear:both; border:solid 1px #aaaaaa; margin:0 0 0 0px; width:150px;" width="150" /></a></center>
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
      `
    },
    {
      typeOfRow: 'end',
      html: `<tr>
      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
        <table style="border-spacing:0;font-family:sans-serif;color:#333333; " width="100%">
          <tbody>
            <tr>
              <td class="inner contents" style="padding-top:0px;padding-bottom:10px;padding-right:10px;padding-left:10px;text-align:left;">
                <center>
                  <div style="font-family:Gotham, sans-serif; display:block; padding:0 10px 0 10px; margin:0; font-size:10px; color:#000; text-decoration:none;">
                    <em>Compendium</em> | 104 Pheasant Run, Suite 105 | Newtown, PA 18940</div>
                  <small style="font-family:Gotham, sans-serif; display:block; padding:0 10px 0 10px; margin:0; font-size:10px; color:#000; text-decoration:none;">To ensure delivery, please add reply-207851@news.aegispublications.com to your address book</small> <small style="font-family:Gotham, sans-serif; display:block; padding:0 10px 0 10px; margin:0; font-size:10px; color:#000; text-decoration:none;">%%PLUGIN_UNSUBSCRIBE: 1089099-CCED UNSUBSCRIBE%%</small></center>
              </td>
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
    }
]