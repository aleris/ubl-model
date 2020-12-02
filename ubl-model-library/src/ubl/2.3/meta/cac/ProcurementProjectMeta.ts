import { FieldMeta } from '../FieldMeta'

export enum ProcurementProjectField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  Description = 'Description',
  ProcurementTypeCode = 'ProcurementTypeCode',
  ProcurementSubTypeCode = 'ProcurementSubTypeCode',
  QualityControlCode = 'QualityControlCode',
  RequiredFeeAmount = 'RequiredFeeAmount',
  FeeDescription = 'FeeDescription',
  RequestedDeliveryDate = 'RequestedDeliveryDate',
  EstimatedOverallContractQuantity = 'EstimatedOverallContractQuantity',
  Note = 'Note',
  SMESuitableIndicator = 'SMESuitableIndicator',
  RequestedTenderTotal = 'RequestedTenderTotal',
  MainCommodityClassification = 'MainCommodityClassification',
  AdditionalCommodityClassification = 'AdditionalCommodityClassification',
  ProcurementAdditionalType = 'ProcurementAdditionalType',
  RealizedLocation = 'RealizedLocation',
  PlannedPeriod = 'PlannedPeriod',
  ContractExtension = 'ContractExtension',
  RequestForTenderLine = 'RequestForTenderLine'
}

export const ProcurementProjectFieldMetaUBLExtensions = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaID = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this procurement project.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaName = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.Name,
  'Name',
  'Name',
  'Text',
  'A name of this procurement project.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaDescription = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this procurement project.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaProcurementTypeCode = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.ProcurementTypeCode,
  'ProcurementTypeCode',
  'Procurement Type Code',
  'Code',
  'A code signifying the type of procurement project (e.g., goods, works, services).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaProcurementSubTypeCode = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.ProcurementSubTypeCode,
  'ProcurementSubTypeCode',
  'Procurement Sub Type Code',
  'Code',
  'A code signifying the subcategory of the type of work for this project (e.g., land surveying, IT consulting).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaQualityControlCode = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.QualityControlCode,
  'QualityControlCode',
  'Quality Control Code',
  'Code',
  'The indication of whether or not the control quality is included in the works project.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaRequiredFeeAmount = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.RequiredFeeAmount,
  'RequiredFeeAmount',
  'Required Fee',
  'Amount',
  'The amount of the reimbursement fee for concession procurement projects.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaFeeDescription = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.FeeDescription,
  'FeeDescription',
  'Fee Description',
  'Text',
  'Text describing the reimbursement fee for concession procurement projects.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaRequestedDeliveryDate = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.RequestedDeliveryDate,
  'RequestedDeliveryDate',
  'Requested Delivery Date',
  'Date',
  'The requested delivery date for this procurement project.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaEstimatedOverallContractQuantity = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.EstimatedOverallContractQuantity,
  'EstimatedOverallContractQuantity',
  'Estimated Overall Contract',
  'Quantity',
  'The estimated overall quantity for this procurement project.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaNote = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text applying to the Procurement Project. This element may contain additional information about the lot/contract that is not contained explicitly in another structure.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaSMESuitableIndicator = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.SMESuitableIndicator,
  'SMESuitableIndicator',
  'SME Suitable',
  'Indicator',
  'Suitable for Small- and Medium-sized Enterprises. This element specifies that the buyer accepts the risks associated of contracting with SMEs.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaRequestedTenderTotal = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.RequestedTenderTotal,
  'RequestedTenderTotal',
  'Requested Tender Total',
  'RequestedTenderTotal',
  'Budget monetary amounts for the project as whole.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaMainCommodityClassification = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.MainCommodityClassification,
  'MainCommodityClassification',
  'Main Commodity Classification',
  'CommodityClassification',
  'An association to the main classification category for the deliverable requested.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaAdditionalCommodityClassification = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.AdditionalCommodityClassification,
  'AdditionalCommodityClassification',
  'Additional Commodity Classification',
  'CommodityClassification',
  'An association to additional classification categories for the deliverable requested.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaProcurementAdditionalType = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.ProcurementAdditionalType,
  'ProcurementAdditionalType',
  'Procurement Additional Type',
  'ProcurementAdditionalType',
  'An association to additional procurement type.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaRealizedLocation = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.RealizedLocation,
  'RealizedLocation',
  'Realized Location',
  'Location',
  'A place where this procurement project will be physically realized.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaPlannedPeriod = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.PlannedPeriod,
  'PlannedPeriod',
  'Planned Period',
  'Period',
  'The period during which this procurement project is planned to take place.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaContractExtension = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.ContractExtension,
  'ContractExtension',
  'Contract Extension',
  'ContractExtension',
  'The contract extension for this tendering process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ProcurementProjectFieldMetaRequestForTenderLine = new FieldMeta<ProcurementProjectField>(
  ProcurementProjectField.RequestForTenderLine,
  'RequestForTenderLine',
  'Request For Tender Line',
  'RequestForTenderLine',
  'A good or service this project is intended to procure.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class ProcurementProjectFieldMeta {
  public static readonly UBLExtensions = ProcurementProjectFieldMetaUBLExtensions
  public static readonly ID = ProcurementProjectFieldMetaID
  public static readonly Name = ProcurementProjectFieldMetaName
  public static readonly Description = ProcurementProjectFieldMetaDescription
  public static readonly ProcurementTypeCode = ProcurementProjectFieldMetaProcurementTypeCode
  public static readonly ProcurementSubTypeCode = ProcurementProjectFieldMetaProcurementSubTypeCode
  public static readonly QualityControlCode = ProcurementProjectFieldMetaQualityControlCode
  public static readonly RequiredFeeAmount = ProcurementProjectFieldMetaRequiredFeeAmount
  public static readonly FeeDescription = ProcurementProjectFieldMetaFeeDescription
  public static readonly RequestedDeliveryDate = ProcurementProjectFieldMetaRequestedDeliveryDate
  public static readonly EstimatedOverallContractQuantity = ProcurementProjectFieldMetaEstimatedOverallContractQuantity
  public static readonly Note = ProcurementProjectFieldMetaNote
  public static readonly SMESuitableIndicator = ProcurementProjectFieldMetaSMESuitableIndicator
  public static readonly RequestedTenderTotal = ProcurementProjectFieldMetaRequestedTenderTotal
  public static readonly MainCommodityClassification = ProcurementProjectFieldMetaMainCommodityClassification
  public static readonly AdditionalCommodityClassification = ProcurementProjectFieldMetaAdditionalCommodityClassification
  public static readonly ProcurementAdditionalType = ProcurementProjectFieldMetaProcurementAdditionalType
  public static readonly RealizedLocation = ProcurementProjectFieldMetaRealizedLocation
  public static readonly PlannedPeriod = ProcurementProjectFieldMetaPlannedPeriod
  public static readonly ContractExtension = ProcurementProjectFieldMetaContractExtension
  public static readonly RequestForTenderLine = ProcurementProjectFieldMetaRequestForTenderLine
}

