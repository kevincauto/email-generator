import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './index.css';

import Display from './components/Display';
import FormSection from './components/FormSection';

import {cced_thematic_initial_state, cced_thematic_rows} from './templates/cced_thematic';
import {idt_thematic_initial_state, idt_thematic_rows} from './templates/idt_thematic';
import {id_thematic_initial_state, id_thematic_rows} from './templates/id_thematic';
import {idt_reader_initial_state, idt_reader_rows} from './templates/idt_reader';
import {cced_reader_initial_state, cced_reader_rows} from './templates/cced_reader';

let rows ={
  cced_thematic: cced_thematic_rows,
  idt_thematic: idt_thematic_rows,
  id_thematic: id_thematic_rows,
  idt_reader: idt_reader_rows,
  cced_reader: cced_reader_rows
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_template: 'cced_reader',
      cced_thematic: cced_thematic_initial_state,
      idt_thematic: idt_thematic_initial_state,
      id_thematic: id_thematic_initial_state,
      idt_reader: idt_reader_initial_state,
      cced_reader: cced_reader_initial_state
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFormAdd = this.handleFormAdd.bind(this);
    this.handleFormDelete = this.handleFormDelete.bind(this);
    this.handleFormSwitch = this.handleFormSwitch.bind(this);
    this.handleFormDrag = this.handleFormDrag.bind(this);
  }

  componentDidUpdate(){
      console.log(this.state);
  }

  handleFormDrag(startIndex, endIndex){
    let stateClone = _.cloneDeep(this.state);
    let arrayOfRows = stateClone[this.state.selected_template];
    const removedRow = arrayOfRows.splice(startIndex, 1);
    arrayOfRows.splice(endIndex, 0, removedRow[0]);
    stateClone[this.state.selected_template] = arrayOfRows;
    this.setState(stateClone);

  }
  handleFormSwitch(form, value){
    let stateClone = _.cloneDeep(this.state);
    stateClone[this.state.selected_template].splice(form, 1, rows[this.state.selected_template][value]);
    this.setState(stateClone);
  }

  handleFormDelete(field){
    let stateClone = _.cloneDeep(this.state);
    stateClone[this.state.selected_template].splice(field, 1);
    this.setState(stateClone);
  }
  handleFormAdd(form){
    let stateClone = _.cloneDeep(this.state);

    //add the first row that is switchable
    let formToAdd;
    for (let rowName in rows[this.state.selected_template]) { 
      if(rows[this.state.selected_template][rowName].switchable === true){
        formToAdd = rows[this.state.selected_template][rowName];
        break;
      }
    }
    stateClone[this.state.selected_template].splice(form+1, 0, formToAdd);
    this.setState(stateClone);
  }

  handleFieldChange(form, field, value) {
    let stateClone = _.cloneDeep(this.state);
    stateClone[this.state.selected_template][form].fields[field].value = value;
    this.setState(stateClone);
  }

  handleTemplateChange(template) {
    //create a blank object for the template if it does not exist
    if (!this.state[template]) {
      this.setState({ template: {} });
    }
    this.setState({ selected_template: template });
  }

  render() {
    return (

      <div id="container">
        <FormSection
          info={this.state}
          onTemplateChange={value => this.handleTemplateChange(value)}
          onFieldChange={(form, field, value)=>this.handleFieldChange(form, field, value)}
          onFormAdd={(form)=>this.handleFormAdd(form)}
          onFormDelete={(field)=>this.handleFormDelete(field)}
          onFormSwitch = {(form, value)=>this.handleFormSwitch(form, value)}
          onFormDrag = {(startIndex, endIndex)=>this.handleFormDrag(startIndex, endIndex)}
              /> 
          <Display info={this.state} />
      </div>

    );
  }
}


ReactDOM.render(<Container />, document.getElementById('root'));

