import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { AuthorizationType } from './AuthorizationMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ContactType } from './ContactMeta'
import { FinancialAccountType } from './FinancialAccountMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LanguageType } from './LanguageMeta'
import { LocationType } from './LocationMeta'
import { PartyIdentificationType } from './PartyIdentificationMeta'
import { PartyLegalEntityType } from './PartyLegalEntityMeta'
import { PartyNameType } from './PartyNameMeta'
import { PartyTaxSchemeType } from './PartyTaxSchemeMeta'
import { PersonType } from './PersonMeta'
import { PowerOfAttorneyType } from './PowerOfAttorneyMeta'
import { ServiceProviderPartyType } from './ServiceProviderPartyMeta'
import { SocialMediaProfileType } from './SocialMediaProfileMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'
import { WebSiteType } from './WebSiteMeta'

export enum PartyField {
  UBLExtensions = 'UBLExtensions',
  MarkCareIndicator = 'MarkCareIndicator',
  MarkAttentionIndicator = 'MarkAttentionIndicator',
  WebsiteURI = 'WebsiteURI',
  LogoReferenceID = 'LogoReferenceID',
  EndpointID = 'EndpointID',
  IndustryClassificationCode = 'IndustryClassificationCode',
  PartyIdentification = 'PartyIdentification',
  PartyName = 'PartyName',
  Language = 'Language',
  PostalAddress = 'PostalAddress',
  PhysicalLocation = 'PhysicalLocation',
  PartyTaxScheme = 'PartyTaxScheme',
  PartyLegalEntity = 'PartyLegalEntity',
  Contact = 'Contact',
  Person = 'Person',
  AgentParty = 'AgentParty',
  ServiceProviderParty = 'ServiceProviderParty',
  PowerOfAttorney = 'PowerOfAttorney',
  PartyAuthorization = 'PartyAuthorization',
  FinancialAccount = 'FinancialAccount',
  AdditionalWebSite = 'AdditionalWebSite',
  SocialMediaProfile = 'SocialMediaProfile'
}

