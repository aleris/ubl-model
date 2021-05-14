import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportMeans } from  '../../model/cac/TransportMeans'
import { TransportMeansFieldMeta } from  '../../meta/cac/TransportMeansMeta'
import AirTransportDisplay from './AirTransportDisplay'
import { AirTransport } from '../../model/cac/AirTransport'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import MaritimeTransportDisplay from './MaritimeTransportDisplay'
import { MaritimeTransport } from '../../model/cac/MaritimeTransport'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import RailTransportDisplay from './RailTransportDisplay'
import { RailTransport } from '../../model/cac/RailTransport'
import RoadTransportDisplay from './RoadTransportDisplay'
import { RoadTransport } from '../../model/cac/RoadTransport'
import StowageDisplay from './StowageDisplay'
import { Stowage } from '../../model/cac/Stowage'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportMeans
  meta: FieldMeta<T>
}

export default function TransportMeansDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransportMeans ubl-TransportMeansType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportMeans ubl-UBLExtensions"
          meta={TransportMeansFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportMeansFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportMeans ubl-Identifier ubl-JourneyID"
          meta={TransportMeansFieldMeta.JourneyID} 
          value={value.JourneyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Journey Identifier"
              value={itemValue}
              meta={TransportMeansFieldMeta.JourneyID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportMeans ubl-Identifier ubl-RegistrationNationalityID"
          meta={TransportMeansFieldMeta.RegistrationNationalityID} 
          value={value.RegistrationNationalityID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Registration Nationality Identifier"
              value={itemValue}
              meta={TransportMeansFieldMeta.RegistrationNationalityID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportMeans ubl-Text ubl-RegistrationNationality"
          meta={TransportMeansFieldMeta.RegistrationNationality} 
          value={value.RegistrationNationality}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Registration Nationality"
              value={itemValue}
              meta={TransportMeansFieldMeta.RegistrationNationality}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportMeans ubl-Code ubl-DirectionCode"
          meta={TransportMeansFieldMeta.DirectionCode} 
          value={value.DirectionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Direction Code"
              value={itemValue}
              meta={TransportMeansFieldMeta.DirectionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportMeans ubl-Code ubl-TransportMeansTypeCode"
          meta={TransportMeansFieldMeta.TransportMeansTypeCode} 
          value={value.TransportMeansTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Means Type Code"
              value={itemValue}
              meta={TransportMeansFieldMeta.TransportMeansTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportMeans ubl-Code ubl-TradeServiceCode"
          meta={TransportMeansFieldMeta.TradeServiceCode} 
          value={value.TradeServiceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Trade Service Code"
              value={itemValue}
              meta={TransportMeansFieldMeta.TradeServiceCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportMeans ubl-Stowage"
          meta={TransportMeansFieldMeta.Stowage} 
          value={value.Stowage}
          itemDisplay={ (itemValue: Stowage, key: string | number) =>
            <StowageDisplay
              key={key}
              label="Stowage"
              value={itemValue}
              meta={TransportMeansFieldMeta.Stowage}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportMeans ubl-AirTransport"
          meta={TransportMeansFieldMeta.AirTransport} 
          value={value.AirTransport}
          itemDisplay={ (itemValue: AirTransport, key: string | number) =>
            <AirTransportDisplay
              key={key}
              label="Air Transport"
              value={itemValue}
              meta={TransportMeansFieldMeta.AirTransport}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportMeans ubl-RoadTransport"
          meta={TransportMeansFieldMeta.RoadTransport} 
          value={value.RoadTransport}
          itemDisplay={ (itemValue: RoadTransport, key: string | number) =>
            <RoadTransportDisplay
              key={key}
              label="Road Transport"
              value={itemValue}
              meta={TransportMeansFieldMeta.RoadTransport}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportMeans ubl-RailTransport"
          meta={TransportMeansFieldMeta.RailTransport} 
          value={value.RailTransport}
          itemDisplay={ (itemValue: RailTransport, key: string | number) =>
            <RailTransportDisplay
              key={key}
              label="Rail Transport"
              value={itemValue}
              meta={TransportMeansFieldMeta.RailTransport}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportMeans ubl-MaritimeTransport"
          meta={TransportMeansFieldMeta.MaritimeTransport} 
          value={value.MaritimeTransport}
          itemDisplay={ (itemValue: MaritimeTransport, key: string | number) =>
            <MaritimeTransportDisplay
              key={key}
              label="Maritime Transport"
              value={itemValue}
              meta={TransportMeansFieldMeta.MaritimeTransport}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportMeans ubl-Party ubl-OwnerParty"
          meta={TransportMeansFieldMeta.OwnerParty} 
          value={value.OwnerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Owner Party"
              value={itemValue}
              meta={TransportMeansFieldMeta.OwnerParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportMeans ubl-Dimension ubl-MeasurementDimension"
          meta={TransportMeansFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Measurement Dimension"
              value={itemValue}
              meta={TransportMeansFieldMeta.MeasurementDimension}
            />
          }
        />
        </div>
    </div>
  )
}
