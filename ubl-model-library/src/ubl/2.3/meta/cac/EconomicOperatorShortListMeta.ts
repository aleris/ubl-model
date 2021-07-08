import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { PartyType } from './PartyMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaLimitationDescription = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.LimitationDescription,
  'LimitationDescription',
  'Limitation Description',
  TextType.name,
  'Text describing the criteria used to restrict the number of candidates.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaExpectedQuantity = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.ExpectedQuantity,
  'ExpectedQuantity',
  'Expected Quantity',
  QuantityType.name,
  'The number of economic operators expected to be on the short list.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaMaximumQuantity = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  QuantityType.name,
  'The maximum number of economic operators on the short list.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaMinimumQuantity = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  QuantityType.name,
  'The minimum number of economic operators on the short list.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EconomicOperatorShortListFieldMetaPreSelectedParty = new FieldMeta<EconomicOperatorShortListField>(
  EconomicOperatorShortListField.PreSelectedParty,
  'PreSelectedParty',
  'Pre Selected Party',
  PartyType.name,
  'The parties pre-selected allowed to submit tenders in a negotiated procedure. Negotiated procedure is a type of procedure where the contracting authorities can set the parties to be invited in the procurement project',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const EconomicOperatorShortListType: Type<EconomicOperatorShortListField> = {
  name: 'EconomicOperatorShortList',
  label: 'Economic Operator Short List',
  module: TypeModule.cac,
  definition: 'A class to provide information about the preselection of a short list of economic operators for consideration as possible candidates in a tendering process.',
  fields: EconomicOperatorShortListFieldMap,
}
