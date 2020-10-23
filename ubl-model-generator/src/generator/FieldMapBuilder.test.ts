import { FieldMapBuilder } from './FieldMapBuilder'
import { UblSchema } from './UblSchema'
import { TypeDictionary } from './TypeDictionary'
import { TypeResolver } from './TypeResolver'
import { AggregateTypesReader } from './aggregate/AggregateTypesReader'
import { UblModule } from './UblModule'

describe('FieldMapBuilder', () => {
  test('build builds map', async () => {
    const ublSchema = new UblSchema('2.2')
    const typeDictionary = await new TypeDictionary(ublSchema).loadFromSchema()
    const typeResolver = new TypeResolver(typeDictionary)
    const aggregateTypesReader = new AggregateTypesReader(ublSchema, typeResolver)
    const refTypes = await aggregateTypesReader.readAllTypes()
    const mapBuilder = new FieldMapBuilder(refTypes, typeResolver)
    const invoiceType = await aggregateTypesReader.readTypes(UblModule.doc, 'maindoc/UBL-Invoice')
    const map = await mapBuilder.build(invoiceType[0])
    expect(map["doc:Invoice"]).toBeDefined()
    expect(map["doc:Invoice"]).toHaveLength(54)
    expect(map["doc:Invoice"]).toContainEqual([ 'cbc:ID', '1' ])
    expect(map["doc:Invoice"]).toContainEqual([ 'cac:InvoicePeriod', '0..n', 'cac:Period' ])
    expect(map["cac:Party"]).toContainEqual([ 'cac:PartyIdentification', '0..n', 'cac:PartyIdentification' ])
  })

  test('buildForAll builds map', async () => {
    const ublSchema = new UblSchema('2.2')
    const typeDictionary = await new TypeDictionary(ublSchema).loadFromSchema()
    const typeResolver = new TypeResolver(typeDictionary)
    const aggregateTypesReader = new AggregateTypesReader(ublSchema, typeResolver)
    const refTypes = await aggregateTypesReader.readAllTypes()
    const mapBuilder = new FieldMapBuilder(refTypes, typeResolver)
    const invoiceType = await aggregateTypesReader.readTypes(UblModule.doc, 'maindoc/UBL-Invoice')
    const creditNodeType = await aggregateTypesReader.readTypes(UblModule.doc, 'maindoc/UBL-CreditNote')
    const map = await mapBuilder.buildForAll([invoiceType[0], creditNodeType[0]])
    expect(map["doc:Invoice"]).toBeDefined()
    expect(map["doc:Invoice"]).toHaveLength(54)
    expect(map["doc:Invoice"]).toContainEqual([ 'cbc:ID', '1' ])
    expect(map["doc:Invoice"]).toContainEqual([ 'cac:InvoicePeriod', '0..n', 'cac:Period' ])
    expect(map["cac:Party"]).toContainEqual([ 'cac:PartyIdentification', '0..n', 'cac:PartyIdentification' ])
    expect(map["doc:CreditNote"]).toBeDefined()
    expect(map["doc:CreditNote"]).toHaveLength(54)
    expect(map["doc:CreditNote"]).toContainEqual([ 'cbc:ID', '1' ])
  })
})
