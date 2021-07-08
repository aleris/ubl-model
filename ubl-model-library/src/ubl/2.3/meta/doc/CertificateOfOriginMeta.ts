import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CertificateOfOriginApplicationType } from '../cac/CertificateOfOriginApplicationMeta'
import { DateType } from '../cbc/DateMeta'
import { EndorsementType } from '../cac/EndorsementMeta'
import { EndorserPartyType } from '../cac/EndorserPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaUBLVersionID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const CertificateOfOriginFieldMetaCustomizationID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const CertificateOfOriginFieldMetaProfileID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const CertificateOfOriginFieldMetaProfileExecutionID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const CertificateOfOriginFieldMetaID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaUUID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaIssueDate = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaIssueTime = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaDescription = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.Description,
  'Description',
  'Description',
  TextType.name,
  'Textual description of the document instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaNote = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaVersionID = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Identifies the version of this Certificate of Origin.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaSignature = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaExporterParty = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ExporterParty,
  'ExporterParty',
  'Exporter Party',
  PartyType.name,
  'The Party who makes the export declaration, or on whose behalf the export declaration is made, and who is the owner of the goods or has similar right of disposal over them at the time when the declaration is accepted.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Exporter (WCO ID 41 and 42)',
  undefined
)

export const CertificateOfOriginFieldMetaImporterParty = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.ImporterParty,
  'ImporterParty',
  'Importer Party',
  PartyType.name,
  'The Party who makes an import declaration, or on whose behalf a Customs clearing agent or other authorized person makes an import declaration. This may include a person who has possession of the goods or to whom the goods are consigned.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Importer (WCO ID 39 and 40)',
  undefined
)

export const CertificateOfOriginFieldMetaEndorserParty = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.EndorserParty,
  'EndorserParty',
  'Endorser Party',
  EndorserPartyType.name,
  'The Party providing the endorsement.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaCertificateOfOriginApplication = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.CertificateOfOriginApplication,
  'CertificateOfOriginApplication',
  'Certificate Of Origin Application',
  CertificateOfOriginApplicationType.name,
  'Details of the application for a Certificate of Origin.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaIssuerEndorsement = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.IssuerEndorsement,
  'IssuerEndorsement',
  'Issuer Endorsement',
  EndorsementType.name,
  'Issuer Endorsement details.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaEmbassyEndorsement = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.EmbassyEndorsement,
  'EmbassyEndorsement',
  'Embassy Endorsement',
  EndorsementType.name,
  'Embassy Endorsement details.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CertificateOfOriginFieldMetaInsuranceEndorsement = new FieldMeta<CertificateOfOriginField>(
  CertificateOfOriginField.InsuranceEndorsement,
  'InsuranceEndorsement',
  'Insurance Endorsement',
  EndorsementType.name,
  'Insurance Endorsement details.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const CertificateOfOriginType: Type<CertificateOfOriginField> = {
  name: 'CertificateOfOrigin',
  label: 'Certificate Of Origin',
  module: TypeModule.doc,
  definition: 'A document that describes the Certificate of Origin.',
  fields: CertificateOfOriginFieldMap,
}
