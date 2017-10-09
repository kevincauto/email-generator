import React from 'react';

export default class CCEDWebinarRecruitment extends React.Component {
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
            <h3> CCED Live Webinar Recruitment</h3>
            <img src="https://www.dentalaegis.com/media/63967/" width="300"/>
            <div className="label">
              {/* The name attribute should match the state.selected_template property */}
              Title: &nbsp;
              <input
                type="text"
                name="title"
                value={this.props.info[this.props.info.selected_template].title}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Date and Time: &nbsp;
              <input
                type="text"
                name="date"
                value={this.props.info[this.props.info.selected_template].volume}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Link: &nbsp;
              <input
                type="text"
                name="link"
                value={this.props.info[this.props.info.selected_template].link}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Desciption: &nbsp;
              <input
                type="text"
                name="description"
                value={this.props.info[this.props.info.selected_template].description}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Learn Objective 1: &nbsp;
              <input
                type="text"
                name="lo1"
                value={this.props.info[this.props.info.selected_template].lo1}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Learn Objective 2: &nbsp;
              <input
                type="text"
                name="lo2"
                value={this.props.info[this.props.info.selected_template].lo2}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Learn Objective 3: &nbsp;
              <input
                type="text"
                name="lo3"
                value={this.props.info[this.props.info.selected_template].lo3}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="label">
              Link: &nbsp;
              <select
                value={this.props.info[this.props.info.selected_template].years}
                name="link"
                onChange={this.handleTextChange}
              >
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
              </select>
            </div>

          </div>
          )
      }
}


