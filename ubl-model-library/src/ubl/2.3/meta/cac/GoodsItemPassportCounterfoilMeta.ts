import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaID = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'This identifier for this Goods Item Passport Counterfoil',
  '1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaGoodsItemPassportID = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.GoodsItemPassportID,
  'GoodsItemPassportID',
  'Goods Item Passport Identifier',
  'Identifier',
  'The identifier of the Goods Item Passport or ATA Carnet of this counterfoil, usually the number on the upper part of the orange hazard placard required on the means of transport',
  '1',
  'cbc',
  'ATA Carnet number',
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaFinalReexportationDate = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.FinalReexportationDate,
  'FinalReexportationDate',
  'Final Reexportation Date',
  'Date',
  'Final date of re-exportation, if less than the overall validity period of te Goods Item Passport or ATA Carnet',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaNote = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaCustomsOfficeLocation = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.CustomsOfficeLocation,
  'CustomsOfficeLocation',
  'Customs Office Location',
  'Location',
  'The location of the customs office to where the counterfoil has been presented',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaGoodsItem = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.GoodsItem,
  'GoodsItem',
  'Goods Item',
  'GoodsItem',
  'A goods item associated with this counterfoil',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaExportationDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ExportationDocumentReference,
  'ExportationDocumentReference',
  'Exportation Document Reference',
  'DocumentReference',
  'A reference to a document used for the export of the goods related to this counterfoil',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaImportationDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ImportationDocumentReference,
  'ImportationDocumentReference',
  'Importation Document Reference',
  'DocumentReference',
  'A reference to a document used for the import of the goods related to this counterfoil',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaReexportationDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ReexportationDocumentReference,
  'ReexportationDocumentReference',
  'Reexportation Document Reference',
  'DocumentReference',
  'A reference to a document used for the re-exportation of the goods related to this counterfoil',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaReimportationDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.ReimportationDocumentReference,
  'ReimportationDocumentReference',
  'Reimportation Document Reference',
  'DocumentReference',
  'A reference to a document used for re-importation of the goods related to this counterfoil',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemPassportCounterfoilFieldMetaVoucherDocumentReference = new FieldMeta<GoodsItemPassportCounterfoilField>(
  GoodsItemPassportCounterfoilField.VoucherDocumentReference,
  'VoucherDocumentReference',
  'Voucher Document Reference',
  'DocumentReference',
  'A reference to a voucher related to this counterfoil',
  '0..n',
  'cac',
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
