import React from "react";
import FetchExample from "./custom-hooks/useFetch/FetchExample";
import Container from "./container/Container";

function App() {
  return (
    <React.Fragment>
      <Container>
        <FetchExample />
      </Container>
    </React.Fragment>
  );
}

export default App;
