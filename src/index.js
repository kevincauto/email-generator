import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { id_reader } from './email_templates/id_reader';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_template: 'info',
      id_reader: {},
      info: {}
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
  }

  componentDidMount() {
    //preload the selected templates object with default values?
  }

  handleTextChange(value, e) {
    let copyOfState = { ...this.state };
    //within the state object, select the property that matches the selected template, then assign or reasign the propery that matches the name assigned to the textbox.  Be sure that the name attribute on the textbox is what you want this propery to be.
    console.log(copyOfState);
    copyOfState[this.state.selected_template][e.target.name] = value.trim();
    console.log(copyOfState);
    this.setState({ copyOfState });
  }

  handleTemplateChange(value) {
    //change the selected template.  If coded correctly the change should cascade down and adjust everything.
    let copyOfState = { ...this.state };
    copyOfState.selected_template = value;
    this.setState({ copyOfState });
    console.log(this.state);
  }

  render() {
    return (
      <div id="container">
        <Form
          selected_template={this.state.selected_template}
          info={this.state[this.state.selected_template]}
          onTextChange={this.handleTextChange}
          onTemplateChange={value => this.handleTemplateChange(value)}
        />
        <TextResults info={this.state.info} />
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      template: 'id_reader'
    };
    this.handleTemplateChange = this.handleTemplateChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(value, e) {
    this.props.onTextChange(value, e);
  }

  handleTemplateChange(value) {
    this.props.onTemplateChange(value);
  }

  render() {
    let displayForm = (
      <IDReaderForm
        selected_template={this.props.selected_template}
        info={this.props[this.props.selected_template]}
        onTextChange={this.handleTextChange}
      />
    );
    if (this.state.template === 'id_reader') {
      displayForm = (
        <IDReaderForm
          selected_template={this.props.selected_template}
          info={this.props[this.props.selected_template]}
          onTextChange={() => this.handleTextChange('id_reader')}
        />
      );
    }
    if (this.state.template === 'id_thematic') {
      displayForm = (
        <IDThematicForm
          selected_template={this.props.selected_template}
          info={this.props[this.props.selected_template]}
          onTextChange={this.handleTextChange}
        />
      );
    }

    return (
      <div id="main-form">
        <select value={this.state.value} onChange={this.handleTemplateChange}>
          <option value="id_reader">ID Reader</option>
          <option value="id_thematic">ID Thematic</option>
          <option value="idt_reader">IDT Reader</option>
          <option value="idt_thematic">IDT Thematic</option>
          <option value="cced_reader">CCED Reader</option>
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
    this.props.onTextChange(e.target.value, e);
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
            value={this.props[this.props.selected_template].month}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="label">
          Volume: &nbsp;<input
            type="text"
            name="volume"
            value={this.props[this.props.selected_template].volume}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="label">
          Year: &nbsp;
          <select
            value={this.props[this.props.selected_template].year}
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
    this.props.onTextChange(e.target.value, e);
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
            value={this.props.info.month}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="label">
          Volume: &nbsp;<input
            type="text"
            name="volume"
            value={this.props.info.volume}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="label">
          Year: &nbsp;<input
            type="text"
            name="year"
            value={this.props.info.year}
            onChange={this.handleTextChange}
          />
        </div>
      </div>
    );
  }
}

class TextResults extends React.Component {
  render() {
    const { month, volume, year } = this.props.info;

    const text = `
                ${id_reader.doctype}
                <div>Hello ${month} World</div>
                <div> This is the volume: ${volume} </div>
                <div>${year}</div>
                ${id_reader.head}
                ${id_reader.bottom}

            `;

    return (
      <div id="text-results">
        <textarea value={text} readOnly={true} />
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
