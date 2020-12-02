import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: GoodsItemItinerary
  meta: FieldMeta<T>
}

export default function GoodsItemItineraryDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={GoodsItemItineraryFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemItineraryFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemItineraryFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemItineraryFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemItineraryFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemItineraryFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={GoodsItemItineraryFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemItineraryFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={GoodsItemItineraryFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={GoodsItemItineraryFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GoodsItemItineraryFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemItineraryFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.TransportExecutionPlanReferenceID} 
          value={value.TransportExecutionPlanReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemItineraryFieldMeta.TransportExecutionPlanReferenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={GoodsItemItineraryFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsItemItineraryFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={GoodsItemItineraryFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.ReferencedConsignment} 
          value={value.ReferencedConsignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay key={key} meta={GoodsItemItineraryFieldMeta.ReferencedConsignment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.ReferencedTransportEquipment} 
          value={value.ReferencedTransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay key={key} meta={GoodsItemItineraryFieldMeta.ReferencedTransportEquipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.ReferencedPackage} 
          value={value.ReferencedPackage}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay key={key} meta={GoodsItemItineraryFieldMeta.ReferencedPackage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.ReferencedGoodsItem} 
          value={value.ReferencedGoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay key={key} meta={GoodsItemItineraryFieldMeta.ReferencedGoodsItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemItineraryFieldMeta.TransportationSegment} 
          value={value.TransportationSegment}
          itemDisplay={ (itemValue: TransportationSegment, key: string | number) =>
            <TransportationSegmentDisplay key={key} meta={GoodsItemItineraryFieldMeta.TransportationSegment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
