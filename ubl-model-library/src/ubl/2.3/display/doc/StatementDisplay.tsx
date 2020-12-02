import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Statement } from  '../../model/doc/Statement'
import { StatementFieldMeta } from  '../../meta/doc/StatementMeta'
import AllowanceChargeDisplay from '../cac/AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
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
import PaymentTermsDisplay from '../cac/PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import StatementLineDisplay from '../cac/StatementLineDisplay'
import { StatementLine } from '../../model/cac/StatementLine'
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
  value: Statement
  meta: FieldMeta<T>
}

export default function StatementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={StatementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={StatementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StatementFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StatementFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StatementFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StatementFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StatementFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={StatementFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StatementFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={StatementFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={StatementFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={StatementFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={StatementFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.TotalDebitAmount} 
          value={value.TotalDebitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={StatementFieldMeta.TotalDebitAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.TotalCreditAmount} 
          value={value.TotalCreditAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={StatementFieldMeta.TotalCreditAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.TotalBalanceAmount} 
          value={value.TotalBalanceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={StatementFieldMeta.TotalBalanceAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={StatementFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.StatementTypeCode} 
          value={value.StatementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={StatementFieldMeta.StatementTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.StatementPeriod} 
          value={value.StatementPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={StatementFieldMeta.StatementPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={StatementFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={StatementFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={StatementFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={StatementFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={StatementFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={StatementFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={StatementFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={StatementFieldMeta.PayeeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay key={key} meta={StatementFieldMeta.PaymentMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={StatementFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={StatementFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={StatementFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementFieldMeta.StatementLine} 
          value={value.StatementLine}
          itemDisplay={ (itemValue: StatementLine, key: string | number) =>
            <StatementLineDisplay key={key} meta={StatementFieldMeta.StatementLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
