import React from "react";
import { TextAnnotator } from "react-text-annotate";


import "./styles.css";
const TEXT =
  "today weather in london"
  
const TAG_COLORS = {
  ORG: "#00ffa2",
  PERSON: "#84d2ff",
  LOCATION: "#D433FF",
  FESTIVAL: "#FF5733"
};

const Card = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

class Appp extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [
       
      ],
      tag: "PERSON"
    }
   
  };

  handleChange = value => {
    this.setState({ value });
  };

  handleTagChange = e => {
    this.setState({ tag: e.target.value });
  };
  
  render() {
    return (
      <div >

        <Card>
          <h4>Character TextAnnotator</h4>
          <select onChange={this.handleTagChange} value={this.state.tag}>
            <option value="ORG">ORG</option>
            <option value="PERSON">PERSON</option>
            <option value="LOCATION">LOCATION</option>
            <option value="FESTIVAL">FESTIVAL</option>

          </select>
          <div >    
            {/* contenteditable="true" */}
            <TextAnnotator 
              style={{
                maxWidth: 500,
                lineHeight: 1.5
              }}
              content={TEXT}

              value={this.state.value}
              onChange={this.handleChange}
              getSpan={span => ({
                ...span,
                //  tag: this.state.tag,
                color: TAG_COLORS[this.state.tag]
              })}
            />
          </div>
        </Card>
                
        <Card>
          <h4>selected Value</h4>
          <pre>{JSON.stringify(this.state.value, null,2)}</pre>
        </Card>
      </div>
    );
  }
}



export default Appp;