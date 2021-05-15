import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: ConsumptionLine | undefined
  meta: FieldMeta<T>
}

export default function ConsumptionLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ConsumptionLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConsumptionLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ConsumptionLineFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Parent Document Line Reference Identifier"
            value={value.ParentDocumentLineReferenceID?.[0]}
            meta={ConsumptionLineFieldMeta.ParentDocumentLineReferenceID}
          />

          <QuantityDisplay
            label="Invoiced Quantity"
            value={value.InvoicedQuantity?.[0]}
            meta={ConsumptionLineFieldMeta.InvoicedQuantity}
          />

          <AmountDisplay
            label="Line Extension Amount"
            value={value.LineExtensionAmount?.[0]}
            meta={ConsumptionLineFieldMeta.LineExtensionAmount}
          />

          <AmountDisplay
            label="Tax Inclusive Line Extension Amount"
            value={value.TaxInclusiveLineExtensionAmount?.[0]}
            meta={ConsumptionLineFieldMeta.TaxInclusiveLineExtensionAmount}
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={ConsumptionLineFieldMeta.Period}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={ConsumptionLineFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={ConsumptionLineFieldMeta.Delivery}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={ConsumptionLineFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={ConsumptionLineFieldMeta.AllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={ConsumptionLineFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={ConsumptionLineFieldMeta.TaxTotal}
              />
            }
          />

          <UtilityItemDisplay
            label="Utility Item"
            value={value.UtilityItem?.[0]}
            meta={ConsumptionLineFieldMeta.UtilityItem}
          />

          <PriceDisplay
            label="Price"
            value={value.Price?.[0]}
            meta={ConsumptionLineFieldMeta.Price}
          />

          <UnstructuredPriceDisplay
            label="Unstructured Price"
            value={value.UnstructuredPrice?.[0]}
            meta={ConsumptionLineFieldMeta.UnstructuredPrice}
          />
        </div>
    </div>
  )
}
