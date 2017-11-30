import React from 'react';
import {rows} from '../templates/cced_thematic';


import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// using some little inline style helpers to make the app look okay
const grid = 8;
const getItemStyle = (draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  // padding: grid * 2,
  // margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgray',
  padding: grid,
  width: 300,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleAddSection = this.handleAddSection.bind(this);
    this.handleDeleteSection = this.handleDeleteSection.bind(this);
    this.handleFormSwitch = this.handleFormSwitch.bind(this);
  }

  handleFormSwitch(form, e){
    this.props.onFormSwitch(form, e);
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
    this.props.onFieldChange(form,field,e);
  }
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    console.log(this.props.info.selected_template);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.props.info[this.props.info.selected_template].map((object,i) => (
                <Draggable key={i} draggableId={i}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        style={getItemStyle(
                          provided.draggableStyle,
                          snapshot.isDragging
                        )}
                        {...provided.dragHandleProps}
                      >
                      <div className="blue" key={i + object.typeOfRow}>
                      {/* closable? If yes add a red x icon*/}
                      {
                        this.props.info[this.props.info.selected_template][i].closable ? 
                        <i className="icon-remove-sign close" onClick={(e)=>this.handleDeleteSection(i,e)}></i> : 
                        <i></i> 
                      }
                      {/* switchable? If yes, allow a drop down to switch section*/}
                      {
                        this.props.info[this.props.info.selected_template][i].switchable ? 
                          <select className="header-dropdown" onChange={(e)=>this.handleFormSwitch(i,e)}>
                            <option>{object.header}</option>
                            {
                              Object.keys(rows)
                              .filter(rowName=>rows[rowName].switchable && (rows[rowName].typeOfRow !== object.typeOfRow))
                              .sort()
                              .map(rowName => <option key={rowName} value={rowName}>{rows[rowName].header}</option>)
                            }    
                          </select> : 
                          <h3>{object.header}</h3>
                      }
      
                      
      
      
      
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
                      
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}


class Form2 extends React.Component{
    constructor(props) {
        super(props);
        this.handleTemplateChange = this.handleTemplateChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleAddSection = this.handleAddSection.bind(this);
        this.handleDeleteSection = this.handleDeleteSection.bind(this);
        this.handleFormSwitch = this.handleFormSwitch.bind(this);
      }

      handleFormSwitch(form, e){
        this.props.onFormSwitch(form, e.target.value);
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
                {/* closable? If yes add a red x icon*/}
                {
                  this.props.info[this.props.info.selected_template][i].closable ? 
                  <i className="icon-remove-sign close" onClick={(e)=>this.handleDeleteSection(i,e)}></i> : 
                  <i></i> 
                }
                {/* switchable? If yes, allow a drop down to switch section*/}
                {
                  this.props.info[this.props.info.selected_template][i].switchable ? 
                    <select className="header-dropdown" onChange={(e)=>this.handleFormSwitch(i,e)}>
                      <option>{object.header}</option>
                      {
                        Object.keys(rows)
                        .filter(rowName=>rows[rowName].switchable && (rows[rowName].typeOfRow !== object.typeOfRow))
                        .sort()
                        .map(rowName => <option key={rowName} value={rowName}>{rows[rowName].header}</option>)
                      }    
                    </select> : 
                    <h3>{object.header}</h3>
                }

                



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
            <App 
                info={this.props.info}
                onTextChange={this.handleTextChange}
                onTemplateChange={value => this.handleTemplateChange(value)}
                onDateChange={this.handleDateChange}
                onFieldChange={(form, field, value)=>this.handleFieldChange(form, field, value)}
                onAddSection={(field)=>this.handleAddSection(field)}
                onDeleteSection={(field)=>this.handleDeleteSection(field)}
                onFormSwitch = {(form, value)=>this.handleFormSwitch(form, value)}
            />
          </div>


        )
    }

}

export default Form2;