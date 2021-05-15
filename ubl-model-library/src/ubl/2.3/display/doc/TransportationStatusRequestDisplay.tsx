import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TransportationStatusRequest | undefined
  meta: FieldMeta<T>
}

export default function TransportationStatusRequestDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TransportationStatusRequest">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportationStatusRequestFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TransportationStatusRequestFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TransportationStatusRequestFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TransportationStatusRequestFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TransportationStatusRequestFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportationStatusRequestFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Carrier Assigned Identifier"
            value={value.CarrierAssignedID?.[0]}
            meta={TransportationStatusRequestFieldMeta.CarrierAssignedID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TransportationStatusRequestFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TransportationStatusRequestFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TransportationStatusRequestFieldMeta.IssueTime}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={TransportationStatusRequestFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TransportationStatusRequestFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TransportationStatusRequestFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TransportationStatusRequestFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TransportationStatusRequestFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Shipping Order Identifier"
            value={value.ShippingOrderID?.[0]}
            meta={TransportationStatusRequestFieldMeta.ShippingOrderID}
          />

          <TextDisplay
            label="Other Instruction"
            value={value.OtherInstruction?.[0]}
            meta={TransportationStatusRequestFieldMeta.OtherInstruction}
          />

          <CodeDisplay
            label="Transportation Status Type Code"
            value={value.TransportationStatusTypeCode?.[0]}
            meta={TransportationStatusRequestFieldMeta.TransportationStatusTypeCode}
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={TransportationStatusRequestFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={TransportationStatusRequestFieldMeta.ReceiverParty}
          />

          <DocumentReferenceDisplay
            label="Transport Execution Plan Document Reference"
            value={value.TransportExecutionPlanDocumentReference?.[0]}
            meta={TransportationStatusRequestFieldMeta.TransportExecutionPlanDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Consignment"
            label="Consignment"
            items={value.Consignment}
            meta={TransportationStatusRequestFieldMeta.Consignment} 
            itemDisplay={ (itemValue: Consignment, key: string | number) =>
              <ConsignmentDisplay
                key={key}
                label="Consignment"
                value={itemValue}
                meta={TransportationStatusRequestFieldMeta.Consignment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={TransportationStatusRequestFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={TransportationStatusRequestFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TransportationStatusRequestFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TransportationStatusRequestFieldMeta.Signature}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Location ubl-RequestedStatusLocation"
            label="Requested Status Location"
            items={value.RequestedStatusLocation}
            meta={TransportationStatusRequestFieldMeta.RequestedStatusLocation} 
            itemDisplay={ (itemValue: Location, key: string | number) =>
              <LocationDisplay
                key={key}
                label="Requested Status Location"
                value={itemValue}
                meta={TransportationStatusRequestFieldMeta.RequestedStatusLocation}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-RequestedStatusPeriod"
            label="Requested Status Period"
            items={value.RequestedStatusPeriod}
            meta={TransportationStatusRequestFieldMeta.RequestedStatusPeriod} 
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
