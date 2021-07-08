import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContractType } from './ContractMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ExchangeRateField {
  UBLExtensions = 'UBLExtensions',
  SourceCurrencyCode = 'SourceCurrencyCode',
  SourceCurrencyBaseRate = 'SourceCurrencyBaseRate',
  TargetCurrencyCode = 'TargetCurrencyCode',
  TargetCurrencyBaseRate = 'TargetCurrencyBaseRate',
  ExchangeMarketID = 'ExchangeMarketID',
  CalculationRate = 'CalculationRate',
  MathematicOperatorCode = 'MathematicOperatorCode',
  Date = 'Date',
  ForeignExchangeContract = 'ForeignExchangeContract'
}

export const ExchangeRateFieldMetaUBLExtensions = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ExchangeRateFieldMetaSourceCurrencyCode = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.SourceCurrencyCode,
  'SourceCurrencyCode',
  'Source Currency Code',
  CodeType.name,
  'The reference currency for this exchange rate; the currency from which the exchange is being made.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExchangeRateFieldMetaSourceCurrencyBaseRate = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.SourceCurrencyBaseRate,
  'SourceCurrencyBaseRate',
  'Source Currency Base Rate',
  NumericType.name,
  'In the case of a source currency with denominations of small value, the unit base.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExchangeRateFieldMetaTargetCurrencyCode = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.TargetCurrencyCode,
  'TargetCurrencyCode',
  'Target Currency Code',
  CodeType.name,
  'The target currency for this exchange rate; the currency to which the exchange is being made.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExchangeRateFieldMetaTargetCurrencyBaseRate = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.TargetCurrencyBaseRate,
  'TargetCurrencyBaseRate',
  'Target Currency Base Rate',
  NumericType.name,
  'In the case of a target currency with denominations of small value, the unit base.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExchangeRateFieldMetaExchangeMarketID = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.ExchangeMarketID,
  'ExchangeMarketID',
  'Exchange Market Identifier',
  IdentifierType.name,
  'An identifier for the currency exchange market used as the source of this exchange rate.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExchangeRateFieldMetaCalculationRate = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.CalculationRate,
  'CalculationRate',
  'Calculation Rate',
  NumericType.name,
  'The factor applied to the source currency to calculate the target currency.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExchangeRateFieldMetaMathematicOperatorCode = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.MathematicOperatorCode,
  'MathematicOperatorCode',
  'Mathematic Operator Code',
  CodeType.name,
  'A code signifying whether the calculation rate is a multiplier or a divisor.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExchangeRateFieldMetaDate = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.Date,
  'Date',
  'Date',
  DateType.name,
  'The date on which the exchange rate was established.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExchangeRateFieldMetaForeignExchangeContract = new FieldMeta<ExchangeRateField>(
  ExchangeRateField.ForeignExchangeContract,
  'ForeignExchangeContract',
  'Foreign Exchange Contract',
  ContractType.name,
  'A contract for foreign exchange.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ExchangeRateFieldMeta {
  public static readonly UBLExtensions = ExchangeRateFieldMetaUBLExtensions
  public static readonly SourceCurrencyCode = ExchangeRateFieldMetaSourceCurrencyCode
  public static readonly SourceCurrencyBaseRate = ExchangeRateFieldMetaSourceCurrencyBaseRate
  public static readonly TargetCurrencyCode = ExchangeRateFieldMetaTargetCurrencyCode
  public static readonly TargetCurrencyBaseRate = ExchangeRateFieldMetaTargetCurrencyBaseRate
  public static readonly ExchangeMarketID = ExchangeRateFieldMetaExchangeMarketID
  public static readonly CalculationRate = ExchangeRateFieldMetaCalculationRate
  public static readonly MathematicOperatorCode = ExchangeRateFieldMetaMathematicOperatorCode
  public static readonly Date = ExchangeRateFieldMetaDate
  public static readonly ForeignExchangeContract = ExchangeRateFieldMetaForeignExchangeContract
}

export const ExchangeRateFieldMap = new Map([
  [ExchangeRateField.UBLExtensions, ExchangeRateFieldMetaUBLExtensions],
  [ExchangeRateField.SourceCurrencyCode, ExchangeRateFieldMetaSourceCurrencyCode],
  [ExchangeRateField.SourceCurrencyBaseRate, ExchangeRateFieldMetaSourceCurrencyBaseRate],
  [ExchangeRateField.TargetCurrencyCode, ExchangeRateFieldMetaTargetCurrencyCode],
  [ExchangeRateField.TargetCurrencyBaseRate, ExchangeRateFieldMetaTargetCurrencyBaseRate],
  [ExchangeRateField.ExchangeMarketID, ExchangeRateFieldMetaExchangeMarketID],
  [ExchangeRateField.CalculationRate, ExchangeRateFieldMetaCalculationRate],
  [ExchangeRateField.MathematicOperatorCode, ExchangeRateFieldMetaMathematicOperatorCode],
  [ExchangeRateField.Date, ExchangeRateFieldMetaDate],
  [ExchangeRateField.ForeignExchangeContract, ExchangeRateFieldMetaForeignExchangeContract]
])

export const ExchangeRateType: Type<ExchangeRateField> = {
  name: 'ExchangeRate',
  label: 'Exchange Rate',
  module: TypeModule.cac,
  definition: 'A class to define an exchange rate.',
  fields: ExchangeRateFieldMap,
}
