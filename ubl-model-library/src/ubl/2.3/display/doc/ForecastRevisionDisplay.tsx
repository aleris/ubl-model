import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastRevision } from  '../../model/doc/ForecastRevision'
import { ForecastRevisionFieldMeta } from  '../../meta/doc/ForecastRevisionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ForecastRevisionLineDisplay from '../cac/ForecastRevisionLineDisplay'
import { ForecastRevisionLine } from '../../model/cac/ForecastRevisionLine'
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
  value: ForecastRevision
  meta: FieldMeta<T>
}

export default function ForecastRevisionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ForecastRevisionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastRevisionFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastRevisionFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastRevisionFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastRevisionFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastRevisionFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ForecastRevisionFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastRevisionFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ForecastRevisionFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ForecastRevisionFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ForecastRevisionFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.SequenceNumberID} 
          value={value.SequenceNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastRevisionFieldMeta.SequenceNumberID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.RevisionStatusCode} 
          value={value.RevisionStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastRevisionFieldMeta.RevisionStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.PurposeCode} 
          value={value.PurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastRevisionFieldMeta.PurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.ForecastPeriod} 
          value={value.ForecastPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ForecastRevisionFieldMeta.ForecastPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.OriginalDocumentReference} 
          value={value.OriginalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ForecastRevisionFieldMeta.OriginalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={ForecastRevisionFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ForecastRevisionFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ForecastRevisionFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={ForecastRevisionFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={ForecastRevisionFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastRevisionFieldMeta.ForecastRevisionLine} 
          value={value.ForecastRevisionLine}
          itemDisplay={ (itemValue: ForecastRevisionLine, key: string | number) =>
            <ForecastRevisionLineDisplay key={key} meta={ForecastRevisionFieldMeta.ForecastRevisionLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
