import React, {Component} from "react";
// import PropTypes from 'prop-types'
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

// class MyComponent extends Component
// {
//   constructor(props, context) {
//     super(props);
//     console.log(props);
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="section">
//           <h2>Active Account</h2>
//           <AccountData accountIndex={Math.floor(Math.random() * 10)} units="ether" precision="3" />
//         </div>
    
//         <div className="section">
    
//           <h2>Ideation Contest- Summary</h2>
//           <p>
//             All Submitted Ideas.
//           </p>
//           <p>
//             <strong>Total Ideas : </strong>
//             <ContractData contract="IdeationContest" method="TotalIdeas" />
//           </p>
//           <div>
//             <ContractData contract="IdeationContest" method="getIdeas" />
//           </div>
//           <ContractForm contract="IdeationContest" method="SubmitIdea" sendArgs={{gas: 1200000, gasPrice: 40000000000}}/>
    
//           <h2>Idea details</h2>
//           <ContractData contract="IdeationContest" method="getIdeas" methodArgs={[this.contracts.IdeationContext[0]]}/>
    
//           <h2>SimpleStorage</h2>
//           <p>
//             This shows a simple ContractData component with no arguments, along with
//             a form to set its value.
//           </p>
//           <p>
//             <strong>Stored Value: </strong>
//             <ContractData contract="SimpleStorage" method="storedData" />
//           </p>
//           <ContractForm contract="SimpleStorage" method="set" />
//         </div>
//       </div>
//     );
//   }
// }

// export default MyComponent;

export default ({ accounts, IdeationContest }) => (
  <div className="App">
    <div className="section">
      <h2>Active Account</h2>
      <AccountData units="ether" precision="3" />
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

      <h2>Vote</h2>
      <p>
        <strong>Total Votes : </strong>
        <ContractData contract="IdeationContest" method="getTotalVotes" />
      </p>
      <ContractForm contract="IdeationContest" method="VoteForIdea" sendArgs={{gas: 1200000, gasPrice: 40000000000}}/>      

    </div>
  </div>
);
