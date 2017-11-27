import React from 'react';

class Form2 extends React.Component{
    constructor(props) {
        super(props);
        this.handleTemplateChange = this.handleTemplateChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleAddSection = this.handleAddSection.bind(this);
        this.handleDeleteSection = this.handleDeleteSection.bind(this);
      }

      handleDeleteSection(field, e){
        this.props.onDeleteSection(field);
      };

      handleAddSection(field, e){
        this.props.onAddSection(field);
      }
  
      handleTemplateChange(e) {
        this.props.onTemplateChange(e.target.value);
      }

      handleFieldChange(form,field,e){
        this.props.onFieldChange(form,field,e.target.value);
      }


    
    render(){
        let display = this.props.info[this.props.info.selected_template]
            .filter(object => object.fields) //only worry about sections that have fields (last section does not)
            .map((object,i)=>{
            return(
                <div className="blue" key={i + object.typeOfRow}>
                
                {
                  this.props.info[this.props.info.selected_template][i].closable ? 
                  <i className="icon-remove-sign close" onClick={(e)=>this.handleDeleteSection(i,e)}></i> : 
                  <i></i> 
                }

                <h3>{object.header}</h3>
                {object.fields.map((field,j)=>{
                if(field.dropdown){
                    return(
                        <div className="label" key={i + '' + j}>
                            <select
                                form-number={i}
                                field-number={j}
                                value={this.props.info[this.props.info.selected_template][i].fields[j].value}
                                onChange={(e)=>this.handleFieldChange(i,j,e)}
                            >
                                {field.dropdown
                                .map((selection,k) => {
                                    return(
                                    <option 
                                        value={selection.value}
                                        key={i + '' + j + '' + k}
                                    >
                                    {selection.text}
                                    </option>
                                    )

                                })}
                            </select>
                        </div>
                    )
                }
                return(            
                  <div 
                    className="label"
                    key={i + ''+ j + field.name }
                  >
                  <input
                    type="text"
                    formnumber={i}
                    fieldnumber={j}
                    placeholder={field.label}
                    name={field.name}
                    value={this.props.info[this.props.info.selected_template][i].fields[j].value}
                    onChange={(e)=>this.handleFieldChange(i,j,e)}
                  />
                  </div>)
                })}
                {
                  this.props.info[this.props.info.selected_template][i].addable ? 
                  <i className="icon-plus-sign add" onClick={(e)=>this.handleAddSection(i,e)}></i> : 
                  <i></i> 
                }
                
             
                
                </div>
            )
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
            <h3>2. Complete the form.</h3>
            <div className="form">
              {display}
            </div>
          </div>


        )
    }

}

export default Form2;