export const PartyFieldMetaUBLExtensions = new FieldMeta<PartyField>(
  PartyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PartyFieldMetaMarkCareIndicator = new FieldMeta<PartyField>(
  PartyField.MarkCareIndicator,
  'MarkCareIndicator',
  'Mark Care Indicator',
  IndicatorType.name,
  'An indicator that this party is "care of" (c/o) (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyFieldMetaMarkAttentionIndicator = new FieldMeta<PartyField>(
  PartyField.MarkAttentionIndicator,
  'MarkAttentionIndicator',
  'Mark Attention Indicator',
  IndicatorType.name,
  'An indicator that this party is "for the attention of" (FAO) (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyFieldMetaWebsiteURI = new FieldMeta<PartyField>(
  PartyField.WebsiteURI,
  'WebsiteURI',
  'Website URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) that identifies this party\'s web site; i.e., the web site\'s Uniform Resource Locator (URL).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PartyFieldMetaLogoReferenceID = new FieldMeta<PartyField>(
  PartyField.LogoReferenceID,
  'LogoReferenceID',
  'Logo Reference',
  IdentifierType.name,
  'An identifier for this party\'s logo.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'http://www2.coca-cola.com/images/logo.gif'
)

export const PartyFieldMetaEndpointID = new FieldMeta<PartyField>(
  PartyField.EndpointID,
  'EndpointID',
  'Endpoint Identifier',
  IdentifierType.name,
  'An identifier for the end point of the routing service (e.g., EAN Location Number, GLN).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '5790002221134'
)

export const PartyFieldMetaIndustryClassificationCode = new FieldMeta<PartyField>(
  PartyField.IndustryClassificationCode,
  'IndustryClassificationCode',
  'Industry Classification Code',
  CodeType.name,
  'This party\'s Industry Classification Code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Public authority , NAIC codes'
)

export const PartyFieldMetaPartyIdentification = new FieldMeta<PartyField>(
  PartyField.PartyIdentification,
  'PartyIdentification',
  'Party Identification',
  PartyIdentificationType.name,
  'An identifier for this party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaPartyName = new FieldMeta<PartyField>(
  PartyField.PartyName,
  'PartyName',
  'Party Name',
  PartyNameType.name,
  'A name for this party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaLanguage = new FieldMeta<PartyField>(
  PartyField.Language,
  'Language',
  'Language',
  LanguageType.name,
  'The language associated with this party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaPostalAddress = new FieldMeta<PartyField>(
  PartyField.PostalAddress,
  'PostalAddress',
  'Postal Address',
  AddressType.name,
  'The party\'s postal address.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaPhysicalLocation = new FieldMeta<PartyField>(
  PartyField.PhysicalLocation,
  'PhysicalLocation',
  'Physical Location',
  LocationType.name,
  'The physical location of this party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaPartyTaxScheme = new FieldMeta<PartyField>(
  PartyField.PartyTaxScheme,
  'PartyTaxScheme',
  'Party Tax Scheme',
  PartyTaxSchemeType.name,
  'A tax scheme applying to this party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaPartyLegalEntity = new FieldMeta<PartyField>(
  PartyField.PartyLegalEntity,
  'PartyLegalEntity',
  'Party Legal Entity',
  PartyLegalEntityType.name,
  'A description of this party as a legal entity.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaContact = new FieldMeta<PartyField>(
  PartyField.Contact,
  'Contact',
  'Contact',
  ContactType.name,
  'The primary contact for this party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaPerson = new FieldMeta<PartyField>(
  PartyField.Person,
  'Person',
  'Person',
  PersonType.name,
  'A person associated with this party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaAgentParty = new FieldMeta<PartyField>(
  PartyField.AgentParty,
  'AgentParty',
  'Agent Party',
  PartyType.name,
  'A party who acts as an agent for this party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  'Customs Broker'
)

export const PartyFieldMetaServiceProviderParty = new FieldMeta<PartyField>(
  PartyField.ServiceProviderParty,
  'ServiceProviderParty',
  'Service Provider Party',
  ServiceProviderPartyType.name,
  'A party providing a service to this party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaPowerOfAttorney = new FieldMeta<PartyField>(
  PartyField.PowerOfAttorney,
  'PowerOfAttorney',
  'Power Of Attorney',
  PowerOfAttorneyType.name,
  'A power of attorney associated with this party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaPartyAuthorization = new FieldMeta<PartyField>(
  PartyField.PartyAuthorization,
  'PartyAuthorization',
  'Party Authorization',
  AuthorizationType.name,
  'An authorization issued to this party',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaFinancialAccount = new FieldMeta<PartyField>(
  PartyField.FinancialAccount,
  'FinancialAccount',
  'Financial Account',
  FinancialAccountType.name,
  'The financial account associated with this party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaAdditionalWebSite = new FieldMeta<PartyField>(
  PartyField.AdditionalWebSite,
  'AdditionalWebSite',
  'Additional Web Site',
  WebSiteType.name,
  'An additional web site associated with this party (e.g. a satellite web site).',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PartyFieldMetaSocialMediaProfile = new FieldMeta<PartyField>(
  PartyField.SocialMediaProfile,
  'SocialMediaProfile',
  'Social Media Profile',
  SocialMediaProfileType.name,
  'A social media profile associated with this party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PartyFieldMeta {
  public static readonly UBLExtensions = PartyFieldMetaUBLExtensions
  public static readonly MarkCareIndicator = PartyFieldMetaMarkCareIndicator
  public static readonly MarkAttentionIndicator = PartyFieldMetaMarkAttentionIndicator
  public static readonly WebsiteURI = PartyFieldMetaWebsiteURI
  public static readonly LogoReferenceID = PartyFieldMetaLogoReferenceID
  public static readonly EndpointID = PartyFieldMetaEndpointID
  public static readonly IndustryClassificationCode = PartyFieldMetaIndustryClassificationCode
  public static readonly PartyIdentification = PartyFieldMetaPartyIdentification
  public static readonly PartyName = PartyFieldMetaPartyName
  public static readonly Language = PartyFieldMetaLanguage
  public static readonly PostalAddress = PartyFieldMetaPostalAddress
  public static readonly PhysicalLocation = PartyFieldMetaPhysicalLocation
  public static readonly PartyTaxScheme = PartyFieldMetaPartyTaxScheme
  public static readonly PartyLegalEntity = PartyFieldMetaPartyLegalEntity
  public static readonly Contact = PartyFieldMetaContact
  public static readonly Person = PartyFieldMetaPerson
  public static readonly AgentParty = PartyFieldMetaAgentParty
  public static readonly ServiceProviderParty = PartyFieldMetaServiceProviderParty
  public static readonly PowerOfAttorney = PartyFieldMetaPowerOfAttorney
  public static readonly PartyAuthorization = PartyFieldMetaPartyAuthorization
  public static readonly FinancialAccount = PartyFieldMetaFinancialAccount
  public static readonly AdditionalWebSite = PartyFieldMetaAdditionalWebSite
  public static readonly SocialMediaProfile = PartyFieldMetaSocialMediaProfile
}

export const PartyFieldMap = new Map([
  [PartyField.UBLExtensions, PartyFieldMetaUBLExtensions],
  [PartyField.MarkCareIndicator, PartyFieldMetaMarkCareIndicator],
  [PartyField.MarkAttentionIndicator, PartyFieldMetaMarkAttentionIndicator],
  [PartyField.WebsiteURI, PartyFieldMetaWebsiteURI],
  [PartyField.LogoReferenceID, PartyFieldMetaLogoReferenceID],
  [PartyField.EndpointID, PartyFieldMetaEndpointID],
  [PartyField.IndustryClassificationCode, PartyFieldMetaIndustryClassificationCode],
  [PartyField.PartyIdentification, PartyFieldMetaPartyIdentification],
  [PartyField.PartyName, PartyFieldMetaPartyName],
  [PartyField.Language, PartyFieldMetaLanguage],
  [PartyField.PostalAddress, PartyFieldMetaPostalAddress],
  [PartyField.PhysicalLocation, PartyFieldMetaPhysicalLocation],
  [PartyField.PartyTaxScheme, PartyFieldMetaPartyTaxScheme],
  [PartyField.PartyLegalEntity, PartyFieldMetaPartyLegalEntity],
  [PartyField.Contact, PartyFieldMetaContact],
  [PartyField.Person, PartyFieldMetaPerson],
  [PartyField.AgentParty, PartyFieldMetaAgentParty],
  [PartyField.ServiceProviderParty, PartyFieldMetaServiceProviderParty],
  [PartyField.PowerOfAttorney, PartyFieldMetaPowerOfAttorney],
  [PartyField.PartyAuthorization, PartyFieldMetaPartyAuthorization],
  [PartyField.FinancialAccount, PartyFieldMetaFinancialAccount],
  [PartyField.AdditionalWebSite, PartyFieldMetaAdditionalWebSite],
  [PartyField.SocialMediaProfile, PartyFieldMetaSocialMediaProfile]
])

export const PartyType: Type<PartyField> = {
  name: 'Party',
  label: 'Party',
  module: TypeModule.cac,
  definition: 'A class to describe an organization, sub-organization, or individual fulfilling a role in a business process.',
  fields: PartyFieldMap,
}
