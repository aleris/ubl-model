import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { HazardousGoodsTransitType } from './HazardousGoodsTransitMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { PartyType } from './PartyMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { SecondaryHazardType } from './SecondaryHazardMeta'
import { TemperatureType } from './TemperatureMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum HazardousItemField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  PlacardNotation = 'PlacardNotation',
  PlacardEndorsement = 'PlacardEndorsement',
  AdditionalInformation = 'AdditionalInformation',
  UNDGCode = 'UNDGCode',
  EmergencyProceduresCode = 'EmergencyProceduresCode',
  MedicalFirstAidGuideCode = 'MedicalFirstAidGuideCode',
  TechnicalName = 'TechnicalName',
  CategoryName = 'CategoryName',
  HazardousCategoryCode = 'HazardousCategoryCode',
  UpperOrangeHazardPlacardID = 'UpperOrangeHazardPlacardID',
  LowerOrangeHazardPlacardID = 'LowerOrangeHazardPlacardID',
  MarkingID = 'MarkingID',
  HazardClassID = 'HazardClassID',
  NetWeightMeasure = 'NetWeightMeasure',
  NetVolumeMeasure = 'NetVolumeMeasure',
  Quantity = 'Quantity',
  ContactParty = 'ContactParty',
  SecondaryHazard = 'SecondaryHazard',
  HazardousGoodsTransit = 'HazardousGoodsTransit',
  EmergencyTemperature = 'EmergencyTemperature',
  FlashpointTemperature = 'FlashpointTemperature',
  AdditionalTemperature = 'AdditionalTemperature'
}

