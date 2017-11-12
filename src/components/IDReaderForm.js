import React from 'react';

export default class IDLiveWebinarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          formArray: []
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.addRow = this.addRow.bind(this);
      }

      handleTextChange(e) {
        this.props.onTextChange(e.target.value, e.target.name);
      }

      addRow(arr,e){
        arr[1] = <div key={3}>Hello</div>;
        this.setState({
          formArray: arr
        }
        )
        console.log(this.state);
      }

      render(){
        let arr = this.state.formArray
        arr[0] =          
        <div className="lyris" key={arr.length+1}>
            <div className="label">
            Email List: 
            <select
                name="unsubscribe"
                value={this.props.info[this.props.info.selected_template].unsubscribe}
                onChange={this.handleTextChange}
            >
            <option value="blank">Please Select a List</option>
            <option value="%%PLUGIN_UNSUBSCRIBE: 2192269-UNSUBSCRIBE%%">ID Webinar List</option>
            <option value="%%PLUGIN_UNSUBSCRIBE: 2144642-UNSUBSCRIBE%%">CCED Webinar List | 3.27.17</option>
            <option value="%%PLUGIN_UNSUBSCRIBE: 2146841-UNSUBSCRIBE%%">IDT - Newsletter | 3.30.17</option>
            <option value="%%PLUGIN_UNSUBSCRIBE: 2145051-UNSUBSCRIBE%%">CDEWorld Webinar List | 3.28.17</option>
            <option value="%%PLUGIN_UNSUBSCRIBE: 2200418-UNSUBSCRIBE%%">Nobel Webinar List | 3.28.17</option>
            </select>
        </div>
            <div className="label">
            Lyris Name: 
            <input
                type="text"
                name="lyrisName"
                value={this.props.info[this.props.info.selected_template].lyrisName}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
            />
            </div>
        </div>
        ;

          return (
            <div className="form">
            <h3>ID Live Webinar</h3>
            {arr}
            <br />
            <div className="label">
              Subscribe Link: 
              <input
                type="text"
                name="subscribeLink"
                value={this.props.info[this.props.info.selected_template].subscribeLink}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>

            <div className="label">
              Month: 
                <select
                  name="month"
                  value={this.props.info[this.props.info.selected_template].month}
                  onChange={this.handleTextChange}
                >
                <option value="blank">Please Select a List</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
                </select>
            </div>

            <div className="label">
              Cover Story Title: 
              <input
                type="text"
                name="coverTitle"
                value={this.props.info[this.props.info.selected_template].coverTitle}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <button onClick={(e) => this.addRow(arr, e)}>Add a Row</button>




            
          </div>
          )
      }
}


