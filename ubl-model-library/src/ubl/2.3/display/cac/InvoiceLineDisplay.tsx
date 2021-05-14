import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: InvoiceLine
  meta: FieldMeta<T>
}

export default function InvoiceLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-InvoiceLine ubl-InvoiceLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-InvoiceLine ubl-UBLExtensions"
          meta={InvoiceLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={InvoiceLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Identifier ubl-ID"
          meta={InvoiceLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={InvoiceLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Identifier ubl-UUID"
          meta={InvoiceLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={InvoiceLineFieldMeta.UUID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Text ubl-Note"
          meta={InvoiceLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={InvoiceLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Quantity ubl-InvoicedQuantity"
          meta={InvoiceLineFieldMeta.InvoicedQuantity} 
          value={value.InvoicedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Invoiced Quantity"
              value={itemValue}
              meta={InvoiceLineFieldMeta.InvoicedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Amount ubl-LineExtensionAmount"
          meta={InvoiceLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Line Extension Amount"
              value={itemValue}
              meta={InvoiceLineFieldMeta.LineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Amount ubl-TaxInclusiveLineExtensionAmount"
          meta={InvoiceLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Inclusive Line Extension Amount"
              value={itemValue}
              meta={InvoiceLineFieldMeta.TaxInclusiveLineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Date ubl-TaxPointDate"
          meta={InvoiceLineFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Tax Point Date"
              value={itemValue}
              meta={InvoiceLineFieldMeta.TaxPointDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Code ubl-AccountingCostCode"
          meta={InvoiceLineFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={InvoiceLineFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Text ubl-AccountingCost"
          meta={InvoiceLineFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={InvoiceLineFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Code ubl-PaymentPurposeCode"
          meta={InvoiceLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Purpose Code"
              value={itemValue}
              meta={InvoiceLineFieldMeta.PaymentPurposeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-InvoiceLine ubl-Indicator ubl-FreeOfChargeIndicator"
          meta={InvoiceLineFieldMeta.FreeOfChargeIndicator} 
          value={value.FreeOfChargeIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Free Of Charge Indicator"
              value={itemValue}
              meta={InvoiceLineFieldMeta.FreeOfChargeIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-Period ubl-InvoicePeriod"
          meta={InvoiceLineFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Invoice Period"
              value={itemValue}
              meta={InvoiceLineFieldMeta.InvoicePeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-OrderLineReference"
          meta={InvoiceLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay
              key={key}
              label="Order Line Reference"
              value={itemValue}
              meta={InvoiceLineFieldMeta.OrderLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-LineReference ubl-DespatchLineReference"
          meta={InvoiceLineFieldMeta.DespatchLineReference} 
          value={value.DespatchLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Despatch Line Reference"
              value={itemValue}
              meta={InvoiceLineFieldMeta.DespatchLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-LineReference ubl-ReceiptLineReference"
          meta={InvoiceLineFieldMeta.ReceiptLineReference} 
          value={value.ReceiptLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Receipt Line Reference"
              value={itemValue}
              meta={InvoiceLineFieldMeta.ReceiptLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-BillingReference"
          meta={InvoiceLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay
              key={key}
              label="Billing Reference"
              value={itemValue}
              meta={InvoiceLineFieldMeta.BillingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-DocumentReference"
          meta={InvoiceLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={InvoiceLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InvoiceLine ubl-PricingReference"
          meta={InvoiceLineFieldMeta.PricingReference} 
          value={value.PricingReference}
          itemDisplay={ (itemValue: PricingReference, key: string | number) =>
            <PricingReferenceDisplay
              key={key}
              label="Pricing Reference"
              value={itemValue}
              meta={InvoiceLineFieldMeta.PricingReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InvoiceLine ubl-Party ubl-OriginatorParty"
          meta={InvoiceLineFieldMeta.OriginatorParty} 
          value={value.OriginatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Originator Party"
              value={itemValue}
              meta={InvoiceLineFieldMeta.OriginatorParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-Delivery"
          meta={InvoiceLineFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={InvoiceLineFieldMeta.Delivery}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-PaymentTerms"
          meta={InvoiceLineFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={InvoiceLineFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-AllowanceCharge"
          meta={InvoiceLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={InvoiceLineFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-TaxTotal"
          meta={InvoiceLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={InvoiceLineFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-TaxTotal ubl-WithholdingTaxTotal"
          meta={InvoiceLineFieldMeta.WithholdingTaxTotal} 
          value={value.WithholdingTaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Withholding Tax Total"
              value={itemValue}
              meta={InvoiceLineFieldMeta.WithholdingTaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InvoiceLine ubl-Item"
          meta={InvoiceLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={InvoiceLineFieldMeta.Item}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InvoiceLine ubl-Price"
          meta={InvoiceLineFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay
              key={key}
              label="Price"
              value={itemValue}
              meta={InvoiceLineFieldMeta.Price}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InvoiceLine ubl-DeliveryTerms"
          meta={InvoiceLineFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={InvoiceLineFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-InvoiceLine ubl-SubInvoiceLine"
          meta={InvoiceLineFieldMeta.SubInvoiceLine} 
          value={value.SubInvoiceLine}
          itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
            <InvoiceLineDisplay
              key={key}
              label="Sub Invoice Line"
              value={itemValue}
              meta={InvoiceLineFieldMeta.SubInvoiceLine}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-InvoiceLine ubl-PriceExtension ubl-ItemPriceExtension"
          meta={InvoiceLineFieldMeta.ItemPriceExtension} 
          value={value.ItemPriceExtension}
          itemDisplay={ (itemValue: PriceExtension, key: string | number) =>
            <PriceExtensionDisplay
              key={key}
              label="Item Price Extension"
              value={itemValue}
              meta={InvoiceLineFieldMeta.ItemPriceExtension}
            />
          }
        />
        </div>
    </div>
  )
}
