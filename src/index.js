import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CCEDLiveWebinar from './components/CCEDLiveWebinar';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_template: 'id_reader',
      id_reader: {},
      id_thematic: {},
      cced_webinar_recruitment: {}
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
  }

  componentDidMount() {
      console.log(this.state);
    //preload the selected templates object with default values?
  }
  //*** I think this is not saving state correctly right now.  May be overwriting things.
  
  componentDidUpdate(){
      console.log(this.state);
  }

  handleTextChange(value, name, html) {

    this.setState({
      [this.state.selected_template]: { 
        ...this.state[this.state.selected_template],        
        [name]: value 
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
      <IDReaderForm
        info={this.props.info}
        onTextChange={this.handleTextChange}
      />
    );
    if (this.props.info.selected_template === 'id_reader') {
      displayForm = (
        <IDReaderForm
          info={this.props.info}
          onTextChange={this.handleTextChange}
        />
      );
    }
    if (this.props.info.selected_template === 'id_thematic') {
      displayForm = (
        <IDThematicForm
          info={this.props.info}
          onTextChange={this.handleTextChange}
        />
      );
    }

    if (this.props.info.selected_template === 'cced_webinar_recruitment') {
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
          <option value="id_reader">ID Reader</option>
          <option value="id_thematic">ID Thematic</option>
          <option value="cced_webinar_recruitment">CCED Webinar Recruitment</option>

        </select>
        <h2>Complete the information below.</h2>
        {displayForm}
      </div>
    );
  }
}

class IDReaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.props.onTextChange(e.target.value, e.target.name);
  }
  render() {
    return (
      <div>
        <h3> ID Reader</h3>
        <div className="label">
          {/* The name attribute should match the state.info property */}
          Month: &nbsp;<input
            type="text"
            name="month"
            value={this.props.info[this.props.info.selected_template].month}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="label">
          Volume: &nbsp;<input
            type="text"
            name="volume"
            value={this.props.info[this.props.info.selected_template].volume}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="label">
          Year: &nbsp;
          <select
            value={this.props.info[this.props.info.selected_template].years}
            name="year"
            onChange={this.handleTextChange}
          >
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    );
  }
}

class IDThematicForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.props.onTextChange(e.target.value, e.target.name);
  }
  render() {
    return (
      <div>
        <h3> ID Thematic</h3>
        <div className="label">
          {/* The name attribute should match the state.info property */}
          Month: &nbsp;<input
            type="text"
            name="month"
            value={this.props.info[this.props.info.selected_template].month}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="label">
          Volume: &nbsp;<input
            type="text"
            name="volume"
            value={this.props.info[this.props.info.selected_template].volume}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="label">
          Year: &nbsp;<input
            type="text"
            name="year"
            value={this.props.info[this.props.info.selected_template].year}
            onChange={this.handleTextChange}
          />
        </div>
      </div>
    );
  }
}

class TextResults extends React.Component {
  render() {

    const { month, volume, year } = this.props.info[
      this.props.info.selected_template
    ];

    const text = `
 
                <div>Hello ${month} World</div>
                <div> This is the volume: ${volume} </div>
                <div>${year}</div>



            `;

    return (
      <div id="text-results">
        <textarea value={text} readOnly={true} />
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
