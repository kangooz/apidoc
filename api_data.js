define({ "api": [
  {
    "type": "get",
    "url": "/api/auth/test",
    "title": "Test your credentials",
    "version": "0.0.1",
    "name": "TestCredentials",
    "group": "Auth",
    "permission": [
      {
        "name": "none",
        "title": "No permissions required",
        "description": ""
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>The api key you are trying to test</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apiSecret",
            "description": "<p>The api secret you are trying to test</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"apiKey\": \"key\",\n  \"apiSecret\": \"secret\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Success. You credentials are valid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/auth/auth.controller.js",
    "groupTitle": "Auth",
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "UnauthorizedError",
            "description": "<p>Invalid credentials</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something wrong happened</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UnauthorizedError",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"error\": \"Invalid credentials.\",\n    \"message\": \"Some of the credentials you gave us are incorrent. Please check your credentials and try again.\"\n}",
          "type": "json"
        },
        {
          "title": "InternalServerError:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal server error\",\n  \"errors\": {\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/deliveries/eligibility",
    "title": "Check eligibility for a delivery",
    "description": "<p>Check if a delivery can be handled by you2you based on the package(s) information and the destination and pickup addresses.</p>",
    "version": "0.0.1",
    "name": "CheckDeliveryEligibility",
    "group": "Deliveries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Pickup",
            "description": "<p>Address of pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Pickup.postalcode",
            "description": "<p>Address of pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Pickup.lat",
            "description": "<p>The latitude Address of the pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Pickup.long",
            "description": "<p>The longitude Address of the pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Destination",
            "description": "<p>Address of deposit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Destination.postalcode",
            "description": "<p>Address of deposit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Destination.lat",
            "description": "<p>The latitude Address of the deposit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Destination.long",
            "description": "<p>The longitude Address of the deposit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "dimension",
            "description": "<p>Dimension of the delivery (product) to deliver.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dimension.length",
            "description": "<p>Length in centimeter of the delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dimension.width",
            "description": "<p>Width in centimeter of the delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dimension.height",
            "description": "<p>Height in centimeter of the delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Total weight of the delivery.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"Pickup\": {\n    \"postalcode\": \"75002\",\n    \"lat\": 48.868331,\n    \"long\": 2.334712\n},\n\"Destination\": {\n    \"postalcode\": \"75009\",\n    \"lat\": 48.8748577,\n    \"long\": 2.3408563\n},\n\"dimension\": {\n    \"length\": 1,\n    \"width\": 1,\n    \"height\": 2\n},\n\"weight\": 10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n    \"valid\": true,\n    \"postalCodePickup\": true,\n    \"postalCodeDeposit\": true,\n    \"size\": true,\n    \"weight\": true,\n    \"distance\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/delivery/delivery.controller.js",
    "groupTitle": "Deliveries",
    "error": {
      "fields": {
        "Error 422": [
          {
            "group": "Error 422",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some fields are not valid</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something wrong happened</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationError",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    name: \"SequelizeDatabaseError\",\n    errors: [\n        {\n            message :\"The email is already registered\",\n            type: \"Validation error\",\n            path: \"email\",\n            value: \"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "InternalServerError:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal server error\",\n  \"errors\": {\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/deliveries",
    "title": "Create a new delivery",
    "version": "0.0.1",
    "name": "CreateDelivery",
    "group": "Deliveries",
    "permission": [
      {
        "name": "none",
        "title": "No permissions required",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Additional information about the delivery</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shipStart",
            "description": "<p>A datetime value which represents when the delivery should start. Should be in the format yyyy/mm/dd hh:mm[:ss]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shipEnd",
            "description": "<p>A datetime value which represents when the delivery should be over. It's often +2 hours than the shipStart. Should be in the format yyyy/mm/dd hh:mm[:ss]</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "dimension",
            "description": "<p>The dimension for the products. Should be an array of json objects.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dimension.width",
            "description": "<p>The product width in cm</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dimension.length",
            "description": "<p>The product length in cm</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dimension.height",
            "description": "<p>The product height in cm</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>The product weight in kg</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Contact",
            "description": "<p>The contact person for pickup delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.firstname",
            "description": "<p>The contact's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.lastname",
            "description": "<p>The contact's last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.email",
            "description": "<p>A valid email for the contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.mobile",
            "description": "<p>A valid number for the contact.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Contact.title",
            "description": "<p>The title for the contact, for examle, Mr., Miss, etc.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Contact.birthday",
            "defaultValue": "0",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Contact.birthmonth",
            "defaultValue": "0",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Contact.birthyear",
            "defaultValue": "0",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Contact.Address",
            "description": "<p>Contact address that also represents the pickup address for the delivery</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Contact.Address.name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.Address.city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.Address.country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.Address.postalcode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Contact.Address.street",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Contact.Address.streetnumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Contact.Address.information",
            "description": "<p>Information relative to the address</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Customer",
            "description": "<p>The destination person for the delivery</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer.firstname",
            "description": "<p>The customer's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer.lastname",
            "description": "<p>The customer's last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer.email",
            "description": "<p>A valid email for the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer.mobile",
            "description": "<p>A valid number for the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Customer.title",
            "description": "<p>The title for the customer, for examle, Mr., Miss, etc.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Customer.birthday",
            "defaultValue": "0",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Customer.birthmonth",
            "defaultValue": "0",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "Customer.birthyear",
            "defaultValue": "0",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Customer.Address",
            "description": "<p>Customer address that also represents the destination address for the delivery</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Customer.Address.name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer.Address.city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer.Address.country",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer.Address.postalcode",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Customer.Address.street",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Customer.Address.streetnumber",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Customer.Address.information",
            "description": "<p>Information relative to the address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"description\": \"d\",\n \"shipStart\": \"2016-05-30 18:28:00\",\n \"shipEnd\": \"2016-05-30 20:28:00\",\n \"size\": \"L60 x l60 x H60 cm\",\n \"weight\": \"0kg - 5kg\",\n \"sizeOfDelivery\": \"L60 x l60 x H60 cm\",\n \"dimension\": {\"length\": 60, \"width\": 60, \"height\": 60},\n \"weight\": 5,\n \"Contact\": {\n   \"id\": 9800,\n   \"title\": \"\",\n   \"lastname\": \"Dev1\",\n   \"firstname\": \"Dev\",\n   \"mobile\": \"+33615866867\",\n   \"email\": \"dev@you2you.fr\",\n   \"Address\": {\n     \"country\": \"France\",\n     \"postalcode\": \"94270\",\n     \"city\": \"Le Kremlin-Bicêtre\",\n     \"street\": \"Rue Pasteur\",\n     \"streetnumber\": \"34\",\n     \"information\": \"\",\n     \"infoSecret\": \"\",\n     \"name\": \"\",\n     \"id\": 6681,\n     \"latitude\": 48.815601,\n     \"longitude\": 2.364583,\n     \"lat\": 48.815601,\n     \"long\": 2.364583\n   }\n },\n \"Customer\": {\n   \"id\": 9800,\n   \"title\": \"\",\n   \"lastname\": \"Dev\",\n   \"firstname\": \"Dev\",\n   \"mobile\": \"+33615866867\",\n   \"email\": \"dev@you2you.fr\",\n   \"Address\": {\n     \"country\": \"France\",\n     \"postalcode\": \"75008\",\n     \"city\": \"Paris\",\n     \"street\": \"Rue de Miromesnil\",\n     \"streetnumber\": \"108\",\n     \"information\": \"\",\n     \"infoSecret\": \"\",\n     \"name\": \"\",\n     \"id\": 6910,\n     \"latitude\": 48.880856,\n     \"longitude\": 2.31562,\n     \"lat\": 48.880856,\n     \"long\": 2.31562\n     }\n }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The success message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "DeliveryId",
            "description": "<p>The new delivery id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"Delivery created.\"\n    \"DeliveryId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 422": [
          {
            "group": "Error 422",
            "optional": false,
            "field": "InvalidParameters",
            "description": ""
          },
          {
            "group": "Error 422",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some fields are not valid</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "UnauthorizedError",
            "description": "<p>Invalid credentials</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something wrong happened</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidParameters:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"Invalid parameters\",\n  \"message\": \"Some fields are invalid.\",\n  \"errorDetails\":[{\n     \"field\": \"StoreId\",\n     \"message\": \"StoreId is required.\"\n  }]\n}",
          "type": "json"
        },
        {
          "title": "ValidationError",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    name: \"SequelizeDatabaseError\",\n    errors: [\n        {\n            message :\"The email is already registered\",\n            type: \"Validation error\",\n            path: \"email\",\n            value: \"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "UnauthorizedError",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"error\": \"Invalid credentials.\",\n    \"message\": \"Some of the credentials you gave us are incorrent. Please check your credentials and try again.\"\n}",
          "type": "json"
        },
        {
          "title": "InternalServerError:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal server error\",\n  \"errors\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/delivery/delivery.controller.js",
    "groupTitle": "Deliveries"
  },
  {
    "type": "post",
    "url": "/api/deliveries/pricing",
    "title": "Get the price for a delivery",
    "description": "<p>Get the price for the delivery based on the package(s) information and the destination and pickup addresses.</p>",
    "version": "0.0.1",
    "name": "GetDeliveryPricing",
    "group": "Deliveries",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Pickup",
            "description": "<p>Address of pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Pickup.postalcode",
            "description": "<p>Address of pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Pickup.lat",
            "description": "<p>The latitude Address of the pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Pickup.long",
            "description": "<p>The longitude Address of the pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Destination",
            "description": "<p>Address of deposit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Destination.postalcode",
            "description": "<p>Address of deposit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Destination.lat",
            "description": "<p>The latitude Address of the deposit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Destination.long",
            "description": "<p>The longitude Address of the deposit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "dimension",
            "description": "<p>The dimension of the delivery (product) to deliver.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dimension.length",
            "description": "<p>Length in centimeter of the delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dimension.width",
            "description": "<p>Width in centimeter of the delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dimension.height",
            "description": "<p>Height in centimeter of the delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Total weight of the delivery.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"Pickup\": {\n       \"postalcode\": \"94270\",\n       \"lat\": 48.815601,\n       \"long\": 2.364583\n\n   },\n   \"Destination\": {\n       \"postalcode\": \"75008\",\n       \"lat\": 48.880856,\n       \"long\": 2.31562\n   },\n   \"dimension\": {\"length\": 60, \"width\": 60, \"height\": 60},\n   \"weight\": 5\n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n    \"price\": 40,\n    \"devise\": \"Euros\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/delivery/delivery.controller.js",
    "groupTitle": "Deliveries",
    "error": {
      "fields": {
        "Error 422": [
          {
            "group": "Error 422",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some fields are not valid</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something wrong happened</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationError",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    name: \"SequelizeDatabaseError\",\n    errors: [\n        {\n            message :\"The email is already registered\",\n            type: \"Validation error\",\n            path: \"email\",\n            value: \"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "InternalServerError:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal server error\",\n  \"errors\": {\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/deliveries/:id/cancel",
    "title": "Cancel delivery",
    "description": "<p>You can cancel a delivery with theses rules:</p> <ul> <li>If status &lt; 2 = Free</li> <li>If status = 2 &amp; Now &lt; End pickup - 2 Hours = Half price</li> <li>Otherwise impossible to cancel a delivery, please contact our support team.</li> </ul>",
    "version": "0.0.1",
    "name": "cancel",
    "group": "Deliveries",
    "permission": [
      {
        "name": "none",
        "title": "No permissions required",
        "description": ""
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Delivery unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/delivery/delivery.controller.js",
    "groupTitle": "Deliveries"
  },
  {
    "type": "get",
    "url": "/api/deliveries/id",
    "title": "Retrieve a delivery with an unique id.",
    "description": "<p>Retrieve all informations of delivery with an unique id.</p>",
    "version": "0.0.1",
    "name": "getById",
    "group": "Deliveries",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Delivery",
            "description": "<p>DeliveryInformation</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>ID of delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "parcelnumber",
            "description": "<p>Number of parcel</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Status of delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.text",
            "description": "<p>Status value by text</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status.value",
            "description": "<p>Status value by number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shipstart",
            "description": "<p>Date of the beggining of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shipend",
            "description": "<p>Date of the end of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pickupcode",
            "description": "<p>Reference that permit to pickup the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deliverycode",
            "description": "<p>Code of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>Distance of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vehicules",
            "description": "<p>Vehicules use to deliver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "driver",
            "description": "<p>Information about the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.username",
            "description": "<p>Username of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.email",
            "description": "<p>Email of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.password",
            "description": "<p>Crypted password of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.mobile",
            "description": "<p>Mobile of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "driver.Person",
            "description": "<p>Information relative of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.title",
            "description": "<p>Title of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.lastname",
            "description": "<p>Lastname of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "driver.Person.firstname",
            "description": "<p>Firstname of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.vehicules",
            "description": "<p>Vehicules that own the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.mobile",
            "description": "<p>Mobile of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.email",
            "description": "<p>Email of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.title",
            "description": "<p>Title of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.lastname",
            "description": "<p>Lastname of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "driver.firstname",
            "description": "<p>Firstname of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.vehicules",
            "description": "<p>Vehicules that own the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "personAddress",
            "description": "<p>Information relative of the address of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.name",
            "description": "<p>Name of the person of this address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.streetnumber",
            "description": "<p>StreetNumber of the address of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.street",
            "description": "<p>Street of the person adress</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.postalcode",
            "description": "<p>Postal Code of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.city",
            "description": "<p>City of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.country",
            "description": "<p>Country of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.information",
            "description": "<p>Information relative of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.infoSecret",
            "description": "<p>Secret information about the person address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.latitude",
            "description": "<p>Latitude of the person address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.longitude",
            "description": "<p>Longitude of the person address</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "storeAddress",
            "description": "<p>Information relative of the address of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.name",
            "description": "<p>Name of the store of this address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.streetnumber",
            "description": "<p>StreetNumber of the address of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.street",
            "description": "<p>Street of the store adress</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.postalcode",
            "description": "<p>Postal Code of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.city",
            "description": "<p>City of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.country",
            "description": "<p>Country of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.information",
            "description": "<p>Information relative of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.infoSecret",
            "description": "<p>Secret information about the store address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.latitude",
            "description": "<p>Latitude of the store address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.longitude",
            "description": "<p>Longitude of the store address</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Information about the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.title",
            "description": "<p>Title of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.lastname",
            "description": "<p>Lastname of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.firstname",
            "description": "<p>Firstname of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.vehicules",
            "description": "<p>Vehicules owned by the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.mobile",
            "description": "<p>Mobile of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.email",
            "description": "<p>Email of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "receiver",
            "description": "<p>Receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.title",
            "description": "<p>Title of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.lastname",
            "description": "<p>Lastname of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.firstname",
            "description": "<p>Firstname of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.vehicules",
            "description": "<p>Vehicules owned by the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.mobile",
            "description": "<p>Mobile of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.email",
            "description": "<p>Email of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "contact",
            "description": "<p>contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.title",
            "description": "<p>Title of the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.lastname",
            "description": "<p>Lastname of the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.firstname",
            "description": "<p>Firstname of the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.vehicules",
            "description": "<p>Vehicules owned by the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.mobile",
            "description": "<p>Mobile of the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.email",
            "description": "<p>Email of the contact of the delivery</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n\"id\": 3327,\n\"parcelnumber\": \"201607294\",\n\"status\": {\n                  text: \"Prête\",\n                  value: 1,\n                },\n\"description\": null,\n\"shipstart\": \"2016-07-29T18:51:20.000Z\",\n\"shipend\": \"2016-07-29T20:00:00.000Z\",\n\"pickupcode\": \"723\",\n\"deliverycode\": \"311\",\n\"distance\": 15.84,\n\"price\": 11,\n\"vehicules\": \"bike,moto,car,van\",\n\"DeliveryFeedbacks\": [],\n \"driver\": {\n    \"email\": \"dev@you2you.fr\",\n    \"mobile\": \"+330600000000\",\n    \"Person\": {\n      \"title\": \"\",\n      \"lastname\": \"Dev\",\n      \"firstname\": \"Dev\",\n      \"vehicules\": \",,walk,car\",\n      \"mobile\": \"+330600000000\",\n      \"email\": \"dev@you2you.fr\"\n      }\n  },\n  \"personAddress\": {\n    \"name\": \"Name\",\n    \"streetnumber\": \"108\",\n    \"street\": \"rue de miromesnil\",\n    \"postalcode\": \"75008\",\n    \"city\": \"Paris\",\n    \"country\": \"France\",\n    \"information\": \"\",\n    \"infoSecret\": null,\n    \"latitude\": null,\n    \"longitude\": null,\n  },\n  \"storeAddress\": {\n    \"name\": \"Name\",\n    \"streetnumber\": \"21\",\n    \"street\": \"rue des perrieres\",\n    \"postalcode\": \"34170\",\n    \"city\": \"Paris\",\n    \"country\": \"France\",\n    \"information\": \"Appelez au 0600000000\",\n    \"infoSecret\": null,\n    \"latitude\": null,\n    \"longitude\": null,\n  },\n  \"owner\": {\n    \"title\": \"\",\n    \"lastname\": \"Palasse\",\n    \"firstname\": \"Anthony\",\n    \"vehicules\": null,\n    \"mobile\": \"+330600000000\",\n    \"email\": \"dev@you2you.com\",\n  },\n  \"receiver\": {\n    \"title\": \"Mr.\",\n    \"lastname\": \"Last name\",\n    \"firstname\": \"First name\",\n    \"vehicules\": null,\n    \"mobile\": \"\",\n    \"email\": \"email@example.com\",\n  },\n  \"contact\": {\n    \"title\": \"Mr.\",\n    \"lastname\": \"Last name\",\n    \"firstname\": \"First name\",\n    \"vehicules\": null,\n    \"mobile\": \"\",\n    \"email\": \"email@example.com\",\n }\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deliveryId",
            "description": "<p>Unique delivery id.</p>"
          }
        ]
      }
    },
    "filename": "server/api/delivery/delivery.controller.js",
    "groupTitle": "Deliveries",
    "error": {
      "fields": {
        "Error 422": [
          {
            "group": "Error 422",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some fields are not valid</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something wrong happened</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationError",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    name: \"SequelizeDatabaseError\",\n    errors: [\n        {\n            message :\"The email is already registered\",\n            type: \"Validation error\",\n            path: \"email\",\n            value: \"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "InternalServerError:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal server error\",\n  \"errors\": {\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/deliveries/:id/status",
    "title": "Retrieve the status of delivery.",
    "description": "<p>Retrieve the current status of delivery.</p>",
    "version": "0.0.1",
    "name": "getStatus",
    "group": "Deliveries",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Object with the current status of delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "statuts.value",
            "description": "<p>Current value (id) status of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.text",
            "description": "<p>Current status of delivery wrote as text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n  \"status\": {\n     \"value\": 7\n     \"text\": \"Annulée\"\n },\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "DeliveryId",
            "description": "<p>Unique id of pickup.</p>"
          }
        ]
      }
    },
    "filename": "server/api/delivery/delivery.controller.js",
    "groupTitle": "Deliveries",
    "error": {
      "fields": {
        "Error 422": [
          {
            "group": "Error 422",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some fields are not valid</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something wrong happened</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationError",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    name: \"SequelizeDatabaseError\",\n    errors: [\n        {\n            message :\"The email is already registered\",\n            type: \"Validation error\",\n            path: \"email\",\n            value: \"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "InternalServerError:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal server error\",\n  \"errors\": {\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/deliveries",
    "title": "Retrieve all your deliveries.",
    "description": "<p>Retrieve all your deliveries.</p>",
    "version": "0.0.1",
    "name": "index",
    "group": "Deliveries",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Delivery",
            "description": "<p>DeliveryInformation</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>ID of delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "parcelnumber",
            "description": "<p>Number of parcel</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>Status of delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.text",
            "description": "<p>Status value by text</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status.value",
            "description": "<p>Status value by number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shipstart",
            "description": "<p>Date of the beggining of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shipend",
            "description": "<p>Date of the end of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pickupcode",
            "description": "<p>Reference that permit to pickup the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deliverycode",
            "description": "<p>Code of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "distance",
            "description": "<p>Distance of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vehicules",
            "description": "<p>Vehicules use to deliver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "driver",
            "description": "<p>Information about the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.username",
            "description": "<p>Username of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.email",
            "description": "<p>Email of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.password",
            "description": "<p>Crypted password of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.mobile",
            "description": "<p>Mobile of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "driver.Person",
            "description": "<p>Information relative of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.title",
            "description": "<p>Title of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.lastname",
            "description": "<p>Lastname of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "driver.Person.firstname",
            "description": "<p>Firstname of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.vehicules",
            "description": "<p>Vehicules that own the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.mobile",
            "description": "<p>Mobile of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.Person.email",
            "description": "<p>Email of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.title",
            "description": "<p>Title of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.lastname",
            "description": "<p>Lastname of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "driver.firstname",
            "description": "<p>Firstname of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "driver.vehicules",
            "description": "<p>Vehicules that own the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "personAddress",
            "description": "<p>Information relative of the address of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.name",
            "description": "<p>Name of the person of this address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.streetnumber",
            "description": "<p>StreetNumber of the address of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.street",
            "description": "<p>Street of the person adress</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.postalcode",
            "description": "<p>Postal Code of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.city",
            "description": "<p>City of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.country",
            "description": "<p>Country of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.information",
            "description": "<p>Information relative of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.infoSecret",
            "description": "<p>Secret information about the person address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.latitude",
            "description": "<p>Latitude of the person address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personAddress.longitude",
            "description": "<p>Longitude of the person address</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "storeAddress",
            "description": "<p>Information relative of the address of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.name",
            "description": "<p>Name of the store of this address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.streetnumber",
            "description": "<p>StreetNumber of the address of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.street",
            "description": "<p>Street of the store adress</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.postalcode",
            "description": "<p>Postal Code of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.city",
            "description": "<p>City of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.country",
            "description": "<p>Country of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.information",
            "description": "<p>Information relative of the store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.infoSecret",
            "description": "<p>Secret information about the store address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.latitude",
            "description": "<p>Latitude of the store address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeAddress.longitude",
            "description": "<p>Longitude of the store address</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "owner",
            "description": "<p>Information about the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.title",
            "description": "<p>Title of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.lastname",
            "description": "<p>Lastname of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.firstname",
            "description": "<p>Firstname of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.vehicules",
            "description": "<p>Vehicules owned by the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.mobile",
            "description": "<p>Mobile of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner.email",
            "description": "<p>Email of the owner of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "receiver",
            "description": "<p>Receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.title",
            "description": "<p>Title of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.lastname",
            "description": "<p>Lastname of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.firstname",
            "description": "<p>Firstname of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.vehicules",
            "description": "<p>Vehicules owned by the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.mobile",
            "description": "<p>Mobile of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receiver.email",
            "description": "<p>Email of the receiver of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "contact",
            "description": "<p>contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.title",
            "description": "<p>Title of the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.lastname",
            "description": "<p>Lastname of the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.firstname",
            "description": "<p>Firstname of the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.vehicules",
            "description": "<p>Vehicules owned by the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.mobile",
            "description": "<p>Mobile of the contact of the delivery</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact.email",
            "description": "<p>Email of the contact of the delivery</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n[\n {\n   \"id\": 3624,\n   \"parcelnumber\": \"2016063026\",\n   \"status\": {\n                  text: \"Annulée\",\n                  value: 7,\n                },\n   \"description\": Livraison,\n   \"shipstart\": \"2016-06-30T10:13:00.000Z\",\n   \"shipend\": \"2016-06-30T11:13:00.000Z\",\n   \"pickupcode\": \"804\",\n   \"deliverycode\": \"666\",\n   \"price\": 9,\n   \"distance\": 0,\n   \"vehicules\": \"walk\",\n   \"driver\": {\n     \"username\": \"\",\n     \"email\": \"mjc1954mjc@outlook.com\",\n     \"password\": \"GFeewLUYxT687B4n4R9F+KJ6YCK45Wde/lWLniyokH7KDOFEfZRPmrtxcW6w7ztvJTaPZs68du+h9qU0HrrmMg==\",\n     \"mobile\": \"+33651519216\",\n     \"Person\": {\n       \"title\": \"\",\n       \"lastname\": \"Martin\",\n       \"firstname\": \"Jean Claude\",\n       \"vehicules\": \"car,walk,bike,moto\",\n       \"mobile\": \"+33651519216\",\n       \"email\": \"mjc1954mjc@outlook.com\",\n     }\n   },\n   \"driver\": {\n     \"email\": \"dev@you2you.fr\",\n     \"mobile\": \"+330600000000\",\n     \"Person\": {\n       \"title\": \"\",\n       \"lastname\": \"Dev\",\n       \"firstname\": \"Dev\",\n       \"vehicules\": \",,walk,car\",\n       \"mobile\": \"+330600000000\",\n       \"email\": \"dev@you2you.fr\"\n       }\n   },\n   \"personAddress\": {\n     \"name\": \"\",\n     \"streetnumber\": \"4\",\n     \"street\": \"Rue Dewoitine\",\n     \"postalcode\": \"78140\",\n     \"city\": \"Vélizy-Villacoublay\",\n     \"country\": \"France\",\n     \"information\": \"\",\n     \"infoSecret\": \"Bat J3 Appt 6249\",\n     \"latitude\": 48.782604,\n     \"longitude\": 2.214363,\n   },\n   \"storeAddress\": {\n     \"name\": \"\",\n     \"streetnumber\": \"4\",\n     \"street\": \"Rue Dewoitine\",\n     \"postalcode\": \"78140\",\n     \"city\": \"Vélizy-Villacoublay\",\n     \"country\": \"France\",\n     \"information\": \"\",\n     \"infoSecret\": \"Bat J3 Appt 6249\",\n     \"latitude\": 48.782604,\n     \"longitude\": 2.214363,\n   },\n   \"owner\": {\n     \"title\": \"\",\n     \"lastname\": \"Dev\",\n     \"firstname\": \"Dev\",\n     \"vehicules\": null,\n     \"mobile\": \"+33615866867\",\n     \"email\": \"dev@you2you.fr\",\n   },\n   \"receiver\": {\n     \"title\": null,\n     \"lastname\": \"Anthony\",\n     \"firstname\": \"PALASSE\",\n     \"vehicules\": null,\n     \"mobile\": \"+33615866867\",\n     \"email\": \"dev@you2you.fr\",\n   },\n   \"contact\": {\n     \"title\": null,\n     \"lastname\": \"Anthony\",\n     \"firstname\": \"PALASSE\",\n     \"vehicules\": null,\n     \"mobile\": \"+33615866867\",\n     \"email\": \"dev@you2you.fr\",\n   }\n },\n {\n   \"id\": 5572,\n   \"refNumber\": null,\n   \"parcelnumber\": \"201608041\",\n   \"status\": {\n                  text: \"Prête\",\n                  value: 1,\n                },\n   \"description\": null,\n   \"shipstart\": \"2016-08-29T18:51:20.000Z\",\n   \"shipend\": \"2016-08-29T20:00:00.000Z\",\n   \"pickupcode\": \"437\",\n   \"deliverycode\": \"243\",\n   \"distance\": null,\n   \"price\": 9,\n   \"vehicules\": null,\n   \"driver\": {\n     \"email\": \"dev@you2you.fr\",\n     \"mobile\": \"+330600000000\",\n     \"Person\": {\n       \"title\": \"\",\n       \"lastname\": \"Dev\",\n       \"firstname\": \"Dev\",\n       \"vehicules\": \",,walk,car\",\n       \"mobile\": \"+330600000000\",\n       \"email\": \"dev@you2you.fr\"\n       }\n   },\n   \"personAddress\": {\n     \"name\": \"Name\",\n     \"streetnumber\": \"108\",\n     \"street\": \"rue de miromesnil\",\n     \"postalcode\": \"75008\",\n     \"city\": \"Paris\",\n     \"country\": \"France\",\n     \"information\": \"\",\n     \"infoSecret\": null,\n     \"latitude\": null,\n     \"longitude\": null,\n   },\n   \"storeAddress\": {\n     \"name\": \"Name\",\n     \"streetnumber\": \"21\",\n     \"street\": \"rue des perrieres\",\n     \"postalcode\": \"34170\",\n     \"city\": \"Paris\",\n     \"country\": \"France\",\n     \"information\": \"Appelez au 0600000000\",\n     \"infoSecret\": null,\n     \"latitude\": null,\n     \"longitude\": null,\n   },\n   \"owner\": {\n     \"title\": \"\",\n     \"lastname\": \"Dev\",\n     \"firstname\": \"Dev\",\n     \"vehicules\": null,\n     \"mobile\": \"+33615866867\",\n     \"email\": \"dev@you2you.fr\",\n   },\n   \"receiver\": {\n     \"title\": \"Mr.\",\n     \"lastname\": \"Last name\",\n     \"firstname\": \"First name\",\n     \"vehicules\": null,\n     \"mobile\": \"\",\n     \"email\": \"email@example.com\",\n   },\n   \"contact\": {\n     \"title\": \"Mr.\",\n     \"lastname\": \"Last name\",\n     \"firstname\": \"First name\",\n     \"vehicules\": null,\n     \"mobile\": \"\",\n     \"email\": \"email@example.com\",\n   }\n },\n {\n   \"id\": 5573,\n   \"refNumber\": null,\n   \"parcelnumber\": \"201608042\",\n   \"status\": {\n                  text: \"Prête\",\n                  value: 1,\n                },\n   \"description\": null,\n   \"shipstart\": \"2016-08-29T18:51:20.000Z\",\n   \"shipend\": \"2016-08-29T20:00:00.000Z\",\n   \"pickupcode\": \"342\",\n   \"deliverycode\": \"077\",\n   \"distance\": null,\n   \"price\": 9,\n   \"vehicules\": null,\n   \"driver\": {\n     \"email\": \"dev@you2you.fr\",\n     \"mobile\": \"+330600000000\",\n     \"Person\": {\n       \"title\": \"\",\n       \"lastname\": \"Dev\",\n       \"firstname\": \"Dev\",\n       \"vehicules\": \",,walk,car\",\n       \"mobile\": \"+330600000000\",\n       \"email\": \"dev@you2you.fr\"\n       }\n   },\n   \"personAddress\": {\n     \"name\": \"Name\",\n     \"streetnumber\": \"108\",\n     \"street\": \"rue de miromesnil\",\n     \"postalcode\": \"75008\",\n     \"city\": \"Paris\",\n     \"country\": \"France\",\n     \"information\": \"\",\n     \"infoSecret\": null,\n     \"latitude\": null,\n     \"longitude\": null,\n   },\n   \"storeAddress\": {\n     \"name\": \"Name\",\n     \"streetnumber\": \"21\",\n     \"street\": \"rue des perrieres\",\n     \"postalcode\": \"34170\",\n     \"city\": \"Paris\",\n     \"country\": \"France\",\n     \"information\": \"Appelez au 0600000000\",\n     \"infoSecret\": null,\n     \"latitude\": null,\n     \"longitude\": null,\n   },\n   \"owner\": {\n     \"title\": \"\",\n     \"lastname\": \"Dev\",\n     \"firstname\": \"Dev\",\n     \"vehicules\": null,\n     \"mobile\": \"+33615866867\",\n     \"email\": \"dev@you2you.fr\",\n   },\n   \"receiver\": {\n     \"title\": \"Mr.\",\n     \"lastname\": \"Last name\",\n     \"firstname\": \"First name\",\n     \"vehicules\": null,\n     \"mobile\": \"\",\n     \"email\": \"email@example.com\",\n   },\n   \"contact\": {\n     \"title\": \"Mr.\",\n     \"lastname\": \"Last name\",\n     \"firstname\": \"First name\",\n     \"vehicules\": null,\n     \"mobile\": \"\",\n     \"email\": \"email@example.com\",\n   }\n }\n ]",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Success\n{\n    \"price\": 40,\n    \"devise\": \"Euros\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/api/delivery/delivery.controller.js",
    "groupTitle": "Deliveries",
    "error": {
      "fields": {
        "Error 422": [
          {
            "group": "Error 422",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some fields are not valid</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Something wrong happened</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationError",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    name: \"SequelizeDatabaseError\",\n    errors: [\n        {\n            message :\"The email is already registered\",\n            type: \"Validation error\",\n            path: \"email\",\n            value: \"\n    ]\n}",
          "type": "json"
        },
        {
          "title": "InternalServerError:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Internal server error\",\n  \"errors\": {\n  }\n}",
          "type": "json"
        }
      ]
    }
  }
] });
