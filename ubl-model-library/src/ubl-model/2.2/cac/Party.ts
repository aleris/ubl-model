import { Address } from './Address'
import { Code } from '../cbc/Code'
import { Contact } from './Contact'
import { FinancialAccount } from './FinancialAccount'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Language } from './Language'
import { Location } from './Location'
import { PartyIdentification } from './PartyIdentification'
import { PartyLegalEntity } from './PartyLegalEntity'
import { PartyName } from './PartyName'
import { PartyTaxScheme } from './PartyTaxScheme'
import { Person } from './Person'
import { PowerOfAttorney } from './PowerOfAttorney'
import { ServiceProviderParty } from './ServiceProviderParty'
import { SocialMediaProfile } from './SocialMediaProfile'
import { WebSite } from './WebSite'

/**
 * A class to describe an organization, sub-organization, or individual fulfilling a role in a business process.
 */
export interface Party {
  /**
   * An indicator that this party is "care of" (c/o) (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  MarkCareIndicator?: [Indicator] | undefined

  /**
   * An indicator that this party is "for the attention of" (FAO) (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  MarkAttentionIndicator?: [Indicator] | undefined

  /**
   * The Uniform Resource Identifier (URI) that identifies this party's web site; i.e., the web site's Uniform Resource
   * Locator (URL).
   * Identifier
   * Cardinality: 0..1
   */
  WebsiteURI?: [Identifier] | undefined

  /**
   * An identifier for this party's logo.
   * Identifier
   * Cardinality: 0..1
   * Examples: http://www2.coca-cola.com/images/logo.gif
   */
  LogoReferenceID?: [Identifier] | undefined

  /**
   * An identifier for the end point of the routing service (e.g., EAN Location Number, GLN).
   * Identifier
   * Cardinality: 0..1
   * Examples: 5790002221134
   */
  EndpointID?: [Identifier] | undefined

  /**
   * This party's Industry Classification Code.
   * Code
   * Cardinality: 0..1
   * Examples: Public authority , NAIC codes
   */
  IndustryClassificationCode?: [Code] | undefined

  /**
   * An identifier for this party.
   * Party Identification
   * Cardinality: 0..n
   */
  PartyIdentification?: Array<PartyIdentification> | undefined

  /**
   * A name for this party.
   * Party Name
   * Cardinality: 0..n
   */
  PartyName?: Array<PartyName> | undefined

  /**
   * The language associated with this party.
   * Language
   * Cardinality: 0..1
   */
  Language?: [Language] | undefined

  /**
   * The party's postal address.
   * Address
   * Cardinality: 0..1
   */
  PostalAddress?: [Address] | undefined

  /**
   * The physical location of this party.
   * Location
   * Cardinality: 0..1
   */
  PhysicalLocation?: [Location] | undefined

  /**
   * A tax scheme applying to this party.
   * Party Tax Scheme
   * Cardinality: 0..n
   */
  PartyTaxScheme?: Array<PartyTaxScheme> | undefined

  /**
   * A description of this party as a legal entity.
   * Party Legal Entity
   * Cardinality: 0..n
   */
  PartyLegalEntity?: Array<PartyLegalEntity> | undefined

  /**
   * The primary contact for this party.
   * Contact
   * Cardinality: 0..1
   */
  Contact?: [Contact] | undefined

  /**
   * A person associated with this party.
   * Person
   * Cardinality: 0..n
   */
  Person?: Array<Person> | undefined

  /**
   * A party who acts as an agent for this party.
   * Party
   * Cardinality: 0..1
   * Examples: Customs Broker
   */
  AgentParty?: [Party] | undefined

  /**
   * A party providing a service to this party.
   * Service Provider Party
   * Cardinality: 0..n
   */
  ServiceProviderParty?: Array<ServiceProviderParty> | undefined

  /**
   * A power of attorney associated with this party.
   * Power Of Attorney
   * Cardinality: 0..n
   */
  PowerOfAttorney?: Array<PowerOfAttorney> | undefined

  /**
   * The financial account associated with this party.
   * Financial Account
   * Cardinality: 0..1
   */
  FinancialAccount?: [FinancialAccount] | undefined

  /**
   * An additional web site associated with this party (e.g. a satellite web site).
   * Web Site
   * Cardinality: 0..n
   */
  AdditionalWebSite?: Array<WebSite> | undefined

  /**
   * A social media profile associated with this party.
   * Social Media Profile
   * Cardinality: 0..n
   */
  SocialMediaProfile?: Array<SocialMediaProfile> | undefined
}
