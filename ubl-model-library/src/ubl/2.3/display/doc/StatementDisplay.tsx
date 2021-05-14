import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: Statement
  meta: FieldMeta<T>
}

export default function StatementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-Statement ubl-StatementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Statement ubl-UBLExtensions"
          meta={StatementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={StatementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Identifier ubl-UBLVersionID"
          meta={StatementFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={StatementFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Identifier ubl-CustomizationID"
          meta={StatementFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={StatementFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Identifier ubl-ProfileID"
          meta={StatementFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={StatementFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Identifier ubl-ProfileExecutionID"
          meta={StatementFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={StatementFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Identifier ubl-ID"
          meta={StatementFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={StatementFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Indicator ubl-CopyIndicator"
          meta={StatementFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={StatementFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Identifier ubl-UUID"
          meta={StatementFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={StatementFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Date ubl-IssueDate"
          meta={StatementFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={StatementFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Time ubl-IssueTime"
          meta={StatementFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={StatementFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Statement ubl-Text ubl-Note"
          meta={StatementFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={StatementFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Code ubl-DocumentCurrencyCode"
          meta={StatementFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={StatementFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Amount ubl-TotalDebitAmount"
          meta={StatementFieldMeta.TotalDebitAmount} 
          value={value.TotalDebitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Debit Amount"
              value={itemValue}
              meta={StatementFieldMeta.TotalDebitAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Amount ubl-TotalCreditAmount"
          meta={StatementFieldMeta.TotalCreditAmount} 
          value={value.TotalCreditAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Credit Amount"
              value={itemValue}
              meta={StatementFieldMeta.TotalCreditAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Amount ubl-TotalBalanceAmount"
          meta={StatementFieldMeta.TotalBalanceAmount} 
          value={value.TotalBalanceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Balance Amount"
              value={itemValue}
              meta={StatementFieldMeta.TotalBalanceAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Numeric ubl-LineCountNumeric"
          meta={StatementFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={StatementFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Statement ubl-Code ubl-StatementTypeCode"
          meta={StatementFieldMeta.StatementTypeCode} 
          value={value.StatementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Statement Type Code"
              value={itemValue}
              meta={StatementFieldMeta.StatementTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Statement ubl-Period ubl-StatementPeriod"
          meta={StatementFieldMeta.StatementPeriod} 
          value={value.StatementPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Statement Period"
              value={itemValue}
              meta={StatementFieldMeta.StatementPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Statement ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={StatementFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={StatementFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Statement ubl-Signature"
          meta={StatementFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={StatementFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Statement ubl-SupplierParty ubl-AccountingSupplierParty"
          meta={StatementFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Accounting Supplier Party"
              value={itemValue}
              meta={StatementFieldMeta.AccountingSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Statement ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={StatementFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={StatementFieldMeta.AccountingCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Statement ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={StatementFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={StatementFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Statement ubl-SupplierParty ubl-SellerSupplierParty"
          meta={StatementFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={StatementFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Statement ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={StatementFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={StatementFieldMeta.OriginatorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Statement ubl-Party ubl-PayeeParty"
          meta={StatementFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Payee Party"
              value={itemValue}
              meta={StatementFieldMeta.PayeeParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Statement ubl-PaymentMeans"
          meta={StatementFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay
              key={key}
              label="Payment Means"
              value={itemValue}
              meta={StatementFieldMeta.PaymentMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Statement ubl-PaymentTerms"
          meta={StatementFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={StatementFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Statement ubl-AllowanceCharge"
          meta={StatementFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={StatementFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Statement ubl-TaxTotal"
          meta={StatementFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={StatementFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Statement ubl-StatementLine"
          meta={StatementFieldMeta.StatementLine} 
          value={value.StatementLine}
          itemDisplay={ (itemValue: StatementLine, key: string | number) =>
            <StatementLineDisplay
              key={key}
              label="Statement Line"
              value={itemValue}
              meta={StatementFieldMeta.StatementLine}
            />
          }
        />
        </div>
    </div>
  )
}
