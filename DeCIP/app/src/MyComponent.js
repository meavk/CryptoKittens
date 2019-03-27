import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

export default ({ accounts }) => (
  <div className="App">
    <div className="section">
      <h2>Active Account</h2>
      <AccountData accountIndex={Math.floor(Math.random() * 10)} units="ether" precision="3" />
    </div>

    <div className="section">

      <h2>Ideation Contest- Summary</h2>
      <p>
        All Submitted Ideas.
      </p>
      <p>
        <strong>Total Ideas : </strong>
        <ContractData contract="IdeationContest" method="TotalIdeas" />
      </p>
      <div>
        <ContractData contract="IdeationContest" method="getIdeas" />
      </div>
      <ContractForm contract="IdeationContest" method="SubmitIdea" sendArgs={{gas: 1200000, gasPrice: 40000000000}}/>

      <h2>Idea details</h2>
      <ContractForm contract="IdeationContest" method="getIdeaDetails" />

      <h2>SimpleStorage</h2>
      <p>
        This shows a simple ContractData component with no arguments, along with
        a form to set its value.
      </p>
      <p>
        <strong>Stored Value: </strong>
        <ContractData contract="SimpleStorage" method="storedData" />
      </p>
      <ContractForm contract="SimpleStorage" method="set" />
    </div>
  </div>
);
