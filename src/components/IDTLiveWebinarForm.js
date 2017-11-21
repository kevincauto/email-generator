import React from 'react';

const FIELDS = [
  {label: 'Title', name: 'title' },
  {label: 'Date and Time', name: 'date'},
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
  {label: 'Link', name: 'link'},
  {label: 'TV Link', name: 'tvLink'}
];

export default class IDTLiveWebinarForm extends React.Component {
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
    return FIELDS.map(field => {
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
              fullWidth={true}
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
        <div className="label">
          <select
            name="header"
            value={this.props.info[this.props.info.selected_template].tagline}
            onChange={this.handleTextChange}
          >
          <option value="http://aegispublications.com/news/idt/2015/06/tomorrow.jpg">Webinar Tomorrow Header</option>
          <option value="http://aegispublications.com/news/idt/2015/06/tonight.jpg">Webinar Tonight Header</option>
          </select>
          </div>
          {this.renderForm()}
      </div>
      )
  }
}


