import SimpleStorage from "./contracts/SimpleStorage.json";
import ComplexStorage from "./contracts/ComplexStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import IdeationContest from "./contracts/IdeationContest.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  contracts: [SimpleStorage, ComplexStorage, TutorialToken, IdeationContest],
  events: {
    SimpleStorage: ["StorageSet"],
    IdeationContest: ["IdeaAdded"],
  },
  polls: {
    accounts: 600000,
  },
};

export default options;
