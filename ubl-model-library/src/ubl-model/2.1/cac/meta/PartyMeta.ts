import { FieldMeta } from '../../FieldMeta'

export enum PartyField {
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
  FinancialAccount = 'FinancialAccount'
}

export const PartyFieldMetaMarkCareIndicator = new FieldMeta<PartyField>(
  PartyField.MarkCareIndicator,
  'MarkCareIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this party is "care of" (c/o) (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const PartyFieldMetaMarkAttentionIndicator = new FieldMeta<PartyField>(
  PartyField.MarkAttentionIndicator,
  'MarkAttentionIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this party is "for the attention of" (FAO) (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const PartyFieldMetaWebsiteURI = new FieldMeta<PartyField>(
  PartyField.WebsiteURI,
  'WebsiteURI',
  'URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) that identifies this party\'s web site; i.e., the web site\'s Uniform Resource Locator (URL).',
  '0..1',
  undefined,
  undefined
)

export const PartyFieldMetaLogoReferenceID = new FieldMeta<PartyField>(
  PartyField.LogoReferenceID,
  'LogoReferenceID',
  'Logo Reference',
  'Identifier',
  'An identifier for this party\'s logo.',
  '0..1',
  undefined,
  'http://www2.coca-cola.com/images/logo.gif'
)

export const PartyFieldMetaEndpointID = new FieldMeta<PartyField>(
  PartyField.EndpointID,
  'EndpointID',
  'Endpoint Identifier',
  'Identifier',
  'An identifier for the end point of the routing service (e.g., EAN Location Number, GLN).',
  '0..1',
  undefined,
  '5790002221134'
)

export const PartyFieldMetaIndustryClassificationCode = new FieldMeta<PartyField>(
  PartyField.IndustryClassificationCode,
  'IndustryClassificationCode',
  'Industry Classification Code',
  'Code',
  'This party\'s Industry Classification Code.',
  '0..1',
  undefined,
  'Public authority , NAIC codes'
)

export const PartyFieldMetaPartyIdentification = new FieldMeta<PartyField>(
  PartyField.PartyIdentification,
  'PartyIdentification',
  'Party Identification',
  'PartyIdentification',
  'An identifier for this party.',
  '0..n',
  undefined,
  undefined
)

export const PartyFieldMetaPartyName = new FieldMeta<PartyField>(
  PartyField.PartyName,
  'PartyName',
  'Party Name',
  'PartyName',
  'A name for this party.',
  '0..n',
  undefined,
  undefined
)

export const PartyFieldMetaLanguage = new FieldMeta<PartyField>(
  PartyField.Language,
  'Language',
  'Language',
  'Language',
  'The language associated with this party.',
  '0..1',
  undefined,
  undefined
)

export const PartyFieldMetaPostalAddress = new FieldMeta<PartyField>(
  PartyField.PostalAddress,
  'PostalAddress',
  'Address',
  'Address',
  'The party\'s postal address.',
  '0..1',
  undefined,
  undefined
)

export const PartyFieldMetaPhysicalLocation = new FieldMeta<PartyField>(
  PartyField.PhysicalLocation,
  'PhysicalLocation',
  'Location',
  'Location',
  'The physical location of this party.',
  '0..1',
  undefined,
  undefined
)

export const PartyFieldMetaPartyTaxScheme = new FieldMeta<PartyField>(
  PartyField.PartyTaxScheme,
  'PartyTaxScheme',
  'Party Tax Scheme',
  'PartyTaxScheme',
  'A tax scheme applying to this party.',
  '0..n',
  undefined,
  undefined
)

export const PartyFieldMetaPartyLegalEntity = new FieldMeta<PartyField>(
  PartyField.PartyLegalEntity,
  'PartyLegalEntity',
  'Party Legal Entity',
  'PartyLegalEntity',
  'A description of this party as a legal entity.',
  '0..n',
  undefined,
  undefined
)

export const PartyFieldMetaContact = new FieldMeta<PartyField>(
  PartyField.Contact,
  'Contact',
  'Contact',
  'Contact',
  'The primary contact for this party.',
  '0..1',
  undefined,
  undefined
)

export const PartyFieldMetaPerson = new FieldMeta<PartyField>(
  PartyField.Person,
  'Person',
  'Person',
  'Person',
  'A person associated with this party.',
  '0..n',
  undefined,
  undefined
)

export const PartyFieldMetaAgentParty = new FieldMeta<PartyField>(
  PartyField.AgentParty,
  'AgentParty',
  'Party',
  'Party',
  'A party who acts as an agent for this party.',
  '0..1',
  undefined,
  'Customs Broker'
)

export const PartyFieldMetaServiceProviderParty = new FieldMeta<PartyField>(
  PartyField.ServiceProviderParty,
  'ServiceProviderParty',
  'Service Provider Party',
  'ServiceProviderParty',
  'A party providing a service to this party.',
  '0..n',
  undefined,
  undefined
)

export const PartyFieldMetaPowerOfAttorney = new FieldMeta<PartyField>(
  PartyField.PowerOfAttorney,
  'PowerOfAttorney',
  'Power Of Attorney',
  'PowerOfAttorney',
  'A power of attorney associated with this party.',
  '0..n',
  undefined,
  undefined
)

export const PartyFieldMetaFinancialAccount = new FieldMeta<PartyField>(
  PartyField.FinancialAccount,
  'FinancialAccount',
  'Financial Account',
  'FinancialAccount',
  'The financial account associated with this party.',
  '0..1',
  undefined,
  undefined
)

export class PartyFieldMeta {
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
  public static readonly FinancialAccount = PartyFieldMetaFinancialAccount
}

export const PartyFieldMap = new Map([
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
  [PartyField.FinancialAccount, PartyFieldMetaFinancialAccount]
])
