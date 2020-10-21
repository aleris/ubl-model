import { FieldMeta } from '../../FieldMeta'

export enum HazardousGoodsTransitField {
  TransportEmergencyCardCode = 'TransportEmergencyCardCode',
  PackingCriteriaCode = 'PackingCriteriaCode',
  HazardousRegulationCode = 'HazardousRegulationCode',
  InhalationToxicityZoneCode = 'InhalationToxicityZoneCode',
  TransportAuthorizationCode = 'TransportAuthorizationCode',
  MaximumTemperature = 'MaximumTemperature',
  MinimumTemperature = 'MinimumTemperature'
}

export const HazardousGoodsTransitFieldMetaTransportEmergencyCardCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.TransportEmergencyCardCode,
  'TransportEmergencyCardCode',
  'Transport Emergency Card Code',
  'Code',
  'An identifier for a transport emergency card describing the actions to be taken in an emergency in transporting the hazardous goods. It may be the identity number of a hazardous emergency response plan assigned by the appropriate authority.',
  '0..1',
  'TREM card',
  undefined
)

export const HazardousGoodsTransitFieldMetaPackingCriteriaCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.PackingCriteriaCode,
  'PackingCriteriaCode',
  'Packing Criteria Code',
  'Code',
  'A code signifying the packaging requirement for transportation of the hazardous goods as assigned by IATA, IMDB, ADR, RID etc.',
  '0..1',
  'Packing Group',
  undefined
)

export const HazardousGoodsTransitFieldMetaHazardousRegulationCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.HazardousRegulationCode,
  'HazardousRegulationCode',
  'Hazardous Regulation Code',
  'Code',
  'A code signifying the set of legal regulations governing the transportation of the hazardous goods.',
  '0..1',
  undefined,
  undefined
)

export const HazardousGoodsTransitFieldMetaInhalationToxicityZoneCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.InhalationToxicityZoneCode,
  'InhalationToxicityZoneCode',
  'Inhalation Toxicity Zone Code',
  'Code',
  'A code signifying the Inhalation Toxicity Hazard Zone for the hazardous goods, as defined by the US Department of Transportation.',
  '0..1',
  undefined,
  undefined
)

export const HazardousGoodsTransitFieldMetaTransportAuthorizationCode = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.TransportAuthorizationCode,
  'TransportAuthorizationCode',
  'Transport Authorization Code',
  'Code',
  'A code signifying authorization for the transportation of hazardous cargo.',
  '0..1',
  'Permission for Transport',
  undefined
)

export const HazardousGoodsTransitFieldMetaMaximumTemperature = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.MaximumTemperature,
  'MaximumTemperature',
  'Temperature',
  'Temperature',
  'The maximum temperature at which the hazardous goods can safely be transported.',
  '0..1',
  undefined,
  undefined
)

export const HazardousGoodsTransitFieldMetaMinimumTemperature = new FieldMeta<HazardousGoodsTransitField>(
  HazardousGoodsTransitField.MinimumTemperature,
  'MinimumTemperature',
  'Temperature',
  'Temperature',
  'The minimum temperature at which the hazardous goods can safely be transported.',
  '0..1',
  undefined,
  undefined
)

export class HazardousGoodsTransitFieldMeta {
  public static readonly TransportEmergencyCardCode = HazardousGoodsTransitFieldMetaTransportEmergencyCardCode
  public static readonly PackingCriteriaCode = HazardousGoodsTransitFieldMetaPackingCriteriaCode
  public static readonly HazardousRegulationCode = HazardousGoodsTransitFieldMetaHazardousRegulationCode
  public static readonly InhalationToxicityZoneCode = HazardousGoodsTransitFieldMetaInhalationToxicityZoneCode
  public static readonly TransportAuthorizationCode = HazardousGoodsTransitFieldMetaTransportAuthorizationCode
  public static readonly MaximumTemperature = HazardousGoodsTransitFieldMetaMaximumTemperature
  public static readonly MinimumTemperature = HazardousGoodsTransitFieldMetaMinimumTemperature
}

export const HazardousGoodsTransitFieldMap = new Map([
  [HazardousGoodsTransitField.TransportEmergencyCardCode, HazardousGoodsTransitFieldMetaTransportEmergencyCardCode],
  [HazardousGoodsTransitField.PackingCriteriaCode, HazardousGoodsTransitFieldMetaPackingCriteriaCode],
  [HazardousGoodsTransitField.HazardousRegulationCode, HazardousGoodsTransitFieldMetaHazardousRegulationCode],
  [HazardousGoodsTransitField.InhalationToxicityZoneCode, HazardousGoodsTransitFieldMetaInhalationToxicityZoneCode],
  [HazardousGoodsTransitField.TransportAuthorizationCode, HazardousGoodsTransitFieldMetaTransportAuthorizationCode],
  [HazardousGoodsTransitField.MaximumTemperature, HazardousGoodsTransitFieldMetaMaximumTemperature],
  [HazardousGoodsTransitField.MinimumTemperature, HazardousGoodsTransitFieldMetaMinimumTemperature]
])
