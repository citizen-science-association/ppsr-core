import React from 'react';
function JsonPretty(props) {
  return (
    <div>
      <h3>JSON-LD</h3>
    <pre
    style={{
      fontSize: "12px",
    }}
    >
      { JSON.stringify(props.json, null, 2) }
    </pre>
    </div>

  );
}

export default JsonPretty;