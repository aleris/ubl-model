import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EnquiryResponse } from  '../../model/doc/EnquiryResponse'
import { EnquiryResponseFieldMeta } from  '../../meta/doc/EnquiryResponseMeta'
import AttachmentDisplay from '../cac/AttachmentDisplay'
import { Attachment } from '../../model/cac/Attachment'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
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
  value: EnquiryResponse
  meta: FieldMeta<T>
}

export default function EnquiryResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-EnquiryResponse ubl-EnquiryResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EnquiryResponse ubl-UBLExtensions"
          meta={EnquiryResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Identifier ubl-UBLVersionID"
          meta={EnquiryResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Identifier ubl-CustomizationID"
          meta={EnquiryResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Identifier ubl-ProfileID"
          meta={EnquiryResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Identifier ubl-ProfileExecutionID"
          meta={EnquiryResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Identifier ubl-ID"
          meta={EnquiryResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Indicator ubl-CopyIndicator"
          meta={EnquiryResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Identifier ubl-UUID"
          meta={EnquiryResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Date ubl-IssueDate"
          meta={EnquiryResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Time ubl-IssueTime"
          meta={EnquiryResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-EnquiryResponse ubl-Text ubl-Description"
          meta={EnquiryResponseFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EnquiryResponse ubl-Signature"
          meta={EnquiryResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EnquiryResponse ubl-Party ubl-RequestorParty"
          meta={EnquiryResponseFieldMeta.RequestorParty} 
          value={value.RequestorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Requestor Party"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.RequestorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EnquiryResponse ubl-Party ubl-ResponderParty"
          meta={EnquiryResponseFieldMeta.ResponderParty} 
          value={value.ResponderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Responder Party"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.ResponderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EnquiryResponse ubl-DocumentReference ubl-ParentDocumentReference"
          meta={EnquiryResponseFieldMeta.ParentDocumentReference} 
          value={value.ParentDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Parent Document Reference"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.ParentDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EnquiryResponse ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={EnquiryResponseFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EnquiryResponse ubl-Attachment"
          meta={EnquiryResponseFieldMeta.Attachment} 
          value={value.Attachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay
              key={key}
              label="Attachment"
              value={itemValue}
              meta={EnquiryResponseFieldMeta.Attachment}
            />
          }
        />
        </div>
    </div>
  )
}
