import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnawardedNotification } from  '../../model/doc/UnawardedNotification'
import { UnawardedNotificationFieldMeta } from  '../../meta/doc/UnawardedNotificationMeta'
import AppealTermsDisplay from '../cac/AppealTermsDisplay'
import { AppealTerms } from '../../model/cac/AppealTerms'
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
import TenderResultDisplay from '../cac/TenderResultDisplay'
import { TenderResult } from '../../model/cac/TenderResult'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: UnawardedNotification
  meta: FieldMeta<T>
}

export default function UnawardedNotificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={UnawardedNotificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnawardedNotificationFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnawardedNotificationFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnawardedNotificationFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnawardedNotificationFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnawardedNotificationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={UnawardedNotificationFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnawardedNotificationFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UnawardedNotificationFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={UnawardedNotificationFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={UnawardedNotificationFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UnawardedNotificationFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UnawardedNotificationFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={UnawardedNotificationFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={UnawardedNotificationFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={UnawardedNotificationFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.MinutesDocumentReference} 
          value={value.MinutesDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={UnawardedNotificationFieldMeta.MinutesDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={UnawardedNotificationFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.TenderResult} 
          value={value.TenderResult}
          itemDisplay={ (itemValue: TenderResult, key: string | number) =>
            <TenderResultDisplay key={key} meta={UnawardedNotificationFieldMeta.TenderResult} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UnawardedNotificationFieldMeta.AppealTerms} 
          value={value.AppealTerms}
          itemDisplay={ (itemValue: AppealTerms, key: string | number) =>
            <AppealTermsDisplay key={key} meta={UnawardedNotificationFieldMeta.AppealTerms} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
