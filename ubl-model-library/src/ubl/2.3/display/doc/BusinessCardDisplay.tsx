import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { BusinessCard } from  '../../model/doc/BusinessCard'
import { BusinessCardFieldMeta } from  '../../meta/doc/BusinessCardMeta'
import CapabilityDisplay from '../cac/CapabilityDisplay'
import { Capability } from '../../model/cac/Capability'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: BusinessCard
  meta: FieldMeta<T>
}

export default function BusinessCardDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={BusinessCardFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={BusinessCardFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BusinessCardFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BusinessCardFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BusinessCardFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BusinessCardFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BusinessCardFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BusinessCardFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={BusinessCardFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={BusinessCardFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BusinessCardFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BusinessCardFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.BriefDescription} 
          value={value.BriefDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={BusinessCardFieldMeta.BriefDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={BusinessCardFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={BusinessCardFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={BusinessCardFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.BusinessParty} 
          value={value.BusinessParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={BusinessCardFieldMeta.BusinessParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.BrochureDocumentReference} 
          value={value.BrochureDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BusinessCardFieldMeta.BrochureDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BusinessCardFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BusinessCardFieldMeta.BusinessCapability} 
          value={value.BusinessCapability}
          itemDisplay={ (itemValue: Capability, key: string | number) =>
            <CapabilityDisplay key={key} meta={BusinessCardFieldMeta.BusinessCapability} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
