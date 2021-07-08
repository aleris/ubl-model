import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { PromotionalSpecificationType } from './PromotionalSpecificationMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PromotionalEventField {
  UBLExtensions = 'UBLExtensions',
  PromotionalEventTypeCode = 'PromotionalEventTypeCode',
  SubmissionDate = 'SubmissionDate',
  FirstShipmentAvailibilityDate = 'FirstShipmentAvailibilityDate',
  LatestProposalAcceptanceDate = 'LatestProposalAcceptanceDate',
  PromotionalSpecification = 'PromotionalSpecification'
}

export const PromotionalEventFieldMetaUBLExtensions = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PromotionalEventFieldMetaPromotionalEventTypeCode = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.PromotionalEventTypeCode,
  'PromotionalEventTypeCode',
  'Promotional Event Type Code',
  CodeType.name,
  'A code signifying the type of this promotional event. Examples can be: Holiday, Seasonal Event, Store Closing, Trade Item Introduction',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PromotionalEventFieldMetaSubmissionDate = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.SubmissionDate,
  'SubmissionDate',
  'Submission',
  DateType.name,
  'The date on which a proposal for this promotional event was submitted.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PromotionalEventFieldMetaFirstShipmentAvailibilityDate = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.FirstShipmentAvailibilityDate,
  'FirstShipmentAvailibilityDate',
  'First Shipment Availibility Date',
  DateType.name,
  'The first day that products will be available to ship from buyer to seller if the proposal for this promotional event is accepted.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PromotionalEventFieldMetaLatestProposalAcceptanceDate = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.LatestProposalAcceptanceDate,
  'LatestProposalAcceptanceDate',
  'Latest Proposal Acceptance Date',
  DateType.name,
  'The deadline for acceptance of this promotional event.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PromotionalEventFieldMetaPromotionalSpecification = new FieldMeta<PromotionalEventField>(
  PromotionalEventField.PromotionalSpecification,
  'PromotionalSpecification',
  'Promotional Specification',
  PromotionalSpecificationType.name,
  'A specification for a promotional event.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class PromotionalEventFieldMeta {
  public static readonly UBLExtensions = PromotionalEventFieldMetaUBLExtensions
  public static readonly PromotionalEventTypeCode = PromotionalEventFieldMetaPromotionalEventTypeCode
  public static readonly SubmissionDate = PromotionalEventFieldMetaSubmissionDate
  public static readonly FirstShipmentAvailibilityDate = PromotionalEventFieldMetaFirstShipmentAvailibilityDate
  public static readonly LatestProposalAcceptanceDate = PromotionalEventFieldMetaLatestProposalAcceptanceDate
  public static readonly PromotionalSpecification = PromotionalEventFieldMetaPromotionalSpecification
}

export const PromotionalEventFieldMap = new Map([
  [PromotionalEventField.UBLExtensions, PromotionalEventFieldMetaUBLExtensions],
  [PromotionalEventField.PromotionalEventTypeCode, PromotionalEventFieldMetaPromotionalEventTypeCode],
  [PromotionalEventField.SubmissionDate, PromotionalEventFieldMetaSubmissionDate],
  [PromotionalEventField.FirstShipmentAvailibilityDate, PromotionalEventFieldMetaFirstShipmentAvailibilityDate],
  [PromotionalEventField.LatestProposalAcceptanceDate, PromotionalEventFieldMetaLatestProposalAcceptanceDate],
  [PromotionalEventField.PromotionalSpecification, PromotionalEventFieldMetaPromotionalSpecification]
])

export const PromotionalEventType: Type<PromotionalEventField> = {
  name: 'PromotionalEvent',
  label: 'Promotional Event',
  module: TypeModule.cac,
  definition: 'Agree can be renamed as PromotionalEvents',
  fields: PromotionalEventFieldMap,
}
