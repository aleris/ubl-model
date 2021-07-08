import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { EvidenceSuppliedType } from './EvidenceSuppliedMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'
import { WebSiteType } from './WebSiteMeta'

export enum CapabilityField {
  UBLExtensions = 'UBLExtensions',
  CapabilityTypeCode = 'CapabilityTypeCode',
  Description = 'Description',
  ValueAmount = 'ValueAmount',
  ValueQuantity = 'ValueQuantity',
  EvidenceSupplied = 'EvidenceSupplied',
  ValidityPeriod = 'ValidityPeriod',
  WebSite = 'WebSite'
}

export const CapabilityFieldMetaUBLExtensions = new FieldMeta<CapabilityField>(
  CapabilityField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CapabilityFieldMetaCapabilityTypeCode = new FieldMeta<CapabilityField>(
  CapabilityField.CapabilityTypeCode,
  'CapabilityTypeCode',
  'Capability Type Code',
  CodeType.name,
  'This class can be used as Financial or Technical capabilities. For instance, "Turnover" or "Qualified Engineers" are two possible codes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CapabilityFieldMetaDescription = new FieldMeta<CapabilityField>(
  CapabilityField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this capability.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CapabilityFieldMetaValueAmount = new FieldMeta<CapabilityField>(
  CapabilityField.ValueAmount,
  'ValueAmount',
  'Value',
  AmountType.name,
  'A monetary amount as a measure of this capability.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CapabilityFieldMetaValueQuantity = new FieldMeta<CapabilityField>(
  CapabilityField.ValueQuantity,
  'ValueQuantity',
  'Value Quantity',
  QuantityType.name,
  'A quantity as a measure of this capability.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CapabilityFieldMetaEvidenceSupplied = new FieldMeta<CapabilityField>(
  CapabilityField.EvidenceSupplied,
  'EvidenceSupplied',
  'Evidence Supplied',
  EvidenceSuppliedType.name,
  'The evidence that supports the capability claim.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CapabilityFieldMetaValidityPeriod = new FieldMeta<CapabilityField>(
  CapabilityField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period of time for which this capability is (or has been) valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CapabilityFieldMetaWebSite = new FieldMeta<CapabilityField>(
  CapabilityField.WebSite,
  'WebSite',
  'Web Site',
  WebSiteType.name,
  'A web site where the capability is detailed.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class CapabilityFieldMeta {
  public static readonly UBLExtensions = CapabilityFieldMetaUBLExtensions
  public static readonly CapabilityTypeCode = CapabilityFieldMetaCapabilityTypeCode
  public static readonly Description = CapabilityFieldMetaDescription
  public static readonly ValueAmount = CapabilityFieldMetaValueAmount
  public static readonly ValueQuantity = CapabilityFieldMetaValueQuantity
  public static readonly EvidenceSupplied = CapabilityFieldMetaEvidenceSupplied
  public static readonly ValidityPeriod = CapabilityFieldMetaValidityPeriod
  public static readonly WebSite = CapabilityFieldMetaWebSite
}

export const CapabilityFieldMap = new Map([
  [CapabilityField.UBLExtensions, CapabilityFieldMetaUBLExtensions],
  [CapabilityField.CapabilityTypeCode, CapabilityFieldMetaCapabilityTypeCode],
  [CapabilityField.Description, CapabilityFieldMetaDescription],
  [CapabilityField.ValueAmount, CapabilityFieldMetaValueAmount],
  [CapabilityField.ValueQuantity, CapabilityFieldMetaValueQuantity],
  [CapabilityField.EvidenceSupplied, CapabilityFieldMetaEvidenceSupplied],
  [CapabilityField.ValidityPeriod, CapabilityFieldMetaValidityPeriod],
  [CapabilityField.WebSite, CapabilityFieldMetaWebSite]
])

export const CapabilityType: Type<CapabilityField> = {
  name: 'Capability',
  label: 'Capability',
  module: TypeModule.cac,
  definition: 'A class to describe a specific capability of an organization.',
  fields: CapabilityFieldMap,
}
