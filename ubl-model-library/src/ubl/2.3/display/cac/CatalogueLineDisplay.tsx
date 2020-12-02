import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CatalogueLine
  meta: FieldMeta<T>
}

export default function CatalogueLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CatalogueLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CatalogueLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ActionCode} 
          value={value.ActionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CatalogueLineFieldMeta.ActionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.LifeCycleStatusCode} 
          value={value.LifeCycleStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CatalogueLineFieldMeta.LifeCycleStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ContractSubdivision} 
          value={value.ContractSubdivision}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueLineFieldMeta.ContractSubdivision} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.OrderableIndicator} 
          value={value.OrderableIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={CatalogueLineFieldMeta.OrderableIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.OrderableUnit} 
          value={value.OrderableUnit}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueLineFieldMeta.OrderableUnit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ContentUnitQuantity} 
          value={value.ContentUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={CatalogueLineFieldMeta.ContentUnitQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.OrderQuantityIncrementNumeric} 
          value={value.OrderQuantityIncrementNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={CatalogueLineFieldMeta.OrderQuantityIncrementNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.MinimumOrderQuantity} 
          value={value.MinimumOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={CatalogueLineFieldMeta.MinimumOrderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.MaximumOrderQuantity} 
          value={value.MaximumOrderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={CatalogueLineFieldMeta.MaximumOrderQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.WarrantyInformation} 
          value={value.WarrantyInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueLineFieldMeta.WarrantyInformation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.PackLevelCode} 
          value={value.PackLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CatalogueLineFieldMeta.PackLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={CatalogueLineFieldMeta.ContractorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={CatalogueLineFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.WarrantyParty} 
          value={value.WarrantyParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CatalogueLineFieldMeta.WarrantyParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CatalogueLineFieldMeta.WarrantyValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.LineValidityPeriod} 
          value={value.LineValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CatalogueLineFieldMeta.LineValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ItemComparison} 
          value={value.ItemComparison}
          itemDisplay={ (itemValue: ItemComparison, key: string | number) =>
            <ItemComparisonDisplay key={key} meta={CatalogueLineFieldMeta.ItemComparison} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ComponentRelatedItem} 
          value={value.ComponentRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay key={key} meta={CatalogueLineFieldMeta.ComponentRelatedItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.AccessoryRelatedItem} 
          value={value.AccessoryRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay key={key} meta={CatalogueLineFieldMeta.AccessoryRelatedItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.RequiredRelatedItem} 
          value={value.RequiredRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay key={key} meta={CatalogueLineFieldMeta.RequiredRelatedItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ReplacementRelatedItem} 
          value={value.ReplacementRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay key={key} meta={CatalogueLineFieldMeta.ReplacementRelatedItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ComplementaryRelatedItem} 
          value={value.ComplementaryRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay key={key} meta={CatalogueLineFieldMeta.ComplementaryRelatedItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.ReplacedRelatedItem} 
          value={value.ReplacedRelatedItem}
          itemDisplay={ (itemValue: RelatedItem, key: string | number) =>
            <RelatedItemDisplay key={key} meta={CatalogueLineFieldMeta.ReplacedRelatedItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.RequiredItemLocationQuantity} 
          value={value.RequiredItemLocationQuantity}
          itemDisplay={ (itemValue: ItemLocationQuantity, key: string | number) =>
            <ItemLocationQuantityDisplay key={key} meta={CatalogueLineFieldMeta.RequiredItemLocationQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CatalogueLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={CatalogueLineFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.KeywordItemProperty} 
          value={value.KeywordItemProperty}
          itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
            <ItemPropertyDisplay key={key} meta={CatalogueLineFieldMeta.KeywordItemProperty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.CallForTendersLineReference} 
          value={value.CallForTendersLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={CatalogueLineFieldMeta.CallForTendersLineReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueLineFieldMeta.CallForTendersDocumentReference} 
          value={value.CallForTendersDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CatalogueLineFieldMeta.CallForTendersDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
