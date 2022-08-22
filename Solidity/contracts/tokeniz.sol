// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface IERC20 {
    function transfer(address _to, uint256 _amount) external returns (bool);
    
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    
    function approve(address spender, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external returns (uint256);
}

contract Tokeniz{
    address private tokenizAdmin;
    address public owner;
    bool public packed;
    string public tokenURI;
    string public name;
    mapping(address => uint) public tokenBalance;
    address[] public tokensAddresses;
    uint256 public tokenId;
    
    /**
     * @dev Create a new Tokeniz to choose one of.
     */
    constructor(
        address _initiator, 
        string memory _name, 
        string memory _tokenURI, 
        address[] memory _tokensAddresses, 
        uint[] memory _amounts, 
        uint256 _tokenID,
        address _tokenizAdmin
    ) {
        tokenizAdmin = _tokenizAdmin;
        owner = _initiator; 
        packed = true;
        for (uint i = 0; i < _tokensAddresses.length; i++) {
            tokensAddresses.push(_tokensAddresses[i]);
            tokenBalance[_tokensAddresses[i]]=_amounts[i];
        }
        tokenURI=_tokenURI;
        name= _name;
        tokenId= _tokenID;
    }

    function isPacked() public view returns(bool)
    {
        return packed;
    }
    
    function unPack() public
    {
        require(
            msg.sender== owner,
            "Only Owner can unpack Tokeniz."
            );
        require(packed, "Already unpacked Tokeniz");
        packed= false;
        payable(owner).transfer(address(this).balance);
        for (uint i = 0; i < tokensAddresses.length; i++) {
            address _tokenContracts= tokensAddresses[i];
            IERC20 tokenContract = IERC20(_tokenContracts);
            tokenContract.transfer(owner, tokenBalance[_tokenContracts]);
        }
    }
    
    function _safeUnPack() public
    {
        require(msg.sender == tokenizAdmin, "Must be sent via Tokeniz admin contract");
        require(packed, "Already unpacked Tokeniz");
        packed= false;
        payable(owner).transfer(address(this).balance);
        for (uint i = 0; i < tokensAddresses.length; i++) {
            address _tokenContracts= tokensAddresses[i];
            IERC20 tokenContract = IERC20(_tokenContracts);
            tokenContract.transfer(owner, tokenBalance[_tokenContracts]);
        }
    }
    
    function _safeTransfer(address _initiator,address receiver) public{
        require(owner== _initiator,"Only owner can transfer");
        require(msg.sender == tokenizAdmin, "Must be sent via Tokeniz admin contract");
        owner= receiver;
    }

    //only to withdraw if any fund is received on contract after tokeniz has been unpacked
    function _withdraw() public{
        require(!packed);
        payable(owner).transfer(address(this).balance);
    }


    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

}