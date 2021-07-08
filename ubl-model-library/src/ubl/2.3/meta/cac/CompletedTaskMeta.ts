import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CustomerPartyType } from './CustomerPartyMeta'
import { EvidenceSuppliedType } from './EvidenceSuppliedMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CompletedTaskField {
  UBLExtensions = 'UBLExtensions',
  AnnualAverageAmount = 'AnnualAverageAmount',
  TotalTaskAmount = 'TotalTaskAmount',
  PartyCapacityAmount = 'PartyCapacityAmount',
  Description = 'Description',
  EvidenceSupplied = 'EvidenceSupplied',
  Period = 'Period',
  RecipientCustomerParty = 'RecipientCustomerParty'
}

export const CompletedTaskFieldMetaUBLExtensions = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CompletedTaskFieldMetaAnnualAverageAmount = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.AnnualAverageAmount,
  'AnnualAverageAmount',
  'Annual Average',
  AmountType.name,
  'The average monetary amount of a task such as this completed task.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CompletedTaskFieldMetaTotalTaskAmount = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.TotalTaskAmount,
  'TotalTaskAmount',
  'Total Task',
  AmountType.name,
  'The actual total monetary amount of this completed task.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CompletedTaskFieldMetaPartyCapacityAmount = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.PartyCapacityAmount,
  'PartyCapacityAmount',
  'Party Capacity',
  AmountType.name,
  'A monetary amount corresponding to the financial capacity of the party that carried out this completed task.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CompletedTaskFieldMetaDescription = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this completed task.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CompletedTaskFieldMetaEvidenceSupplied = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.EvidenceSupplied,
  'EvidenceSupplied',
  'Evidence Supplied',
  EvidenceSuppliedType.name,
  'The evidence justifying a designation of "complete" for this task.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CompletedTaskFieldMetaPeriod = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period in which this completed task was performed.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CompletedTaskFieldMetaRecipientCustomerParty = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.RecipientCustomerParty,
  'RecipientCustomerParty',
  'Recipient Customer Party',
  CustomerPartyType.name,
  'The original customer for this completed task.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class CompletedTaskFieldMeta {
  public static readonly UBLExtensions = CompletedTaskFieldMetaUBLExtensions
  public static readonly AnnualAverageAmount = CompletedTaskFieldMetaAnnualAverageAmount
  public static readonly TotalTaskAmount = CompletedTaskFieldMetaTotalTaskAmount
  public static readonly PartyCapacityAmount = CompletedTaskFieldMetaPartyCapacityAmount
  public static readonly Description = CompletedTaskFieldMetaDescription
  public static readonly EvidenceSupplied = CompletedTaskFieldMetaEvidenceSupplied
  public static readonly Period = CompletedTaskFieldMetaPeriod
  public static readonly RecipientCustomerParty = CompletedTaskFieldMetaRecipientCustomerParty
}

export const CompletedTaskFieldMap = new Map([
  [CompletedTaskField.UBLExtensions, CompletedTaskFieldMetaUBLExtensions],
  [CompletedTaskField.AnnualAverageAmount, CompletedTaskFieldMetaAnnualAverageAmount],
  [CompletedTaskField.TotalTaskAmount, CompletedTaskFieldMetaTotalTaskAmount],
  [CompletedTaskField.PartyCapacityAmount, CompletedTaskFieldMetaPartyCapacityAmount],
  [CompletedTaskField.Description, CompletedTaskFieldMetaDescription],
  [CompletedTaskField.EvidenceSupplied, CompletedTaskFieldMetaEvidenceSupplied],
  [CompletedTaskField.Period, CompletedTaskFieldMetaPeriod],
  [CompletedTaskField.RecipientCustomerParty, CompletedTaskFieldMetaRecipientCustomerParty]
])

export const CompletedTaskType: Type<CompletedTaskField> = {
  name: 'CompletedTask',
  label: 'Completed Task',
  module: TypeModule.cac,
  definition: 'A class to describe the completion of a specific task in the tendering process.',
  fields: CompletedTaskFieldMap,
}
