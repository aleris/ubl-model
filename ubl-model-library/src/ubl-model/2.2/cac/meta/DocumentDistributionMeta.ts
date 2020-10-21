import { FieldMeta } from '../../FieldMeta'

export enum DocumentDistributionField {
  DocumentTypeCode = 'DocumentTypeCode',
  PrintQualifier = 'PrintQualifier',
  MaximumCopiesNumeric = 'MaximumCopiesNumeric',
  MaximumOriginalsNumeric = 'MaximumOriginalsNumeric',
  Party = 'Party'
}

export const DocumentDistributionFieldMetaDocumentTypeCode = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.DocumentTypeCode,
  'DocumentTypeCode',
  'Document Type Code',
  'Code',
  'The type of document, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaPrintQualifier = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.PrintQualifier,
  'PrintQualifier',
  'Qualifier',
  'Text',
  'Text describing the interested party\'s distribution rights.',
  '1',
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaMaximumCopiesNumeric = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.MaximumCopiesNumeric,
  'MaximumCopiesNumeric',
  'Copies',
  'Numeric',
  'The maximum number of printed copies of the document that the interested party is allowed to make.',
  '0..1',
  undefined,
  undefined
)

export const DocumentDistributionFieldMetaMaximumOriginalsNumeric = new FieldMeta<DocumentDistributionField>(
  DocumentDistributionField.MaximumOriginalsNumeric,
  'MaximumOriginalsNumeric',
  'Originals',
  'Numeric',
  'The maximum number of printed originals of the document that the interested party is allowed to make.',
  '0..1',
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
  undefined,
  undefined
)

export class DocumentDistributionFieldMeta {
  public static readonly DocumentTypeCode = DocumentDistributionFieldMetaDocumentTypeCode
  public static readonly PrintQualifier = DocumentDistributionFieldMetaPrintQualifier
  public static readonly MaximumCopiesNumeric = DocumentDistributionFieldMetaMaximumCopiesNumeric
  public static readonly MaximumOriginalsNumeric = DocumentDistributionFieldMetaMaximumOriginalsNumeric
  public static readonly Party = DocumentDistributionFieldMetaParty
}

export const DocumentDistributionFieldMap = new Map([
  [DocumentDistributionField.DocumentTypeCode, DocumentDistributionFieldMetaDocumentTypeCode],
  [DocumentDistributionField.PrintQualifier, DocumentDistributionFieldMetaPrintQualifier],
  [DocumentDistributionField.MaximumCopiesNumeric, DocumentDistributionFieldMetaMaximumCopiesNumeric],
  [DocumentDistributionField.MaximumOriginalsNumeric, DocumentDistributionFieldMetaMaximumOriginalsNumeric],
  [DocumentDistributionField.Party, DocumentDistributionFieldMetaParty]
])
