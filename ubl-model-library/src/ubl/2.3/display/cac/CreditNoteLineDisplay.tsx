import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CreditNoteLine
  meta: FieldMeta<T>
}

export default function CreditNoteLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CreditNoteLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CreditNoteLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CreditNoteLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CreditNoteLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.CreditedQuantity} 
          value={value.CreditedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={CreditNoteLineFieldMeta.CreditedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={CreditNoteLineFieldMeta.LineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={CreditNoteLineFieldMeta.TaxInclusiveLineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CreditNoteLineFieldMeta.TaxPointDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CreditNoteLineFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CreditNoteLineFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CreditNoteLineFieldMeta.PaymentPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.FreeOfChargeIndicator} 
          value={value.FreeOfChargeIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={CreditNoteLineFieldMeta.FreeOfChargeIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CreditNoteLineFieldMeta.InvoicePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.OrderLineReference} 
          value={value.OrderLineReference}
          itemDisplay={ (itemValue: OrderLineReference, key: string | number) =>
            <OrderLineReferenceDisplay key={key} meta={CreditNoteLineFieldMeta.OrderLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.DiscrepancyResponse} 
          value={value.DiscrepancyResponse}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay key={key} meta={CreditNoteLineFieldMeta.DiscrepancyResponse} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.DespatchLineReference} 
          value={value.DespatchLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={CreditNoteLineFieldMeta.DespatchLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.ReceiptLineReference} 
          value={value.ReceiptLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={CreditNoteLineFieldMeta.ReceiptLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={CreditNoteLineFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CreditNoteLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.PricingReference} 
          value={value.PricingReference}
          itemDisplay={ (itemValue: PricingReference, key: string | number) =>
            <PricingReferenceDisplay key={key} meta={CreditNoteLineFieldMeta.PricingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.OriginatorParty} 
          value={value.OriginatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CreditNoteLineFieldMeta.OriginatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={CreditNoteLineFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={CreditNoteLineFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={CreditNoteLineFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={CreditNoteLineFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={CreditNoteLineFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={CreditNoteLineFieldMeta.Price} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={CreditNoteLineFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.SubCreditNoteLine} 
          value={value.SubCreditNoteLine}
          itemDisplay={ (itemValue: CreditNoteLine, key: string | number) =>
            <CreditNoteLineDisplay key={key} meta={CreditNoteLineFieldMeta.SubCreditNoteLine} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CreditNoteLineFieldMeta.ItemPriceExtension} 
          value={value.ItemPriceExtension}
          itemDisplay={ (itemValue: PriceExtension, key: string | number) =>
            <PriceExtensionDisplay key={key} meta={CreditNoteLineFieldMeta.ItemPriceExtension} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
