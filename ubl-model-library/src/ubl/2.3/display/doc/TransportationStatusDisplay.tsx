import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportationStatus
  meta: FieldMeta<T>
}

export default function TransportationStatusDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportationStatusFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportationStatusFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationStatusFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationStatusFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationStatusFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationStatusFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationStatusFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationStatusFieldMeta.CarrierAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationStatusFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TransportationStatusFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TransportationStatusFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportationStatusFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportationStatusFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportationStatusFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.ShippingOrderID} 
          value={value.ShippingOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportationStatusFieldMeta.ShippingOrderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.OtherInstruction} 
          value={value.OtherInstruction}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportationStatusFieldMeta.OtherInstruction} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.TransportationStatusTypeCode} 
          value={value.TransportationStatusTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportationStatusFieldMeta.TransportationStatusTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.TransportExecutionStatusCode} 
          value={value.TransportExecutionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportationStatusFieldMeta.TransportExecutionStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.Consignment} 
          value={value.Consignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay key={key} meta={TransportationStatusFieldMeta.Consignment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportationStatusFieldMeta.TransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportationStatusFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TransportationStatusFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportationStatusFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportationStatusFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.TransportationStatusRequestDocumentReference} 
          value={value.TransportationStatusRequestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportationStatusFieldMeta.TransportationStatusRequestDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.TransportExecutionPlanDocumentReference} 
          value={value.TransportExecutionPlanDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportationStatusFieldMeta.TransportExecutionPlanDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.UpdatedPickupTransportEvent} 
          value={value.UpdatedPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportationStatusFieldMeta.UpdatedPickupTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.UpdatedDeliveryTransportEvent} 
          value={value.UpdatedDeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={TransportationStatusFieldMeta.UpdatedDeliveryTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.StatusLocation} 
          value={value.StatusLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={TransportationStatusFieldMeta.StatusLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportationStatusFieldMeta.StatusPeriod} 
          value={value.StatusPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportationStatusFieldMeta.StatusPeriod} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
