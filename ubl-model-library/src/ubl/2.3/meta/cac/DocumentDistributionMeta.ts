import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaDocumentTypeCode = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.DocumentTypeCode,
  'DocumentTypeCode',
  'Document Type Code',
  'Code',
  'The type of document, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaPrintQualifier = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.PrintQualifier,
  'PrintQualifier',
  'Print Qualifier',
  'Text',
  'Text describing the interested party\'s distribution rights.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaMaximumCopiesNumeric = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.MaximumCopiesNumeric,
  'MaximumCopiesNumeric',
  'Maximum Copies',
  'Numeric',
  'The maximum number of printed copies of the document that the interested party is allowed to make.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaMaximumOriginalsNumeric = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.MaximumOriginalsNumeric,
  'MaximumOriginalsNumeric',
  'Maximum Originals',
  'Numeric',
  'The maximum number of printed originals of the document that the interested party is allowed to make.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaParty = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.Party,
  'Party',
  'Party',
  'Party',
  'The interested party to which the document should be distributed.',
  '1',
  'cac',
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
