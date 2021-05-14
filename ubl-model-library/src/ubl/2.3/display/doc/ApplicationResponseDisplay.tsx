import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ApplicationResponse } from  '../../model/doc/ApplicationResponse'
import { ApplicationResponseFieldMeta } from  '../../meta/doc/ApplicationResponseMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentResponseDisplay from '../cac/DocumentResponseDisplay'
import { DocumentResponse } from '../../model/cac/DocumentResponse'
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
  value: ApplicationResponse
  meta: FieldMeta<T>
}

export default function ApplicationResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-ApplicationResponse ubl-ApplicationResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ApplicationResponse ubl-UBLExtensions"
          meta={ApplicationResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Identifier ubl-UBLVersionID"
          meta={ApplicationResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Identifier ubl-CustomizationID"
          meta={ApplicationResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Identifier ubl-ProfileID"
          meta={ApplicationResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Identifier ubl-ProfileExecutionID"
          meta={ApplicationResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Identifier ubl-ID"
          meta={ApplicationResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Identifier ubl-UUID"
          meta={ApplicationResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Date ubl-IssueDate"
          meta={ApplicationResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Time ubl-IssueTime"
          meta={ApplicationResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Date ubl-ResponseDate"
          meta={ApplicationResponseFieldMeta.ResponseDate} 
          value={value.ResponseDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Response Date"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.ResponseDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Time ubl-ResponseTime"
          meta={ApplicationResponseFieldMeta.ResponseTime} 
          value={value.ResponseTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Response Time"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.ResponseTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Text ubl-Note"
          meta={ApplicationResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ApplicationResponse ubl-Identifier ubl-VersionID"
          meta={ApplicationResponseFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.VersionID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ApplicationResponse ubl-Signature"
          meta={ApplicationResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ApplicationResponse ubl-Party ubl-SenderParty"
          meta={ApplicationResponseFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ApplicationResponse ubl-Party ubl-ReceiverParty"
          meta={ApplicationResponseFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ApplicationResponse ubl-DocumentResponse"
          meta={ApplicationResponseFieldMeta.DocumentResponse} 
          value={value.DocumentResponse}
          itemDisplay={ (itemValue: DocumentResponse, key: string | number) =>
            <DocumentResponseDisplay
              key={key}
              label="Document Response"
              value={itemValue}
              meta={ApplicationResponseFieldMeta.DocumentResponse}
            />
          }
        />
        </div>
    </div>
  )
}
