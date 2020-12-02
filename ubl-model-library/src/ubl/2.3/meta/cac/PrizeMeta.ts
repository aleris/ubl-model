import { FieldMeta } from '../FieldMeta'

export enum PrizeField {
  UBLExtensions = 'UBLExtensions',
  PreviousRankNumberNumeric = 'PreviousRankNumberNumeric',
  PreviousCancellationReasonValueAmount = 'PreviousCancellationReasonValueAmount',
  PreviousCancellationReasonDescription = 'PreviousCancellationReasonDescription'
}

export const PrizeFieldMetaUBLExtensions = new FieldMeta<PrizeField>(
  PrizeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PrizeFieldMetaPreviousRankNumberNumeric = new FieldMeta<PrizeField>(
  PrizeField.PreviousRankNumberNumeric,
  'PreviousRankNumberNumeric',
  'Previous Rank Number',
  'Numeric',
  'The relative position in the competition associated with a prize.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const PrizeFieldMetaPreviousCancellationReasonValueAmount = new FieldMeta<PrizeField>(
  PrizeField.PreviousCancellationReasonValueAmount,
  'PreviousCancellationReasonValueAmount',
  'Previous Cancellation Reason Value',
  'Amount',
  'The monetary value amount of a prize.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const PrizeFieldMetaPreviousCancellationReasonDescription = new FieldMeta<PrizeField>(
  PrizeField.PreviousCancellationReasonDescription,
  'PreviousCancellationReasonDescription',
  'Previous Cancellation Reason Description',
  'Text',
  'Text providing more information about this prize.',
  '0..n',
  'cbc',
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
