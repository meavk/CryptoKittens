pragma solidity ^0.5.0;

contract IdeationContest
{
    enum StateType { 
      SubmissionOpen,
      Voting,
      VotingComplete
    }

    address public InstanceOwner;
    string public Description;
    string public Name;
    StateType public State;
    mapping (address => int) balanceVotes;

    constructor(string memory description, string memory name) public
    {
        InstanceOwner = msg.sender;
        Description = description;
        Name = name;
        State = StateType.SubmissionOpen;
    }

    function SubmitIdea(string memory name) public {
        
    }
}

contract Idea
{
    address public InstanceOwner;
    address public IdeaOwner;
    string public Name;
    string public PresentationLink;
    int private votes;

    constructor(string memory name, address ideaOwner) public
    {
        Name = name;
        votes = 0;
        InstanceOwner = msg.sender;
        IdeaOwner = ideaOwner;
    }

    function AddLink(string memory link) public
    {
        if(IdeaOwner != msg.sender)
        {
            revert();
        }

        PresentationLink = link;
    }

    function Vote() public 
    {
        if(InstanceOwner != msg.sender)
        {
            revert();
        }

        votes++;
    }
}