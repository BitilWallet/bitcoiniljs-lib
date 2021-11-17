'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.testnet = exports.regtest = exports.bitcoinil = void 0;
exports.bitcoinil = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'il',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x84,
  wif: 0x80,
};
exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'ilrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'ti',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
