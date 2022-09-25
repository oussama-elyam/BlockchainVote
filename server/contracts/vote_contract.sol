// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract vote_contract {
  mapping(string => address[]) candidateVotes;
  mapping(address => bool) alreadyVote;
  uint256 totalVotes ;
  event Vote(address voter, string candidate);
  function vote(address _voter, string calldata _candidate) external {
        require(alreadyVote[_voter] == false, "the voter has already voted");
        
        candidateVotes[_candidate].push(_voter);
        alreadyVote[_voter] = true;
        totalVotes++;
        emit Vote(_voter, _candidate);
    }

    function getVote(string calldata _candidate)
        external
        view
        returns (uint256)
    {
        return candidateVotes[_candidate].length;
    }
  }

