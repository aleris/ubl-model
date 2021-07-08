import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CommunicationType } from './CommunicationMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ContactField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  JobTitle = 'JobTitle',
  Department = 'Department',
  Telephone = 'Telephone',
  Telefax = 'Telefax',
  ElectronicMail = 'ElectronicMail',
  Note = 'Note',
  OtherCommunication = 'OtherCommunication'
}

export const ContactFieldMetaUBLExtensions = new FieldMeta<ContactField>(
  ContactField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContactFieldMetaID = new FieldMeta<ContactField>(
  ContactField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this contact.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Receivals Clerk'
)

export const ContactFieldMetaName = new FieldMeta<ContactField>(
  ContactField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this contact. It is recommended that this be used for a functional name and not a personal name.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Delivery Dock'
)

export const ContactFieldMetaJobTitle = new FieldMeta<ContactField>(
  ContactField.JobTitle,
  'JobTitle',
  'Job Title',
  TextType.name,
  'The job title or function of this contact',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContactFieldMetaDepartment = new FieldMeta<ContactField>(
  ContactField.Department,
  'Department',
  'Department',
  TextType.name,
  'The department where this contact works',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContactFieldMetaTelephone = new FieldMeta<ContactField>(
  ContactField.Telephone,
  'Telephone',
  'Telephone',
  TextType.name,
  'The primary telephone number of this contact.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContactFieldMetaTelefax = new FieldMeta<ContactField>(
  ContactField.Telefax,
  'Telefax',
  'Telefax',
  TextType.name,
  'The primary fax number of this contact.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContactFieldMetaElectronicMail = new FieldMeta<ContactField>(
  ContactField.ElectronicMail,
  'ElectronicMail',
  'Electronic Mail',
  TextType.name,
  'The primary email address of this contact.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContactFieldMetaNote = new FieldMeta<ContactField>(
  ContactField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures; in particular, a textual description of the circumstances under which this contact can be used (e.g., "emergency" or "after hours").',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContactFieldMetaOtherCommunication = new FieldMeta<ContactField>(
  ContactField.OtherCommunication,
  'OtherCommunication',
  'Other Communication',
  CommunicationType.name,
  'Another means of communication with this contact.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ContactFieldMeta {
  public static readonly UBLExtensions = ContactFieldMetaUBLExtensions
  public static readonly ID = ContactFieldMetaID
  public static readonly Name = ContactFieldMetaName
  public static readonly JobTitle = ContactFieldMetaJobTitle
  public static readonly Department = ContactFieldMetaDepartment
  public static readonly Telephone = ContactFieldMetaTelephone
  public static readonly Telefax = ContactFieldMetaTelefax
  public static readonly ElectronicMail = ContactFieldMetaElectronicMail
  public static readonly Note = ContactFieldMetaNote
  public static readonly OtherCommunication = ContactFieldMetaOtherCommunication
}

export const ContactFieldMap = new Map([
  [ContactField.UBLExtensions, ContactFieldMetaUBLExtensions],
  [ContactField.ID, ContactFieldMetaID],
  [ContactField.Name, ContactFieldMetaName],
  [ContactField.JobTitle, ContactFieldMetaJobTitle],
  [ContactField.Department, ContactFieldMetaDepartment],
  [ContactField.Telephone, ContactFieldMetaTelephone],
  [ContactField.Telefax, ContactFieldMetaTelefax],
  [ContactField.ElectronicMail, ContactFieldMetaElectronicMail],
  [ContactField.Note, ContactFieldMetaNote],
  [ContactField.OtherCommunication, ContactFieldMetaOtherCommunication]
])

export const ContactType: Type<ContactField> = {
  name: 'Contact',
  label: 'Contact',
  module: TypeModule.cac,
  definition: 'A class to describe a contactable person or department in an organization.',
  fields: ContactFieldMap,
}
