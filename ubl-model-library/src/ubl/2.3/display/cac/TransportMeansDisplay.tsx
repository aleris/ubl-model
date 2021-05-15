import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TransportMeans | undefined
  meta: FieldMeta<T>
}

export default function TransportMeansDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TransportMeans">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportMeansFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Journey Identifier"
            value={value.JourneyID?.[0]}
            meta={TransportMeansFieldMeta.JourneyID}
          />

          <IdentifierDisplay
            label="Registration Nationality Identifier"
            value={value.RegistrationNationalityID?.[0]}
            meta={TransportMeansFieldMeta.RegistrationNationalityID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-RegistrationNationality"
            label="Registration Nationality"
            items={value.RegistrationNationality}
            meta={TransportMeansFieldMeta.RegistrationNationality} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Registration Nationality"
                value={itemValue}
                meta={TransportMeansFieldMeta.RegistrationNationality}
              />
            }
          />

          <CodeDisplay
            label="Direction Code"
            value={value.DirectionCode?.[0]}
            meta={TransportMeansFieldMeta.DirectionCode}
          />

          <CodeDisplay
            label="Transport Means Type Code"
            value={value.TransportMeansTypeCode?.[0]}
            meta={TransportMeansFieldMeta.TransportMeansTypeCode}
          />

          <CodeDisplay
            label="Trade Service Code"
            value={value.TradeServiceCode?.[0]}
            meta={TransportMeansFieldMeta.TradeServiceCode}
          />

          <StowageDisplay
            label="Stowage"
            value={value.Stowage?.[0]}
            meta={TransportMeansFieldMeta.Stowage}
          />

          <AirTransportDisplay
            label="Air Transport"
            value={value.AirTransport?.[0]}
            meta={TransportMeansFieldMeta.AirTransport}
          />

          <RoadTransportDisplay
            label="Road Transport"
            value={value.RoadTransport?.[0]}
            meta={TransportMeansFieldMeta.RoadTransport}
          />

          <RailTransportDisplay
            label="Rail Transport"
            value={value.RailTransport?.[0]}
            meta={TransportMeansFieldMeta.RailTransport}
          />

          <MaritimeTransportDisplay
            label="Maritime Transport"
            value={value.MaritimeTransport?.[0]}
            meta={TransportMeansFieldMeta.MaritimeTransport}
          />

          <PartyDisplay
            label="Owner Party"
            value={value.OwnerParty?.[0]}
            meta={TransportMeansFieldMeta.OwnerParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Dimension ubl-MeasurementDimension"
            label="Measurement Dimension"
            items={value.MeasurementDimension}
            meta={TransportMeansFieldMeta.MeasurementDimension} 
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
