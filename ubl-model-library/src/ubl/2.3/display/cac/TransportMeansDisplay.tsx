import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportMeans
  meta: FieldMeta<T>
}

export default function TransportMeansDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportMeansFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportMeansFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.JourneyID} 
          value={value.JourneyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportMeansFieldMeta.JourneyID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.RegistrationNationalityID} 
          value={value.RegistrationNationalityID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportMeansFieldMeta.RegistrationNationalityID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.RegistrationNationality} 
          value={value.RegistrationNationality}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportMeansFieldMeta.RegistrationNationality} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.DirectionCode} 
          value={value.DirectionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportMeansFieldMeta.DirectionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.TransportMeansTypeCode} 
          value={value.TransportMeansTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportMeansFieldMeta.TransportMeansTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.TradeServiceCode} 
          value={value.TradeServiceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportMeansFieldMeta.TradeServiceCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.Stowage} 
          value={value.Stowage}
          itemDisplay={ (itemValue: Stowage, key: string | number) =>
            <StowageDisplay key={key} meta={TransportMeansFieldMeta.Stowage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.AirTransport} 
          value={value.AirTransport}
          itemDisplay={ (itemValue: AirTransport, key: string | number) =>
            <AirTransportDisplay key={key} meta={TransportMeansFieldMeta.AirTransport} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.RoadTransport} 
          value={value.RoadTransport}
          itemDisplay={ (itemValue: RoadTransport, key: string | number) =>
            <RoadTransportDisplay key={key} meta={TransportMeansFieldMeta.RoadTransport} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.RailTransport} 
          value={value.RailTransport}
          itemDisplay={ (itemValue: RailTransport, key: string | number) =>
            <RailTransportDisplay key={key} meta={TransportMeansFieldMeta.RailTransport} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.MaritimeTransport} 
          value={value.MaritimeTransport}
          itemDisplay={ (itemValue: MaritimeTransport, key: string | number) =>
            <MaritimeTransportDisplay key={key} meta={TransportMeansFieldMeta.MaritimeTransport} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.OwnerParty} 
          value={value.OwnerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportMeansFieldMeta.OwnerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportMeansFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={TransportMeansFieldMeta.MeasurementDimension} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
