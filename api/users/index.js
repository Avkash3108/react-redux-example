var schema = {
  "type": "object",
  "properties": {
    "pizzas": {
      "type": "array",
      "minItems": 500,
      "maxItems": 1000,
      "items": {
        "type": "object",
        "properties": {
          "availableSizes": {
            "type": "string",
            "enum": ['S, M, L', 'S, L', 'L', 'S M']
          },
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "random.word"
          },
          "price": {
            "type": "string",
            "faker": "finance.amount"
          },
          "category": {
            "type": "string",
            "enum": ['Veg', 'Non - Veg']
          },
        },
        "required": ["availableSizes", "id", "name", "price", "category"]
      }
    },
    "users": {
      "type": "array",
      "minItems": 300,
      "maxItems": 500,
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
          },
          "address": {
            "type": "string",
            "faker": "address.streetAddress"
          },
          "contact": {
            "type": "string",
            "faker": "phone.phoneNumber"
          }
        },
        "required": ["id", "firstName", "lastName", "email", "address", "contact"]
      }
    }
  },
  "required": ["users", "pizzas"]
};

module.exports = schema;