import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: LineItem
  meta: FieldMeta<T>
}

export default function LineItemDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={LineItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={LineItemFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LineItemFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.SalesOrderID} 
          value={value.SalesOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LineItemFieldMeta.SalesOrderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LineItemFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LineItemFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.LineStatusCode} 
          value={value.LineStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={LineItemFieldMeta.LineStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={LineItemFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={LineItemFieldMeta.LineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.TaxInclusiveLineExtensionAmount} 
          value={value.TaxInclusiveLineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={LineItemFieldMeta.TaxInclusiveLineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.TotalTaxAmount} 
          value={value.TotalTaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={LineItemFieldMeta.TotalTaxAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={LineItemFieldMeta.MinimumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={LineItemFieldMeta.MaximumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.MinimumBackorderQuantity} 
          value={value.MinimumBackorderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={LineItemFieldMeta.MinimumBackorderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.MaximumBackorderQuantity} 
          value={value.MaximumBackorderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={LineItemFieldMeta.MaximumBackorderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.InspectionMethodCode} 
          value={value.InspectionMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={LineItemFieldMeta.InspectionMethodCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.PartialDeliveryIndicator} 
          value={value.PartialDeliveryIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={LineItemFieldMeta.PartialDeliveryIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.BackOrderAllowedIndicator} 
          value={value.BackOrderAllowedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={LineItemFieldMeta.BackOrderAllowedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={LineItemFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LineItemFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.WarrantyInformation} 
          value={value.WarrantyInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LineItemFieldMeta.WarrantyInformation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={LineItemFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={LineItemFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.OriginatorParty} 
          value={value.OriginatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={LineItemFieldMeta.OriginatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.OrderedShipment} 
          value={value.OrderedShipment}
          itemDisplay={ (itemValue: OrderedShipment, key: string | number) =>
            <OrderedShipmentDisplay key={key} meta={LineItemFieldMeta.OrderedShipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.PricingReference} 
          value={value.PricingReference}
          itemDisplay={ (itemValue: PricingReference, key: string | number) =>
            <PricingReferenceDisplay key={key} meta={LineItemFieldMeta.PricingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={LineItemFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={LineItemFieldMeta.Price} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={LineItemFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.SubLineItem} 
          value={value.SubLineItem}
          itemDisplay={ (itemValue: LineItem, key: string | number) =>
            <LineItemDisplay key={key} meta={LineItemFieldMeta.SubLineItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={LineItemFieldMeta.WarrantyValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.WarrantyParty} 
          value={value.WarrantyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={LineItemFieldMeta.WarrantyParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={LineItemFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.ItemPriceExtension} 
          value={value.ItemPriceExtension}
          itemDisplay={ (itemValue: PriceExtension, key: string | number) =>
            <PriceExtensionDisplay key={key} meta={LineItemFieldMeta.ItemPriceExtension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LineItemFieldMeta.LineReference} 
          value={value.LineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={LineItemFieldMeta.LineReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
