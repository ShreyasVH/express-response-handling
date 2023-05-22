class Response {
  constructor (data) {
    this.success = true;
    this.data = data;
    this.message = "";
  }
}

module.exports = Response;
