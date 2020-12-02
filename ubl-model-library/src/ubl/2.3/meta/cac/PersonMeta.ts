import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PersonFieldMetaID = new FieldMeta<PersonField>(
  PersonField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this person.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaFirstName = new FieldMeta<PersonField>(
  PersonField.FirstName,
  'FirstName',
  'First Name',
  'Text',
  'This person\'s given name.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaFamilyName = new FieldMeta<PersonField>(
  PersonField.FamilyName,
  'FamilyName',
  'Family Name',
  'Text',
  'This person\'s family name.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaTitle = new FieldMeta<PersonField>(
  PersonField.Title,
  'Title',
  'Title',
  'Text',
  'This person\'s title of address (e.g., Mr, Ms, Dr, Sir).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaMiddleName = new FieldMeta<PersonField>(
  PersonField.MiddleName,
  'MiddleName',
  'Middle Name',
  'Text',
  'This person\'s middle name(s) or initials.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaOtherName = new FieldMeta<PersonField>(
  PersonField.OtherName,
  'OtherName',
  'Other Name',
  'Text',
  'This person\'s second family name.',
  '0..1',
  'cbc',
  undefined,
  'Delivery Dock'
)

export const PersonFieldMetaNameSuffix = new FieldMeta<PersonField>(
  PersonField.NameSuffix,
  'NameSuffix',
  'Name Suffix',
  'Text',
  'A suffix to this person\'s name (e.g., PhD, OBE, Jr).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaJobTitle = new FieldMeta<PersonField>(
  PersonField.JobTitle,
  'JobTitle',
  'Job Title',
  'Text',
  'This person\'s job title (for a particular role) within an organization.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaNationalityID = new FieldMeta<PersonField>(
  PersonField.NationalityID,
  'NationalityID',
  'Nationality',
  'Identifier',
  'An identifier for this person\'s nationality.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaGenderCode = new FieldMeta<PersonField>(
  PersonField.GenderCode,
  'GenderCode',
  'Gender Code',
  'Code',
  'A code (e.g., ISO 5218) signifying the gender of this person.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaBirthDate = new FieldMeta<PersonField>(
  PersonField.BirthDate,
  'BirthDate',
  'Birth Date',
  'Date',
  'This person\'s date of birth.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaBirthplaceName = new FieldMeta<PersonField>(
  PersonField.BirthplaceName,
  'BirthplaceName',
  'Birthplace Name',
  'Text',
  'The name of the place where this person was born, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaOrganizationDepartment = new FieldMeta<PersonField>(
  PersonField.OrganizationDepartment,
  'OrganizationDepartment',
  'Organization Department',
  'Text',
  'The department or subdivision of an organization that this person belongs to (in a particular role).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaRoleCode = new FieldMeta<PersonField>(
  PersonField.RoleCode,
  'RoleCode',
  'Role Code',
  'Code',
  'A code stating the person\'s role',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PersonFieldMetaCitizenshipCountry = new FieldMeta<PersonField>(
  PersonField.CitizenshipCountry,
  'CitizenshipCountry',
  'Citizenship Country',
  'Country',
  'The country of the person\'s citizenship.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PersonFieldMetaContact = new FieldMeta<PersonField>(
  PersonField.Contact,
  'Contact',
  'Contact',
  'Contact',
  'Contact information for this person.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PersonFieldMetaFinancialAccount = new FieldMeta<PersonField>(
  PersonField.FinancialAccount,
  'FinancialAccount',
  'Financial Account',
  'FinancialAccount',
  'The financial account associated with this person.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PersonFieldMetaIdentityDocumentReference = new FieldMeta<PersonField>(
  PersonField.IdentityDocumentReference,
  'IdentityDocumentReference',
  'Identity Document Reference',
  'DocumentReference',
  'A reference to a document that can precisely identify this person (e.g., a driver\'s license).',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const PersonFieldMetaResidenceAddress = new FieldMeta<PersonField>(
  PersonField.ResidenceAddress,
  'ResidenceAddress',
  'Residence Address',
  'Address',
  'This person\'s address of residence.',
  '0..1',
  'cac',
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
