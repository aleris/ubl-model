import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContactType } from './ContactMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from './PartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ParticipantPartyField {
  UBLExtensions = 'UBLExtensions',
  InitiatingPartyIndicator = 'InitiatingPartyIndicator',
  PrivatePartyIndicator = 'PrivatePartyIndicator',
  PublicPartyIndicator = 'PublicPartyIndicator',
  ServiceProviderPartyIndicator = 'ServiceProviderPartyIndicator',
  Party = 'Party',
  LegalContact = 'LegalContact',
  TechnicalContact = 'TechnicalContact',
  SupportContact = 'SupportContact',
  CommercialContact = 'CommercialContact'
}

export const ParticipantPartyFieldMetaUBLExtensions = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaInitiatingPartyIndicator = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.InitiatingPartyIndicator,
  'InitiatingPartyIndicator',
  'Initiating Party Indicator',
  IndicatorType.name,
  'An indicator that this party is playing the role of the initiator within a transaction (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaPrivatePartyIndicator = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.PrivatePartyIndicator,
  'PrivatePartyIndicator',
  'Private Party Indicator',
  IndicatorType.name,
  'An indicator that this party is a private entity (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaPublicPartyIndicator = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.PublicPartyIndicator,
  'PublicPartyIndicator',
  'Public Party Indicator',
  IndicatorType.name,
  'An indicator that this party is a public (governmental) entity (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaServiceProviderPartyIndicator = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.ServiceProviderPartyIndicator,
  'ServiceProviderPartyIndicator',
  'Service Provider Party Indicator',
  IndicatorType.name,
  'An indicator that this party is a service provider (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaParty = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.Party,
  'Party',
  'Party',
  PartyType.name,
  'The participant party itself.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaLegalContact = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.LegalContact,
  'LegalContact',
  'Legal Contact',
  ContactType.name,
  'A legal contact associated to this participant for sending legal notices.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaTechnicalContact = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.TechnicalContact,
  'TechnicalContact',
  'Technical Contact',
  ContactType.name,
  'A technical contact associated to this participant.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaSupportContact = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.SupportContact,
  'SupportContact',
  'Support Contact',
  ContactType.name,
  'A support contact associated to this participant.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaCommercialContact = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.CommercialContact,
  'CommercialContact',
  'Commercial Contact',
  ContactType.name,
  'A commercial contact associated to this participant.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ParticipantPartyFieldMeta {
  public static readonly UBLExtensions = ParticipantPartyFieldMetaUBLExtensions
  public static readonly InitiatingPartyIndicator = ParticipantPartyFieldMetaInitiatingPartyIndicator
  public static readonly PrivatePartyIndicator = ParticipantPartyFieldMetaPrivatePartyIndicator
  public static readonly PublicPartyIndicator = ParticipantPartyFieldMetaPublicPartyIndicator
  public static readonly ServiceProviderPartyIndicator = ParticipantPartyFieldMetaServiceProviderPartyIndicator
  public static readonly Party = ParticipantPartyFieldMetaParty
  public static readonly LegalContact = ParticipantPartyFieldMetaLegalContact
  public static readonly TechnicalContact = ParticipantPartyFieldMetaTechnicalContact
  public static readonly SupportContact = ParticipantPartyFieldMetaSupportContact
  public static readonly CommercialContact = ParticipantPartyFieldMetaCommercialContact
}

export const ParticipantPartyFieldMap = new Map([
  [ParticipantPartyField.UBLExtensions, ParticipantPartyFieldMetaUBLExtensions],
  [ParticipantPartyField.InitiatingPartyIndicator, ParticipantPartyFieldMetaInitiatingPartyIndicator],
  [ParticipantPartyField.PrivatePartyIndicator, ParticipantPartyFieldMetaPrivatePartyIndicator],
  [ParticipantPartyField.PublicPartyIndicator, ParticipantPartyFieldMetaPublicPartyIndicator],
  [ParticipantPartyField.ServiceProviderPartyIndicator, ParticipantPartyFieldMetaServiceProviderPartyIndicator],
  [ParticipantPartyField.Party, ParticipantPartyFieldMetaParty],
  [ParticipantPartyField.LegalContact, ParticipantPartyFieldMetaLegalContact],
  [ParticipantPartyField.TechnicalContact, ParticipantPartyFieldMetaTechnicalContact],
  [ParticipantPartyField.SupportContact, ParticipantPartyFieldMetaSupportContact],
  [ParticipantPartyField.CommercialContact, ParticipantPartyFieldMetaCommercialContact]
])

export const ParticipantPartyType: Type<ParticipantPartyField> = {
  name: 'ParticipantParty',
  label: 'Participant Party',
  module: TypeModule.cac,
  definition: 'A class to describe a participant party.',
  fields: ParticipantPartyFieldMap,
}
