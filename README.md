# UBL model generator

Generates typesafe, commented, cardinality aware typescript interface models from UBL schema.

# Modules
- **ubl-model-generator** - generates ubl model code
- **ubl-model-library** - pre-generated ubl model and example


# How to Use

## Generate the model files

Change directory to generator `cd ubl-model-generator` and then:

    npm i
    npm run start

to run the generator and writes files in `ubl-model-library/src/ubl-model`.


## Run example

Change directory to library `cd ubl-model-library` and then:

    npm i
    npm run start
    
to run the example from `ubl-model-library/example`.


## Example Usage

    const model = json['Invoice'][0] as Invoice
    console.log('ID:', model.ID?.[0]?._)


# UBL JSON Schema

## Documentation (JSON Alternative Representation)
- https://docs.oasis-open.org/ubl/UBL-2.1-JSON/v1.0/UBL-2.1-JSON-v1.0.html 
- https://docs.oasis-open.org/ubl/UBL-2.2-JSON/v1.0/UBL-2.2-JSON-v1.0.html
- https://docs.oasis-open.org/ubl/UBL-2.3-JSON/v1.0/UBL-2.3-JSON-v1.0.html

## XSD Schemas Source

The files included in `ubl-model-generator/ubl-schema` were downloaded from:

- https://docs.oasis-open.org/ubl/prd3-UBL-2.1/UBL-2.1-PRD3-2013-02-23.zip
- https://docs.oasis-open.org/ubl/csprd02-UBL-2.2/UBL-2.2.zip
- https://docs.oasis-open.org/ubl/csprd02-UBL-2.3/UBL-2.3.zip

Note that there are also JSON schemas (not used as they have fewer details):

- https://docs.oasis-open.org/ubl/UBL-2.2-JSON/v1.0/cnd01/UBL-2.2-JSON-v1.0-cnd01.zip
- https://docs.oasis-open.org/ubl/UBL-2.1-JSON/v1.0/cnd02/UBL-2.1-JSON-v1.0-cnd02.zip
- https://docs.oasis-open.org/ubl/UBL-2.3-JSON/v1.0/cnd01/UBL-2.3-JSON-v1.0-cnd01.zip


## Example JSON documents

- https://docs.oasis-open.org/ubl/UBL-2.1-JSON/v1.0/cnd02/json/
- https://docs.oasis-open.org/ubl/UBL-2.2-JSON/v1.0/cnd01/json/
- https://docs.oasis-open.org/ubl/UBL-2.3-JSON/v1.0/cnd01/json/ 



https://github.com/phax/ph-ubl/tree/master/ph-ubl23-codelists/src/main/resources/codelists/default
