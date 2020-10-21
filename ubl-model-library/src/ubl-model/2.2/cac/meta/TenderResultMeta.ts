import { FieldMeta } from '../../FieldMeta'

export enum TenderResultField {
  AwardID = 'AwardID',
  TenderResultCode = 'TenderResultCode',
  Description = 'Description',
  AdvertisementAmount = 'AdvertisementAmount',
  AwardDate = 'AwardDate',
  AwardTime = 'AwardTime',
  ReceivedTenderQuantity = 'ReceivedTenderQuantity',
  LowerTenderAmount = 'LowerTenderAmount',
  HigherTenderAmount = 'HigherTenderAmount',
  StartDate = 'StartDate',
  ReceivedElectronicTenderQuantity = 'ReceivedElectronicTenderQuantity',
  ReceivedForeignTenderQuantity = 'ReceivedForeignTenderQuantity',
  Contract = 'Contract',
  AwardedTenderedProject = 'AwardedTenderedProject',
  ContractFormalizationPeriod = 'ContractFormalizationPeriod',
  SubcontractTerms = 'SubcontractTerms',
  WinningParty = 'WinningParty'
}

export const TenderResultFieldMetaAwardID = new FieldMeta<TenderResultField>(
  TenderResultField.AwardID,
  'AwardID',
  'Award Identifier',
  'Identifier',
  'An identifier for this tender result.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaTenderResultCode = new FieldMeta<TenderResultField>(
  TenderResultField.TenderResultCode,
  'TenderResultCode',
  'Result Code',
  'Code',
  'A code signifying the result of the tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaDescription = new FieldMeta<TenderResultField>(
  TenderResultField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the result of the tendering process.',
  '0..n',
  undefined,
  undefined
)

export const TenderResultFieldMetaAdvertisementAmount = new FieldMeta<TenderResultField>(
  TenderResultField.AdvertisementAmount,
  'AdvertisementAmount',
  'Advertisement',
  'Amount',
  'The monetary value of the advertisement for this tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaAwardDate = new FieldMeta<TenderResultField>(
  TenderResultField.AwardDate,
  'AwardDate',
  'Award Date',
  'Date',
  'The date on which this result was formalized.',
  '1',
  undefined,
  undefined
)

export const TenderResultFieldMetaAwardTime = new FieldMeta<TenderResultField>(
  TenderResultField.AwardTime,
  'AwardTime',
  'Award Time',
  'Time',
  'The time at which this result was formalized.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaReceivedTenderQuantity = new FieldMeta<TenderResultField>(
  TenderResultField.ReceivedTenderQuantity,
  'ReceivedTenderQuantity',
  'Tender Quantity',
  'Quantity',
  'The total number of tenders received in this tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaLowerTenderAmount = new FieldMeta<TenderResultField>(
  TenderResultField.LowerTenderAmount,
  'LowerTenderAmount',
  'Tender Amount',
  'Amount',
  'The least expensive tender received in the tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaHigherTenderAmount = new FieldMeta<TenderResultField>(
  TenderResultField.HigherTenderAmount,
  'HigherTenderAmount',
  'Tender Amount',
  'Amount',
  'The most expensive tender received in this tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaStartDate = new FieldMeta<TenderResultField>(
  TenderResultField.StartDate,
  'StartDate',
  'Start Date',
  'Date',
  'The date on which the awarded contract begins.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaReceivedElectronicTenderQuantity = new FieldMeta<TenderResultField>(
  TenderResultField.ReceivedElectronicTenderQuantity,
  'ReceivedElectronicTenderQuantity',
  'Electronic Tender Quantity',
  'Quantity',
  'The number of electronic tenders received.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaReceivedForeignTenderQuantity = new FieldMeta<TenderResultField>(
  TenderResultField.ReceivedForeignTenderQuantity,
  'ReceivedForeignTenderQuantity',
  'Foreign Tender Quantity',
  'Quantity',
  'The number of foreing tenders received.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaContract = new FieldMeta<TenderResultField>(
  TenderResultField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'A contract governing this tender result.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaAwardedTenderedProject = new FieldMeta<TenderResultField>(
  TenderResultField.AwardedTenderedProject,
  'AwardedTenderedProject',
  'Tendered Project',
  'TenderedProject',
  'The awarded tendered project associated with this tender result.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaContractFormalizationPeriod = new FieldMeta<TenderResultField>(
  TenderResultField.ContractFormalizationPeriod,
  'ContractFormalizationPeriod',
  'Period',
  'Period',
  'The period during which a contract associated with the awarded project is to be formalized.',
  '0..1',
  undefined,
  undefined
)

