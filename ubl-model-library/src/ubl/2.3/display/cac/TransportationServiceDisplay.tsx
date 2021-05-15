import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: TransportationService | undefined
  meta: FieldMeta<T>
}

export default function TransportationServiceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TransportationService">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportationServiceFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Transport Service Code"
            value={value.TransportServiceCode?.[0]}
            meta={TransportationServiceFieldMeta.TransportServiceCode}
          />

          <CodeDisplay
            label="Tariff Class Code"
            value={value.TariffClassCode?.[0]}
            meta={TransportationServiceFieldMeta.TariffClassCode}
          />

          <TextDisplay
            label="Priority"
            value={value.Priority?.[0]}
            meta={TransportationServiceFieldMeta.Priority}
          />

          <CodeDisplay
            label="Freight Rate Class Code"
            value={value.FreightRateClassCode?.[0]}
            meta={TransportationServiceFieldMeta.FreightRateClassCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-TransportationServiceDescription"
            label="Transportation Service Description"
            items={value.TransportationServiceDescription}
            meta={TransportationServiceFieldMeta.TransportationServiceDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Transportation Service Description"
                value={itemValue}
                meta={TransportationServiceFieldMeta.TransportationServiceDescription}
              />
            }
          />

          <IdentifierDisplay
            label="Transportation Service Details URI"
            value={value.TransportationServiceDetailsURI?.[0]}
            meta={TransportationServiceFieldMeta.TransportationServiceDetailsURI}
          />

          <DateDisplay
            label="Nomination Date"
            value={value.NominationDate?.[0]}
            meta={TransportationServiceFieldMeta.NominationDate}
          />

          <TimeDisplay
            label="Nomination Time"
            value={value.NominationTime?.[0]}
            meta={TransportationServiceFieldMeta.NominationTime}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={TransportationServiceFieldMeta.Name}
          />

          <NumericDisplay
            label="Sequence"
            value={value.SequenceNumeric?.[0]}
            meta={TransportationServiceFieldMeta.SequenceNumeric}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEquipment"
            label="Transport Equipment"
            items={value.TransportEquipment}
            meta={TransportationServiceFieldMeta.TransportEquipment} 
            itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
              <TransportEquipmentDisplay
                key={key}
                label="Transport Equipment"
                value={itemValue}
                meta={TransportationServiceFieldMeta.TransportEquipment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEquipment ubl-SupportedTransportEquipment"
            label="Supported Transport Equipment"
            items={value.SupportedTransportEquipment}
            meta={TransportationServiceFieldMeta.SupportedTransportEquipment} 
            itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
              <TransportEquipmentDisplay
                key={key}
                label="Supported Transport Equipment"
                value={itemValue}
                meta={TransportationServiceFieldMeta.SupportedTransportEquipment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEquipment ubl-UnsupportedTransportEquipment"
            label="Unsupported Transport Equipment"
            items={value.UnsupportedTransportEquipment}
            meta={TransportationServiceFieldMeta.UnsupportedTransportEquipment} 
            itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
              <TransportEquipmentDisplay
                key={key}
                label="Unsupported Transport Equipment"
                value={itemValue}
                meta={TransportationServiceFieldMeta.UnsupportedTransportEquipment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CommodityClassification"
            label="Commodity Classification"
            items={value.CommodityClassification}
            meta={TransportationServiceFieldMeta.CommodityClassification} 
            itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
              <CommodityClassificationDisplay
                key={key}
                label="Commodity Classification"
                value={itemValue}
                meta={TransportationServiceFieldMeta.CommodityClassification}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CommodityClassification ubl-SupportedCommodityClassification"
            label="Supported Commodity Classification"
            items={value.SupportedCommodityClassification}
            meta={TransportationServiceFieldMeta.SupportedCommodityClassification} 
            itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
              <CommodityClassificationDisplay
                key={key}
                label="Supported Commodity Classification"
                value={itemValue}
                meta={TransportationServiceFieldMeta.SupportedCommodityClassification}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CommodityClassification ubl-UnsupportedCommodityClassification"
            label="Unsupported Commodity Classification"
            items={value.UnsupportedCommodityClassification}
            meta={TransportationServiceFieldMeta.UnsupportedCommodityClassification} 
            itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
              <CommodityClassificationDisplay
                key={key}
                label="Unsupported Commodity Classification"
                value={itemValue}
                meta={TransportationServiceFieldMeta.UnsupportedCommodityClassification}
              />
            }
          />

          <DimensionDisplay
            label="Total Capacity Dimension"
            value={value.TotalCapacityDimension?.[0]}
            meta={TransportationServiceFieldMeta.TotalCapacityDimension}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ShipmentStage"
            label="Shipment Stage"
            items={value.ShipmentStage}
            meta={TransportationServiceFieldMeta.ShipmentStage} 
            itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
              <ShipmentStageDisplay
                key={key}
                label="Shipment Stage"
                value={itemValue}
                meta={TransportationServiceFieldMeta.ShipmentStage}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent"
            label="Transport Event"
            items={value.TransportEvent}
            meta={TransportationServiceFieldMeta.TransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Transport Event"
                value={itemValue}
                meta={TransportationServiceFieldMeta.TransportEvent}
              />
            }
          />

          <PartyDisplay
            label="Responsible Transport Service Provider Party"
            value={value.ResponsibleTransportServiceProviderParty?.[0]}
            meta={TransportationServiceFieldMeta.ResponsibleTransportServiceProviderParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-EnvironmentalEmission"
            label="Environmental Emission"
            items={value.EnvironmentalEmission}
            meta={TransportationServiceFieldMeta.EnvironmentalEmission} 
            itemDisplay={ (itemValue: EnvironmentalEmission, key: string | number) =>
              <EnvironmentalEmissionDisplay
                key={key}
                label="Environmental Emission"
                value={itemValue}
                meta={TransportationServiceFieldMeta.EnvironmentalEmission}
              />
            }
          />

          <PeriodDisplay
            label="Estimated Duration Period"
            value={value.EstimatedDurationPeriod?.[0]}
            meta={TransportationServiceFieldMeta.EstimatedDurationPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ServiceFrequency ubl-ScheduledServiceFrequency"
            label="Scheduled Service Frequency"
            items={value.ScheduledServiceFrequency}
            meta={TransportationServiceFieldMeta.ScheduledServiceFrequency} 
            itemDisplay={ (itemValue: ServiceFrequency, key: string | number) =>
              <ServiceFrequencyDisplay
                key={key}
                label="Scheduled Service Frequency"
                value={itemValue}
                meta={TransportationServiceFieldMeta.ScheduledServiceFrequency}
              />
            }
          />
        </div>
    </div>
  )
}
