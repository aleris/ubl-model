import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportationSegment } from  '../../model/cac/TransportationSegment'
import { TransportationSegmentFieldMeta } from  '../../meta/cac/TransportationSegmentMeta'
import ConsignmentDisplay from './ConsignmentDisplay'
import { Consignment } from '../../model/cac/Consignment'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import ShipmentStageDisplay from './ShipmentStageDisplay'
import { ShipmentStage } from '../../model/cac/ShipmentStage'
import TransportationServiceDisplay from './TransportationServiceDisplay'
import { TransportationService } from '../../model/cac/TransportationService'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TransportationSegment
  meta: FieldMeta<T>
}

export default function TransportationSegmentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportationSegmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportationSegmentFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationSegmentFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TransportationSegmentFieldMeta.SequenceNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationSegmentFieldMeta.TransportExecutionPlanReferenceID} 
          value={value.TransportExecutionPlanReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationSegmentFieldMeta.TransportExecutionPlanReferenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationSegmentFieldMeta.TransportationService} 
          value={value.TransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay key={key} meta={TransportationSegmentFieldMeta.TransportationService} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationSegmentFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportationSegmentFieldMeta.TransportServiceProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationSegmentFieldMeta.ReferencedConsignment} 
          value={value.ReferencedConsignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay key={key} meta={TransportationSegmentFieldMeta.ReferencedConsignment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationSegmentFieldMeta.ShipmentStage} 
          value={value.ShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay key={key} meta={TransportationSegmentFieldMeta.ShipmentStage} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
