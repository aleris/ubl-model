import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ContactType } from './ContactMeta'
import { CountryType } from './CountryMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { FinancialAccountType } from './FinancialAccountMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PersonField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  FirstName = 'FirstName',
  FamilyName = 'FamilyName',
  Title = 'Title',
  MiddleName = 'MiddleName',
  OtherName = 'OtherName',
  NameSuffix = 'NameSuffix',
  JobTitle = 'JobTitle',
  NationalityID = 'NationalityID',
  GenderCode = 'GenderCode',
  BirthDate = 'BirthDate',
  BirthplaceName = 'BirthplaceName',
  OrganizationDepartment = 'OrganizationDepartment',
  RoleCode = 'RoleCode',
  CitizenshipCountry = 'CitizenshipCountry',
  Contact = 'Contact',
  FinancialAccount = 'FinancialAccount',
  IdentityDocumentReference = 'IdentityDocumentReference',
  ResidenceAddress = 'ResidenceAddress'
}

export const PersonFieldMetaUBLExtensions = new FieldMeta<PersonField>(
  PersonField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PersonFieldMetaID = new FieldMeta<PersonField>(
  PersonField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this person.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaFirstName = new FieldMeta<PersonField>(
  PersonField.FirstName,
  'FirstName',
  'First Name',
  TextType.name,
  'This person\'s given name.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaFamilyName = new FieldMeta<PersonField>(
  PersonField.FamilyName,
  'FamilyName',
  'Family Name',
  TextType.name,
  'This person\'s family name.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaTitle = new FieldMeta<PersonField>(
  PersonField.Title,
  'Title',
  'Title',
  TextType.name,
  'This person\'s title of address (e.g., Mr, Ms, Dr, Sir).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaMiddleName = new FieldMeta<PersonField>(
  PersonField.MiddleName,
  'MiddleName',
  'Middle Name',
  TextType.name,
  'This person\'s middle name(s) or initials.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaOtherName = new FieldMeta<PersonField>(
  PersonField.OtherName,
  'OtherName',
  'Other Name',
  TextType.name,
  'This person\'s second family name.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Delivery Dock'
)

export const PersonFieldMetaNameSuffix = new FieldMeta<PersonField>(
  PersonField.NameSuffix,
  'NameSuffix',
  'Name Suffix',
  TextType.name,
  'A suffix to this person\'s name (e.g., PhD, OBE, Jr).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaJobTitle = new FieldMeta<PersonField>(
  PersonField.JobTitle,
  'JobTitle',
  'Job Title',
  TextType.name,
  'This person\'s job title (for a particular role) within an organization.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaNationalityID = new FieldMeta<PersonField>(
  PersonField.NationalityID,
  'NationalityID',
  'Nationality',
  IdentifierType.name,
  'An identifier for this person\'s nationality.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaGenderCode = new FieldMeta<PersonField>(
  PersonField.GenderCode,
  'GenderCode',
  'Gender Code',
  CodeType.name,
  'A code (e.g., ISO 5218) signifying the gender of this person.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaBirthDate = new FieldMeta<PersonField>(
  PersonField.BirthDate,
  'BirthDate',
  'Birth Date',
  DateType.name,
  'This person\'s date of birth.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaBirthplaceName = new FieldMeta<PersonField>(
  PersonField.BirthplaceName,
  'BirthplaceName',
  'Birthplace Name',
  TextType.name,
  'The name of the place where this person was born, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaOrganizationDepartment = new FieldMeta<PersonField>(
  PersonField.OrganizationDepartment,
  'OrganizationDepartment',
  'Organization Department',
  TextType.name,
  'The department or subdivision of an organization that this person belongs to (in a particular role).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaRoleCode = new FieldMeta<PersonField>(
  PersonField.RoleCode,
  'RoleCode',
  'Role Code',
  CodeType.name,
  'A code stating the person\'s role',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PersonFieldMetaCitizenshipCountry = new FieldMeta<PersonField>(
  PersonField.CitizenshipCountry,
  'CitizenshipCountry',
  'Citizenship Country',
  CountryType.name,
  'The country of the person\'s citizenship.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PersonFieldMetaContact = new FieldMeta<PersonField>(
  PersonField.Contact,
  'Contact',
  'Contact',
  ContactType.name,
  'Contact information for this person.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PersonFieldMetaFinancialAccount = new FieldMeta<PersonField>(
  PersonField.FinancialAccount,
  'FinancialAccount',
  'Financial Account',
  FinancialAccountType.name,
  'The financial account associated with this person.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PersonFieldMetaIdentityDocumentReference = new FieldMeta<PersonField>(
  PersonField.IdentityDocumentReference,
  'IdentityDocumentReference',
  'Identity Document Reference',
  DocumentReferenceType.name,
  'A reference to a document that can precisely identify this person (e.g., a driver\'s license).',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PersonFieldMetaResidenceAddress = new FieldMeta<PersonField>(
  PersonField.ResidenceAddress,
  'ResidenceAddress',
  'Residence Address',
  AddressType.name,
  'This person\'s address of residence.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PersonFieldMeta {
  public static readonly UBLExtensions = PersonFieldMetaUBLExtensions
  public static readonly ID = PersonFieldMetaID
  public static readonly FirstName = PersonFieldMetaFirstName
  public static readonly FamilyName = PersonFieldMetaFamilyName
  public static readonly Title = PersonFieldMetaTitle
  public static readonly MiddleName = PersonFieldMetaMiddleName
  public static readonly OtherName = PersonFieldMetaOtherName
  public static readonly NameSuffix = PersonFieldMetaNameSuffix
  public static readonly JobTitle = PersonFieldMetaJobTitle
  public static readonly NationalityID = PersonFieldMetaNationalityID
  public static readonly GenderCode = PersonFieldMetaGenderCode
  public static readonly BirthDate = PersonFieldMetaBirthDate
  public static readonly BirthplaceName = PersonFieldMetaBirthplaceName
  public static readonly OrganizationDepartment = PersonFieldMetaOrganizationDepartment
  public static readonly RoleCode = PersonFieldMetaRoleCode
  public static readonly CitizenshipCountry = PersonFieldMetaCitizenshipCountry
  public static readonly Contact = PersonFieldMetaContact
  public static readonly FinancialAccount = PersonFieldMetaFinancialAccount
  public static readonly IdentityDocumentReference = PersonFieldMetaIdentityDocumentReference
  public static readonly ResidenceAddress = PersonFieldMetaResidenceAddress
}

export const PersonFieldMap = new Map([
  [PersonField.UBLExtensions, PersonFieldMetaUBLExtensions],
  [PersonField.ID, PersonFieldMetaID],
  [PersonField.FirstName, PersonFieldMetaFirstName],
  [PersonField.FamilyName, PersonFieldMetaFamilyName],
  [PersonField.Title, PersonFieldMetaTitle],
  [PersonField.MiddleName, PersonFieldMetaMiddleName],
  [PersonField.OtherName, PersonFieldMetaOtherName],
  [PersonField.NameSuffix, PersonFieldMetaNameSuffix],
  [PersonField.JobTitle, PersonFieldMetaJobTitle],
  [PersonField.NationalityID, PersonFieldMetaNationalityID],
  [PersonField.GenderCode, PersonFieldMetaGenderCode],
  [PersonField.BirthDate, PersonFieldMetaBirthDate],
  [PersonField.BirthplaceName, PersonFieldMetaBirthplaceName],
  [PersonField.OrganizationDepartment, PersonFieldMetaOrganizationDepartment],
  [PersonField.RoleCode, PersonFieldMetaRoleCode],
  [PersonField.CitizenshipCountry, PersonFieldMetaCitizenshipCountry],
  [PersonField.Contact, PersonFieldMetaContact],
  [PersonField.FinancialAccount, PersonFieldMetaFinancialAccount],
  [PersonField.IdentityDocumentReference, PersonFieldMetaIdentityDocumentReference],
  [PersonField.ResidenceAddress, PersonFieldMetaResidenceAddress]
])

export const PersonType: Type<PersonField> = {
  name: 'Person',
  label: 'Person',
  module: TypeModule.cac,
  definition: 'A class to describe a person.',
  fields: PersonFieldMap,
}
