import React from 'react';
import Layout from '@theme/Layout';
import schema from '@site/static/json/schema.org.json'
function Schema() {
  return (
    <Layout title="Schema">
      <div
        style={{
          margin: '15px 15px 15px 15px',
          fontSize: '14px',
        }}>
        <PrettyPrintJson></PrettyPrintJson>

      </div>
    </Layout>
  );
}

const PrettyPrintJson = () => {
  // (destructured) data could be a prop for example
  return (<div><pre>{ JSON.stringify(schema["@graph"].[9], null, 2) }</pre></div>);
}
export default Schema;