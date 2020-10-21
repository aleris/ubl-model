import { FieldMeta } from '../../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaUBLVersionID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const GuaranteeCertificateFieldMetaCustomizationID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const GuaranteeCertificateFieldMetaProfileID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const GuaranteeCertificateFieldMetaProfileExecutionID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const GuaranteeCertificateFieldMetaID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaCopyIndicator = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaUUID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaContractFolderID = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaIssueDate = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaIssueTime = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaGuaranteeTypeCode = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.GuaranteeTypeCode,
  'GuaranteeTypeCode',
  'Guarantee Type Code',
  'Code',
  'A code signifying the type of the guarantee.',
  '0..1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaPurpose = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.Purpose,
  'Purpose',
  'Purpose',
  'Text',
  'A textual description of the purpose of the bid bond guarantee.',
  '0..n',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaLiabilityAmount = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.LiabilityAmount,
  'LiabilityAmount',
  'Liability',
  'Amount',
  'The liability amount (a monetary value) in the bid bond guarantee.',
  '1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaConstitutionCode = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ConstitutionCode,
  'ConstitutionCode',
  'Constitution Code',
  'Code',
  'The code stating the constitution means of the guarantee.',
  '0..1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaNote = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaApplicablePeriod = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ApplicablePeriod,
  'ApplicablePeriod',
  'Period',
  'Period',
  'The specified period in the tendering process for which this bid bond guarantee is effective',
  '0..1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaApplicableRegulation = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ApplicableRegulation,
  'ApplicableRegulation',
  'Regulation',
  'Regulation',
  'A reference to an applicable regulation.',
  '0..n',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaGuaranteeDocumentReference = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.GuaranteeDocumentReference,
  'GuaranteeDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a legal document.',
  '0..n',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaImmobilizedSecurity = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.ImmobilizedSecurity,
  'ImmobilizedSecurity',
  'Immobilized Security',
  'ImmobilizedSecurity',
  'Details of an immobilized security.',
  '0..n',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaSignature = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaGuarantorParty = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.GuarantorParty,
  'GuarantorParty',
  'Party',
  'Party',
  'The guarantee creditor organization that has the authority to charge bid bond guarantee credit.',
  '1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaInterestedParty = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.InterestedParty,
  'InterestedParty',
  'Party',
  'Party',
  'The party depositing the bid bond guarantee.',
  '1',
  undefined,
  undefined
)

export const GuaranteeCertificateFieldMetaBeneficiaryParty = new FieldMeta<GuaranteeCertificateField>(
  GuaranteeCertificateField.BeneficiaryParty,
  'BeneficiaryParty',
  'Party',
  'Party',
  'The beneficiary of the bid bond guarantee.',
  '0..1',
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
