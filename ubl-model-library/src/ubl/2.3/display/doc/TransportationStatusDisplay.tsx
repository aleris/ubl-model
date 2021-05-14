import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TransportationStatus
  meta: FieldMeta<T>
}

export default function TransportationStatusDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TransportationStatus ubl-TransportationStatusType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportationStatus ubl-UBLExtensions"
          meta={TransportationStatusFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportationStatusFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Identifier ubl-UBLVersionID"
          meta={TransportationStatusFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TransportationStatusFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Identifier ubl-CustomizationID"
          meta={TransportationStatusFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TransportationStatusFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Identifier ubl-ProfileID"
          meta={TransportationStatusFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TransportationStatusFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Identifier ubl-ProfileExecutionID"
          meta={TransportationStatusFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TransportationStatusFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Identifier ubl-ID"
          meta={TransportationStatusFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportationStatusFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Identifier ubl-CarrierAssignedID"
          meta={TransportationStatusFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Carrier Assigned Identifier"
              value={itemValue}
              meta={TransportationStatusFieldMeta.CarrierAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Identifier ubl-UUID"
          meta={TransportationStatusFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TransportationStatusFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Date ubl-IssueDate"
          meta={TransportationStatusFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TransportationStatusFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Time ubl-IssueTime"
          meta={TransportationStatusFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TransportationStatusFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Text ubl-Name"
          meta={TransportationStatusFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TransportationStatusFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Text ubl-Description"
          meta={TransportationStatusFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TransportationStatusFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Text ubl-Note"
          meta={TransportationStatusFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TransportationStatusFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Identifier ubl-ShippingOrderID"
          meta={TransportationStatusFieldMeta.ShippingOrderID} 
          value={value.ShippingOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Shipping Order Identifier"
              value={itemValue}
              meta={TransportationStatusFieldMeta.ShippingOrderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Text ubl-OtherInstruction"
          meta={TransportationStatusFieldMeta.OtherInstruction} 
          value={value.OtherInstruction}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Other Instruction"
              value={itemValue}
              meta={TransportationStatusFieldMeta.OtherInstruction}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Code ubl-TransportationStatusTypeCode"
          meta={TransportationStatusFieldMeta.TransportationStatusTypeCode} 
          value={value.TransportationStatusTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transportation Status Type Code"
              value={itemValue}
              meta={TransportationStatusFieldMeta.TransportationStatusTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatus ubl-Code ubl-TransportExecutionStatusCode"
          meta={TransportationStatusFieldMeta.TransportExecutionStatusCode} 
          value={value.TransportExecutionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Execution Status Code"
              value={itemValue}
              meta={TransportationStatusFieldMeta.TransportExecutionStatusCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatus ubl-Consignment"
          meta={TransportationStatusFieldMeta.Consignment} 
          value={value.Consignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay
              key={key}
              label="Consignment"
              value={itemValue}
              meta={TransportationStatusFieldMeta.Consignment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatus ubl-TransportEvent"
          meta={TransportationStatusFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Transport Event"
              value={itemValue}
              meta={TransportationStatusFieldMeta.TransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatus ubl-DocumentReference"
          meta={TransportationStatusFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={TransportationStatusFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatus ubl-Signature"
          meta={TransportationStatusFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TransportationStatusFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationStatus ubl-Party ubl-SenderParty"
          meta={TransportationStatusFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={TransportationStatusFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationStatus ubl-Party ubl-ReceiverParty"
          meta={TransportationStatusFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TransportationStatusFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationStatus ubl-DocumentReference ubl-TransportationStatusRequestDocumentReference"
          meta={TransportationStatusFieldMeta.TransportationStatusRequestDocumentReference} 
          value={value.TransportationStatusRequestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transportation Status Request Document Reference"
              value={itemValue}
              meta={TransportationStatusFieldMeta.TransportationStatusRequestDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationStatus ubl-DocumentReference ubl-TransportExecutionPlanDocumentReference"
          meta={TransportationStatusFieldMeta.TransportExecutionPlanDocumentReference} 
          value={value.TransportExecutionPlanDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transport Execution Plan Document Reference"
              value={itemValue}
              meta={TransportationStatusFieldMeta.TransportExecutionPlanDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationStatus ubl-TransportEvent ubl-UpdatedPickupTransportEvent"
          meta={TransportationStatusFieldMeta.UpdatedPickupTransportEvent} 
          value={value.UpdatedPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Updated Pickup Transport Event"
              value={itemValue}
              meta={TransportationStatusFieldMeta.UpdatedPickupTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationStatus ubl-TransportEvent ubl-UpdatedDeliveryTransportEvent"
          meta={TransportationStatusFieldMeta.UpdatedDeliveryTransportEvent} 
          value={value.UpdatedDeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Updated Delivery Transport Event"
              value={itemValue}
              meta={TransportationStatusFieldMeta.UpdatedDeliveryTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatus ubl-Location ubl-StatusLocation"
          meta={TransportationStatusFieldMeta.StatusLocation} 
          value={value.StatusLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Status Location"
              value={itemValue}
              meta={TransportationStatusFieldMeta.StatusLocation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatus ubl-Period ubl-StatusPeriod"
          meta={TransportationStatusFieldMeta.StatusPeriod} 
          value={value.StatusPeriod}
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
