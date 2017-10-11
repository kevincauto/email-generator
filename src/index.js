import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CCEDLiveWebinar from './components/CCEDLiveWebinar';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_template: 'cced_live_webinar',
      cced_live_webinar: {}
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
    let displayForm = (
        <CCEDLiveWebinar
            info={this.props.info}
            onTextChange={this.handleTextChange}
        />
    );


    if (this.props.info.selected_template === 'cced_live_webinar') {
        displayForm = (
          <CCEDLiveWebinar
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
          {/* <option value="cced_live_webinar_tomorrow">CCED Live Webinar Tomorrow</option>
          <option value="cced_live_webinar_2hours">CCED Live Webinar in Two Hours</option> */}
        </select>
        <h2>Complete the information below.</h2>
        {displayForm}
      </div>
    );
  }
}



class TextResults extends React.Component {
  render() {
    var str = this.props.info[[this.props.info.selected_template]].html;
    if(str){
        var addon = 'body style="background-color:#bfbfbf;">'.length + 1
        var body = str.substring(str.indexOf('body style="background-color:#bfbfbf;">')+addon,str.lastIndexOf("</body>"));
    }
    


    return (
      <div id="text-results">
       
        <div className="content" dangerouslySetInnerHTML={{__html: body}}></div>
        
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
