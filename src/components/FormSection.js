import React from 'react';
import Forms from './Forms';

class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFormAdd = this.handleFormAdd.bind(this);
    this.handleFormDelete = this.handleFormDelete.bind(this);
    this.handleFormSwitch = this.handleFormSwitch.bind(this);
    this.handleFormDrag = this.handleFormDrag.bind(this);
  }

  handleFormDrag(startIndex, endIndex) {
    this.props.onFormDrag(startIndex, endIndex);
  }

  handleFormSwitch(formIndex, formToSwitch) {
    this.props.onFormSwitch(formIndex, formToSwitch);
  }

  handleFormDelete(field, e) {
    this.props.onFormDelete(field);
  };

  handleFormAdd(formIndex, formToAdd) {
    this.props.onFormAdd(formIndex, formToAdd);
  }

  handleTemplateChange(e) {
    this.props.onTemplateChange(e.target.value);
  }

  handleFieldChange(form, field, e) {
    this.props.onFieldChange(form, field, e.target.value);
  }



  render() {
    return (
      <div id="main-form">
        <h3>1. Select an email template.</h3>

        <select
          value={this.props.info.selected_template}
          onChange={this.handleTemplateChange}
        >
          <option value="cced_digital">CCED Digital Edition Newsletter</option>
          <option value="cced_reader">CCED Reader Newsletter</option>
          <option value="cced_thematic">CCED Thematic</option>

          <option value="cdew_da">CDEWorld Dental Assistant Newsletter</option>
          <option value="cdew_dh">CDEWorld Dental Hygienist Newsletter</option>
          <option value="cdew_lab">CDEWorld Dental Lab Newsletter</option>
          <option value="cdew_dds">CDEWorld Dentist Newsletter</option>
          <option value="cdew_thematic">CDEWorld Thematic Newsletter</option>

          <option value="id_digital">ID Digital Edition Newsletter</option>
          <option value="id_reader">ID Reader</option>
          <option value="id_thematic">ID Thematic</option>

          <option value="idt_digital">IDT Digital Edition Newsletter</option>
          <option value="idt_reader">IDT Reader Newsletter</option>
          <option value="idt_thematic">IDT Thematic</option>
        </select>

        <h3>2. Complete the forms.</h3>
        <p>You can add, delete, swap, and reorder some sections (using drag and drop).</p>

        <Forms
          info={this.props.info}
          onTemplateChange={value => this.handleTemplateChange(value)}
          onFieldChange={(form, field, value) => this.handleFieldChange(form, field, value)}
          onFormAdd={(formIndex, formToAdd) => this.handleFormAdd(formIndex, formToAdd)}
          onFormDelete={(field) => this.handleFormDelete(field)}
          onFormSwitch={(formIndex, formToSwitch) => this.handleFormSwitch(formIndex, formToSwitch)}
          onFormDrag={(startIndex, endIndex) => this.handleFormDrag(startIndex, endIndex)}
        />
      </div>


    )
  }

}

export default FormSection;