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
    mapping (address => uint) votesUsed;
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

    function VoteForIdea(address ideaAddress) public {
        Idea idea = Idea(ideaAddress);

        if(votesUsed[msg.sender] >= 1)
        {
            revert();
        }

        votesUsed[msg.sender] = 1;
        idea.Vote();
    }

    function getIdeas() external view returns (Idea[] memory) {
        return Ideas;
    }

    function getIdeaDetails(address ideaAddress) external pure returns (Idea) {
        return Idea(ideaAddress);
    }

    function getTotalVotes() external view returns (uint)
    {
        uint totalVotes = 0;
        for (uint index = 0; index < Ideas.length; index++) {
            totalVotes = totalVotes + Ideas[index].getVotes();
        }

        return totalVotes;
    }
}