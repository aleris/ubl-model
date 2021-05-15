import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportationStatus } from  '../../model/doc/TransportationStatus'
import { TransportationStatusFieldMeta } from  '../../meta/doc/TransportationStatusMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ConsignmentDisplay from '../cac/ConsignmentDisplay'
import { Consignment } from '../../model/cac/Consignment'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from '../cac/LocationDisplay'
import { Location } from '../../model/cac/Location'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import TransportEventDisplay from '../cac/TransportEventDisplay'
import { TransportEvent } from '../../model/cac/TransportEvent'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportationStatus | undefined
  meta: FieldMeta<T>
}

export default function TransportationStatusDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TransportationStatus">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportationStatusFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TransportationStatusFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TransportationStatusFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TransportationStatusFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TransportationStatusFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportationStatusFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Carrier Assigned Identifier"
            value={value.CarrierAssignedID?.[0]}
            meta={TransportationStatusFieldMeta.CarrierAssignedID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TransportationStatusFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TransportationStatusFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TransportationStatusFieldMeta.IssueTime}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={TransportationStatusFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TransportationStatusFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TransportationStatusFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TransportationStatusFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TransportationStatusFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Shipping Order Identifier"
            value={value.ShippingOrderID?.[0]}
            meta={TransportationStatusFieldMeta.ShippingOrderID}
          />

          <TextDisplay
            label="Other Instruction"
            value={value.OtherInstruction?.[0]}
            meta={TransportationStatusFieldMeta.OtherInstruction}
          />

          <CodeDisplay
            label="Transportation Status Type Code"
            value={value.TransportationStatusTypeCode?.[0]}
            meta={TransportationStatusFieldMeta.TransportationStatusTypeCode}
          />

          <CodeDisplay
            label="Transport Execution Status Code"
            value={value.TransportExecutionStatusCode?.[0]}
            meta={TransportationStatusFieldMeta.TransportExecutionStatusCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Consignment"
            label="Consignment"
            items={value.Consignment}
            meta={TransportationStatusFieldMeta.Consignment} 
            itemDisplay={ (itemValue: Consignment, key: string | number) =>
              <ConsignmentDisplay
                key={key}
                label="Consignment"
                value={itemValue}
                meta={TransportationStatusFieldMeta.Consignment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TransportEvent"
            label="Transport Event"
            items={value.TransportEvent}
            meta={TransportationStatusFieldMeta.TransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Transport Event"
                value={itemValue}
                meta={TransportationStatusFieldMeta.TransportEvent}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={TransportationStatusFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={TransportationStatusFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TransportationStatusFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TransportationStatusFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={TransportationStatusFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={TransportationStatusFieldMeta.ReceiverParty}
          />

          <DocumentReferenceDisplay
            label="Transportation Status Request Document Reference"
            value={value.TransportationStatusRequestDocumentReference?.[0]}
            meta={TransportationStatusFieldMeta.TransportationStatusRequestDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Transport Execution Plan Document Reference"
            value={value.TransportExecutionPlanDocumentReference?.[0]}
            meta={TransportationStatusFieldMeta.TransportExecutionPlanDocumentReference}
          />

          <TransportEventDisplay
            label="Updated Pickup Transport Event"
            value={value.UpdatedPickupTransportEvent?.[0]}
            meta={TransportationStatusFieldMeta.UpdatedPickupTransportEvent}
          />

          <TransportEventDisplay
            label="Updated Delivery Transport Event"
            value={value.UpdatedDeliveryTransportEvent?.[0]}
            meta={TransportationStatusFieldMeta.UpdatedDeliveryTransportEvent}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Location ubl-StatusLocation"
            label="Status Location"
            items={value.StatusLocation}
            meta={TransportationStatusFieldMeta.StatusLocation} 
            itemDisplay={ (itemValue: Location, key: string | number) =>
              <LocationDisplay
                key={key}
                label="Status Location"
                value={itemValue}
                meta={TransportationStatusFieldMeta.StatusLocation}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-StatusPeriod"
            label="Status Period"
            items={value.StatusPeriod}
            meta={TransportationStatusFieldMeta.StatusPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Status Period"
                value={itemValue}
                meta={TransportationStatusFieldMeta.StatusPeriod}
              />
            }
          />
        </div>
    </div>
  )
}
