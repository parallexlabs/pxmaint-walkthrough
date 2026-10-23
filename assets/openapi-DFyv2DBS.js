const n=`{
  "openapi": "3.1.0",
  "jsonSchemaDialect": "https://json-schema.org/draft/2020-12/schema",
  "info": {
    "title": "Maintenance Open API",
    "version": "1.0.0",
    "license": { "name": "Apache-2.0", "identifier": "Apache-2.0" },
    "description": "No API fee. Generated from registered server routes and their runtime Zod input schemas. Existing heterogeneous responses are explicitly unconstrained. Domain validation remains authoritative."
  },
  "servers": [{ "url": "/" }],
  "paths": {
    "/api/measures/{tile}": {
      "get": {
        "operationId": "getApiMeasuresTile",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "from",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "to",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "language",
            "in": "query",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string",
              "enum": ["en", "fr"]
            }
          },
          {
            "name": "format",
            "in": "query",
            "required": false,
            "schema": {
              "default": "json",
              "type": "string",
              "enum": ["json", "csv"]
            }
          },
          {
            "name": "tile",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "backlog",
                "overduePreventive",
                "preventiveCompliance",
                "costPerAsset",
                "costPerKm",
                "costPerHour",
                "downtime",
                "mtbf",
                "mttr",
                "serviceLevel"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "tile": {
                      "type": "string",
                      "enum": [
                        "backlog",
                        "overduePreventive",
                        "preventiveCompliance",
                        "costPerAsset",
                        "costPerKm",
                        "costPerHour",
                        "downtime",
                        "mtbf",
                        "mttr",
                        "serviceLevel"
                      ]
                    },
                    "title": { "type": "string" },
                    "definition": { "type": "string" },
                    "language": { "type": "string", "enum": ["en", "fr"] },
                    "from": {
                      "type": "string",
                      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                    },
                    "to": {
                      "type": "string",
                      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                    },
                    "asOf": {
                      "type": "string",
                      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                    },
                    "site": {
                      "anyOf": [
                        {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 100,
                          "pattern": "^[A-Za-z0-9_-]+$"
                        },
                        { "type": "null" }
                      ]
                    },
                    "rows": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": { "type": "string" },
                          "label": { "type": "string" },
                          "value": {
                            "anyOf": [{ "type": "number" }, { "type": "null" }]
                          },
                          "unit": { "type": "string" },
                          "numerator": {
                            "anyOf": [{ "type": "number" }, { "type": "null" }]
                          },
                          "denominator": {
                            "anyOf": [{ "type": "number" }, { "type": "null" }]
                          },
                          "missingReason": {
                            "anyOf": [{ "type": "string" }, { "type": "null" }]
                          }
                        },
                        "required": [
                          "id",
                          "label",
                          "value",
                          "unit",
                          "numerator",
                          "denominator",
                          "missingReason"
                        ]
                      }
                    }
                  },
                  "required": [
                    "tile",
                    "title",
                    "definition",
                    "language",
                    "from",
                    "to",
                    "asOf",
                    "site",
                    "rows"
                  ]
                }
              },
              "text/csv": { "schema": { "type": "string" } }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiMeasuresTile",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "from",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "to",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "language",
            "in": "query",
            "required": false,
            "schema": {
              "default": "en",
              "type": "string",
              "enum": ["en", "fr"]
            }
          },
          {
            "name": "format",
            "in": "query",
            "required": false,
            "schema": {
              "default": "json",
              "type": "string",
              "enum": ["json", "csv"]
            }
          },
          {
            "name": "tile",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "enum": [
                "backlog",
                "overduePreventive",
                "preventiveCompliance",
                "costPerAsset",
                "costPerKm",
                "costPerHour",
                "downtime",
                "mtbf",
                "mttr",
                "serviceLevel"
              ]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "tile": {
                      "type": "string",
                      "enum": [
                        "backlog",
                        "overduePreventive",
                        "preventiveCompliance",
                        "costPerAsset",
                        "costPerKm",
                        "costPerHour",
                        "downtime",
                        "mtbf",
                        "mttr",
                        "serviceLevel"
                      ]
                    },
                    "title": { "type": "string" },
                    "definition": { "type": "string" },
                    "language": { "type": "string", "enum": ["en", "fr"] },
                    "from": {
                      "type": "string",
                      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                    },
                    "to": {
                      "type": "string",
                      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                    },
                    "asOf": {
                      "type": "string",
                      "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                    },
                    "site": {
                      "anyOf": [
                        {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 100,
                          "pattern": "^[A-Za-z0-9_-]+$"
                        },
                        { "type": "null" }
                      ]
                    },
                    "rows": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": { "type": "string" },
                          "label": { "type": "string" },
                          "value": {
                            "anyOf": [{ "type": "number" }, { "type": "null" }]
                          },
                          "unit": { "type": "string" },
                          "numerator": {
                            "anyOf": [{ "type": "number" }, { "type": "null" }]
                          },
                          "denominator": {
                            "anyOf": [{ "type": "number" }, { "type": "null" }]
                          },
                          "missingReason": {
                            "anyOf": [{ "type": "string" }, { "type": "null" }]
                          }
                        },
                        "required": [
                          "id",
                          "label",
                          "value",
                          "unit",
                          "numerator",
                          "denominator",
                          "missingReason"
                        ]
                      }
                    }
                  },
                  "required": [
                    "tile",
                    "title",
                    "definition",
                    "language",
                    "from",
                    "to",
                    "asOf",
                    "site",
                    "rows"
                  ]
                }
              },
              "text/csv": { "schema": { "type": "string" } }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/notice-rules": {
      "get": {
        "operationId": "getApiNoticeRules",
        "x-access": "admin",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 100,
                        "pattern": "^[A-Za-z0-9_-]+$"
                      },
                      "kind": {
                        "type": "string",
                        "enum": [
                          "site",
                          "category",
                          "assetClass",
                          "asset",
                          "workOrder",
                          "request",
                          "meter",
                          "meterReading",
                          "inspectionTemplate",
                          "inspection",
                          "part",
                          "labour",
                          "vendor",
                          "invoice",
                          "partIssue",
                          "schedule",
                          "plannedRun",
                          "noticeRule",
                          "userSettings",
                          "contract",
                          "procedure",
                          "reportDefinition",
                          "role"
                        ]
                      },
                      "version": {
                        "type": "integer",
                        "exclusiveMinimum": 0,
                        "maximum": 9007199254740991
                      },
                      "statusDisplay": {
                        "type": "object",
                        "properties": {
                          "code": { "type": "string" },
                          "en": { "type": "string" },
                          "fr": { "type": "string" },
                          "configVersion": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          }
                        },
                        "required": ["code", "en", "fr", "configVersion"]
                      },
                      "data": {
                        "type": "object",
                        "propertyNames": { "type": "string" },
                        "additionalProperties": {}
                      }
                    },
                    "required": ["id", "kind", "version", "data"]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiNoticeRules",
        "x-access": "admin",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 100,
                        "pattern": "^[A-Za-z0-9_-]+$"
                      },
                      "kind": {
                        "type": "string",
                        "enum": [
                          "site",
                          "category",
                          "assetClass",
                          "asset",
                          "workOrder",
                          "request",
                          "meter",
                          "meterReading",
                          "inspectionTemplate",
                          "inspection",
                          "part",
                          "labour",
                          "vendor",
                          "invoice",
                          "partIssue",
                          "schedule",
                          "plannedRun",
                          "noticeRule",
                          "userSettings",
                          "contract",
                          "procedure",
                          "reportDefinition",
                          "role"
                        ]
                      },
                      "version": {
                        "type": "integer",
                        "exclusiveMinimum": 0,
                        "maximum": 9007199254740991
                      },
                      "statusDisplay": {
                        "type": "object",
                        "properties": {
                          "code": { "type": "string" },
                          "en": { "type": "string" },
                          "fr": { "type": "string" },
                          "configVersion": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          }
                        },
                        "required": ["code", "en", "fr", "configVersion"]
                      },
                      "data": {
                        "type": "object",
                        "propertyNames": { "type": "string" },
                        "additionalProperties": {}
                      }
                    },
                    "required": ["id", "kind", "version", "data"]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "post": {
        "operationId": "postApiNoticeRules",
        "x-access": "admin",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "properties": {
                      "site": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 100,
                        "pattern": "^[A-Za-z0-9_-]+$"
                      },
                      "name": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "event": {
                        "type": "string",
                        "enum": [
                          "workOrder.created",
                          "workOrder.assigned",
                          "workOrder.statusChanged",
                          "workOrder.overdue",
                          "request.created",
                          "request.approved",
                          "request.rejected",
                          "request.converted",
                          "defect.opened",
                          "preventive.due"
                        ]
                      },
                      "channel": {
                        "type": "string",
                        "enum": ["email", "teams", "sms"]
                      },
                      "recipients": {
                        "type": "object",
                        "properties": {
                          "users": {
                            "maxItems": 100,
                            "type": "array",
                            "items": {
                              "type": "string",
                              "minLength": 1,
                              "maxLength": 100,
                              "pattern": "^[A-Za-z0-9_-]+$"
                            }
                          },
                          "roles": {
                            "maxItems": 3,
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": ["admin", "operator", "viewer"]
                            }
                          },
                          "siteQueue": { "type": "boolean" }
                        },
                        "required": ["users", "roles", "siteQueue"],
                        "additionalProperties": false
                      },
                      "owner": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 100,
                        "pattern": "^[A-Za-z0-9_-]+$"
                      },
                      "createdAt": {
                        "type": "string",
                        "format": "date-time",
                        "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                      },
                      "effectiveAt": {
                        "type": "string",
                        "format": "date-time",
                        "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                      },
                      "mandatory": { "default": false, "type": "boolean" },
                      "active": { "default": true, "type": "boolean" },
                      "language": {
                        "default": "en",
                        "type": "string",
                        "enum": ["en", "fr"]
                      },
                      "teamsConfigured": { "default": false, "type": "boolean" }
                    },
                    "required": [
                      "site",
                      "name",
                      "event",
                      "channel",
                      "recipients"
                    ],
                    "additionalProperties": false
                  },
                  "teamsUrl": {
                    "writeOnly": true,
                    "description": "Secret Teams Workflows URL. Accepted only on save, never returned.",
                    "type": "string",
                    "maxLength": 4096,
                    "format": "uri"
                  }
                },
                "required": ["id", "commandId", "baseVersion", "data"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 100,
                      "pattern": "^[A-Za-z0-9_-]+$"
                    },
                    "kind": {
                      "type": "string",
                      "enum": [
                        "site",
                        "category",
                        "assetClass",
                        "asset",
                        "workOrder",
                        "request",
                        "meter",
                        "meterReading",
                        "inspectionTemplate",
                        "inspection",
                        "part",
                        "labour",
                        "vendor",
                        "invoice",
                        "partIssue",
                        "schedule",
                        "plannedRun",
                        "noticeRule",
                        "userSettings",
                        "contract",
                        "procedure",
                        "reportDefinition",
                        "role"
                      ]
                    },
                    "version": {
                      "type": "integer",
                      "exclusiveMinimum": 0,
                      "maximum": 9007199254740991
                    },
                    "statusDisplay": {
                      "type": "object",
                      "properties": {
                        "code": { "type": "string" },
                        "en": { "type": "string" },
                        "fr": { "type": "string" },
                        "configVersion": {
                          "type": "integer",
                          "minimum": 0,
                          "maximum": 9007199254740991
                        }
                      },
                      "required": ["code", "en", "fr", "configVersion"]
                    },
                    "data": {
                      "type": "object",
                      "propertyNames": { "type": "string" },
                      "additionalProperties": {}
                    }
                  },
                  "required": ["id", "kind", "version", "data"]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/notice-deliveries": {
      "get": {
        "operationId": "getApiNoticeDeliveries",
        "x-access": "admin",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "rule",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                      },
                      "rule": { "type": "string" },
                      "event": {
                        "type": "string",
                        "enum": [
                          "workOrder.created",
                          "workOrder.assigned",
                          "workOrder.statusChanged",
                          "workOrder.overdue",
                          "request.created",
                          "request.approved",
                          "request.rejected",
                          "request.converted",
                          "defect.opened",
                          "preventive.due"
                        ]
                      },
                      "record": { "type": "string" },
                      "channel": {
                        "type": "string",
                        "enum": ["email", "teams", "sms"]
                      },
                      "recipient": { "type": "string" },
                      "status": {
                        "type": "string",
                        "enum": [
                          "pending",
                          "retrying",
                          "delivered",
                          "failed",
                          "suppressed",
                          "disabled"
                        ]
                      },
                      "attempts": {
                        "type": "integer",
                        "minimum": -9007199254740991,
                        "maximum": 9007199254740991
                      },
                      "responseCode": {
                        "anyOf": [
                          {
                            "type": "integer",
                            "minimum": -9007199254740991,
                            "maximum": 9007199254740991
                          },
                          { "type": "null" }
                        ]
                      },
                      "nextAttemptAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      },
                      "lastAttemptAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      }
                    },
                    "required": [
                      "id",
                      "rule",
                      "event",
                      "record",
                      "channel",
                      "recipient",
                      "status",
                      "attempts",
                      "responseCode",
                      "nextAttemptAt",
                      "lastAttemptAt"
                    ]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiNoticeDeliveries",
        "x-access": "admin",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "rule",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                      },
                      "rule": { "type": "string" },
                      "event": {
                        "type": "string",
                        "enum": [
                          "workOrder.created",
                          "workOrder.assigned",
                          "workOrder.statusChanged",
                          "workOrder.overdue",
                          "request.created",
                          "request.approved",
                          "request.rejected",
                          "request.converted",
                          "defect.opened",
                          "preventive.due"
                        ]
                      },
                      "record": { "type": "string" },
                      "channel": {
                        "type": "string",
                        "enum": ["email", "teams", "sms"]
                      },
                      "recipient": { "type": "string" },
                      "status": {
                        "type": "string",
                        "enum": [
                          "pending",
                          "retrying",
                          "delivered",
                          "failed",
                          "suppressed",
                          "disabled"
                        ]
                      },
                      "attempts": {
                        "type": "integer",
                        "minimum": -9007199254740991,
                        "maximum": 9007199254740991
                      },
                      "responseCode": {
                        "anyOf": [
                          {
                            "type": "integer",
                            "minimum": -9007199254740991,
                            "maximum": 9007199254740991
                          },
                          { "type": "null" }
                        ]
                      },
                      "nextAttemptAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      },
                      "lastAttemptAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      }
                    },
                    "required": [
                      "id",
                      "rule",
                      "event",
                      "record",
                      "channel",
                      "recipient",
                      "status",
                      "attempts",
                      "responseCode",
                      "nextAttemptAt",
                      "lastAttemptAt"
                    ]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/status-history/{id}": {
      "get": {
        "operationId": "getApiStatusHistoryId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "at": { "type": "string" },
                      "version": {
                        "type": "integer",
                        "minimum": -9007199254740991,
                        "maximum": 9007199254740991
                      },
                      "status": {
                        "type": "object",
                        "properties": {
                          "code": { "type": "string" },
                          "en": { "type": "string" },
                          "fr": { "type": "string" },
                          "configVersion": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          }
                        },
                        "required": ["code", "en", "fr", "configVersion"]
                      }
                    },
                    "required": ["at", "version", "status"]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiStatusHistoryId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "at": { "type": "string" },
                      "version": {
                        "type": "integer",
                        "minimum": -9007199254740991,
                        "maximum": 9007199254740991
                      },
                      "status": {
                        "type": "object",
                        "properties": {
                          "code": { "type": "string" },
                          "en": { "type": "string" },
                          "fr": { "type": "string" },
                          "configVersion": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          }
                        },
                        "required": ["code", "en", "fr", "configVersion"]
                      }
                    },
                    "required": ["at", "version", "status"]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/planner": {
      "get": {
        "operationId": "getApiPlanner",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "from",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "to",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "entries": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": { "type": "string" },
                          "kind": {
                            "type": "string",
                            "enum": ["workOrder", "plannedRun"]
                          },
                          "version": {
                            "type": "integer",
                            "minimum": -9007199254740991,
                            "maximum": 9007199254740991
                          },
                          "site": { "type": "string" },
                          "title": { "type": "string" },
                          "due": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "plannedDate": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "assignee": { "type": "string" },
                          "plannedHours": {
                            "anyOf": [{ "type": "number" }, { "type": "null" }]
                          },
                          "schedule": {
                            "anyOf": [{ "type": "string" }, { "type": "null" }]
                          }
                        },
                        "required": [
                          "id",
                          "kind",
                          "version",
                          "site",
                          "title",
                          "due",
                          "plannedDate",
                          "assignee",
                          "plannedHours",
                          "schedule"
                        ]
                      }
                    },
                    "capacity": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "site": { "type": "string" },
                          "technician": { "type": "string" },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "hours": { "type": "number" },
                          "unknownHours": {
                            "type": "integer",
                            "minimum": -9007199254740991,
                            "maximum": 9007199254740991
                          },
                          "limit": { "type": "number" },
                          "overCapacity": { "type": "boolean" }
                        },
                        "required": [
                          "site",
                          "technician",
                          "date",
                          "hours",
                          "unknownHours",
                          "limit",
                          "overCapacity"
                        ]
                      }
                    }
                  },
                  "required": ["entries", "capacity"]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiPlanner",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "from",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "to",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "entries": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": { "type": "string" },
                          "kind": {
                            "type": "string",
                            "enum": ["workOrder", "plannedRun"]
                          },
                          "version": {
                            "type": "integer",
                            "minimum": -9007199254740991,
                            "maximum": 9007199254740991
                          },
                          "site": { "type": "string" },
                          "title": { "type": "string" },
                          "due": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "plannedDate": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "assignee": { "type": "string" },
                          "plannedHours": {
                            "anyOf": [{ "type": "number" }, { "type": "null" }]
                          },
                          "schedule": {
                            "anyOf": [{ "type": "string" }, { "type": "null" }]
                          }
                        },
                        "required": [
                          "id",
                          "kind",
                          "version",
                          "site",
                          "title",
                          "due",
                          "plannedDate",
                          "assignee",
                          "plannedHours",
                          "schedule"
                        ]
                      }
                    },
                    "capacity": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "site": { "type": "string" },
                          "technician": { "type": "string" },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "hours": { "type": "number" },
                          "unknownHours": {
                            "type": "integer",
                            "minimum": -9007199254740991,
                            "maximum": 9007199254740991
                          },
                          "limit": { "type": "number" },
                          "overCapacity": { "type": "boolean" }
                        },
                        "required": [
                          "site",
                          "technician",
                          "date",
                          "hours",
                          "unknownHours",
                          "limit",
                          "overCapacity"
                        ]
                      }
                    }
                  },
                  "required": ["entries", "capacity"]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/ogc": {
      "get": {
        "operationId": "getApiOgc",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "title": { "type": "string" },
                    "description": { "type": "string" },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["title", "description", "links"],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiOgc",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "title": { "type": "string" },
                    "description": { "type": "string" },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["title", "description", "links"],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/ogc/conformance": {
      "get": {
        "operationId": "getApiOgcConformance",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "conformsTo": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "enum": [
                          "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/core",
                          "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"
                        ]
                      }
                    }
                  },
                  "required": ["conformsTo"],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiOgcConformance",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "conformsTo": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "enum": [
                          "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/core",
                          "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"
                        ]
                      }
                    }
                  },
                  "required": ["conformsTo"],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/ogc/collections": {
      "get": {
        "operationId": "getApiOgcCollections",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "collections": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": { "type": "string" },
                          "title": { "type": "string" },
                          "description": { "type": "string" },
                          "itemType": { "type": "string", "const": "feature" },
                          "crs": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "const": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                            }
                          },
                          "extent": {
                            "type": "object",
                            "properties": {
                              "spatial": {
                                "type": "object",
                                "properties": {
                                  "bbox": {
                                    "type": "array",
                                    "items": {
                                      "type": "array",
                                      "prefixItems": [
                                        { "type": "number" },
                                        { "type": "number" },
                                        { "type": "number" },
                                        { "type": "number" }
                                      ]
                                    }
                                  },
                                  "crs": {
                                    "type": "string",
                                    "const": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                                  }
                                },
                                "required": ["bbox", "crs"],
                                "additionalProperties": false
                              },
                              "temporal": {
                                "type": "object",
                                "properties": {
                                  "interval": {
                                    "type": "array",
                                    "items": {
                                      "type": "array",
                                      "prefixItems": [
                                        {
                                          "anyOf": [
                                            { "type": "string" },
                                            { "type": "null" }
                                          ]
                                        },
                                        {
                                          "anyOf": [
                                            { "type": "string" },
                                            { "type": "null" }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  "trs": {
                                    "type": "string",
                                    "const": "http://www.opengis.net/def/uom/ISO-8601/0/Gregorian"
                                  }
                                },
                                "required": ["interval", "trs"],
                                "additionalProperties": false
                              }
                            },
                            "required": ["temporal"],
                            "additionalProperties": false
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": [
                          "id",
                          "title",
                          "description",
                          "itemType",
                          "crs",
                          "extent",
                          "links"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["collections", "links"],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiOgcCollections",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "collections": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": { "type": "string" },
                          "title": { "type": "string" },
                          "description": { "type": "string" },
                          "itemType": { "type": "string", "const": "feature" },
                          "crs": {
                            "type": "array",
                            "items": {
                              "type": "string",
                              "const": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                            }
                          },
                          "extent": {
                            "type": "object",
                            "properties": {
                              "spatial": {
                                "type": "object",
                                "properties": {
                                  "bbox": {
                                    "type": "array",
                                    "items": {
                                      "type": "array",
                                      "prefixItems": [
                                        { "type": "number" },
                                        { "type": "number" },
                                        { "type": "number" },
                                        { "type": "number" }
                                      ]
                                    }
                                  },
                                  "crs": {
                                    "type": "string",
                                    "const": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                                  }
                                },
                                "required": ["bbox", "crs"],
                                "additionalProperties": false
                              },
                              "temporal": {
                                "type": "object",
                                "properties": {
                                  "interval": {
                                    "type": "array",
                                    "items": {
                                      "type": "array",
                                      "prefixItems": [
                                        {
                                          "anyOf": [
                                            { "type": "string" },
                                            { "type": "null" }
                                          ]
                                        },
                                        {
                                          "anyOf": [
                                            { "type": "string" },
                                            { "type": "null" }
                                          ]
                                        }
                                      ]
                                    }
                                  },
                                  "trs": {
                                    "type": "string",
                                    "const": "http://www.opengis.net/def/uom/ISO-8601/0/Gregorian"
                                  }
                                },
                                "required": ["interval", "trs"],
                                "additionalProperties": false
                              }
                            },
                            "required": ["temporal"],
                            "additionalProperties": false
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": [
                          "id",
                          "title",
                          "description",
                          "itemType",
                          "crs",
                          "extent",
                          "links"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["collections", "links"],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/ogc/collections/{collectionId}": {
      "get": {
        "operationId": "getApiOgcCollectionsCollectionId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "collectionId",
            "in": "path",
            "required": true,
            "schema": { "type": "string", "minLength": 1 }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": { "type": "string" },
                    "title": { "type": "string" },
                    "description": { "type": "string" },
                    "itemType": { "type": "string", "const": "feature" },
                    "crs": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "const": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                      }
                    },
                    "extent": {
                      "type": "object",
                      "properties": {
                        "spatial": {
                          "type": "object",
                          "properties": {
                            "bbox": {
                              "type": "array",
                              "items": {
                                "type": "array",
                                "prefixItems": [
                                  { "type": "number" },
                                  { "type": "number" },
                                  { "type": "number" },
                                  { "type": "number" }
                                ]
                              }
                            },
                            "crs": {
                              "type": "string",
                              "const": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                            }
                          },
                          "required": ["bbox", "crs"],
                          "additionalProperties": false
                        },
                        "temporal": {
                          "type": "object",
                          "properties": {
                            "interval": {
                              "type": "array",
                              "items": {
                                "type": "array",
                                "prefixItems": [
                                  {
                                    "anyOf": [
                                      { "type": "string" },
                                      { "type": "null" }
                                    ]
                                  },
                                  {
                                    "anyOf": [
                                      { "type": "string" },
                                      { "type": "null" }
                                    ]
                                  }
                                ]
                              }
                            },
                            "trs": {
                              "type": "string",
                              "const": "http://www.opengis.net/def/uom/ISO-8601/0/Gregorian"
                            }
                          },
                          "required": ["interval", "trs"],
                          "additionalProperties": false
                        }
                      },
                      "required": ["temporal"],
                      "additionalProperties": false
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "description",
                    "itemType",
                    "crs",
                    "extent",
                    "links"
                  ],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiOgcCollectionsCollectionId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "collectionId",
            "in": "path",
            "required": true,
            "schema": { "type": "string", "minLength": 1 }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": { "type": "string" },
                    "title": { "type": "string" },
                    "description": { "type": "string" },
                    "itemType": { "type": "string", "const": "feature" },
                    "crs": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "const": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                      }
                    },
                    "extent": {
                      "type": "object",
                      "properties": {
                        "spatial": {
                          "type": "object",
                          "properties": {
                            "bbox": {
                              "type": "array",
                              "items": {
                                "type": "array",
                                "prefixItems": [
                                  { "type": "number" },
                                  { "type": "number" },
                                  { "type": "number" },
                                  { "type": "number" }
                                ]
                              }
                            },
                            "crs": {
                              "type": "string",
                              "const": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                            }
                          },
                          "required": ["bbox", "crs"],
                          "additionalProperties": false
                        },
                        "temporal": {
                          "type": "object",
                          "properties": {
                            "interval": {
                              "type": "array",
                              "items": {
                                "type": "array",
                                "prefixItems": [
                                  {
                                    "anyOf": [
                                      { "type": "string" },
                                      { "type": "null" }
                                    ]
                                  },
                                  {
                                    "anyOf": [
                                      { "type": "string" },
                                      { "type": "null" }
                                    ]
                                  }
                                ]
                              }
                            },
                            "trs": {
                              "type": "string",
                              "const": "http://www.opengis.net/def/uom/ISO-8601/0/Gregorian"
                            }
                          },
                          "required": ["interval", "trs"],
                          "additionalProperties": false
                        }
                      },
                      "required": ["temporal"],
                      "additionalProperties": false
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "description",
                    "itemType",
                    "crs",
                    "extent",
                    "links"
                  ],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/ogc/collections/{collectionId}/items": {
      "get": {
        "operationId": "getApiOgcCollectionsCollectionIdItems",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "bbox",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "datetime",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": {
              "default": 10,
              "type": "integer",
              "minimum": 1,
              "maximum": 10000
            }
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "default": 0,
              "type": "integer",
              "minimum": 0,
              "maximum": 10000000
            }
          },
          {
            "name": "collectionId",
            "in": "path",
            "required": true,
            "schema": { "type": "string", "minLength": 1 }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              },
              "application/geo+json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiOgcCollectionsCollectionIdItems",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "bbox",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "datetime",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": {
              "default": 10,
              "type": "integer",
              "minimum": 1,
              "maximum": 10000
            }
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "default": 0,
              "type": "integer",
              "minimum": 0,
              "maximum": 10000000
            }
          },
          {
            "name": "collectionId",
            "in": "path",
            "required": true,
            "schema": { "type": "string", "minLength": 1 }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              },
              "application/geo+json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/ogc/collections/{collectionId}/items/{featureId}": {
      "get": {
        "operationId": "getApiOgcCollectionsCollectionIdItemsFeatureId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "collectionId",
            "in": "path",
            "required": true,
            "schema": { "type": "string", "minLength": 1 }
          },
          {
            "name": "featureId",
            "in": "path",
            "required": true,
            "schema": { "type": "string", "minLength": 1 }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "Feature" },
                    "id": { "type": "string", "minLength": 1 },
                    "geometry": {
                      "anyOf": [
                        {
                          "type": "object",
                          "properties": {
                            "type": { "type": "string", "const": "Point" },
                            "coordinates": {
                              "type": "array",
                              "prefixItems": [
                                { "type": "number" },
                                { "type": "number" }
                              ]
                            }
                          },
                          "required": ["type", "coordinates"],
                          "additionalProperties": false
                        },
                        { "type": "null" }
                      ]
                    },
                    "properties": {
                      "type": "object",
                      "propertyNames": { "type": "string" },
                      "additionalProperties": {}
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["type", "id", "geometry", "properties"],
                  "additionalProperties": false
                }
              },
              "application/geo+json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "Feature" },
                    "id": { "type": "string", "minLength": 1 },
                    "geometry": {
                      "anyOf": [
                        {
                          "type": "object",
                          "properties": {
                            "type": { "type": "string", "const": "Point" },
                            "coordinates": {
                              "type": "array",
                              "prefixItems": [
                                { "type": "number" },
                                { "type": "number" }
                              ]
                            }
                          },
                          "required": ["type", "coordinates"],
                          "additionalProperties": false
                        },
                        { "type": "null" }
                      ]
                    },
                    "properties": {
                      "type": "object",
                      "propertyNames": { "type": "string" },
                      "additionalProperties": {}
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["type", "id", "geometry", "properties"],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiOgcCollectionsCollectionIdItemsFeatureId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "collectionId",
            "in": "path",
            "required": true,
            "schema": { "type": "string", "minLength": 1 }
          },
          {
            "name": "featureId",
            "in": "path",
            "required": true,
            "schema": { "type": "string", "minLength": 1 }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "Feature" },
                    "id": { "type": "string", "minLength": 1 },
                    "geometry": {
                      "anyOf": [
                        {
                          "type": "object",
                          "properties": {
                            "type": { "type": "string", "const": "Point" },
                            "coordinates": {
                              "type": "array",
                              "prefixItems": [
                                { "type": "number" },
                                { "type": "number" }
                              ]
                            }
                          },
                          "required": ["type", "coordinates"],
                          "additionalProperties": false
                        },
                        { "type": "null" }
                      ]
                    },
                    "properties": {
                      "type": "object",
                      "propertyNames": { "type": "string" },
                      "additionalProperties": {}
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["type", "id", "geometry", "properties"],
                  "additionalProperties": false
                }
              },
              "application/geo+json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "Feature" },
                    "id": { "type": "string", "minLength": 1 },
                    "geometry": {
                      "anyOf": [
                        {
                          "type": "object",
                          "properties": {
                            "type": { "type": "string", "const": "Point" },
                            "coordinates": {
                              "type": "array",
                              "prefixItems": [
                                { "type": "number" },
                                { "type": "number" }
                              ]
                            }
                          },
                          "required": ["type", "coordinates"],
                          "additionalProperties": false
                        },
                        { "type": "null" }
                      ]
                    },
                    "properties": {
                      "type": "object",
                      "propertyNames": { "type": "string" },
                      "additionalProperties": {}
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["type", "id", "geometry", "properties"],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/integrations/assets.geojson": {
      "get": {
        "operationId": "getApiIntegrationsAssetsGeojson",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "bbox",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "datetime",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": { "type": "integer", "minimum": 1, "maximum": 10000 }
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "default": 0,
              "type": "integer",
              "minimum": 0,
              "maximum": 10000000
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              },
              "application/geo+json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiIntegrationsAssetsGeojson",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "bbox",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "datetime",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": { "type": "integer", "minimum": 1, "maximum": 10000 }
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "default": 0,
              "type": "integer",
              "minimum": 0,
              "maximum": 10000000
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              },
              "application/geo+json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/integrations/open-work-orders.geojson": {
      "get": {
        "operationId": "getApiIntegrationsOpenWorkOrdersGeojson",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "bbox",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "datetime",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": { "type": "integer", "minimum": 1, "maximum": 10000 }
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "default": 0,
              "type": "integer",
              "minimum": 0,
              "maximum": 10000000
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              },
              "application/geo+json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiIntegrationsOpenWorkOrdersGeojson",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "f",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["json", "geojson"] }
          },
          {
            "name": "bbox",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "datetime",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": { "type": "integer", "minimum": 1, "maximum": 10000 }
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "default": 0,
              "type": "integer",
              "minimum": 0,
              "maximum": 10000000
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              },
              "application/geo+json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": { "type": "string", "const": "FeatureCollection" },
                    "features": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": { "type": "string", "const": "Feature" },
                          "id": { "type": "string", "minLength": 1 },
                          "geometry": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "string",
                                    "const": "Point"
                                  },
                                  "coordinates": {
                                    "type": "array",
                                    "prefixItems": [
                                      { "type": "number" },
                                      { "type": "number" }
                                    ]
                                  }
                                },
                                "required": ["type", "coordinates"],
                                "additionalProperties": false
                              },
                              { "type": "null" }
                            ]
                          },
                          "properties": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          },
                          "links": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "href": { "type": "string" },
                                "rel": { "type": "string" },
                                "type": { "type": "string" },
                                "title": { "type": "string" }
                              },
                              "required": ["href", "rel"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["type", "id", "geometry", "properties"],
                        "additionalProperties": false
                      }
                    },
                    "numberMatched": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "numberReturned": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "links": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "href": { "type": "string" },
                          "rel": { "type": "string" },
                          "type": { "type": "string" },
                          "title": { "type": "string" }
                        },
                        "required": ["href", "rel"],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "type",
                    "features",
                    "numberMatched",
                    "numberReturned",
                    "links"
                  ],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/integrations/cost-lines": {
      "get": {
        "operationId": "getApiIntegrationsCostLines",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "from",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "to",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "assetId",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "format",
            "in": "query",
            "required": false,
            "schema": {
              "default": "csv",
              "type": "string",
              "enum": ["csv", "json"]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "version": { "type": "number", "const": 1 },
                    "columns": {
                      "type": "array",
                      "prefixItems": [
                        { "type": "string", "const": "id" },
                        { "type": "string", "const": "workOrder" },
                        { "type": "string", "const": "title" },
                        { "type": "string", "const": "asset" },
                        { "type": "string", "const": "assetName" },
                        { "type": "string", "const": "assetClass" },
                        { "type": "string", "const": "site" },
                        { "type": "string", "const": "date" },
                        { "type": "string", "const": "labourCents" },
                        { "type": "string", "const": "partsCents" },
                        { "type": "string", "const": "outsideCents" },
                        { "type": "string", "const": "totalCents" },
                        { "type": "string", "const": "currency" }
                      ]
                    },
                    "lines": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "workOrder": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "title": { "type": "string", "maxLength": 200 },
                          "asset": { "type": "string", "maxLength": 100 },
                          "assetName": { "type": "string", "maxLength": 200 },
                          "assetClass": { "type": "string", "maxLength": 200 },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "labourCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          },
                          "partsCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          },
                          "outsideCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          },
                          "totalCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          },
                          "currency": { "type": "string", "const": "CAD" }
                        },
                        "required": [
                          "id",
                          "workOrder",
                          "title",
                          "asset",
                          "assetName",
                          "assetClass",
                          "site",
                          "date",
                          "labourCents",
                          "partsCents",
                          "outsideCents",
                          "totalCents",
                          "currency"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["version", "columns", "lines"],
                  "additionalProperties": false
                }
              },
              "text/csv": { "schema": { "type": "string" } }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiIntegrationsCostLines",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "from",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "to",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "assetId",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "format",
            "in": "query",
            "required": false,
            "schema": {
              "default": "csv",
              "type": "string",
              "enum": ["csv", "json"]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "version": { "type": "number", "const": 1 },
                    "columns": {
                      "type": "array",
                      "prefixItems": [
                        { "type": "string", "const": "id" },
                        { "type": "string", "const": "workOrder" },
                        { "type": "string", "const": "title" },
                        { "type": "string", "const": "asset" },
                        { "type": "string", "const": "assetName" },
                        { "type": "string", "const": "assetClass" },
                        { "type": "string", "const": "site" },
                        { "type": "string", "const": "date" },
                        { "type": "string", "const": "labourCents" },
                        { "type": "string", "const": "partsCents" },
                        { "type": "string", "const": "outsideCents" },
                        { "type": "string", "const": "totalCents" },
                        { "type": "string", "const": "currency" }
                      ]
                    },
                    "lines": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "workOrder": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "title": { "type": "string", "maxLength": 200 },
                          "asset": { "type": "string", "maxLength": 100 },
                          "assetName": { "type": "string", "maxLength": 200 },
                          "assetClass": { "type": "string", "maxLength": 200 },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "labourCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          },
                          "partsCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          },
                          "outsideCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          },
                          "totalCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          },
                          "currency": { "type": "string", "const": "CAD" }
                        },
                        "required": [
                          "id",
                          "workOrder",
                          "title",
                          "asset",
                          "assetName",
                          "assetClass",
                          "site",
                          "date",
                          "labourCents",
                          "partsCents",
                          "outsideCents",
                          "totalCents",
                          "currency"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": ["version", "columns", "lines"],
                  "additionalProperties": false
                }
              },
              "text/csv": { "schema": { "type": "string" } }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/integrations/meter-readings": {
      "post": {
        "operationId": "postApiIntegrationsMeterReadings",
        "x-access": "write",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "readings": {
                    "minItems": 1,
                    "maxItems": 100,
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "meterId": {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 100,
                          "pattern": "^[A-Za-z0-9_-]+$"
                        },
                        "value": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 1000000000000
                        },
                        "readingAt": {
                          "type": "string",
                          "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                        },
                        "idempotencyKey": {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 200,
                          "pattern": "^[A-Za-z0-9_.:-]+$"
                        },
                        "correction": { "default": false, "type": "boolean" },
                        "reason": { "type": "string", "maxLength": 1000 }
                      },
                      "required": [
                        "meterId",
                        "value",
                        "readingAt",
                        "idempotencyKey"
                      ],
                      "additionalProperties": false
                    }
                  }
                },
                "required": ["readings"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "readings": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "kind": { "type": "string", "const": "meterReading" },
                          "version": {
                            "type": "integer",
                            "exclusiveMinimum": 0,
                            "maximum": 9007199254740991
                          },
                          "data": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          }
                        },
                        "required": ["id", "kind", "version", "data"]
                      }
                    }
                  },
                  "required": ["readings"],
                  "additionalProperties": false
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/openapi.json": {
      "get": {
        "operationId": "getOpenapiJson",
        "x-access": "public",
        "security": [],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headOpenapiJson",
        "x-access": "public",
        "security": [],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/api-tokens": {
      "get": {
        "operationId": "getApiApiTokens",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                      },
                      "name": { "type": "string" },
                      "prefix": { "type": "string" },
                      "sites": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 100,
                          "pattern": "^[A-Za-z0-9_-]+$"
                        }
                      },
                      "permission": {
                        "type": "string",
                        "enum": ["read", "write", "admin"]
                      },
                      "rateLimit": {
                        "type": "integer",
                        "minimum": -9007199254740991,
                        "maximum": 9007199254740991
                      },
                      "createdAt": { "type": "string" },
                      "lastUsedAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      },
                      "revokedAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      }
                    },
                    "required": [
                      "id",
                      "name",
                      "prefix",
                      "sites",
                      "permission",
                      "rateLimit",
                      "createdAt",
                      "lastUsedAt",
                      "revokedAt"
                    ]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiApiTokens",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                      },
                      "name": { "type": "string" },
                      "prefix": { "type": "string" },
                      "sites": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 100,
                          "pattern": "^[A-Za-z0-9_-]+$"
                        }
                      },
                      "permission": {
                        "type": "string",
                        "enum": ["read", "write", "admin"]
                      },
                      "rateLimit": {
                        "type": "integer",
                        "minimum": -9007199254740991,
                        "maximum": 9007199254740991
                      },
                      "createdAt": { "type": "string" },
                      "lastUsedAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      },
                      "revokedAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      }
                    },
                    "required": [
                      "id",
                      "name",
                      "prefix",
                      "sites",
                      "permission",
                      "rateLimit",
                      "createdAt",
                      "lastUsedAt",
                      "revokedAt"
                    ]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "post": {
        "operationId": "postApiApiTokens",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 200
                  },
                  "sites": {
                    "minItems": 1,
                    "maxItems": 100,
                    "type": "array",
                    "items": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 100,
                      "pattern": "^[A-Za-z0-9_-]+$"
                    }
                  },
                  "permission": {
                    "type": "string",
                    "enum": ["read", "write", "admin"]
                  },
                  "rateLimit": {
                    "default": 60,
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 10000
                  }
                },
                "required": ["name", "sites", "permission"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "format": "uuid",
                      "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                    },
                    "name": { "type": "string" },
                    "prefix": { "type": "string" },
                    "sites": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 100,
                        "pattern": "^[A-Za-z0-9_-]+$"
                      }
                    },
                    "permission": {
                      "type": "string",
                      "enum": ["read", "write", "admin"]
                    },
                    "rateLimit": {
                      "type": "integer",
                      "minimum": -9007199254740991,
                      "maximum": 9007199254740991
                    },
                    "createdAt": { "type": "string" },
                    "lastUsedAt": {
                      "anyOf": [{ "type": "string" }, { "type": "null" }]
                    },
                    "revokedAt": {
                      "anyOf": [{ "type": "string" }, { "type": "null" }]
                    },
                    "token": { "type": "string" }
                  },
                  "required": [
                    "id",
                    "name",
                    "prefix",
                    "sites",
                    "permission",
                    "rateLimit",
                    "createdAt",
                    "lastUsedAt",
                    "revokedAt",
                    "token"
                  ]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/api-tokens/{id}/revoke": {
      "post": {
        "operationId": "postApiApiTokensIdRevoke",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid",
              "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {},
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "ok": { "type": "boolean", "const": true } },
                  "required": ["ok"]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/webhooks": {
      "get": {
        "operationId": "getApiWebhooks",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                      },
                      "name": { "type": "string" },
                      "url": { "type": "string" },
                      "events": {
                        "type": "array",
                        "items": { "type": "string" }
                      },
                      "sites": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 100,
                          "pattern": "^[A-Za-z0-9_-]+$"
                        }
                      },
                      "createdAt": { "type": "string" },
                      "revokedAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      }
                    },
                    "required": [
                      "id",
                      "name",
                      "url",
                      "events",
                      "sites",
                      "createdAt",
                      "revokedAt"
                    ]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiWebhooks",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                      },
                      "name": { "type": "string" },
                      "url": { "type": "string" },
                      "events": {
                        "type": "array",
                        "items": { "type": "string" }
                      },
                      "sites": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "minLength": 1,
                          "maxLength": 100,
                          "pattern": "^[A-Za-z0-9_-]+$"
                        }
                      },
                      "createdAt": { "type": "string" },
                      "revokedAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      }
                    },
                    "required": [
                      "id",
                      "name",
                      "url",
                      "events",
                      "sites",
                      "createdAt",
                      "revokedAt"
                    ]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "post": {
        "operationId": "postApiWebhooks",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 120
                  },
                  "url": {
                    "type": "string",
                    "maxLength": 2048,
                    "format": "uri"
                  },
                  "events": {
                    "minItems": 1,
                    "maxItems": 8,
                    "type": "array",
                    "items": {
                      "type": "string",
                      "enum": [
                        "workOrder.created",
                        "workOrder.updated",
                        "workOrder.closed",
                        "request.created",
                        "request.converted",
                        "inspection.recorded",
                        "defect.opened",
                        "meterReading.recorded"
                      ]
                    }
                  },
                  "sites": {
                    "minItems": 1,
                    "maxItems": 100,
                    "type": "array",
                    "items": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 100,
                      "pattern": "^[A-Za-z0-9_-]+$"
                    }
                  }
                },
                "required": ["name", "url", "events", "sites"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "format": "uuid",
                      "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                    },
                    "name": { "type": "string" },
                    "url": { "type": "string" },
                    "events": {
                      "type": "array",
                      "items": { "type": "string" }
                    },
                    "sites": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 100,
                        "pattern": "^[A-Za-z0-9_-]+$"
                      }
                    },
                    "createdAt": { "type": "string" },
                    "revokedAt": {
                      "anyOf": [{ "type": "string" }, { "type": "null" }]
                    },
                    "secret": { "type": "string" }
                  },
                  "required": [
                    "id",
                    "name",
                    "url",
                    "events",
                    "sites",
                    "createdAt",
                    "revokedAt",
                    "secret"
                  ]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/webhooks/{id}/revoke": {
      "post": {
        "operationId": "postApiWebhooksIdRevoke",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid",
              "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {},
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "ok": { "type": "boolean", "const": true } },
                  "required": ["ok"]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/webhooks/{id}/deliveries": {
      "get": {
        "operationId": "getApiWebhooksIdDeliveries",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid",
              "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                      },
                      "event": { "type": "string" },
                      "status": {
                        "type": "string",
                        "enum": [
                          "pending",
                          "retrying",
                          "delivered",
                          "failed",
                          "revoked"
                        ]
                      },
                      "responseCode": {
                        "anyOf": [
                          {
                            "type": "integer",
                            "minimum": -9007199254740991,
                            "maximum": 9007199254740991
                          },
                          { "type": "null" }
                        ]
                      },
                      "attempts": {
                        "type": "integer",
                        "minimum": -9007199254740991,
                        "maximum": 9007199254740991
                      },
                      "nextAttemptAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      },
                      "lastAttemptAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      }
                    },
                    "required": [
                      "id",
                      "event",
                      "status",
                      "responseCode",
                      "attempts",
                      "nextAttemptAt",
                      "lastAttemptAt"
                    ]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiWebhooksIdDeliveries",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid",
              "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "format": "uuid",
                        "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                      },
                      "event": { "type": "string" },
                      "status": {
                        "type": "string",
                        "enum": [
                          "pending",
                          "retrying",
                          "delivered",
                          "failed",
                          "revoked"
                        ]
                      },
                      "responseCode": {
                        "anyOf": [
                          {
                            "type": "integer",
                            "minimum": -9007199254740991,
                            "maximum": 9007199254740991
                          },
                          { "type": "null" }
                        ]
                      },
                      "attempts": {
                        "type": "integer",
                        "minimum": -9007199254740991,
                        "maximum": 9007199254740991
                      },
                      "nextAttemptAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      },
                      "lastAttemptAt": {
                        "anyOf": [{ "type": "string" }, { "type": "null" }]
                      }
                    },
                    "required": [
                      "id",
                      "event",
                      "status",
                      "responseCode",
                      "attempts",
                      "nextAttemptAt",
                      "lastAttemptAt"
                    ]
                  }
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/records": {
      "get": {
        "operationId": "getApiRecords",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "kind",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "enum": [
                "site",
                "category",
                "assetClass",
                "asset",
                "workOrder",
                "request",
                "meter",
                "meterReading",
                "inspectionTemplate",
                "inspection",
                "part",
                "labour",
                "vendor",
                "invoice",
                "partIssue",
                "schedule",
                "plannedRun",
                "noticeRule",
                "userSettings",
                "contract",
                "procedure",
                "reportDefinition",
                "role"
              ]
            }
          },
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": {
              "default": 100,
              "type": "integer",
              "minimum": 1,
              "maximum": 500
            }
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "default": 0,
              "type": "integer",
              "minimum": 0,
              "maximum": 10000000
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "items": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "kind": {
                            "type": "string",
                            "enum": [
                              "site",
                              "category",
                              "assetClass",
                              "asset",
                              "workOrder",
                              "request",
                              "meter",
                              "meterReading",
                              "inspectionTemplate",
                              "inspection",
                              "part",
                              "labour",
                              "vendor",
                              "invoice",
                              "partIssue",
                              "schedule",
                              "plannedRun",
                              "noticeRule",
                              "userSettings",
                              "contract",
                              "procedure",
                              "reportDefinition",
                              "role"
                            ]
                          },
                          "version": {
                            "type": "integer",
                            "exclusiveMinimum": 0,
                            "maximum": 9007199254740991
                          },
                          "statusDisplay": {
                            "type": "object",
                            "properties": {
                              "code": { "type": "string" },
                              "en": { "type": "string" },
                              "fr": { "type": "string" },
                              "configVersion": {
                                "type": "integer",
                                "minimum": 0,
                                "maximum": 9007199254740991
                              }
                            },
                            "required": ["code", "en", "fr", "configVersion"]
                          },
                          "data": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          }
                        },
                        "required": ["id", "kind", "version", "data"]
                      }
                    },
                    "total": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "limit": {
                      "type": "integer",
                      "exclusiveMinimum": 0,
                      "maximum": 9007199254740991
                    },
                    "offset": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    }
                  },
                  "required": ["items", "total", "limit", "offset"]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiRecords",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "kind",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "enum": [
                "site",
                "category",
                "assetClass",
                "asset",
                "workOrder",
                "request",
                "meter",
                "meterReading",
                "inspectionTemplate",
                "inspection",
                "part",
                "labour",
                "vendor",
                "invoice",
                "partIssue",
                "schedule",
                "plannedRun",
                "noticeRule",
                "userSettings",
                "contract",
                "procedure",
                "reportDefinition",
                "role"
              ]
            }
          },
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": {
              "default": 100,
              "type": "integer",
              "minimum": 1,
              "maximum": 500
            }
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "schema": {
              "default": 0,
              "type": "integer",
              "minimum": 0,
              "maximum": 10000000
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "items": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "kind": {
                            "type": "string",
                            "enum": [
                              "site",
                              "category",
                              "assetClass",
                              "asset",
                              "workOrder",
                              "request",
                              "meter",
                              "meterReading",
                              "inspectionTemplate",
                              "inspection",
                              "part",
                              "labour",
                              "vendor",
                              "invoice",
                              "partIssue",
                              "schedule",
                              "plannedRun",
                              "noticeRule",
                              "userSettings",
                              "contract",
                              "procedure",
                              "reportDefinition",
                              "role"
                            ]
                          },
                          "version": {
                            "type": "integer",
                            "exclusiveMinimum": 0,
                            "maximum": 9007199254740991
                          },
                          "statusDisplay": {
                            "type": "object",
                            "properties": {
                              "code": { "type": "string" },
                              "en": { "type": "string" },
                              "fr": { "type": "string" },
                              "configVersion": {
                                "type": "integer",
                                "minimum": 0,
                                "maximum": 9007199254740991
                              }
                            },
                            "required": ["code", "en", "fr", "configVersion"]
                          },
                          "data": {
                            "type": "object",
                            "propertyNames": { "type": "string" },
                            "additionalProperties": {}
                          }
                        },
                        "required": ["id", "kind", "version", "data"]
                      }
                    },
                    "total": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    },
                    "limit": {
                      "type": "integer",
                      "exclusiveMinimum": 0,
                      "maximum": 9007199254740991
                    },
                    "offset": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 9007199254740991
                    }
                  },
                  "required": ["items", "total", "limit", "offset"]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/records/{id}": {
      "get": {
        "operationId": "getApiRecordsId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 100,
                      "pattern": "^[A-Za-z0-9_-]+$"
                    },
                    "kind": {
                      "type": "string",
                      "enum": [
                        "site",
                        "category",
                        "assetClass",
                        "asset",
                        "workOrder",
                        "request",
                        "meter",
                        "meterReading",
                        "inspectionTemplate",
                        "inspection",
                        "part",
                        "labour",
                        "vendor",
                        "invoice",
                        "partIssue",
                        "schedule",
                        "plannedRun",
                        "noticeRule",
                        "userSettings",
                        "contract",
                        "procedure",
                        "reportDefinition",
                        "role"
                      ]
                    },
                    "version": {
                      "type": "integer",
                      "exclusiveMinimum": 0,
                      "maximum": 9007199254740991
                    },
                    "statusDisplay": {
                      "type": "object",
                      "properties": {
                        "code": { "type": "string" },
                        "en": { "type": "string" },
                        "fr": { "type": "string" },
                        "configVersion": {
                          "type": "integer",
                          "minimum": 0,
                          "maximum": 9007199254740991
                        }
                      },
                      "required": ["code", "en", "fr", "configVersion"]
                    },
                    "data": {
                      "type": "object",
                      "propertyNames": { "type": "string" },
                      "additionalProperties": {}
                    }
                  },
                  "required": ["id", "kind", "version", "data"]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiRecordsId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 100,
                      "pattern": "^[A-Za-z0-9_-]+$"
                    },
                    "kind": {
                      "type": "string",
                      "enum": [
                        "site",
                        "category",
                        "assetClass",
                        "asset",
                        "workOrder",
                        "request",
                        "meter",
                        "meterReading",
                        "inspectionTemplate",
                        "inspection",
                        "part",
                        "labour",
                        "vendor",
                        "invoice",
                        "partIssue",
                        "schedule",
                        "plannedRun",
                        "noticeRule",
                        "userSettings",
                        "contract",
                        "procedure",
                        "reportDefinition",
                        "role"
                      ]
                    },
                    "version": {
                      "type": "integer",
                      "exclusiveMinimum": 0,
                      "maximum": 9007199254740991
                    },
                    "statusDisplay": {
                      "type": "object",
                      "properties": {
                        "code": { "type": "string" },
                        "en": { "type": "string" },
                        "fr": { "type": "string" },
                        "configVersion": {
                          "type": "integer",
                          "minimum": 0,
                          "maximum": 9007199254740991
                        }
                      },
                      "required": ["code", "en", "fr", "configVersion"]
                    },
                    "data": {
                      "type": "object",
                      "propertyNames": { "type": "string" },
                      "additionalProperties": {}
                    }
                  },
                  "required": ["id", "kind", "version", "data"]
                }
              }
            }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/first-screen": {
      "get": {
        "operationId": "getApiFirstScreen",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiFirstScreen",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/health": {
      "get": {
        "operationId": "getHealth",
        "x-access": "public",
        "security": [],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headHealth",
        "x-access": "public",
        "security": [],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/metrics/performance": {
      "post": {
        "operationId": "postApiMetricsPerformance",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "measurements": {
                    "minItems": 1,
                    "maxItems": 20,
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "screen": {
                          "type": "string",
                          "enum": [
                            "login",
                            "dashboard",
                            "planner",
                            "assets",
                            "workOrders",
                            "requests",
                            "inspections",
                            "inventory",
                            "vendors",
                            "vendors.detail",
                            "vendors.new",
                            "vendors.search",
                            "vendors.filter",
                            "schedules",
                            "documents",
                            "imports",
                            "reports",
                            "admin",
                            "audit",
                            "assets.detail",
                            "workOrders.detail",
                            "inventory.detail",
                            "schedules.detail",
                            "documents.detail",
                            "admin.detail",
                            "assets.new",
                            "workOrders.new",
                            "inventory.new",
                            "schedules.new",
                            "documents.new",
                            "admin.new",
                            "assets.search",
                            "workOrders.search",
                            "inventory.search",
                            "schedules.search",
                            "documents.search",
                            "assets.filter",
                            "workOrders.filter",
                            "inventory.filter",
                            "schedules.filter",
                            "documents.filter",
                            "workOrders.retrieval"
                          ]
                        },
                        "durationMs": {
                          "type": "number",
                          "minimum": 0,
                          "maximum": 86400000
                        },
                        "language": { "type": "string", "enum": ["en", "fr"] },
                        "at": {
                          "type": "string",
                          "format": "date-time",
                          "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                        }
                      },
                      "required": ["screen", "durationMs", "language", "at"],
                      "additionalProperties": false
                    }
                  }
                },
                "required": ["measurements"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/metrics/performance/monthly": {
      "get": {
        "operationId": "getApiMetricsPerformanceMonthly",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "parameters": [
          {
            "name": "month",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "pattern": "^\\\\d{4}-(0[1-9]|1[0-2])$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiMetricsPerformanceMonthly",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "parameters": [
          {
            "name": "month",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "pattern": "^\\\\d{4}-(0[1-9]|1[0-2])$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/login": {
      "post": {
        "operationId": "postApiLogin",
        "x-access": "cookie",
        "security": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string",
                    "format": "email",
                    "pattern": "^(?!\\\\.)(?!.*\\\\.\\\\.)([A-Za-z0-9_'+\\\\-\\\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\\\-]*\\\\.)+[A-Za-z]{2,}$"
                  },
                  "password": { "type": "string", "maxLength": 200 }
                },
                "required": ["email", "password"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/logout": {
      "post": {
        "operationId": "postApiLogout",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/session": {
      "get": {
        "operationId": "getApiSession",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiSession",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/offline-policy": {
      "post": {
        "operationId": "postApiOfflinePolicy",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "hours": { "type": "integer", "minimum": 1, "maximum": 720 }
                },
                "required": ["hours"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/sync": {
      "get": {
        "operationId": "getApiSync",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "parameters": [
          {
            "name": "cursor",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "maxLength": 2000 }
          },
          {
            "name": "next",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "maxLength": 2000 }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiSync",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "parameters": [
          {
            "name": "cursor",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "maxLength": 2000 }
          },
          {
            "name": "next",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "maxLength": 2000 }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/bootstrap": {
      "get": {
        "operationId": "getApiBootstrap",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiBootstrap",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/search": {
      "get": {
        "operationId": "getApiSearch",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "q",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "maxLength": 100 }
          },
          {
            "name": "kind",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiSearch",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "q",
            "in": "query",
            "required": true,
            "schema": { "type": "string", "maxLength": 100 }
          },
          {
            "name": "kind",
            "in": "query",
            "required": false,
            "schema": { "type": "string" }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/assets/{id}/inspections": {
      "get": {
        "operationId": "getApiAssetsIdInspections",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiAssetsIdInspections",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/inspection-templates": {
      "get": {
        "operationId": "getApiInspectionTemplates",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiInspectionTemplates",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "post": {
        "operationId": "postApiInspectionTemplates",
        "x-access": "admin",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "kind": { "type": "string", "const": "inspectionTemplate" },
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "propertyNames": { "type": "string" },
                    "additionalProperties": {}
                  }
                },
                "required": ["commandId", "kind", "id", "baseVersion", "data"],
                "additionalProperties": false,
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "inspectionTemplate" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "items": {
                            "minItems": 1,
                            "maxItems": 100,
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 100,
                                  "pattern": "^[A-Za-z0-9_-]+$"
                                },
                                "label": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 200
                                },
                                "type": {
                                  "type": "string",
                                  "enum": ["passFail", "number", "text"]
                                },
                                "min": {
                                  "default": null,
                                  "anyOf": [
                                    { "type": "number" },
                                    { "type": "null" }
                                  ]
                                },
                                "max": {
                                  "default": null,
                                  "anyOf": [
                                    { "type": "number" },
                                    { "type": "null" }
                                  ]
                                }
                              },
                              "required": ["id", "label", "type"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["name", "site", "items"],
                        "additionalProperties": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/inspections": {
      "post": {
        "operationId": "postApiInspections",
        "x-access": "write",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "kind": { "type": "string", "const": "inspection" },
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "propertyNames": { "type": "string" },
                    "additionalProperties": {}
                  }
                },
                "required": ["commandId", "kind", "id", "baseVersion", "data"],
                "additionalProperties": false,
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "inspection" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "template": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "templateVersion": {
                            "type": "integer",
                            "exclusiveMinimum": 0,
                            "maximum": 9007199254740991
                          },
                          "templateName": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "items": {
                            "minItems": 1,
                            "maxItems": 100,
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 100,
                                  "pattern": "^[A-Za-z0-9_-]+$"
                                },
                                "label": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 200
                                },
                                "type": {
                                  "type": "string",
                                  "enum": ["passFail", "number", "text"]
                                },
                                "min": {
                                  "default": null,
                                  "anyOf": [
                                    { "type": "number" },
                                    { "type": "null" }
                                  ]
                                },
                                "max": {
                                  "default": null,
                                  "anyOf": [
                                    { "type": "number" },
                                    { "type": "null" }
                                  ]
                                }
                              },
                              "required": ["id", "label", "type"],
                              "additionalProperties": false
                            }
                          },
                          "inspector": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "performedAt": {
                            "type": "string",
                            "format": "date-time",
                            "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                          },
                          "results": {
                            "minItems": 1,
                            "maxItems": 100,
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "item": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 100,
                                  "pattern": "^[A-Za-z0-9_-]+$"
                                },
                                "value": {
                                  "anyOf": [
                                    { "type": "string", "maxLength": 5000 },
                                    { "type": "number" }
                                  ]
                                },
                                "failed": { "type": "boolean" },
                                "defect": {
                                  "default": false,
                                  "type": "boolean"
                                },
                                "workOrder": {
                                  "default": null,
                                  "anyOf": [
                                    {
                                      "type": "string",
                                      "minLength": 1,
                                      "maxLength": 100,
                                      "pattern": "^[A-Za-z0-9_-]+$"
                                    },
                                    { "type": "null" }
                                  ]
                                }
                              },
                              "required": ["item", "value"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["site", "asset", "template", "results"],
                        "additionalProperties": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/reports/inspections": {
      "get": {
        "operationId": "getApiReportsInspections",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "asset",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "inspection",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "language",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["en", "fr"] }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiReportsInspections",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "asset",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "inspection",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "language",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["en", "fr"] }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/assets/{id}/meters": {
      "get": {
        "operationId": "getApiAssetsIdMeters",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiAssetsIdMeters",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/meters": {
      "post": {
        "operationId": "postApiMeters",
        "x-access": "write",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "kind": { "type": "string", "const": "meter" },
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "propertyNames": { "type": "string" },
                    "additionalProperties": {}
                  }
                },
                "required": ["commandId", "kind", "id", "baseVersion", "data"],
                "additionalProperties": false,
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "meter" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "type": {
                            "type": "string",
                            "enum": [
                              "odometer",
                              "engineHours",
                              "fuel",
                              "counter"
                            ]
                          },
                          "unit": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "currentValue": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000000000000
                              },
                              { "type": "null" }
                            ]
                          },
                          "lastReadingDate": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "lastReading": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          }
                        },
                        "required": ["name", "site", "asset", "type", "unit"],
                        "additionalProperties": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/meter-readings": {
      "post": {
        "operationId": "postApiMeterReadings",
        "x-access": "write",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "kind": { "type": "string", "const": "meterReading" },
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "propertyNames": { "type": "string" },
                    "additionalProperties": {}
                  }
                },
                "required": ["commandId", "kind", "id", "baseVersion", "data"],
                "additionalProperties": false,
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "meterReading" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "meter": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "value": {
                            "type": "number",
                            "minimum": 0,
                            "maximum": 1000000000000
                          },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "correction": { "default": false, "type": "boolean" },
                          "reason": {
                            "default": "",
                            "type": "string",
                            "maxLength": 1000
                          },
                          "previous": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "recordedBy": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "sequence": {
                            "default": 0,
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          }
                        },
                        "required": ["site", "asset", "meter", "value", "date"],
                        "additionalProperties": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/requests": {
      "get": {
        "operationId": "getApiRequests",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiRequests",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "post": {
        "operationId": "postApiRequests",
        "x-access": "write",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "kind": { "type": "string", "const": "request" },
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "propertyNames": { "type": "string" },
                    "additionalProperties": {}
                  }
                },
                "required": ["commandId", "kind", "id", "baseVersion", "data"],
                "additionalProperties": false,
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "request" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "location": {
                            "default": "",
                            "type": "string",
                            "maxLength": 200
                          },
                          "description": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 5000
                          },
                          "priority": {
                            "type": "string",
                            "enum": ["low", "normal", "high", "urgent"]
                          },
                          "status": {
                            "default": "submitted",
                            "type": "string",
                            "enum": [
                              "submitted",
                              "approved",
                              "rejected",
                              "converted"
                            ]
                          },
                          "reason": {
                            "default": "",
                            "type": "string",
                            "maxLength": 1000
                          },
                          "requester": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "workOrder": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "assignee": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "due": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          }
                        },
                        "required": ["site", "description", "priority"],
                        "additionalProperties": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/receipts/{id}": {
      "get": {
        "operationId": "getApiReceiptsId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid",
              "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiReceiptsId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid",
              "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/commands": {
      "post": {
        "operationId": "postApiCommands",
        "x-access": "write",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "kind": {
                    "type": "string",
                    "enum": [
                      "site",
                      "category",
                      "assetClass",
                      "asset",
                      "workOrder",
                      "request",
                      "meter",
                      "meterReading",
                      "inspectionTemplate",
                      "inspection",
                      "part",
                      "labour",
                      "vendor",
                      "invoice",
                      "partIssue",
                      "schedule",
                      "plannedRun",
                      "noticeRule",
                      "userSettings",
                      "contract",
                      "procedure",
                      "reportDefinition",
                      "role"
                    ]
                  },
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "propertyNames": { "type": "string" },
                    "additionalProperties": {}
                  }
                },
                "required": ["commandId", "kind", "id", "baseVersion", "data"],
                "additionalProperties": false,
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "noticeRule" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 120
                          },
                          "event": {
                            "type": "string",
                            "enum": [
                              "workOrder.created",
                              "workOrder.assigned",
                              "workOrder.statusChanged",
                              "workOrder.overdue",
                              "request.created",
                              "request.approved",
                              "request.rejected",
                              "request.converted",
                              "defect.opened",
                              "preventive.due"
                            ]
                          },
                          "channel": {
                            "type": "string",
                            "enum": ["email", "teams", "sms"]
                          },
                          "recipients": {
                            "type": "object",
                            "properties": {
                              "users": {
                                "maxItems": 100,
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 100,
                                  "pattern": "^[A-Za-z0-9_-]+$"
                                }
                              },
                              "roles": {
                                "maxItems": 3,
                                "type": "array",
                                "items": {
                                  "type": "string",
                                  "enum": ["admin", "operator", "viewer"]
                                }
                              },
                              "siteQueue": { "type": "boolean" }
                            },
                            "required": ["users", "roles", "siteQueue"],
                            "additionalProperties": false
                          },
                          "owner": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "createdAt": {
                            "type": "string",
                            "format": "date-time",
                            "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                          },
                          "effectiveAt": {
                            "type": "string",
                            "format": "date-time",
                            "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                          },
                          "mandatory": { "default": false, "type": "boolean" },
                          "active": { "default": true, "type": "boolean" },
                          "language": {
                            "default": "en",
                            "type": "string",
                            "enum": ["en", "fr"]
                          },
                          "teamsConfigured": {
                            "default": false,
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "site",
                          "name",
                          "event",
                          "channel",
                          "recipients"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "userSettings" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "owner": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "noticeOptOut": {
                            "default": false,
                            "type": "boolean"
                          },
                          "dashboardTiles": {
                            "default": [
                              "backlog",
                              "overduePreventive",
                              "preventiveCompliance",
                              "serviceLevel"
                            ],
                            "maxItems": 10,
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": [
                                "backlog",
                                "overduePreventive",
                                "preventiveCompliance",
                                "costPerAsset",
                                "costPerKm",
                                "costPerHour",
                                "downtime",
                                "mtbf",
                                "mttr",
                                "serviceLevel"
                              ]
                            }
                          }
                        },
                        "required": ["owner"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "site" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "statusNames": {
                            "default": {
                              "workOrder": {
                                "draft": { "en": "Draft", "fr": "Brouillon" },
                                "assigned": {
                                  "en": "Assigned",
                                  "fr": "Attribué"
                                },
                                "active": { "en": "Active", "fr": "Activé" },
                                "completed": {
                                  "en": "Completed",
                                  "fr": "Terminé"
                                },
                                "cancelled": {
                                  "en": "Cancelled",
                                  "fr": "Annulé"
                                }
                              },
                              "request": {
                                "submitted": {
                                  "en": "Submitted",
                                  "fr": "Soumise"
                                },
                                "approved": {
                                  "en": "Approved",
                                  "fr": "Approuvée"
                                },
                                "rejected": {
                                  "en": "Rejected",
                                  "fr": "Refusée"
                                },
                                "converted": {
                                  "en": "Converted to work order",
                                  "fr": "Convertie en bon de travail"
                                }
                              }
                            },
                            "type": "object",
                            "properties": {
                              "workOrder": {
                                "type": "object",
                                "properties": {
                                  "draft": {
                                    "type": "object",
                                    "properties": {
                                      "en": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      },
                                      "fr": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      }
                                    },
                                    "required": ["en", "fr"],
                                    "additionalProperties": false
                                  },
                                  "assigned": {
                                    "type": "object",
                                    "properties": {
                                      "en": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      },
                                      "fr": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      }
                                    },
                                    "required": ["en", "fr"],
                                    "additionalProperties": false
                                  },
                                  "active": {
                                    "type": "object",
                                    "properties": {
                                      "en": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      },
                                      "fr": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      }
                                    },
                                    "required": ["en", "fr"],
                                    "additionalProperties": false
                                  },
                                  "completed": {
                                    "type": "object",
                                    "properties": {
                                      "en": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      },
                                      "fr": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      }
                                    },
                                    "required": ["en", "fr"],
                                    "additionalProperties": false
                                  },
                                  "cancelled": {
                                    "type": "object",
                                    "properties": {
                                      "en": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      },
                                      "fr": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      }
                                    },
                                    "required": ["en", "fr"],
                                    "additionalProperties": false
                                  }
                                },
                                "required": [
                                  "draft",
                                  "assigned",
                                  "active",
                                  "completed",
                                  "cancelled"
                                ],
                                "additionalProperties": false
                              },
                              "request": {
                                "type": "object",
                                "properties": {
                                  "submitted": {
                                    "type": "object",
                                    "properties": {
                                      "en": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      },
                                      "fr": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      }
                                    },
                                    "required": ["en", "fr"],
                                    "additionalProperties": false
                                  },
                                  "approved": {
                                    "type": "object",
                                    "properties": {
                                      "en": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      },
                                      "fr": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      }
                                    },
                                    "required": ["en", "fr"],
                                    "additionalProperties": false
                                  },
                                  "rejected": {
                                    "type": "object",
                                    "properties": {
                                      "en": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      },
                                      "fr": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      }
                                    },
                                    "required": ["en", "fr"],
                                    "additionalProperties": false
                                  },
                                  "converted": {
                                    "type": "object",
                                    "properties": {
                                      "en": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      },
                                      "fr": {
                                        "type": "string",
                                        "minLength": 1,
                                        "maxLength": 120
                                      }
                                    },
                                    "required": ["en", "fr"],
                                    "additionalProperties": false
                                  }
                                },
                                "required": [
                                  "submitted",
                                  "approved",
                                  "rejected",
                                  "converted"
                                ],
                                "additionalProperties": false
                              }
                            },
                            "required": ["workOrder", "request"],
                            "additionalProperties": false
                          },
                          "plannerCapacity": {
                            "default": {},
                            "type": "object",
                            "propertyNames": {
                              "type": "string",
                              "minLength": 1,
                              "maxLength": 100,
                              "pattern": "^[A-Za-z0-9_-]+$"
                            },
                            "additionalProperties": {
                              "type": "number",
                              "minimum": 0,
                              "maximum": 24
                            }
                          },
                          "flow": {
                            "default": {
                              "draft": ["assigned", "active", "cancelled"],
                              "assigned": ["active", "completed", "cancelled"],
                              "active": ["completed", "cancelled"],
                              "completed": [],
                              "cancelled": []
                            },
                            "type": "object",
                            "propertyNames": {
                              "type": "string",
                              "enum": [
                                "draft",
                                "assigned",
                                "active",
                                "completed",
                                "cancelled"
                              ]
                            },
                            "additionalProperties": {
                              "type": "array",
                              "items": {
                                "type": "string",
                                "enum": [
                                  "draft",
                                  "assigned",
                                  "active",
                                  "completed",
                                  "cancelled"
                                ]
                              }
                            }
                          }
                        },
                        "required": ["name"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "category" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          }
                        },
                        "required": ["name"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "assetClass" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          }
                        },
                        "required": ["name"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "asset" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "longitude": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "number",
                                "minimum": -180,
                                "maximum": 180
                              },
                              { "type": "null" }
                            ]
                          },
                          "latitude": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "number",
                                "minimum": -90,
                                "maximum": 90
                              },
                              { "type": "null" }
                            ]
                          },
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "unitNumber": {
                            "default": "",
                            "type": "string",
                            "maxLength": 100
                          },
                          "vin": {
                            "default": "",
                            "type": "string",
                            "maxLength": 60
                          },
                          "vinConfirmed": {
                            "default": false,
                            "type": "boolean"
                          },
                          "plate": {
                            "default": "",
                            "type": "string",
                            "maxLength": 100
                          },
                          "plateJurisdiction": {
                            "default": "",
                            "type": "string",
                            "maxLength": 100
                          },
                          "assetClass": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "year": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "integer",
                                "minimum": 1800,
                                "maximum": 2100
                              },
                              { "type": "null" }
                            ]
                          },
                          "make": {
                            "default": "",
                            "type": "string",
                            "maxLength": 100
                          },
                          "model": {
                            "default": "",
                            "type": "string",
                            "maxLength": 100
                          },
                          "gvwrKg": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "number",
                                "exclusiveMinimum": 0,
                                "maximum": 10000000
                              },
                              { "type": "null" }
                            ]
                          },
                          "fuelType": {
                            "default": "",
                            "type": "string",
                            "enum": [
                              "",
                              "gasoline",
                              "diesel",
                              "electric",
                              "hybrid",
                              "propane",
                              "naturalGas",
                              "other"
                            ]
                          },
                          "code": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 60,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "type": {
                            "type": "string",
                            "enum": [
                              "building",
                              "room",
                              "component",
                              "equipment"
                            ]
                          },
                          "parent": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "category": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "notes": {
                            "default": "",
                            "type": "string",
                            "maxLength": 5000
                          }
                        },
                        "required": ["name", "code", "site", "type"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "workOrder" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "longitude": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "number",
                                "minimum": -180,
                                "maximum": 180
                              },
                              { "type": "null" }
                            ]
                          },
                          "latitude": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "number",
                                "minimum": -90,
                                "maximum": 90
                              },
                              { "type": "null" }
                            ]
                          },
                          "title": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "failureAt": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "format": "date-time",
                                "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "repairStartedAt": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "format": "date-time",
                                "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "downtimeStart": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "format": "date-time",
                                "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "downtimeEnd": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "format": "date-time",
                                "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "plannedDate": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "plannedHours": {
                            "default": null,
                            "anyOf": [
                              { "type": "number", "minimum": 0, "maximum": 24 },
                              { "type": "null" }
                            ]
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "location": {
                            "default": "",
                            "type": "string",
                            "maxLength": 200
                          },
                          "request": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "inspection": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "inspectionItem": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "assignee": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "priority": {
                            "type": "string",
                            "enum": ["low", "normal", "high", "urgent"]
                          },
                          "due": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "status": {
                            "type": "string",
                            "enum": [
                              "draft",
                              "assigned",
                              "active",
                              "completed",
                              "cancelled"
                            ]
                          },
                          "tasks": {
                            "default": [],
                            "maxItems": 100,
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 100,
                                  "pattern": "^[A-Za-z0-9_-]+$"
                                },
                                "title": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 200
                                },
                                "done": { "type": "boolean" },
                                "completedAt": {
                                  "anyOf": [
                                    { "type": "string" },
                                    { "type": "null" }
                                  ]
                                }
                              },
                              "required": [
                                "id",
                                "title",
                                "done",
                                "completedAt"
                              ],
                              "additionalProperties": false
                            }
                          },
                          "notes": {
                            "default": "",
                            "type": "string",
                            "maxLength": 5000
                          },
                          "completedAt": {
                            "default": null,
                            "anyOf": [{ "type": "string" }, { "type": "null" }]
                          },
                          "schedule": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          }
                        },
                        "required": [
                          "title",
                          "site",
                          "assignee",
                          "priority",
                          "due",
                          "status"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "inspectionTemplate" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "items": {
                            "minItems": 1,
                            "maxItems": 100,
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 100,
                                  "pattern": "^[A-Za-z0-9_-]+$"
                                },
                                "label": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 200
                                },
                                "type": {
                                  "type": "string",
                                  "enum": ["passFail", "number", "text"]
                                },
                                "min": {
                                  "default": null,
                                  "anyOf": [
                                    { "type": "number" },
                                    { "type": "null" }
                                  ]
                                },
                                "max": {
                                  "default": null,
                                  "anyOf": [
                                    { "type": "number" },
                                    { "type": "null" }
                                  ]
                                }
                              },
                              "required": ["id", "label", "type"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["name", "site", "items"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "inspection" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "template": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "templateVersion": {
                            "type": "integer",
                            "exclusiveMinimum": 0,
                            "maximum": 9007199254740991
                          },
                          "templateName": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "items": {
                            "minItems": 1,
                            "maxItems": 100,
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 100,
                                  "pattern": "^[A-Za-z0-9_-]+$"
                                },
                                "label": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 200
                                },
                                "type": {
                                  "type": "string",
                                  "enum": ["passFail", "number", "text"]
                                },
                                "min": {
                                  "default": null,
                                  "anyOf": [
                                    { "type": "number" },
                                    { "type": "null" }
                                  ]
                                },
                                "max": {
                                  "default": null,
                                  "anyOf": [
                                    { "type": "number" },
                                    { "type": "null" }
                                  ]
                                }
                              },
                              "required": ["id", "label", "type"],
                              "additionalProperties": false
                            }
                          },
                          "inspector": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "performedAt": {
                            "type": "string",
                            "format": "date-time",
                            "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
                          },
                          "results": {
                            "minItems": 1,
                            "maxItems": 100,
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "item": {
                                  "type": "string",
                                  "minLength": 1,
                                  "maxLength": 100,
                                  "pattern": "^[A-Za-z0-9_-]+$"
                                },
                                "value": {
                                  "anyOf": [
                                    { "type": "string", "maxLength": 5000 },
                                    { "type": "number" }
                                  ]
                                },
                                "failed": { "type": "boolean" },
                                "defect": {
                                  "default": false,
                                  "type": "boolean"
                                },
                                "workOrder": {
                                  "default": null,
                                  "anyOf": [
                                    {
                                      "type": "string",
                                      "minLength": 1,
                                      "maxLength": 100,
                                      "pattern": "^[A-Za-z0-9_-]+$"
                                    },
                                    { "type": "null" }
                                  ]
                                }
                              },
                              "required": ["item", "value"],
                              "additionalProperties": false
                            }
                          }
                        },
                        "required": ["site", "asset", "template", "results"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "meter" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "type": {
                            "type": "string",
                            "enum": [
                              "odometer",
                              "engineHours",
                              "fuel",
                              "counter"
                            ]
                          },
                          "unit": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "currentValue": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000000000000
                              },
                              { "type": "null" }
                            ]
                          },
                          "lastReadingDate": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "lastReading": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          }
                        },
                        "required": ["name", "site", "asset", "type", "unit"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "meterReading" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "meter": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "value": {
                            "type": "number",
                            "minimum": 0,
                            "maximum": 1000000000000
                          },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "correction": { "default": false, "type": "boolean" },
                          "reason": {
                            "default": "",
                            "type": "string",
                            "maxLength": 1000
                          },
                          "previous": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "recordedBy": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "sequence": {
                            "default": 0,
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          }
                        },
                        "required": ["site", "asset", "meter", "value", "date"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "request" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "location": {
                            "default": "",
                            "type": "string",
                            "maxLength": 200
                          },
                          "description": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 5000
                          },
                          "priority": {
                            "type": "string",
                            "enum": ["low", "normal", "high", "urgent"]
                          },
                          "status": {
                            "default": "submitted",
                            "type": "string",
                            "enum": [
                              "submitted",
                              "approved",
                              "rejected",
                              "converted"
                            ]
                          },
                          "reason": {
                            "default": "",
                            "type": "string",
                            "maxLength": 1000
                          },
                          "requester": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "workOrder": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "assignee": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "due": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          }
                        },
                        "required": ["site", "description", "priority"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "labour" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "workOrder": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "technician": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "hours": {
                            "type": "number",
                            "exclusiveMinimum": 0,
                            "maximum": 24
                          },
                          "hourlyRateCents": {
                            "default": 0,
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 1000000000
                          },
                          "currency": {
                            "default": "CAD",
                            "type": "string",
                            "const": "CAD"
                          }
                        },
                        "required": [
                          "site",
                          "workOrder",
                          "technician",
                          "date",
                          "hours"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "vendor" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "contact": {
                            "default": "",
                            "type": "string",
                            "maxLength": 1000
                          },
                          "address": {
                            "default": "",
                            "type": "string",
                            "maxLength": 2000
                          },
                          "paymentTerms": {
                            "default": "",
                            "type": "string",
                            "maxLength": 1000
                          },
                          "active": { "default": true, "type": "boolean" }
                        },
                        "required": ["site", "name"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "invoice" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "workOrder": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "vendor": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "invoiceNumber": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "amountCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 1000000000
                          },
                          "taxCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 1000000000
                          },
                          "description": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 5000
                          },
                          "document": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "format": "uuid",
                                "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "currency": {
                            "default": "CAD",
                            "type": "string",
                            "const": "CAD"
                          }
                        },
                        "required": [
                          "site",
                          "workOrder",
                          "vendor",
                          "invoiceNumber",
                          "date",
                          "amountCents",
                          "taxCents",
                          "description"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "partIssue" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "workOrder": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "part": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "quantity": {
                            "type": "integer",
                            "exclusiveMinimum": 0,
                            "maximum": 1000000
                          },
                          "unitCostCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 1000000000
                          },
                          "currency": {
                            "default": "CAD",
                            "type": "string",
                            "const": "CAD"
                          }
                        },
                        "required": [
                          "site",
                          "workOrder",
                          "part",
                          "date",
                          "quantity",
                          "unitCostCents"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "part" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "location": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "quantity": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 1000000
                          },
                          "unit": {
                            "default": "each",
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "unitCostCents": {
                            "default": 0,
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 1000000000
                          },
                          "currency": {
                            "default": "CAD",
                            "type": "string",
                            "const": "CAD"
                          },
                          "used": {
                            "default": 0,
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          }
                        },
                        "required": ["name", "site", "location", "quantity"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "plannedRun" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "schedule": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "due": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "plannedDate": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "assignee": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "plannedHours": {
                            "default": null,
                            "anyOf": [
                              { "type": "number", "minimum": 0, "maximum": 24 },
                              { "type": "null" }
                            ]
                          }
                        },
                        "required": [
                          "site",
                          "schedule",
                          "due",
                          "plannedDate",
                          "assignee"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "schedule" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "asset": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "assignee": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "plannedHours": {
                            "default": null,
                            "anyOf": [
                              { "type": "number", "minimum": 0, "maximum": 24 },
                              { "type": "null" }
                            ]
                          },
                          "trigger": {
                            "default": "calendar",
                            "type": "string",
                            "enum": ["calendar", "meter", "either"]
                          },
                          "meter": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "meterInterval": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "number",
                                "exclusiveMinimum": 0,
                                "maximum": 1000000000000
                              },
                              { "type": "null" }
                            ]
                          },
                          "lastServiceMeter": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "number",
                                "minimum": -1000000000000,
                                "maximum": 1000000000000
                              },
                              { "type": "null" }
                            ]
                          },
                          "nextMeter": {
                            "default": null,
                            "anyOf": [{ "type": "number" }, { "type": "null" }]
                          },
                          "meterCycle": {
                            "default": 0,
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 9007199254740991
                          },
                          "frequency": {
                            "default": "months",
                            "type": "string",
                            "enum": ["days", "weeks", "months", "years"]
                          },
                          "interval": {
                            "default": 1,
                            "type": "integer",
                            "minimum": 1,
                            "maximum": 365
                          },
                          "nextDue": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$",
                            "description": "When omitted, defaults to the current UTC date at validation time."
                          },
                          "active": { "type": "boolean" },
                          "procedure": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          }
                        },
                        "required": [
                          "name",
                          "site",
                          "asset",
                          "assignee",
                          "active"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "contract" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "notes": {
                            "default": "",
                            "type": "string",
                            "maxLength": 5000
                          }
                        },
                        "required": ["name", "site"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "procedure" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "notes": {
                            "default": "",
                            "type": "string",
                            "maxLength": 5000
                          }
                        },
                        "required": ["name", "site"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "reportDefinition" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "type": {
                            "type": "string",
                            "enum": ["inventory", "workOrders", "inspections"]
                          },
                          "site": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "minLength": 1,
                                "maxLength": 100,
                                "pattern": "^[A-Za-z0-9_-]+$"
                              },
                              { "type": "null" }
                            ]
                          }
                        },
                        "required": ["name", "type"],
                        "additionalProperties": false
                      }
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "role" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string",
                            "enum": ["operator", "viewer"]
                          },
                          "permissions": {
                            "maxItems": 6,
                            "type": "array",
                            "items": {
                              "type": "string",
                              "enum": [
                                "asset:write",
                                "workOrder:write",
                                "part:write",
                                "schedule:write",
                                "document:write",
                                "cost:read"
                              ]
                            }
                          }
                        },
                        "required": ["name", "permissions"],
                        "additionalProperties": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/movements": {
      "post": {
        "operationId": "postApiMovements",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "delta": {
                    "type": "integer",
                    "minimum": -1000000,
                    "maximum": 1000000
                  },
                  "reason": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 200
                  },
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "workOrder": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  }
                },
                "required": ["id", "delta", "reason", "commandId"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/language": {
      "post": {
        "operationId": "postApiLanguage",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "language": { "type": "string", "enum": ["en", "fr"] }
                },
                "required": ["language"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/users": {
      "post": {
        "operationId": "postApiUsers",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "name": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 200
                  },
                  "email": {
                    "type": "string",
                    "format": "email",
                    "pattern": "^(?!\\\\.)(?!.*\\\\.\\\\.)([A-Za-z0-9_'+\\\\-\\\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\\\-]*\\\\.)+[A-Za-z]{2,}$"
                  },
                  "role": {
                    "type": "string",
                    "enum": ["admin", "operator", "viewer"]
                  },
                  "language": { "type": "string", "enum": ["en", "fr"] },
                  "sites": {
                    "maxItems": 100,
                    "type": "array",
                    "items": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 100,
                      "pattern": "^[A-Za-z0-9_-]+$"
                    }
                  },
                  "active": { "type": "boolean" },
                  "password": {
                    "type": "string",
                    "minLength": 12,
                    "maxLength": 200
                  }
                },
                "required": [
                  "id",
                  "name",
                  "email",
                  "role",
                  "language",
                  "sites",
                  "active"
                ],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/tick": {
      "post": {
        "operationId": "postApiTick",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/attachments": {
      "post": {
        "operationId": "postApiAttachments",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "owner": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "name": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 200,
                    "pattern": "^[^/\\\\\\\\\\\\x00-\\\\x1f]+$"
                  },
                  "base64": { "type": "string", "maxLength": 14680064 },
                  "keepLocation": { "default": false, "type": "boolean" },
                  "item": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  }
                },
                "required": ["owner", "name", "base64"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/attachments/{id}": {
      "get": {
        "operationId": "getApiAttachmentsId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "thumbnail",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["0", "1"] }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid",
              "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiAttachmentsId",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "thumbnail",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["0", "1"] }
          },
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid",
              "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/import/extract": {
      "post": {
        "operationId": "postApiImportExtract",
        "x-access": "admin",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": { "type": "string", "maxLength": 200 },
                  "base64": { "type": "string", "maxLength": 14680064 }
                },
                "required": ["name", "base64"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/import/preview": {
      "post": {
        "operationId": "postApiImportPreview",
        "x-access": "admin",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "mapping": {
                    "type": "object",
                    "propertyNames": { "type": "string", "maxLength": 50 },
                    "additionalProperties": {
                      "anyOf": [
                        { "type": "string", "maxLength": 200 },
                        { "type": "null" }
                      ]
                    }
                  },
                  "kind": {
                    "default": "asset",
                    "type": "string",
                    "enum": [
                      "asset",
                      "workOrder",
                      "part",
                      "schedule",
                      "meterReading"
                    ]
                  },
                  "confirmVins": { "default": false, "type": "boolean" }
                },
                "required": ["id", "mapping"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/import/commit": {
      "post": {
        "operationId": "postApiImportCommit",
        "x-access": "admin",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "token": {
                    "type": "string",
                    "minLength": 64,
                    "maxLength": 64
                  }
                },
                "required": ["id", "token"],
                "additionalProperties": false
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/audit": {
      "get": {
        "operationId": "getApiAudit",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiAudit",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/audit/export": {
      "get": {
        "operationId": "getApiAuditExport",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiAuditExport",
        "x-access": "cookie",
        "security": [{ "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/labour": {
      "post": {
        "operationId": "postApiLabour",
        "x-access": "write",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "kind": { "type": "string", "const": "labour" },
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "propertyNames": { "type": "string" },
                    "additionalProperties": {}
                  }
                },
                "required": ["commandId", "kind", "id", "baseVersion", "data"],
                "additionalProperties": false,
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "labour" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "workOrder": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "technician": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "hours": {
                            "type": "number",
                            "exclusiveMinimum": 0,
                            "maximum": 24
                          },
                          "hourlyRateCents": {
                            "default": 0,
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 1000000000
                          },
                          "currency": {
                            "default": "CAD",
                            "type": "string",
                            "const": "CAD"
                          }
                        },
                        "required": [
                          "site",
                          "workOrder",
                          "technician",
                          "date",
                          "hours"
                        ],
                        "additionalProperties": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "get": {
        "operationId": "getApiLabour",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiLabour",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/vendors": {
      "post": {
        "operationId": "postApiVendors",
        "x-access": "write",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "kind": { "type": "string", "const": "vendor" },
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "propertyNames": { "type": "string" },
                    "additionalProperties": {}
                  }
                },
                "required": ["commandId", "kind", "id", "baseVersion", "data"],
                "additionalProperties": false,
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "vendor" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "name": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "contact": {
                            "default": "",
                            "type": "string",
                            "maxLength": 1000
                          },
                          "address": {
                            "default": "",
                            "type": "string",
                            "maxLength": 2000
                          },
                          "paymentTerms": {
                            "default": "",
                            "type": "string",
                            "maxLength": 1000
                          },
                          "active": { "default": true, "type": "boolean" }
                        },
                        "required": ["site", "name"],
                        "additionalProperties": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "get": {
        "operationId": "getApiVendors",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiVendors",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/invoices": {
      "post": {
        "operationId": "postApiInvoices",
        "x-access": "write",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "commandId": {
                    "type": "string",
                    "format": "uuid",
                    "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                  },
                  "kind": { "type": "string", "const": "invoice" },
                  "id": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 100,
                    "pattern": "^[A-Za-z0-9_-]+$"
                  },
                  "baseVersion": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 9007199254740991
                  },
                  "data": {
                    "type": "object",
                    "propertyNames": { "type": "string" },
                    "additionalProperties": {}
                  }
                },
                "required": ["commandId", "kind", "id", "baseVersion", "data"],
                "additionalProperties": false,
                "oneOf": [
                  {
                    "type": "object",
                    "properties": {
                      "kind": { "const": "invoice" },
                      "data": {
                        "type": "object",
                        "properties": {
                          "site": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "workOrder": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "vendor": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 100,
                            "pattern": "^[A-Za-z0-9_-]+$"
                          },
                          "invoiceNumber": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 200
                          },
                          "date": {
                            "type": "string",
                            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
                          },
                          "amountCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 1000000000
                          },
                          "taxCents": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 1000000000
                          },
                          "description": {
                            "type": "string",
                            "minLength": 1,
                            "maxLength": 5000
                          },
                          "document": {
                            "default": null,
                            "anyOf": [
                              {
                                "type": "string",
                                "format": "uuid",
                                "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
                              },
                              { "type": "null" }
                            ]
                          },
                          "currency": {
                            "default": "CAD",
                            "type": "string",
                            "const": "CAD"
                          }
                        },
                        "required": [
                          "site",
                          "workOrder",
                          "vendor",
                          "invoiceNumber",
                          "date",
                          "amountCents",
                          "taxCents",
                          "description"
                        ],
                        "additionalProperties": false
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "get": {
        "operationId": "getApiInvoices",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiInvoices",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/reports/costs": {
      "get": {
        "operationId": "getApiReportsCosts",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "asset",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "workOrder",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "from",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "to",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "language",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["en", "fr"] }
          },
          {
            "name": "format",
            "in": "query",
            "required": false,
            "schema": {
              "default": "csv",
              "type": "string",
              "enum": ["csv", "json"]
            }
          },
          {
            "name": "group",
            "in": "query",
            "required": false,
            "schema": {
              "default": "entries",
              "type": "string",
              "enum": ["entries", "workOrder", "asset", "classPeriod", "period"]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiReportsCosts",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "asset",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "workOrder",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "from",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "to",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
          },
          {
            "name": "language",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["en", "fr"] }
          },
          {
            "name": "format",
            "in": "query",
            "required": false,
            "schema": {
              "default": "csv",
              "type": "string",
              "enum": ["csv", "json"]
            }
          },
          {
            "name": "group",
            "in": "query",
            "required": false,
            "schema": {
              "default": "entries",
              "type": "string",
              "enum": ["entries", "workOrder", "asset", "classPeriod", "period"]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    },
    "/api/reports/{kind}": {
      "get": {
        "operationId": "getApiReportsKind",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "language",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["en", "fr"] }
          },
          {
            "name": "kind",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "enum": ["inventory", "workOrders", "assets", "requests"]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      },
      "head": {
        "operationId": "headApiReportsKind",
        "x-access": "read",
        "security": [{ "bearerAuth": [] }, { "sessionCookie": [] }],
        "parameters": [
          {
            "name": "site",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            }
          },
          {
            "name": "language",
            "in": "query",
            "required": false,
            "schema": { "type": "string", "enum": ["en", "fr"] }
          },
          {
            "name": "kind",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "enum": ["inventory", "workOrders", "assets", "requests"]
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response. Business validation and permission rules still apply.",
            "content": { "application/json": { "schema": true } }
          },
          "204": { "description": "Successful response without a body" },
          "default": {
            "description": "Error; 429 includes Retry-After seconds",
            "headers": {
              "Retry-After": {
                "schema": { "type": "integer", "minimum": 1 },
                "description": "Seconds until the token rate window resets"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": { "code": { "type": "string" }, "detail": {} },
                  "required": ["code"]
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "bearerAuth": { "type": "http", "scheme": "bearer" },
      "sessionCookie": {
        "type": "apiKey",
        "in": "cookie",
        "name": "pxmaint",
        "description": "HTTPS installations use __Host-pxmaint. Cookie mutations also require matching Origin and X-CSRF-Token."
      }
    },
    "schemas": {
      "noticeRule": {
        "type": "object",
        "properties": {
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "name": { "type": "string", "minLength": 1, "maxLength": 120 },
          "event": {
            "type": "string",
            "enum": [
              "workOrder.created",
              "workOrder.assigned",
              "workOrder.statusChanged",
              "workOrder.overdue",
              "request.created",
              "request.approved",
              "request.rejected",
              "request.converted",
              "defect.opened",
              "preventive.due"
            ]
          },
          "channel": { "type": "string", "enum": ["email", "teams", "sms"] },
          "recipients": {
            "type": "object",
            "properties": {
              "users": {
                "maxItems": 100,
                "type": "array",
                "items": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 100,
                  "pattern": "^[A-Za-z0-9_-]+$"
                }
              },
              "roles": {
                "maxItems": 3,
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": ["admin", "operator", "viewer"]
                }
              },
              "siteQueue": { "type": "boolean" }
            },
            "required": ["users", "roles", "siteQueue"],
            "additionalProperties": false
          },
          "owner": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time",
            "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
          },
          "effectiveAt": {
            "type": "string",
            "format": "date-time",
            "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
          },
          "mandatory": { "default": false, "type": "boolean" },
          "active": { "default": true, "type": "boolean" },
          "language": {
            "default": "en",
            "type": "string",
            "enum": ["en", "fr"]
          },
          "teamsConfigured": { "default": false, "type": "boolean" }
        },
        "required": ["site", "name", "event", "channel", "recipients"],
        "additionalProperties": false
      },
      "userSettings": {
        "type": "object",
        "properties": {
          "owner": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "noticeOptOut": { "default": false, "type": "boolean" },
          "dashboardTiles": {
            "default": [
              "backlog",
              "overduePreventive",
              "preventiveCompliance",
              "serviceLevel"
            ],
            "maxItems": 10,
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "backlog",
                "overduePreventive",
                "preventiveCompliance",
                "costPerAsset",
                "costPerKm",
                "costPerHour",
                "downtime",
                "mtbf",
                "mttr",
                "serviceLevel"
              ]
            }
          }
        },
        "required": ["owner"],
        "additionalProperties": false
      },
      "site": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "statusNames": {
            "default": {
              "workOrder": {
                "draft": { "en": "Draft", "fr": "Brouillon" },
                "assigned": { "en": "Assigned", "fr": "Attribué" },
                "active": { "en": "Active", "fr": "Activé" },
                "completed": { "en": "Completed", "fr": "Terminé" },
                "cancelled": { "en": "Cancelled", "fr": "Annulé" }
              },
              "request": {
                "submitted": { "en": "Submitted", "fr": "Soumise" },
                "approved": { "en": "Approved", "fr": "Approuvée" },
                "rejected": { "en": "Rejected", "fr": "Refusée" },
                "converted": {
                  "en": "Converted to work order",
                  "fr": "Convertie en bon de travail"
                }
              }
            },
            "type": "object",
            "properties": {
              "workOrder": {
                "type": "object",
                "properties": {
                  "draft": {
                    "type": "object",
                    "properties": {
                      "en": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "fr": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      }
                    },
                    "required": ["en", "fr"],
                    "additionalProperties": false
                  },
                  "assigned": {
                    "type": "object",
                    "properties": {
                      "en": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "fr": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      }
                    },
                    "required": ["en", "fr"],
                    "additionalProperties": false
                  },
                  "active": {
                    "type": "object",
                    "properties": {
                      "en": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "fr": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      }
                    },
                    "required": ["en", "fr"],
                    "additionalProperties": false
                  },
                  "completed": {
                    "type": "object",
                    "properties": {
                      "en": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "fr": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      }
                    },
                    "required": ["en", "fr"],
                    "additionalProperties": false
                  },
                  "cancelled": {
                    "type": "object",
                    "properties": {
                      "en": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "fr": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      }
                    },
                    "required": ["en", "fr"],
                    "additionalProperties": false
                  }
                },
                "required": [
                  "draft",
                  "assigned",
                  "active",
                  "completed",
                  "cancelled"
                ],
                "additionalProperties": false
              },
              "request": {
                "type": "object",
                "properties": {
                  "submitted": {
                    "type": "object",
                    "properties": {
                      "en": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "fr": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      }
                    },
                    "required": ["en", "fr"],
                    "additionalProperties": false
                  },
                  "approved": {
                    "type": "object",
                    "properties": {
                      "en": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "fr": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      }
                    },
                    "required": ["en", "fr"],
                    "additionalProperties": false
                  },
                  "rejected": {
                    "type": "object",
                    "properties": {
                      "en": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "fr": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      }
                    },
                    "required": ["en", "fr"],
                    "additionalProperties": false
                  },
                  "converted": {
                    "type": "object",
                    "properties": {
                      "en": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      },
                      "fr": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 120
                      }
                    },
                    "required": ["en", "fr"],
                    "additionalProperties": false
                  }
                },
                "required": ["submitted", "approved", "rejected", "converted"],
                "additionalProperties": false
              }
            },
            "required": ["workOrder", "request"],
            "additionalProperties": false
          },
          "plannerCapacity": {
            "default": {},
            "type": "object",
            "propertyNames": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100,
              "pattern": "^[A-Za-z0-9_-]+$"
            },
            "additionalProperties": {
              "type": "number",
              "minimum": 0,
              "maximum": 24
            }
          },
          "flow": {
            "default": {
              "draft": ["assigned", "active", "cancelled"],
              "assigned": ["active", "completed", "cancelled"],
              "active": ["completed", "cancelled"],
              "completed": [],
              "cancelled": []
            },
            "type": "object",
            "propertyNames": {
              "type": "string",
              "enum": ["draft", "assigned", "active", "completed", "cancelled"]
            },
            "additionalProperties": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "draft",
                  "assigned",
                  "active",
                  "completed",
                  "cancelled"
                ]
              }
            }
          }
        },
        "required": ["name"],
        "additionalProperties": false
      },
      "category": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 }
        },
        "required": ["name"],
        "additionalProperties": false
      },
      "assetClass": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 }
        },
        "required": ["name"],
        "additionalProperties": false
      },
      "asset": {
        "type": "object",
        "properties": {
          "longitude": {
            "default": null,
            "anyOf": [
              { "type": "number", "minimum": -180, "maximum": 180 },
              { "type": "null" }
            ]
          },
          "latitude": {
            "default": null,
            "anyOf": [
              { "type": "number", "minimum": -90, "maximum": 90 },
              { "type": "null" }
            ]
          },
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "unitNumber": { "default": "", "type": "string", "maxLength": 100 },
          "vin": { "default": "", "type": "string", "maxLength": 60 },
          "vinConfirmed": { "default": false, "type": "boolean" },
          "plate": { "default": "", "type": "string", "maxLength": 100 },
          "plateJurisdiction": {
            "default": "",
            "type": "string",
            "maxLength": 100
          },
          "assetClass": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "year": {
            "default": null,
            "anyOf": [
              { "type": "integer", "minimum": 1800, "maximum": 2100 },
              { "type": "null" }
            ]
          },
          "make": { "default": "", "type": "string", "maxLength": 100 },
          "model": { "default": "", "type": "string", "maxLength": 100 },
          "gvwrKg": {
            "default": null,
            "anyOf": [
              { "type": "number", "exclusiveMinimum": 0, "maximum": 10000000 },
              { "type": "null" }
            ]
          },
          "fuelType": {
            "default": "",
            "type": "string",
            "enum": [
              "",
              "gasoline",
              "diesel",
              "electric",
              "hybrid",
              "propane",
              "naturalGas",
              "other"
            ]
          },
          "code": {
            "type": "string",
            "minLength": 1,
            "maxLength": 60,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "type": {
            "type": "string",
            "enum": ["building", "room", "component", "equipment"]
          },
          "parent": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "category": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "notes": { "default": "", "type": "string", "maxLength": 5000 }
        },
        "required": ["name", "code", "site", "type"],
        "additionalProperties": false
      },
      "workOrder": {
        "type": "object",
        "properties": {
          "longitude": {
            "default": null,
            "anyOf": [
              { "type": "number", "minimum": -180, "maximum": 180 },
              { "type": "null" }
            ]
          },
          "latitude": {
            "default": null,
            "anyOf": [
              { "type": "number", "minimum": -90, "maximum": 90 },
              { "type": "null" }
            ]
          },
          "title": { "type": "string", "minLength": 1, "maxLength": 200 },
          "failureAt": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "format": "date-time",
                "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
              },
              { "type": "null" }
            ]
          },
          "repairStartedAt": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "format": "date-time",
                "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
              },
              { "type": "null" }
            ]
          },
          "downtimeStart": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "format": "date-time",
                "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
              },
              { "type": "null" }
            ]
          },
          "downtimeEnd": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "format": "date-time",
                "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
              },
              { "type": "null" }
            ]
          },
          "plannedDate": {
            "default": null,
            "anyOf": [
              { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" },
              { "type": "null" }
            ]
          },
          "plannedHours": {
            "default": null,
            "anyOf": [
              { "type": "number", "minimum": 0, "maximum": 24 },
              { "type": "null" }
            ]
          },
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "asset": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "location": { "default": "", "type": "string", "maxLength": 200 },
          "request": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "inspection": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "inspectionItem": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "assignee": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "priority": {
            "type": "string",
            "enum": ["low", "normal", "high", "urgent"]
          },
          "due": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" },
          "status": {
            "type": "string",
            "enum": ["draft", "assigned", "active", "completed", "cancelled"]
          },
          "tasks": {
            "default": [],
            "maxItems": 100,
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 100,
                  "pattern": "^[A-Za-z0-9_-]+$"
                },
                "title": { "type": "string", "minLength": 1, "maxLength": 200 },
                "done": { "type": "boolean" },
                "completedAt": {
                  "anyOf": [{ "type": "string" }, { "type": "null" }]
                }
              },
              "required": ["id", "title", "done", "completedAt"],
              "additionalProperties": false
            }
          },
          "notes": { "default": "", "type": "string", "maxLength": 5000 },
          "completedAt": {
            "default": null,
            "anyOf": [{ "type": "string" }, { "type": "null" }]
          },
          "schedule": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          }
        },
        "required": ["title", "site", "assignee", "priority", "due", "status"],
        "additionalProperties": false
      },
      "inspectionTemplate": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "items": {
            "minItems": 1,
            "maxItems": 100,
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 100,
                  "pattern": "^[A-Za-z0-9_-]+$"
                },
                "label": { "type": "string", "minLength": 1, "maxLength": 200 },
                "type": {
                  "type": "string",
                  "enum": ["passFail", "number", "text"]
                },
                "min": {
                  "default": null,
                  "anyOf": [{ "type": "number" }, { "type": "null" }]
                },
                "max": {
                  "default": null,
                  "anyOf": [{ "type": "number" }, { "type": "null" }]
                }
              },
              "required": ["id", "label", "type"],
              "additionalProperties": false
            }
          }
        },
        "required": ["name", "site", "items"],
        "additionalProperties": false
      },
      "inspection": {
        "type": "object",
        "properties": {
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "asset": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "template": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "templateVersion": {
            "type": "integer",
            "exclusiveMinimum": 0,
            "maximum": 9007199254740991
          },
          "templateName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "items": {
            "minItems": 1,
            "maxItems": 100,
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 100,
                  "pattern": "^[A-Za-z0-9_-]+$"
                },
                "label": { "type": "string", "minLength": 1, "maxLength": 200 },
                "type": {
                  "type": "string",
                  "enum": ["passFail", "number", "text"]
                },
                "min": {
                  "default": null,
                  "anyOf": [{ "type": "number" }, { "type": "null" }]
                },
                "max": {
                  "default": null,
                  "anyOf": [{ "type": "number" }, { "type": "null" }]
                }
              },
              "required": ["id", "label", "type"],
              "additionalProperties": false
            }
          },
          "inspector": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "performedAt": {
            "type": "string",
            "format": "date-time",
            "pattern": "^(?:(?:\\\\d\\\\d[2468][048]|\\\\d\\\\d[13579][26]|\\\\d\\\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\\\d|30)|(?:02)-(?:0[1-9]|1\\\\d|2[0-8])))T(?:(?:[01]\\\\d|2[0-3]):[0-5]\\\\d(?::[0-5]\\\\d(?:\\\\.\\\\d+)?)?(?:Z))$"
          },
          "results": {
            "minItems": 1,
            "maxItems": 100,
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "item": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 100,
                  "pattern": "^[A-Za-z0-9_-]+$"
                },
                "value": {
                  "anyOf": [
                    { "type": "string", "maxLength": 5000 },
                    { "type": "number" }
                  ]
                },
                "failed": { "type": "boolean" },
                "defect": { "default": false, "type": "boolean" },
                "workOrder": {
                  "default": null,
                  "anyOf": [
                    {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 100,
                      "pattern": "^[A-Za-z0-9_-]+$"
                    },
                    { "type": "null" }
                  ]
                }
              },
              "required": ["item", "value"],
              "additionalProperties": false
            }
          }
        },
        "required": ["site", "asset", "template", "results"],
        "additionalProperties": false
      },
      "meter": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "asset": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "type": {
            "type": "string",
            "enum": ["odometer", "engineHours", "fuel", "counter"]
          },
          "unit": { "type": "string", "minLength": 1, "maxLength": 200 },
          "currentValue": {
            "default": null,
            "anyOf": [
              { "type": "number", "minimum": 0, "maximum": 1000000000000 },
              { "type": "null" }
            ]
          },
          "lastReadingDate": {
            "default": null,
            "anyOf": [
              { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" },
              { "type": "null" }
            ]
          },
          "lastReading": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          }
        },
        "required": ["name", "site", "asset", "type", "unit"],
        "additionalProperties": false
      },
      "meterReading": {
        "type": "object",
        "properties": {
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "asset": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "meter": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "value": { "type": "number", "minimum": 0, "maximum": 1000000000000 },
          "date": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" },
          "correction": { "default": false, "type": "boolean" },
          "reason": { "default": "", "type": "string", "maxLength": 1000 },
          "previous": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "recordedBy": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "sequence": {
            "default": 0,
            "type": "integer",
            "minimum": 0,
            "maximum": 9007199254740991
          }
        },
        "required": ["site", "asset", "meter", "value", "date"],
        "additionalProperties": false
      },
      "request": {
        "type": "object",
        "properties": {
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "asset": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "location": { "default": "", "type": "string", "maxLength": 200 },
          "description": {
            "type": "string",
            "minLength": 1,
            "maxLength": 5000
          },
          "priority": {
            "type": "string",
            "enum": ["low", "normal", "high", "urgent"]
          },
          "status": {
            "default": "submitted",
            "type": "string",
            "enum": ["submitted", "approved", "rejected", "converted"]
          },
          "reason": { "default": "", "type": "string", "maxLength": 1000 },
          "requester": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "workOrder": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "assignee": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "due": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" }
        },
        "required": ["site", "description", "priority"],
        "additionalProperties": false
      },
      "labour": {
        "type": "object",
        "properties": {
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "workOrder": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "technician": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "date": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" },
          "hours": { "type": "number", "exclusiveMinimum": 0, "maximum": 24 },
          "hourlyRateCents": {
            "default": 0,
            "type": "integer",
            "minimum": 0,
            "maximum": 1000000000
          },
          "currency": { "default": "CAD", "type": "string", "const": "CAD" }
        },
        "required": ["site", "workOrder", "technician", "date", "hours"],
        "additionalProperties": false
      },
      "vendor": {
        "type": "object",
        "properties": {
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "contact": { "default": "", "type": "string", "maxLength": 1000 },
          "address": { "default": "", "type": "string", "maxLength": 2000 },
          "paymentTerms": {
            "default": "",
            "type": "string",
            "maxLength": 1000
          },
          "active": { "default": true, "type": "boolean" }
        },
        "required": ["site", "name"],
        "additionalProperties": false
      },
      "invoice": {
        "type": "object",
        "properties": {
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "workOrder": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "vendor": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "invoiceNumber": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "date": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" },
          "amountCents": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1000000000
          },
          "taxCents": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1000000000
          },
          "description": {
            "type": "string",
            "minLength": 1,
            "maxLength": 5000
          },
          "document": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "format": "uuid",
                "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
              },
              { "type": "null" }
            ]
          },
          "currency": { "default": "CAD", "type": "string", "const": "CAD" }
        },
        "required": [
          "site",
          "workOrder",
          "vendor",
          "invoiceNumber",
          "date",
          "amountCents",
          "taxCents",
          "description"
        ],
        "additionalProperties": false
      },
      "partIssue": {
        "type": "object",
        "properties": {
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "workOrder": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "part": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "date": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" },
          "quantity": {
            "type": "integer",
            "exclusiveMinimum": 0,
            "maximum": 1000000
          },
          "unitCostCents": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1000000000
          },
          "currency": { "default": "CAD", "type": "string", "const": "CAD" }
        },
        "required": [
          "site",
          "workOrder",
          "part",
          "date",
          "quantity",
          "unitCostCents"
        ],
        "additionalProperties": false
      },
      "part": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "asset": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "location": { "type": "string", "minLength": 1, "maxLength": 200 },
          "quantity": { "type": "integer", "minimum": 0, "maximum": 1000000 },
          "unit": {
            "default": "each",
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "unitCostCents": {
            "default": 0,
            "type": "integer",
            "minimum": 0,
            "maximum": 1000000000
          },
          "currency": { "default": "CAD", "type": "string", "const": "CAD" },
          "used": {
            "default": 0,
            "type": "integer",
            "minimum": 0,
            "maximum": 9007199254740991
          }
        },
        "required": ["name", "site", "location", "quantity"],
        "additionalProperties": false
      },
      "plannedRun": {
        "type": "object",
        "properties": {
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "schedule": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "due": { "type": "string", "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$" },
          "plannedDate": {
            "type": "string",
            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$"
          },
          "assignee": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "plannedHours": {
            "default": null,
            "anyOf": [
              { "type": "number", "minimum": 0, "maximum": 24 },
              { "type": "null" }
            ]
          }
        },
        "required": ["site", "schedule", "due", "plannedDate", "assignee"],
        "additionalProperties": false
      },
      "schedule": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "asset": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "assignee": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "plannedHours": {
            "default": null,
            "anyOf": [
              { "type": "number", "minimum": 0, "maximum": 24 },
              { "type": "null" }
            ]
          },
          "trigger": {
            "default": "calendar",
            "type": "string",
            "enum": ["calendar", "meter", "either"]
          },
          "meter": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          },
          "meterInterval": {
            "default": null,
            "anyOf": [
              {
                "type": "number",
                "exclusiveMinimum": 0,
                "maximum": 1000000000000
              },
              { "type": "null" }
            ]
          },
          "lastServiceMeter": {
            "default": null,
            "anyOf": [
              {
                "type": "number",
                "minimum": -1000000000000,
                "maximum": 1000000000000
              },
              { "type": "null" }
            ]
          },
          "nextMeter": {
            "default": null,
            "anyOf": [{ "type": "number" }, { "type": "null" }]
          },
          "meterCycle": {
            "default": 0,
            "type": "integer",
            "minimum": 0,
            "maximum": 9007199254740991
          },
          "frequency": {
            "default": "months",
            "type": "string",
            "enum": ["days", "weeks", "months", "years"]
          },
          "interval": {
            "default": 1,
            "type": "integer",
            "minimum": 1,
            "maximum": 365
          },
          "nextDue": {
            "type": "string",
            "pattern": "^\\\\d{4}-\\\\d{2}-\\\\d{2}$",
            "description": "When omitted, defaults to the current UTC date at validation time."
          },
          "active": { "type": "boolean" },
          "procedure": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          }
        },
        "required": ["name", "site", "asset", "assignee", "active"],
        "additionalProperties": false
      },
      "contract": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "notes": { "default": "", "type": "string", "maxLength": 5000 }
        },
        "required": ["name", "site"],
        "additionalProperties": false
      },
      "procedure": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "site": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "pattern": "^[A-Za-z0-9_-]+$"
          },
          "notes": { "default": "", "type": "string", "maxLength": 5000 }
        },
        "required": ["name", "site"],
        "additionalProperties": false
      },
      "reportDefinition": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "minLength": 1, "maxLength": 200 },
          "type": {
            "type": "string",
            "enum": ["inventory", "workOrders", "inspections"]
          },
          "site": {
            "default": null,
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 100,
                "pattern": "^[A-Za-z0-9_-]+$"
              },
              { "type": "null" }
            ]
          }
        },
        "required": ["name", "type"],
        "additionalProperties": false
      },
      "role": {
        "type": "object",
        "properties": {
          "name": { "type": "string", "enum": ["operator", "viewer"] },
          "permissions": {
            "maxItems": 6,
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "asset:write",
                "workOrder:write",
                "part:write",
                "schedule:write",
                "document:write",
                "cost:read"
              ]
            }
          }
        },
        "required": ["name", "permissions"],
        "additionalProperties": false
      }
    }
  }
}
`;export{n as default};
