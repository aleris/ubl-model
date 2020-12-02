import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PackingList } from  '../../model/doc/PackingList'
import { PackingListFieldMeta } from  '../../meta/doc/PackingListMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentDistributionDisplay from '../cac/DocumentDistributionDisplay'
import { DocumentDistribution } from '../../model/cac/DocumentDistribution'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import ShipmentDisplay from '../cac/ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PackingList
  meta: FieldMeta<T>
}

export default function PackingListDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PackingListFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PackingListFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PackingListFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PackingListFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PackingListFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PackingListFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PackingListFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PackingListFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PackingListFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={PackingListFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PackingListFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PackingListFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PackingListFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PackingListFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.OtherInstruction} 
          value={value.OtherInstruction}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PackingListFieldMeta.OtherInstruction} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PackingListFieldMeta.ConsignorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PackingListFieldMeta.CarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PackingListFieldMeta.FreightForwarderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={PackingListFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={PackingListFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay key={key} meta={PackingListFieldMeta.DocumentDistribution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PackingListFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={PackingListFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
