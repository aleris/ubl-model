import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItemItinerary } from  '../../model/doc/GoodsItemItinerary'
import { GoodsItemItineraryFieldMeta } from  '../../meta/doc/GoodsItemItineraryMeta'
import ConsignmentDisplay from '../cac/ConsignmentDisplay'
import { Consignment } from '../../model/cac/Consignment'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import GoodsItemDisplay from '../cac/GoodsItemDisplay'
import { GoodsItem } from '../../model/cac/GoodsItem'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PackageDisplay from '../cac/PackageDisplay'
import { Package } from '../../model/cac/Package'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import TransportationSegmentDisplay from '../cac/TransportationSegmentDisplay'
import { TransportationSegment } from '../../model/cac/TransportationSegment'
import TransportEquipmentDisplay from '../cac/TransportEquipmentDisplay'
import { TransportEquipment } from '../../model/cac/TransportEquipment'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: GoodsItemItinerary | undefined
  meta: FieldMeta<T>
}

export default function GoodsItemItineraryDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-GoodsItemItinerary">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={GoodsItemItineraryFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={GoodsItemItineraryFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={GoodsItemItineraryFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={GoodsItemItineraryFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={GoodsItemItineraryFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={GoodsItemItineraryFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={GoodsItemItineraryFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={GoodsItemItineraryFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={GoodsItemItineraryFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={GoodsItemItineraryFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={GoodsItemItineraryFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={GoodsItemItineraryFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={GoodsItemItineraryFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Transport Execution Plan Reference"
            value={value.TransportExecutionPlanReferenceID?.[0]}
            meta={GoodsItemItineraryFieldMeta.TransportExecutionPlanReferenceID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={GoodsItemItineraryFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={GoodsItemItineraryFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={GoodsItemItineraryFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={GoodsItemItineraryFieldMeta.ReceiverParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Consignment ubl-ReferencedConsignment"
            label="Referenced Consignment"
            items={value.ReferencedConsignment}
            meta={GoodsItemItineraryFieldMeta.ReferencedConsignment} 
            itemDisplay={ (itemValue: Consignment, key: string | number) =>
              <ConsignmentDisplay
                key={key}
                label="Referenced Consignment"
                value={itemValue}
                meta={GoodsItemItineraryFieldMeta.ReferencedConsignment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TransportEquipment ubl-ReferencedTransportEquipment"
            label="Referenced Transport Equipment"
            items={value.ReferencedTransportEquipment}
            meta={GoodsItemItineraryFieldMeta.ReferencedTransportEquipment} 
            itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
              <TransportEquipmentDisplay
                key={key}
                label="Referenced Transport Equipment"
                value={itemValue}
                meta={GoodsItemItineraryFieldMeta.ReferencedTransportEquipment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Package ubl-ReferencedPackage"
            label="Referenced Package"
            items={value.ReferencedPackage}
            meta={GoodsItemItineraryFieldMeta.ReferencedPackage} 
            itemDisplay={ (itemValue: Package, key: string | number) =>
              <PackageDisplay
                key={key}
                label="Referenced Package"
                value={itemValue}
                meta={GoodsItemItineraryFieldMeta.ReferencedPackage}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-GoodsItem ubl-ReferencedGoodsItem"
            label="Referenced Goods Item"
            items={value.ReferencedGoodsItem}
            meta={GoodsItemItineraryFieldMeta.ReferencedGoodsItem} 
            itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
              <GoodsItemDisplay
                key={key}
                label="Referenced Goods Item"
                value={itemValue}
                meta={GoodsItemItineraryFieldMeta.ReferencedGoodsItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TransportationSegment"
            label="Transportation Segment"
            items={value.TransportationSegment}
            meta={GoodsItemItineraryFieldMeta.TransportationSegment} 
            itemDisplay={ (itemValue: TransportationSegment, key: string | number) =>
              <TransportationSegmentDisplay
                key={key}
                label="Transportation Segment"
                value={itemValue}
                meta={GoodsItemItineraryFieldMeta.TransportationSegment}
              />
            }
          />
        </div>
    </div>
  )
}
