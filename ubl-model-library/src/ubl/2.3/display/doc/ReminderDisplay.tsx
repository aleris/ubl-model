import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Reminder } from  '../../model/doc/Reminder'
import { ReminderFieldMeta } from  '../../meta/doc/ReminderMeta'
import AllowanceChargeDisplay from '../cac/AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ExchangeRateDisplay from '../cac/ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import MonetaryTotalDisplay from '../cac/MonetaryTotalDisplay'
import { MonetaryTotal } from '../../model/cac/MonetaryTotal'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentDisplay from '../cac/PaymentDisplay'
import { Payment } from '../../model/cac/Payment'
import PaymentMeansDisplay from '../cac/PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import PaymentTermsDisplay from '../cac/PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ReminderLineDisplay from '../cac/ReminderLineDisplay'
import { ReminderLine } from '../../model/cac/ReminderLine'
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

type Props<T> = {
  label: string
  value: Reminder
  meta: FieldMeta<T>
}

export default function ReminderDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-Reminder ubl-ReminderType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Reminder ubl-UBLExtensions"
          meta={ReminderFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ReminderFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Identifier ubl-UBLVersionID"
          meta={ReminderFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ReminderFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Identifier ubl-CustomizationID"
          meta={ReminderFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ReminderFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Identifier ubl-ProfileID"
          meta={ReminderFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ReminderFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Identifier ubl-ProfileExecutionID"
          meta={ReminderFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ReminderFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Identifier ubl-ID"
          meta={ReminderFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ReminderFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Indicator ubl-CopyIndicator"
          meta={ReminderFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={ReminderFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Identifier ubl-UUID"
          meta={ReminderFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ReminderFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Date ubl-IssueDate"
          meta={ReminderFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ReminderFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Time ubl-IssueTime"
          meta={ReminderFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ReminderFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Code ubl-ReminderTypeCode"
          meta={ReminderFieldMeta.ReminderTypeCode} 
          value={value.ReminderTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Reminder Type Code"
              value={itemValue}
              meta={ReminderFieldMeta.ReminderTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Numeric ubl-ReminderSequenceNumeric"
          meta={ReminderFieldMeta.ReminderSequenceNumeric} 
          value={value.ReminderSequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Reminder Sequence"
              value={itemValue}
              meta={ReminderFieldMeta.ReminderSequenceNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Reminder ubl-Text ubl-Note"
          meta={ReminderFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ReminderFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Date ubl-TaxPointDate"
          meta={ReminderFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Tax Point Date"
              value={itemValue}
              meta={ReminderFieldMeta.TaxPointDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Code ubl-DocumentCurrencyCode"
          meta={ReminderFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={ReminderFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Code ubl-TaxCurrencyCode"
          meta={ReminderFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tax Currency Code"
              value={itemValue}
              meta={ReminderFieldMeta.TaxCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Code ubl-PricingCurrencyCode"
          meta={ReminderFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Pricing Currency Code"
              value={itemValue}
              meta={ReminderFieldMeta.PricingCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Code ubl-PaymentCurrencyCode"
          meta={ReminderFieldMeta.PaymentCurrencyCode} 
          value={value.PaymentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Currency Code"
              value={itemValue}
              meta={ReminderFieldMeta.PaymentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Code ubl-PaymentAlternativeCurrencyCode"
          meta={ReminderFieldMeta.PaymentAlternativeCurrencyCode} 
          value={value.PaymentAlternativeCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Alternative Currency Code"
              value={itemValue}
              meta={ReminderFieldMeta.PaymentAlternativeCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Code ubl-AccountingCostCode"
          meta={ReminderFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={ReminderFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Text ubl-AccountingCost"
          meta={ReminderFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={ReminderFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Reminder ubl-Numeric ubl-LineCountNumeric"
          meta={ReminderFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={ReminderFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Reminder ubl-Period ubl-ReminderPeriod"
          meta={ReminderFieldMeta.ReminderPeriod} 
          value={value.ReminderPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Reminder Period"
              value={itemValue}
              meta={ReminderFieldMeta.ReminderPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Reminder ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={ReminderFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={ReminderFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Reminder ubl-Signature"
          meta={ReminderFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={ReminderFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Reminder ubl-SupplierParty ubl-AccountingSupplierParty"
          meta={ReminderFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Accounting Supplier Party"
              value={itemValue}
              meta={ReminderFieldMeta.AccountingSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Reminder ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={ReminderFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={ReminderFieldMeta.AccountingCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Reminder ubl-Party ubl-PayeeParty"
          meta={ReminderFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Payee Party"
              value={itemValue}
              meta={ReminderFieldMeta.PayeeParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Reminder ubl-Party ubl-TaxRepresentativeParty"
          meta={ReminderFieldMeta.TaxRepresentativeParty} 
          value={value.TaxRepresentativeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Tax Representative Party"
              value={itemValue}
              meta={ReminderFieldMeta.TaxRepresentativeParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Reminder ubl-PaymentMeans"
          meta={ReminderFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay
              key={key}
              label="Payment Means"
              value={itemValue}
              meta={ReminderFieldMeta.PaymentMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Reminder ubl-PaymentTerms"
          meta={ReminderFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={ReminderFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Reminder ubl-Payment ubl-PrepaidPayment"
          meta={ReminderFieldMeta.PrepaidPayment} 
          value={value.PrepaidPayment}
          itemDisplay={ (itemValue: Payment, key: string | number) =>
            <PaymentDisplay
              key={key}
              label="Prepaid Payment"
              value={itemValue}
              meta={ReminderFieldMeta.PrepaidPayment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Reminder ubl-AllowanceCharge"
          meta={ReminderFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={ReminderFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Reminder ubl-ExchangeRate ubl-TaxExchangeRate"
          meta={ReminderFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Tax Exchange Rate"
              value={itemValue}
              meta={ReminderFieldMeta.TaxExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Reminder ubl-ExchangeRate ubl-PricingExchangeRate"
          meta={ReminderFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Pricing Exchange Rate"
              value={itemValue}
              meta={ReminderFieldMeta.PricingExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Reminder ubl-ExchangeRate ubl-PaymentExchangeRate"
          meta={ReminderFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Exchange Rate"
              value={itemValue}
              meta={ReminderFieldMeta.PaymentExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Reminder ubl-ExchangeRate ubl-PaymentAlternativeExchangeRate"
          meta={ReminderFieldMeta.PaymentAlternativeExchangeRate} 
          value={value.PaymentAlternativeExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Alternative Exchange Rate"
              value={itemValue}
              meta={ReminderFieldMeta.PaymentAlternativeExchangeRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Reminder ubl-TaxTotal"
          meta={ReminderFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={ReminderFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Reminder ubl-MonetaryTotal ubl-LegalMonetaryTotal"
          meta={ReminderFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay
              key={key}
              label="Legal Monetary Total"
              value={itemValue}
              meta={ReminderFieldMeta.LegalMonetaryTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Reminder ubl-ReminderLine"
          meta={ReminderFieldMeta.ReminderLine} 
          value={value.ReminderLine}
          itemDisplay={ (itemValue: ReminderLine, key: string | number) =>
            <ReminderLineDisplay
              key={key}
              label="Reminder Line"
              value={itemValue}
              meta={ReminderFieldMeta.ReminderLine}
            />
          }
        />
        </div>
    </div>
  )
}
