import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportationService } from  '../../model/cac/TransportationService'
import { TransportationServiceFieldMeta } from  '../../meta/cac/TransportationServiceMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CommodityClassificationDisplay from './CommodityClassificationDisplay'
import { CommodityClassification } from '../../model/cac/CommodityClassification'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import EnvironmentalEmissionDisplay from './EnvironmentalEmissionDisplay'
import { EnvironmentalEmission } from '../../model/cac/EnvironmentalEmission'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ServiceFrequencyDisplay from './ServiceFrequencyDisplay'
import { ServiceFrequency } from '../../model/cac/ServiceFrequency'
import ShipmentStageDisplay from './ShipmentStageDisplay'
import { ShipmentStage } from '../../model/cac/ShipmentStage'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import TransportEquipmentDisplay from './TransportEquipmentDisplay'
import { TransportEquipment } from '../../model/cac/TransportEquipment'
import TransportEventDisplay from './TransportEventDisplay'
import { TransportEvent } from '../../model/cac/TransportEvent'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TransportationService
  meta: FieldMeta<T>
}

export default function TransportationServiceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportationServiceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportationServiceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.TransportServiceCode} 
          value={value.TransportServiceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportationServiceFieldMeta.TransportServiceCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.TariffClassCode} 
          value={value.TariffClassCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportationServiceFieldMeta.TariffClassCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.Priority} 
          value={value.Priority}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportationServiceFieldMeta.Priority} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.FreightRateClassCode} 
          value={value.FreightRateClassCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportationServiceFieldMeta.FreightRateClassCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.TransportationServiceDescription} 
          value={value.TransportationServiceDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportationServiceFieldMeta.TransportationServiceDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.TransportationServiceDetailsURI} 
          value={value.TransportationServiceDetailsURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationServiceFieldMeta.TransportationServiceDetailsURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.NominationDate} 
          value={value.NominationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TransportationServiceFieldMeta.NominationDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.NominationTime} 
          value={value.NominationTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TransportationServiceFieldMeta.NominationTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportationServiceFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TransportationServiceFieldMeta.SequenceNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.TransportEquipment} 
          value={value.TransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay key={key} meta={TransportationServiceFieldMeta.TransportEquipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.SupportedTransportEquipment} 
          value={value.SupportedTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay key={key} meta={TransportationServiceFieldMeta.SupportedTransportEquipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.UnsupportedTransportEquipment} 
          value={value.UnsupportedTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay key={key} meta={TransportationServiceFieldMeta.UnsupportedTransportEquipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.CommodityClassification} 
          value={value.CommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay key={key} meta={TransportationServiceFieldMeta.CommodityClassification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.SupportedCommodityClassification} 
          value={value.SupportedCommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay key={key} meta={TransportationServiceFieldMeta.SupportedCommodityClassification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.UnsupportedCommodityClassification} 
          value={value.UnsupportedCommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay key={key} meta={TransportationServiceFieldMeta.UnsupportedCommodityClassification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.TotalCapacityDimension} 
          value={value.TotalCapacityDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={TransportationServiceFieldMeta.TotalCapacityDimension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.ShipmentStage} 
          value={value.ShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay key={key} meta={TransportationServiceFieldMeta.ShipmentStage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportationServiceFieldMeta.TransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.ResponsibleTransportServiceProviderParty} 
          value={value.ResponsibleTransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportationServiceFieldMeta.ResponsibleTransportServiceProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.EnvironmentalEmission} 
          value={value.EnvironmentalEmission}
          itemDisplay={ (itemValue: EnvironmentalEmission, key: string | number) =>
            <EnvironmentalEmissionDisplay key={key} meta={TransportationServiceFieldMeta.EnvironmentalEmission} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.EstimatedDurationPeriod} 
          value={value.EstimatedDurationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportationServiceFieldMeta.EstimatedDurationPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationServiceFieldMeta.ScheduledServiceFrequency} 
          value={value.ScheduledServiceFrequency}
          itemDisplay={ (itemValue: ServiceFrequency, key: string | number) =>
            <ServiceFrequencyDisplay key={key} meta={TransportationServiceFieldMeta.ScheduledServiceFrequency} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