export const ProcurementProjectFieldMap = new Map([
  [ProcurementProjectField.UBLExtensions, ProcurementProjectFieldMetaUBLExtensions],
  [ProcurementProjectField.ID, ProcurementProjectFieldMetaID],
  [ProcurementProjectField.Name, ProcurementProjectFieldMetaName],
  [ProcurementProjectField.Description, ProcurementProjectFieldMetaDescription],
  [ProcurementProjectField.ProcurementTypeCode, ProcurementProjectFieldMetaProcurementTypeCode],
  [ProcurementProjectField.ProcurementSubTypeCode, ProcurementProjectFieldMetaProcurementSubTypeCode],
  [ProcurementProjectField.QualityControlCode, ProcurementProjectFieldMetaQualityControlCode],
  [ProcurementProjectField.RequiredFeeAmount, ProcurementProjectFieldMetaRequiredFeeAmount],
  [ProcurementProjectField.FeeDescription, ProcurementProjectFieldMetaFeeDescription],
  [ProcurementProjectField.RequestedDeliveryDate, ProcurementProjectFieldMetaRequestedDeliveryDate],
  [ProcurementProjectField.EstimatedOverallContractQuantity, ProcurementProjectFieldMetaEstimatedOverallContractQuantity],
  [ProcurementProjectField.Note, ProcurementProjectFieldMetaNote],
  [ProcurementProjectField.SMESuitableIndicator, ProcurementProjectFieldMetaSMESuitableIndicator],
  [ProcurementProjectField.RequestedTenderTotal, ProcurementProjectFieldMetaRequestedTenderTotal],
  [ProcurementProjectField.MainCommodityClassification, ProcurementProjectFieldMetaMainCommodityClassification],
  [ProcurementProjectField.AdditionalCommodityClassification, ProcurementProjectFieldMetaAdditionalCommodityClassification],
  [ProcurementProjectField.ProcurementAdditionalType, ProcurementProjectFieldMetaProcurementAdditionalType],
  [ProcurementProjectField.RealizedLocation, ProcurementProjectFieldMetaRealizedLocation],
  [ProcurementProjectField.PlannedPeriod, ProcurementProjectFieldMetaPlannedPeriod],
  [ProcurementProjectField.ContractExtension, ProcurementProjectFieldMetaContractExtension],
  [ProcurementProjectField.RequestForTenderLine, ProcurementProjectFieldMetaRequestForTenderLine]
])
