import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import IDReaderForm from './components/IDReaderForm';
import IDReaderHTML from './components/IDReaderHTML';
import CCEDThematicForm from './components/CCEDThematicForm';
import CCEDThematicHTML from './components/CCEDThematicHTML';
import CCEDLiveWebinarForm from './components/CCEDLiveWebinarForm';
import CCEDLiveWebinarHTML from './components/CCEDLiveWebinarHTML';
import CCEDOnDemandWebinarForm from './components/CCEDOnDemandWebinarForm';
import CCEDOnDemandWebinarHTML from './components/CCEDOnDemandWebinarHTML';
import IDLiveWebinarForm from './components/IDLiveWebinarForm';
import IDLiveWebinarHTML from './components/IDLiveWebinarHTML';
import IDOnDemandWebinarForm from './components/IDOnDemandWebinarForm';
import IDOnDemandWebinarHTML from './components/IDOnDemandWebinarHTML';
import CDEWLiveWebinarForm from './components/CDEWLiveWebinarForm';
import CDEWLiveWebinarHTML from './components/CDEWLiveWebinarHTML';
import IDTOnDemandWebinarForm from './components/IDTOnDemandWebinarForm';
import IDTOnDemandWebinarHTML from './components/IDTOnDemandWebinarHTML';
import IDTLiveWebinarForm from './components/IDTLiveWebinarForm';
import IDTLiveWebinarHTML from './components/IDTLiveWebinarHTML';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_template: 'id_live_webinar',
      id_reader: {},
      cced_thematic: {},
      cced_live_webinar: {},
      cced_on_demand_webinar: {},
      id_live_webinar: {},
      id_on_demand_webinar: {},
      cdew_live_webinar: {},
      idt_live_webinar: {},
      idt_on_demand_webinar: {}
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
      //Auto detect the month and year for the url.  
      let d = new Date();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      this.setState({month, year});
  }
  
  componentDidUpdate(){
      console.log(this.state);
  }
  handleDateChange(value, name){
    this.setState({[name]: value});
  }

  handleTextChange(value, name, html) {
    this.setState({
      [this.state.selected_template]: { 
        ...this.state[this.state.selected_template],        
        [name]: value, 
        html: html
    }
    });
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
        <Form
          info={this.state}
          onTextChange={this.handleTextChange}
          onTemplateChange={value => this.handleTemplateChange(value)}
          onDateChange={this.handleDateChange}
        />
        <TextResults info={this.state} />
      </div>

    );
  }
}

class Form extends React.Component {
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

  render() {
    let displayForm;

      if (this.props.info.selected_template === 'id_reader') {
        displayForm = (
          <IDReaderForm
            info={this.props.info}
            onTextChange={this.handleTextChange}
            onDateChange={this.handleDateChange}
          />
        );
      } 
      if (this.props.info.selected_template === 'id_reader') {
        displayForm = (
          <CCEDThematicForm
            info={this.props.info}
            onTextChange={this.handleTextChange}
            onDateChange={this.handleDateChange}
          />
        );
      } 
      if (this.props.info.selected_template === 'cced_live_webinar') {
        displayForm = (
          <CCEDLiveWebinarForm
            info={this.props.info}
            onTextChange={this.handleTextChange}
            onDateChange={this.handleDateChange}
          />
        );
      } 
      if (this.props.info.selected_template === 'cced_on_demand_webinar') {
        displayForm = (
          <CCEDOnDemandWebinarForm
            info={this.props.info}
            onTextChange={this.handleTextChange}
            onDateChange={this.handleDateChange}
          />
        );
      }
      if (this.props.info.selected_template === 'id_live_webinar') {
        displayForm = (
          <IDLiveWebinarForm 
            info={this.props.info}
            onTextChange={this.handleTextChange}
            onDateChange={this.handleDateChange}
          />
        );
      }  
      if (this.props.info.selected_template === 'cdew_live_webinar') {
        displayForm = (
          <CDEWLiveWebinarForm 
            info={this.props.info}
            onTextChange={this.handleTextChange}
            onDateChange={this.handleDateChange}
          />
        );
      }  
      if (this.props.info.selected_template === 'idt_live_webinar') {
        displayForm = (
          <IDTLiveWebinarForm 
            info={this.props.info}
            onTextChange={this.handleTextChange}
            onDateChange={this.handleDateChange}
          />
        );
      }  
      if (this.props.info.selected_template === 'id_on_demand_webinar') {
        displayForm = (
          <IDOnDemandWebinarForm 
            info={this.props.info}
            onTextChange={this.handleTextChange}
            onDateChange={this.handleDateChange}
          />
        );
      } 
      if (this.props.info.selected_template === 'idt_on_demand_webinar') {
        displayForm = (
          <IDTOnDemandWebinarForm 
            info={this.props.info}
            onTextChange={this.handleTextChange}
            onDateChange={this.handleDateChange}
          />
        );
      } 

    return (
      <div id="main-form">
        <h3>1. Select an email template.</h3>
        <select
          value={this.props.info.selected_template}
          onChange={this.handleTemplateChange}
        >
          <option value="">&#9660; &nbsp;&nbsp;Select an Email Template</option>
          <option value="cced_live_webinar">&#9660; &nbsp;&nbsp;CCED Live Webinar</option> 
          <option value="cced_on_demand_webinar">&#9660; &nbsp;&nbsp;CCED On-Demand Webinar</option>
          <option value="cdew_live_webinar">&#9660; &nbsp;&nbsp;CDEW Live Webinar</option>
          <option value="id_live_webinar">&#9660; &nbsp;&nbsp;ID Live Webinar</option>    
          <option value="id_on_demand_webinar">&#9660; &nbsp;&nbsp;ID On-Demand Webinar</option>
          {/* <option value="id_reader">&#9660; &nbsp;&nbsp;ID Reader</option>
          <option value="cced_thematic">&#9660; &nbsp;&nbsp;CCED Thematic</option> */}
          <option value="idt_live_webinar">&#9660; &nbsp;&nbsp;IDT Live Webinar</option>
          <option value="idt_on_demand_webinar">&#9660; &nbsp;&nbsp;IDT On-Demand Webinar</option>
        </select>
        
        {displayForm}
      </div>
    );
  }
}

class TextResults extends React.Component {
  render() {
   let htmlDisplay = "Nothing to display right now.";
   if(this.props.info.selected_template === 'id_reader'){htmlDisplay = <IDReaderHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'cced_thematic'){htmlDisplay = <CCEDThematicHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'id_on_demand_webinar'){htmlDisplay = <IDOnDemandWebinarHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'cced_live_webinar'){htmlDisplay = <CCEDLiveWebinarHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'cced_on_demand_webinar'){htmlDisplay = <CCEDOnDemandWebinarHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'id_live_webinar'){htmlDisplay = <IDLiveWebinarHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'cdew_live_webinar'){htmlDisplay = <CDEWLiveWebinarHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'idt_live_webinar'){htmlDisplay = <IDTLiveWebinarHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'idt_on_demand_webinar'){htmlDisplay = <IDTOnDemandWebinarHTML info={this.props.info} />}
    return (
        <div id="text-results">
        {htmlDisplay}
        </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));

