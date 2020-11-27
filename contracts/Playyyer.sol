// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract Playyyer {
    address public superAdmin;
    address public admin;

    address payable wallet;

    address private _addr;
    address private _guestRegistred;
    uint256 public idEvent;
    uint256 private _counterEvent;
    uint256 private _counterGuests;
    uint256 private _maxGuest;
    

    struct Guest {
        string pseudo;
        string nature;
        string email;
        bool isAdmin;
    }

    struct PlayyyerEvent {
        address id;
        bool isAdmin;
        string nameEvent;
        uint256 priceEvent;
        uint256 capacity;
        string extras;
    }
    
    struct GuestRegistredEvent {
        address idEvent;
        string pseudo;
        uint256 priceEvent;
        bool isVip;
        string extras;
        
    }
    
    mapping(address => Guest) private _guests;
    mapping(address => PlayyyerEvent) public eventList;
    mapping(address => GuestRegistredEvent) public guestList;
    mapping(address => uint256) public balances;
    mapping(address => bool) private _admins;
    
    constructor() public {
      _addr = msg.sender;
      /*superAdmin = owner*/
    }

    function getGuest(address guestAddr) public view returns (Guest memory) {
        return _guests[guestAddr];
    }

    function registerGuest(
        string memory _pseudo,
        string memory _nature,
        string memory _email,
        bool _isAdmin
    ) public {
        _guests[msg.sender] = Guest(_pseudo, _nature, _email, _isAdmin);
    }
    
    function registerGuestOnEvent(
        address _idEvent,
        string memory _pseudo,
        uint256 priceEvent,
        bool isVip,
        string memory extra
        ) public payable onlyGuest {
        /*wallet[msg.sender] -= priceEvent;*/
       _maxGuest -=1;
       guestList[msg.sender] = GuestRegistredEvent(_idEvent, _pseudo, priceEvent, isVip, extra);
    }

     modifier onlyGuest() {
        require(_guests[msg.sender].isAdmin == true, "only a guest can register on an event");
        _;
    }

    function createEvent(
    ) public onlyAdmin {
        _counterEvent++;

    }

    modifier onlyAdmin() {
        require(eventList[msg.sender].isAdmin == true, "only admin can do this");
        _;
    }

    function setEvent(
        address _id,
        bool _isAdmin,
        string memory _name,
        uint256 _priceEvent,
        uint256 _capacity,
        string memory _extras
    ) public {
        eventList[_addr] = PlayyyerEvent(_id, _isAdmin, _name, _priceEvent, _capacity, _extras);
    }
    
    function getCountEvent() public view returns (uint256) {
    return _counterEvent;
    }
    
    function getOwner() public view returns (address) {
    return superAdmin;
    }
  
    function isAdmin(address _guest) public view returns (bool) {
    return _admins[_guest];
    }
  
    function addAdmin(address _guest) public onlyAdmin {
    _admins[_guest] = true;
    }

    function delAdmin(address _guest) public onlyAdmin {
    _admins[_guest] = false;
    }   
}
