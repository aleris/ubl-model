import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: DebitNoteLine
  meta: FieldMeta<T>
}

export default function DebitNoteLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DebitNoteLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DebitNoteLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DebitNoteLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DebitNoteLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.DebitedQuantity} 
          value={value.DebitedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={DebitNoteLineFieldMeta.DebitedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={DebitNoteLineFieldMeta.LineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={DebitNoteLineFieldMeta.TaxInclusiveLineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DebitNoteLineFieldMeta.TaxPointDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DebitNoteLineFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DebitNoteLineFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DebitNoteLineFieldMeta.PaymentPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.DiscrepancyResponse} 
          value={value.DiscrepancyResponse}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay key={key} meta={DebitNoteLineFieldMeta.DiscrepancyResponse} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.DespatchLineReference} 
          value={value.DespatchLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={DebitNoteLineFieldMeta.DespatchLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.ReceiptLineReference} 
          value={value.ReceiptLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={DebitNoteLineFieldMeta.ReceiptLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={DebitNoteLineFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={DebitNoteLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.PricingReference} 
          value={value.PricingReference}
          itemDisplay={ (itemValue: PricingReference, key: string | number) =>
            <PricingReferenceDisplay key={key} meta={DebitNoteLineFieldMeta.PricingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={DebitNoteLineFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={DebitNoteLineFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={DebitNoteLineFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={DebitNoteLineFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={DebitNoteLineFieldMeta.Price} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DebitNoteLineFieldMeta.SubDebitNoteLine} 
          value={value.SubDebitNoteLine}
          itemDisplay={ (itemValue: DebitNoteLine, key: string | number) =>
            <DebitNoteLineDisplay key={key} meta={DebitNoteLineFieldMeta.SubDebitNoteLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
