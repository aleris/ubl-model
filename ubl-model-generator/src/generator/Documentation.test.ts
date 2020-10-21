import { Documentation } from './Documentation'
import * as xml2js from 'xml2js'

const parser = new xml2js.Parser()

describe('Documentation', () => {
  test('fromTypeJsonNode from attribute', async () => {
    const attribute = await parser.parseStringPromise(`
        <xsd:attribute name="currencyCodeListVersionID" type="xsd:normalizedString" use="optional">
           <xsd:annotation>
              <xsd:documentation xml:lang="en">
                 <ccts:UniqueID>UNDT000001-SC3</ccts:UniqueID>
                 <ccts:CategoryCode>SC</ccts:CategoryCode>
                 <ccts:DictionaryEntryName>Amount Currency. Code List Version. Identifier</ccts:DictionaryEntryName>
                 <ccts:Definition>The VersionID of the UN/ECE Rec9 code list.</ccts:Definition>
                 <ccts:ObjectClass>Amount Currency</ccts:ObjectClass>
                 <ccts:PropertyTermName>Code List Version</ccts:PropertyTermName>
                 <ccts:RepresentationTermName>Identifier</ccts:RepresentationTermName>
                 <ccts:PrimitiveType>string</ccts:PrimitiveType>
              </xsd:documentation>
           </xsd:annotation>
        </xsd:attribute>
    `)
    const documentation = Documentation.fromTypeJsonNode(attribute['xsd:attribute'])
    expect(documentation.definition).toEqual('The VersionID of the UN/ECE Rec9 code list.')
  })

  test('fromTypeJsonNode from element with Component', async () => {
    const attribute = await parser.parseStringPromise(`
        <xsd:element ref="cbc:MarkCare" minOccurs="0" maxOccurs="1">
          <xsd:annotation>
             <xsd:documentation>
                <ccts:Component>
                   <ccts:ComponentType>BBIE</ccts:ComponentType>
                   <ccts:DictionaryEntryName>Address. Mark Care. Text</ccts:DictionaryEntryName>
                   <ccts:Definition>The name, expressed as text, of a person or organization at this address into whose care incoming mail is entrusted; corresponds to the printed forms "care of" and "c/o".</ccts:Definition>
                   <ccts:Cardinality>0..1</ccts:Cardinality>
                   <ccts:ObjectClass>Address</ccts:ObjectClass>
                   <ccts:PropertyTerm>Mark Care</ccts:PropertyTerm>
                   <ccts:RepresentationTerm>Text</ccts:RepresentationTerm>
                   <ccts:DataType>Text. Type</ccts:DataType>
                </ccts:Component>
             </xsd:documentation>
          </xsd:annotation>
        </xsd:element>
    `)
    const documentation = Documentation.fromTypeJsonNode(attribute['xsd:element'])
    expect(documentation.definition).toEqual('The name, expressed as text, of a person or organization at this address into whose care incoming mail is entrusted; corresponds to the printed forms "care of" and "c/o".')
    expect(documentation.cardinality).toEqual('0..1')
  })

  test('fromTypeJsonNode from element with text definition only', async () => {
    const attribute = await parser.parseStringPromise(`
        <xsd:element ref="ExtensionAgencyID" minOccurs="0" maxOccurs="1">
          <xsd:annotation>
            <xsd:documentation>
              An agency that maintains one or more Extensions.
            </xsd:documentation>
          </xsd:annotation>
        </xsd:element>
    `)
    const documentation = Documentation.fromTypeJsonNode(attribute['xsd:element'])
    expect(documentation.definition).toEqual('An agency that maintains one or more Extensions.')
  })
})
