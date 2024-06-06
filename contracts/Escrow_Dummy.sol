// SPDX-License-Identifier: UNLICENSED
// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.7.3;

// Defines a contract named `Escrow`.
contract Escrow {

    // Event to log simple mapping updates
    event SimpleUpdatedEvent(uint256 requestId, uint256 budget);
   
    // Simple hold mapping 
    mapping(uint256 => uint256) public simpleHoldMapping;

    // Events
    event AddHoldRecordEvent(string indexed indexedRequestId, string nonIndexRequestId, string budget, string currency, address payerAddress, address payeeAddress);
    event ProcessHoldRecordEvent(string indexed indexedRequestId, string nonIndexRequestId, string effective_cost);
    event ReleaseHoldRecordEvent(string indexed indexedRequestId, string nonIndexRequestId);
    event TransferPaymentEvent(string indexed indexedRequestId, address indexed payerAddress, address indexed payeeAddress, string nonIndexRequestId, uint256 transferAmount);

    // More releastic hold mapping
    mapping(string => HoldRecord) public holdMapping;
    struct HoldRecord{
        string budget;
        string currency;
        address payer;
        address payee;
    }

   HoldRecord NULL_HOLD_RECROD = HoldRecord("", "", address(0), address(0));

    // Constructor (not needed in this example)
    constructor() {
        // Constructor can be left empty if no initialization is required upon contract deployment
    }

    // Update mapping, emit UpdatedEvent
    function update_mappingthen_success(uint256 requestId, uint256 budget) public {
        simpleHoldMapping[requestId] = budget;
        emit SimpleUpdatedEvent(requestId, budget);
        // No revert here, indicating successful execution
    }

    /*
     * Add hold record
     * 1. Make sure requestId does NOT exist, if it does return error
     * 2. Add a HoldRecord based on given parameters
     * 3. Emit AddHoldRecordEvent
     */
    function add_hold_record(string calldata requestId, string calldata budget, string calldata currency, address payerAddress, address payeeAddress) public {
        holdMapping[requestId] = HoldRecord(budget, currency, payerAddress, payeeAddress);
        emit AddHoldRecordEvent(requestId, requestId, budget, currency, payerAddress, payeeAddress);
    }

    /*
     * Process payments based on hold record
     * 1. Get hold record based on requestId, if not exist return error. 
     * 2. Make sure effective cost is less or equal to the budget 
     * 3. Transfer the effective amount
     * 4. Emit TransferPaymentEvent
     * 5. Nullify the hold record at requestId
     * 6. Emit ProcessHoldRecordEvent
     */
    function process_hold_record(string calldata requestId, string calldata effectiveCost) public {
         
         // 4. 
         emit TransferPaymentEvent(requestId, address(0xEc8cfD6236B5C026778652c2BA0E7e6d0F0D3D0d), address(0x351Bf8A33125a0C324d54bb47C71D25E4f35C6E7), requestId, 300);
         // 5.
         holdMapping[requestId]  = NULL_HOLD_RECROD;
         // 6.
         emit ProcessHoldRecordEvent(requestId, requestId, effectiveCost);
    }

    /*
     * Process payments based on hold record
     * 1. Check requestId exist, if DOES return error
     * 2. Nullify the hold record at requestId
     * 3. Emit ReleasedHoldRecord event
     */
    function release_hold_record(string calldata requestId) public {
       // 3.
        emit ReleaseHoldRecordEvent(requestId, requestId);
    }





}
