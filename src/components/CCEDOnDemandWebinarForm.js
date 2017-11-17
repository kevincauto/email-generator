import React from 'react';

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
  {label: 'Link', name: 'link'},
  {label: 'Image Link', name: 'imgLink'},
];

export default class CCEDLiveWebinarForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
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
            {field.label}:
            <input
              type="text"
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
            <h3> CCED On-Demand Webinar</h3>
            <div className="lyris">
            <div className="label">
            Email List: 
              <select
                name="unsubscribe"
                value={this.props.info[this.props.info.selected_template].list}
                onChange={this.handleTextChange}
              >
              <option value="">Please Select a List</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2144642-UNSUBSCRIBE%%">CCED Webinar List | 3.27.17</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2146841-UNSUBSCRIBE%%">IDT - Newsletter | 3.30.17</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2192269-UNSUBSCRIBE%%">ID Webinar List</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2145051-UNSUBSCRIBE%%">CDEWorld Webinar List | 3.28.17</option>
              <option value="%%PLUGIN_UNSUBSCRIBE: 2200418-UNSUBSCRIBE%% ">Nobel Webinar List | 3.28.17</option>
              </select>
          </div>
             <div className="label">
                Lyris Name:
                <input
                  type="text"
                  name="lyrisName"
                  value={this.props.info[this.props.info.selected_template].lyrisName}
                  onChange={this.handleTextChange}
                />
              </div> 
            </div>
            <br />
            {this.renderForm()}
          </div>
          )
      }
}


