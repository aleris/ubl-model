import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CapabilityFieldMetaCapabilityTypeCode = new FieldMeta<CapabilityField>(
  CapabilityField.CapabilityTypeCode,
  'CapabilityTypeCode',
  'Capability Type Code',
  'Code',
  'This class can be used as Financial or Technical capabilities. For instance, "Turnover" or "Qualified Engineers" are two possible codes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CapabilityFieldMetaDescription = new FieldMeta<CapabilityField>(
  CapabilityField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this capability.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const CapabilityFieldMetaValueAmount = new FieldMeta<CapabilityField>(
  CapabilityField.ValueAmount,
  'ValueAmount',
  'Value',
  'Amount',
  'A monetary amount as a measure of this capability.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CapabilityFieldMetaValueQuantity = new FieldMeta<CapabilityField>(
  CapabilityField.ValueQuantity,
  'ValueQuantity',
  'Value Quantity',
  'Quantity',
  'A quantity as a measure of this capability.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CapabilityFieldMetaEvidenceSupplied = new FieldMeta<CapabilityField>(
  CapabilityField.EvidenceSupplied,
  'EvidenceSupplied',
  'Evidence Supplied',
  'EvidenceSupplied',
  'The evidence that supports the capability claim.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CapabilityFieldMetaValidityPeriod = new FieldMeta<CapabilityField>(
  CapabilityField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'The period of time for which this capability is (or has been) valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CapabilityFieldMetaWebSite = new FieldMeta<CapabilityField>(
  CapabilityField.WebSite,
  'WebSite',
  'Web Site',
  'WebSite',
  'A web site where the capability is detailed.',
  '0..1',
  'cac',
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
