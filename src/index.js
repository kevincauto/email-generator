import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {id_reader} from './email_templates/id-reader';

class Container extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        info: {
            month: 'October',
            volume: '10'
        }

        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleTextChange(value, e) {
        let info = {...this.state.info};
        info[e.target.name] = value.trim();
        this.setState({info});
      }

    render(){
        return(
            <div id="container">
                <Form info={this.state.info} volume={this.state.volume} onTextChange={this.handleTextChange}/>
                <TextResults info={this.state.info}/>
            </div>
        )

    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            template: 'id-reader'
        }
        this.handleTemplateChange = this.handleTemplateChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
      }
    handleTextChange(e) {
        this.props.onTextChange(e.target.value, e);
    }
    handleTemplateChange(event) {
        this.setState({template: event.target.value});
    }
    
    render(){
        let displayedForm;
        

        return(
            <div id="main-form">

                <select value={this.state.value} onChange={this.handleTemplateChange}>
                    <option value="id-reader">ID Reader</option>
                    <option value="id-thematic">ID Thematic</option>
                    <option value="idt-reader">IDT Reader</option>
                    <option value="idt-thematic">IDT Thematic</option>
                    <option value="cced-reader">CCED Reader</option>
                </select>

                <div className="label">
                    {/* The name attribute should match the state.info property */}
                    Month: &nbsp;<input type="text" name="month" value={this.props.info.month} onChange={this.handleTextChange} />
                </div>
                    <br />
                <div className="label">
                    Volume: &nbsp;<input type="text" name="volume" value={this.props.info.volume} onChange={this.handleTextChange} />
                </div>
            </div> 
        )
    }

}

class TextResults extends React.Component {
    render(){
        const {month, volume} = this.props.info;
        
        const text =
            `
                ${id_reader.doctype}
                <div>Hello ${month} World</div>
                <div> This is the volume: ${volume} </div>
            `;
       
        return(
            <div id="text-results" >
                <textarea value={text} readOnly={true} />
            </div>
        )
    }
}


ReactDOM.render(<Container />, document.getElementById('root'));


