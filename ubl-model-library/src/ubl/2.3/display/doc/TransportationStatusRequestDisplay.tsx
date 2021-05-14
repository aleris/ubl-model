import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportationStatusRequest } from  '../../model/doc/TransportationStatusRequest'
import { TransportationStatusRequestFieldMeta } from  '../../meta/doc/TransportationStatusRequestMeta'
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
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportationStatusRequest
  meta: FieldMeta<T>
}

export default function TransportationStatusRequestDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TransportationStatusRequest ubl-TransportationStatusRequestType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportationStatusRequest ubl-UBLExtensions"
          meta={TransportationStatusRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Identifier ubl-UBLVersionID"
          meta={TransportationStatusRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Identifier ubl-CustomizationID"
          meta={TransportationStatusRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Identifier ubl-ProfileID"
          meta={TransportationStatusRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Identifier ubl-ProfileExecutionID"
          meta={TransportationStatusRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Identifier ubl-ID"
          meta={TransportationStatusRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Identifier ubl-CarrierAssignedID"
          meta={TransportationStatusRequestFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Carrier Assigned Identifier"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.CarrierAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Identifier ubl-UUID"
          meta={TransportationStatusRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Date ubl-IssueDate"
          meta={TransportationStatusRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Time ubl-IssueTime"
          meta={TransportationStatusRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Text ubl-Name"
          meta={TransportationStatusRequestFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Text ubl-Description"
          meta={TransportationStatusRequestFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Text ubl-Note"
          meta={TransportationStatusRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Identifier ubl-ShippingOrderID"
          meta={TransportationStatusRequestFieldMeta.ShippingOrderID} 
          value={value.ShippingOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Shipping Order Identifier"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.ShippingOrderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Text ubl-OtherInstruction"
          meta={TransportationStatusRequestFieldMeta.OtherInstruction} 
          value={value.OtherInstruction}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Other Instruction"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.OtherInstruction}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportationStatusRequest ubl-Code ubl-TransportationStatusTypeCode"
          meta={TransportationStatusRequestFieldMeta.TransportationStatusTypeCode} 
          value={value.TransportationStatusTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transportation Status Type Code"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.TransportationStatusTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationStatusRequest ubl-Party ubl-SenderParty"
          meta={TransportationStatusRequestFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationStatusRequest ubl-Party ubl-ReceiverParty"
          meta={TransportationStatusRequestFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportationStatusRequest ubl-DocumentReference ubl-TransportExecutionPlanDocumentReference"
          meta={TransportationStatusRequestFieldMeta.TransportExecutionPlanDocumentReference} 
          value={value.TransportExecutionPlanDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transport Execution Plan Document Reference"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.TransportExecutionPlanDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatusRequest ubl-Consignment"
          meta={TransportationStatusRequestFieldMeta.Consignment} 
          value={value.Consignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay
              key={key}
              label="Consignment"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.Consignment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatusRequest ubl-DocumentReference"
          meta={TransportationStatusRequestFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatusRequest ubl-Signature"
          meta={TransportationStatusRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.Signature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatusRequest ubl-Location ubl-RequestedStatusLocation"
          meta={TransportationStatusRequestFieldMeta.RequestedStatusLocation} 
          value={value.RequestedStatusLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Requested Status Location"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.RequestedStatusLocation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportationStatusRequest ubl-Period ubl-RequestedStatusPeriod"
          meta={TransportationStatusRequestFieldMeta.RequestedStatusPeriod} 
          value={value.RequestedStatusPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Requested Status Period"
              value={itemValue}
              meta={TransportationStatusRequestFieldMeta.RequestedStatusPeriod}
            />
          }
        />
        </div>
    </div>
  )
}
