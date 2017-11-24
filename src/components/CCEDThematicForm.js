import React from 'react';

let layout = [
    {
      typeOfRow: 'first',
      fields:  [
        {label: 'Title', name: 'title', value: undefined},
        {label: 'Description', name: 'description', value: undefined},
        {label: 'Month', name: 'month', 
            dropdown: [
                {value: '1', text: 'Send Month: January'}, 
                {value: '2', text: 'Send Month: February'},
                {value: '1', text: 'Send Month: January'}, 
                {value: '2', text: 'Send Month: February'},
            ]
        }
      ]
    },
    {
      typeOfRow: 'news',
      fields:  [
        {label: 'Header', name: 'header', value: 'IN THE NEWS'},
        {label: 'First News Title', name: 'title1', value: 'First Title'},
        {label: 'Description', name: 'description1', value: 'Lorem ipsum dolar...'},
        {label: 'First News Link', name: 'link'},
        {label: 'Second News Title', name: 'title2', value: 'Second Title'},
        {label: 'Description', name: 'description2', value: 'Lorem ipsum dolar...'},
        {label: 'First News Link', name: 'link2'},
        {label: 'Month', name: 'month', value: ''}
      ]
    },
    {
        typeOfRow: 'featured_ce',
        fields:  [
          {label: 'Title', name: 'title'},
          {label: 'Description', name: 'description'},
          {label: 'Author', name: 'author'},
          {label: 'Description', name: 'description'},
          {label: 'Credits', name: 'credits'},
          {label: 'Cost', name: 'cost'},
          {label: 'Source', name: 'author'},
          {label: 'Provider', name: 'provider'},
          {label: 'Available Dates', name: 'dates'},
          {label: 'Link', name: 'link'}
        ]
      },
      {
        typeOfRow: 'center_banner',
        fields:  [
          {label: 'Link', name: 'link'},
          {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/600x70'},
        ]
      },
      {
        typeOfRow: '3_column',
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
        fields:  [
            {label: 'Header', name: 'header'},
            {label: 'Title', name: 'title'},
            {label: 'Author', name: 'author'},
            {label: 'Description', name: 'description'},
            {label: 'Link', name: 'link'},
            {label: 'Image Source Link', name: 'imgLink', value: 'http://placehold.it/150'}
        ]
      },
      {
      typeOfRow: 'products',
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
          {label: 'Image Source Link', name: 'imgLink'},
          {label: 'Link', name: 'link'},
          {label: 'Image Source Link', name: 'url', value: 'http://placehold.it/150'}
      ]
    },
]

const FIELDS = [
  {label: 'Title', name: 'title' },
  {label: 'Dates', name: 'dates'},
  {label: 'Presenter Name', name: 'presenter'},
  {label: 'Provider', name: 'provider' },
  {label: 'Commercial Supporter', name: 'supporter' },
  {label: 'Cost', name: 'cost'},
  {label: 'CDE Credits', name: 'credits'},
  {label: 'Description', name: 'description'},
  {label: 'Learning Objective 1', name: 'lo1'},
  {label: 'Learning Objective 2', name: 'lo2'},
  {label: 'Learning Objective 3', name: 'lo3'},
  {label: 'Disclosure', name: 'disclosure'},
  {label: 'Link', name: 'link'}
];

export default class CCEDThematicForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(e){
    this.props.onDateChange(e.target.value, e.target.name);
  }

  handleTextChange(e) {
    this.props.onTextChange(e.target.value, e.target.name);
  }

  renderForm(){
    return layout[1].fields.map(field => {
        if(field.dropdown){
            return(
                <select>
                    {
                    field.dropdown.map((item, index)=><option value={item.value}>{item.text}</option>)
                    }
                
                </select>
                
            )
        }
      return (
        <div 
          className="label"
          key={field.name}
        >

        <input
          type="text"
          placeholder={field.label}
          name={field.name}
          value={this.props.info[this.props.info.selected_template][field.name]}
          onChange={this.handleTextChange}
        />
        </div>
      );
    });
  }

  render(){
      return (  
        <div className="form">
        <h3>2. Complete the information below.</h3>
        <div className="label">
            <input
              type="text"
              name="lyrisName"
              value={this.props.info[this.props.info.selected_template].lyrisName}
              onChange={this.handleTextChange}
              placeholder="Email Name"
            />
          </div>
          <div className="label">
            <select
              name="unsubscribe"
              value={this.props.info[this.props.info.selected_template].list}
              onChange={this.handleTextChange}
            >
              <option value="">Select an Email List  </option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2144642-UNSUBSCRIBE%%">CCED Webinar List | 3.27.17</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2146841-UNSUBSCRIBE%%">IDT - Newsletter | 3.30.17</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2192269-UNSUBSCRIBE%%">ID Webinar List</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2145051-UNSUBSCRIBE%%">CDEWorld Webinar List | 3.28.17</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2200418-UNSUBSCRIBE%%">Nobel Webinar List | 3.28.17</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2147849-UNSUBSCRIBE%%">CDEWorld - Lab | 4.3.17</option>
            </select>
        </div>
        <div id="month-dropdown" className="label">
          <select
            name="month"
            value={this.props.info.month}
            onChange={this.handleDateChange}
          >
          <option value="1">Send Month: January</option>
          <option value="2">Send Month: February</option>
          <option value="3">Send Month: March</option>
          <option value="4">Send Month: April</option>
          <option value="5">Send Month: May</option>
          <option value="6">Send Month: June</option>
          <option value="7">Send Month: July</option>
          <option value="8">Send Month: August</option>
          <option value="9">Send Month: September</option>
          <option value="10">Send Month: October</option>
          <option value="11">Send Month: November</option>
          <option value="12">Send Month: December</option>
          </select>
        </div>
        <div id="year-dropdown" className="label">
          <select
          name="year"
          value={this.props.info.year}
          onChange={this.handleDateChange}
        >
          <option value="2017">Send Year: 2017</option>
          <option value="2018">Send Year: 2018</option>
          <option value="2019">Send Year: 2019</option>
          <option value="2020">Send Year: 2020</option>
          <option value="2021">Send Year: 2021</option>
        </select>
        </div>
          {this.renderForm()}
      </div>
      )
  }
}


