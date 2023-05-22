class CreateRequest {
  constructor(requestBody) {
    this.name = requestBody.name;
    this.author = requestBody.author;
  }
}

module.exports = CreateRequest;
