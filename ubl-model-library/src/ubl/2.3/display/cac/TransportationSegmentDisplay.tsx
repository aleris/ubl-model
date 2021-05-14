import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: TransportationSegment
  meta: FieldMeta<T>
}

export default function TransportationSegmentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransportationSegment ubl-TransportationSegmentType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportationSegment ubl-UBLExtensions"
          meta={TransportationSegmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportationSegmentFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationSegment ubl-Numeric ubl-SequenceNumeric"
          meta={TransportationSegmentFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Sequence"
              value={itemValue}
              meta={TransportationSegmentFieldMeta.SequenceNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationSegment ubl-Identifier ubl-TransportExecutionPlanReferenceID"
          meta={TransportationSegmentFieldMeta.TransportExecutionPlanReferenceID} 
          value={value.TransportExecutionPlanReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Transport Execution Plan Reference"
              value={itemValue}
              meta={TransportationSegmentFieldMeta.TransportExecutionPlanReferenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationSegment ubl-TransportationService"
          meta={TransportationSegmentFieldMeta.TransportationService} 
          value={value.TransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay
              key={key}
              label="Transportation Service"
              value={itemValue}
              meta={TransportationSegmentFieldMeta.TransportationService}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationSegment ubl-Party ubl-TransportServiceProviderParty"
          meta={TransportationSegmentFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Transport Service Provider Party"
              value={itemValue}
              meta={TransportationSegmentFieldMeta.TransportServiceProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationSegment ubl-Consignment ubl-ReferencedConsignment"
          meta={TransportationSegmentFieldMeta.ReferencedConsignment} 
          value={value.ReferencedConsignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay
              key={key}
              label="Referenced Consignment"
              value={itemValue}
              meta={TransportationSegmentFieldMeta.ReferencedConsignment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationSegment ubl-ShipmentStage"
          meta={TransportationSegmentFieldMeta.ShipmentStage} 
          value={value.ShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay
              key={key}
              label="Shipment Stage"
              value={itemValue}
              meta={TransportationSegmentFieldMeta.ShipmentStage}
            />
          }
        />
        </div>
    </div>
  )
}
