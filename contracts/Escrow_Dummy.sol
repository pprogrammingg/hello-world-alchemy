// SPDX-License-Identifier: UNLICENSED
// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.7.3;

// Defines a contract named `Escrow`.
contract Escrow {

    // Event to log updates
    event UpdatedEvent(uint256 requestId, uint256 budget);
   
    // Mapping to hold requestId to budget
    mapping(uint256 => uint256) holdMapping;

    // Constructor (not needed in this example)
    constructor() {
        // Constructor can be left empty if no initialization is required upon contract deployment
    }

    // Update mapping, emit UpdatedEvent, then revert
    function update_mapping_then_revert(uint256 requestId, uint256 budget) public {
        holdMapping[requestId] = budget;
        emit UpdatedEvent(requestId, budget);
        revert("Reverting for demonstration");
    }

    // Update mapping, emit UpdatedEvent, then assert a condition that always fails
    function update_mapping_then_asset_failure(uint256 requestId) public {
        uint256 budget = holdMapping[requestId];
        emit UpdatedEvent(requestId, budget);
        require(false, "Always fail to demonstrate assertion failure");
    }

     // Update mapping, emit UpdatedEvent,loop till 100M to give time to cancel
    
    // Update mapping, emit UpdatedEvent, then execute a long loop
    function update_mapping_then_long_loop(uint256 requestId) public {
        // Update the mapping with some value (e.g., requestId as key and requestId*2 as value)
        holdMapping[requestId] = requestId * 2;
        emit UpdatedEvent(requestId, requestId * 2);

        // Simulate a long loop to delay execution
        uint256 sum = 0;
        for (uint256 i = 0; i < 100000000; i++) {
            sum += i;
        }
        // Loop completes execution, but be cautious of gas limits and transaction costs
    }

    // Update mapping, emit UpdatedEvent
    function update_mappingthen_success(uint256 requestId, uint256 budget) public {
        holdMapping[requestId] = budget;
        emit UpdatedEvent(requestId, budget);
        // No revert here, indicating successful execution
    }
}
