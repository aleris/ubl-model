import { FieldMeta } from '../FieldMeta'

export enum RegulationField {
  UBLExtensions = 'UBLExtensions',
  Name = 'Name',
  LegalReference = 'LegalReference',
  OntologyURI = 'OntologyURI'
}

export const RegulationFieldMetaUBLExtensions = new FieldMeta<RegulationField>(
  RegulationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const RegulationFieldMetaName = new FieldMeta<RegulationField>(
  RegulationField.Name,
  'Name',
  'Name',
  'Text',
  'A name for this regulation.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const RegulationFieldMetaLegalReference = new FieldMeta<RegulationField>(
  RegulationField.LegalReference,
  'LegalReference',
  'Legal Reference',
  'Text',
  'Text describing a legal reference.',
  '0..1',
  'cbc',
  undefined,
  'Art. 45 2 b'
)

export const RegulationFieldMetaOntologyURI = new FieldMeta<RegulationField>(
  RegulationField.OntologyURI,
  'OntologyURI',
  'Ontology URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of an ontology related to this regulation.',
  '0..1',
  'cbc',
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
