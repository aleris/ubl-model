import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Item } from  '../../model/cac/Item'
import { ItemFieldMeta } from  '../../meta/cac/ItemMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import CertificateDisplay from './CertificateDisplay'
import { Certificate } from '../../model/cac/Certificate'
import CommodityClassificationDisplay from './CommodityClassificationDisplay'
import { CommodityClassification } from '../../model/cac/CommodityClassification'
import CountryDisplay from './CountryDisplay'
import { Country } from '../../model/cac/Country'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import HazardousItemDisplay from './HazardousItemDisplay'
import { HazardousItem } from '../../model/cac/HazardousItem'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import ItemIdentificationDisplay from './ItemIdentificationDisplay'
import { ItemIdentification } from '../../model/cac/ItemIdentification'
import ItemInstanceDisplay from './ItemInstanceDisplay'
import { ItemInstance } from '../../model/cac/ItemInstance'
import ItemPropertyDisplay from './ItemPropertyDisplay'
import { ItemProperty } from '../../model/cac/ItemProperty'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TaxCategoryDisplay from './TaxCategoryDisplay'
import { TaxCategory } from '../../model/cac/TaxCategory'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TransactionConditionsDisplay from './TransactionConditionsDisplay'
import { TransactionConditions } from '../../model/cac/TransactionConditions'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Item
  meta: FieldMeta<T>
}

export default function ItemDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ItemFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.PackQuantity} 
          value={value.PackQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ItemFieldMeta.PackQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.PackSizeNumeric} 
          value={value.PackSizeNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ItemFieldMeta.PackSizeNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.CatalogueIndicator} 
          value={value.CatalogueIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ItemFieldMeta.CatalogueIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ItemFieldMeta.HazardousRiskIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.AdditionalInformation} 
          value={value.AdditionalInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemFieldMeta.AdditionalInformation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.Keyword} 
          value={value.Keyword}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemFieldMeta.Keyword} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.BrandName} 
          value={value.BrandName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemFieldMeta.BrandName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.ModelName} 
          value={value.ModelName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemFieldMeta.ModelName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.BuyersItemIdentification} 
          value={value.BuyersItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay key={key} meta={ItemFieldMeta.BuyersItemIdentification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.SellersItemIdentification} 
          value={value.SellersItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay key={key} meta={ItemFieldMeta.SellersItemIdentification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.ManufacturersItemIdentification} 
          value={value.ManufacturersItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay key={key} meta={ItemFieldMeta.ManufacturersItemIdentification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.StandardItemIdentification} 
          value={value.StandardItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay key={key} meta={ItemFieldMeta.StandardItemIdentification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.CatalogueItemIdentification} 
          value={value.CatalogueItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay key={key} meta={ItemFieldMeta.CatalogueItemIdentification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.AdditionalItemIdentification} 
          value={value.AdditionalItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay key={key} meta={ItemFieldMeta.AdditionalItemIdentification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.CatalogueDocumentReference} 
          value={value.CatalogueDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ItemFieldMeta.CatalogueDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.ItemSpecificationDocumentReference} 
          value={value.ItemSpecificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ItemFieldMeta.ItemSpecificationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.OriginCountry} 
          value={value.OriginCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={ItemFieldMeta.OriginCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.CommodityClassification} 
          value={value.CommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay key={key} meta={ItemFieldMeta.CommodityClassification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.TransactionConditions} 
          value={value.TransactionConditions}
          itemDisplay={ (itemValue: TransactionConditions, key: string | number) =>
            <TransactionConditionsDisplay key={key} meta={ItemFieldMeta.TransactionConditions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.HazardousItem} 
          value={value.HazardousItem}
          itemDisplay={ (itemValue: HazardousItem, key: string | number) =>
            <HazardousItemDisplay key={key} meta={ItemFieldMeta.HazardousItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.ClassifiedTaxCategory} 
          value={value.ClassifiedTaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay key={key} meta={ItemFieldMeta.ClassifiedTaxCategory} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.AdditionalItemProperty} 
          value={value.AdditionalItemProperty}
          itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
            <ItemPropertyDisplay key={key} meta={ItemFieldMeta.AdditionalItemProperty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.ManufacturerParty} 
          value={value.ManufacturerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ItemFieldMeta.ManufacturerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.InformationContentProviderParty} 
          value={value.InformationContentProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ItemFieldMeta.InformationContentProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.OriginAddress} 
          value={value.OriginAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={ItemFieldMeta.OriginAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.ItemInstance} 
          value={value.ItemInstance}
          itemDisplay={ (itemValue: ItemInstance, key: string | number) =>
            <ItemInstanceDisplay key={key} meta={ItemFieldMeta.ItemInstance} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.Certificate} 
          value={value.Certificate}
          itemDisplay={ (itemValue: Certificate, key: string | number) =>
            <CertificateDisplay key={key} meta={ItemFieldMeta.Certificate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemFieldMeta.Dimension} 
          value={value.Dimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={ItemFieldMeta.Dimension} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
