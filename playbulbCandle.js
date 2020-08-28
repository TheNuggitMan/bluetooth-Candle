/* This file will contain the PlaybulbCandle Class that will be used to
 * interact with the PLAYBULB Candle Bluetooth device. */
(function() {
  'use strict';

  const CANDLE_SERVICE_UUID = 0xFF02;

  class playbulbCandle {
    constructor() {
      this.device = null;
    }
    connect() {
      let options = {filters:[{services:[CANDLE_SERVICE_UUID]}]};
      return navigator.bluetooth.requestDevices(options)
      .then(function(device) {
        this.device = device;
      }.blind(this));
    }
  }

  window.playbulbCandle - new playbulbCandle();
})();
