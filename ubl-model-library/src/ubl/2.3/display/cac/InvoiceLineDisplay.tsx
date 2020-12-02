import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: InvoiceLine
  meta: FieldMeta<T>
}

export default function InvoiceLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={InvoiceLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={InvoiceLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InvoiceLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={InvoiceLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={InvoiceLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.InvoicedQuantity} 
          value={value.InvoicedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={InvoiceLineFieldMeta.InvoicedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={InvoiceLineFieldMeta.LineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={InvoiceLineFieldMeta.TaxInclusiveLineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={InvoiceLineFieldMeta.TaxPointDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={InvoiceLineFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={InvoiceLineFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={InvoiceLineFieldMeta.PaymentPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.FreeOfChargeIndicator} 
          value={value.FreeOfChargeIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={InvoiceLineFieldMeta.FreeOfChargeIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={InvoiceLineFieldMeta.InvoicePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay key={key} meta={InvoiceLineFieldMeta.OrderLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.DespatchLineReference} 
          value={value.DespatchLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={InvoiceLineFieldMeta.DespatchLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.ReceiptLineReference} 
          value={value.ReceiptLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={InvoiceLineFieldMeta.ReceiptLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={InvoiceLineFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={InvoiceLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.PricingReference} 
          value={value.PricingReference}
          itemDisplay={ (itemValue: PricingReference, key: string | number) =>
            <PricingReferenceDisplay key={key} meta={InvoiceLineFieldMeta.PricingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.OriginatorParty} 
          value={value.OriginatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={InvoiceLineFieldMeta.OriginatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={InvoiceLineFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={InvoiceLineFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={InvoiceLineFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={InvoiceLineFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.WithholdingTaxTotal} 
          value={value.WithholdingTaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={InvoiceLineFieldMeta.WithholdingTaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={InvoiceLineFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={InvoiceLineFieldMeta.Price} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={InvoiceLineFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.SubInvoiceLine} 
          value={value.SubInvoiceLine}
          itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
            <InvoiceLineDisplay key={key} meta={InvoiceLineFieldMeta.SubInvoiceLine} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={InvoiceLineFieldMeta.ItemPriceExtension} 
          value={value.ItemPriceExtension}
          itemDisplay={ (itemValue: PriceExtension, key: string | number) =>
            <PriceExtensionDisplay key={key} meta={InvoiceLineFieldMeta.ItemPriceExtension} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