export const TenderResultFieldMetaSubcontractTerms = new FieldMeta<TenderResultField>(
  TenderResultField.SubcontractTerms,
  'SubcontractTerms',
  'Subcontract Terms',
  'SubcontractTerms',
  'Subcontract terms for this tender result.',
  '0..n',
  undefined,
  undefined
)

export const TenderResultFieldMetaWinningParty = new FieldMeta<TenderResultField>(
  TenderResultField.WinningParty,
  'WinningParty',
  'Winning Party',
  'WinningParty',
  'A party that is identified as the awarded by a tender result.',
  '0..n',
  undefined,
  undefined
)

export class TenderResultFieldMeta {
  public static readonly AwardID = TenderResultFieldMetaAwardID
  public static readonly TenderResultCode = TenderResultFieldMetaTenderResultCode
  public static readonly Description = TenderResultFieldMetaDescription
  public static readonly AdvertisementAmount = TenderResultFieldMetaAdvertisementAmount
  public static readonly AwardDate = TenderResultFieldMetaAwardDate
  public static readonly AwardTime = TenderResultFieldMetaAwardTime
  public static readonly ReceivedTenderQuantity = TenderResultFieldMetaReceivedTenderQuantity
  public static readonly LowerTenderAmount = TenderResultFieldMetaLowerTenderAmount
  public static readonly HigherTenderAmount = TenderResultFieldMetaHigherTenderAmount
  public static readonly StartDate = TenderResultFieldMetaStartDate
  public static readonly ReceivedElectronicTenderQuantity = TenderResultFieldMetaReceivedElectronicTenderQuantity
  public static readonly ReceivedForeignTenderQuantity = TenderResultFieldMetaReceivedForeignTenderQuantity
  public static readonly Contract = TenderResultFieldMetaContract
  public static readonly AwardedTenderedProject = TenderResultFieldMetaAwardedTenderedProject
  public static readonly ContractFormalizationPeriod = TenderResultFieldMetaContractFormalizationPeriod
  public static readonly SubcontractTerms = TenderResultFieldMetaSubcontractTerms
  public static readonly WinningParty = TenderResultFieldMetaWinningParty
}

export const TenderResultFieldMap = new Map([
  [TenderResultField.AwardID, TenderResultFieldMetaAwardID],
  [TenderResultField.TenderResultCode, TenderResultFieldMetaTenderResultCode],
  [TenderResultField.Description, TenderResultFieldMetaDescription],
  [TenderResultField.AdvertisementAmount, TenderResultFieldMetaAdvertisementAmount],
  [TenderResultField.AwardDate, TenderResultFieldMetaAwardDate],
  [TenderResultField.AwardTime, TenderResultFieldMetaAwardTime],
  [TenderResultField.ReceivedTenderQuantity, TenderResultFieldMetaReceivedTenderQuantity],
  [TenderResultField.LowerTenderAmount, TenderResultFieldMetaLowerTenderAmount],
  [TenderResultField.HigherTenderAmount, TenderResultFieldMetaHigherTenderAmount],
  [TenderResultField.StartDate, TenderResultFieldMetaStartDate],
  [TenderResultField.ReceivedElectronicTenderQuantity, TenderResultFieldMetaReceivedElectronicTenderQuantity],
  [TenderResultField.ReceivedForeignTenderQuantity, TenderResultFieldMetaReceivedForeignTenderQuantity],
  [TenderResultField.Contract, TenderResultFieldMetaContract],
  [TenderResultField.AwardedTenderedProject, TenderResultFieldMetaAwardedTenderedProject],
  [TenderResultField.ContractFormalizationPeriod, TenderResultFieldMetaContractFormalizationPeriod],
  [TenderResultField.SubcontractTerms, TenderResultFieldMetaSubcontractTerms],
  [TenderResultField.WinningParty, TenderResultFieldMetaWinningParty]
])
