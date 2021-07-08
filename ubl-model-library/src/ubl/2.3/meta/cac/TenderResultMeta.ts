import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ContractType } from './ContractMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { SubcontractTermsType } from './SubcontractTermsMeta'
import { TenderedProjectType } from './TenderedProjectMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'
import { WinningPartyType } from './WinningPartyMeta'

export enum TenderResultField {
  UBLExtensions = 'UBLExtensions',
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

export const TenderResultFieldMetaUBLExtensions = new FieldMeta<TenderResultField>(
  TenderResultField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderResultFieldMetaAwardID = new FieldMeta<TenderResultField>(
  TenderResultField.AwardID,
  'AwardID',
  'Award Identifier',
  IdentifierType.name,
  'An identifier for this tender result.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaTenderResultCode = new FieldMeta<TenderResultField>(
  TenderResultField.TenderResultCode,
  'TenderResultCode',
  'Tender Result Code',
  CodeType.name,
  'A code signifying the result of the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaDescription = new FieldMeta<TenderResultField>(
  TenderResultField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the result of the tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaAdvertisementAmount = new FieldMeta<TenderResultField>(
  TenderResultField.AdvertisementAmount,
  'AdvertisementAmount',
  'Advertisement',
  AmountType.name,
  'The monetary value of the advertisement for this tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaAwardDate = new FieldMeta<TenderResultField>(
  TenderResultField.AwardDate,
  'AwardDate',
  'Award Date',
  DateType.name,
  'The date on which this result was formalized.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaAwardTime = new FieldMeta<TenderResultField>(
  TenderResultField.AwardTime,
  'AwardTime',
  'Award Time',
  TimeType.name,
  'The time at which this result was formalized.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaReceivedTenderQuantity = new FieldMeta<TenderResultField>(
  TenderResultField.ReceivedTenderQuantity,
  'ReceivedTenderQuantity',
  'Received Tender Quantity',
  QuantityType.name,
  'The total number of tenders received in this tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaLowerTenderAmount = new FieldMeta<TenderResultField>(
  TenderResultField.LowerTenderAmount,
  'LowerTenderAmount',
  'Lower Tender Amount',
  AmountType.name,
  'The least expensive tender received in the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaHigherTenderAmount = new FieldMeta<TenderResultField>(
  TenderResultField.HigherTenderAmount,
  'HigherTenderAmount',
  'Higher Tender Amount',
  AmountType.name,
  'The most expensive tender received in this tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaStartDate = new FieldMeta<TenderResultField>(
  TenderResultField.StartDate,
  'StartDate',
  'Start Date',
  DateType.name,
  'The date on which the awarded contract begins.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaReceivedElectronicTenderQuantity = new FieldMeta<TenderResultField>(
  TenderResultField.ReceivedElectronicTenderQuantity,
  'ReceivedElectronicTenderQuantity',
  'Received Electronic Tender Quantity',
  QuantityType.name,
  'The number of electronic tenders received.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaReceivedForeignTenderQuantity = new FieldMeta<TenderResultField>(
  TenderResultField.ReceivedForeignTenderQuantity,
  'ReceivedForeignTenderQuantity',
  'Received Foreign Tender Quantity',
  QuantityType.name,
  'The number of foreing tenders received.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderResultFieldMetaContract = new FieldMeta<TenderResultField>(
  TenderResultField.Contract,
  'Contract',
  'Contract',
  ContractType.name,
  'A contract governing this tender result.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderResultFieldMetaAwardedTenderedProject = new FieldMeta<TenderResultField>(
  TenderResultField.AwardedTenderedProject,
  'AwardedTenderedProject',
  'Awarded Tendered Project',
  TenderedProjectType.name,
  'The awarded tendered project associated with this tender result.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderResultFieldMetaContractFormalizationPeriod = new FieldMeta<TenderResultField>(
  TenderResultField.ContractFormalizationPeriod,
  'ContractFormalizationPeriod',
  'Contract Formalization Period',
  PeriodType.name,
  'The period during which a contract associated with the awarded project is to be formalized.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderResultFieldMetaSubcontractTerms = new FieldMeta<TenderResultField>(
  TenderResultField.SubcontractTerms,
  'SubcontractTerms',
  'Subcontract Terms',
  SubcontractTermsType.name,
  'Subcontract terms for this tender result.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderResultFieldMetaWinningParty = new FieldMeta<TenderResultField>(
  TenderResultField.WinningParty,
  'WinningParty',
  'Winning Party',
  WinningPartyType.name,
  'A party that is identified as the awarded by a tender result.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderResultFieldMeta {
  public static readonly UBLExtensions = TenderResultFieldMetaUBLExtensions
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
  [TenderResultField.UBLExtensions, TenderResultFieldMetaUBLExtensions],
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

export const TenderResultType: Type<TenderResultField> = {
  name: 'TenderResult',
  label: 'Tender Result',
  module: TypeModule.cac,
  definition: 'A class to describe the awarding of a tender in a tendering process.',
  fields: TenderResultFieldMap,
}
