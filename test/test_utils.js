const utils = require('../utils/utilities.js');

let modules = [
    {
        "address": "0xFFB9239F43673068E3c8D7664382Dd6Fdd6e40cb",
        "name": "ApprovedTransfer"
    },
    {
        "address": "0x54d705E6F49aef57B1718B3b8F45AB9A96D636DB",
        "name": "DappManager"
    },
    {
        "address": "0x25BD64224b7534f7B9e3E16dd10b6dED1A412b90",
        "name": "GuardianManager"
    },
    {
        "address": "0xe6d5631C6272C8e6190352EC35305e5c03C25Fe1",
        "name": "LockManager"
    },
    {
        "address": "0xF4a47cBf61C73a786af0F48df7016ccA5b2A52D7",
        "name": "ModuleManager"
    },
    {
        "address": "0xa7939338f2921230aD801b73bfD7758cB09Bccc5",
        "name": "RecoveryManager"
    },
    {
        "address": "0xE0f4a78BbF24E9624989B9ef10A3B035cc46CE5B",
        "name": "TokenExchanger"
    },
    {
        "address": "0x9C5826d868Ce00c5Eb615AAE71A8d7E67Ca87907",
        "name": "TokenTransfer"
    },
    {
        "address": "0x624EbBd0f4169E2e11861618045491b6A4e29E77",
        "name": "NftTransfer"
    },
    {
        "address": "0x6a87B61a54E35f46869c6AC9D636823F70733AeD",
        "name": "LoanManager"
    },
    {
        "address": "0xD9c6b78bc89432FFe283Ab38fA95e1Edfc5FD46e",
        "name": "InvestManager"
    }
];

describe("Utils", function () {
    describe("It should produce the version", () => { 
        let version = utils.versionFingerprint(modules);
        console.log(version);
    });
});