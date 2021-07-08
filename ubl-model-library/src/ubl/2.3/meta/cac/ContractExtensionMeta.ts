import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PeriodType } from './PeriodMeta'
import { RenewalType } from './RenewalMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContractExtensionFieldMetaOptionsDescription = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.OptionsDescription,
  'OptionsDescription',
  'Options Description',
  TextType.name,
  'A description for the possible options that can be carried out during the execution of the contract.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractExtensionFieldMetaMinimumNumberNumeric = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.MinimumNumberNumeric,
  'MinimumNumberNumeric',
  'Minimum Number',
  NumericType.name,
  'The fixed minimum number of contract extensions or renewals.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractExtensionFieldMetaMaximumNumberNumeric = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.MaximumNumberNumeric,
  'MaximumNumberNumeric',
  'Maximum Number',
  NumericType.name,
  'The maximum allowed number of contract extensions.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractExtensionFieldMetaRenewalsIndicator = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.RenewalsIndicator,
  'RenewalsIndicator',
  'Renewals',
  IndicatorType.name,
  'Indicates that the contract can be extended using renewals.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractExtensionFieldMetaOptionValidityPeriod = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.OptionValidityPeriod,
  'OptionValidityPeriod',
  'Option Validity Period',
  PeriodType.name,
  'The period during which the option for extending the contract is available.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractExtensionFieldMetaRenewal = new FieldMeta<ContractExtensionField>(
  ContractExtensionField.Renewal,
  'Renewal',
  'Renewal',
  RenewalType.name,
  'The period allowed for each contract extension.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ContractExtensionType: Type<ContractExtensionField> = {
  name: 'ContractExtension',
  label: 'Contract Extension',
  module: TypeModule.cac,
  definition: 'A class to describe possible extensions to a contract.',
  fields: ContractExtensionFieldMap,
}
