import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContactType } from './ContactMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaID = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this service provider.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaServiceTypeCode = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.ServiceTypeCode,
  'ServiceTypeCode',
  'Service Type Code',
  CodeType.name,
  'The type of service provided, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaServiceType = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.ServiceType,
  'ServiceType',
  'Service Type',
  TextType.name,
  'The type of service provided, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaParty = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The party providing the service.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ServiceProviderPartyFieldMetaSellerContact = new FieldMeta<ServiceProviderPartyField>(
  ServiceProviderPartyField.SellerContact,
  'SellerContact',
  'Seller Contact',
  ContactType.name,
  'The contact for the service provider.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const ServiceProviderPartyType: Type<ServiceProviderPartyField> = {
  name: 'ServiceProviderParty',
  label: 'Service Provider Party',
  module: TypeModule.cac,
  definition: 'A class to describe a party contracting to provide services, such as transportation, finance, etc.',
  fields: ServiceProviderPartyFieldMap,
}
