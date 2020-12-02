import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionLine } from  '../../model/cac/ConsumptionLine'
import { ConsumptionLineFieldMeta } from  '../../meta/cac/ConsumptionLineMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import DeliveryDisplay from './DeliveryDisplay'
import { Delivery } from '../../model/cac/Delivery'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import PriceDisplay from './PriceDisplay'
import { Price } from '../../model/cac/Price'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'
import UnstructuredPriceDisplay from './UnstructuredPriceDisplay'
import { UnstructuredPrice } from '../../model/cac/UnstructuredPrice'
import UtilityItemDisplay from './UtilityItemDisplay'
import { UtilityItem } from '../../model/cac/UtilityItem'

type Params<T> = {
  value: ConsumptionLine
  meta: FieldMeta<T>
}

export default function ConsumptionLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ConsumptionLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsumptionLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.ParentDocumentLineReferenceID} 
          value={value.ParentDocumentLineReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ConsumptionLineFieldMeta.ParentDocumentLineReferenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.InvoicedQuantity} 
          value={value.InvoicedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionLineFieldMeta.InvoicedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsumptionLineFieldMeta.LineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsumptionLineFieldMeta.TaxInclusiveLineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ConsumptionLineFieldMeta.Period} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={ConsumptionLineFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={ConsumptionLineFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={ConsumptionLineFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.UtilityItem} 
          value={value.UtilityItem}
          itemDisplay={ (itemValue: UtilityItem, key: string | number) =>
            <UtilityItemDisplay key={key} meta={ConsumptionLineFieldMeta.UtilityItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={ConsumptionLineFieldMeta.Price} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionLineFieldMeta.UnstructuredPrice} 
          value={value.UnstructuredPrice}
          itemDisplay={ (itemValue: UnstructuredPrice, key: string | number) =>
            <UnstructuredPriceDisplay key={key} meta={ConsumptionLineFieldMeta.UnstructuredPrice} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
