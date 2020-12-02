import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderWithdrawal } from  '../../model/doc/TenderWithdrawal'
import { TenderWithdrawalFieldMeta } from  '../../meta/doc/TenderWithdrawalMeta'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
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
  value: TenderWithdrawal
  meta: FieldMeta<T>
}

export default function TenderWithdrawalDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderWithdrawalFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderWithdrawalFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderWithdrawalFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderWithdrawalFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderWithdrawalFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderWithdrawalFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderWithdrawalFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderWithdrawalFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderWithdrawalFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TenderWithdrawalFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TenderWithdrawalFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderWithdrawalFieldMeta.ContractName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderWithdrawalFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.WithdrawOfferIndicator} 
          value={value.WithdrawOfferIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderWithdrawalFieldMeta.WithdrawOfferIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.TenderDocumentReference} 
          value={value.TenderDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderWithdrawalFieldMeta.TenderDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.TenderNotificationDocumentReference} 
          value={value.TenderNotificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderWithdrawalFieldMeta.TenderNotificationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TenderWithdrawalFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={TenderWithdrawalFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderWithdrawalFieldMeta.TendererParty} 
          value={value.TendererParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderWithdrawalFieldMeta.TendererParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
