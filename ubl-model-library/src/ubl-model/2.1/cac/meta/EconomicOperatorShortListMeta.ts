import { FieldMeta } from '../../FieldMeta'

export enum EconomicOperatorShortListField {
  LimitationDescription = 'LimitationDescription',
  ExpectedQuantity = 'ExpectedQuantity',
  MaximumQuantity = 'MaximumQuantity',
  MinimumQuantity = 'MinimumQuantity',
  PreSelectedParty = 'PreSelectedParty'
}

export const EconomicOperatorShortListFieldMetaLimitationDescription = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.LimitationDescription,
  'LimitationDescription',
  'Description',
  'Text',
  'Text describing the criteria used to restrict the number of candidates.',
  '0..n',
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaExpectedQuantity = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.ExpectedQuantity,
  'ExpectedQuantity',
  'Quantity',
  'Quantity',
  'The number of economic operators expected to be on the short list.',
  '0..1',
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaMaximumQuantity = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.MaximumQuantity,
  'MaximumQuantity',
  'Quantity',
  'Quantity',
  'The maximum number of economic operators on the short list.',
  '0..1',
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaMinimumQuantity = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.MinimumQuantity,
  'MinimumQuantity',
  'Quantity',
  'Quantity',
  'The minimum number of economic operators on the short list.',
  '0..1',
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaPreSelectedParty = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.PreSelectedParty,
  'PreSelectedParty',
  'Party',
  'Party',
  'The parties pre-selected allowed to submit tenders in a negotiated procedure. Negotiated procedure is a type of procedure where the contracting authorities can set the parties to be invited in the procurement project',
  '0..n',
  undefined,
  undefined
)

export class EconomicOperatorShortListFieldMeta {
  public static readonly LimitationDescription = EconomicOperatorShortListFieldMetaLimitationDescription
  public static readonly ExpectedQuantity = EconomicOperatorShortListFieldMetaExpectedQuantity
  public static readonly MaximumQuantity = EconomicOperatorShortListFieldMetaMaximumQuantity
  public static readonly MinimumQuantity = EconomicOperatorShortListFieldMetaMinimumQuantity
  public static readonly PreSelectedParty = EconomicOperatorShortListFieldMetaPreSelectedParty
}

export const EconomicOperatorShortListFieldMap = new Map([
  [EconomicOperatorShortListField.LimitationDescription, EconomicOperatorShortListFieldMetaLimitationDescription],
  [EconomicOperatorShortListField.ExpectedQuantity, EconomicOperatorShortListFieldMetaExpectedQuantity],
  [EconomicOperatorShortListField.MaximumQuantity, EconomicOperatorShortListFieldMetaMaximumQuantity],
  [EconomicOperatorShortListField.MinimumQuantity, EconomicOperatorShortListFieldMetaMinimumQuantity],
  [EconomicOperatorShortListField.PreSelectedParty, EconomicOperatorShortListFieldMetaPreSelectedParty]
])
