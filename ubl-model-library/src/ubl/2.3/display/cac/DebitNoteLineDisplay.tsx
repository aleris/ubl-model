import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: DebitNoteLine | undefined
  meta: FieldMeta<T>
}

export default function DebitNoteLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DebitNoteLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DebitNoteLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DebitNoteLineFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={DebitNoteLineFieldMeta.UUID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={DebitNoteLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={DebitNoteLineFieldMeta.Note}
              />
            }
          />

          <QuantityDisplay
            label="Debited Quantity"
            value={value.DebitedQuantity?.[0]}
            meta={DebitNoteLineFieldMeta.DebitedQuantity}
          />

          <AmountDisplay
            label="Line Extension Amount"
            value={value.LineExtensionAmount?.[0]}
            meta={DebitNoteLineFieldMeta.LineExtensionAmount}
          />

          <AmountDisplay
            label="Tax Inclusive Line Extension Amount"
            value={value.TaxInclusiveLineExtensionAmount?.[0]}
            meta={DebitNoteLineFieldMeta.TaxInclusiveLineExtensionAmount}
          />

          <DateDisplay
            label="Tax Point Date"
            value={value.TaxPointDate?.[0]}
            meta={DebitNoteLineFieldMeta.TaxPointDate}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={DebitNoteLineFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={DebitNoteLineFieldMeta.AccountingCost}
          />

          <CodeDisplay
            label="Payment Purpose Code"
            value={value.PaymentPurposeCode?.[0]}
            meta={DebitNoteLineFieldMeta.PaymentPurposeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Response ubl-DiscrepancyResponse"
            label="Discrepancy Response"
            items={value.DiscrepancyResponse}
            meta={DebitNoteLineFieldMeta.DiscrepancyResponse} 
            itemDisplay={ (itemValue: Response, key: string | number) =>
              <ResponseDisplay
                key={key}
                label="Discrepancy Response"
                value={itemValue}
                meta={DebitNoteLineFieldMeta.DiscrepancyResponse}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineReference ubl-DespatchLineReference"
            label="Despatch Line Reference"
            items={value.DespatchLineReference}
            meta={DebitNoteLineFieldMeta.DespatchLineReference} 
            itemDisplay={ (itemValue: LineReference, key: string | number) =>
              <LineReferenceDisplay
                key={key}
                label="Despatch Line Reference"
                value={itemValue}
                meta={DebitNoteLineFieldMeta.DespatchLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineReference ubl-ReceiptLineReference"
            label="Receipt Line Reference"
            items={value.ReceiptLineReference}
            meta={DebitNoteLineFieldMeta.ReceiptLineReference} 
            itemDisplay={ (itemValue: LineReference, key: string | number) =>
              <LineReferenceDisplay
                key={key}
                label="Receipt Line Reference"
                value={itemValue}
                meta={DebitNoteLineFieldMeta.ReceiptLineReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={DebitNoteLineFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={DebitNoteLineFieldMeta.BillingReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={DebitNoteLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={DebitNoteLineFieldMeta.DocumentReference}
              />
            }
          />

          <PricingReferenceDisplay
            label="Pricing Reference"
            value={value.PricingReference?.[0]}
            meta={DebitNoteLineFieldMeta.PricingReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={DebitNoteLineFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={DebitNoteLineFieldMeta.Delivery}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={DebitNoteLineFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={DebitNoteLineFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={DebitNoteLineFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={DebitNoteLineFieldMeta.AllowanceCharge}
              />
            }
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={DebitNoteLineFieldMeta.Item}
          />

          <PriceDisplay
            label="Price"
            value={value.Price?.[0]}
            meta={DebitNoteLineFieldMeta.Price}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DebitNoteLine ubl-SubDebitNoteLine"
            label="Sub Debit Note Line"
            items={value.SubDebitNoteLine}
            meta={DebitNoteLineFieldMeta.SubDebitNoteLine} 
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
