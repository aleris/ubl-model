import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: HazardousItem
  meta: FieldMeta<T>
}

export default function HazardousItemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-HazardousItem ubl-HazardousItemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-HazardousItem ubl-UBLExtensions"
          meta={HazardousItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={HazardousItemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Identifier ubl-ID"
          meta={HazardousItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={HazardousItemFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Text ubl-PlacardNotation"
          meta={HazardousItemFieldMeta.PlacardNotation} 
          value={value.PlacardNotation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Placard Notation"
              value={itemValue}
              meta={HazardousItemFieldMeta.PlacardNotation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Text ubl-PlacardEndorsement"
          meta={HazardousItemFieldMeta.PlacardEndorsement} 
          value={value.PlacardEndorsement}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Placard Endorsement"
              value={itemValue}
              meta={HazardousItemFieldMeta.PlacardEndorsement}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Text ubl-AdditionalInformation"
          meta={HazardousItemFieldMeta.AdditionalInformation} 
          value={value.AdditionalInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Additional Information"
              value={itemValue}
              meta={HazardousItemFieldMeta.AdditionalInformation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Code ubl-UNDGCode"
          meta={HazardousItemFieldMeta.UNDGCode} 
          value={value.UNDGCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="UNDG Code"
              value={itemValue}
              meta={HazardousItemFieldMeta.UNDGCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Code ubl-EmergencyProceduresCode"
          meta={HazardousItemFieldMeta.EmergencyProceduresCode} 
          value={value.EmergencyProceduresCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Emergency Procedures Code"
              value={itemValue}
              meta={HazardousItemFieldMeta.EmergencyProceduresCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Code ubl-MedicalFirstAidGuideCode"
          meta={HazardousItemFieldMeta.MedicalFirstAidGuideCode} 
          value={value.MedicalFirstAidGuideCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Medical First Aid Guide Code"
              value={itemValue}
              meta={HazardousItemFieldMeta.MedicalFirstAidGuideCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Text ubl-TechnicalName"
          meta={HazardousItemFieldMeta.TechnicalName} 
          value={value.TechnicalName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Technical Name"
              value={itemValue}
              meta={HazardousItemFieldMeta.TechnicalName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Text ubl-CategoryName"
          meta={HazardousItemFieldMeta.CategoryName} 
          value={value.CategoryName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Category"
              value={itemValue}
              meta={HazardousItemFieldMeta.CategoryName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Code ubl-HazardousCategoryCode"
          meta={HazardousItemFieldMeta.HazardousCategoryCode} 
          value={value.HazardousCategoryCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Hazardous Category Code"
              value={itemValue}
              meta={HazardousItemFieldMeta.HazardousCategoryCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Identifier ubl-UpperOrangeHazardPlacardID"
          meta={HazardousItemFieldMeta.UpperOrangeHazardPlacardID} 
          value={value.UpperOrangeHazardPlacardID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Upper Orange Hazard Placard Identifier"
              value={itemValue}
              meta={HazardousItemFieldMeta.UpperOrangeHazardPlacardID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Identifier ubl-LowerOrangeHazardPlacardID"
          meta={HazardousItemFieldMeta.LowerOrangeHazardPlacardID} 
          value={value.LowerOrangeHazardPlacardID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Lower Orange Hazard Placard Identifier"
              value={itemValue}
              meta={HazardousItemFieldMeta.LowerOrangeHazardPlacardID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Identifier ubl-MarkingID"
          meta={HazardousItemFieldMeta.MarkingID} 
          value={value.MarkingID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Marking Identifier"
              value={itemValue}
              meta={HazardousItemFieldMeta.MarkingID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Identifier ubl-HazardClassID"
          meta={HazardousItemFieldMeta.HazardClassID} 
          value={value.HazardClassID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Hazard Class Identifier"
              value={itemValue}
              meta={HazardousItemFieldMeta.HazardClassID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Measure ubl-NetWeightMeasure"
          meta={HazardousItemFieldMeta.NetWeightMeasure} 
          value={value.NetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Weight"
              value={itemValue}
              meta={HazardousItemFieldMeta.NetWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Measure ubl-NetVolumeMeasure"
          meta={HazardousItemFieldMeta.NetVolumeMeasure} 
          value={value.NetVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Volume"
              value={itemValue}
              meta={HazardousItemFieldMeta.NetVolumeMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-HazardousItem ubl-Quantity"
          meta={HazardousItemFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={HazardousItemFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-HazardousItem ubl-Party ubl-ContactParty"
          meta={HazardousItemFieldMeta.ContactParty} 
          value={value.ContactParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Contact Party"
              value={itemValue}
              meta={HazardousItemFieldMeta.ContactParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-HazardousItem ubl-SecondaryHazard"
          meta={HazardousItemFieldMeta.SecondaryHazard} 
          value={value.SecondaryHazard}
          itemDisplay={ (itemValue: SecondaryHazard, key: string | number) =>
            <SecondaryHazardDisplay
              key={key}
              label="Secondary Hazard"
              value={itemValue}
              meta={HazardousItemFieldMeta.SecondaryHazard}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-HazardousItem ubl-HazardousGoodsTransit"
          meta={HazardousItemFieldMeta.HazardousGoodsTransit} 
          value={value.HazardousGoodsTransit}
          itemDisplay={ (itemValue: HazardousGoodsTransit, key: string | number) =>
            <HazardousGoodsTransitDisplay
              key={key}
              label="Hazardous Goods Transit"
              value={itemValue}
              meta={HazardousItemFieldMeta.HazardousGoodsTransit}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-HazardousItem ubl-Temperature ubl-EmergencyTemperature"
          meta={HazardousItemFieldMeta.EmergencyTemperature} 
          value={value.EmergencyTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Emergency Temperature"
              value={itemValue}
              meta={HazardousItemFieldMeta.EmergencyTemperature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-HazardousItem ubl-Temperature ubl-FlashpointTemperature"
          meta={HazardousItemFieldMeta.FlashpointTemperature} 
          value={value.FlashpointTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Flashpoint Temperature"
              value={itemValue}
              meta={HazardousItemFieldMeta.FlashpointTemperature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-HazardousItem ubl-Temperature ubl-AdditionalTemperature"
          meta={HazardousItemFieldMeta.AdditionalTemperature} 
          value={value.AdditionalTemperature}
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
