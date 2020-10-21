import { FieldMeta } from '../../FieldMeta'

export enum PromotionalEventField {
  PromotionalEventTypeCode = 'PromotionalEventTypeCode',
  SubmissionDate = 'SubmissionDate',
  FirstShipmentAvailibilityDate = 'FirstShipmentAvailibilityDate',
  LatestProposalAcceptanceDate = 'LatestProposalAcceptanceDate',
  PromotionalSpecification = 'PromotionalSpecification'
}

export const PromotionalEventFieldMetaPromotionalEventTypeCode = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.PromotionalEventTypeCode,
  'PromotionalEventTypeCode',
  'Promotional Event Type Code',
  'Code',
  'A code signifying the type of this promotional event. Examples can be: Holiday, Seasonal Event, Store Closing, Trade Item Introduction',
  '1',
  undefined,
  undefined
)

export const PromotionalEventFieldMetaSubmissionDate = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.SubmissionDate,
  'SubmissionDate',
  'Submission',
  'Date',
  'The date on which a proposal for this promotional event was submitted.',
  '0..1',
  undefined,
  undefined
)

export const PromotionalEventFieldMetaFirstShipmentAvailibilityDate = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.FirstShipmentAvailibilityDate,
  'FirstShipmentAvailibilityDate',
  'First Shipment Availibility Date',
  'Date',
  'The first day that products will be available to ship from buyer to seller if the proposal for this promotional event is accepted.',
  '0..1',
  undefined,
  undefined
)

export const PromotionalEventFieldMetaLatestProposalAcceptanceDate = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.LatestProposalAcceptanceDate,
  'LatestProposalAcceptanceDate',
  'Proposal Acceptance Date',
  'Date',
  'The deadline for acceptance of this promotional event.',
  '0..1',
  undefined,
  undefined
)

export const PromotionalEventFieldMetaPromotionalSpecification = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.PromotionalSpecification,
  'PromotionalSpecification',
  'Promotional Specification',
  'PromotionalSpecification',
  'A specification for a promotional event.',
  '1..n',
  undefined,
  undefined
)

export class PromotionalEventFieldMeta {
  public static readonly PromotionalEventTypeCode = PromotionalEventFieldMetaPromotionalEventTypeCode
  public static readonly SubmissionDate = PromotionalEventFieldMetaSubmissionDate
  public static readonly FirstShipmentAvailibilityDate = PromotionalEventFieldMetaFirstShipmentAvailibilityDate
  public static readonly LatestProposalAcceptanceDate = PromotionalEventFieldMetaLatestProposalAcceptanceDate
  public static readonly PromotionalSpecification = PromotionalEventFieldMetaPromotionalSpecification
}

export const PromotionalEventFieldMap = new Map([
  [PromotionalEventField.PromotionalEventTypeCode, PromotionalEventFieldMetaPromotionalEventTypeCode],
  [PromotionalEventField.SubmissionDate, PromotionalEventFieldMetaSubmissionDate],
  [PromotionalEventField.FirstShipmentAvailibilityDate, PromotionalEventFieldMetaFirstShipmentAvailibilityDate],
  [PromotionalEventField.LatestProposalAcceptanceDate, PromotionalEventFieldMetaLatestProposalAcceptanceDate],
  [PromotionalEventField.PromotionalSpecification, PromotionalEventFieldMetaPromotionalSpecification]
])
