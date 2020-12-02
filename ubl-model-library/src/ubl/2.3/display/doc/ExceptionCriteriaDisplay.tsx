import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExceptionCriteria } from  '../../model/doc/ExceptionCriteria'
import { ExceptionCriteriaFieldMeta } from  '../../meta/doc/ExceptionCriteriaMeta'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ExceptionCriteriaLineDisplay from '../cac/ExceptionCriteriaLineDisplay'
import { ExceptionCriteriaLine } from '../../model/cac/ExceptionCriteriaLine'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import SupplierPartyDisplay from '../cac/SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ExceptionCriteria
  meta: FieldMeta<T>
}

export default function ExceptionCriteriaDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ExceptionCriteriaFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExceptionCriteriaFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExceptionCriteriaFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExceptionCriteriaFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExceptionCriteriaFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExceptionCriteriaFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ExceptionCriteriaFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExceptionCriteriaFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ExceptionCriteriaFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ExceptionCriteriaFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ExceptionCriteriaFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ExceptionCriteriaFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ExceptionCriteriaFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ExceptionCriteriaFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={ExceptionCriteriaFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ExceptionCriteriaFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ExceptionCriteriaFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={ExceptionCriteriaFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={ExceptionCriteriaFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ExceptionCriteriaFieldMeta.ExceptionCriteriaLine} 
          value={value.ExceptionCriteriaLine}
          itemDisplay={ (itemValue: ExceptionCriteriaLine, key: string | number) =>
            <ExceptionCriteriaLineDisplay key={key} meta={ExceptionCriteriaFieldMeta.ExceptionCriteriaLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
