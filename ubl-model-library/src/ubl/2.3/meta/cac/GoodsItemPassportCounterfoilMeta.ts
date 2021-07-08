import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { GoodsItemType } from './GoodsItemMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationType } from './LocationMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum GoodsItemPassportCounterfoilField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  GoodsItemPassportID = 'GoodsItemPassportID',
  FinalReexportationDate = 'FinalReexportationDate',
  Note = 'Note',
  CustomsOfficeLocation = 'CustomsOfficeLocation',
  GoodsItem = 'GoodsItem',
  ExportationDocumentReference = 'ExportationDocumentReference',
  ImportationDocumentReference = 'ImportationDocumentReference',
  ReexportationDocumentReference = 'ReexportationDocumentReference',
  ReimportationDocumentReference = 'ReimportationDocumentReference',
  VoucherDocumentReference = 'VoucherDocumentReference'
}

export const GoodsItemPassportCounterfoilFieldMetaUBLExtensions = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaID = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'This identifier for this Goods Item Passport Counterfoil',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaGoodsItemPassportID = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.GoodsItemPassportID,
  'GoodsItemPassportID',
  'Goods Item Passport Identifier',
  IdentifierType.name,
  'The identifier of the Goods Item Passport or ATA Carnet of this counterfoil, usually the number on the upper part of the orange hazard placard required on the means of transport',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'ATA Carnet number',
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaFinalReexportationDate = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.FinalReexportationDate,
  'FinalReexportationDate',
  'Final Reexportation Date',
  DateType.name,
  'Final date of re-exportation, if less than the overall validity period of te Goods Item Passport or ATA Carnet',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaNote = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaCustomsOfficeLocation = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.CustomsOfficeLocation,
  'CustomsOfficeLocation',
  'Customs Office Location',
  LocationType.name,
  'The location of the customs office to where the counterfoil has been presented',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaGoodsItem = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.GoodsItem,
  'GoodsItem',
  'Goods Item',
  GoodsItemType.name,
  'A goods item associated with this counterfoil',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaExportationDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ExportationDocumentReference,
  'ExportationDocumentReference',
  'Exportation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document used for the export of the goods related to this counterfoil',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaImportationDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ImportationDocumentReference,
  'ImportationDocumentReference',
  'Importation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document used for the import of the goods related to this counterfoil',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaReexportationDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ReexportationDocumentReference,
  'ReexportationDocumentReference',
  'Reexportation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document used for the re-exportation of the goods related to this counterfoil',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaReimportationDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ReimportationDocumentReference,
  'ReimportationDocumentReference',
  'Reimportation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document used for re-importation of the goods related to this counterfoil',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaVoucherDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.VoucherDocumentReference,
  'VoucherDocumentReference',
  'Voucher Document Reference',
  DocumentReferenceType.name,
  'A reference to a voucher related to this counterfoil',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class GoodsItemPassportCounterfoilFieldMeta {
  public static readonly UBLExtensions = GoodsItemPassportCounterfoilFieldMetaUBLExtensions
  public static readonly ID = GoodsItemPassportCounterfoilFieldMetaID
  public static readonly GoodsItemPassportID = GoodsItemPassportCounterfoilFieldMetaGoodsItemPassportID
  public static readonly FinalReexportationDate = GoodsItemPassportCounterfoilFieldMetaFinalReexportationDate
  public static readonly Note = GoodsItemPassportCounterfoilFieldMetaNote
  public static readonly CustomsOfficeLocation = GoodsItemPassportCounterfoilFieldMetaCustomsOfficeLocation
  public static readonly GoodsItem = GoodsItemPassportCounterfoilFieldMetaGoodsItem
  public static readonly ExportationDocumentReference = GoodsItemPassportCounterfoilFieldMetaExportationDocumentReference
  public static readonly ImportationDocumentReference = GoodsItemPassportCounterfoilFieldMetaImportationDocumentReference
  public static readonly ReexportationDocumentReference = GoodsItemPassportCounterfoilFieldMetaReexportationDocumentReference
  public static readonly ReimportationDocumentReference = GoodsItemPassportCounterfoilFieldMetaReimportationDocumentReference
  public static readonly VoucherDocumentReference = GoodsItemPassportCounterfoilFieldMetaVoucherDocumentReference
}

export const GoodsItemPassportCounterfoilFieldMap = new Map([
  [GoodsItemPassportCounterfoilField.UBLExtensions, GoodsItemPassportCounterfoilFieldMetaUBLExtensions],
  [GoodsItemPassportCounterfoilField.ID, GoodsItemPassportCounterfoilFieldMetaID],
  [GoodsItemPassportCounterfoilField.GoodsItemPassportID, GoodsItemPassportCounterfoilFieldMetaGoodsItemPassportID],
  [GoodsItemPassportCounterfoilField.FinalReexportationDate, GoodsItemPassportCounterfoilFieldMetaFinalReexportationDate],
  [GoodsItemPassportCounterfoilField.Note, GoodsItemPassportCounterfoilFieldMetaNote],
  [GoodsItemPassportCounterfoilField.CustomsOfficeLocation, GoodsItemPassportCounterfoilFieldMetaCustomsOfficeLocation],
  [GoodsItemPassportCounterfoilField.GoodsItem, GoodsItemPassportCounterfoilFieldMetaGoodsItem],
  [GoodsItemPassportCounterfoilField.ExportationDocumentReference, GoodsItemPassportCounterfoilFieldMetaExportationDocumentReference],
  [GoodsItemPassportCounterfoilField.ImportationDocumentReference, GoodsItemPassportCounterfoilFieldMetaImportationDocumentReference],
  [GoodsItemPassportCounterfoilField.ReexportationDocumentReference, GoodsItemPassportCounterfoilFieldMetaReexportationDocumentReference],
  [GoodsItemPassportCounterfoilField.ReimportationDocumentReference, GoodsItemPassportCounterfoilFieldMetaReimportationDocumentReference],
  [GoodsItemPassportCounterfoilField.VoucherDocumentReference, GoodsItemPassportCounterfoilFieldMetaVoucherDocumentReference]
])

export const GoodsItemPassportCounterfoilType: Type<GoodsItemPassportCounterfoilField> = {
  name: 'GoodsItemPassportCounterfoil',
  label: 'Goods Item Passport Counterfoil',
  module: TypeModule.cac,
  definition: 'A class describing a Goods Item Passport or ATA Carnet Counterfoil',
  fields: GoodsItemPassportCounterfoilFieldMap,
}
