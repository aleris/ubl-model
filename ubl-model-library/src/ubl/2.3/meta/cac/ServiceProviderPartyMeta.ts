import { FieldMeta } from '../FieldMeta'

export enum ServiceProviderPartyField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ServiceTypeCode = 'ServiceTypeCode',
  ServiceType = 'ServiceType',
  Party = 'Party',
  SellerContact = 'SellerContact'
}

export const ServiceProviderPartyFieldMetaUBLExtensions = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaID = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this service provider.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaServiceTypeCode = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.ServiceTypeCode,
  'ServiceTypeCode',
  'Service Type Code',
  'Code',
  'The type of service provided, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaServiceType = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.ServiceType,
  'ServiceType',
  'Service Type',
  'Text',
  'The type of service provided, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaParty = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.Party,
  'Party',
  'Party',
  'Party',
  'The party providing the service.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaSellerContact = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.SellerContact,
  'SellerContact',
  'Seller Contact',
  'Contact',
  'The contact for the service provider.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class ServiceProviderPartyFieldMeta {
  public static readonly UBLExtensions = ServiceProviderPartyFieldMetaUBLExtensions
  public static readonly ID = ServiceProviderPartyFieldMetaID
  public static readonly ServiceTypeCode = ServiceProviderPartyFieldMetaServiceTypeCode
  public static readonly ServiceType = ServiceProviderPartyFieldMetaServiceType
  public static readonly Party = ServiceProviderPartyFieldMetaParty
  public static readonly SellerContact = ServiceProviderPartyFieldMetaSellerContact
}

export const ServiceProviderPartyFieldMap = new Map([
  [ServiceProviderPartyField.UBLExtensions, ServiceProviderPartyFieldMetaUBLExtensions],
  [ServiceProviderPartyField.ID, ServiceProviderPartyFieldMetaID],
  [ServiceProviderPartyField.ServiceTypeCode, ServiceProviderPartyFieldMetaServiceTypeCode],
  [ServiceProviderPartyField.ServiceType, ServiceProviderPartyFieldMetaServiceType],
  [ServiceProviderPartyField.Party, ServiceProviderPartyFieldMetaParty],
  [ServiceProviderPartyField.SellerContact, ServiceProviderPartyFieldMetaSellerContact]
])
