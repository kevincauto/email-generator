import React from 'react';

export default class IDOnDemandWebinarForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
      }

      handleTextChange(e) {
        this.props.onTextChange(e.target.value, e.target.name);
      }

      render(){
          return (
            <div className="form">
            <h3>ID On-Demand Webinar</h3>
            <div className="lyris">
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
            <br />
            <div className="label">
              Title: 
              <input
                type="text"
                name="title"
                value={this.props.info[this.props.info.selected_template].title}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Presenter's Name: 
              <input
                type="text"
                name="presenter"
                value={this.props.info[this.props.info.selected_template].presenter}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Provider: 
              <input
                type="text"
                name="provider"
                value={this.props.info[this.props.info.selected_template].provider}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Commercial Supporter: 
              <input
                type="text"
                name="supporter"
                value={this.props.info[this.props.info.selected_template].supporter}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              CDE Credits: 
              <input
                type="text"
                name="credits"
                value={this.props.info[this.props.info.selected_template].credits}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Cost: 
              <input
                type="text"
                name="cost"
                value={this.props.info[this.props.info.selected_template].cost}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Available Dates: 
              <input
                type="text"
                name="date"
                placeholder="OCTOBER 19, 2017 @ 7PM ET..."
                value={this.props.info[this.props.info.selected_template].date}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Description: 
              <input
                type="text"
                name="description"
                value={this.props.info[this.props.info.selected_template].description}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Learning Objective 1: 
              <input
                type="text"
                name="lo1"
                value={this.props.info[this.props.info.selected_template].lo1}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Learning Objective 2: 
              <input
                type="text"
                name="lo2"
                value={this.props.info[this.props.info.selected_template].lo2}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Learning Objective 3: 
              <input
                type="text"
                name="lo3"
                value={this.props.info[this.props.info.selected_template].lo3}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Disclosure: 
              <input
                type="text"
                name="disclosure"
                value={this.props.info[this.props.info.selected_template].disclosure}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Link: 
              <input
                type="text"
                name="link"
                value={this.props.info[this.props.info.selected_template].link}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
            <div className="label">
              Image: 
              <input
                type="text"
                name="image"
                value={this.props.info[this.props.info.selected_template].image}
                onChange={this.handleTextChange}
                onInput={this.handleTextChange}
              />
            </div>
          </div>
          )
      }
}


