import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: LineItem
  meta: FieldMeta<T>
}

export default function LineItemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-LineItem ubl-LineItemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-LineItem ubl-UBLExtensions"
          meta={LineItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={LineItemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Identifier ubl-ID"
          meta={LineItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={LineItemFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Identifier ubl-SalesOrderID"
          meta={LineItemFieldMeta.SalesOrderID} 
          value={value.SalesOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sales Order Identifier"
              value={itemValue}
              meta={LineItemFieldMeta.SalesOrderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Identifier ubl-UUID"
          meta={LineItemFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={LineItemFieldMeta.UUID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-LineItem ubl-Text ubl-Note"
          meta={LineItemFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={LineItemFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Code ubl-LineStatusCode"
          meta={LineItemFieldMeta.LineStatusCode} 
          value={value.LineStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Line Status Code"
              value={itemValue}
              meta={LineItemFieldMeta.LineStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Quantity"
          meta={LineItemFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Quantity"
              value={itemValue}
              meta={LineItemFieldMeta.Quantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Amount ubl-LineExtensionAmount"
          meta={LineItemFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Line Extension Amount"
              value={itemValue}
              meta={LineItemFieldMeta.LineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Amount ubl-TaxInclusiveLineExtensionAmount"
          meta={LineItemFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Inclusive Line Extension Amount"
              value={itemValue}
              meta={LineItemFieldMeta.TaxInclusiveLineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Amount ubl-TotalTaxAmount"
          meta={LineItemFieldMeta.TotalTaxAmount} 
          value={value.TotalTaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Tax Amount"
              value={itemValue}
              meta={LineItemFieldMeta.TotalTaxAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Quantity ubl-MinimumQuantity"
          meta={LineItemFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Quantity"
              value={itemValue}
              meta={LineItemFieldMeta.MinimumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Quantity ubl-MaximumQuantity"
          meta={LineItemFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Quantity"
              value={itemValue}
              meta={LineItemFieldMeta.MaximumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Quantity ubl-MinimumBackorderQuantity"
          meta={LineItemFieldMeta.MinimumBackorderQuantity} 
          value={value.MinimumBackorderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Backorder"
              value={itemValue}
              meta={LineItemFieldMeta.MinimumBackorderQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Quantity ubl-MaximumBackorderQuantity"
          meta={LineItemFieldMeta.MaximumBackorderQuantity} 
          value={value.MaximumBackorderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Backorder"
              value={itemValue}
              meta={LineItemFieldMeta.MaximumBackorderQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Code ubl-InspectionMethodCode"
          meta={LineItemFieldMeta.InspectionMethodCode} 
          value={value.InspectionMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Inspection Method Code"
              value={itemValue}
              meta={LineItemFieldMeta.InspectionMethodCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Indicator ubl-PartialDeliveryIndicator"
          meta={LineItemFieldMeta.PartialDeliveryIndicator} 
          value={value.PartialDeliveryIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Partial Delivery Indicator"
              value={itemValue}
              meta={LineItemFieldMeta.PartialDeliveryIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Indicator ubl-BackOrderAllowedIndicator"
          meta={LineItemFieldMeta.BackOrderAllowedIndicator} 
          value={value.BackOrderAllowedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Back Order Allowed Indicator"
              value={itemValue}
              meta={LineItemFieldMeta.BackOrderAllowedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Code ubl-AccountingCostCode"
          meta={LineItemFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={LineItemFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-LineItem ubl-Text ubl-AccountingCost"
          meta={LineItemFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={LineItemFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-LineItem ubl-Text ubl-WarrantyInformation"
          meta={LineItemFieldMeta.WarrantyInformation} 
          value={value.WarrantyInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Warranty Information"
              value={itemValue}
              meta={LineItemFieldMeta.WarrantyInformation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LineItem ubl-Delivery"
          meta={LineItemFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={LineItemFieldMeta.Delivery}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineItem ubl-DeliveryTerms"
          meta={LineItemFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={LineItemFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineItem ubl-Party ubl-OriginatorParty"
          meta={LineItemFieldMeta.OriginatorParty} 
          value={value.OriginatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Originator Party"
              value={itemValue}
              meta={LineItemFieldMeta.OriginatorParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LineItem ubl-OrderedShipment"
          meta={LineItemFieldMeta.OrderedShipment} 
          value={value.OrderedShipment}
          itemDisplay={ (itemValue: OrderedShipment, key: string | number) =>
            <OrderedShipmentDisplay
              key={key}
              label="Ordered Shipment"
              value={itemValue}
              meta={LineItemFieldMeta.OrderedShipment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineItem ubl-PricingReference"
          meta={LineItemFieldMeta.PricingReference} 
          value={value.PricingReference}
          itemDisplay={ (itemValue: PricingReference, key: string | number) =>
            <PricingReferenceDisplay
              key={key}
              label="Pricing Reference"
              value={itemValue}
              meta={LineItemFieldMeta.PricingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LineItem ubl-AllowanceCharge"
          meta={LineItemFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={LineItemFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineItem ubl-Price"
          meta={LineItemFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay
              key={key}
              label="Price"
              value={itemValue}
              meta={LineItemFieldMeta.Price}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineItem ubl-Item"
          meta={LineItemFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={LineItemFieldMeta.Item}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LineItem ubl-SubLineItem"
          meta={LineItemFieldMeta.SubLineItem} 
          value={value.SubLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay
              key={key}
              label="Sub Line Item"
              value={itemValue}
              meta={LineItemFieldMeta.SubLineItem}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineItem ubl-Period ubl-WarrantyValidityPeriod"
          meta={LineItemFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Warranty Validity Period"
              value={itemValue}
              meta={LineItemFieldMeta.WarrantyValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineItem ubl-Party ubl-WarrantyParty"
          meta={LineItemFieldMeta.WarrantyParty} 
          value={value.WarrantyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Warranty Party"
              value={itemValue}
              meta={LineItemFieldMeta.WarrantyParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LineItem ubl-TaxTotal"
          meta={LineItemFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={LineItemFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-LineItem ubl-PriceExtension ubl-ItemPriceExtension"
          meta={LineItemFieldMeta.ItemPriceExtension} 
          value={value.ItemPriceExtension}
          itemDisplay={ (itemValue: PriceExtension, key: string | number) =>
            <PriceExtensionDisplay
              key={key}
              label="Item Price Extension"
              value={itemValue}
              meta={LineItemFieldMeta.ItemPriceExtension}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-LineItem ubl-LineReference"
          meta={LineItemFieldMeta.LineReference} 
          value={value.LineReference}
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
