import { FieldMeta } from '../../FieldMeta'

export enum CompletedTaskField {
  AnnualAverageAmount = 'AnnualAverageAmount',
  TotalTaskAmount = 'TotalTaskAmount',
  PartyCapacityAmount = 'PartyCapacityAmount',
  Description = 'Description',
  EvidenceSupplied = 'EvidenceSupplied',
  Period = 'Period',
  RecipientCustomerParty = 'RecipientCustomerParty'
}

export const CompletedTaskFieldMetaAnnualAverageAmount = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.AnnualAverageAmount,
  'AnnualAverageAmount',
  'Average',
  'Amount',
  'The average monetary amount of a task such as this completed task.',
  '0..1',
  undefined,
  undefined
)

export const CompletedTaskFieldMetaTotalTaskAmount = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.TotalTaskAmount,
  'TotalTaskAmount',
  'Total Task',
  'Amount',
  'The actual total monetary amount of this completed task.',
  '0..1',
  undefined,
  undefined
)

export const CompletedTaskFieldMetaPartyCapacityAmount = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.PartyCapacityAmount,
  'PartyCapacityAmount',
  'Party Capacity',
  'Amount',
  'A monetary amount corresponding to the financial capacity of the party that carried out this completed task.',
  '0..1',
  undefined,
  undefined
)

export const CompletedTaskFieldMetaDescription = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this completed task.',
  '0..n',
  undefined,
  undefined
)

export const CompletedTaskFieldMetaEvidenceSupplied = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.EvidenceSupplied,
  'EvidenceSupplied',
  'Evidence Supplied',
  'EvidenceSupplied',
  'The evidence justifying a designation of "complete" for this task.',
  '0..n',
  undefined,
  undefined
)

export const CompletedTaskFieldMetaPeriod = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.Period,
  'Period',
  'Period',
  'Period',
  'The period in which this completed task was performed.',
  '0..1',
  undefined,
  undefined
)

export const CompletedTaskFieldMetaRecipientCustomerParty = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.RecipientCustomerParty,
  'RecipientCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The original customer for this completed task.',
  '0..1',
  undefined,
  undefined
)

export class CompletedTaskFieldMeta {
  public static readonly AnnualAverageAmount = CompletedTaskFieldMetaAnnualAverageAmount
  public static readonly TotalTaskAmount = CompletedTaskFieldMetaTotalTaskAmount
  public static readonly PartyCapacityAmount = CompletedTaskFieldMetaPartyCapacityAmount
  public static readonly Description = CompletedTaskFieldMetaDescription
  public static readonly EvidenceSupplied = CompletedTaskFieldMetaEvidenceSupplied
  public static readonly Period = CompletedTaskFieldMetaPeriod
  public static readonly RecipientCustomerParty = CompletedTaskFieldMetaRecipientCustomerParty
}

export const CompletedTaskFieldMap = new Map([
  [CompletedTaskField.AnnualAverageAmount, CompletedTaskFieldMetaAnnualAverageAmount],
  [CompletedTaskField.TotalTaskAmount, CompletedTaskFieldMetaTotalTaskAmount],
  [CompletedTaskField.PartyCapacityAmount, CompletedTaskFieldMetaPartyCapacityAmount],
  [CompletedTaskField.Description, CompletedTaskFieldMetaDescription],
  [CompletedTaskField.EvidenceSupplied, CompletedTaskFieldMetaEvidenceSupplied],
  [CompletedTaskField.Period, CompletedTaskFieldMetaPeriod],
  [CompletedTaskField.RecipientCustomerParty, CompletedTaskFieldMetaRecipientCustomerParty]
])
