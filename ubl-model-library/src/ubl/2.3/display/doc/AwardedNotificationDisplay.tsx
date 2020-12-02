import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AwardedNotification } from  '../../model/doc/AwardedNotification'
import { AwardedNotificationFieldMeta } from  '../../meta/doc/AwardedNotificationMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import FinancialGuaranteeDisplay from '../cac/FinancialGuaranteeDisplay'
import { FinancialGuarantee } from '../../model/cac/FinancialGuarantee'
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
  value: AwardedNotification
  meta: FieldMeta<T>
}

export default function AwardedNotificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AwardedNotificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardedNotificationFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardedNotificationFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardedNotificationFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardedNotificationFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardedNotificationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={AwardedNotificationFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardedNotificationFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AwardedNotificationFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={AwardedNotificationFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={AwardedNotificationFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardedNotificationFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AwardedNotificationFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={AwardedNotificationFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={AwardedNotificationFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.MinutesDocumentReference} 
          value={value.MinutesDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={AwardedNotificationFieldMeta.MinutesDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={AwardedNotificationFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.TenderResult} 
          value={value.TenderResult}
          itemDisplay={ (itemValue: TenderResult, key: string | number) =>
            <TenderResultDisplay key={key} meta={AwardedNotificationFieldMeta.TenderResult} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.FinalFinancialGuarantee} 
          value={value.FinalFinancialGuarantee}
          itemDisplay={ (itemValue: FinancialGuarantee, key: string | number) =>
            <FinancialGuaranteeDisplay key={key} meta={AwardedNotificationFieldMeta.FinalFinancialGuarantee} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AwardedNotificationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={AwardedNotificationFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
