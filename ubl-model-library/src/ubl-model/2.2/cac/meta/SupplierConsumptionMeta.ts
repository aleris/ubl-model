import { FieldMeta } from '../../FieldMeta'

export enum SupplierConsumptionField {
  Description = 'Description',
  UtilitySupplierParty = 'UtilitySupplierParty',
  UtilityCustomerParty = 'UtilityCustomerParty',
  Consumption = 'Consumption',
  Contract = 'Contract',
  ConsumptionLine = 'ConsumptionLine'
}

export const SupplierConsumptionFieldMetaDescription = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.Description,
  'Description',
  'Description',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  'This is what you pay for electricity to DONG Energy North Utility'
)

export const SupplierConsumptionFieldMetaUtilitySupplierParty = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.UtilitySupplierParty,
  'UtilitySupplierParty',
  'Party',
  'Party',
  'The party supplying the utility.',
  '0..1',
  undefined,
  undefined
)

export const SupplierConsumptionFieldMetaUtilityCustomerParty = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.UtilityCustomerParty,
  'UtilityCustomerParty',
  'Party',
  'Party',
  'The utility customer.',
  '0..1',
  undefined,
  undefined
)

export const SupplierConsumptionFieldMetaConsumption = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.Consumption,
  'Consumption',
  'Consumption',
  'Consumption',
  'The consumption regarding this supplier',
  '1',
  undefined,
  undefined
)

export const SupplierConsumptionFieldMetaContract = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'A contract setting forth conditions regulating the consumption.',
  '0..1',
  undefined,
  undefined
)

export const SupplierConsumptionFieldMetaConsumptionLine = new FieldMeta<SupplierConsumptionField>(
  SupplierConsumptionField.ConsumptionLine,
  'ConsumptionLine',
  'Consumption Line',
  'ConsumptionLine',
  'The consumption of a utility product.',
  '1..n',
  undefined,
  undefined
)

export class SupplierConsumptionFieldMeta {
  public static readonly Description = SupplierConsumptionFieldMetaDescription
  public static readonly UtilitySupplierParty = SupplierConsumptionFieldMetaUtilitySupplierParty
  public static readonly UtilityCustomerParty = SupplierConsumptionFieldMetaUtilityCustomerParty
  public static readonly Consumption = SupplierConsumptionFieldMetaConsumption
  public static readonly Contract = SupplierConsumptionFieldMetaContract
  public static readonly ConsumptionLine = SupplierConsumptionFieldMetaConsumptionLine
}

export const SupplierConsumptionFieldMap = new Map([
  [SupplierConsumptionField.Description, SupplierConsumptionFieldMetaDescription],
  [SupplierConsumptionField.UtilitySupplierParty, SupplierConsumptionFieldMetaUtilitySupplierParty],
  [SupplierConsumptionField.UtilityCustomerParty, SupplierConsumptionFieldMetaUtilityCustomerParty],
  [SupplierConsumptionField.Consumption, SupplierConsumptionFieldMetaConsumption],
  [SupplierConsumptionField.Contract, SupplierConsumptionFieldMetaContract],
  [SupplierConsumptionField.ConsumptionLine, SupplierConsumptionFieldMetaConsumptionLine]
])
