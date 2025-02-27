const Contract = {
	address: '0x834ef1f87120fbd01e419f279bcfc0ded360d5aa',
	abi: [
		{
			inputs: [{ internalType: 'uint256', name: '_numOfSeats', type: 'uint256' }],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'string', name: 'proposalHash', type: 'string' },
				{ indexed: false, internalType: 'address', name: 'memberDiluted', type: 'address' },
				{
					indexed: false,
					internalType: 'uint256',
					name: 'totalDilutionValueBefore',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'totalDilutionValueAfter',
					type: 'uint256',
				},
			],
			name: 'DilutionCreated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'string', name: 'proposalHash', type: 'string' },
				{ indexed: false, internalType: 'address', name: 'memberDiluted', type: 'address' },
				{
					indexed: false,
					internalType: 'uint256',
					name: 'totalDilutionValueBefore',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'totalDilutionValueAfter',
					type: 'uint256',
				},
			],
			name: 'DilutionModified',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'string', name: 'electionHash', type: 'string' },
				{
					indexed: false,
					internalType: 'address[]',
					name: 'nominatedCouncilMembers',
					type: 'address[]',
				},
				{ indexed: false, internalType: 'address[]', name: 'voters', type: 'address[]' },
				{ indexed: false, internalType: 'address[]', name: 'nomineesVotedFor', type: 'address[]' },
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'assignedVoteWeights',
					type: 'uint256[]',
				},
			],
			name: 'ElectionLogged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'address', name: 'oldOwner', type: 'address' },
				{ indexed: false, internalType: 'address', name: 'newOwner', type: 'address' },
			],
			name: 'OwnerChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [{ indexed: false, internalType: 'address', name: 'newOwner', type: 'address' }],
			name: 'OwnerNominated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'string', name: 'proposalHash', type: 'string' },
				{ indexed: false, internalType: 'string', name: 'electionHash', type: 'string' },
				{ indexed: false, internalType: 'uint256', name: 'start', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'end', type: 'uint256' },
			],
			name: 'ProposalLogged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'previousProposalPeriod',
					type: 'uint256',
				},
				{ indexed: false, internalType: 'uint256', name: 'newProposalPeriod', type: 'uint256' },
			],
			name: 'ProposalPeriodModified',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'uint256', name: 'previousNumberOfSeats', type: 'uint256' },
				{ indexed: false, internalType: 'uint256', name: 'newNumberOfSeats', type: 'uint256' },
			],
			name: 'SeatsModified',
			type: 'event',
		},
		{
			inputs: [],
			name: 'acceptOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'string', name: 'proposalHash', type: 'string' },
				{ internalType: 'address', name: 'memberToDilute', type: 'address' },
			],
			name: 'dilute',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'string', name: '', type: 'string' }],
			name: 'electionHashToLog',
			outputs: [
				{ internalType: 'string', name: 'electionHash', type: 'string' },
				{ internalType: 'uint256', name: 'created', type: 'uint256' },
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'string', name: '', type: 'string' },
				{ internalType: 'address', name: '', type: 'address' },
			],
			name: 'electionMemberVotedFor',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'string', name: 'proposalHash', type: 'string' },
				{ internalType: 'address', name: 'councilMember', type: 'address' },
			],
			name: 'getDilutedWeightForProposal',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'string', name: 'proposalHash', type: 'string' },
				{ internalType: 'address', name: 'memberDiluted', type: 'address' },
			],
			name: 'getDilutorsForDilutionReceipt',
			outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'string[]', name: 'proposalHashes', type: 'string[]' }],
			name: 'getValidProposals',
			outputs: [{ internalType: 'string[]', name: '', type: 'string[]' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'string', name: 'proposalHash', type: 'string' },
				{ internalType: 'address', name: 'memberDiluted', type: 'address' },
				{ internalType: 'address', name: 'voter', type: 'address' },
			],
			name: 'getVoterDilutionWeightingForDilutionReceipt',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'string', name: '', type: 'string' },
				{ internalType: 'address', name: '', type: 'address' },
			],
			name: 'hasAddressDilutedForProposal',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'string', name: 'proposalHash', type: 'string' },
				{ internalType: 'address', name: 'memberToUndilute', type: 'address' },
			],
			name: 'invalidateDilution',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' },
			],
			name: 'latestDelegatedVoteWeight',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'latestElectionHash',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'latestVotingWeight',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'string', name: 'electionHash', type: 'string' },
				{ internalType: 'address[]', name: 'nominatedCouncilMembers', type: 'address[]' },
				{ internalType: 'address[]', name: 'voters', type: 'address[]' },
				{ internalType: 'address[]', name: 'nomineesVotedFor', type: 'address[]' },
				{ internalType: 'uint256[]', name: 'assignedVoteWeights', type: 'uint256[]' },
			],
			name: 'logElection',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'string', name: 'proposalHash', type: 'string' }],
			name: 'logProposal',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: '_proposalPeriod', type: 'uint256' }],
			name: 'modifyProposalPeriod',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: '_numOfSeats', type: 'uint256' }],
			name: 'modifySeats',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
			name: 'nominateNewOwner',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'nominatedOwner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'numOfSeats',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'string', name: '', type: 'string' }],
			name: 'proposalHashToLog',
			outputs: [
				{ internalType: 'string', name: 'proposalHash', type: 'string' },
				{ internalType: 'string', name: 'electionHash', type: 'string' },
				{ internalType: 'uint256', name: 'start', type: 'uint256' },
				{ internalType: 'uint256', name: 'end', type: 'uint256' },
				{ internalType: 'bool', name: 'exist', type: 'bool' },
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'string', name: '', type: 'string' },
				{ internalType: 'address', name: '', type: 'address' },
			],
			name: 'proposalHashToMemberDilution',
			outputs: [
				{ internalType: 'string', name: 'proposalHash', type: 'string' },
				{ internalType: 'address', name: 'memberDiluted', type: 'address' },
				{ internalType: 'uint256', name: 'totalDilutionValue', type: 'uint256' },
				{ internalType: 'bool', name: 'exist', type: 'bool' },
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'proposalPeriod',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
	],
};
export default Contract;
