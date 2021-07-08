import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ImmobilizedSecurityType } from '../cac/ImmobilizedSecurityMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { RegulationType } from '../cac/RegulationMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum GuaranteeCertificateField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  ContractFolderID = 'ContractFolderID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  GuaranteeTypeCode = 'GuaranteeTypeCode',
  Purpose = 'Purpose',
  LiabilityAmount = 'LiabilityAmount',
  ConstitutionCode = 'ConstitutionCode',
  Note = 'Note',
  ApplicablePeriod = 'ApplicablePeriod',
  ApplicableRegulation = 'ApplicableRegulation',
  GuaranteeDocumentReference = 'GuaranteeDocumentReference',
  ImmobilizedSecurity = 'ImmobilizedSecurity',
  Signature = 'Signature',
  GuarantorParty = 'GuarantorParty',
  InterestedParty = 'InterestedParty',
  BeneficiaryParty = 'BeneficiaryParty'
}

export const GuaranteeCertificateFieldMetaUBLExtensions = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaUBLVersionID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const GuaranteeCertificateFieldMetaCustomizationID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const GuaranteeCertificateFieldMetaProfileID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const GuaranteeCertificateFieldMetaProfileExecutionID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const GuaranteeCertificateFieldMetaID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaCopyIndicator = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaUUID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaContractFolderID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaIssueDate = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaIssueTime = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaGuaranteeTypeCode = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.GuaranteeTypeCode,
  'GuaranteeTypeCode',
  'Guarantee Type Code',
  CodeType.name,
  'A code signifying the type of the guarantee.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaPurpose = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.Purpose,
  'Purpose',
  'Purpose',
  TextType.name,
  'A textual description of the purpose of the bid bond guarantee.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaLiabilityAmount = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.LiabilityAmount,
  'LiabilityAmount',
  'Liability',
  AmountType.name,
  'The liability amount (a monetary value) in the bid bond guarantee.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaConstitutionCode = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ConstitutionCode,
  'ConstitutionCode',
  'Constitution Code',
  CodeType.name,
  'The code stating the constitution means of the guarantee.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaNote = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaApplicablePeriod = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ApplicablePeriod,
  'ApplicablePeriod',
  'Applicable Period',
  PeriodType.name,
  'The specified period in the tendering process for which this bid bond guarantee is effective',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaApplicableRegulation = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ApplicableRegulation,
  'ApplicableRegulation',
  'Applicable Regulation',
  RegulationType.name,
  'A reference to an applicable regulation.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaGuaranteeDocumentReference = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.GuaranteeDocumentReference,
  'GuaranteeDocumentReference',
  'Guarantee Document Reference',
  DocumentReferenceType.name,
  'A reference to a legal document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaImmobilizedSecurity = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ImmobilizedSecurity,
  'ImmobilizedSecurity',
  'Immobilized Security',
  ImmobilizedSecurityType.name,
  'Details of an immobilized security.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaSignature = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaGuarantorParty = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.GuarantorParty,
  'GuarantorParty',
  'Guarantor Party',
  PartyType.name,
  'The guarantee creditor organization that has the authority to charge bid bond guarantee credit.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaInterestedParty = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.InterestedParty,
  'InterestedParty',
  'Interested Party',
  PartyType.name,
  'The party depositing the bid bond guarantee.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaBeneficiaryParty = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.BeneficiaryParty,
  'BeneficiaryParty',
  'Beneficiary Party',
  PartyType.name,
  'The beneficiary of the bid bond guarantee.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class GuaranteeCertificateFieldMeta {
  public static readonly UBLExtensions = GuaranteeCertificateFieldMetaUBLExtensions
  public static readonly UBLVersionID = GuaranteeCertificateFieldMetaUBLVersionID
  public static readonly CustomizationID = GuaranteeCertificateFieldMetaCustomizationID
  public static readonly ProfileID = GuaranteeCertificateFieldMetaProfileID
  public static readonly ProfileExecutionID = GuaranteeCertificateFieldMetaProfileExecutionID
  public static readonly ID = GuaranteeCertificateFieldMetaID
  public static readonly CopyIndicator = GuaranteeCertificateFieldMetaCopyIndicator
  public static readonly UUID = GuaranteeCertificateFieldMetaUUID
  public static readonly ContractFolderID = GuaranteeCertificateFieldMetaContractFolderID
  public static readonly IssueDate = GuaranteeCertificateFieldMetaIssueDate
  public static readonly IssueTime = GuaranteeCertificateFieldMetaIssueTime
  public static readonly GuaranteeTypeCode = GuaranteeCertificateFieldMetaGuaranteeTypeCode
  public static readonly Purpose = GuaranteeCertificateFieldMetaPurpose
  public static readonly LiabilityAmount = GuaranteeCertificateFieldMetaLiabilityAmount
  public static readonly ConstitutionCode = GuaranteeCertificateFieldMetaConstitutionCode
  public static readonly Note = GuaranteeCertificateFieldMetaNote
  public static readonly ApplicablePeriod = GuaranteeCertificateFieldMetaApplicablePeriod
  public static readonly ApplicableRegulation = GuaranteeCertificateFieldMetaApplicableRegulation
  public static readonly GuaranteeDocumentReference = GuaranteeCertificateFieldMetaGuaranteeDocumentReference
  public static readonly ImmobilizedSecurity = GuaranteeCertificateFieldMetaImmobilizedSecurity
  public static readonly Signature = GuaranteeCertificateFieldMetaSignature
  public static readonly GuarantorParty = GuaranteeCertificateFieldMetaGuarantorParty
  public static readonly InterestedParty = GuaranteeCertificateFieldMetaInterestedParty
  public static readonly BeneficiaryParty = GuaranteeCertificateFieldMetaBeneficiaryParty
}

