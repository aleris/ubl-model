import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: HazardousItem
  meta: FieldMeta<T>
}

export default function HazardousItemDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={HazardousItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={HazardousItemFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={HazardousItemFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.PlacardNotation} 
          value={value.PlacardNotation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={HazardousItemFieldMeta.PlacardNotation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.PlacardEndorsement} 
          value={value.PlacardEndorsement}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={HazardousItemFieldMeta.PlacardEndorsement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.AdditionalInformation} 
          value={value.AdditionalInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={HazardousItemFieldMeta.AdditionalInformation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.UNDGCode} 
          value={value.UNDGCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={HazardousItemFieldMeta.UNDGCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.EmergencyProceduresCode} 
          value={value.EmergencyProceduresCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={HazardousItemFieldMeta.EmergencyProceduresCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.MedicalFirstAidGuideCode} 
          value={value.MedicalFirstAidGuideCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={HazardousItemFieldMeta.MedicalFirstAidGuideCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.TechnicalName} 
          value={value.TechnicalName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={HazardousItemFieldMeta.TechnicalName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.CategoryName} 
          value={value.CategoryName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={HazardousItemFieldMeta.CategoryName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.HazardousCategoryCode} 
          value={value.HazardousCategoryCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={HazardousItemFieldMeta.HazardousCategoryCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.UpperOrangeHazardPlacardID} 
          value={value.UpperOrangeHazardPlacardID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={HazardousItemFieldMeta.UpperOrangeHazardPlacardID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.LowerOrangeHazardPlacardID} 
          value={value.LowerOrangeHazardPlacardID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={HazardousItemFieldMeta.LowerOrangeHazardPlacardID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.MarkingID} 
          value={value.MarkingID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={HazardousItemFieldMeta.MarkingID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.HazardClassID} 
          value={value.HazardClassID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={HazardousItemFieldMeta.HazardClassID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.NetWeightMeasure} 
          value={value.NetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={HazardousItemFieldMeta.NetWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.NetVolumeMeasure} 
          value={value.NetVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={HazardousItemFieldMeta.NetVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={HazardousItemFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.ContactParty} 
          value={value.ContactParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={HazardousItemFieldMeta.ContactParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.SecondaryHazard} 
          value={value.SecondaryHazard}
          itemDisplay={ (itemValue: SecondaryHazard, key: string | number) =>
            <SecondaryHazardDisplay key={key} meta={HazardousItemFieldMeta.SecondaryHazard} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.HazardousGoodsTransit} 
          value={value.HazardousGoodsTransit}
          itemDisplay={ (itemValue: HazardousGoodsTransit, key: string | number) =>
            <HazardousGoodsTransitDisplay key={key} meta={HazardousItemFieldMeta.HazardousGoodsTransit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.EmergencyTemperature} 
          value={value.EmergencyTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={HazardousItemFieldMeta.EmergencyTemperature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.FlashpointTemperature} 
          value={value.FlashpointTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={HazardousItemFieldMeta.FlashpointTemperature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={HazardousItemFieldMeta.AdditionalTemperature} 
          value={value.AdditionalTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={HazardousItemFieldMeta.AdditionalTemperature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
