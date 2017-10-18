import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CCEDLiveWebinarForm from './components/CCEDLiveWebinarForm';
import CCEDLiveWebinarHTML from './components/CCEDLiveWebinarHTML';
import CCEDOnDemandWebinarForm from './components/CCEDOnDemandWebinarForm';
import CCEDOnDemandWebinarHTML from './components/CCEDOnDemandWebinarHTML';
import IDLiveWebinarForm from './components/IDLiveWebinarForm';
import IDLiveWebinarHTML from './components/IDLiveWebinarHTML';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_template: 'id_live_webinar',
      cced_live_webinar: {},
      cced_on_demand_webinar: {},
      id_live_webinar: {}
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
  }

  componentDidMount() {
      console.log(this.state);
    //preload the selected templates object with default values?
  }
  
  componentDidUpdate(){
      console.log(this.state);
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
  }

  handleTextChange(value, name, html) {
    this.props.onTextChange(value, name, html);
  }

  handleTemplateChange(e) {
    this.props.onTemplateChange(e.target.value);
  }

  render() {
    let displayForm;


    if (this.props.info.selected_template === 'cced_live_webinar') {
        displayForm = (
          <CCEDLiveWebinarForm
            info={this.props.info}
            onTextChange={this.handleTextChange}
          />
        );
      } 
      if (this.props.info.selected_template === 'cced_on_demand_webinar') {
        displayForm = (
          <CCEDOnDemandWebinarForm
            info={this.props.info}
            onTextChange={this.handleTextChange}
          />
        );
      }
      if (this.props.info.selected_template === 'id_live_webinar') {
        displayForm = (
          <IDLiveWebinarForm 
            info={this.props.info}
            onTextChange={this.handleTextChange}
          />
        );
      }  

    return (
      <div id="main-form">
        <select
          value={this.props.info.selected_template}
          onChange={this.handleTemplateChange}
        >
          <option value="cced_live_webinar">CCED Live Webinar</option>
          <option value="cced_on_demand_webinar">CCED On-Demand Webinar</option>
          <option value="id_live_webinar">ID Live Webinar</option>
        </select>
        <h2>Complete the information below.</h2>
        {displayForm}
      </div>
    );
  }
}



class TextResults extends React.Component {
  render() {
   let htmlDisplay = "Nothing to display right now.";
   if(this.props.info.selected_template === 'cced_live_webinar'){htmlDisplay = <CCEDLiveWebinarHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'cced_on_demand_webinar'){htmlDisplay = <CCEDOnDemandWebinarHTML info={this.props.info} />}
   if(this.props.info.selected_template === 'id_live_webinar'){htmlDisplay = <IDLiveWebinarHTML info={this.props.info} />}
    return (
        <div>
        {htmlDisplay}
        </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));

