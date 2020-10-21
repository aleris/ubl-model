import { FieldMeta } from '../../FieldMeta'

export enum DocumentDistributionField {
  PrintQualifier = 'PrintQualifier',
  MaximumCopiesNumeric = 'MaximumCopiesNumeric',
  Party = 'Party'
}

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
  '1',
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
  public static readonly PrintQualifier = DocumentDistributionFieldMetaPrintQualifier
  public static readonly MaximumCopiesNumeric = DocumentDistributionFieldMetaMaximumCopiesNumeric
  public static readonly Party = DocumentDistributionFieldMetaParty
}

export const DocumentDistributionFieldMap = new Map([
  [DocumentDistributionField.PrintQualifier, DocumentDistributionFieldMetaPrintQualifier],
  [DocumentDistributionField.MaximumCopiesNumeric, DocumentDistributionFieldMetaMaximumCopiesNumeric],
  [DocumentDistributionField.Party, DocumentDistributionFieldMetaParty]
])
