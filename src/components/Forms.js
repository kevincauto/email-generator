import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {cced_digital_forms} from '../templates/cced_digital';
import {cced_reader_forms} from '../templates/cced_reader';
import {cced_thematic_forms} from '../templates/cced_thematic';
import {id_digital_forms} from '../templates/id_digital';
import {id_reader_forms} from '../templates/id_reader';
import {id_thematic_forms} from '../templates/id_thematic';
import {idt_digital_forms} from '../templates/idt_digital';
import {idt_reader_forms} from '../templates/idt_reader';
import {idt_thematic_forms} from '../templates/idt_thematic';
import {cdew_da_forms} from '../templates/cdew_da';
import {cdew_dds_forms} from '../templates/cdew_dds';
import {cdew_dh_forms} from '../templates/cdew_dh';
import {cdew_lab_forms} from '../templates/cdew_lab';
import {cdew_thematic_forms} from '../templates/cdew_thematic';

let FORMS ={
  cced_digital: cced_digital_forms,
  cced_reader: cced_reader_forms,
  cced_thematic: cced_thematic_forms,
  id_digital: id_digital_forms,
  id_reader: id_reader_forms,
  id_thematic: id_thematic_forms,
  idt_thematic: idt_thematic_forms,
  idt_reader: idt_reader_forms,
  idt_digital: idt_digital_forms,
  cdew_da: cdew_da_forms,
  cdew_dds: cdew_dds_forms,
  cdew_dh: cdew_dh_forms,
  cdew_lab: cdew_lab_forms,
  cdew_thematic: cdew_thematic_forms,
}

  // styles we need to apply on draggables
const getItemStyle = (draggableStyle) => ({...draggableStyle});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'gray' : 'white',
  width: 300,
});

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFormAdd = this.handleFormAdd.bind(this);
    this.handleFormDelete = this.handleFormDelete.bind(this);
    this.handleFormSwitch = this.handleFormSwitch.bind(this);
    this.handleFormDrag = this.handleFormDrag.bind(this);
  }

  handleFormSwitch(formIndex, e){
    let formToSwitch = FORMS[this.props.info.selected_template][e.target.value]
    this.props.onFormSwitch(formIndex, formToSwitch);
  }

  handleFormDelete(field, e){
    this.props.onFormDelete(field);
  };

  handleFormAdd(formIndex,object, e){   
        let formToAdd;
        //duplicate the current form if it is switchable
        if(FORMS[this.props.info.selected_template][object.typeOfRow].switchable === true)
        {formToAdd = FORMS[this.props.info.selected_template][object.typeOfRow]}
        //if not, add the first row that is switchable
        else{
          for (let rowName in FORMS[this.props.info.selected_template]) { 
            if(FORMS[this.props.info.selected_template][rowName].switchable === true){
              formToAdd = FORMS[this.props.info.selected_template][rowName];
              break;
            }
          }
        }
    this.props.onFormAdd(formIndex,formToAdd);
  }

  handleFieldChange(form,field,e){
    this.props.onFieldChange(form,field,e);
  }

  handleFormDrag(result){
    //if you the drag didn't go anywhere, just ignore
    if (!result.destination) {
      return;
    }
    this.props.onFormDrag(result.source.index, result.destination.index);
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.handleFormDrag}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.props.info[this.props.info.selected_template].map((object,i) => (
                <Draggable key={i} draggableId={i} isDragDisabled={!object.draggable}> 
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

                      <div className="individual-form" key={i + object.typeOfRow}>
                      {/* closable? If yes add a red x icon*/}
                      {
                        this.props.info[this.props.info.selected_template][i].closable ? 
                        <i className="icon-remove-sign close" onClick={(e)=>this.handleFormDelete(i,e)}></i> : 
                        <i></i> 
                      }
                      {/* switchable? If yes, allow a drop down to switch section*/}
                      {
                        this.props.info[this.props.info.selected_template][i].switchable ? 
                          <select className="header-dropdown" onChange={(e)=>this.handleFormSwitch(i,e)}>
                            <option >{object.header}</option>
                            {
                              Object.keys(FORMS[this.props.info.selected_template])
                              .filter(rowName=>FORMS[this.props.info.selected_template][rowName].switchable && (FORMS[this.props.info.selected_template][rowName].typeOfRow !== object.typeOfRow))
                              .sort()
                              .map(rowName => <option key={rowName} value={rowName}>{FORMS[this.props.info.selected_template][rowName].header}</option>)
                            }    
                          </select> : 
                          <h4>{object.header}</h4>
                      }

                      {object.fields.map((field,j)=>{
                      if(field.dropdown){
                          return(
                              <div className="label" key={i + '' + j}>
                                  <select
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
                          placeholder={field.label}
                          name={field.name}
                          value={this.props.info[this.props.info.selected_template][i].fields[j].value}
                          onChange={(e)=>this.handleFieldChange(i,j,e)}
                        />
                        </div>)
                      })}
                      {/* addable? */}
                      {
                        this.props.info[this.props.info.selected_template][i].addable ? 
                        <i className="icon-plus-sign add" onClick={(e)=>this.handleFormAdd(i,object,e)}></i> : 
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


export default Forms;