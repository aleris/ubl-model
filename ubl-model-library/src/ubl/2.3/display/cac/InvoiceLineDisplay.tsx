import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { InvoiceLine } from  '../../model/cac/InvoiceLine'
import { InvoiceLineFieldMeta } from  '../../meta/cac/InvoiceLineMeta'
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
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: InvoiceLine | undefined
  meta: FieldMeta<T>
}

export default function InvoiceLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-InvoiceLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={InvoiceLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={InvoiceLineFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={InvoiceLineFieldMeta.UUID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={InvoiceLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={InvoiceLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Invoiced Quantity"
            value={value.InvoicedQuantity?.[0]}
            meta={InvoiceLineFieldMeta.InvoicedQuantity}
          />

          <AmountDisplay
            label="Line Extension Amount"
            value={value.LineExtensionAmount?.[0]}
            meta={InvoiceLineFieldMeta.LineExtensionAmount}
          />

          <AmountDisplay
            label="Tax Inclusive Line Extension Amount"
            value={value.TaxInclusiveLineExtensionAmount?.[0]}
            meta={InvoiceLineFieldMeta.TaxInclusiveLineExtensionAmount}
          />

          <DateDisplay
            label="Tax Point Date"
            value={value.TaxPointDate?.[0]}
            meta={InvoiceLineFieldMeta.TaxPointDate}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={InvoiceLineFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={InvoiceLineFieldMeta.AccountingCost}
          />

          <CodeDisplay
            label="Payment Purpose Code"
            value={value.PaymentPurposeCode?.[0]}
            meta={InvoiceLineFieldMeta.PaymentPurposeCode}
          />

          <IndicatorDisplay
            label="Free Of Charge Indicator"
            value={value.FreeOfChargeIndicator?.[0]}
            meta={InvoiceLineFieldMeta.FreeOfChargeIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-InvoicePeriod"
            label="Invoice Period"
            items={value.InvoicePeriod}
            meta={InvoiceLineFieldMeta.InvoicePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Invoice Period"
                value={itemValue}
                meta={InvoiceLineFieldMeta.InvoicePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-OrderLineReference"
            label="Order Line Reference"
            items={value.OrderLineReference}
            meta={InvoiceLineFieldMeta.OrderLineReference} 
            itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
              <OrderLineReferenceDisplay
                key={key}
                label="Order Line Reference"
                value={itemValue}
                meta={InvoiceLineFieldMeta.OrderLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineReference ubl-DespatchLineReference"
            label="Despatch Line Reference"
            items={value.DespatchLineReference}
            meta={InvoiceLineFieldMeta.DespatchLineReference} 
            itemDisplay={ (itemValue: LineReference, key: string | number) =>
              <LineReferenceDisplay
                key={key}
                label="Despatch Line Reference"
                value={itemValue}
                meta={InvoiceLineFieldMeta.DespatchLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineReference ubl-ReceiptLineReference"
            label="Receipt Line Reference"
            items={value.ReceiptLineReference}
            meta={InvoiceLineFieldMeta.ReceiptLineReference} 
            itemDisplay={ (itemValue: LineReference, key: string | number) =>
              <LineReferenceDisplay
                key={key}
                label="Receipt Line Reference"
                value={itemValue}
                meta={InvoiceLineFieldMeta.ReceiptLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={InvoiceLineFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={InvoiceLineFieldMeta.BillingReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={InvoiceLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={InvoiceLineFieldMeta.DocumentReference}
              />
            }
          />

          <PricingReferenceDisplay
            label="Pricing Reference"
            value={value.PricingReference?.[0]}
            meta={InvoiceLineFieldMeta.PricingReference}
          />

          <PartyDisplay
            label="Originator Party"
            value={value.OriginatorParty?.[0]}
            meta={InvoiceLineFieldMeta.OriginatorParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={InvoiceLineFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={InvoiceLineFieldMeta.Delivery}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={InvoiceLineFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={InvoiceLineFieldMeta.PaymentTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={InvoiceLineFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={InvoiceLineFieldMeta.AllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={InvoiceLineFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={InvoiceLineFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal ubl-WithholdingTaxTotal"
            label="Withholding Tax Total"
            items={value.WithholdingTaxTotal}
            meta={InvoiceLineFieldMeta.WithholdingTaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Withholding Tax Total"
                value={itemValue}
                meta={InvoiceLineFieldMeta.WithholdingTaxTotal}
              />
            }
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={InvoiceLineFieldMeta.Item}
          />

          <PriceDisplay
            label="Price"
            value={value.Price?.[0]}
            meta={InvoiceLineFieldMeta.Price}
          />

          <DeliveryTermsDisplay
            label="Delivery Terms"
            value={value.DeliveryTerms?.[0]}
            meta={InvoiceLineFieldMeta.DeliveryTerms}
          />

          <ElementListDisplay
            className="ubl-cac ubl-InvoiceLine ubl-SubInvoiceLine"
            label="Sub Invoice Line"
            items={value.SubInvoiceLine}
            meta={InvoiceLineFieldMeta.SubInvoiceLine} 
            itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
              <InvoiceLineDisplay
                key={key}
                label="Sub Invoice Line"
                value={itemValue}
                meta={InvoiceLineFieldMeta.SubInvoiceLine}
              />
            }
          />

          <PriceExtensionDisplay
            label="Item Price Extension"
            value={value.ItemPriceExtension?.[0]}
            meta={InvoiceLineFieldMeta.ItemPriceExtension}
          />
        </div>
    </div>
  )
}
