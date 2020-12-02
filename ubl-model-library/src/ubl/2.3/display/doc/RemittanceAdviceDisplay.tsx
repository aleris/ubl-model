import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RemittanceAdvice } from  '../../model/doc/RemittanceAdvice'
import { RemittanceAdviceFieldMeta } from  '../../meta/doc/RemittanceAdviceMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import BillingReferenceDisplay from '../cac/BillingReferenceDisplay'
import { BillingReference } from '../../model/cac/BillingReference'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentMeansDisplay from '../cac/PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import RemittanceAdviceLineDisplay from '../cac/RemittanceAdviceLineDisplay'
import { RemittanceAdviceLine } from '../../model/cac/RemittanceAdviceLine'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import SupplierPartyDisplay from '../cac/SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TaxTotalDisplay from '../cac/TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: RemittanceAdvice
  meta: FieldMeta<T>
}

export default function RemittanceAdviceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RemittanceAdviceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RemittanceAdviceFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RemittanceAdviceFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RemittanceAdviceFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RemittanceAdviceFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RemittanceAdviceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={RemittanceAdviceFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RemittanceAdviceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={RemittanceAdviceFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={RemittanceAdviceFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RemittanceAdviceFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={RemittanceAdviceFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.TotalDebitAmount} 
          value={value.TotalDebitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RemittanceAdviceFieldMeta.TotalDebitAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.TotalCreditAmount} 
          value={value.TotalCreditAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RemittanceAdviceFieldMeta.TotalCreditAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.TotalPaymentAmount} 
          value={value.TotalPaymentAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RemittanceAdviceFieldMeta.TotalPaymentAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.PaymentOrderReference} 
          value={value.PaymentOrderReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RemittanceAdviceFieldMeta.PaymentOrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.PayerReference} 
          value={value.PayerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RemittanceAdviceFieldMeta.PayerReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.InvoicingPartyReference} 
          value={value.InvoicingPartyReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RemittanceAdviceFieldMeta.InvoicingPartyReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={RemittanceAdviceFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={RemittanceAdviceFieldMeta.InvoicePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={RemittanceAdviceFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={RemittanceAdviceFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={RemittanceAdviceFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={RemittanceAdviceFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={RemittanceAdviceFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={RemittanceAdviceFieldMeta.PayeeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay key={key} meta={RemittanceAdviceFieldMeta.PaymentMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={RemittanceAdviceFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceFieldMeta.RemittanceAdviceLine} 
          value={value.RemittanceAdviceLine}
          itemDisplay={ (itemValue: RemittanceAdviceLine, key: string | number) =>
            <RemittanceAdviceLineDisplay key={key} meta={RemittanceAdviceFieldMeta.RemittanceAdviceLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
