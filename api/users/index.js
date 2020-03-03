var schema = {
  "type": "object",
  "properties": {
    "pizzas": {
      "type": "array",
      "minimum": 5,
      "maxItems": 10,
      "items": {
        "type": "string",
        "minimum": 5
      }
    },
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users", "pizzas"]
};

module.exports = schema;