export const HazardousItemFieldMetaUBLExtensions = new FieldMeta<HazardousItemField>(
  HazardousItemField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const HazardousItemFieldMetaID = new FieldMeta<HazardousItemField>(
  HazardousItemField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this hazardous item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Round Up'
)

export const HazardousItemFieldMetaPlacardNotation = new FieldMeta<HazardousItemField>(
  HazardousItemField.PlacardNotation,
  'PlacardNotation',
  'Placard Notation',
  TextType.name,
  'Text of the placard notation corresponding to the hazard class of this hazardous item. Can also be the hazard identification number of the orange placard (upper part) required on the means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '5.1'
)

export const HazardousItemFieldMetaPlacardEndorsement = new FieldMeta<HazardousItemField>(
  HazardousItemField.PlacardEndorsement,
  'PlacardEndorsement',
  'Placard Endorsement',
  TextType.name,
  'Text of the placard endorsement that is to be shown on the shipping papers for this hazardous item. Can also be used for the number of the orange placard (lower part) required on the means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2'
)

export const HazardousItemFieldMetaAdditionalInformation = new FieldMeta<HazardousItemField>(
  HazardousItemField.AdditionalInformation,
  'AdditionalInformation',
  'Additional Information',
  TextType.name,
  'Text providing further information about the hazardous substance.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Must be stored away from flammable materials N.O.S. or a Waste Characteristics Code in conjunction with an EPA Waste Stream code'
)

export const HazardousItemFieldMetaUNDGCode = new FieldMeta<HazardousItemField>(
  HazardousItemField.UNDGCode,
  'UNDGCode',
  'UNDG Code',
  CodeType.name,
  'The UN code for this kind of hazardous item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'UN Code',
  undefined
)

export const HazardousItemFieldMetaEmergencyProceduresCode = new FieldMeta<HazardousItemField>(
  HazardousItemField.EmergencyProceduresCode,
  'EmergencyProceduresCode',
  'Emergency Procedures Code',
  CodeType.name,
  'A code signifying the emergency procedures for this hazardous item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'EMG code, EMS Page Number',
  undefined
)

export const HazardousItemFieldMetaMedicalFirstAidGuideCode = new FieldMeta<HazardousItemField>(
  HazardousItemField.MedicalFirstAidGuideCode,
  'MedicalFirstAidGuideCode',
  'Medical First Aid Guide Code',
  CodeType.name,
  'A code signifying a medical first aid guide appropriate to this hazardous item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'MFAG page number',
  undefined
)

export const HazardousItemFieldMetaTechnicalName = new FieldMeta<HazardousItemField>(
  HazardousItemField.TechnicalName,
  'TechnicalName',
  'Technical Name',
  TextType.name,
  'The full technical name of a specific hazardous substance contained in this goods item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Granular Sodium Chlorate WeedKiller'
)

export const HazardousItemFieldMetaCategoryName = new FieldMeta<HazardousItemField>(
  HazardousItemField.CategoryName,
  'CategoryName',
  'Category',
  TextType.name,
  'The name of the category of hazard that applies to the Item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const HazardousItemFieldMetaHazardousCategoryCode = new FieldMeta<HazardousItemField>(
  HazardousItemField.HazardousCategoryCode,
  'HazardousCategoryCode',
  'Hazardous Category Code',
  CodeType.name,
  'A code signifying a kind of hazard for a material.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Hazardous material class code',
  undefined
)

export const HazardousItemFieldMetaUpperOrangeHazardPlacardID = new FieldMeta<HazardousItemField>(
  HazardousItemField.UpperOrangeHazardPlacardID,
  'UpperOrangeHazardPlacardID',
  'Upper Orange Hazard Placard Identifier',
  IdentifierType.name,
  'The number for the upper part of the orange hazard placard required on the means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Hazard identification number (upper part)',
  undefined
)

export const HazardousItemFieldMetaLowerOrangeHazardPlacardID = new FieldMeta<HazardousItemField>(
  HazardousItemField.LowerOrangeHazardPlacardID,
  'LowerOrangeHazardPlacardID',
  'Lower Orange Hazard Placard Identifier',
  IdentifierType.name,
  'The number for the lower part of the orange hazard placard required on the means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Substance identification number (lower part)',
  undefined
)

export const HazardousItemFieldMetaMarkingID = new FieldMeta<HazardousItemField>(
  HazardousItemField.MarkingID,
  'MarkingID',
  'Marking Identifier',
  IdentifierType.name,
  'An identifier to the marking of the Hazardous Item',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Dangerous goods label marking',
  undefined
)

export const HazardousItemFieldMetaHazardClassID = new FieldMeta<HazardousItemField>(
  HazardousItemField.HazardClassID,
  'HazardClassID',
  'Hazard Class Identifier',
  IdentifierType.name,
  'An identifier for the hazard class applicable to this hazardous item as defined by the relevant regulation authority (e.g., the IMDG Class Number of the SOLAS Convention of IMO and the ADR/RID Class Number for the road/rail environment).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'IMDG Class Number, ADR/RID Class Number',
  undefined
)

export const HazardousItemFieldMetaNetWeightMeasure = new FieldMeta<HazardousItemField>(
  HazardousItemField.NetWeightMeasure,
  'NetWeightMeasure',
  'Net Weight',
  MeasureType.name,
  'The net weight of this hazardous item, excluding packaging.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const HazardousItemFieldMetaNetVolumeMeasure = new FieldMeta<HazardousItemField>(
  HazardousItemField.NetVolumeMeasure,
  'NetVolumeMeasure',
  'Net Volume',
  MeasureType.name,
  'The volume of this hazardous item, excluding packaging and transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const HazardousItemFieldMetaQuantity = new FieldMeta<HazardousItemField>(
  HazardousItemField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity of goods items in this hazardous item that are hazardous.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const HazardousItemFieldMetaContactParty = new FieldMeta<HazardousItemField>(
  HazardousItemField.ContactParty,
  'ContactParty',
  'Contact Party',
  PartyType.name,
  'The individual, group, or body to be contacted in case of a hazardous incident associated with this item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const HazardousItemFieldMetaSecondaryHazard = new FieldMeta<HazardousItemField>(
  HazardousItemField.SecondaryHazard,
  'SecondaryHazard',
  'Secondary Hazard',
  SecondaryHazardType.name,
  'A secondary hazard associated with this hazardous item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const HazardousItemFieldMetaHazardousGoodsTransit = new FieldMeta<HazardousItemField>(
  HazardousItemField.HazardousGoodsTransit,
  'HazardousGoodsTransit',
  'Hazardous Goods Transit',
  HazardousGoodsTransitType.name,
  'Information related to the transit of this kind of hazardous goods.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const HazardousItemFieldMetaEmergencyTemperature = new FieldMeta<HazardousItemField>(
  HazardousItemField.EmergencyTemperature,
  'EmergencyTemperature',
  'Emergency Temperature',
  TemperatureType.name,
  'The threshold temperature at which emergency procedures apply in the handling of temperature-controlled goods.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const HazardousItemFieldMetaFlashpointTemperature = new FieldMeta<HazardousItemField>(
  HazardousItemField.FlashpointTemperature,
  'FlashpointTemperature',
  'Flashpoint Temperature',
  TemperatureType.name,
  'The flashpoint temperature of this hazardous item; i.e., the lowest temperature at which vapors above a volatile combustible substance ignite in air when exposed to flame.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const HazardousItemFieldMetaAdditionalTemperature = new FieldMeta<HazardousItemField>(
  HazardousItemField.AdditionalTemperature,
  'AdditionalTemperature',
  'Additional Temperature',
  TemperatureType.name,
  'Another temperature relevant to the handling of this hazardous item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class HazardousItemFieldMeta {
  public static readonly UBLExtensions = HazardousItemFieldMetaUBLExtensions
  public static readonly ID = HazardousItemFieldMetaID
  public static readonly PlacardNotation = HazardousItemFieldMetaPlacardNotation
  public static readonly PlacardEndorsement = HazardousItemFieldMetaPlacardEndorsement
  public static readonly AdditionalInformation = HazardousItemFieldMetaAdditionalInformation
  public static readonly UNDGCode = HazardousItemFieldMetaUNDGCode
  public static readonly EmergencyProceduresCode = HazardousItemFieldMetaEmergencyProceduresCode
  public static readonly MedicalFirstAidGuideCode = HazardousItemFieldMetaMedicalFirstAidGuideCode
  public static readonly TechnicalName = HazardousItemFieldMetaTechnicalName
  public static readonly CategoryName = HazardousItemFieldMetaCategoryName
  public static readonly HazardousCategoryCode = HazardousItemFieldMetaHazardousCategoryCode
  public static readonly UpperOrangeHazardPlacardID = HazardousItemFieldMetaUpperOrangeHazardPlacardID
  public static readonly LowerOrangeHazardPlacardID = HazardousItemFieldMetaLowerOrangeHazardPlacardID
  public static readonly MarkingID = HazardousItemFieldMetaMarkingID
  public static readonly HazardClassID = HazardousItemFieldMetaHazardClassID
  public static readonly NetWeightMeasure = HazardousItemFieldMetaNetWeightMeasure
  public static readonly NetVolumeMeasure = HazardousItemFieldMetaNetVolumeMeasure
  public static readonly Quantity = HazardousItemFieldMetaQuantity
  public static readonly ContactParty = HazardousItemFieldMetaContactParty
  public static readonly SecondaryHazard = HazardousItemFieldMetaSecondaryHazard
  public static readonly HazardousGoodsTransit = HazardousItemFieldMetaHazardousGoodsTransit
  public static readonly EmergencyTemperature = HazardousItemFieldMetaEmergencyTemperature
  public static readonly FlashpointTemperature = HazardousItemFieldMetaFlashpointTemperature
  public static readonly AdditionalTemperature = HazardousItemFieldMetaAdditionalTemperature
}

export const HazardousItemFieldMap = new Map([
  [HazardousItemField.UBLExtensions, HazardousItemFieldMetaUBLExtensions],
  [HazardousItemField.ID, HazardousItemFieldMetaID],
  [HazardousItemField.PlacardNotation, HazardousItemFieldMetaPlacardNotation],
  [HazardousItemField.PlacardEndorsement, HazardousItemFieldMetaPlacardEndorsement],
  [HazardousItemField.AdditionalInformation, HazardousItemFieldMetaAdditionalInformation],
  [HazardousItemField.UNDGCode, HazardousItemFieldMetaUNDGCode],
  [HazardousItemField.EmergencyProceduresCode, HazardousItemFieldMetaEmergencyProceduresCode],
  [HazardousItemField.MedicalFirstAidGuideCode, HazardousItemFieldMetaMedicalFirstAidGuideCode],
  [HazardousItemField.TechnicalName, HazardousItemFieldMetaTechnicalName],
  [HazardousItemField.CategoryName, HazardousItemFieldMetaCategoryName],
  [HazardousItemField.HazardousCategoryCode, HazardousItemFieldMetaHazardousCategoryCode],
  [HazardousItemField.UpperOrangeHazardPlacardID, HazardousItemFieldMetaUpperOrangeHazardPlacardID],
  [HazardousItemField.LowerOrangeHazardPlacardID, HazardousItemFieldMetaLowerOrangeHazardPlacardID],
  [HazardousItemField.MarkingID, HazardousItemFieldMetaMarkingID],
  [HazardousItemField.HazardClassID, HazardousItemFieldMetaHazardClassID],
  [HazardousItemField.NetWeightMeasure, HazardousItemFieldMetaNetWeightMeasure],
  [HazardousItemField.NetVolumeMeasure, HazardousItemFieldMetaNetVolumeMeasure],
  [HazardousItemField.Quantity, HazardousItemFieldMetaQuantity],
  [HazardousItemField.ContactParty, HazardousItemFieldMetaContactParty],
  [HazardousItemField.SecondaryHazard, HazardousItemFieldMetaSecondaryHazard],
  [HazardousItemField.HazardousGoodsTransit, HazardousItemFieldMetaHazardousGoodsTransit],
  [HazardousItemField.EmergencyTemperature, HazardousItemFieldMetaEmergencyTemperature],
  [HazardousItemField.FlashpointTemperature, HazardousItemFieldMetaFlashpointTemperature],
  [HazardousItemField.AdditionalTemperature, HazardousItemFieldMetaAdditionalTemperature]
])

export const HazardousItemType: Type<HazardousItemField> = {
  name: 'HazardousItem',
  label: 'Hazardous Item',
  module: TypeModule.cac,
  definition: 'A class to describe a hazardous item.',
  fields: HazardousItemFieldMap,
}
