import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TransportationSegment | undefined
  meta: FieldMeta<T>
}

export default function TransportationSegmentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TransportationSegment">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportationSegmentFieldMeta.UBLExtensions}
          />

          <NumericDisplay
            label="Sequence"
            value={value.SequenceNumeric?.[0]}
            meta={TransportationSegmentFieldMeta.SequenceNumeric}
          />

          <IdentifierDisplay
            label="Transport Execution Plan Reference"
            value={value.TransportExecutionPlanReferenceID?.[0]}
            meta={TransportationSegmentFieldMeta.TransportExecutionPlanReferenceID}
          />

          <TransportationServiceDisplay
            label="Transportation Service"
            value={value.TransportationService?.[0]}
            meta={TransportationSegmentFieldMeta.TransportationService}
          />

          <PartyDisplay
            label="Transport Service Provider Party"
            value={value.TransportServiceProviderParty?.[0]}
            meta={TransportationSegmentFieldMeta.TransportServiceProviderParty}
          />

          <ConsignmentDisplay
            label="Referenced Consignment"
            value={value.ReferencedConsignment?.[0]}
            meta={TransportationSegmentFieldMeta.ReferencedConsignment}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ShipmentStage"
            label="Shipment Stage"
            items={value.ShipmentStage}
            meta={TransportationSegmentFieldMeta.ShipmentStage} 
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
