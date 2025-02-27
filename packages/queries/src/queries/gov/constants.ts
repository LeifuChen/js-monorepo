export const electionAuthor = '0xAFe05574a3653cdE39c8Fb842f761F5326Aa424A';
// @TODO: If numbers change - need to update these
export const numOfGrantMembers = 5;
export const numOfAmbassadorMembers = 3;
export const numOfTreasuryMembers = 4;
export const numOfCouncilMembers = 8;

export enum SPACE_KEY {
	COUNCIL = 'spartancouncil.eth',
	TREASURY = 'treasurycouncil.eth',
	PROPOSAL = 'snxgov.eth',
	GRANTS = 'snxgrants.eth',
	AMBASSADOR = 'snxambassador.eth',
}

//@notice - need to add the latest nominations ipfs hash and their names to parse addresses to names
export const councilNominationsJson = {
	QmQJhr44T6aEycwzD44xwKrTU6BdhpDTTbs6XJchYSmZhX: [
		{
			discord: 'BigPenny#7972',
			address: '0x9cFc4cfB2aa99bedc98d52E2DCc0Eb010F20718f',
		},
		{
			discord: 'KALEBn#1733',
			address: '0x1A7fC76f1aC7FeCb71256A79482DD5aD879F293A',
		},
		{
			discord: 'JVK#6935',
			address: '0x8be60fe9F7C8d940D8DA9d5dDD0D8E0c15A4288B',
		},
		{
			discord: 'jj#5546',
			address: '0x9947040a84B4AC584BFac6E7aA4A2677321d8D54',
		},
		{
			discord: 'Kain#1111',
			address: '0x42f9134E9d3Bf7eEE1f8A5Ac2a4328B059E7468c',
		},
		{
			discord: 'bojan#7961',
			address: '0x4412bCaf3c6e37d0e6Fb14a00167B5d98D1dd8C1',
		},
		{
			discord: 'Afif#3126',
			address: '0xDF09B6BB09FdEe5f8d4c17C6642F0A54D6A7654A',
		},
		{
			discord: 'TerraBellus#4774',
			address: '0xA9903BDA477b9A57BD795AdFf9922cB98DB65F04',
		},
		{
			discord: 'redmarglar#3983',
			address: '0x5f024dBA3BCBbfE6DEce556dBb59C5776AEc5903',
		},
	],
	QmdQ1UnKPdYzGEREsYdE3xyBF2FKYWdbYNjdXdWonP5RST: [
		{
			discord: 'BigPenny',
			address: '0x9cFc4cfB2aa99bedc98d52E2DCc0Eb010F20718f',
		},
		{
			discord: 'SynthaMan',
			address: '0x0bc3668d2AaFa53eD5E5134bA13ec74ea195D000',
		},
		{
			discord: 'Kain',
			address: '0x42f9134E9d3Bf7eEE1f8A5Ac2a4328B059E7468c',
		},
		{
			discord: 'jj',
			address: '0x9947040a84B4AC584BFac6E7aA4A2677321d8D54',
		},
		{
			discord: 'Michael Anderson',
			address: '0x65DCD62932fEf5af25AdA91F0F24658e94e259c5',
		},
		{
			discord: 'bojan',
			address: '0x4412bCaf3c6e37d0e6Fb14a00167B5d98D1dd8C1',
		},
		{
			discord: 'Afif',
			address: '0xDF09B6BB09FdEe5f8d4c17C6642F0A54D6A7654A',
		},
		{
			discord: 'Danijel',
			address: '0x461783A831E6dB52D68Ba2f3194F6fd1E0087E04',
		},
		{
			discord: 'TerraBellus ',
			address: '0xA9903BDA477b9A57BD795AdFf9922cB98DB65F04 ',
		},
		{
			discord: 'b.barker089',
			address: '0x5CE87d185c7Ea4E7e88EB505ADCbE3d5AFA61457',
		},
		{
			discord: 'Kaleb',
			address: '0x1A7fC76f1aC7FeCb71256A79482DD5aD879F293A ',
		},
	],
	QmdVCTNvAZTJeDMb8AwU6eBp32nmV6ymsNZ2zMkJM9d93u: [
		{
			discord: 'BigPenny',
			address: '0x9cFc4cfB2aa99bedc98d52E2DCc0Eb010F20718f',
		},
		{
			discord: 'SynthaMan',
			address: '0x0bc3668d2AaFa53eD5E5134bA13ec74ea195D000',
		},
		{
			discord: 'Spreek',
			address: '0x935D2fD458fdf41B6F7B62471f593797866a3Ce6',
		},
		{
			discord: 'Michael Framework',
			address: '0x65DCD62932fEf5af25AdA91F0F24658e94e259c5',
		},
		{
			discord: 'Bojan',
			address: '0x4412bCaf3c6e37d0e6Fb14a00167B5d98D1dd8C1',
		},
		{
			discord: 'Jackson | Synthetix',
			address: '0x0120666306F4D15bb125696f322BFD8EE83423a9',
		},
		{
			discord: 'Danijel',
			address: '0x461783A831E6dB52D68Ba2f3194F6fd1E0087E04',
		},
		{
			discord: 'MoneyManDoug',
			address: '0xb1346105fdF5eEEc401618fbA677d544B3a536eA',
		},
		{
			discord: 'redmarglar',
			address: '0x5f024dBA3BCBbfE6DEce556dBb59C5776AEc5903',
		},
		{
			discord: 'andy | synthetix',
			address: '0xbeBF7295A9Ddc37e33609790b12FBe3dAF93cC73',
		},
		{
			discord: 'TerraBellus',
			address: '0x2825396379c61308388f5edB183C3216191e0642',
		},
		{
			discord: 'Chevis | The General',
			address: '0x527A3ab8f1ff9172fD7d380863c54EdEc60bd41d',
		},
		{
			discord: 'Enzo',
			address: '0x3A136fAc784d455b2a961e32aE8BB6d82D535DE3',
		},
		{
			discord: 'brian',
			address: '0xB0a5a05ac5791AD5a28905B57182CAB1DF9B10aA',
		},
		{
			discord: 'Jaxcrypto',
			address: '0x93DF2Bea2e66d8c4fE547262Bb07975D2774469D',
		},
		{
			discord: 'Kain | Synthetix',
			address: '0x42f9134E9d3Bf7eEE1f8A5Ac2a4328B059E7468c',
		},
	],
	QmT8e5oWmyyM61gnjv5dRx5L5dcX7SZ24Ako62dPS7oHhE: [
		{
			discord: 'NaotoSake',
			address: '0xFA6C97f0efFaB1Ce8D7CD80EB96DDF2ac6bf0e38',
		},
		{
			discord: 'MrSolver',
			address: '0xaC495c0192C2c776C293F7B29eB09AAf3DDf3224',
		},
		{
			discord: 'MoneyManDoug',
			address: '0xb1346105fdF5eEEc401618fbA677d544B3a536eA',
		},
		{
			discord: 'BIgPenny',
			address: '0x9cFc4cfB2aa99bedc98d52E2DCc0Eb010F20718f',
		},
		{
			discord: 'Spreek',
			address: '0x935D2fD458fdf41B6F7B62471f593797866a3Ce6',
		},
		{
			discord: 'TerraBellus',
			address: '0x2825396379c61308388f5edb183c3216191e0642',
		},
		{
			discord: 'Bojan',
			address: '0x4412bCaf3c6e37d0e6Fb14a00167B5d98D1dd8C1',
		},
		{
			discord: 'Danijel',
			address: '0x461783a831e6db52d68ba2f3194f6fd1e0087e04',
		},
		{
			discord: 'Farmwell',
			address: '0x9d256b839C1b46e57122eBb3C5e6da97288FaCf1',
		},
		{
			discord: 'Synthaman',
			address: '0x0bc3668d2AaFa53eD5E5134bA13ec74ea195D000',
		},
		{
			discord: 'justwanttoknowathing',
			address: '0x682C4184286415344a35a0Ff6699bb8EdAbDdc17',
		},
		{
			discord: 'Farmer Joe - The DeFi Oracle',
			address: '0xfBAB3FAE4a4011984B7D9A1D047e0F94c0EDd509',
		},
		{
			discord: 'Kaleb',
			address: '0xBD015d82a36C9a05108ebC5FEE12672F24dA0Cf4',
		},
		{
			discord: 'Akin',
			address: '0x5aC2e309B412c7c1A49837144852A3f726452B30',
		},
		{
			discord: 'Samantha',
			address: '0x15f5d2df1b44c45b48174d0121B9cE2dccD96AC9',
		},
		{
			discord: 'Michael | Framework',
			address: '0x65DCD62932fEf5af25AdA91F0F24658e94e259c5',
		},
		{
			discord: 'Chevis',
			address: '0x527A3ab8f1ff9172fD7d380863c54EdEc60bd41d',
		},
		{
			discord: 'Simone | Dialectic',
			address: '0xa6e02f6D53B6BFFbfcF92f4B0786452d0f28A5Ed',
		},
		{
			discord: 'larpras',
			address: '0x5fC5528E1f363B48c375Ae2Db28BBE82533d8439',
		},
		{
			discord: 'Andy | synthetix',
			address: '0xbeBF7295A9Ddc37e33609790b12FBe3dAF93cC73',
		},
		{
			discord: 'Jackson | synthetix',
			address: '0x0120666306F4D15bb125696f322BFD8EE83423a9',
		},
		{
			discord: 'redmarglar',
			address: '0x5f024dba3bcbbfe6dece556dbb59c5776aec5903',
		},
	],
	QmPyFrvjPRzqsxCpcUFdHU2hWGWV4EJa99ahFATtTyxyZ6: [
		{
			discord: 'BigPenny',
			address: '0x9cFc4cfB2aa99bedc98d52E2DCc0Eb010F20718f',
		},
		{
			discord: 'Danijel',
			address: '0x461783a831e6db52d68ba2f3194f6fd1e0087e04',
		},
		{
			discord: 'Farmwell',
			address: '0x9d256b839C1b46e57122eBb3C5e6da97288FaCf1',
		},
		{
			discord: 'Jackson | Synthetix',
			address: 'wacko.eth',
		},
		{
			discord: 'Spreek',
			address: '0x935D2fD458fdf41B6F7B62471f593797866a3Ce6',
		},
		{
			discord: 'Synthaman',
			address: 'Spartan.eth',
		},
		{
			discord: 'justwanttoknowathing',
			address: '0x682C4184286415344a35a0Ff6699bb8EdAbDdc17',
		},
		{
			discord: 'Farmer Joe - The DeFi Oracle',
			address: '0xfBAB3FAE4a4011984B7D9A1D047e0F94c0EDd509',
		},
		{
			discord: 'Psybull',
			address: 'spartan.psybull.eth',
		},
		{
			discord: 'Kaleb',
			address: '0xBD015d82a36C9a05108ebC5FEE12672F24dA0Cf4',
		},
		{
			discord: 'rubber^ duck',
			address: 'cyberduck.eth',
		},
		{
			discord: 'Akin',
			address: '0x5aC2e309B412c7c1A49837144852A3f726452B30',
		},
		{
			discord: 'Samantha',
			address: '0x15f5d2df1b44c45b48174d0121B9cE2dccD96AC9',
		},
		{
			discord: 'Michael | Framework',
			address: '0x65DCD62932fEf5af25AdA91F0F24658e94e259c5',
		},
		{
			discord: 'Andy | Synthetix',
			address: '0xbeBF7295A9Ddc37e33609790b12FBe3dAF93cC73',
		},
		{
			discord: 'Chevis',
			address: 'cleetus.eth',
		},
		{
			discord: 'Simone | Dialectic',
			address: '0xa6e02f6D53B6BFFbfcF92f4B0786452d0f28A5Ed',
		},
		{
			discord: 'TerraBellus',
			address: '0x62a2AD82CD017065D8040986c6Ef5E619A053fC6',
		},
		{
			discord: 'larpras',
			address: '0x5fC5528E1f363B48c375Ae2Db28BBE82533d8439',
		},
	],
	QmQREHVu11dognYVbHhNSHrxeiMAzoChAsqvD68VtqAo69: [
		{
			discord: 'Danijel',
			address: '0x461783a831e6db52d68ba2f3194f6fd1e0087e04',
		},
		{
			discord: 'Farmwell',
			address: '0x9d256b839C1b46e57122eBb3C5e6da97288FaCf1',
		},
		{
			discord: 'Jackson | Synthetix',
			address: 'wacko.eth',
		},
		{
			discord: 'Spreek',
			address: '0x935D2fD458fdf41B6F7B62471f593797866a3Ce6',
		},
		{
			discord: 'Brendan',
			address: '0xF9d9EB4CDf653f1315aDC09eFDF9A11385DC0546',
		},
		{
			discord: 'Synthaman',
			address: 'Spartan.eth',
		},
		{
			discord: 'justwanttoknowathing',
			address: '0x682C4184286415344a35a0Ff6699bb8EdAbDdc17',
		},
		{
			discord: 'Farmer Joe - The DeFi Oracle',
			address: '0xfBAB3FAE4a4011984B7D9A1D047e0F94c0EDd509',
		},
		{
			discord: 'Psybull',
			address: 'spartan.psybull.eth',
		},
		{
			discord: 'Kaleb',
			address: '0xBD015d82a36C9a05108ebC5FEE12672F24dA0Cf4',
		},
		{
			discord: 'BigPenny',
			address: '0x9cFc4cfB2aa99bedc98d52E2DCc0Eb010F20718f',
		},
		{
			discord: 'rubber^ duck',
			address: 'cyberduck.eth',
		},
		{
			discord: 'Akin',
			address: '0x5aC2e309B412c7c1A49837144852A3f726452B30',
		},
		{
			discord: 'Samantha',
			address: '0x15f5d2df1b44c45b48174d0121B9cE2dccD96AC9',
		},
		{
			discord: 'Michael | Framework',
			address: '0x65DCD62932fEf5af25AdA91F0F24658e94e259c5',
		},
		{
			discord: 'Andy | Synthetix',
			address: '0xbeBF7295A9Ddc37e33609790b12FBe3dAF93cC73',
		},
		{
			discord: 'Chevis',
			address: 'cleetus.eth',
		},
		{
			discord: 'Simone | Dialectic',
			address: '0xa6e02f6D53B6BFFbfcF92f4B0786452d0f28A5Ed',
		},
		{
			discord: 'TerraBellus',
			address: '0x62a2AD82CD017065D8040986c6Ef5E619A053fC6',
		},
		{
			discord: 'larpras',
			address: '0x5fC5528E1f363B48c375Ae2Db28BBE82533d8439',
		},
	],
};
