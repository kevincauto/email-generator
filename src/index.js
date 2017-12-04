import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import './index.css';

import Display from './components/Display';
import FormSection from './components/FormSection';

import {cced_thematic_initial_state, cced_thematic_rows} from './templates/cced_thematic';
import {idt_thematic_initial_state, idt_thematic_rows} from './templates/idt_thematic';

let rows ={
  cced_thematic: cced_thematic_rows,
  idt_thematic: idt_thematic_rows
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_template: 'idt_thematic',
      cced_thematic: cced_thematic_initial_state,
      idt_thematic: idt_thematic_initial_state
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
  handleFormAdd(field){
    let stateClone = _.cloneDeep(this.state);
    // let row = stateClone[this.state.selected_template][field];
    let row =       {
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
    }
    stateClone[this.state.selected_template].splice(field+1, 0, row);
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
          onFormAdd={(field)=>this.handleFormAdd(field)}
          onFormDelete={(field)=>this.handleFormDelete(field)}
          onFormSwitch = {(form, value)=>this.handleFormSwitch(form, value)}
          onFormDrag = {(startIndex, endIndex)=>this.handleFormDrag(startIndex, endIndex)}
              /> 
        <div id="text-results">
          <Display info={this.state} />
        </div>
      </div>

    );
  }
}


ReactDOM.render(<Container />, document.getElementById('root'));