export const GuaranteeCertificateFieldMap = new Map([
  [GuaranteeCertificateField.UBLExtensions, GuaranteeCertificateFieldMetaUBLExtensions],
  [GuaranteeCertificateField.UBLVersionID, GuaranteeCertificateFieldMetaUBLVersionID],
  [GuaranteeCertificateField.CustomizationID, GuaranteeCertificateFieldMetaCustomizationID],
  [GuaranteeCertificateField.ProfileID, GuaranteeCertificateFieldMetaProfileID],
  [GuaranteeCertificateField.ProfileExecutionID, GuaranteeCertificateFieldMetaProfileExecutionID],
  [GuaranteeCertificateField.ID, GuaranteeCertificateFieldMetaID],
  [GuaranteeCertificateField.CopyIndicator, GuaranteeCertificateFieldMetaCopyIndicator],
  [GuaranteeCertificateField.UUID, GuaranteeCertificateFieldMetaUUID],
  [GuaranteeCertificateField.ContractFolderID, GuaranteeCertificateFieldMetaContractFolderID],
  [GuaranteeCertificateField.IssueDate, GuaranteeCertificateFieldMetaIssueDate],
  [GuaranteeCertificateField.IssueTime, GuaranteeCertificateFieldMetaIssueTime],
  [GuaranteeCertificateField.GuaranteeTypeCode, GuaranteeCertificateFieldMetaGuaranteeTypeCode],
  [GuaranteeCertificateField.Purpose, GuaranteeCertificateFieldMetaPurpose],
  [GuaranteeCertificateField.LiabilityAmount, GuaranteeCertificateFieldMetaLiabilityAmount],
  [GuaranteeCertificateField.ConstitutionCode, GuaranteeCertificateFieldMetaConstitutionCode],
  [GuaranteeCertificateField.Note, GuaranteeCertificateFieldMetaNote],
  [GuaranteeCertificateField.ApplicablePeriod, GuaranteeCertificateFieldMetaApplicablePeriod],
  [GuaranteeCertificateField.ApplicableRegulation, GuaranteeCertificateFieldMetaApplicableRegulation],
  [GuaranteeCertificateField.GuaranteeDocumentReference, GuaranteeCertificateFieldMetaGuaranteeDocumentReference],
  [GuaranteeCertificateField.ImmobilizedSecurity, GuaranteeCertificateFieldMetaImmobilizedSecurity],
  [GuaranteeCertificateField.Signature, GuaranteeCertificateFieldMetaSignature],
  [GuaranteeCertificateField.GuarantorParty, GuaranteeCertificateFieldMetaGuarantorParty],
  [GuaranteeCertificateField.InterestedParty, GuaranteeCertificateFieldMetaInterestedParty],
  [GuaranteeCertificateField.BeneficiaryParty, GuaranteeCertificateFieldMetaBeneficiaryParty]
])

export const GuaranteeCertificateType: Type<GuaranteeCertificateField> = {
  name: 'GuaranteeCertificate',
  label: 'Guarantee Certificate',
  module: TypeModule.doc,
  definition: 'A document to notify the deposit of a bid bond guarantee.',
  fields: GuaranteeCertificateFieldMap,
}
