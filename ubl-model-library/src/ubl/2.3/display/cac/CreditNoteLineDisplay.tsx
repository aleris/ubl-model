import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CreditNoteLine } from  '../../model/cac/CreditNoteLine'
import { CreditNoteLineFieldMeta } from  '../../meta/cac/CreditNoteLineMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import BillingReferenceDisplay from './BillingReferenceDisplay'
import { BillingReference } from '../../model/cac/BillingReference'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DeliveryDisplay from './DeliveryDisplay'
import { Delivery } from '../../model/cac/Delivery'
import DeliveryTermsDisplay from './DeliveryTermsDisplay'
import { DeliveryTerms } from '../../model/cac/DeliveryTerms'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import OrderLineReferenceDisplay from './OrderLineReferenceDisplay'
import { OrderLineReference } from '../../model/cac/OrderLineReference'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentTermsDisplay from './PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import PriceDisplay from './PriceDisplay'
import { Price } from '../../model/cac/Price'
import PriceExtensionDisplay from './PriceExtensionDisplay'
import { PriceExtension } from '../../model/cac/PriceExtension'
import PricingReferenceDisplay from './PricingReferenceDisplay'
import { PricingReference } from '../../model/cac/PricingReference'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import ResponseDisplay from './ResponseDisplay'
import { Response } from '../../model/cac/Response'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CreditNoteLine | undefined
  meta: FieldMeta<T>
}

export default function CreditNoteLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CreditNoteLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CreditNoteLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CreditNoteLineFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={CreditNoteLineFieldMeta.UUID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CreditNoteLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Credited Quantity"
            value={value.CreditedQuantity?.[0]}
            meta={CreditNoteLineFieldMeta.CreditedQuantity}
          />

          <AmountDisplay
            label="Line Extension Amount"
            value={value.LineExtensionAmount?.[0]}
            meta={CreditNoteLineFieldMeta.LineExtensionAmount}
          />

          <AmountDisplay
            label="Tax Inclusive Line Extension Amount"
            value={value.TaxInclusiveLineExtensionAmount?.[0]}
            meta={CreditNoteLineFieldMeta.TaxInclusiveLineExtensionAmount}
          />

          <DateDisplay
            label="Tax Point Date"
            value={value.TaxPointDate?.[0]}
            meta={CreditNoteLineFieldMeta.TaxPointDate}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={CreditNoteLineFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={CreditNoteLineFieldMeta.AccountingCost}
          />

          <CodeDisplay
            label="Payment Purpose Code"
            value={value.PaymentPurposeCode?.[0]}
            meta={CreditNoteLineFieldMeta.PaymentPurposeCode}
          />

          <IndicatorDisplay
            label="Free Of Charge Indicator"
            value={value.FreeOfChargeIndicator?.[0]}
            meta={CreditNoteLineFieldMeta.FreeOfChargeIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-InvoicePeriod"
            label="Invoice Period"
            items={value.InvoicePeriod}
            meta={CreditNoteLineFieldMeta.InvoicePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Invoice Period"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.InvoicePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-OrderLineReference"
            label="Order Line Reference"
            items={value.OrderLineReference}
            meta={CreditNoteLineFieldMeta.OrderLineReference} 
            itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
              <OrderLineReferenceDisplay
                key={key}
                label="Order Line Reference"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.OrderLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Response ubl-DiscrepancyResponse"
            label="Discrepancy Response"
            items={value.DiscrepancyResponse}
            meta={CreditNoteLineFieldMeta.DiscrepancyResponse} 
            itemDisplay={ (itemValue: Response, key: string | number) =>
              <ResponseDisplay
                key={key}
                label="Discrepancy Response"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.DiscrepancyResponse}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineReference ubl-DespatchLineReference"
            label="Despatch Line Reference"
            items={value.DespatchLineReference}
            meta={CreditNoteLineFieldMeta.DespatchLineReference} 
            itemDisplay={ (itemValue: LineReference, key: string | number) =>
              <LineReferenceDisplay
                key={key}
                label="Despatch Line Reference"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.DespatchLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineReference ubl-ReceiptLineReference"
            label="Receipt Line Reference"
            items={value.ReceiptLineReference}
            meta={CreditNoteLineFieldMeta.ReceiptLineReference} 
            itemDisplay={ (itemValue: LineReference, key: string | number) =>
              <LineReferenceDisplay
                key={key}
                label="Receipt Line Reference"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.ReceiptLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={CreditNoteLineFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.BillingReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={CreditNoteLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.DocumentReference}
              />
            }
          />

          <PricingReferenceDisplay
            label="Pricing Reference"
            value={value.PricingReference?.[0]}
            meta={CreditNoteLineFieldMeta.PricingReference}
          />

          <PartyDisplay
            label="Originator Party"
            value={value.OriginatorParty?.[0]}
            meta={CreditNoteLineFieldMeta.OriginatorParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={CreditNoteLineFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.Delivery}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={CreditNoteLineFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.PaymentTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={CreditNoteLineFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={CreditNoteLineFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.AllowanceCharge}
              />
            }
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={CreditNoteLineFieldMeta.Item}
          />

          <PriceDisplay
            label="Price"
            value={value.Price?.[0]}
            meta={CreditNoteLineFieldMeta.Price}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DeliveryTerms"
            label="Delivery Terms"
            items={value.DeliveryTerms}
            meta={CreditNoteLineFieldMeta.DeliveryTerms} 
            itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
              <DeliveryTermsDisplay
                key={key}
                label="Delivery Terms"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.DeliveryTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CreditNoteLine ubl-SubCreditNoteLine"
            label="Sub Credit Note Line"
            items={value.SubCreditNoteLine}
            meta={CreditNoteLineFieldMeta.SubCreditNoteLine} 
            itemDisplay={ (itemValue: CreditNoteLine, key: string | number) =>
              <CreditNoteLineDisplay
                key={key}
                label="Sub Credit Note Line"
                value={itemValue}
                meta={CreditNoteLineFieldMeta.SubCreditNoteLine}
              />
            }
          />

          <PriceExtensionDisplay
            label="Item Price Extension"
            value={value.ItemPriceExtension?.[0]}
            meta={CreditNoteLineFieldMeta.ItemPriceExtension}
          />
        </div>
    </div>
  )
}
