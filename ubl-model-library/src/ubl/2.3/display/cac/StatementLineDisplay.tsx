import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { StatementLine } from  '../../model/cac/StatementLine'
import { StatementLineFieldMeta } from  '../../meta/cac/StatementLineMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import BillingReferenceDisplay from './BillingReferenceDisplay'
import { BillingReference } from '../../model/cac/BillingReference'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from './CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ExchangeRateDisplay from './ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentDisplay from './PaymentDisplay'
import { Payment } from '../../model/cac/Payment'
import PaymentMeansDisplay from './PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import PaymentTermsDisplay from './PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SupplierPartyDisplay from './SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: StatementLine
  meta: FieldMeta<T>
}

export default function StatementLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={StatementLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={StatementLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StatementLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={StatementLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StatementLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.BalanceBroughtForwardIndicator} 
          value={value.BalanceBroughtForwardIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={StatementLineFieldMeta.BalanceBroughtForwardIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.DebitLineAmount} 
          value={value.DebitLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={StatementLineFieldMeta.DebitLineAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.CreditLineAmount} 
          value={value.CreditLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={StatementLineFieldMeta.CreditLineAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.BalanceAmount} 
          value={value.BalanceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={StatementLineFieldMeta.BalanceAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={StatementLineFieldMeta.PaymentPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay key={key} meta={StatementLineFieldMeta.PaymentMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={StatementLineFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={StatementLineFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={StatementLineFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={StatementLineFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={StatementLineFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={StatementLineFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={StatementLineFieldMeta.PayeeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={StatementLineFieldMeta.InvoicePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={StatementLineFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={StatementLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={StatementLineFieldMeta.ExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={StatementLineFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StatementLineFieldMeta.CollectedPayment} 
          value={value.CollectedPayment}
          itemDisplay={ (itemValue: Payment, key: string | number) =>
            <PaymentDisplay key={key} meta={StatementLineFieldMeta.CollectedPayment} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
