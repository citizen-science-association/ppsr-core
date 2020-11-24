import React from "react";
import schemaJson from "@site/static/json/schema.org.json";
import JsonPrint from "../jsonPrint";
class SchemaLayout extends React.Component {
    constructor(props) {
        super(props);
        
        this.json = schemaJson["@graph"].find((node) => {
            return node["rdfs:label"] === props.label;
        });
        console.log(props)
        console.log("generate node")
    }
  render() {
    return (
      <div
      style={{
        margin: "15px",
      }}
      >
        <h1>{this.json["rdfs:label"]}</h1>  
        <h3>{this.json["rdfs:comment"]}</h3>
    
          <JsonPrint json={this.json} ></JsonPrint>
     
      </div>
    );
  }
}
export default SchemaLayout;
