import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { NumericType } from '../cbc/NumericMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PrizeField {
  UBLExtensions = 'UBLExtensions',
  PreviousRankNumberNumeric = 'PreviousRankNumberNumeric',
  PreviousCancellationReasonValueAmount = 'PreviousCancellationReasonValueAmount',
  PreviousCancellationReasonDescription = 'PreviousCancellationReasonDescription'
}

export const PrizeFieldMetaUBLExtensions = new FieldMeta<PrizeField>(
  PrizeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PrizeFieldMetaPreviousRankNumberNumeric = new FieldMeta<PrizeField>(
  PrizeField.PreviousRankNumberNumeric,
  'PreviousRankNumberNumeric',
  'Previous Rank Number',
  NumericType.name,
  'The relative position in the competition associated with a prize.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PrizeFieldMetaPreviousCancellationReasonValueAmount = new FieldMeta<PrizeField>(
  PrizeField.PreviousCancellationReasonValueAmount,
  'PreviousCancellationReasonValueAmount',
  'Previous Cancellation Reason Value',
  AmountType.name,
  'The monetary value amount of a prize.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PrizeFieldMetaPreviousCancellationReasonDescription = new FieldMeta<PrizeField>(
  PrizeField.PreviousCancellationReasonDescription,
  'PreviousCancellationReasonDescription',
  'Previous Cancellation Reason Description',
  TextType.name,
  'Text providing more information about this prize.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class PrizeFieldMeta {
  public static readonly UBLExtensions = PrizeFieldMetaUBLExtensions
  public static readonly PreviousRankNumberNumeric = PrizeFieldMetaPreviousRankNumberNumeric
  public static readonly PreviousCancellationReasonValueAmount = PrizeFieldMetaPreviousCancellationReasonValueAmount
  public static readonly PreviousCancellationReasonDescription = PrizeFieldMetaPreviousCancellationReasonDescription
}

export const PrizeFieldMap = new Map([
  [PrizeField.UBLExtensions, PrizeFieldMetaUBLExtensions],
  [PrizeField.PreviousRankNumberNumeric, PrizeFieldMetaPreviousRankNumberNumeric],
  [PrizeField.PreviousCancellationReasonValueAmount, PrizeFieldMetaPreviousCancellationReasonValueAmount],
  [PrizeField.PreviousCancellationReasonDescription, PrizeFieldMetaPreviousCancellationReasonDescription]
])

export const PrizeType: Type<PrizeField> = {
  name: 'Prize',
  label: 'Prize',
  module: TypeModule.cac,
  definition: 'A class to describe something valuable offered or striven for in competition.',
  fields: PrizeFieldMap,
}
