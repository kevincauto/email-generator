import React from 'react';

class Form2 extends React.Component{
    constructor(props) {
        super(props);
        this.handleTemplateChange = this.handleTemplateChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
      }
      handleDateChange(value, name){
        this.props.onDateChange(value, name)
      }
    
      handleTextChange(value, name, html) {
        this.props.onTextChange(value, name, html);
      }
    
      handleTemplateChange(e) {
        this.props.onTemplateChange(e.target.value);
      }


    
    render(){
        let display = this.props.info.cced_thematic.map((object,index)=>{
            return(object.fields.map((field,i)=>{
                return(            <div 
                    className="label"
                    key={index + ''+ i + field.name }
                  >
                  <input
                    type="text"
                    placeholder={field.label}
                    name={field.name}
                    value={this.props.info[this.props.info.selected_template][field.name]}
                    onChange={this.handleTextChange}
                  />
                  </div>)
            }))
        })
        return(
            <div id="main-form">
            <h3>1. Select an email template.</h3>
            <select
              value={this.props.info.selected_template}
              onChange={this.handleTemplateChange}
            >
              <option value="">Select an Email Template</option>
              <option value="cced_live_webinar">CCED Live Webinar</option> 
              <option value="cced_on_demand_webinar">CCED On-Demand Webinar</option>
              <option value="cdew_live_webinar">CDEW Live Webinar</option>
              <option value="id_live_webinar">ID Live Webinar</option>    
              <option value="id_on_demand_webinar">ID On-Demand Webinar</option>
              {/* <option value="id_reader">ID Reader</option> */}
              <option value="cced_thematic">CCED Thematic</option>
              <option value="idt_live_webinar">IDT Live Webinar</option>
              <option value="idt_on_demand_webinar">IDT On-Demand Webinar</option>
            </select>
            <h3>Complete the form</h3>
            <div className="form">
              {display}
            </div>
          </div>


        )
    }

}

export default Form2;