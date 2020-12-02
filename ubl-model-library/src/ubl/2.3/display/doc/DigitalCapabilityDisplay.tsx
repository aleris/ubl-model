import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalCapability } from  '../../model/doc/DigitalCapability'
import { DigitalCapabilityFieldMeta } from  '../../meta/doc/DigitalCapabilityMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DigitalProcessDisplay from '../cac/DigitalProcessDisplay'
import { DigitalProcess } from '../../model/cac/DigitalProcess'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: DigitalCapability
  meta: FieldMeta<T>
}

export default function DigitalCapabilityDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DigitalCapabilityFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalCapabilityFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalCapabilityFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalCapabilityFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalCapabilityFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalCapabilityFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalCapabilityFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DigitalCapabilityFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DigitalCapabilityFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalCapabilityFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalCapabilityFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={DigitalCapabilityFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DigitalCapabilityFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DigitalCapabilityFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.BusinessParty} 
          value={value.BusinessParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DigitalCapabilityFieldMeta.BusinessParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalCapabilityFieldMeta.DigitalProcess} 
          value={value.DigitalProcess}
          itemDisplay={ (itemValue: DigitalProcess, key: string | number) =>
            <DigitalProcessDisplay key={key} meta={DigitalCapabilityFieldMeta.DigitalProcess} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
