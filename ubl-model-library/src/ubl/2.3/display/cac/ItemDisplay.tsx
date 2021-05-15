import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Item | undefined
  meta: FieldMeta<T>
}

export default function ItemDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Item">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ItemFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ItemFieldMeta.Description}
              />
            }
          />

          <QuantityDisplay
            label="Pack Quantity"
            value={value.PackQuantity?.[0]}
            meta={ItemFieldMeta.PackQuantity}
          />

          <NumericDisplay
            label="Pack Size"
            value={value.PackSizeNumeric?.[0]}
            meta={ItemFieldMeta.PackSizeNumeric}
          />

          <IndicatorDisplay
            label="Catalogue Indicator"
            value={value.CatalogueIndicator?.[0]}
            meta={ItemFieldMeta.CatalogueIndicator}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={ItemFieldMeta.Name}
          />

          <IndicatorDisplay
            label="Hazardous Risk Indicator"
            value={value.HazardousRiskIndicator?.[0]}
            meta={ItemFieldMeta.HazardousRiskIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-AdditionalInformation"
            label="Additional Information"
            items={value.AdditionalInformation}
            meta={ItemFieldMeta.AdditionalInformation} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Additional Information"
                value={itemValue}
                meta={ItemFieldMeta.AdditionalInformation}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Keyword"
            label="Keyword"
            items={value.Keyword}
            meta={ItemFieldMeta.Keyword} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Keyword"
                value={itemValue}
                meta={ItemFieldMeta.Keyword}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-BrandName"
            label="Brand Name"
            items={value.BrandName}
            meta={ItemFieldMeta.BrandName} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Brand Name"
                value={itemValue}
                meta={ItemFieldMeta.BrandName}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ModelName"
            label="Model Name"
            items={value.ModelName}
            meta={ItemFieldMeta.ModelName} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Model Name"
                value={itemValue}
                meta={ItemFieldMeta.ModelName}
              />
            }
          />

          <ItemIdentificationDisplay
            label="Buyers Item Identification"
            value={value.BuyersItemIdentification?.[0]}
            meta={ItemFieldMeta.BuyersItemIdentification}
          />

          <ItemIdentificationDisplay
            label="Sellers Item Identification"
            value={value.SellersItemIdentification?.[0]}
            meta={ItemFieldMeta.SellersItemIdentification}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemIdentification ubl-ManufacturersItemIdentification"
            label="Manufacturers Item Identification"
            items={value.ManufacturersItemIdentification}
            meta={ItemFieldMeta.ManufacturersItemIdentification} 
            itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
              <ItemIdentificationDisplay
                key={key}
                label="Manufacturers Item Identification"
                value={itemValue}
                meta={ItemFieldMeta.ManufacturersItemIdentification}
              />
            }
          />

          <ItemIdentificationDisplay
            label="Standard Item Identification"
            value={value.StandardItemIdentification?.[0]}
            meta={ItemFieldMeta.StandardItemIdentification}
          />

          <ItemIdentificationDisplay
            label="Catalogue Item Identification"
            value={value.CatalogueItemIdentification?.[0]}
            meta={ItemFieldMeta.CatalogueItemIdentification}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemIdentification ubl-AdditionalItemIdentification"
            label="Additional Item Identification"
            items={value.AdditionalItemIdentification}
            meta={ItemFieldMeta.AdditionalItemIdentification} 
            itemDisplay={ (itemValue: ItemIdentification, key: string | number) =>
              <ItemIdentificationDisplay
                key={key}
                label="Additional Item Identification"
                value={itemValue}
                meta={ItemFieldMeta.AdditionalItemIdentification}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Catalogue Document Reference"
            value={value.CatalogueDocumentReference?.[0]}
            meta={ItemFieldMeta.CatalogueDocumentReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ItemSpecificationDocumentReference"
            label="Item Specification Document Reference"
            items={value.ItemSpecificationDocumentReference}
            meta={ItemFieldMeta.ItemSpecificationDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Item Specification Document Reference"
                value={itemValue}
                meta={ItemFieldMeta.ItemSpecificationDocumentReference}
              />
            }
          />

          <CountryDisplay
            label="Origin Country"
            value={value.OriginCountry?.[0]}
            meta={ItemFieldMeta.OriginCountry}
          />

          <ElementListDisplay
            className="ubl-cac ubl-CommodityClassification"
            label="Commodity Classification"
            items={value.CommodityClassification}
            meta={ItemFieldMeta.CommodityClassification} 
            itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
              <CommodityClassificationDisplay
                key={key}
                label="Commodity Classification"
                value={itemValue}
                meta={ItemFieldMeta.CommodityClassification}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransactionConditions"
            label="Transaction Conditions"
            items={value.TransactionConditions}
            meta={ItemFieldMeta.TransactionConditions} 
            itemDisplay={ (itemValue: TransactionConditions, key: string | number) =>
              <TransactionConditionsDisplay
                key={key}
                label="Transaction Conditions"
                value={itemValue}
                meta={ItemFieldMeta.TransactionConditions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-HazardousItem"
            label="Hazardous Item"
            items={value.HazardousItem}
            meta={ItemFieldMeta.HazardousItem} 
            itemDisplay={ (itemValue: HazardousItem, key: string | number) =>
              <HazardousItemDisplay
                key={key}
                label="Hazardous Item"
                value={itemValue}
                meta={ItemFieldMeta.HazardousItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxCategory ubl-ClassifiedTaxCategory"
            label="Classified Tax Category"
            items={value.ClassifiedTaxCategory}
            meta={ItemFieldMeta.ClassifiedTaxCategory} 
            itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
              <TaxCategoryDisplay
                key={key}
                label="Classified Tax Category"
                value={itemValue}
                meta={ItemFieldMeta.ClassifiedTaxCategory}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemProperty ubl-AdditionalItemProperty"
            label="Additional Item Property"
            items={value.AdditionalItemProperty}
            meta={ItemFieldMeta.AdditionalItemProperty} 
            itemDisplay={ (itemValue: ItemProperty, key: string | number) =>
              <ItemPropertyDisplay
                key={key}
                label="Additional Item Property"
                value={itemValue}
                meta={ItemFieldMeta.AdditionalItemProperty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Party ubl-ManufacturerParty"
            label="Manufacturer Party"
            items={value.ManufacturerParty}
            meta={ItemFieldMeta.ManufacturerParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Manufacturer Party"
                value={itemValue}
                meta={ItemFieldMeta.ManufacturerParty}
              />
            }
          />

          <PartyDisplay
            label="Information Content Provider Party"
            value={value.InformationContentProviderParty?.[0]}
            meta={ItemFieldMeta.InformationContentProviderParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Address ubl-OriginAddress"
            label="Origin Address"
            items={value.OriginAddress}
            meta={ItemFieldMeta.OriginAddress} 
            itemDisplay={ (itemValue: Address, key: string | number) =>
              <AddressDisplay
                key={key}
                label="Origin Address"
                value={itemValue}
                meta={ItemFieldMeta.OriginAddress}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ItemInstance"
            label="Item Instance"
            items={value.ItemInstance}
            meta={ItemFieldMeta.ItemInstance} 
            itemDisplay={ (itemValue: ItemInstance, key: string | number) =>
              <ItemInstanceDisplay
                key={key}
                label="Item Instance"
                value={itemValue}
                meta={ItemFieldMeta.ItemInstance}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Certificate"
            label="Certificate"
            items={value.Certificate}
            meta={ItemFieldMeta.Certificate} 
            itemDisplay={ (itemValue: Certificate, key: string | number) =>
              <CertificateDisplay
                key={key}
                label="Certificate"
                value={itemValue}
                meta={ItemFieldMeta.Certificate}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Dimension"
            label="Dimension"
            items={value.Dimension}
            meta={ItemFieldMeta.Dimension} 
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
