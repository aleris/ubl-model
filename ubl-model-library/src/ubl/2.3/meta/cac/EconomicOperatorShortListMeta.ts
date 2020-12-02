import { FieldMeta } from '../FieldMeta'

export enum EconomicOperatorShortListField {
  UBLExtensions = 'UBLExtensions',
  LimitationDescription = 'LimitationDescription',
  ExpectedQuantity = 'ExpectedQuantity',
  MaximumQuantity = 'MaximumQuantity',
  MinimumQuantity = 'MinimumQuantity',
  PreSelectedParty = 'PreSelectedParty'
}

export const EconomicOperatorShortListFieldMetaUBLExtensions = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaLimitationDescription = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.LimitationDescription,
  'LimitationDescription',
  'Limitation Description',
  'Text',
  'Text describing the criteria used to restrict the number of candidates.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaExpectedQuantity = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.ExpectedQuantity,
  'ExpectedQuantity',
  'Expected Quantity',
  'Quantity',
  'The number of economic operators expected to be on the short list.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaMaximumQuantity = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  'Quantity',
  'The maximum number of economic operators on the short list.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaMinimumQuantity = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  'Quantity',
  'The minimum number of economic operators on the short list.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaPreSelectedParty = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.PreSelectedParty,
  'PreSelectedParty',
  'Pre Selected Party',
  'Party',
  'The parties pre-selected allowed to submit tenders in a negotiated procedure. Negotiated procedure is a type of procedure where the contracting authorities can set the parties to be invited in the procurement project',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class EconomicOperatorShortListFieldMeta {
  public static readonly UBLExtensions = EconomicOperatorShortListFieldMetaUBLExtensions
  public static readonly LimitationDescription = EconomicOperatorShortListFieldMetaLimitationDescription
  public static readonly ExpectedQuantity = EconomicOperatorShortListFieldMetaExpectedQuantity
  public static readonly MaximumQuantity = EconomicOperatorShortListFieldMetaMaximumQuantity
  public static readonly MinimumQuantity = EconomicOperatorShortListFieldMetaMinimumQuantity
  public static readonly PreSelectedParty = EconomicOperatorShortListFieldMetaPreSelectedParty
}

export const EconomicOperatorShortListFieldMap = new Map([
  [EconomicOperatorShortListField.UBLExtensions, EconomicOperatorShortListFieldMetaUBLExtensions],
  [EconomicOperatorShortListField.LimitationDescription, EconomicOperatorShortListFieldMetaLimitationDescription],
  [EconomicOperatorShortListField.ExpectedQuantity, EconomicOperatorShortListFieldMetaExpectedQuantity],
  [EconomicOperatorShortListField.MaximumQuantity, EconomicOperatorShortListFieldMetaMaximumQuantity],
  [EconomicOperatorShortListField.MinimumQuantity, EconomicOperatorShortListFieldMetaMinimumQuantity],
  [EconomicOperatorShortListField.PreSelectedParty, EconomicOperatorShortListFieldMetaPreSelectedParty]
])
