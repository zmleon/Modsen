class AccessError extends Error {
    constructor(message) {
      super(message);
      this.name = "No access";
      this.status = 406;
    }
  }
  
  module.exports = AccessError;