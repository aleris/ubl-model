import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { HazardousItem } from  '../../model/cac/HazardousItem'
import { HazardousItemFieldMeta } from  '../../meta/cac/HazardousItemMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import HazardousGoodsTransitDisplay from './HazardousGoodsTransitDisplay'
import { HazardousGoodsTransit } from '../../model/cac/HazardousGoodsTransit'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import SecondaryHazardDisplay from './SecondaryHazardDisplay'
import { SecondaryHazard } from '../../model/cac/SecondaryHazard'
import TemperatureDisplay from './TemperatureDisplay'
import { Temperature } from '../../model/cac/Temperature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: HazardousItem | undefined
  meta: FieldMeta<T>
}

export default function HazardousItemDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-HazardousItem">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={HazardousItemFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={HazardousItemFieldMeta.ID}
          />

          <TextDisplay
            label="Placard Notation"
            value={value.PlacardNotation?.[0]}
            meta={HazardousItemFieldMeta.PlacardNotation}
          />

          <TextDisplay
            label="Placard Endorsement"
            value={value.PlacardEndorsement?.[0]}
            meta={HazardousItemFieldMeta.PlacardEndorsement}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-AdditionalInformation"
            label="Additional Information"
            items={value.AdditionalInformation}
            meta={HazardousItemFieldMeta.AdditionalInformation} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Additional Information"
                value={itemValue}
                meta={HazardousItemFieldMeta.AdditionalInformation}
              />
            }
          />

          <CodeDisplay
            label="UNDG Code"
            value={value.UNDGCode?.[0]}
            meta={HazardousItemFieldMeta.UNDGCode}
          />

          <CodeDisplay
            label="Emergency Procedures Code"
            value={value.EmergencyProceduresCode?.[0]}
            meta={HazardousItemFieldMeta.EmergencyProceduresCode}
          />

          <CodeDisplay
            label="Medical First Aid Guide Code"
            value={value.MedicalFirstAidGuideCode?.[0]}
            meta={HazardousItemFieldMeta.MedicalFirstAidGuideCode}
          />

          <TextDisplay
            label="Technical Name"
            value={value.TechnicalName?.[0]}
            meta={HazardousItemFieldMeta.TechnicalName}
          />

          <TextDisplay
            label="Category"
            value={value.CategoryName?.[0]}
            meta={HazardousItemFieldMeta.CategoryName}
          />

          <CodeDisplay
            label="Hazardous Category Code"
            value={value.HazardousCategoryCode?.[0]}
            meta={HazardousItemFieldMeta.HazardousCategoryCode}
          />

          <IdentifierDisplay
            label="Upper Orange Hazard Placard Identifier"
            value={value.UpperOrangeHazardPlacardID?.[0]}
            meta={HazardousItemFieldMeta.UpperOrangeHazardPlacardID}
          />

          <IdentifierDisplay
            label="Lower Orange Hazard Placard Identifier"
            value={value.LowerOrangeHazardPlacardID?.[0]}
            meta={HazardousItemFieldMeta.LowerOrangeHazardPlacardID}
          />

          <IdentifierDisplay
            label="Marking Identifier"
            value={value.MarkingID?.[0]}
            meta={HazardousItemFieldMeta.MarkingID}
          />

          <IdentifierDisplay
            label="Hazard Class Identifier"
            value={value.HazardClassID?.[0]}
            meta={HazardousItemFieldMeta.HazardClassID}
          />

          <MeasureDisplay
            label="Net Weight"
            value={value.NetWeightMeasure?.[0]}
            meta={HazardousItemFieldMeta.NetWeightMeasure}
          />

          <MeasureDisplay
            label="Net Volume"
            value={value.NetVolumeMeasure?.[0]}
            meta={HazardousItemFieldMeta.NetVolumeMeasure}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={HazardousItemFieldMeta.Quantity}
          />

          <PartyDisplay
            label="Contact Party"
            value={value.ContactParty?.[0]}
            meta={HazardousItemFieldMeta.ContactParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-SecondaryHazard"
            label="Secondary Hazard"
            items={value.SecondaryHazard}
            meta={HazardousItemFieldMeta.SecondaryHazard} 
            itemDisplay={ (itemValue: SecondaryHazard, key: string | number) =>
              <SecondaryHazardDisplay
                key={key}
                label="Secondary Hazard"
                value={itemValue}
                meta={HazardousItemFieldMeta.SecondaryHazard}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-HazardousGoodsTransit"
            label="Hazardous Goods Transit"
            items={value.HazardousGoodsTransit}
            meta={HazardousItemFieldMeta.HazardousGoodsTransit} 
            itemDisplay={ (itemValue: HazardousGoodsTransit, key: string | number) =>
              <HazardousGoodsTransitDisplay
                key={key}
                label="Hazardous Goods Transit"
                value={itemValue}
                meta={HazardousItemFieldMeta.HazardousGoodsTransit}
              />
            }
          />

          <TemperatureDisplay
            label="Emergency Temperature"
            value={value.EmergencyTemperature?.[0]}
            meta={HazardousItemFieldMeta.EmergencyTemperature}
          />

          <TemperatureDisplay
            label="Flashpoint Temperature"
            value={value.FlashpointTemperature?.[0]}
            meta={HazardousItemFieldMeta.FlashpointTemperature}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Temperature ubl-AdditionalTemperature"
            label="Additional Temperature"
            items={value.AdditionalTemperature}
            meta={HazardousItemFieldMeta.AdditionalTemperature} 
            itemDisplay={ (itemValue: Temperature, key: string | number) =>
              <TemperatureDisplay
                key={key}
                label="Additional Temperature"
                value={itemValue}
                meta={HazardousItemFieldMeta.AdditionalTemperature}
              />
            }
          />
        </div>
    </div>
  )
}
