import { FieldMeta } from '../../FieldMeta'

export enum ContactField {
  ID = 'ID',
  Name = 'Name',
  Telephone = 'Telephone',
  Telefax = 'Telefax',
  ElectronicMail = 'ElectronicMail',
  Note = 'Note',
  OtherCommunication = 'OtherCommunication'
}

export const ContactFieldMetaID = new FieldMeta<ContactField>(
  ContactField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this contact.',
  '0..1',
  undefined,
  'Receivals Clerk'
)

export const ContactFieldMetaName = new FieldMeta<ContactField>(
  ContactField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this contact. It is recommended that this be used for a functional name and not a personal name.',
  '0..1',
  undefined,
  'Delivery Dock'
)

export const ContactFieldMetaTelephone = new FieldMeta<ContactField>(
  ContactField.Telephone,
  'Telephone',
  'Telephone',
  'Text',
  'The primary telephone number of this contact.',
  '0..1',
  undefined,
  undefined
)

export const ContactFieldMetaTelefax = new FieldMeta<ContactField>(
  ContactField.Telefax,
  'Telefax',
  'Telefax',
  'Text',
  'The primary fax number of this contact.',
  '0..1',
  undefined,
  undefined
)

export const ContactFieldMetaElectronicMail = new FieldMeta<ContactField>(
  ContactField.ElectronicMail,
  'ElectronicMail',
  'Mail',
  'Text',
  'The primary email address of this contact.',
  '0..1',
  undefined,
  undefined
)

export const ContactFieldMetaNote = new FieldMeta<ContactField>(
  ContactField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures; in particular, a textual description of the circumstances under which this contact can be used (e.g., "emergency" or "after hours").',
  '0..n',
  undefined,
  undefined
)

export const ContactFieldMetaOtherCommunication = new FieldMeta<ContactField>(
  ContactField.OtherCommunication,
  'OtherCommunication',
  'Communication',
  'Communication',
  'Another means of communication with this contact.',
  '0..n',
  undefined,
  undefined
)

export class ContactFieldMeta {
  public static readonly ID = ContactFieldMetaID
  public static readonly Name = ContactFieldMetaName
  public static readonly Telephone = ContactFieldMetaTelephone
  public static readonly Telefax = ContactFieldMetaTelefax
  public static readonly ElectronicMail = ContactFieldMetaElectronicMail
  public static readonly Note = ContactFieldMetaNote
  public static readonly OtherCommunication = ContactFieldMetaOtherCommunication
}

export const ContactFieldMap = new Map([
  [ContactField.ID, ContactFieldMetaID],
  [ContactField.Name, ContactFieldMetaName],
  [ContactField.Telephone, ContactFieldMetaTelephone],
  [ContactField.Telefax, ContactFieldMetaTelefax],
  [ContactField.ElectronicMail, ContactFieldMetaElectronicMail],
  [ContactField.Note, ContactFieldMetaNote],
  [ContactField.OtherCommunication, ContactFieldMetaOtherCommunication]
])
