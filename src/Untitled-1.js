import React from "react";
import { TokenAnnotator, TextAnnotator } from "react-text-annotate";


import "./styles.css";
const TEXT = 
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry"

const TAG_COLORS = {
  ORG: "#00ffa2",
  PERSON: "#84d2ff"
};

const Card = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};
const data = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];
// const [selectedValue,setSelectedValue]= useState(null)

class Appp extends React.Component {
  state = {
    value: [
      {
        start: 5,
        end: 20,
        tag: "PERSON"
      },
      { start: 15, end: 20, tag: "PERSON" },
      { start: 71, end: 75, tag: "DATE" }
    ],
    tag: "PERSON"
  };

  // state={
  //   value:"some text here"
  // }

  handleChange = value => {
    this.setState({ value });
  };

  handleTagChange = e => {
    this.setState({ tag: e.target.value });
  };
   changeEditMode=()=>{
    console.log("should go to editable mode now")
   }

  render() {
    return (
      <div >

        <Card>
          <h4>Character TextAnnotator</h4>
          <select onChange={this.handleTagChange} value={this.state.tag}>
            <option value="ORG">ORG</option>
            <option value="PERSON">PERSON</option>
            {/* options={data} */}            //mouseupevent

          </select>
          {/* <select>
            value={data.find(x=>x.value=== selectedValue)}
             value={selectedValue}
             option={data}
             onchange={this.handleChange}
          </select> */}
          {/* <div className="select-container">
          <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div> */}
          <div >
            <TextAnnotator
              style={{
                maxWidth: 500,
                lineHeight: 1.5
              }}
              //contenteditable="true"
              content={TEXT}
              value={this.state.value}
              onChange={this.handleChange}
              getSpan={span => ({
                ...span,
                tag: this.state.tag,
                color: TAG_COLORS[this.state.tag]
              })}
              renderMark={props => (
                <mark
                  key={props.key}
                  onClick={() =>
                    props.onClick({
                      start: props.start,
                      end: props.end,
                      text: props.text,
                      tag: props.tag,
                      color: props.color
                    })
                  }
                >
                  {props.content}
                  {/* <span>

                  {props.tag}
                </span> */}
                </mark>
              )}
            />
            </div>
        </Card>
        <Card>
          <h4>selected Value</h4>
          <pre>{JSON.stringify(this.state.value, null, 2)}</pre>
        </Card>
      </div>
    );
  }
}



export default Appp;