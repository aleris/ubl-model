import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TransportationService
  meta: FieldMeta<T>
}

export default function TransportationServiceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransportationService ubl-TransportationServiceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportationService ubl-UBLExtensions"
          meta={TransportationServiceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportationServiceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationService ubl-Code ubl-TransportServiceCode"
          meta={TransportationServiceFieldMeta.TransportServiceCode} 
          value={value.TransportServiceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Service Code"
              value={itemValue}
              meta={TransportationServiceFieldMeta.TransportServiceCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationService ubl-Code ubl-TariffClassCode"
          meta={TransportationServiceFieldMeta.TariffClassCode} 
          value={value.TariffClassCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tariff Class Code"
              value={itemValue}
              meta={TransportationServiceFieldMeta.TariffClassCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationService ubl-Text ubl-Priority"
          meta={TransportationServiceFieldMeta.Priority} 
          value={value.Priority}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Priority"
              value={itemValue}
              meta={TransportationServiceFieldMeta.Priority}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationService ubl-Code ubl-FreightRateClassCode"
          meta={TransportationServiceFieldMeta.FreightRateClassCode} 
          value={value.FreightRateClassCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Freight Rate Class Code"
              value={itemValue}
              meta={TransportationServiceFieldMeta.FreightRateClassCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportationService ubl-Text ubl-TransportationServiceDescription"
          meta={TransportationServiceFieldMeta.TransportationServiceDescription} 
          value={value.TransportationServiceDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Transportation Service Description"
              value={itemValue}
              meta={TransportationServiceFieldMeta.TransportationServiceDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationService ubl-Identifier ubl-TransportationServiceDetailsURI"
          meta={TransportationServiceFieldMeta.TransportationServiceDetailsURI} 
          value={value.TransportationServiceDetailsURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Transportation Service Details URI"
              value={itemValue}
              meta={TransportationServiceFieldMeta.TransportationServiceDetailsURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationService ubl-Date ubl-NominationDate"
          meta={TransportationServiceFieldMeta.NominationDate} 
          value={value.NominationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Nomination Date"
              value={itemValue}
              meta={TransportationServiceFieldMeta.NominationDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationService ubl-Time ubl-NominationTime"
          meta={TransportationServiceFieldMeta.NominationTime} 
          value={value.NominationTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Nomination Time"
              value={itemValue}
              meta={TransportationServiceFieldMeta.NominationTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationService ubl-Text ubl-Name"
          meta={TransportationServiceFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TransportationServiceFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationService ubl-Numeric ubl-SequenceNumeric"
          meta={TransportationServiceFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Sequence"
              value={itemValue}
              meta={TransportationServiceFieldMeta.SequenceNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-TransportEquipment"
          meta={TransportationServiceFieldMeta.TransportEquipment} 
          value={value.TransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay
              key={key}
              label="Transport Equipment"
              value={itemValue}
              meta={TransportationServiceFieldMeta.TransportEquipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-TransportEquipment ubl-SupportedTransportEquipment"
          meta={TransportationServiceFieldMeta.SupportedTransportEquipment} 
          value={value.SupportedTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay
              key={key}
              label="Supported Transport Equipment"
              value={itemValue}
              meta={TransportationServiceFieldMeta.SupportedTransportEquipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-TransportEquipment ubl-UnsupportedTransportEquipment"
          meta={TransportationServiceFieldMeta.UnsupportedTransportEquipment} 
          value={value.UnsupportedTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay
              key={key}
              label="Unsupported Transport Equipment"
              value={itemValue}
              meta={TransportationServiceFieldMeta.UnsupportedTransportEquipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-CommodityClassification"
          meta={TransportationServiceFieldMeta.CommodityClassification} 
          value={value.CommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay
              key={key}
              label="Commodity Classification"
              value={itemValue}
              meta={TransportationServiceFieldMeta.CommodityClassification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-CommodityClassification ubl-SupportedCommodityClassification"
          meta={TransportationServiceFieldMeta.SupportedCommodityClassification} 
          value={value.SupportedCommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay
              key={key}
              label="Supported Commodity Classification"
              value={itemValue}
              meta={TransportationServiceFieldMeta.SupportedCommodityClassification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-CommodityClassification ubl-UnsupportedCommodityClassification"
          meta={TransportationServiceFieldMeta.UnsupportedCommodityClassification} 
          value={value.UnsupportedCommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay
              key={key}
              label="Unsupported Commodity Classification"
              value={itemValue}
              meta={TransportationServiceFieldMeta.UnsupportedCommodityClassification}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationService ubl-Dimension ubl-TotalCapacityDimension"
          meta={TransportationServiceFieldMeta.TotalCapacityDimension} 
          value={value.TotalCapacityDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Total Capacity Dimension"
              value={itemValue}
              meta={TransportationServiceFieldMeta.TotalCapacityDimension}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-ShipmentStage"
          meta={TransportationServiceFieldMeta.ShipmentStage} 
          value={value.ShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay
              key={key}
              label="Shipment Stage"
              value={itemValue}
              meta={TransportationServiceFieldMeta.ShipmentStage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-TransportEvent"
          meta={TransportationServiceFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Transport Event"
              value={itemValue}
              meta={TransportationServiceFieldMeta.TransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationService ubl-Party ubl-ResponsibleTransportServiceProviderParty"
          meta={TransportationServiceFieldMeta.ResponsibleTransportServiceProviderParty} 
          value={value.ResponsibleTransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Responsible Transport Service Provider Party"
              value={itemValue}
              meta={TransportationServiceFieldMeta.ResponsibleTransportServiceProviderParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-EnvironmentalEmission"
          meta={TransportationServiceFieldMeta.EnvironmentalEmission} 
          value={value.EnvironmentalEmission}
          itemDisplay={ (itemValue: EnvironmentalEmission, key: string | number) =>
            <EnvironmentalEmissionDisplay
              key={key}
              label="Environmental Emission"
              value={itemValue}
              meta={TransportationServiceFieldMeta.EnvironmentalEmission}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationService ubl-Period ubl-EstimatedDurationPeriod"
          meta={TransportationServiceFieldMeta.EstimatedDurationPeriod} 
          value={value.EstimatedDurationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Estimated Duration Period"
              value={itemValue}
              meta={TransportationServiceFieldMeta.EstimatedDurationPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationService ubl-ServiceFrequency ubl-ScheduledServiceFrequency"
          meta={TransportationServiceFieldMeta.ScheduledServiceFrequency} 
          value={value.ScheduledServiceFrequency}
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
