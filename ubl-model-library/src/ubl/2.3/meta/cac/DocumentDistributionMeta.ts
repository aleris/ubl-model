import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DocumentDistributionField {
  UBLExtensions = 'UBLExtensions',
  DocumentTypeCode = 'DocumentTypeCode',
  PrintQualifier = 'PrintQualifier',
  MaximumCopiesNumeric = 'MaximumCopiesNumeric',
  MaximumOriginalsNumeric = 'MaximumOriginalsNumeric',
  Party = 'Party'
}

export const DocumentDistributionFieldMetaUBLExtensions = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaDocumentTypeCode = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.DocumentTypeCode,
  'DocumentTypeCode',
  'Document Type Code',
  CodeType.name,
  'The type of document, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaPrintQualifier = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.PrintQualifier,
  'PrintQualifier',
  'Print Qualifier',
  TextType.name,
  'Text describing the interested party\'s distribution rights.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaMaximumCopiesNumeric = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.MaximumCopiesNumeric,
  'MaximumCopiesNumeric',
  'Maximum Copies',
  NumericType.name,
  'The maximum number of printed copies of the document that the interested party is allowed to make.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaMaximumOriginalsNumeric = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.MaximumOriginalsNumeric,
  'MaximumOriginalsNumeric',
  'Maximum Originals',
  NumericType.name,
  'The maximum number of printed originals of the document that the interested party is allowed to make.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaParty = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The interested party to which the document should be distributed.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class DocumentDistributionFieldMeta {
  public static readonly UBLExtensions = DocumentDistributionFieldMetaUBLExtensions
  public static readonly DocumentTypeCode = DocumentDistributionFieldMetaDocumentTypeCode
  public static readonly PrintQualifier = DocumentDistributionFieldMetaPrintQualifier
  public static readonly MaximumCopiesNumeric = DocumentDistributionFieldMetaMaximumCopiesNumeric
  public static readonly MaximumOriginalsNumeric = DocumentDistributionFieldMetaMaximumOriginalsNumeric
  public static readonly Party = DocumentDistributionFieldMetaParty
}

export const DocumentDistributionFieldMap = new Map([
  [DocumentDistributionField.UBLExtensions, DocumentDistributionFieldMetaUBLExtensions],
  [DocumentDistributionField.DocumentTypeCode, DocumentDistributionFieldMetaDocumentTypeCode],
  [DocumentDistributionField.PrintQualifier, DocumentDistributionFieldMetaPrintQualifier],
  [DocumentDistributionField.MaximumCopiesNumeric, DocumentDistributionFieldMetaMaximumCopiesNumeric],
  [DocumentDistributionField.MaximumOriginalsNumeric, DocumentDistributionFieldMetaMaximumOriginalsNumeric],
  [DocumentDistributionField.Party, DocumentDistributionFieldMetaParty]
])

export const DocumentDistributionType: Type<DocumentDistributionField> = {
  name: 'DocumentDistribution',
  label: 'Document Distribution',
  module: TypeModule.cac,
  definition: 'A class to describe the distribution of a document to an interested party.',
  fields: DocumentDistributionFieldMap,
}
