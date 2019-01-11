pragma solidity ^0.4.23;


contract HelloWorld {
   
   // Define variable message of type string
    string message;
    event test(uint res);
 
   // Write function to change the value of variable message
    function postMessage(string value) public returns (string) {
        message = value;
        emit test(8);
        return message;
    }
 
   // Read function to fetch variable message
    function getMessage() public view returns (string) {
        return message;
    }
}