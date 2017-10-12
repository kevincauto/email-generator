import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CCEDLiveWebinarForm from './components/CCEDLiveWebinarForm';
import CCEDLiveWebinarHTML from './components/CCEDLiveWebinarHTML';

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
    let displayForm;


    if (this.props.info.selected_template === 'cced_live_webinar') {
        displayForm = (
          <CCEDLiveWebinarForm
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
   let htmlDisplay = "Nothing to display right now.";
   if(this.props.info.selected_template === 'cced_live_webinar'){htmlDisplay = <CCEDLiveWebinarHTML info={this.props.info} />}

    return (
        <div>
        {htmlDisplay}
        </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));

let cced_on_demand = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Now On Demand</title>
<style type="text/css">
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
</style>
</head>

<body bgcolor="#efefef">
	<table width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="font-family:'Helvetica','Arial',sans-serif;background-color:#ffffff">
	<tbody>
    <tr>
		<td colspan="2" style="font-size:9px; line-height:20px; text-transform:uppercase; text-align:center; color:#333333; background-color:#efefef;">
		Cannot view this email? 
			<a href="http://aegispublications.com/news/cced/2017/09/Instrumentarium-5-On-Demand.html" target="_blank" style="text-decoration:none; color:#c2904a;">
				Click here to view the HTML version.
			</a>
		</td>
	</tr>
    <tr>
		<td colspan="2">
			<table width="100%" cellpadding="0" cellspacing="0" border="0">
				<tbody><tr>
				  <td height="39" colspan="2" align="center" valign="top" id="cover2"><a href="https://cced.cdeworld.com/" target="_blank"><img src="http://www.aegispublications.com/news/cdeworld/2016/03/cced-header.jpg" width="659" height="75" hspace="0" vspace="0" border="0" align="left"></a></td>
			  </tr>
              <tr>
			</tr></tbody></table>
		</td>
	</tr>
	<tr>
		<td colspan="2">
			<table width="590" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid #e4e4e4; margin:0 32px 20px 32px">
				<tbody><tr>
					<td style="padding:21px 0 21px 0; font-family:'Times New Roman',serif;font-size:28px; font-style:italic; color:#c2904a;">Free On-Demand CE Webinar</td>
				</tr>
			</tbody></table>
		</td>
	</tr>
	
	<tr>
		<td colspan="2" valign="top" style="padding:12px 32px 24px 32px;font-size:13px;color:#424242;line-height:16px">
			<table cellpadding="0" cellspacing="0" border="0" align="right" style="padding:0 0 30px 0">
			<tbody><tr>
				<td bgcolor="#ffffff" style="border-collapse:collapse;padding:0 14px 10px 0"></td>
			  <td align="right" valign="top">
				<a href="https://cdeworld.com/webinars/20778-Getting_started_with_CBCT_Imaging_for_Implant_Planning_and_Surgical_Guides" target="_blank"><img src="https://www.dentalaegis.com/media/63260/" alt="" width="299"></a><br>
				</td>
			</tr>
		</tbody></table>	
        	<div style="font-size:18px; line-height:20px; font-weight:bold; width:40%;"><a href="https://cdeworld.com/webinars/20778-Getting_started_with_CBCT_Imaging_for_Implant_Planning_and_Surgical_Guides" target="_blank" style="color:#c2904a; text-decoration:none;">Getting started with CBCT Imaging for Implant Planning and Surgical Guides</a></div>
        
        	
            <a href="https://cdeworld.com/webinars/20778-Getting_started_with_CBCT_Imaging_for_Implant_Planning_and_Surgical_Guides" target="_blank" style="text-transform:uppercase; font-size:16px; background:#c2904a; padding:10px 11px;color:#ffffff; border-radius:10px; font-weight:bold; display:block; width:193px; text-align:center; margin:14px 0 14px 0; text-decoration:none;">VIEW THE WEBINAR</a><br />
			<strong>Presenter:</strong> Douglas Chenin, DDS | <strong>Provider:</strong> AEGIS Publications, LLC<br>					
			<em><strong>Commercial Supporter:</strong> Kavo Kerr</em><br>
			<strong>CDE Credits:</strong> 1 Self Study | <strong>Cost:</strong> $0.00 | August 2017 - August 31st, 2020<br><br />
			<strong>Description</strong><br>
			<div style="margin:5px 0 0 0">This webinar will introduce CBCT and 3D imaging in general practice with a focus on its value for implant planning and surgical guides. </div>		
			<br>
			<strong>Learning Objectives</strong>
			<ul style="margin:5px 0 0 0; padding:0 0 0 1.3em;">
				<li>Conceptualize the rationale for 3D imaging and how 3D imaging enhances diagnostics beyond 2D imaging for implant planning</li>
				<li>Understand how to asses and visualize patient CBCT data properly in 3D and 2D cross-sections for clinical applications</li>
				<li>Demonstrate the foundational 3D imaging principles by exploring sample cases within 3D imaging software</li>
			</ul>
            <strong><br>
            Disclosures</strong><br>
			<div style="margin:5px 0 0 0;">Dr. Chenin has received an honorarium for his preparation and presentation of this program.</div>
		</td>
	</tr>
	<tr>
		<td colspan="2" align="center">
			<img src="http://aegispublications.com/news/id/webinars/webinar-footer.jpg" width="600" height="85" style="border-top:1px solid #e4e4e4;" />
		</td>
	</tr>
	<tr>
	  <td colspan="2" align="center" style="font-size:10px; font-family:Arial, Helvetica, sans-serif; color:#424242; padding:11px 0 11px 0; border-top:solid 1px #efefef; background-color:#efefef;">
      	<a href="mailto:?subject=On Demand Webinar!&amp;body=I thought you might be interested in this: http://aegispublications.com/news/cced/2017/09/Instrumentarium-5-On-Demand.html" target="_blank" style="text-decoration:none; color:#c2904a;">
				Forward to a Colleague
			</a>
			&nbsp;&nbsp;|&nbsp;&nbsp; 
			<a href="http://www.dentalaegis.com/privacy-policy/" target="_blank" style="text-decoration:none; color:#c2904a;">
				Privacy Policy
			</a>
				<br />
			<em>Compendium</em>  |  104 Pheasant Run, Suite 105  |  Newtown, PA 18940
			  <br />
		    
		%%PLUGIN_UNSUBSCRIBE: 2144642-UNSUBSCRIBE%%
</div> 
      </td>
	</tr>	
  </tbody>
</table>
</body>
</html>
`