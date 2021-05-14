import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DebitNoteLine } from  '../../model/cac/DebitNoteLine'
import { DebitNoteLineFieldMeta } from  '../../meta/cac/DebitNoteLineMeta'
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
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import PriceDisplay from './PriceDisplay'
import { Price } from '../../model/cac/Price'
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
  value: DebitNoteLine
  meta: FieldMeta<T>
}

export default function DebitNoteLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DebitNoteLine ubl-DebitNoteLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DebitNoteLine ubl-UBLExtensions"
          meta={DebitNoteLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Identifier ubl-ID"
          meta={DebitNoteLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Identifier ubl-UUID"
          meta={DebitNoteLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.UUID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Text ubl-Note"
          meta={DebitNoteLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Quantity ubl-DebitedQuantity"
          meta={DebitNoteLineFieldMeta.DebitedQuantity} 
          value={value.DebitedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Debited Quantity"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.DebitedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Amount ubl-LineExtensionAmount"
          meta={DebitNoteLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Line Extension Amount"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.LineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Amount ubl-TaxInclusiveLineExtensionAmount"
          meta={DebitNoteLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Inclusive Line Extension Amount"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.TaxInclusiveLineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Date ubl-TaxPointDate"
          meta={DebitNoteLineFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Tax Point Date"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.TaxPointDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Code ubl-AccountingCostCode"
          meta={DebitNoteLineFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Text ubl-AccountingCost"
          meta={DebitNoteLineFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNoteLine ubl-Code ubl-PaymentPurposeCode"
          meta={DebitNoteLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Purpose Code"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.PaymentPurposeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-Response ubl-DiscrepancyResponse"
          meta={DebitNoteLineFieldMeta.DiscrepancyResponse} 
          value={value.DiscrepancyResponse}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay
              key={key}
              label="Discrepancy Response"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.DiscrepancyResponse}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-LineReference ubl-DespatchLineReference"
          meta={DebitNoteLineFieldMeta.DespatchLineReference} 
          value={value.DespatchLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Despatch Line Reference"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.DespatchLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-LineReference ubl-ReceiptLineReference"
          meta={DebitNoteLineFieldMeta.ReceiptLineReference} 
          value={value.ReceiptLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Receipt Line Reference"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.ReceiptLineReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-BillingReference"
          meta={DebitNoteLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay
              key={key}
              label="Billing Reference"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.BillingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-DocumentReference"
          meta={DebitNoteLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-PricingReference"
          meta={DebitNoteLineFieldMeta.PricingReference} 
          value={value.PricingReference}
          itemDisplay={ (itemValue: PricingReference, key: string | number) =>
            <PricingReferenceDisplay
              key={key}
              label="Pricing Reference"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.PricingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-Delivery"
          meta={DebitNoteLineFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.Delivery}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-TaxTotal"
          meta={DebitNoteLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-AllowanceCharge"
          meta={DebitNoteLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-Item"
          meta={DebitNoteLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.Item}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-Price"
          meta={DebitNoteLineFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay
              key={key}
              label="Price"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.Price}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNoteLine ubl-SubDebitNoteLine"
          meta={DebitNoteLineFieldMeta.SubDebitNoteLine} 
          value={value.SubDebitNoteLine}
          itemDisplay={ (itemValue: DebitNoteLine, key: string | number) =>
            <DebitNoteLineDisplay
              key={key}
              label="Sub Debit Note Line"
              value={itemValue}
              meta={DebitNoteLineFieldMeta.SubDebitNoteLine}
            />
          }
        />
        </div>
    </div>
  )
}
