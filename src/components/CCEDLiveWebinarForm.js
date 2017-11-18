import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


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
  {label: 'Headshot Link', name: 'headshot'},
  {label: 'TV Link', name: 'tvLink'}
];

export default class CCEDLiveWebinarForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
      }
      componentDidMount() {

      }

      handleDateChange(e){
        this.props.onDateChange(e.target.value, e.target.name)
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
            
                <select
                  name="unsubscribe"
                  value={this.props.info[this.props.info.selected_template].list}
                  onChange={this.handleTextChange}
                  fullWidth={true}
                >
                  <option value="">&#9660; &nbsp;&nbsp;Please Select an Email List  </option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: 2144642-UNSUBSCRIBE%%">&#9660; &nbsp;&nbsp;CCED Webinar List | 3.27.17</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: 2146841-UNSUBSCRIBE%%">&#9660; &nbsp;&nbsp;IDT - Newsletter | 3.30.17</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: 2192269-UNSUBSCRIBE%%">&#9660; &nbsp;&nbsp;ID Webinar List</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: 2145051-UNSUBSCRIBE%%">&#9660; &nbsp;&nbsp;CDEWorld Webinar List | 3.28.17</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: 2200418-UNSUBSCRIBE%%">&#9660; &nbsp;&nbsp;Nobel Webinar List | 3.28.17</option>
                  <option value="%%PLUGIN_UNSUBSCRIBE: 2147849-UNSUBSCRIBE%%">&#9660; &nbsp;&nbsp;CDEWorld - Lab | 4.3.17</option>
                </select>
             
            </div>
              <div className="label">
                
                <input
                  type="text"
                  name="lyrisName"
                  value={this.props.info[this.props.info.selected_template].lyrisName}
                  onChange={this.handleTextChange}
                  placeholder="Email Name"
                />
              </div>
            

            <div id="month-dropdown" className="label">
              
            <select
              name="month"
              value={this.props.info.month}
              onChange={this.handleDateChange}
            >
            <option value="1">&#9660; &nbsp;&nbsp;Send Month: January</option>
            <option value="2">&#9660; &nbsp;&nbsp;Send Month: February</option>
            <option value="3">&#9660; &nbsp;&nbsp;Send Month: March</option>
            <option value="4">&#9660; &nbsp;&nbsp;Send Month: April</option>
            <option value="5">&#9660; &nbsp;&nbsp;Send Month: May</option>
            <option value="6">&#9660; &nbsp;&nbsp;Send Month: June</option>
            <option value="7">&#9660; &nbsp;&nbsp;Send Month: July</option>
            <option value="8">&#9660; &nbsp;&nbsp;Send Month: August</option>
            <option value="9">&#9660; &nbsp;&nbsp;Send Month: September</option>
            <option value="10">&#9660; &nbsp;&nbsp;Send Month: October</option>
            <option value="11">&#9660; &nbsp;&nbsp;Send Month: November</option>
            <option value="12">&#9660; &nbsp;&nbsp;Send Month: December</option>
            </select>
            </div>

            <div id="year-dropdown" className="label">
              
              <select
              name="year"
              value={this.props.info.year}
              onChange={this.handleDateChange}
            >
              <option value="2017">&#9660; &nbsp;&nbsp;Send Year: 2017</option>
              <option value="2018">&#9660; &nbsp;&nbsp;Send Year: 2018</option>
              <option value="2019">&#9660; &nbsp;&nbsp;Send Year: 2019</option>
              <option value="2020">&#9660; &nbsp;&nbsp;Send Year: 2020</option>
              <option value="2021">&#9660; &nbsp;&nbsp;Send Year: 2021</option>
            </select>
            </div>

            <div className="label">
              
            <select
              name="tagline"
               value={this.props.info[this.props.info.selected_template].tagline}
              onChange={this.handleTextChange}
            >
            <option value="">&#9660; &nbsp;&nbsp;Tagline Header (Currently None)</option>
            <option value="Don’t Forget – You’re Registered for Tomorrow's Webinar!">&#9660; &nbsp;&nbsp;CCED Live Webinar Tomorrow</option>
            <option value="Don’t Forget – You’re Registered for Tonight's Webinar!">&#9660; &nbsp;&nbsp;CCED Live Webinar in Two Hours</option>
            </select>
            </div>
            {this.renderForm()}
          </div>
          )
      }
}


