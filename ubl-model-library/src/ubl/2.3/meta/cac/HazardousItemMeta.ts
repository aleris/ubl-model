import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const HazardousItemFieldMetaID = new FieldMeta<HazardousItemField>(
  HazardousItemField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this hazardous item.',
  '0..1',
  'cbc',
  undefined,
  'Round Up'
)

export const HazardousItemFieldMetaPlacardNotation = new FieldMeta<HazardousItemField>(
  HazardousItemField.PlacardNotation,
  'PlacardNotation',
  'Placard Notation',
  'Text',
  'Text of the placard notation corresponding to the hazard class of this hazardous item. Can also be the hazard identification number of the orange placard (upper part) required on the means of transport.',
  '0..1',
  'cbc',
  undefined,
  '5.1'
)

export const HazardousItemFieldMetaPlacardEndorsement = new FieldMeta<HazardousItemField>(
  HazardousItemField.PlacardEndorsement,
  'PlacardEndorsement',
  'Placard Endorsement',
  'Text',
  'Text of the placard endorsement that is to be shown on the shipping papers for this hazardous item. Can also be used for the number of the orange placard (lower part) required on the means of transport.',
  '0..1',
  'cbc',
  undefined,
  '2'
)

export const HazardousItemFieldMetaAdditionalInformation = new FieldMeta<HazardousItemField>(
  HazardousItemField.AdditionalInformation,
  'AdditionalInformation',
  'Additional Information',
  'Text',
  'Text providing further information about the hazardous substance.',
  '0..n',
  'cbc',
  undefined,
  'Must be stored away from flammable materials N.O.S. or a Waste Characteristics Code in conjunction with an EPA Waste Stream code'
)

export const HazardousItemFieldMetaUNDGCode = new FieldMeta<HazardousItemField>(
  HazardousItemField.UNDGCode,
  'UNDGCode',
  'UNDG Code',
  'Code',
  'The UN code for this kind of hazardous item.',
  '0..1',
  'cbc',
  'UN Code',
  undefined
)

export const HazardousItemFieldMetaEmergencyProceduresCode = new FieldMeta<HazardousItemField>(
  HazardousItemField.EmergencyProceduresCode,
  'EmergencyProceduresCode',
  'Emergency Procedures Code',
  'Code',
  'A code signifying the emergency procedures for this hazardous item.',
  '0..1',
  'cbc',
  'EMG code, EMS Page Number',
  undefined
)

export const HazardousItemFieldMetaMedicalFirstAidGuideCode = new FieldMeta<HazardousItemField>(
  HazardousItemField.MedicalFirstAidGuideCode,
  'MedicalFirstAidGuideCode',
  'Medical First Aid Guide Code',
  'Code',
  'A code signifying a medical first aid guide appropriate to this hazardous item.',
  '0..1',
  'cbc',
  'MFAG page number',
  undefined
)

export const HazardousItemFieldMetaTechnicalName = new FieldMeta<HazardousItemField>(
  HazardousItemField.TechnicalName,
  'TechnicalName',
  'Technical Name',
  'Text',
  'The full technical name of a specific hazardous substance contained in this goods item.',
  '0..1',
  'cbc',
  undefined,
  'Granular Sodium Chlorate WeedKiller'
)

export const HazardousItemFieldMetaCategoryName = new FieldMeta<HazardousItemField>(
  HazardousItemField.CategoryName,
  'CategoryName',
  'Category',
  'Text',
  'The name of the category of hazard that applies to the Item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const HazardousItemFieldMetaHazardousCategoryCode = new FieldMeta<HazardousItemField>(
  HazardousItemField.HazardousCategoryCode,
  'HazardousCategoryCode',
  'Hazardous Category Code',
  'Code',
  'A code signifying a kind of hazard for a material.',
  '0..1',
  'cbc',
  'Hazardous material class code',
  undefined
)

export const HazardousItemFieldMetaUpperOrangeHazardPlacardID = new FieldMeta<HazardousItemField>(
  HazardousItemField.UpperOrangeHazardPlacardID,
  'UpperOrangeHazardPlacardID',
  'Upper Orange Hazard Placard Identifier',
  'Identifier',
  'The number for the upper part of the orange hazard placard required on the means of transport.',
  '0..1',
  'cbc',
  'Hazard identification number (upper part)',
  undefined
)

