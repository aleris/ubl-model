import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CompletedTaskFieldMetaAnnualAverageAmount = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.AnnualAverageAmount,
  'AnnualAverageAmount',
  'Annual Average',
  'Amount',
  'The average monetary amount of a task such as this completed task.',
  '0..1',
  'cbc',
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
  'cbc',
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
  'cbc',
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
  'cbc',
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
  'cac',
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
  'cac',
  undefined,
  undefined
)

export const CompletedTaskFieldMetaRecipientCustomerParty = new FieldMeta<CompletedTaskField>(
  CompletedTaskField.RecipientCustomerParty,
  'RecipientCustomerParty',
  'Recipient Customer Party',
  'CustomerParty',
  'The original customer for this completed task.',
  '0..1',
  'cac',
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
