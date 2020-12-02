import { FieldMeta } from '../FieldMeta'

export enum ContractExtensionField {
  UBLExtensions = 'UBLExtensions',
  OptionsDescription = 'OptionsDescription',
  MinimumNumberNumeric = 'MinimumNumberNumeric',
  MaximumNumberNumeric = 'MaximumNumberNumeric',
  RenewalsIndicator = 'RenewalsIndicator',
  OptionValidityPeriod = 'OptionValidityPeriod',
  Renewal = 'Renewal'
}

export const ContractExtensionFieldMetaUBLExtensions = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ContractExtensionFieldMetaOptionsDescription = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.OptionsDescription,
  'OptionsDescription',
  'Options Description',
  'Text',
  'A description for the possible options that can be carried out during the execution of the contract.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ContractExtensionFieldMetaMinimumNumberNumeric = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.MinimumNumberNumeric,
  'MinimumNumberNumeric',
  'Minimum Number',
  'Numeric',
  'The fixed minimum number of contract extensions or renewals.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractExtensionFieldMetaMaximumNumberNumeric = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.MaximumNumberNumeric,
  'MaximumNumberNumeric',
  'Maximum Number',
  'Numeric',
  'The maximum allowed number of contract extensions.',
  '0..1',
  'cbc',
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
  'cbc',
  undefined,
  undefined
)

export const ContractExtensionFieldMetaOptionValidityPeriod = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.OptionValidityPeriod,
  'OptionValidityPeriod',
  'Option Validity Period',
  'Period',
  'The period during which the option for extending the contract is available.',
  '0..1',
  'cac',
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
  'cac',
  undefined,
  undefined
)

export class ContractExtensionFieldMeta {
  public static readonly UBLExtensions = ContractExtensionFieldMetaUBLExtensions
  public static readonly OptionsDescription = ContractExtensionFieldMetaOptionsDescription
  public static readonly MinimumNumberNumeric = ContractExtensionFieldMetaMinimumNumberNumeric
  public static readonly MaximumNumberNumeric = ContractExtensionFieldMetaMaximumNumberNumeric
  public static readonly RenewalsIndicator = ContractExtensionFieldMetaRenewalsIndicator
  public static readonly OptionValidityPeriod = ContractExtensionFieldMetaOptionValidityPeriod
  public static readonly Renewal = ContractExtensionFieldMetaRenewal
}

export const ContractExtensionFieldMap = new Map([
  [ContractExtensionField.UBLExtensions, ContractExtensionFieldMetaUBLExtensions],
  [ContractExtensionField.OptionsDescription, ContractExtensionFieldMetaOptionsDescription],
  [ContractExtensionField.MinimumNumberNumeric, ContractExtensionFieldMetaMinimumNumberNumeric],
  [ContractExtensionField.MaximumNumberNumeric, ContractExtensionFieldMetaMaximumNumberNumeric],
  [ContractExtensionField.RenewalsIndicator, ContractExtensionFieldMetaRenewalsIndicator],
  [ContractExtensionField.OptionValidityPeriod, ContractExtensionFieldMetaOptionValidityPeriod],
  [ContractExtensionField.Renewal, ContractExtensionFieldMetaRenewal]
])
