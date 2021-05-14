import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CatalogueLine
  meta: FieldMeta<T>
}

export default function CatalogueLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CatalogueLine ubl-CatalogueLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CatalogueLine ubl-UBLExtensions"
          meta={CatalogueLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CatalogueLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Identifier ubl-ID"
          meta={CatalogueLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Code ubl-ActionCode"
          meta={CatalogueLineFieldMeta.ActionCode} 
          value={value.ActionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Action Code"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ActionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Code ubl-LifeCycleStatusCode"
          meta={CatalogueLineFieldMeta.LifeCycleStatusCode} 
          value={value.LifeCycleStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Life Cycle Status Code"
              value={itemValue}
              meta={CatalogueLineFieldMeta.LifeCycleStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Text ubl-ContractSubdivision"
          meta={CatalogueLineFieldMeta.ContractSubdivision} 
          value={value.ContractSubdivision}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Subdivision"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ContractSubdivision}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Text ubl-Note"
          meta={CatalogueLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CatalogueLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Indicator ubl-OrderableIndicator"
          meta={CatalogueLineFieldMeta.OrderableIndicator} 
          value={value.OrderableIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Orderable Indicator"
              value={itemValue}
              meta={CatalogueLineFieldMeta.OrderableIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Text ubl-OrderableUnit"
          meta={CatalogueLineFieldMeta.OrderableUnit} 
          value={value.OrderableUnit}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Orderable Unit"
              value={itemValue}
              meta={CatalogueLineFieldMeta.OrderableUnit}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Quantity ubl-ContentUnitQuantity"
          meta={CatalogueLineFieldMeta.ContentUnitQuantity} 
          value={value.ContentUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Content Unit"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ContentUnitQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Numeric ubl-OrderQuantityIncrementNumeric"
          meta={CatalogueLineFieldMeta.OrderQuantityIncrementNumeric} 
          value={value.OrderQuantityIncrementNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Order Quantity Increment"
              value={itemValue}
              meta={CatalogueLineFieldMeta.OrderQuantityIncrementNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Quantity ubl-MinimumOrderQuantity"
          meta={CatalogueLineFieldMeta.MinimumOrderQuantity} 
          value={value.MinimumOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Order Quantity"
              value={itemValue}
              meta={CatalogueLineFieldMeta.MinimumOrderQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Quantity ubl-MaximumOrderQuantity"
          meta={CatalogueLineFieldMeta.MaximumOrderQuantity} 
          value={value.MaximumOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Order Quantity"
              value={itemValue}
              meta={CatalogueLineFieldMeta.MaximumOrderQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Text ubl-WarrantyInformation"
          meta={CatalogueLineFieldMeta.WarrantyInformation} 
          value={value.WarrantyInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Warranty Information"
              value={itemValue}
              meta={CatalogueLineFieldMeta.WarrantyInformation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueLine ubl-Code ubl-PackLevelCode"
          meta={CatalogueLineFieldMeta.PackLevelCode} 
          value={value.PackLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Pack Level Code"
              value={itemValue}
              meta={CatalogueLineFieldMeta.PackLevelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueLine ubl-CustomerParty ubl-ContractorCustomerParty"
          meta={CatalogueLineFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Contractor Customer Party"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ContractorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueLine ubl-SupplierParty ubl-SellerSupplierParty"
          meta={CatalogueLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={CatalogueLineFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueLine ubl-Party ubl-WarrantyParty"
          meta={CatalogueLineFieldMeta.WarrantyParty} 
          value={value.WarrantyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Warranty Party"
              value={itemValue}
              meta={CatalogueLineFieldMeta.WarrantyParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueLine ubl-Period ubl-WarrantyValidityPeriod"
          meta={CatalogueLineFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Warranty Validity Period"
              value={itemValue}
              meta={CatalogueLineFieldMeta.WarrantyValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueLine ubl-Period ubl-LineValidityPeriod"
          meta={CatalogueLineFieldMeta.LineValidityPeriod} 
          value={value.LineValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Line Validity Period"
              value={itemValue}
              meta={CatalogueLineFieldMeta.LineValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-ItemComparison"
          meta={CatalogueLineFieldMeta.ItemComparison} 
          value={value.ItemComparison}
          itemDisplay={ (itemValue: ItemComparison, key: string | number) =>
            <ItemComparisonDisplay
              key={key}
              label="Item Comparison"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ItemComparison}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-RelatedItem ubl-ComponentRelatedItem"
          meta={CatalogueLineFieldMeta.ComponentRelatedItem} 
          value={value.ComponentRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay
              key={key}
              label="Component Related Item"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ComponentRelatedItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-RelatedItem ubl-AccessoryRelatedItem"
          meta={CatalogueLineFieldMeta.AccessoryRelatedItem} 
          value={value.AccessoryRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay
              key={key}
              label="Accessory Related Item"
              value={itemValue}
              meta={CatalogueLineFieldMeta.AccessoryRelatedItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-RelatedItem ubl-RequiredRelatedItem"
          meta={CatalogueLineFieldMeta.RequiredRelatedItem} 
          value={value.RequiredRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay
              key={key}
              label="Required Related Item"
              value={itemValue}
              meta={CatalogueLineFieldMeta.RequiredRelatedItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-RelatedItem ubl-ReplacementRelatedItem"
          meta={CatalogueLineFieldMeta.ReplacementRelatedItem} 
          value={value.ReplacementRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay
              key={key}
              label="Replacement Related Item"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ReplacementRelatedItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-RelatedItem ubl-ComplementaryRelatedItem"
          meta={CatalogueLineFieldMeta.ComplementaryRelatedItem} 
          value={value.ComplementaryRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay
              key={key}
              label="Complementary Related Item"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ComplementaryRelatedItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-RelatedItem ubl-ReplacedRelatedItem"
          meta={CatalogueLineFieldMeta.ReplacedRelatedItem} 
          value={value.ReplacedRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay
              key={key}
              label="Replaced Related Item"
              value={itemValue}
              meta={CatalogueLineFieldMeta.ReplacedRelatedItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-ItemLocationQuantity ubl-RequiredItemLocationQuantity"
          meta={CatalogueLineFieldMeta.RequiredItemLocationQuantity} 
          value={value.RequiredItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay
              key={key}
              label="Required Item Location Quantity"
              value={itemValue}
              meta={CatalogueLineFieldMeta.RequiredItemLocationQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-DocumentReference"
          meta={CatalogueLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={CatalogueLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueLine ubl-Item"
          meta={CatalogueLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Item"
              value={itemValue}
              meta={CatalogueLineFieldMeta.Item}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueLine ubl-ItemProperty ubl-KeywordItemProperty"
          meta={CatalogueLineFieldMeta.KeywordItemProperty} 
          value={value.KeywordItemProperty}
          itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
            <ItemPropertyDisplay
              key={key}
              label="Keyword Item Property"
              value={itemValue}
              meta={CatalogueLineFieldMeta.KeywordItemProperty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueLine ubl-LineReference ubl-CallForTendersLineReference"
          meta={CatalogueLineFieldMeta.CallForTendersLineReference} 
          value={value.CallForTendersLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay
              key={key}
              label="Call For Tenders Line Reference"
              value={itemValue}
              meta={CatalogueLineFieldMeta.CallForTendersLineReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueLine ubl-DocumentReference ubl-CallForTendersDocumentReference"
          meta={CatalogueLineFieldMeta.CallForTendersDocumentReference} 
          value={value.CallForTendersDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Call For Tenders Document Reference"
              value={itemValue}
              meta={CatalogueLineFieldMeta.CallForTendersDocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}
