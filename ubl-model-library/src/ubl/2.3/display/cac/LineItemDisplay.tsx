import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { LineItem } from  '../../model/cac/LineItem'
import { LineItemFieldMeta } from  '../../meta/cac/LineItemMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DeliveryDisplay from './DeliveryDisplay'
import { Delivery } from '../../model/cac/Delivery'
import DeliveryTermsDisplay from './DeliveryTermsDisplay'
import { DeliveryTerms } from '../../model/cac/DeliveryTerms'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import OrderedShipmentDisplay from './OrderedShipmentDisplay'
import { OrderedShipment } from '../../model/cac/OrderedShipment'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
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
  value: LineItem | undefined
  meta: FieldMeta<T>
}

export default function LineItemDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-LineItem">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LineItemFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={LineItemFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Sales Order Identifier"
            value={value.SalesOrderID?.[0]}
            meta={LineItemFieldMeta.SalesOrderID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={LineItemFieldMeta.UUID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={LineItemFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={LineItemFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Line Status Code"
            value={value.LineStatusCode?.[0]}
            meta={LineItemFieldMeta.LineStatusCode}
          />

          <QuantityDisplay
            label="Quantity"
            value={value.Quantity?.[0]}
            meta={LineItemFieldMeta.Quantity}
          />

          <AmountDisplay
            label="Line Extension Amount"
            value={value.LineExtensionAmount?.[0]}
            meta={LineItemFieldMeta.LineExtensionAmount}
          />

          <AmountDisplay
            label="Tax Inclusive Line Extension Amount"
            value={value.TaxInclusiveLineExtensionAmount?.[0]}
            meta={LineItemFieldMeta.TaxInclusiveLineExtensionAmount}
          />

          <AmountDisplay
            label="Total Tax Amount"
            value={value.TotalTaxAmount?.[0]}
            meta={LineItemFieldMeta.TotalTaxAmount}
          />

          <QuantityDisplay
            label="Minimum Quantity"
            value={value.MinimumQuantity?.[0]}
            meta={LineItemFieldMeta.MinimumQuantity}
          />

          <QuantityDisplay
            label="Maximum Quantity"
            value={value.MaximumQuantity?.[0]}
            meta={LineItemFieldMeta.MaximumQuantity}
          />

          <QuantityDisplay
            label="Minimum Backorder"
            value={value.MinimumBackorderQuantity?.[0]}
            meta={LineItemFieldMeta.MinimumBackorderQuantity}
          />

          <QuantityDisplay
            label="Maximum Backorder"
            value={value.MaximumBackorderQuantity?.[0]}
            meta={LineItemFieldMeta.MaximumBackorderQuantity}
          />

          <CodeDisplay
            label="Inspection Method Code"
            value={value.InspectionMethodCode?.[0]}
            meta={LineItemFieldMeta.InspectionMethodCode}
          />

          <IndicatorDisplay
            label="Partial Delivery Indicator"
            value={value.PartialDeliveryIndicator?.[0]}
            meta={LineItemFieldMeta.PartialDeliveryIndicator}
          />

          <IndicatorDisplay
            label="Back Order Allowed Indicator"
            value={value.BackOrderAllowedIndicator?.[0]}
            meta={LineItemFieldMeta.BackOrderAllowedIndicator}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={LineItemFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={LineItemFieldMeta.AccountingCost}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-WarrantyInformation"
            label="Warranty Information"
            items={value.WarrantyInformation}
            meta={LineItemFieldMeta.WarrantyInformation} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Warranty Information"
                value={itemValue}
                meta={LineItemFieldMeta.WarrantyInformation}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={LineItemFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={LineItemFieldMeta.Delivery}
              />
            }
          />

          <DeliveryTermsDisplay
            label="Delivery Terms"
            value={value.DeliveryTerms?.[0]}
            meta={LineItemFieldMeta.DeliveryTerms}
          />

          <PartyDisplay
            label="Originator Party"
            value={value.OriginatorParty?.[0]}
            meta={LineItemFieldMeta.OriginatorParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-OrderedShipment"
            label="Ordered Shipment"
            items={value.OrderedShipment}
            meta={LineItemFieldMeta.OrderedShipment} 
            itemDisplay={ (itemValue: OrderedShipment, key: string | number) =>
              <OrderedShipmentDisplay
                key={key}
                label="Ordered Shipment"
                value={itemValue}
                meta={LineItemFieldMeta.OrderedShipment}
              />
            }
          />

          <PricingReferenceDisplay
            label="Pricing Reference"
            value={value.PricingReference?.[0]}
            meta={LineItemFieldMeta.PricingReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={LineItemFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={LineItemFieldMeta.AllowanceCharge}
              />
            }
          />

          <PriceDisplay
            label="Price"
            value={value.Price?.[0]}
            meta={LineItemFieldMeta.Price}
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={LineItemFieldMeta.Item}
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineItem ubl-SubLineItem"
            label="Sub Line Item"
            items={value.SubLineItem}
            meta={LineItemFieldMeta.SubLineItem} 
            itemDisplay={ (itemValue: LineItem, key: string | number) =>
              <LineItemDisplay
                key={key}
                label="Sub Line Item"
                value={itemValue}
                meta={LineItemFieldMeta.SubLineItem}
              />
            }
          />

          <PeriodDisplay
            label="Warranty Validity Period"
            value={value.WarrantyValidityPeriod?.[0]}
            meta={LineItemFieldMeta.WarrantyValidityPeriod}
          />

          <PartyDisplay
            label="Warranty Party"
            value={value.WarrantyParty?.[0]}
            meta={LineItemFieldMeta.WarrantyParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={LineItemFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={LineItemFieldMeta.TaxTotal}
              />
            }
          />

          <PriceExtensionDisplay
            label="Item Price Extension"
            value={value.ItemPriceExtension?.[0]}
            meta={LineItemFieldMeta.ItemPriceExtension}
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineReference"
            label="Line Reference"
            items={value.LineReference}
            meta={LineItemFieldMeta.LineReference} 
            itemDisplay={ (itemValue: LineReference, key: string | number) =>
              <LineReferenceDisplay
                key={key}
                label="Line Reference"
                value={itemValue}
                meta={LineItemFieldMeta.LineReference}
              />
            }
          />
        </div>
    </div>
  )
}
