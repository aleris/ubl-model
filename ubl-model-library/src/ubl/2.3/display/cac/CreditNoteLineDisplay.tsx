import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CreditNoteLine
  meta: FieldMeta<T>
}

export default function CreditNoteLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CreditNoteLine ubl-CreditNoteLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CreditNoteLine ubl-UBLExtensions"
          meta={CreditNoteLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Identifier ubl-ID"
          meta={CreditNoteLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Identifier ubl-UUID"
          meta={CreditNoteLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.UUID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Text ubl-Note"
          meta={CreditNoteLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Quantity ubl-CreditedQuantity"
          meta={CreditNoteLineFieldMeta.CreditedQuantity} 
          value={value.CreditedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Credited Quantity"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.CreditedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Amount ubl-LineExtensionAmount"
          meta={CreditNoteLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Line Extension Amount"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.LineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Amount ubl-TaxInclusiveLineExtensionAmount"
          meta={CreditNoteLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Inclusive Line Extension Amount"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.TaxInclusiveLineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Date ubl-TaxPointDate"
          meta={CreditNoteLineFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Tax Point Date"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.TaxPointDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Code ubl-AccountingCostCode"
          meta={CreditNoteLineFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Text ubl-AccountingCost"
          meta={CreditNoteLineFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Code ubl-PaymentPurposeCode"
          meta={CreditNoteLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Purpose Code"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.PaymentPurposeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CreditNoteLine ubl-Indicator ubl-FreeOfChargeIndicator"
          meta={CreditNoteLineFieldMeta.FreeOfChargeIndicator} 
          value={value.FreeOfChargeIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Free Of Charge Indicator"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.FreeOfChargeIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-Period ubl-InvoicePeriod"
          meta={CreditNoteLineFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Invoice Period"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.InvoicePeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-OrderLineReference"
          meta={CreditNoteLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay
              key={key}
              label="Order Line Reference"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.OrderLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-Response ubl-DiscrepancyResponse"
          meta={CreditNoteLineFieldMeta.DiscrepancyResponse} 
          value={value.DiscrepancyResponse}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay
              key={key}
              label="Discrepancy Response"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.DiscrepancyResponse}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-LineReference ubl-DespatchLineReference"
          meta={CreditNoteLineFieldMeta.DespatchLineReference} 
          value={value.DespatchLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Despatch Line Reference"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.DespatchLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-LineReference ubl-ReceiptLineReference"
          meta={CreditNoteLineFieldMeta.ReceiptLineReference} 
          value={value.ReceiptLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Receipt Line Reference"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.ReceiptLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-BillingReference"
          meta={CreditNoteLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay
              key={key}
              label="Billing Reference"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.BillingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-DocumentReference"
          meta={CreditNoteLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-PricingReference"
          meta={CreditNoteLineFieldMeta.PricingReference} 
          value={value.PricingReference}
          itemDisplay={ (itemValue: PricingReference, key: string | number) =>
            <PricingReferenceDisplay
              key={key}
              label="Pricing Reference"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.PricingReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-Party ubl-OriginatorParty"
          meta={CreditNoteLineFieldMeta.OriginatorParty} 
          value={value.OriginatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Originator Party"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.OriginatorParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-Delivery"
          meta={CreditNoteLineFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.Delivery}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-PaymentTerms"
          meta={CreditNoteLineFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-TaxTotal"
          meta={CreditNoteLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-AllowanceCharge"
          meta={CreditNoteLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-Item"
          meta={CreditNoteLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.Item}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-Price"
          meta={CreditNoteLineFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay
              key={key}
              label="Price"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.Price}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-DeliveryTerms"
          meta={CreditNoteLineFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-SubCreditNoteLine"
          meta={CreditNoteLineFieldMeta.SubCreditNoteLine} 
          value={value.SubCreditNoteLine}
          itemDisplay={ (itemValue: CreditNoteLine, key: string | number) =>
            <CreditNoteLineDisplay
              key={key}
              label="Sub Credit Note Line"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.SubCreditNoteLine}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CreditNoteLine ubl-PriceExtension ubl-ItemPriceExtension"
          meta={CreditNoteLineFieldMeta.ItemPriceExtension} 
          value={value.ItemPriceExtension}
          itemDisplay={ (itemValue: PriceExtension, key: string | number) =>
            <PriceExtensionDisplay
              key={key}
              label="Item Price Extension"
              value={itemValue}
              meta={CreditNoteLineFieldMeta.ItemPriceExtension}
            />
          }
        />
        </div>
    </div>
  )
}
