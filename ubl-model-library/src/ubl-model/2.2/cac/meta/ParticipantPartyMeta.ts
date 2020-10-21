import { FieldMeta } from '../../FieldMeta'

export enum ParticipantPartyField {
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

export const ParticipantPartyFieldMetaInitiatingPartyIndicator = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.InitiatingPartyIndicator,
  'InitiatingPartyIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this party is playing the role of the initiator within a transaction (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaPrivatePartyIndicator = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.PrivatePartyIndicator,
  'PrivatePartyIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this party is a private entity (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaPublicPartyIndicator = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.PublicPartyIndicator,
  'PublicPartyIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this party is a public (governmental) entity (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaServiceProviderPartyIndicator = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.ServiceProviderPartyIndicator,
  'ServiceProviderPartyIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this party is a service provider (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaParty = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.Party,
  'Party',
  'Party',
  'Party',
  'The participant party itself.',
  '1',
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaLegalContact = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.LegalContact,
  'LegalContact',
  'Contact',
  'Contact',
  'A legal contact associated to this participant for sending legal notices.',
  '0..1',
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaTechnicalContact = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.TechnicalContact,
  'TechnicalContact',
  'Contact',
  'Contact',
  'A technical contact associated to this participant.',
  '0..1',
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaSupportContact = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.SupportContact,
  'SupportContact',
  'Contact',
  'Contact',
  'A support contact associated to this participant.',
  '0..1',
  undefined,
  undefined
)

export const ParticipantPartyFieldMetaCommercialContact = new FieldMeta<ParticipantPartyField>(
  ParticipantPartyField.CommercialContact,
  'CommercialContact',
  'Contact',
  'Contact',
  'A commercial contact associated to this participant.',
  '0..1',
  undefined,
  undefined
)

export class ParticipantPartyFieldMeta {
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
