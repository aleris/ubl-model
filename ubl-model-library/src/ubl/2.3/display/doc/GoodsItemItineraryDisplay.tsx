import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: GoodsItemItinerary
  meta: FieldMeta<T>
}

export default function GoodsItemItineraryDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-GoodsItemItinerary ubl-GoodsItemItineraryType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-GoodsItemItinerary ubl-UBLExtensions"
          meta={GoodsItemItineraryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Identifier ubl-UBLVersionID"
          meta={GoodsItemItineraryFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Identifier ubl-CustomizationID"
          meta={GoodsItemItineraryFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Identifier ubl-ProfileID"
          meta={GoodsItemItineraryFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Identifier ubl-ProfileExecutionID"
          meta={GoodsItemItineraryFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Identifier ubl-ID"
          meta={GoodsItemItineraryFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Indicator ubl-CopyIndicator"
          meta={GoodsItemItineraryFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Identifier ubl-UUID"
          meta={GoodsItemItineraryFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Date ubl-IssueDate"
          meta={GoodsItemItineraryFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Time ubl-IssueTime"
          meta={GoodsItemItineraryFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Text ubl-Note"
          meta={GoodsItemItineraryFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Identifier ubl-VersionID"
          meta={GoodsItemItineraryFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-GoodsItemItinerary ubl-Identifier ubl-TransportExecutionPlanReferenceID"
          meta={GoodsItemItineraryFieldMeta.TransportExecutionPlanReferenceID} 
          value={value.TransportExecutionPlanReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Transport Execution Plan Reference"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.TransportExecutionPlanReferenceID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemItinerary ubl-Signature"
          meta={GoodsItemItineraryFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemItinerary ubl-Party ubl-SenderParty"
          meta={GoodsItemItineraryFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-GoodsItemItinerary ubl-Party ubl-ReceiverParty"
          meta={GoodsItemItineraryFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemItinerary ubl-Consignment ubl-ReferencedConsignment"
          meta={GoodsItemItineraryFieldMeta.ReferencedConsignment} 
          value={value.ReferencedConsignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay
              key={key}
              label="Referenced Consignment"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.ReferencedConsignment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemItinerary ubl-TransportEquipment ubl-ReferencedTransportEquipment"
          meta={GoodsItemItineraryFieldMeta.ReferencedTransportEquipment} 
          value={value.ReferencedTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay
              key={key}
              label="Referenced Transport Equipment"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.ReferencedTransportEquipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemItinerary ubl-Package ubl-ReferencedPackage"
          meta={GoodsItemItineraryFieldMeta.ReferencedPackage} 
          value={value.ReferencedPackage}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay
              key={key}
              label="Referenced Package"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.ReferencedPackage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemItinerary ubl-GoodsItem ubl-ReferencedGoodsItem"
          meta={GoodsItemItineraryFieldMeta.ReferencedGoodsItem} 
          value={value.ReferencedGoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay
              key={key}
              label="Referenced Goods Item"
              value={itemValue}
              meta={GoodsItemItineraryFieldMeta.ReferencedGoodsItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-GoodsItemItinerary ubl-TransportationSegment"
          meta={GoodsItemItineraryFieldMeta.TransportationSegment} 
          value={value.TransportationSegment}
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
