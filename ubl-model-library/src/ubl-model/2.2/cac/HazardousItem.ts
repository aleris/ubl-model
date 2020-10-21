import { Code } from '../cbc/Code'
import { HazardousGoodsTransit } from './HazardousGoodsTransit'
import { Identifier } from '../cbc/Identifier'
import { Measure } from '../cbc/Measure'
import { Party } from './Party'
import { Quantity } from '../cbc/Quantity'
import { SecondaryHazard } from './SecondaryHazard'
import { Temperature } from './Temperature'
import { Text } from '../cbc/Text'

/**
 * A class to describe a hazardous item.
 */
export interface HazardousItem {
  /**
   * An identifier for this hazardous item.
   * Identifier
   * Cardinality: 0..1
   * Examples: Round Up
   */
  ID?: [Identifier] | undefined

  /**
   * Text of the placard notation corresponding to the hazard class of this hazardous item. Can also be the hazard
   * identification number of the orange placard (upper part) required on the means of transport.
   * Text
   * Cardinality: 0..1
   * Examples: 5.1
   */
  PlacardNotation?: [Text] | undefined

  /**
   * Text of the placard endorsement that is to be shown on the shipping papers for this hazardous item. Can also be
   * used for the number of the orange placard (lower part) required on the means of transport.
   * Text
   * Cardinality: 0..1
   * Examples: 2
   */
  PlacardEndorsement?: [Text] | undefined

  /**
   * Text providing further information about the hazardous substance.
   * Text
   * Cardinality: 0..n
   * Examples: Must be stored away from flammable materials N.O.S. or a Waste Characteristics Code in conjunction with
   * Examples: an EPA Waste Stream code
   */
  AdditionalInformation?: Array<Text> | undefined

  /**
   * The UN code for this kind of hazardous item.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: UN Code
   */
  UNDGCode?: [Code] | undefined

  /**
   * A code signifying the emergency procedures for this hazardous item.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: EMG code, EMS Page Number
   */
  EmergencyProceduresCode?: [Code] | undefined

  /**
   * A code signifying a medical first aid guide appropriate to this hazardous item.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: MFAG page number
   */
  MedicalFirstAidGuideCode?: [Code] | undefined

  /**
   * The full technical name of a specific hazardous substance contained in this goods item.
   * Name
   * Cardinality: 0..1
   * Examples: Granular Sodium Chlorate WeedKiller
   */
  TechnicalName?: [Text] | undefined

  /**
   * The name of the category of hazard that applies to the Item.
   * Name
   * Cardinality: 0..1
   */
  CategoryName?: [Text] | undefined

  /**
   * A code signifying a kind of hazard for a material.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Hazardous material class code
   */
  HazardousCategoryCode?: [Code] | undefined

  /**
   * The number for the upper part of the orange hazard placard required on the means of transport.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Hazard identification number (upper part)
   */
  UpperOrangeHazardPlacardID?: [Identifier] | undefined

  /**
   * The number for the lower part of the orange hazard placard required on the means of transport.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Substance identification number (lower part)
   */
  LowerOrangeHazardPlacardID?: [Identifier] | undefined

  /**
   * An identifier to the marking of the Hazardous Item
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Dangerous goods label marking
   */
  MarkingID?: [Identifier] | undefined

  /**
   * An identifier for the hazard class applicable to this hazardous item as defined by the relevant regulation
   * authority (e.g., the IMDG Class Number of the SOLAS Convention of IMO and the ADR/RID Class Number for the
   * road/rail environment).
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: IMDG Class Number, ADR/RID Class Number
   */
  HazardClassID?: [Identifier] | undefined

  /**
   * The net weight of this hazardous item, excluding packaging.
   * Measure
   * Cardinality: 0..1
   */
  NetWeightMeasure?: [Measure] | undefined

  /**
   * The volume of this hazardous item, excluding packaging and transport equipment.
   * Measure
   * Cardinality: 0..1
   */
  NetVolumeMeasure?: [Measure] | undefined

  /**
   * The quantity of goods items in this hazardous item that are hazardous.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity?: [Quantity] | undefined

  /**
   * The individual, group, or body to be contacted in case of a hazardous incident associated with this item.
   * Party
   * Cardinality: 0..1
   */
  ContactParty?: [Party] | undefined

  /**
   * A secondary hazard associated with this hazardous item.
   * Secondary Hazard
   * Cardinality: 0..n
   */
  SecondaryHazard?: Array<SecondaryHazard> | undefined

  /**
   * Information related to the transit of this kind of hazardous goods.
   * Hazardous Goods Transit
   * Cardinality: 0..n
   */
  HazardousGoodsTransit?: Array<HazardousGoodsTransit> | undefined

  /**
   * The threshold temperature at which emergency procedures apply in the handling of temperature-controlled goods.
   * Temperature
   * Cardinality: 0..1
   */
  EmergencyTemperature?: [Temperature] | undefined

  /**
   * The flashpoint temperature of this hazardous item; i.e., the lowest temperature at which vapors above a volatile
   * combustible substance ignite in air when exposed to flame.
   * Temperature
   * Cardinality: 0..1
   */
  FlashpointTemperature?: [Temperature] | undefined

  /**
   * Another temperature relevant to the handling of this hazardous item.
   * Temperature
   * Cardinality: 0..n
   */
  AdditionalTemperature?: Array<Temperature> | undefined
}
