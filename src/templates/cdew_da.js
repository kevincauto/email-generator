import _ from 'lodash';

//Auto detect the month and year for the url.  
let d = new Date();
let month = d.getMonth() + 1;
if(month<10){month = '0' + '' + month}

month = month.toString();
let year = d.getFullYear();


export const cdew_da_forms = {
  beginning: {
    typeOfRow: 'beginning',
    header: 'Beginning Section',
    closable: false,
    switchable: false,
    addable: true,
    fields:  [
      {label: 'Email Name', name: 'emailName'},
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
      {label: 'Year', name: 'year', value: '2017', 
      dropdown: [
          {value: '2017', text: 'Send Year: 2017'}, 
          {value: '2018', text: 'Send Year: 2018'},
          {value: '2019', text: 'Send Year: 2019'}, 
          {value: '2020', text: 'Send Year: 2020'},
          {value: '2021', text: 'Send Year: 2021'}, 
          {value: '2022', text: 'Send Year: 2022'}
      ]
  },
      {label: 'Masthead Link', name: 'mastheadLink', value: 'https://www.pulpdent.com'},
      {label: 'Masthead Image Source Link', name: 'mastheadSrc', value: 'http://placehold.it/600x80'},
      {label: 'Thematic Topic', name: 'topic', value: 'Implantology'},
      {label: 'Subscribe Link', name: 'subscribe'},
      {label: 'Main Image Link Source', name: 'mainImg', value: 'http://placehold.it/600x150'},
      {label: 'Intro Paragraph', name: 'intro', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  '},
    ]
  },
  live_webinar_w_header:     {
    typeOfRow: 'live_webinar_w_header',
    header: 'Live Webinar w/ Header',
    closable: true,
    switchable: true,
    addable: true,
    fields:  [
      {label: 'Header', name: 'header', value: 'IN THE NEWS'},
      {label: 'First News Title', name: 'title1'},
      {label: 'Description', name: 'description1', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  '},
      {label: 'First News Link', name: 'link1'},
      {label: 'Second News Title', name: 'title2'},
      {label: 'Description', name: 'description2', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  '},
      {label: 'First News Link', name: 'link2'},

    ]
  },
  live_webinar_wo_header: {
    typeOfRow: 'live_webinar_wo_header',
    header: 'Live Webinar w/o Header',
    closable: true,
    switchable: true,
    addable: true,
    fields:  [
      {label: 'Title', name: 'title'},
      {label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  '},
      {label: 'Author', name: 'author'},
      {label: 'Credits', name: 'credits'},
      {label: 'Cost', name: 'cost'},
      {label: 'Source', name: 'source'},
      {label: 'Provider', name: 'provider'},
      {label: 'Available Dates', name: 'dates'},
      {label: 'Link', name: 'link'},
      {label: 'Image Link Source', name: 'imgSrc', value: 'http://placehold.it/120x100'},
    ]
  },
  on_demand_webinar_w_header: {
    typeOfRow: 'on_demand_webinar_w_header',
    header: 'On-Demand Webinar w/ Header',
    closable: true,
    switchable: true,
    addable: true,
    fields:  [
      {label: 'Title', name: 'title'},
      {label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  '},
      {label: 'Author', name: 'author'},
      {label: 'Credits', name: 'credits'},
      {label: 'Cost', name: 'cost'},
      {label: 'Source', name: 'source'},
      {label: 'Provider', name: 'provider'},
      {label: 'Available Dates', name: 'dates'},
      {label: 'Link', name: 'link'},
      {label: 'Image Link Source', name: 'imgSrc', value: 'http://placehold.it/120x100'},
    ]
  },
  on_demand_webinar_wo_header: {
    typeOfRow: 'on_demand_webinar_wo_header',
    header: 'On-Demand Webinar w/o Header',
    closable: true,
    switchable: true,
    addable: true,
    fields:  [
      {label: 'Title', name: 'title'},
      {label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  '},
      {label: 'Author', name: 'author'},
      {label: 'Credits', name: 'credits'},
      {label: 'Cost', name: 'cost'},
      {label: 'Source', name: 'source'},
      {label: 'Provider', name: 'provider'},
      {label: 'Available Dates', name: 'dates'},
      {label: 'Link', name: 'link'},
      {label: 'Image Link Source', name: 'imgSrc', value: 'http://placehold.it/120x100'},
    ]
  },
  center_banner: {
    typeOfRow: 'center_banner',
    header: "Center Banner Ad",
    closable: true,
    switchable: true,
    addable: true,
    fields:  [
      {label: 'Link', name: 'link'},
      {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/600x70'},
    ]
  },
  new_content_w_header: {
    typeOfRow: 'new_content_w_header',
    header: 'New Content w/ Header',
    closable: true,
    switchable: true,
    addable: true,
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
  new_content_wo_header: {
    typeOfRow: 'featured',
    header: 'Featured Section',
    closable: true,
    switchable: true,
    addable: true,
    fields:  [
        {label: 'Header', name: 'header', value: 'FEATURED EVENT'},
        {label: 'Title', name: 'title'},
        {label: 'Author', name: 'author'},
        {label: 'Description', name: 'description', value: 'Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  Lorem ipsum dolar emet eres consequetor alias dormutus.  '},
        {label: 'Link', name: 'link'},
        {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150'}
    ]
  },
  end: {
    typeOfRow: 'end',
    header: 'End of the Email',
    closable: false,
    switchable: false,
    addable: false,
    fields: []
  }
}

export const cdew_da_initial_state = [
    _.cloneDeep(cdew_da_forms.beginning),
    _.cloneDeep(cdew_da_forms.live_webinar_w_header),
    _.cloneDeep(cdew_da_forms.live_webinar_wo_header),
    _.cloneDeep(cdew_da_forms.on_demand_webinar_w_header),
    _.cloneDeep(cdew_da_forms.on_demand_webinar_wo_header),
    _.cloneDeep(cdew_da_forms.center_banner),
    _.cloneDeep(cdew_da_forms.new_content_w_header),
    _.cloneDeep(cdew_da_forms.new_content_wo_header),
    _.cloneDeep(cdew_da_forms.end)
  ];

export function beginning(fields){
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

  return ``
}

export function live_webinar_w_header(fields){
  let header = fields[0].value;
  let title1 = fields[1].value;
  let description1 = fields[2].value;
  let link1 = fields[3].value;
  let title2 = fields[4].value;
  let description2 = fields[5].value;
  let link2 = fields[6].value;

  return(
    ``
  )
}

export function live_webinar_wo_header(fields){
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
  return(
    ``
  )
}

export function on_demand_webinar_w_header(fields){
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
  return(
    ``
  )
}

export function on_demand_webinar_wo_header(fields){
  let header = fields[0].value;
  let title = fields[1].value;
  let author = fields[2].value;
  let description = fields[3].value;
  let link = fields[4].value;
  let imgLink = fields[5].value;

  return(
    ``
  )
}

export function center_banner(fields){
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

  return(``)
}
export function new_content_w_header(fields){
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
  
    return(``)
  }
  export function new_content_wo_header(fields){
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
  
    return(``)
  }

export function end(){
  return(
    ``
  )
}