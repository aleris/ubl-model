import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ConsumptionType } from './ConsumptionMeta'
import { ConsumptionLineType } from './ConsumptionLineMeta'
import { ContractType } from './ContractMeta'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum SupplierConsumptionField {
  UBLExtensions = 'UBLExtensions',
  Description = 'Description',
  UtilitySupplierParty = 'UtilitySupplierParty',
  UtilityCustomerParty = 'UtilityCustomerParty',
  Consumption = 'Consumption',
  Contract = 'Contract',
  ConsumptionLine = 'ConsumptionLine'
}

export const SupplierConsumptionFieldMetaUBLExtensions = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SupplierConsumptionFieldMetaDescription = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.Description,
  'Description',
  'Description',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'This is what you pay for electricity to DONG Energy North Utility'
)

export const SupplierConsumptionFieldMetaUtilitySupplierParty = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.UtilitySupplierParty,
  'UtilitySupplierParty',
  'Utility Supplier Party',
  PartyType.name,
  'The party supplying the utility.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SupplierConsumptionFieldMetaUtilityCustomerParty = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.UtilityCustomerParty,
  'UtilityCustomerParty',
  'Utility Customer Party',
  PartyType.name,
  'The utility customer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SupplierConsumptionFieldMetaConsumption = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.Consumption,
  'Consumption',
  'Consumption',
  ConsumptionType.name,
  'The consumption regarding this supplier',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const SupplierConsumptionFieldMetaContract = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.Contract,
  'Contract',
  'Contract',
  ContractType.name,
  'A contract setting forth conditions regulating the consumption.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SupplierConsumptionFieldMetaConsumptionLine = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.ConsumptionLine,
  'ConsumptionLine',
  'Consumption Line',
  ConsumptionLineType.name,
  'The consumption of a utility product.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class SupplierConsumptionFieldMeta {
  public static readonly UBLExtensions = SupplierConsumptionFieldMetaUBLExtensions
  public static readonly Description = SupplierConsumptionFieldMetaDescription
  public static readonly UtilitySupplierParty = SupplierConsumptionFieldMetaUtilitySupplierParty
  public static readonly UtilityCustomerParty = SupplierConsumptionFieldMetaUtilityCustomerParty
  public static readonly Consumption = SupplierConsumptionFieldMetaConsumption
  public static readonly Contract = SupplierConsumptionFieldMetaContract
  public static readonly ConsumptionLine = SupplierConsumptionFieldMetaConsumptionLine
}

export const SupplierConsumptionFieldMap = new Map([
  [SupplierConsumptionField.UBLExtensions, SupplierConsumptionFieldMetaUBLExtensions],
  [SupplierConsumptionField.Description, SupplierConsumptionFieldMetaDescription],
  [SupplierConsumptionField.UtilitySupplierParty, SupplierConsumptionFieldMetaUtilitySupplierParty],
  [SupplierConsumptionField.UtilityCustomerParty, SupplierConsumptionFieldMetaUtilityCustomerParty],
  [SupplierConsumptionField.Consumption, SupplierConsumptionFieldMetaConsumption],
  [SupplierConsumptionField.Contract, SupplierConsumptionFieldMetaContract],
  [SupplierConsumptionField.ConsumptionLine, SupplierConsumptionFieldMetaConsumptionLine]
])

export const SupplierConsumptionType: Type<SupplierConsumptionField> = {
  name: 'SupplierConsumption',
  label: 'Supplier Consumption',
  module: TypeModule.cac,
  definition: 'The consumption in case the consumption is for one and only one supplier.',
  fields: SupplierConsumptionFieldMap,
}
