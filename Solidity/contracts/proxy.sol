// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "./tokeniz.sol";
contract proxy{
    Tokeniz public tokeniz;
    address public owner;
    address private creator;
    constructor(){
        creator= msg.sender;
    }
    function setOwner(address _owner) public {
        require(msg.sender== creator);
        owner= _owner;
    }

    function newTokeniz(
        address _initiator,
        string memory tokenName, 
        string memory _tokenURI, 
        address[] memory _tokensAddresses, 
        uint[] memory _amounts,
        uint256 _tracker
    ) public returns ( address ) {
        require(msg.sender== owner);
        tokeniz = new Tokeniz(_initiator, tokenName, _tokenURI,  _tokensAddresses, _amounts,_tracker, owner );
        return address(tokeniz);
    }
}