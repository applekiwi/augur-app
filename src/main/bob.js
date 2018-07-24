const Augur = require('augur.js')
const { AugurNodeController } = require('augur-node/build/controller')
const fs = require('fs')
const path = require('path')
const REMOTE_DELAY_WAIT = 60*1000;
const REMOTE_MAX_RETRIES = 5;

function startAugurNodeService() {
  const dirName = new Date().getTime().toString()
  const dataDir = path.join('/tmp', dirName)
  if (!fs.existsSync(dataDir)){
    fs.mkdirSync(dataDir);
  }
  var maxRetries = REMOTE_MAX_RETRIES;
  const config = {
    "http": "http://megageth.com/ethereum-http",
    "ws": "ws://megageth.com/ethereum-ws"
  }
  var propagationDelayWaitMillis = REMOTE_DELAY_WAIT;
  const augur = new Augur();
  this.augurNodeController = new AugurNodeController(augur, Object.assign({}, config, { propagationDelayWaitMillis, maxRetries }), dataDir)
  this.augurNodeController.clearLoggers();

  this.augurNodeController.start(function (err) {
    console.log(err)
  }.bind(this))
}



const value = startAugurNodeService()
