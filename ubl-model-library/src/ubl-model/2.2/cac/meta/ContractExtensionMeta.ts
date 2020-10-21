import { FieldMeta } from '../../FieldMeta'

export enum ContractExtensionField {
  OptionsDescription = 'OptionsDescription',
  MinimumNumberNumeric = 'MinimumNumberNumeric',
  MaximumNumberNumeric = 'MaximumNumberNumeric',
  RenewalsIndicator = 'RenewalsIndicator',
  OptionValidityPeriod = 'OptionValidityPeriod',
  Renewal = 'Renewal'
}

export const ContractExtensionFieldMetaOptionsDescription = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.OptionsDescription,
  'OptionsDescription',
  'Options Description',
  'Text',
  'A description for the possible options that can be carried out during the execution of the contract.',
  '0..n',
  undefined,
  undefined
)

export const ContractExtensionFieldMetaMinimumNumberNumeric = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.MinimumNumberNumeric,
  'MinimumNumberNumeric',
  'Number',
  'Numeric',
  'The fixed minimum number of contract extensions or renewals.',
  '0..1',
  undefined,
  undefined
)

export const ContractExtensionFieldMetaMaximumNumberNumeric = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.MaximumNumberNumeric,
  'MaximumNumberNumeric',
  'Number',
  'Numeric',
  'The maximum allowed number of contract extensions.',
  '0..1',
  undefined,
  undefined
)

export const ContractExtensionFieldMetaRenewalsIndicator = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.RenewalsIndicator,
  'RenewalsIndicator',
  'Renewals',
  'Indicator',
  'Indicates that the contract can be extended using renewals.',
  '0..1',
  undefined,
  undefined
)

export const ContractExtensionFieldMetaOptionValidityPeriod = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.OptionValidityPeriod,
  'OptionValidityPeriod',
  'Period',
  'Period',
  'The period during which the option for extending the contract is available.',
  '0..1',
  undefined,
  undefined
)

export const ContractExtensionFieldMetaRenewal = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.Renewal,
  'Renewal',
  'Renewal',
  'Renewal',
  'The period allowed for each contract extension.',
  '0..n',
  undefined,
  undefined
)

export class ContractExtensionFieldMeta {
  public static readonly OptionsDescription = ContractExtensionFieldMetaOptionsDescription
  public static readonly MinimumNumberNumeric = ContractExtensionFieldMetaMinimumNumberNumeric
  public static readonly MaximumNumberNumeric = ContractExtensionFieldMetaMaximumNumberNumeric
  public static readonly RenewalsIndicator = ContractExtensionFieldMetaRenewalsIndicator
  public static readonly OptionValidityPeriod = ContractExtensionFieldMetaOptionValidityPeriod
  public static readonly Renewal = ContractExtensionFieldMetaRenewal
}

export const ContractExtensionFieldMap = new Map([
  [ContractExtensionField.OptionsDescription, ContractExtensionFieldMetaOptionsDescription],
  [ContractExtensionField.MinimumNumberNumeric, ContractExtensionFieldMetaMinimumNumberNumeric],
  [ContractExtensionField.MaximumNumberNumeric, ContractExtensionFieldMetaMaximumNumberNumeric],
  [ContractExtensionField.RenewalsIndicator, ContractExtensionFieldMetaRenewalsIndicator],
  [ContractExtensionField.OptionValidityPeriod, ContractExtensionFieldMetaOptionValidityPeriod],
  [ContractExtensionField.Renewal, ContractExtensionFieldMetaRenewal]
])
