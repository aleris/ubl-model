import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Enquiry } from  '../../model/doc/Enquiry'
import { EnquiryFieldMeta } from  '../../meta/doc/EnquiryMeta'
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

type Params<T> = {
  value: Enquiry
  meta: FieldMeta<T>
}

export default function EnquiryDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EnquiryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EnquiryFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EnquiryFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EnquiryFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EnquiryFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EnquiryFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EnquiryFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={EnquiryFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EnquiryFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={EnquiryFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={EnquiryFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.LatestReplyDate} 
          value={value.LatestReplyDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={EnquiryFieldMeta.LatestReplyDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.LatestReplyTime} 
          value={value.LatestReplyTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={EnquiryFieldMeta.LatestReplyTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EnquiryFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={EnquiryFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.RequestorParty} 
          value={value.RequestorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={EnquiryFieldMeta.RequestorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.ResponderParty} 
          value={value.ResponderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={EnquiryFieldMeta.ResponderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={EnquiryFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnquiryFieldMeta.Attachment} 
          value={value.Attachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay key={key} meta={EnquiryFieldMeta.Attachment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