export const HazardousItemFieldMetaLowerOrangeHazardPlacardID = new FieldMeta<HazardousItemField>(
  HazardousItemField.LowerOrangeHazardPlacardID,
  'LowerOrangeHazardPlacardID',
  'Lower Orange Hazard Placard Identifier',
  'Identifier',
  'The number for the lower part of the orange hazard placard required on the means of transport.',
  '0..1',
  'cbc',
  'Substance identification number (lower part)',
  undefined
)

export const HazardousItemFieldMetaMarkingID = new FieldMeta<HazardousItemField>(
  HazardousItemField.MarkingID,
  'MarkingID',
  'Marking Identifier',
  'Identifier',
  'An identifier to the marking of the Hazardous Item',
  '0..1',
  'cbc',
  'Dangerous goods label marking',
  undefined
)

export const HazardousItemFieldMetaHazardClassID = new FieldMeta<HazardousItemField>(
  HazardousItemField.HazardClassID,
  'HazardClassID',
  'Hazard Class Identifier',
  'Identifier',
  'An identifier for the hazard class applicable to this hazardous item as defined by the relevant regulation authority (e.g., the IMDG Class Number of the SOLAS Convention of IMO and the ADR/RID Class Number for the road/rail environment).',
  '0..1',
  'cbc',
  'IMDG Class Number, ADR/RID Class Number',
  undefined
)

export const HazardousItemFieldMetaNetWeightMeasure = new FieldMeta<HazardousItemField>(
  HazardousItemField.NetWeightMeasure,
  'NetWeightMeasure',
  'Net Weight',
  'Measure',
  'The net weight of this hazardous item, excluding packaging.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const HazardousItemFieldMetaNetVolumeMeasure = new FieldMeta<HazardousItemField>(
  HazardousItemField.NetVolumeMeasure,
  'NetVolumeMeasure',
  'Net Volume',
  'Measure',
  'The volume of this hazardous item, excluding packaging and transport equipment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const HazardousItemFieldMetaQuantity = new FieldMeta<HazardousItemField>(
  HazardousItemField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of goods items in this hazardous item that are hazardous.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const HazardousItemFieldMetaContactParty = new FieldMeta<HazardousItemField>(
  HazardousItemField.ContactParty,
  'ContactParty',
  'Contact Party',
  'Party',
  'The individual, group, or body to be contacted in case of a hazardous incident associated with this item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const HazardousItemFieldMetaSecondaryHazard = new FieldMeta<HazardousItemField>(
  HazardousItemField.SecondaryHazard,
  'SecondaryHazard',
  'Secondary Hazard',
  'SecondaryHazard',
  'A secondary hazard associated with this hazardous item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const HazardousItemFieldMetaHazardousGoodsTransit = new FieldMeta<HazardousItemField>(
  HazardousItemField.HazardousGoodsTransit,
  'HazardousGoodsTransit',
  'Hazardous Goods Transit',
  'HazardousGoodsTransit',
  'Information related to the transit of this kind of hazardous goods.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const HazardousItemFieldMetaEmergencyTemperature = new FieldMeta<HazardousItemField>(
  HazardousItemField.EmergencyTemperature,
  'EmergencyTemperature',
  'Emergency Temperature',
  'Temperature',
  'The threshold temperature at which emergency procedures apply in the handling of temperature-controlled goods.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const HazardousItemFieldMetaFlashpointTemperature = new FieldMeta<HazardousItemField>(
  HazardousItemField.FlashpointTemperature,
  'FlashpointTemperature',
  'Flashpoint Temperature',
  'Temperature',
  'The flashpoint temperature of this hazardous item; i.e., the lowest temperature at which vapors above a volatile combustible substance ignite in air when exposed to flame.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const HazardousItemFieldMetaAdditionalTemperature = new FieldMeta<HazardousItemField>(
  HazardousItemField.AdditionalTemperature,
  'AdditionalTemperature',
  'Additional Temperature',
  'Temperature',
  'Another temperature relevant to the handling of this hazardous item.',
  '0..n',
  'cac',
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
