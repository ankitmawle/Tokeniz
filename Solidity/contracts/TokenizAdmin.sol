// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./proxy.sol";

contract TokenizAdmin is Context,  AccessControlEnumerable, ERC721Enumerable, ERC721URIStorage, Ownable
{    
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIdTracker;
    proxy private _proxy;
    uint private _price;
    address private _wallet;
    bool public _openMint;
    mapping(uint256 => address) public tokenizAddress;
    address private _proxyAddress;

    
    constructor(
        string memory name, 
        string memory symbol, 
        uint mintPrice, 
        address wallet, 
        address admin, 
        address proxyAddress
    ) ERC721(name, symbol) {
        _price = mintPrice;
        _proxyAddress=proxyAddress;
        _wallet = wallet;
        _openMint = false;
        _setupRole(DEFAULT_ADMIN_ROLE, wallet);
        _setupRole(DEFAULT_ADMIN_ROLE, admin);
    }
    
    function setPrice(uint mintPrice) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "TokenizAdmin: must have admin role to change price");
        _price = mintPrice;
    }
 
    function setMint(bool openMint) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "TokenizAdmin: must have admin role to open/close mint");
        _openMint = openMint;
    }
 

    function setTokenURI(
        uint256 tokenId, 
        string memory _tokenURI
    ) external {
        require(msg.sender==ownerOf(tokenId));
        _setTokenURI(tokenId, _tokenURI);
    }
 

    function price() public view returns (uint) {
        return _price;
    }
 
    function mint(
        string memory tokenName, 
        string memory _tokenURI, 
        address[] memory _tokensAddresses, 
        uint[] memory _amounts,
        uint _trxAmount
    ) public  payable {
        require(_openMint == true, "TokenizAdmin: minting is closed");
        uint _requiredCurrency= _price+_trxAmount;
        require(msg.value >= _requiredCurrency);
        uint256 _tracker= _tokenIdTracker.current();
        _tokenIdTracker.increment();
        _setTokenURI(_tracker, _tokenURI);
        _mint(msg.sender,_tracker);
        _proxy = proxy(_proxyAddress);
        tokenizAddress[_tracker]=_proxy.newTokeniz(msg.sender, tokenName, _tokenURI,  _tokensAddresses, _amounts, _tracker );
        
        for (uint i = 0; i < _tokensAddresses.length; i++) {
            address _tokenContracts= _tokensAddresses[i];
            IERC20 tokenContract = IERC20(_tokenContracts);
            tokenContract.transferFrom(msg.sender, tokenizAddress[_tracker], _amounts[i]);
        }

        payable(_wallet).transfer(_price);
        payable(tokenizAddress[_tracker]).transfer(_trxAmount);
    }
 
    function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
        return ERC721URIStorage._burn(tokenId);
    }
 
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return ERC721URIStorage.tokenURI(tokenId);
    }
 
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }
 
    function supportsInterface(bytes4 interfaceId) public view virtual override(AccessControlEnumerable, ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function getTokenizAddress(
        uint256 tokenId
    ) public view returns (address){
        return tokenizAddress[tokenId];
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        if(from!=address(0)){
            Tokeniz tokeniz= Tokeniz(payable(tokenizAddress[tokenId]));
            tokeniz._safeTransfer(from,to);
        }
    }

    function transferFromAndUnpack(        
        address from,
        address to,
        uint256 tokenId
    )   public{
        safeTransferFrom(from,to,tokenId);
        Tokeniz tokeniz= Tokeniz(payable(tokenizAddress[tokenId]));
        tokeniz._safeUnPack();

    }

    function unpack(
        uint256 tokenId
    )   external {
        require(msg.sender==ownerOf(tokenId));
        Tokeniz tokeniz= Tokeniz(payable(tokenizAddress[tokenId]));
        tokeniz._safeUnPack();
    } 
}