import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: Item
  meta: FieldMeta<T>
}

export default function ItemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Item ubl-ItemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Item ubl-UBLExtensions"
          meta={ItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Item ubl-Text ubl-Description"
          meta={ItemFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ItemFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Item ubl-Quantity ubl-PackQuantity"
          meta={ItemFieldMeta.PackQuantity} 
          value={value.PackQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Pack Quantity"
              value={itemValue}
              meta={ItemFieldMeta.PackQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Item ubl-Numeric ubl-PackSizeNumeric"
          meta={ItemFieldMeta.PackSizeNumeric} 
          value={value.PackSizeNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Pack Size"
              value={itemValue}
              meta={ItemFieldMeta.PackSizeNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Item ubl-Indicator ubl-CatalogueIndicator"
          meta={ItemFieldMeta.CatalogueIndicator} 
          value={value.CatalogueIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Catalogue Indicator"
              value={itemValue}
              meta={ItemFieldMeta.CatalogueIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Item ubl-Text ubl-Name"
          meta={ItemFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={ItemFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Item ubl-Indicator ubl-HazardousRiskIndicator"
          meta={ItemFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Hazardous Risk Indicator"
              value={itemValue}
              meta={ItemFieldMeta.HazardousRiskIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Item ubl-Text ubl-AdditionalInformation"
          meta={ItemFieldMeta.AdditionalInformation} 
          value={value.AdditionalInformation}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Additional Information"
              value={itemValue}
              meta={ItemFieldMeta.AdditionalInformation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Item ubl-Text ubl-Keyword"
          meta={ItemFieldMeta.Keyword} 
          value={value.Keyword}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Keyword"
              value={itemValue}
              meta={ItemFieldMeta.Keyword}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Item ubl-Text ubl-BrandName"
          meta={ItemFieldMeta.BrandName} 
          value={value.BrandName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Brand Name"
              value={itemValue}
              meta={ItemFieldMeta.BrandName}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Item ubl-Text ubl-ModelName"
          meta={ItemFieldMeta.ModelName} 
          value={value.ModelName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Model Name"
              value={itemValue}
              meta={ItemFieldMeta.ModelName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Item ubl-ItemIdentification ubl-BuyersItemIdentification"
          meta={ItemFieldMeta.BuyersItemIdentification} 
          value={value.BuyersItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay
              key={key}
              label="Buyers Item Identification"
              value={itemValue}
              meta={ItemFieldMeta.BuyersItemIdentification}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Item ubl-ItemIdentification ubl-SellersItemIdentification"
          meta={ItemFieldMeta.SellersItemIdentification} 
          value={value.SellersItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay
              key={key}
              label="Sellers Item Identification"
              value={itemValue}
              meta={ItemFieldMeta.SellersItemIdentification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-ItemIdentification ubl-ManufacturersItemIdentification"
          meta={ItemFieldMeta.ManufacturersItemIdentification} 
          value={value.ManufacturersItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay
              key={key}
              label="Manufacturers Item Identification"
              value={itemValue}
              meta={ItemFieldMeta.ManufacturersItemIdentification}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Item ubl-ItemIdentification ubl-StandardItemIdentification"
          meta={ItemFieldMeta.StandardItemIdentification} 
          value={value.StandardItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay
              key={key}
              label="Standard Item Identification"
              value={itemValue}
              meta={ItemFieldMeta.StandardItemIdentification}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Item ubl-ItemIdentification ubl-CatalogueItemIdentification"
          meta={ItemFieldMeta.CatalogueItemIdentification} 
          value={value.CatalogueItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay
              key={key}
              label="Catalogue Item Identification"
              value={itemValue}
              meta={ItemFieldMeta.CatalogueItemIdentification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-ItemIdentification ubl-AdditionalItemIdentification"
          meta={ItemFieldMeta.AdditionalItemIdentification} 
          value={value.AdditionalItemIdentification}
          itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
            <ItemIdentificationDisplay
              key={key}
              label="Additional Item Identification"
              value={itemValue}
              meta={ItemFieldMeta.AdditionalItemIdentification}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Item ubl-DocumentReference ubl-CatalogueDocumentReference"
          meta={ItemFieldMeta.CatalogueDocumentReference} 
          value={value.CatalogueDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Catalogue Document Reference"
              value={itemValue}
              meta={ItemFieldMeta.CatalogueDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-DocumentReference ubl-ItemSpecificationDocumentReference"
          meta={ItemFieldMeta.ItemSpecificationDocumentReference} 
          value={value.ItemSpecificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Item Specification Document Reference"
              value={itemValue}
              meta={ItemFieldMeta.ItemSpecificationDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Item ubl-Country ubl-OriginCountry"
          meta={ItemFieldMeta.OriginCountry} 
          value={value.OriginCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Origin Country"
              value={itemValue}
              meta={ItemFieldMeta.OriginCountry}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-CommodityClassification"
          meta={ItemFieldMeta.CommodityClassification} 
          value={value.CommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay
              key={key}
              label="Commodity Classification"
              value={itemValue}
              meta={ItemFieldMeta.CommodityClassification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-TransactionConditions"
          meta={ItemFieldMeta.TransactionConditions} 
          value={value.TransactionConditions}
          itemDisplay={ (itemValue: TransactionConditions, key: string | number) =>
            <TransactionConditionsDisplay
              key={key}
              label="Transaction Conditions"
              value={itemValue}
              meta={ItemFieldMeta.TransactionConditions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-HazardousItem"
          meta={ItemFieldMeta.HazardousItem} 
          value={value.HazardousItem}
          itemDisplay={ (itemValue: HazardousItem, key: string | number) =>
            <HazardousItemDisplay
              key={key}
              label="Hazardous Item"
              value={itemValue}
              meta={ItemFieldMeta.HazardousItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-TaxCategory ubl-ClassifiedTaxCategory"
          meta={ItemFieldMeta.ClassifiedTaxCategory} 
          value={value.ClassifiedTaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay
              key={key}
              label="Classified Tax Category"
              value={itemValue}
              meta={ItemFieldMeta.ClassifiedTaxCategory}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-ItemProperty ubl-AdditionalItemProperty"
          meta={ItemFieldMeta.AdditionalItemProperty} 
          value={value.AdditionalItemProperty}
          itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
            <ItemPropertyDisplay
              key={key}
              label="Additional Item Property"
              value={itemValue}
              meta={ItemFieldMeta.AdditionalItemProperty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-Party ubl-ManufacturerParty"
          meta={ItemFieldMeta.ManufacturerParty} 
          value={value.ManufacturerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Manufacturer Party"
              value={itemValue}
              meta={ItemFieldMeta.ManufacturerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Item ubl-Party ubl-InformationContentProviderParty"
          meta={ItemFieldMeta.InformationContentProviderParty} 
          value={value.InformationContentProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Information Content Provider Party"
              value={itemValue}
              meta={ItemFieldMeta.InformationContentProviderParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-Address ubl-OriginAddress"
          meta={ItemFieldMeta.OriginAddress} 
          value={value.OriginAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Origin Address"
              value={itemValue}
              meta={ItemFieldMeta.OriginAddress}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-ItemInstance"
          meta={ItemFieldMeta.ItemInstance} 
          value={value.ItemInstance}
          itemDisplay={ (itemValue: ItemInstance, key: string | number) =>
            <ItemInstanceDisplay
              key={key}
              label="Item Instance"
              value={itemValue}
              meta={ItemFieldMeta.ItemInstance}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-Certificate"
          meta={ItemFieldMeta.Certificate} 
          value={value.Certificate}
          itemDisplay={ (itemValue: Certificate, key: string | number) =>
            <CertificateDisplay
              key={key}
              label="Certificate"
              value={itemValue}
              meta={ItemFieldMeta.Certificate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Item ubl-Dimension"
          meta={ItemFieldMeta.Dimension} 
          value={value.Dimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Dimension"
              value={itemValue}
              meta={ItemFieldMeta.Dimension}
            />
          }
        />
        </div>
    </div>
  )
}
