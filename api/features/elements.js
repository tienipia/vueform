export default {
  "addons": {
    "base": {
      "options": {
        "addons": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons."
        }
      },
      "computed": {
        "hasAddon": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Helper property used to determine internally if the element has any addons."
        }
      }
    }
  },
  "autocomplete": {
    "base": {
      "options": {
        "autocomplete": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "The `autocomplete` attribute of the input field."
        }
      }
    }
  },
  "autogrow": {
    "base": {
      "options": {
        "autogrow": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the textarea should grow."
        },
        "rows": {
          "public": true,
          "default": "3",
          "types": [
            "number"
          ],
          "description": "The `rows` attribute of the textarea."
        }
      },
      "methods": {
        "autosize": {
          "public": true,
          "returns": "void",
          "description": "Refreshes size."
        }
      }
    },
    "multilingual": {
      "options": {
        "autogrow": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the textarea should grow."
        },
        "rows": {
          "public": true,
          "default": "3",
          "types": [
            "number"
          ],
          "description": "The `rows` attribute of the textarea."
        }
      },
      "methods": {
        "autosize": {
          "public": true,
          "returns": "void",
          "description": "Refreshes size."
        }
      }
    }
  },
  "baseElement": {
    "base": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        },
        "isStatic": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "isFileType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is a file."
        },
        "isArrayType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        },
        "isImageType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        }
      },
      "options": {
        "type": {
          "public": true,
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    },
    "list": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        },
        "isStatic": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "isFileType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is a file."
        },
        "isArrayType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        },
        "isImageType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        }
      },
      "options": {
        "type": {
          "public": true,
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    },
    "file": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        },
        "isStatic": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "isFileType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is a file."
        },
        "isArrayType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        },
        "isImageType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        }
      },
      "options": {
        "type": {
          "public": true,
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    },
    "image": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        },
        "isStatic": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "isFileType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is a file."
        },
        "isArrayType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        },
        "isImageType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        }
      },
      "options": {
        "type": {
          "public": true,
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    },
    "static": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        },
        "isStatic": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "isFileType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is a file."
        },
        "isArrayType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        },
        "isImageType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        }
      },
      "options": {
        "type": {
          "public": true,
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    }
  },
  "booleanValue": {
    "base": {
      "options": {
        "trueValue": {
          "public": true,
          "default": "true",
          "types": [
            "str",
            "num",
            "bool"
          ],
          "description": "Value of the element if checkbox is *checked*."
        },
        "falseValue": {
          "public": true,
          "default": "false",
          "types": [
            "str",
            "num",
            "bool"
          ],
          "description": "Value of the element if checkbox is *unchecked*."
        }
      }
    }
  },
  "button": {
    "base": {
      "options": {
        "buttonLabel": {
          "public": true,
          "default": "\"\"",
          "types": [
            "string"
          ],
          "description": ""
        },
        "buttonType": {
          "public": true,
          "default": "\"button\"",
          "values": [
            "\"submit\"",
            "\"anchor\"",
            "\"button\""
          ],
          "types": [
            "string"
          ],
          "description": ""
        },
        "buttonClass": {
          "public": true,
          "default": "null",
          "types": [
            "string",
            "array",
            "object"
          ],
          "description": ""
        },
        "disabled": {
          "public": true,
          "default": "false",
          "types": [
            "function"
          ],
          "description": ""
        },
        "loading": {
          "public": true,
          "default": "false",
          "types": [
            "function"
          ],
          "description": ""
        },
        "href": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": ""
        },
        "target": {
          "public": true,
          "default": "\"_self\"",
          "types": [
            "string"
          ],
          "description": ""
        },
        "align": {
          "public": true,
          "default": "\"left\"",
          "types": [
            "string"
          ],
          "description": ""
        },
        "onClick": {
          "public": true,
          "default": "null",
          "types": [
            "function"
          ],
          "description": ""
        }
      },
      "computed": {
        "buttonComponent": {
          "public": false,
          "types": [
            [
              "component",
              "FormButton"
            ]
          ],
          "description": ""
        },
        "button": {
          "public": false,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    }
  },
  "buttons": {
    "base": {
      "methods": {
        "component": {
          "public": false,
          "returns": [
            [
              "component",
              "FormButton"
            ]
          ],
          "description": ""
        }
      }
    }
  },
  "check": {
    "base": {
      "methods": {
        "check": {
          "public": true,
          "returns": "void",
          "description": "Checks a checkbox or checkboxes.",
          "params": {
            "items": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "key of one or more checkboxes to check."
            }
          }
        },
        "uncheck": {
          "public": true,
          "returns": "void",
          "description": "Unchecks a checkbox or checkboxes.",
          "params": {
            "items": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "key of one or more checkboxes to uncheck."
            }
          }
        },
        "checkAll": {
          "public": true,
          "returns": "void",
          "description": "Checks all checkboxes."
        },
        "uncheckAll": {
          "public": true,
          "returns": "void",
          "description": "Checks all checkboxes."
        }
      }
    }
  },
  "children": {
    "base": {
      "data": {
        "children$Array": {
          "public": false,
          "types": [
            [
              "array",
              "Element"
            ]
          ],
          "description": ""
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        }
      }
    },
    "list": {
      "data": {
        "instances": {
          "public": true,
          "types": [
            "array"
          ],
          "description": ""
        },
        "children$Array": {
          "public": false,
          "types": [
            [
              "array",
              "Element"
            ]
          ],
          "description": ""
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        }
      }
    },
    "object": {
      "options": {
        "elements": {
          "public": false,
          "types": [
            "object"
          ],
          "description": ""
        }
      },
      "computed": {
        "children": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Schema of child elements."
        },
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        }
      },
      "data": {
        "children$Array": {
          "public": false,
          "types": [
            [
              "array",
              "Element"
            ]
          ],
          "description": ""
        }
      }
    },
    "address": {
      "options": {
        "elements": {
          "public": false,
          "types": [
            "object"
          ],
          "description": ""
        }
      },
      "data": {
        "children$Array": {
          "public": false,
          "types": [
            [
              "array",
              "Element"
            ]
          ],
          "description": ""
        },
        "addressId": {
          "public": true,
          "default": "\"address-*\"",
          "types": [
            "string"
          ],
          "description": ""
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        },
        "children": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Schema of child elements."
        },
        "fields": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`."
        }
      }
    },
    "buttons": {
      "options": {
        "buttons": {
          "public": false,
          "types": [
            "array"
          ],
          "description": ""
        }
      },
      "data": {
        "children$Array": {
          "public": false,
          "types": [
            [
              "array",
              "Element"
            ]
          ],
          "description": ""
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "description": ""
        },
        "children": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Schema of child elements."
        }
      }
    }
  },
  "classes": {
    "base": {
      "options": {
        "class": {
          "public": true,
          "default": "\"\"",
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        },
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element."
        },
        "addClasses": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "list": {
      "options": {
        "class": {
          "public": true,
          "default": "\"\"",
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        },
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`."
        },
        "addClasses": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "file": {
      "options": {
        "class": {
          "public": true,
          "default": "\"\"",
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        },
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`."
        },
        "addClasses": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    }
  },
  "columns": {
    "base": {
      "options": {
        "columns": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Calulated column sizes and classes for the element."
        }
      }
    }
  },
  "components": {
    "base": {
      "options": {
        "components": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
        }
      }
    }
  },
  "data": {
    "base": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        },
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        },
        "changed": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "options": {
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "updated": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "date": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        },
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        },
        "changed": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "options": {
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "updated": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "dates": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        },
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        },
        "changed": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "options": {
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "array"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "array"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "updated": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "object": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        },
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        }
      },
      "options": {
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "object"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "object"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "group": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        },
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        }
      },
      "options": {
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "object"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "object"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "list": {
      "computed": {
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        },
        "next": {
          "public": true,
          "types": [
            "number"
          ],
          "description": "Helper method used to retrieve the next key for a new instance."
        },
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        }
      },
      "options": {
        "initial": {
          "public": true,
          "default": "1",
          "types": [
            "number"
          ],
          "description": "Initial number of child instances."
        },
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "add": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "object",
                "array",
                "string",
                "number",
                "boolean"
              ],
              "required": false,
              "description": " "
            }
          }
        },
        "insert": {
          "public": true,
          "returns": "number",
          "description": "",
          "params": {
            "value": {
              "types": [
                "object",
                "array",
                "string",
                "number",
                "boolean"
              ],
              "required": false,
              "description": " "
            }
          }
        },
        "remove": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "index": {
              "types": [
                "number"
              ],
              "required": true,
              "description": "  "
            }
          }
        },
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "updated": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleAdd": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleRemove": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user removes a list item or `.remove()` method is invoked.",
          "params": {
            "index": {
              "types": [
                "number"
              ],
              "required": true,
              "description": "Index of child to be removed."
            }
          }
        },
        "setInitialInstances": {
          "public": false,
          "returns": "void",
          "description": "Sets initial instances when the element is initalized."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "multilingual": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        },
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        },
        "changed": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "options": {
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "updated": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "multifile": {
      "computed": {
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        },
        "next": {
          "public": true,
          "types": [
            "number"
          ],
          "description": "Helper method used to retrieve the next key for a new instance."
        },
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        }
      },
      "options": {
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "add": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "object",
                "array",
                "string",
                "number",
                "boolean"
              ],
              "required": false,
              "description": " "
            }
          }
        },
        "insert": {
          "public": true,
          "returns": "number",
          "description": "",
          "params": {
            "value": {
              "types": [
                "object",
                "array",
                "string",
                "number",
                "boolean"
              ],
              "required": false,
              "description": " "
            }
          }
        },
        "remove": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "index": {
              "types": [
                "number"
              ],
              "required": true,
              "description": "  "
            }
          }
        },
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "updated": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleAdd": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleRemove": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user removes a list item or `.remove()` method is invoked.",
          "params": {
            "index": {
              "types": [
                "number"
              ],
              "required": true,
              "description": "Index of child to be removed."
            }
          }
        },
        "setInitialInstances": {
          "public": false,
          "returns": "void",
          "description": "Sets initial instances when the element is initalized."
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "trix": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        },
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        },
        "changed": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "options": {
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "updated": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "ttrix": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value."
        },
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
        },
        "changed": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "options": {
        "formatData": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before gets merged with form `data`."
        },
        "formatLoad": {
          "public": true,
          "types": [
            "function"
          ],
          "description": "A function that formats data before [.load](#method-load) to the element."
        },
        "submit": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value should be submitted."
        }
      },
      "methods": {
        "load": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to be loaded."
            },
            "format": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
            }
          }
        },
        "update": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "value": {
              "types": [
                "string",
                "number"
              ],
              "required": true,
              "description": "The value to update the field with."
            }
          }
        },
        "updated": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "clear": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "reset": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    }
  },
  "debounce": {
    "base": {
      "options": {
        "debounce": {
          "public": true,
          "default": "null",
          "types": [
            "number"
          ],
          "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
        }
      }
    }
  },
  "default": {
    "base": {
      "options": {
        "default": {
          "public": true,
          "types": [
            "string",
            "number"
          ],
          "description": "The default value of the element."
        }
      }
    },
    "date": {
      "options": {
        "default": {
          "public": true,
          "types": [
            "string",
            "Date"
          ],
          "description": "The default value of the element."
        }
      }
    },
    "dates": {
      "options": {
        "default": {
          "public": true,
          "types": [
            "array"
          ],
          "description": ""
        }
      }
    },
    "multilingual": {
      "options": {
        "default": {
          "public": true,
          "types": [
            "object",
            "string",
            "number"
          ],
          "description": ""
        }
      }
    }
  },
  "description": {
    "base": {
      "options": {
        "description": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": "Description of the element."
        }
      }
    }
  },
  "disabled": {
    "base": {
      "options": {
        "disabled": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "Whether the field should be *disabled* for user input (API updates are possible)."
        }
      },
      "methods": {
        "disable": {
          "public": true,
          "returns": "void",
          "description": "Disabled the field."
        },
        "enable": {
          "public": true,
          "returns": "void",
          "description": "Enables the field."
        }
      }
    },
    "checkboxgroup": {
      "options": {
        "disables": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "List of option keys to be disabled."
        },
        "disabled": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "Whether all the items are *disabled*."
        }
      },
      "methods": {
        "disableAll": {
          "public": true,
          "returns": "void",
          "description": "Disabled all items."
        },
        "enableAll": {
          "public": true,
          "returns": "void",
          "description": "Enables all items."
        },
        "disable": {
          "public": true,
          "returns": "void",
          "description": "Disables an item or items.",
          "params": {
            "items": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "Key of one or more items to disable."
            }
          }
        },
        "enable": {
          "public": true,
          "returns": "void",
          "description": "Enables an item or items.",
          "params": {
            "items": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "Key of one or more items to enable."
            }
          }
        }
      }
    }
  },
  "displayKey": {
    "base": {
      "options": {
        "displayKey": {
          "public": true,
          "default": "\"formatted_address\"",
          "types": [
            "string"
          ],
          "description": "The name of object key which contains the address that should be displayed to the user in the input field when [`.load`](#method-load) or [`.update`](#method-load) method is used. If you are using [`loadFormat`](#option-loadFormat) it should be the key in the **formatted** object. Default: \"formatted_address\"."
        }
      }
    }
  },
  "drop": {
    "base": {
      "options": {
        "drop": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "computed": {
        "canDrop": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "methods": {
        "handleDrop": {
          "public": false,
          "returns": "void",
          "description": "",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": false,
              "description": ""
            }
          }
        }
      }
    },
    "multifile": {
      "options": {
        "drop": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "computed": {
        "canDrop": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "methods": {
        "handleDrop": {
          "public": false,
          "returns": "void",
          "description": "",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": false,
              "description": ""
            }
          }
        }
      }
    }
  },
  "empty": {
    "base": {
      "computed": {
        "empty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no value filled in."
        }
      }
    },
    "multilingual": {
      "computed": {
        "empty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no value filled in."
        }
      }
    },
    "array": {
      "computed": {
        "empty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no value filled in."
        }
      }
    }
  },
  "file": {
    "base": {
      "options": {
        "accept": {
          "public": true,
          "default": "false",
          "types": [
            "string",
            "array"
          ],
          "description": ""
        },
        "clickable": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "auto": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "methods": {
          "public": true,
          "default": "config.methods.file",
          "types": [
            "object"
          ],
          "description": ""
        },
        "endpoints": {
          "public": true,
          "default": "config.endpoints.file",
          "types": [
            "object"
          ],
          "description": ""
        },
        "url": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        }
      },
      "data": {
        "file": {
          "public": true,
          "default": "null",
          "types": [
            "File",
            "object",
            "string"
          ],
          "description": ""
        },
        "base64": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": ""
        },
        "progress": {
          "public": true,
          "default": "0",
          "types": [
            "number"
          ],
          "description": ""
        },
        "preparing": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "computed": {
        "stage": {
          "public": true,
          "types": [
            "number"
          ],
          "description": ""
        },
        "filename": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        },
        "link": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        },
        "uploaded": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "canRemove": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "canUploadTemp": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "canSelect": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "previewOptions": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      },
      "methods": {
        "uploadTemp": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "remove": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleChange": {
          "public": false,
          "returns": "void",
          "description": "",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": true,
              "description": ""
            }
          }
        },
        "handleClick": {
          "public": false,
          "returns": "void",
          "description": "Triggered when an uploader is clicked."
        },
        "handleUploadTemp": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleRemove": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleAbort": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    }
  },
  "floating": {
    "base": {
      "options": {
        "floating": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": "The floating label of the element."
        }
      }
    }
  },
  "genericName": {
    "base": {
      "computed": {
        "genericName": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Helper property used to determine a generic name for the element."
        }
      }
    },
    "file": {
      "computed": {
        "genericName": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Helper property used to determine a generic name for the element."
        }
      }
    }
  },
  "handleChange": {
    "base": {
      "methods": {
        "handleChange": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
        }
      }
    },
    "checkbox": {
      "methods": {
        "handleChange": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
        }
      }
    },
    "toggle": {
      "methods": {
        "handleChange": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
        }
      }
    }
  },
  "handleError": {
    "base": {
      "methods": {
        "handleError": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.",
          "params": {
            "message": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "message to display."
            },
            "e": {
              "types": [
                "Event"
              ],
              "required": true,
              "description": ""
            }
          }
        }
      }
    }
  },
  "handleInput": {
    "base": {
      "methods": {
        "handleInput": {
          "public": true,
          "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
        }
      }
    },
    "select": {
      "methods": {
        "handleInput": {
          "public": true,
          "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
        }
      }
    }
  },
  "handleSelectEvents": {
    "base": {
      "methods": {
        "handleSelect": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user selects an option using non-native element.",
          "params": {
            "option": {
              "types": [
                "object"
              ],
              "required": true,
              "description": "the selected option object."
            }
          }
        },
        "handleDeselect": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.",
          "params": {
            "option": {
              "types": [
                "object"
              ],
              "required": true,
              "description": "the deselected option object."
            }
          }
        },
        "handleSearchChange": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user changes the search criteria using non-native element.",
          "params": {
            "searchQuery": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the current search query."
            }
          }
        },
        "handleOpen": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the option list is opened using non-native element."
        },
        "handleClose": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the option list is closed using non-native element."
        },
        "handleTag": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user creates a tag using non-native element.",
          "params": {
            "searchQuery": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the current search query."
            }
          }
        }
      }
    }
  },
  "handleTag": {
    "base": {
      "methods": {
        "handleTag": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user creates a tag. Only gets fired if [`create`](#option-create) is `true`.",
          "params": {
            "searchQuery": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the current search query."
            }
          }
        }
      }
    }
  },
  "id": {
    "base": {
      "options": {
        "id": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": "The 'id' attribute of the field."
        }
      }
    }
  },
  "image": {
    "base": {
      "options": {
        "accept": {
          "public": true,
          "default": "false",
          "types": [
            "string",
            "array"
          ],
          "description": ""
        },
        "auto": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "methods": {
          "public": true,
          "default": "config.methods.file",
          "types": [
            "object"
          ],
          "description": ""
        },
        "endpoints": {
          "public": true,
          "default": "config.endpoints.file",
          "types": [
            "object"
          ],
          "description": ""
        },
        "url": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        }
      },
      "data": {
        "file": {
          "public": true,
          "default": "null",
          "types": [
            "File",
            "object",
            "string"
          ],
          "description": ""
        },
        "base64": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": ""
        },
        "progress": {
          "public": true,
          "default": "0",
          "types": [
            "number"
          ],
          "description": ""
        },
        "preparing": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "computed": {
        "preview": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        },
        "previewOptions": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        },
        "link": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        },
        "stage": {
          "public": true,
          "types": [
            "number"
          ],
          "description": ""
        },
        "filename": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        },
        "uploaded": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "canRemove": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "canUploadTemp": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "canSelect": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "methods": {
        "uploadTemp": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "remove": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleChange": {
          "public": false,
          "returns": "void",
          "description": "",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": true,
              "description": ""
            }
          }
        },
        "handleClick": {
          "public": false,
          "returns": "void",
          "description": "Triggered when an uploader is clicked."
        },
        "handleUploadTemp": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleRemove": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "handleAbort": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    }
  },
  "info": {
    "base": {
      "options": {
        "info": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": "Info icon appears next to the element's label."
        }
      }
    }
  },
  "input": {
    "base": {
      "data": {
        "input": {
          "public": true,
          "types": [
            "HTMLElement"
          ],
          "description": ""
        }
      }
    }
  },
  "inputType": {
    "base": {
      "options": {
        "inputType": {
          "public": true,
          "default": "\"text\"",
          "types": [
            "string"
          ],
          "description": "The HTML type of input field (like type=\"text\")."
        }
      }
    },
    "password": {
      "computed": {
        "inputType": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    }
  },
  "items": {
    "base": {
      "options": {
        "items": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "select": {
      "options": {
        "items": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": ""
        }
      },
      "computed": {
        "nativeItems": {
          "public": true,
          "types": [
            "array"
          ],
          "description": ""
        }
      },
      "methods": {
        "updateItems": {
          "public": true,
          "returns": "void",
          "description": "",
          "params": {
            "disable": {
              "types": [
                "boolean"
              ],
              "required": true,
              "description": ""
            }
          }
        }
      }
    }
  },
  "label": {
    "base": {
      "options": {
        "label": {
          "public": true,
          "default": "\"\"",
          "types": [
            "string"
          ],
          "description": "Label of the element."
        }
      },
      "computed": {
        "hasLabel": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Helper property used to determine internally if a label should be rendered for the element."
        }
      }
    }
  },
  "languages": {
    "base": {
      "computed": {
        "language": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Current language."
        },
        "languages": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "Available language codes."
        }
      }
    }
  },
  "layout": {
    "base": {
      "computed": {
        "layout": {
          "public": true,
          "types": [
            "component"
          ],
          "description": ""
        }
      }
    }
  },
  "location": {
    "base": {
      "data": {
        "locationService": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The location service that's initalized once the component is mounted."
        },
        "location": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The raw location object of location provider (Google/Algolia)."
        }
      },
      "options": {
        "provider": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The Places API provider to use."
        },
        "options": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider."
        }
      },
      "computed": {
        "defaultOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Default options for flatpickr."
        }
      },
      "methods": {
        "handleAddressChange": {
          "public": true,
          "description": "Handles location service's address change.",
          "params": {
            "data": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing address data"
            },
            "raw": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing raw address data (based on provider)"
            }
          }
        },
        "initLocationService": {
          "public": true,
          "returns": "void",
          "description": "Initalizes location service."
        }
      }
    },
    "location": {
      "data": {
        "locationService": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The location service that's initalized once the component is mounted."
        },
        "location": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The raw location object of location provider (Google/Algolia)."
        }
      },
      "options": {
        "provider": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The Places API provider to use."
        },
        "options": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider."
        }
      },
      "computed": {
        "defaultOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Default options for flatpickr."
        }
      },
      "methods": {
        "handleAddressChange": {
          "public": true,
          "description": "Handles location service's address change.",
          "params": {
            "data": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing address data"
            },
            "raw": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing raw address data (based on provider)"
            }
          }
        },
        "initLocationService": {
          "public": true,
          "returns": "void",
          "description": "Initalizes location service."
        }
      }
    },
    "address": {
      "data": {
        "locationService": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The location service that's initalized once the component is mounted."
        },
        "location": {
          "public": true,
          "default": "null",
          "types": [
            "class"
          ],
          "description": "The raw location object of location provider (Google/Algolia)."
        }
      },
      "options": {
        "provider": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The Places API provider to use."
        },
        "options": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider."
        }
      },
      "computed": {
        "defaultOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Default options for flatpickr."
        }
      },
      "methods": {
        "updateFields": {
          "public": true,
          "description": "Updates fields with address data.",
          "params": {
            "data": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing address data"
            }
          }
        },
        "handleAddressChange": {
          "public": true,
          "description": "Handles location service's address change.",
          "params": {
            "data": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing address data"
            },
            "raw": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing raw address data (based on provider)"
            }
          }
        },
        "initLocationService": {
          "public": true,
          "returns": "void",
          "description": "Initalizes location service."
        }
      }
    }
  },
  "multifile": {
    "base": {
      "options": {
        "accept": {
          "public": false,
          "types": [
            "string",
            "array"
          ],
          "description": ""
        }
      },
      "methods": {
        "handleChange": {
          "public": false,
          "description": ""
        },
        "handleClick": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "nullValue": {
    "base": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "array": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "boolean": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "min": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "multilingual": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "object": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "options": {
    "base": {
      "options": {
        "labels": {
          "public": true,
          "default": "false",
          "types": [
            "object"
          ],
          "description": "Labels to be displayed for the toggle. If `false` no labels are displayed."
        },
        "width": {
          "public": false,
          "types": [
            "number"
          ],
          "description": ""
        },
        "height": {
          "public": false,
          "types": [
            "number"
          ],
          "description": ""
        },
        "speed": {
          "public": true,
          "default": "300",
          "types": [
            "number"
          ],
          "description": "The speed of toggle animation in milliseconds."
        },
        "colors": {
          "public": false,
          "types": [
            "object"
          ],
          "description": ""
        },
        "options": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Additional [options](https://github.com/vueform/toggle) for @vueform/toggle."
        }
      }
    }
  },
  "order": {
    "base": {
      "options": {
        "order": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": "The default order direction of list items when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`."
        },
        "orderBy": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": "When using an object list the list items will be ordered by this element's values. If `storeOrder` is defined, `orderBy` will be equal to that unless specified otherwise."
        }
      },
      "methods": {
        "refreshOrderStore": {
          "public": false,
          "returns": "void",
          "description": "Helper method used to refresh the element's value which stores the order."
        }
      }
    }
  },
  "path": {
    "base": {
      "computed": {
        "parent": {
          "public": false,
          "description": ""
        },
        "path": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The path of the element using dot `.` syntax."
        },
        "flat": {
          "public": false,
          "description": ""
        }
      }
    },
    "group": {
      "computed": {
        "path": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The path of the element using dot `.` syntax."
        },
        "flat": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "placeholder": {
    "base": {
      "options": {
        "placeholder": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The placeholder of the element."
        }
      }
    }
  },
  "prototype": {
    "base": {
      "computed": {
        "prototype": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The schema of a child."
        },
        "isObject": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the list items are objects."
        }
      }
    },
    "multifile": {
      "options": {
        "auto": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "object": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "file": {
          "public": false,
          "types": [
            "object"
          ],
          "description": ""
        },
        "storeFile": {
          "public": false,
          "types": [
            "string"
          ],
          "description": ""
        },
        "fields": {
          "public": false,
          "types": [
            "object"
          ],
          "description": ""
        }
      },
      "computed": {
        "prototype": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The schema of a child."
        },
        "isObject": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the list items are objects."
        }
      }
    },
    "gallery": {
      "options": {
        "auto": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "object": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "file": {
          "public": false,
          "types": [
            "object"
          ],
          "description": ""
        },
        "storeFile": {
          "public": false,
          "types": [
            "string"
          ],
          "description": ""
        },
        "fields": {
          "public": false,
          "types": [
            "object"
          ],
          "description": ""
        }
      },
      "computed": {
        "prototype": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The schema of a child."
        },
        "isObject": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the list items are objects."
        }
      }
    }
  },
  "radio": {
    "base": {
      "options": {
        "fieldName": {
          "public": true,
          "default": "\"=name\"",
          "types": [
            "string"
          ],
          "description": "Name of the input field."
        }
      },
      "methods": {
        "check": {
          "public": true,
          "returns": "void",
          "description": "Checks the radio.",
          "params": {
            "triggerChange": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the element should trigger `change` event"
            }
          }
        },
        "uncheck": {
          "public": true,
          "returns": "void",
          "description": "Unhecks the radio.",
          "params": {
            "triggerChange": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the element should trigger `change` event"
            }
          }
        }
      }
    }
  },
  "radioValue": {
    "base": {
      "options": {
        "radioValue": {
          "public": true,
          "default": "\"1\"",
          "types": [
            "str",
            "num",
            "bool"
          ],
          "description": "Value of the radio button."
        }
      }
    }
  },
  "readonly": {
    "base": {
      "options": {
        "readonly": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "Whether the element should be readonly."
        }
      }
    }
  },
  "removing": {
    "base": {
      "data": {
        "removing": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "request": {
    "base": {
      "data": {
        "request": {
          "public": false,
          "description": ""
        },
        "axios": {
          "public": false,
          "description": ""
        }
      },
      "computed": {
        "uploading": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "required": {
    "base": {
      "options": {
        "required": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "Determines whether `required` rules should be added to address fields. Default: `false`"
        }
      }
    }
  },
  "select": {
    "base": {
      "methods": {
        "select": {
          "public": true,
          "returns": "void",
          "description": "Selects an option.",
          "params": {
            "option": {
              "types": [
                "str",
                "num"
              ],
              "required": false,
              "description": "the key of option to select."
            }
          }
        },
        "deselect": {
          "public": true,
          "returns": "void",
          "description": "Deselects an option.",
          "params": {
            "option": {
              "types": [
                "str",
                "num"
              ],
              "required": false,
              "description": "the key of option to deselect."
            }
          }
        }
      }
    }
  },
  "slots": {
    "base": {
      "options": {
        "before": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
        },
        "between": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
        },
        "after": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
        },
        "slots": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
        }
      }
    }
  },
  "sort": {
    "base": {
      "options": {
        "sort": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "Whether the list items can be sorted by drag n drop."
        }
      },
      "computed": {
        "sortable": {
          "public": false,
          "description": ""
        }
      },
      "methods": {
        "handleSort": {
          "public": true,
          "description": "Triggered when the user changes the order of the list items.",
          "params": {
            "indexes": {
              "types": [
                "object"
              ],
              "required": false,
              "description": "an object containing `newIndex` and `oldIndex`."
            }
          }
        }
      }
    }
  },
  "static": {
    "base": {
      "options": {
        "wrap": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the content should be rendered in a standard element layout."
        }
      },
      "computed": {
        "content": {
          "public": true,
          "types": [
            "obj",
            "str"
          ],
          "description": "Content to be rendered. Either a string, HTML or a Vue component."
        },
        "isHtml": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if HTML content should be rendered for the element."
        }
      }
    }
  },
  "storeOrder": {
    "base": {
      "options": {
        "storeOrder": {
          "public": true,
          "default": "null",
          "types": [
            "string"
          ],
          "description": "The name of the element which should contain the order of the list item in case of an object list."
        }
      }
    }
  },
  "text": {
    "base": {
      "options": {
        "text": {
          "public": false,
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    }
  },
  "toggle": {
    "base": {
      "methods": {
        "check": {
          "public": true,
          "returns": "void",
          "description": "Checks the checkbox.",
          "params": {
            "triggerChange": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the element should trigger `change` event"
            }
          }
        },
        "uncheck": {
          "public": true,
          "returns": "void",
          "description": "Unhecks the checkbox.",
          "params": {
            "triggerChange": {
              "types": [
                "boolean"
              ],
              "required": false,
              "description": "whether the element should trigger `change` event"
            }
          }
        }
      }
    }
  },
  "trix": {
    "base": {
      "options": {
        "accept": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "Accepted attachment extensions. Example: `['jpeg', 'png', 'gif']`."
        },
        "acceptMimes": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "Accepted attachment mime types. Example: `['image/jpeg', 'image/png', 'image/gif']`."
        },
        "endpoint": {
          "public": true,
          "default": "\"...\"",
          "types": [
            "string"
          ],
          "description": "Endpoint to be called to upload attachments. Defaults to config's `config.endpoints.elements`<br>`.trix.attachment`."
        }
      }
    }
  },
  "validation": {
    "base": {
      "data": {
        "state": {
          "public": false,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element states."
        },
        "Validators": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "An array containing all the validators of the element."
        },
        "messageBag": {
          "public": true,
          "default": "{MessageBag}",
          "types": [
            "MessageBag"
          ],
          "description": "Message bag service."
        }
      },
      "options": {
        "rules": {
          "public": true,
          "types": [
            "array",
            "string",
            "object"
          ],
          "description": "Returns element rules"
        },
        "messages": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Overrides default validation rule [messages](validation#custom-messages)."
        },
        "displayError": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element should display it's first error, if any."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "List of errors of failing rules."
        },
        "error": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The first error that should be displayed under the element."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "dirt": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as non dirty."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Set the validated state to false."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes messageBag service."
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    },
    "list": {
      "data": {
        "state": {
          "public": false,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element states."
        },
        "Validators": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "An array containing all the validators of the element."
        },
        "messageBag": {
          "public": true,
          "default": "{MessageBag}",
          "types": [
            "MessageBag"
          ],
          "description": "Message bag service."
        }
      },
      "options": {
        "rules": {
          "public": true,
          "types": [
            "array",
            "string",
            "object"
          ],
          "description": "Returns element rules"
        },
        "messages": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Overrides default validation rule [messages](validation#custom-messages)."
        },
        "displayError": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element should display it's first error, if any."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "validatorErrors": {
          "public": false,
          "description": ""
        },
        "childrenErrors": {
          "public": false,
          "description": ""
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "List of errors of failing rules."
        },
        "error": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The element's error."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": "Validates the element."
        },
        "validateValidators": {
          "public": false,
          "returns": "void",
          "description": "Validates the element."
        },
        "validateChildren": {
          "public": false,
          "returns": "void",
          "description": "Validates each children."
        },
        "dirt": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Cleans the element."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Resets validators for children."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes messageBag service."
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    },
    "multilingual": {
      "data": {
        "state": {
          "public": false,
          "description": ""
        },
        "Validators": {
          "public": false,
          "description": ""
        },
        "messageBag": {
          "public": true,
          "default": "{MessageBag}",
          "types": [
            "MessageBag"
          ],
          "description": "Message bag service."
        }
      },
      "computed": {
        "rules": {
          "public": false,
          "description": ""
        },
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "errors": {
          "public": false,
          "description": ""
        },
        "error": {
          "public": false,
          "description": ""
        }
      },
      "options": {
        "messages": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Overrides default validation rule [messages](validation#custom-messages)."
        },
        "displayError": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element should display it's first error, if any."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "validateLanguage": {
          "public": false,
          "description": ""
        },
        "dirt": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as non dirty."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Set the validated state to false."
        },
        "initState": {
          "public": false,
          "description": ""
        },
        "initMessageBag": {
          "public": false,
          "description": ""
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    },
    "object": {
      "data": {
        "messageBag": {
          "public": true,
          "default": "{MessageBag}",
          "types": [
            "MessageBag"
          ],
          "description": "Message bag service."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "List of errors of failing rules."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": "Validates the element."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Cleans the element."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Resets validators for children."
        },
        "initMessageBag": {
          "public": false,
          "description": ""
        }
      }
    },
    "slider": {
      "data": {
        "state": {
          "public": false,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element states."
        },
        "Validators": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "An array containing all the validators of the element."
        },
        "messageBag": {
          "public": true,
          "default": "{MessageBag}",
          "types": [
            "MessageBag"
          ],
          "description": "Message bag service."
        }
      },
      "options": {
        "rules": {
          "public": true,
          "types": [
            "array",
            "string",
            "object"
          ],
          "description": "Returns element rules"
        },
        "messages": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Overrides default validation rule [messages](validation#custom-messages)."
        },
        "displayError": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element should display it's first error, if any."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending` or `debouncing`."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "List of errors of failing rules."
        },
        "error": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The first error that should be displayed under the element."
        }
      },
      "methods": {
        "validate": {
          "public": false,
          "description": ""
        },
        "dirt": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as non dirty."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Set the validated state to false."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes messageBag service."
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    },
    "file": {
      "data": {
        "state": {
          "public": false,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element states."
        },
        "Validators": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "An array containing all the validators of the element."
        },
        "messageBag": {
          "public": true,
          "default": "{MessageBag}",
          "types": [
            "MessageBag"
          ],
          "description": "Message bag service."
        }
      },
      "options": {
        "rules": {
          "public": true,
          "types": [
            "array",
            "string",
            "object"
          ],
          "description": "Returns element rules"
        },
        "messages": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Overrides default validation rule [messages](validation#custom-messages)."
        },
        "displayError": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element should display it's first error, if any."
        }
      },
      "computed": {
        "dirty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value has been modified by the user."
        },
        "validated": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's input has already been validated at least once."
        },
        "invalid": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any failing rules."
        },
        "pending": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has any async rules in progress."
        },
        "debouncing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has an ongoing debounce."
        },
        "busy": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is `pending`, `debouncing` or `uploading`."
        },
        "errors": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "List of errors of failing rules."
        },
        "error": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The first error that should be displayed under the element."
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": "Validates the element. File element will only validate for `min`, `max`, `between`, `size`, `mimetypes` and `mimes` rules before the temporary files are uploaded."
        },
        "dirt": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as dirty."
        },
        "clean": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as non dirty."
        },
        "resetValidators": {
          "public": true,
          "returns": "void",
          "description": "Set the validated state to false."
        },
        "initMessageBag": {
          "public": false,
          "returns": "void",
          "description": "Initalizes messageBag service."
        },
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    }
  },
  "value": {
    "base": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Helper property used for tracking the field's value."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "checkbox": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Helper property used for tracking the field's value."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "checkboxgroup": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Helper property used for tracking the field's value."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "date": {
      "computed": {
        "value": {
          "public": false,
          "description": ""
        },
        "model": {
          "public": false,
          "description": ""
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "dates": {
      "computed": {
        "value": {
          "public": false,
          "description": ""
        },
        "model": {
          "public": false,
          "description": ""
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "list": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "multilingual": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Helper property used for tracking the field's value."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "select": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": false,
          "description": ""
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "multiselect": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Helper property used for tracking the field's value."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "object": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "radio": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "The value of the element."
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Helper property used for tracking the field's value."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "file": {
      "computed": {
        "value": {
          "public": false,
          "description": ""
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Helper property used for tracking the field's value."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    },
    "location": {
      "computed": {
        "value": {
          "public": false,
          "description": ""
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": "Helper property used for tracking the field's value."
        }
      },
      "data": {
        "previousValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element previous value."
        },
        "currentValue": {
          "public": true,
          "default": "null",
          "types": [
            "object"
          ],
          "description": "Helper property used to store the element value."
        }
      }
    }
  },
  "view": {
    "base": {
      "data": {
        "hidden": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
        },
        "active": {
          "public": true,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
        }
      },
      "computed": {
        "visible": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
        }
      },
      "methods": {
        "hide": {
          "public": true,
          "returns": "void",
          "description": "Sets the `hidden` property of the element to `false`."
        },
        "show": {
          "public": true,
          "returns": "void",
          "description": "Sets the `hidden` property of the element to `true`."
        },
        "activate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `true`."
        },
        "deactivate": {
          "public": false,
          "returns": "void",
          "description": "Sets the `active` property of the element to `false`."
        }
      }
    }
  },
  "watchPrototype": {
    "base": {}
  }
}