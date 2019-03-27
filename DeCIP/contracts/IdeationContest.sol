pragma solidity ^0.5.0;

import './Idea.sol';

contract IdeationContest
{
    enum StateType { 
      SubmissionOpen,
      Voting,
      VotingComplete
    }

    event IdeaAdded(string _message);

    address public InstanceOwner;
    string public Description;
    string public Name;
    StateType public State;
    mapping (address => uint) balanceVotes;
    uint public TotalIdeas;
    Idea[] public Ideas;

    constructor(string memory name, string memory description) public
    {
        InstanceOwner = msg.sender;
        Description = description;
        Name = name;
        State = StateType.SubmissionOpen;
        TotalIdeas = 0;
    }

    function SubmitIdea(string memory name) public {
        Idea newIdea = new Idea(name, msg.sender);
        Ideas.push(newIdea);
        TotalIdeas++;
    }

    function getIdeas() external view returns (Idea[] memory) {
        return Ideas;
    }

    function getIdeaDetails(address ideaAddress) external pure returns (Idea) {
        Idea idea = Idea(ideaAddress);
        return idea;
    }
}