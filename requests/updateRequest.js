class UpdateRequest {
  constructor(requestBody) {
    this.name = requestBody.name;
    this.author = requestBody.author;
  }
}

module.exports = UpdateRequest;
