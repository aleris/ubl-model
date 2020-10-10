import { Address } from './Address'
import { Code } from '../cbc/Code'
import { Contact } from './Contact'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { FinancialAccount } from './FinancialAccount'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a person.
 */
export interface Person {
  /**
   * An identifier for this person.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * This person's given name.
   * Name
   * Cardinality: 0..1
   */
  FirstName: [Text] | undefined

  /**
   * This person's family name.
   * Name
   * Cardinality: 0..1
   */
  FamilyName: [Text] | undefined

  /**
   * This person's title of address (e.g., Mr, Ms, Dr, Sir).
   * Text
   * Cardinality: 0..1
   */
  Title: [Text] | undefined

  /**
   * This person's middle name(s) or initials.
   * Name
   * Cardinality: 0..1
   */
  MiddleName: [Text] | undefined

  /**
   * This person's second family name.
   * Name
   * Cardinality: 0..1
   * Examples: Delivery Dock 
   */
  OtherName: [Text] | undefined

  /**
   * A suffix to this person's name (e.g., PhD, OBE, Jr).
   * Text
   * Cardinality: 0..1
   */
  NameSuffix: [Text] | undefined

  /**
   * This person's job title (for a particular role) within an organization.
   * Text
   * Cardinality: 0..1
   */
  JobTitle: [Text] | undefined

  /**
   * An identifier for this person's nationality.
   * Identifier
   * Cardinality: 0..1
   */
  NationalityID: [Identifier] | undefined

  /**
   * A code (e.g., ISO 5218) signifying the gender of this person.
   * Code
   * Cardinality: 0..1
   */
  GenderCode: [Code] | undefined

  /**
   * This person's date of birth.
   * Date
   * Cardinality: 0..1
   */
  BirthDate: [Date] | undefined

  /**
   * The name of the place where this person was born, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  BirthplaceName: [Text] | undefined

  /**
   * The department or subdivision of an organization that this person belongs to (in a particular role).
   * Text
   * Cardinality: 0..1
   */
  OrganizationDepartment: [Text] | undefined

  /**
   * Contact information for this person.
   * Contact
   * Cardinality: 0..1
   */
  Contact: [Contact] | undefined

  /**
   * The financial account associated with this person.
   * Financial Account
   * Cardinality: 0..1
   */
  FinancialAccount: [FinancialAccount] | undefined

  /**
   * A reference to a document that can precisely identify this person (e.g., a driver's license).
   * Document Reference
   * Cardinality: 0..n
   */
  IdentityDocumentReference: Array<DocumentReference> | undefined

  /**
   * This person's address of residence.
   * Address
   * Cardinality: 0..1
   */
  ResidenceAddress: [Address] | undefined
}
