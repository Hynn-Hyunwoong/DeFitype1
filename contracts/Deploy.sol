// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.12;

contract Deploy {
    uint private stateValue;

    constructor(uint _stateValue) {
        stateValue = _stateValue;
    }

    function setStateValue(uint _stateValue) public {
        stateValue = _stateValue;
    }

    function getStateValue() public view returns (uint _stateValue) {
        _stateValue = stateValue;
    }
}