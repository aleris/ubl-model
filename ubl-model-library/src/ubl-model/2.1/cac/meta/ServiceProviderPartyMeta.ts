import { FieldMeta } from '../../FieldMeta'

export enum ServiceProviderPartyField {
  ID = 'ID',
  ServiceTypeCode = 'ServiceTypeCode',
  ServiceType = 'ServiceType',
  Party = 'Party',
  SellerContact = 'SellerContact'
}

export const ServiceProviderPartyFieldMetaID = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this service provider.',
  '0..1',
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
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaSellerContact = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.SellerContact,
  'SellerContact',
  'Contact',
  'Contact',
  'The contact for the service provider.',
  '0..1',
  undefined,
  undefined
)

export class ServiceProviderPartyFieldMeta {
  public static readonly ID = ServiceProviderPartyFieldMetaID
  public static readonly ServiceTypeCode = ServiceProviderPartyFieldMetaServiceTypeCode
  public static readonly ServiceType = ServiceProviderPartyFieldMetaServiceType
  public static readonly Party = ServiceProviderPartyFieldMetaParty
  public static readonly SellerContact = ServiceProviderPartyFieldMetaSellerContact
}

export const ServiceProviderPartyFieldMap = new Map([
  [ServiceProviderPartyField.ID, ServiceProviderPartyFieldMetaID],
  [ServiceProviderPartyField.ServiceTypeCode, ServiceProviderPartyFieldMetaServiceTypeCode],
  [ServiceProviderPartyField.ServiceType, ServiceProviderPartyFieldMetaServiceType],
  [ServiceProviderPartyField.Party, ServiceProviderPartyFieldMetaParty],
  [ServiceProviderPartyField.SellerContact, ServiceProviderPartyFieldMetaSellerContact]
])
