import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: BusinessCard
  meta: FieldMeta<T>
}

export default function BusinessCardDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-BusinessCard ubl-BusinessCardType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-BusinessCard ubl-UBLExtensions"
          meta={BusinessCardFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={BusinessCardFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Identifier ubl-UBLVersionID"
          meta={BusinessCardFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={BusinessCardFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Identifier ubl-CustomizationID"
          meta={BusinessCardFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={BusinessCardFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Identifier ubl-ProfileID"
          meta={BusinessCardFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={BusinessCardFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Identifier ubl-ProfileExecutionID"
          meta={BusinessCardFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={BusinessCardFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Identifier ubl-ID"
          meta={BusinessCardFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={BusinessCardFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Identifier ubl-UUID"
          meta={BusinessCardFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={BusinessCardFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Date ubl-IssueDate"
          meta={BusinessCardFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={BusinessCardFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Time ubl-IssueTime"
          meta={BusinessCardFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={BusinessCardFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Identifier ubl-VersionID"
          meta={BusinessCardFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version Identifier"
              value={itemValue}
              meta={BusinessCardFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Identifier ubl-PreviousVersionID"
          meta={BusinessCardFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version Identifier"
              value={itemValue}
              meta={BusinessCardFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-BusinessCard ubl-Text ubl-BriefDescription"
          meta={BusinessCardFieldMeta.BriefDescription} 
          value={value.BriefDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Brief Description"
              value={itemValue}
              meta={BusinessCardFieldMeta.BriefDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BusinessCard ubl-Signature"
          meta={BusinessCardFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={BusinessCardFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BusinessCard ubl-Party ubl-SenderParty"
          meta={BusinessCardFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={BusinessCardFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BusinessCard ubl-Party ubl-ReceiverParty"
          meta={BusinessCardFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={BusinessCardFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BusinessCard ubl-Party ubl-BusinessParty"
          meta={BusinessCardFieldMeta.BusinessParty} 
          value={value.BusinessParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Business Party"
              value={itemValue}
              meta={BusinessCardFieldMeta.BusinessParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BusinessCard ubl-DocumentReference ubl-BrochureDocumentReference"
          meta={BusinessCardFieldMeta.BrochureDocumentReference} 
          value={value.BrochureDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Brochure Document Reference"
              value={itemValue}
              meta={BusinessCardFieldMeta.BrochureDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BusinessCard ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={BusinessCardFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={BusinessCardFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BusinessCard ubl-Capability ubl-BusinessCapability"
          meta={BusinessCardFieldMeta.BusinessCapability} 
          value={value.BusinessCapability}
          itemDisplay={ (itemValue: Capability, key: string | number) =>
            <CapabilityDisplay
              key={key}
              label="Business Capability"
              value={itemValue}
              meta={BusinessCardFieldMeta.BusinessCapability}
            />
          }
        />
        </div>
    </div>
  )
}
