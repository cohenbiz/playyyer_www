// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract Playyyer {
    address public admin;

    address private _addr;
    address private _guestRegistred;
    uint256 private _counterEvent;
    uint256 private _counterGuests;

    struct Guest {
        string pseudo;
        string nature;
        string email;
        string privateEvent;
        uint256 priceEvent;
    }

    struct PlayyyerEvent {
        address id;
        string name;
        uint256 priceEvent;
        uint256 capacity;
        string extras;
    }

    mapping(address => Guest) private _guests;
    mapping(address => PlayyyerEvent) public eventList;

    constructor() public {}

    function getGuest() public view returns (Guest memory) {
        return _guests[_addr];
    }

    function setGuest(
        string memory _pseudo,
        string memory _nature,
        string memory _email,
        string memory _privateEvent,
        uint256 _priceEvent
    ) public {
        _guests[_addr] = Guest(_pseudo, _nature, _email, _privateEvent, _priceEvent);
    }

    function registerEvent() public payable {
        _counterGuests++;
    }

    /* modifier onlyGuest() {
        require(_guests[msg.sender].isAdmin == true, "only a guest can do this");
        _;
    }
    */

    function createEvent() public {
        _counterEvent++;
    }

    /*
    modifier onlyAdmin() {
        require(eventList[msg.sender].isAdmin == true, "only admin can do this");
        _;
    }
    */

    function setEvent(
        address _id,
        string memory _name,
        uint256 _priceEvent,
        uint256 _capacity,
        string memory _extras
    ) public {
        eventList[_addr] = PlayyyerEvent(_id, _name, _priceEvent, _capacity, _extras);
    }
}
