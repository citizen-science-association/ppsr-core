import React from "react";
import Layout from "@theme/Layout";
import SchemaLayout from "../../components/schema";
function SchemaPage() {
  return (
    <Layout title="Schema">
      <div className="container">
        <div className="padding-vert--lg">
          <h1>Schema Demo</h1>
          <p>
            This page contains content loaded from the schema.org JSON-LD file.
            It automaticly parses and displays it on the page. This can be shown
            in raw form or be used to fill in placeholders on the page.
          </p>
        </div>
        <SchemaLayout label="Airline"></SchemaLayout>

      </div>

    </Layout>
  );
}

export default SchemaPage;
