import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ConsumptionLine
  meta: FieldMeta<T>
}

export default function ConsumptionLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ConsumptionLine ubl-ConsumptionLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ConsumptionLine ubl-UBLExtensions"
          meta={ConsumptionLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionLine ubl-Identifier ubl-ID"
          meta={ConsumptionLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionLine ubl-Identifier ubl-ParentDocumentLineReferenceID"
          meta={ConsumptionLineFieldMeta.ParentDocumentLineReferenceID} 
          value={value.ParentDocumentLineReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Parent Document Line Reference Identifier"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.ParentDocumentLineReferenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionLine ubl-Quantity ubl-InvoicedQuantity"
          meta={ConsumptionLineFieldMeta.InvoicedQuantity} 
          value={value.InvoicedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Invoiced Quantity"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.InvoicedQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionLine ubl-Amount ubl-LineExtensionAmount"
          meta={ConsumptionLineFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Line Extension Amount"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.LineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionLine ubl-Amount ubl-TaxInclusiveLineExtensionAmount"
          meta={ConsumptionLineFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Inclusive Line Extension Amount"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.TaxInclusiveLineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionLine ubl-Period"
          meta={ConsumptionLineFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.Period}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ConsumptionLine ubl-Delivery"
          meta={ConsumptionLineFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.Delivery}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ConsumptionLine ubl-AllowanceCharge"
          meta={ConsumptionLineFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ConsumptionLine ubl-TaxTotal"
          meta={ConsumptionLineFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionLine ubl-UtilityItem"
          meta={ConsumptionLineFieldMeta.UtilityItem} 
          value={value.UtilityItem}
          itemDisplay={ (itemValue: UtilityItem, key: string | number) =>
            <UtilityItemDisplay
              key={key}
              label="Utility Item"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.UtilityItem}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionLine ubl-Price"
          meta={ConsumptionLineFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay
              key={key}
              label="Price"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.Price}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ConsumptionLine ubl-UnstructuredPrice"
          meta={ConsumptionLineFieldMeta.UnstructuredPrice} 
          value={value.UnstructuredPrice}
          itemDisplay={ (itemValue: UnstructuredPrice, key: string | number) =>
            <UnstructuredPriceDisplay
              key={key}
              label="Unstructured Price"
              value={itemValue}
              meta={ConsumptionLineFieldMeta.UnstructuredPrice}
            />
          }
        />
        </div>
    </div>
  )
}
