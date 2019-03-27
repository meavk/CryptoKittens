pragma solidity ^0.5.0;

contract Idea
{
    address public InstanceOwner;
    address public IdeaOwner;
    string public Name;
    string public PresentationLink;
    int private votes;

    constructor(string memory name, address ideaOwner) public payable
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