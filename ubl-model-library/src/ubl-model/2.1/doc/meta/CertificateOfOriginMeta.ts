import { FieldMeta } from '../../FieldMeta'

export enum CertificateOfOriginField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Description = 'Description',
  Note = 'Note',
  VersionID = 'VersionID',
  Signature = 'Signature',
  ExporterParty = 'ExporterParty',
  ImporterParty = 'ImporterParty',
  EndorserParty = 'EndorserParty',
  CertificateOfOriginApplication = 'CertificateOfOriginApplication',
  IssuerEndorsement = 'IssuerEndorsement',
  EmbassyEndorsement = 'EmbassyEndorsement',
  InsuranceEndorsement = 'InsuranceEndorsement'
}

export const CertificateOfOriginFieldMetaUBLExtensions = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaUBLVersionID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const CertificateOfOriginFieldMetaCustomizationID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const CertificateOfOriginFieldMetaProfileID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const CertificateOfOriginFieldMetaProfileExecutionID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const CertificateOfOriginFieldMetaID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaUUID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaIssueDate = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaIssueTime = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaDescription = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.Description,
  'Description',
  'Description',
  'Text',
  'Textual description of the document instance.',
  '0..n',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaNote = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaVersionID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Identifies the version of this Certificate of Origin.',
  '0..1',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaSignature = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaExporterParty = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ExporterParty,
  'ExporterParty',
  'Party',
  'Party',
  'The Party who makes the export declaration, or on whose behalf the export declaration is made, and who is the owner of the goods or has similar right of disposal over them at the time when the declaration is accepted.',
  '0..1',
  'Exporter (WCO ID 41 and 42)',
  undefined
)

export const CertificateOfOriginFieldMetaImporterParty = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ImporterParty,
  'ImporterParty',
  'Party',
  'Party',
  'The Party who makes an import declaration, or on whose behalf a Customs clearing agent or other authorized person makes an import declaration. This may include a person who has possession of the goods or to whom the goods are consigned.',
  '0..1',
  'Importer (WCO ID 39 and 40)',
  undefined
)

export const CertificateOfOriginFieldMetaEndorserParty = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.EndorserParty,
  'EndorserParty',
  'Endorser Party',
  'EndorserParty',
  'The Party providing the endorsement.',
  '0..n',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaCertificateOfOriginApplication = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.CertificateOfOriginApplication,
  'CertificateOfOriginApplication',
  'Certificate Of Origin Application',
  'CertificateOfOriginApplication',
  'Details of the application for a Certificate of Origin.',
  '1',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaIssuerEndorsement = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.IssuerEndorsement,
  'IssuerEndorsement',
  'Endorsement',
  'Endorsement',
  'Issuer Endorsement details.',
  '1',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaEmbassyEndorsement = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.EmbassyEndorsement,
  'EmbassyEndorsement',
  'Endorsement',
  'Endorsement',
  'Embassy Endorsement details.',
  '0..1',
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaInsuranceEndorsement = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.InsuranceEndorsement,
  'InsuranceEndorsement',
  'Endorsement',
  'Endorsement',
  'Insurance Endorsement details.',
  '0..1',
  undefined,
  undefined
)

export class CertificateOfOriginFieldMeta {
  public static readonly UBLExtensions = CertificateOfOriginFieldMetaUBLExtensions
  public static readonly UBLVersionID = CertificateOfOriginFieldMetaUBLVersionID
  public static readonly CustomizationID = CertificateOfOriginFieldMetaCustomizationID
  public static readonly ProfileID = CertificateOfOriginFieldMetaProfileID
  public static readonly ProfileExecutionID = CertificateOfOriginFieldMetaProfileExecutionID
  public static readonly ID = CertificateOfOriginFieldMetaID
  public static readonly UUID = CertificateOfOriginFieldMetaUUID
  public static readonly IssueDate = CertificateOfOriginFieldMetaIssueDate
  public static readonly IssueTime = CertificateOfOriginFieldMetaIssueTime
  public static readonly Description = CertificateOfOriginFieldMetaDescription
  public static readonly Note = CertificateOfOriginFieldMetaNote
  public static readonly VersionID = CertificateOfOriginFieldMetaVersionID
  public static readonly Signature = CertificateOfOriginFieldMetaSignature
  public static readonly ExporterParty = CertificateOfOriginFieldMetaExporterParty
  public static readonly ImporterParty = CertificateOfOriginFieldMetaImporterParty
  public static readonly EndorserParty = CertificateOfOriginFieldMetaEndorserParty
  public static readonly CertificateOfOriginApplication = CertificateOfOriginFieldMetaCertificateOfOriginApplication
  public static readonly IssuerEndorsement = CertificateOfOriginFieldMetaIssuerEndorsement
  public static readonly EmbassyEndorsement = CertificateOfOriginFieldMetaEmbassyEndorsement
  public static readonly InsuranceEndorsement = CertificateOfOriginFieldMetaInsuranceEndorsement
}

export const CertificateOfOriginFieldMap = new Map([
  [CertificateOfOriginField.UBLExtensions, CertificateOfOriginFieldMetaUBLExtensions],
  [CertificateOfOriginField.UBLVersionID, CertificateOfOriginFieldMetaUBLVersionID],
  [CertificateOfOriginField.CustomizationID, CertificateOfOriginFieldMetaCustomizationID],
  [CertificateOfOriginField.ProfileID, CertificateOfOriginFieldMetaProfileID],
  [CertificateOfOriginField.ProfileExecutionID, CertificateOfOriginFieldMetaProfileExecutionID],
  [CertificateOfOriginField.ID, CertificateOfOriginFieldMetaID],
  [CertificateOfOriginField.UUID, CertificateOfOriginFieldMetaUUID],
  [CertificateOfOriginField.IssueDate, CertificateOfOriginFieldMetaIssueDate],
  [CertificateOfOriginField.IssueTime, CertificateOfOriginFieldMetaIssueTime],
  [CertificateOfOriginField.Description, CertificateOfOriginFieldMetaDescription],
  [CertificateOfOriginField.Note, CertificateOfOriginFieldMetaNote],
  [CertificateOfOriginField.VersionID, CertificateOfOriginFieldMetaVersionID],
  [CertificateOfOriginField.Signature, CertificateOfOriginFieldMetaSignature],
  [CertificateOfOriginField.ExporterParty, CertificateOfOriginFieldMetaExporterParty],
  [CertificateOfOriginField.ImporterParty, CertificateOfOriginFieldMetaImporterParty],
  [CertificateOfOriginField.EndorserParty, CertificateOfOriginFieldMetaEndorserParty],
  [CertificateOfOriginField.CertificateOfOriginApplication, CertificateOfOriginFieldMetaCertificateOfOriginApplication],
  [CertificateOfOriginField.IssuerEndorsement, CertificateOfOriginFieldMetaIssuerEndorsement],
  [CertificateOfOriginField.EmbassyEndorsement, CertificateOfOriginFieldMetaEmbassyEndorsement],
  [CertificateOfOriginField.InsuranceEndorsement, CertificateOfOriginFieldMetaInsuranceEndorsement]
])
