import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TemperatureType } from './TemperatureMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum HazardousGoodsTransitField {
  UBLExtensions = 'UBLExtensions',
  TransportEmergencyCardCode = 'TransportEmergencyCardCode',
  PackingCriteriaCode = 'PackingCriteriaCode',
  HazardousRegulationCode = 'HazardousRegulationCode',
  InhalationToxicityZoneCode = 'InhalationToxicityZoneCode',
  TransportAuthorizationCode = 'TransportAuthorizationCode',
  MaximumTemperature = 'MaximumTemperature',
  MinimumTemperature = 'MinimumTemperature'
}

export const HazardousGoodsTransitFieldMetaUBLExtensions = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const HazardousGoodsTransitFieldMetaTransportEmergencyCardCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.TransportEmergencyCardCode,
  'TransportEmergencyCardCode',
  'Transport Emergency Card Code',
  CodeType.name,
  'An identifier for a transport emergency card describing the actions to be taken in an emergency in transporting the hazardous goods. It may be the identity number of a hazardous emergency response plan assigned by the appropriate authority.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'TREM card',
  undefined
)

export const HazardousGoodsTransitFieldMetaPackingCriteriaCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.PackingCriteriaCode,
  'PackingCriteriaCode',
  'Packing Criteria Code',
  CodeType.name,
  'A code signifying the packaging requirement for transportation of the hazardous goods as assigned by IATA, IMDB, ADR, RID etc.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Packing Group',
  undefined
)

export const HazardousGoodsTransitFieldMetaHazardousRegulationCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.HazardousRegulationCode,
  'HazardousRegulationCode',
  'Hazardous Regulation Code',
  CodeType.name,
  'A code signifying the set of legal regulations governing the transportation of the hazardous goods.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const HazardousGoodsTransitFieldMetaInhalationToxicityZoneCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.InhalationToxicityZoneCode,
  'InhalationToxicityZoneCode',
  'Inhalation Toxicity Zone Code',
  CodeType.name,
  'A code signifying the Inhalation Toxicity Hazard Zone for the hazardous goods, as defined by the US Department of Transportation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const HazardousGoodsTransitFieldMetaTransportAuthorizationCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.TransportAuthorizationCode,
  'TransportAuthorizationCode',
  'Transport Authorization Code',
  CodeType.name,
  'A code signifying authorization for the transportation of hazardous cargo.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Permission for Transport',
  undefined
)

export const HazardousGoodsTransitFieldMetaMaximumTemperature = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.MaximumTemperature,
  'MaximumTemperature',
  'Maximum Temperature',
  TemperatureType.name,
  'The maximum temperature at which the hazardous goods can safely be transported.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const HazardousGoodsTransitFieldMetaMinimumTemperature = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.MinimumTemperature,
  'MinimumTemperature',
  'Minimum Temperature',
  TemperatureType.name,
  'The minimum temperature at which the hazardous goods can safely be transported.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class HazardousGoodsTransitFieldMeta {
  public static readonly UBLExtensions = HazardousGoodsTransitFieldMetaUBLExtensions
  public static readonly TransportEmergencyCardCode = HazardousGoodsTransitFieldMetaTransportEmergencyCardCode
  public static readonly PackingCriteriaCode = HazardousGoodsTransitFieldMetaPackingCriteriaCode
  public static readonly HazardousRegulationCode = HazardousGoodsTransitFieldMetaHazardousRegulationCode
  public static readonly InhalationToxicityZoneCode = HazardousGoodsTransitFieldMetaInhalationToxicityZoneCode
  public static readonly TransportAuthorizationCode = HazardousGoodsTransitFieldMetaTransportAuthorizationCode
  public static readonly MaximumTemperature = HazardousGoodsTransitFieldMetaMaximumTemperature
  public static readonly MinimumTemperature = HazardousGoodsTransitFieldMetaMinimumTemperature
}

export const HazardousGoodsTransitFieldMap = new Map([
  [HazardousGoodsTransitField.UBLExtensions, HazardousGoodsTransitFieldMetaUBLExtensions],
  [HazardousGoodsTransitField.TransportEmergencyCardCode, HazardousGoodsTransitFieldMetaTransportEmergencyCardCode],
  [HazardousGoodsTransitField.PackingCriteriaCode, HazardousGoodsTransitFieldMetaPackingCriteriaCode],
  [HazardousGoodsTransitField.HazardousRegulationCode, HazardousGoodsTransitFieldMetaHazardousRegulationCode],
  [HazardousGoodsTransitField.InhalationToxicityZoneCode, HazardousGoodsTransitFieldMetaInhalationToxicityZoneCode],
  [HazardousGoodsTransitField.TransportAuthorizationCode, HazardousGoodsTransitFieldMetaTransportAuthorizationCode],
  [HazardousGoodsTransitField.MaximumTemperature, HazardousGoodsTransitFieldMetaMaximumTemperature],
  [HazardousGoodsTransitField.MinimumTemperature, HazardousGoodsTransitFieldMetaMinimumTemperature]
])

export const HazardousGoodsTransitType: Type<HazardousGoodsTransitField> = {
  name: 'HazardousGoodsTransit',
  label: 'Hazardous Goods Transit',
  module: TypeModule.cac,
  definition: 'A class to describe hazardous goods in transit.',
  fields: HazardousGoodsTransitFieldMap,
}
