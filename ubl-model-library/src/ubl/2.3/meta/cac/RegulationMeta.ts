import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RegulationField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  LegalReference = 'LegalReference',
  OntologyURI = 'OntologyURI'
}

export const RegulationFieldMetaUBLExtensions = new FieldMeta<RegulationField>(
  RegulationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RegulationFieldMetaName = new FieldMeta<RegulationField>(
  RegulationField.Name,
  'Name',
  'Name',
  TextType.name,
  'A name for this regulation.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RegulationFieldMetaLegalReference = new FieldMeta<RegulationField>(
  RegulationField.LegalReference,
  'LegalReference',
  'Legal Reference',
  TextType.name,
  'Text describing a legal reference.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Art. 45 2 b'
)

export const RegulationFieldMetaOntologyURI = new FieldMeta<RegulationField>(
  RegulationField.OntologyURI,
  'OntologyURI',
  'Ontology URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of an ontology related to this regulation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class RegulationFieldMeta {
  public static readonly UBLExtensions = RegulationFieldMetaUBLExtensions
  public static readonly Name = RegulationFieldMetaName
  public static readonly LegalReference = RegulationFieldMetaLegalReference
  public static readonly OntologyURI = RegulationFieldMetaOntologyURI
}

export const RegulationFieldMap = new Map([
  [RegulationField.UBLExtensions, RegulationFieldMetaUBLExtensions],
  [RegulationField.Name, RegulationFieldMetaName],
  [RegulationField.LegalReference, RegulationFieldMetaLegalReference],
  [RegulationField.OntologyURI, RegulationFieldMetaOntologyURI]
])

export const RegulationType: Type<RegulationField> = {
  name: 'Regulation',
  label: 'Regulation',
  module: TypeModule.cac,
  definition: 'A class to describe a regulation.',
  fields: RegulationFieldMap,
}
