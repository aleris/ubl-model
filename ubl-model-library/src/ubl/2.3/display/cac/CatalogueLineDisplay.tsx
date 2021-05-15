import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueLine } from  '../../model/cac/CatalogueLine'
import { CatalogueLineFieldMeta } from  '../../meta/cac/CatalogueLineMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from './CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import ItemComparisonDisplay from './ItemComparisonDisplay'
import { ItemComparison } from '../../model/cac/ItemComparison'
import ItemLocationQuantityDisplay from './ItemLocationQuantityDisplay'
import { ItemLocationQuantity } from '../../model/cac/ItemLocationQuantity'
import ItemPropertyDisplay from './ItemPropertyDisplay'
import { ItemProperty } from '../../model/cac/ItemProperty'
import LineReferenceDisplay from './LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import RelatedItemDisplay from './RelatedItemDisplay'
import { RelatedItem } from '../../model/cac/RelatedItem'
import SupplierPartyDisplay from './SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CatalogueLine | undefined
  meta: FieldMeta<T>
}

export default function CatalogueLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CatalogueLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CatalogueLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CatalogueLineFieldMeta.ID}
          />

          <CodeDisplay
            label="Action Code"
            value={value.ActionCode?.[0]}
            meta={CatalogueLineFieldMeta.ActionCode}
          />

          <CodeDisplay
            label="Life Cycle Status Code"
            value={value.LifeCycleStatusCode?.[0]}
            meta={CatalogueLineFieldMeta.LifeCycleStatusCode}
          />

          <TextDisplay
            label="Contract Subdivision"
            value={value.ContractSubdivision?.[0]}
            meta={CatalogueLineFieldMeta.ContractSubdivision}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CatalogueLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CatalogueLineFieldMeta.Note}
              />
            }
          />

          <IndicatorDisplay
            label="Orderable Indicator"
            value={value.OrderableIndicator?.[0]}
            meta={CatalogueLineFieldMeta.OrderableIndicator}
          />

          <TextDisplay
            label="Orderable Unit"
            value={value.OrderableUnit?.[0]}
            meta={CatalogueLineFieldMeta.OrderableUnit}
          />

          <QuantityDisplay
            label="Content Unit"
            value={value.ContentUnitQuantity?.[0]}
            meta={CatalogueLineFieldMeta.ContentUnitQuantity}
          />

          <NumericDisplay
            label="Order Quantity Increment"
            value={value.OrderQuantityIncrementNumeric?.[0]}
            meta={CatalogueLineFieldMeta.OrderQuantityIncrementNumeric}
          />

          <QuantityDisplay
            label="Minimum Order Quantity"
            value={value.MinimumOrderQuantity?.[0]}
            meta={CatalogueLineFieldMeta.MinimumOrderQuantity}
          />

          <QuantityDisplay
            label="Maximum Order Quantity"
            value={value.MaximumOrderQuantity?.[0]}
            meta={CatalogueLineFieldMeta.MaximumOrderQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-WarrantyInformation"
            label="Warranty Information"
            items={value.WarrantyInformation}
            meta={CatalogueLineFieldMeta.WarrantyInformation} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Warranty Information"
                value={itemValue}
                meta={CatalogueLineFieldMeta.WarrantyInformation}
              />
            }
          />

          <CodeDisplay
            label="Pack Level Code"
            value={value.PackLevelCode?.[0]}
            meta={CatalogueLineFieldMeta.PackLevelCode}
          />

          <CustomerPartyDisplay
            label="Contractor Customer Party"
            value={value.ContractorCustomerParty?.[0]}
            meta={CatalogueLineFieldMeta.ContractorCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={CatalogueLineFieldMeta.SellerSupplierParty}
          />

          <PartyDisplay
            label="Warranty Party"
            value={value.WarrantyParty?.[0]}
            meta={CatalogueLineFieldMeta.WarrantyParty}
          />

          <PeriodDisplay
            label="Warranty Validity Period"
            value={value.WarrantyValidityPeriod?.[0]}
            meta={CatalogueLineFieldMeta.WarrantyValidityPeriod}
          />

          <PeriodDisplay
            label="Line Validity Period"
            value={value.LineValidityPeriod?.[0]}
            meta={CatalogueLineFieldMeta.LineValidityPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemComparison"
            label="Item Comparison"
            items={value.ItemComparison}
            meta={CatalogueLineFieldMeta.ItemComparison} 
            itemDisplay={ (itemValue: ItemComparison, key: string | number) =>
              <ItemComparisonDisplay
                key={key}
                label="Item Comparison"
                value={itemValue}
                meta={CatalogueLineFieldMeta.ItemComparison}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-RelatedItem ubl-ComponentRelatedItem"
            label="Component Related Item"
            items={value.ComponentRelatedItem}
            meta={CatalogueLineFieldMeta.ComponentRelatedItem} 
            itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
              <RelatedItemDisplay
                key={key}
                label="Component Related Item"
                value={itemValue}
                meta={CatalogueLineFieldMeta.ComponentRelatedItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-RelatedItem ubl-AccessoryRelatedItem"
            label="Accessory Related Item"
            items={value.AccessoryRelatedItem}
            meta={CatalogueLineFieldMeta.AccessoryRelatedItem} 
            itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
              <RelatedItemDisplay
                key={key}
                label="Accessory Related Item"
                value={itemValue}
                meta={CatalogueLineFieldMeta.AccessoryRelatedItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-RelatedItem ubl-RequiredRelatedItem"
            label="Required Related Item"
            items={value.RequiredRelatedItem}
            meta={CatalogueLineFieldMeta.RequiredRelatedItem} 
            itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
              <RelatedItemDisplay
                key={key}
                label="Required Related Item"
                value={itemValue}
                meta={CatalogueLineFieldMeta.RequiredRelatedItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-RelatedItem ubl-ReplacementRelatedItem"
            label="Replacement Related Item"
            items={value.ReplacementRelatedItem}
            meta={CatalogueLineFieldMeta.ReplacementRelatedItem} 
            itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
              <RelatedItemDisplay
                key={key}
                label="Replacement Related Item"
                value={itemValue}
                meta={CatalogueLineFieldMeta.ReplacementRelatedItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-RelatedItem ubl-ComplementaryRelatedItem"
            label="Complementary Related Item"
            items={value.ComplementaryRelatedItem}
            meta={CatalogueLineFieldMeta.ComplementaryRelatedItem} 
            itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
              <RelatedItemDisplay
                key={key}
                label="Complementary Related Item"
                value={itemValue}
                meta={CatalogueLineFieldMeta.ComplementaryRelatedItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-RelatedItem ubl-ReplacedRelatedItem"
            label="Replaced Related Item"
            items={value.ReplacedRelatedItem}
            meta={CatalogueLineFieldMeta.ReplacedRelatedItem} 
            itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
              <RelatedItemDisplay
                key={key}
                label="Replaced Related Item"
                value={itemValue}
                meta={CatalogueLineFieldMeta.ReplacedRelatedItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemLocationQuantity ubl-RequiredItemLocationQuantity"
            label="Required Item Location Quantity"
            items={value.RequiredItemLocationQuantity}
            meta={CatalogueLineFieldMeta.RequiredItemLocationQuantity} 
            itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
              <ItemLocationQuantityDisplay
                key={key}
                label="Required Item Location Quantity"
                value={itemValue}
                meta={CatalogueLineFieldMeta.RequiredItemLocationQuantity}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={CatalogueLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={CatalogueLineFieldMeta.DocumentReference}
              />
            }
          />

          <ItemDisplay
            label="Item"
            value={value.Item?.[0]}
            meta={CatalogueLineFieldMeta.Item}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemProperty ubl-KeywordItemProperty"
            label="Keyword Item Property"
            items={value.KeywordItemProperty}
            meta={CatalogueLineFieldMeta.KeywordItemProperty} 
            itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
              <ItemPropertyDisplay
                key={key}
                label="Keyword Item Property"
                value={itemValue}
                meta={CatalogueLineFieldMeta.KeywordItemProperty}
              />
            }
          />

          <LineReferenceDisplay
            label="Call For Tenders Line Reference"
            value={value.CallForTendersLineReference?.[0]}
            meta={CatalogueLineFieldMeta.CallForTendersLineReference}
          />

          <DocumentReferenceDisplay
            label="Call For Tenders Document Reference"
            value={value.CallForTendersDocumentReference?.[0]}
            meta={CatalogueLineFieldMeta.CallForTendersDocumentReference}
          />
        </div>
    </div>
  )
}
