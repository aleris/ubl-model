import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Item } from  '../../model/cac/Item'
import { ItemField, ItemFieldMeta, ItemTypeName } from  '../../meta/cac/ItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { CertificateDisplay } from './CertificateDisplay'
import { CommodityClassificationDisplay } from './CommodityClassificationDisplay'
import { CountryDisplay } from './CountryDisplay'
import { DimensionDisplay } from './DimensionDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { HazardousItemDisplay } from './HazardousItemDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ItemIdentificationDisplay } from './ItemIdentificationDisplay'
import { ItemInstanceDisplay } from './ItemInstanceDisplay'
import { ItemPropertyDisplay } from './ItemPropertyDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TaxCategoryDisplay } from './TaxCategoryDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TransactionConditionsDisplay } from './TransactionConditionsDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Item, void>
  item: Item[] | undefined
  renderContext: RenderContext
}

export const ItemSubElementsMap: SubElementsTemplatesMap<ItemField, Item, void> = new Map([
    [
      ItemField.UBLExtensions,
      { meta: ItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemField.UBLExtensions}
          meta={ItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.Description,
      { meta: ItemFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemField.Description}
          meta={ItemFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.PackQuantity,
      { meta: ItemFieldMeta.PackQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ItemField.PackQuantity}
          meta={ItemFieldMeta.PackQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.PackQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.PackSizeNumeric,
      { meta: ItemFieldMeta.PackSizeNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ItemField.PackSizeNumeric}
          meta={ItemFieldMeta.PackSizeNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.PackSizeNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.CatalogueIndicator,
      { meta: ItemFieldMeta.CatalogueIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ItemField.CatalogueIndicator}
          meta={ItemFieldMeta.CatalogueIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CatalogueIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.Name,
      { meta: ItemFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemField.Name}
          meta={ItemFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.HazardousRiskIndicator,
      { meta: ItemFieldMeta.HazardousRiskIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ItemField.HazardousRiskIndicator}
          meta={ItemFieldMeta.HazardousRiskIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.HazardousRiskIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.AdditionalInformation,
      { meta: ItemFieldMeta.AdditionalInformation,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemField.AdditionalInformation}
          meta={ItemFieldMeta.AdditionalInformation}
          fieldConfig={fieldConfig}
          text={value?.AdditionalInformation}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.Keyword,
      { meta: ItemFieldMeta.Keyword,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemField.Keyword}
          meta={ItemFieldMeta.Keyword}
          fieldConfig={fieldConfig}
          text={value?.Keyword}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.BrandName,
      { meta: ItemFieldMeta.BrandName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemField.BrandName}
          meta={ItemFieldMeta.BrandName}
          fieldConfig={fieldConfig}
          text={value?.BrandName}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.ModelName,
      { meta: ItemFieldMeta.ModelName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemField.ModelName}
          meta={ItemFieldMeta.ModelName}
          fieldConfig={fieldConfig}
          text={value?.ModelName}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.BuyersItemIdentification,
      { meta: ItemFieldMeta.BuyersItemIdentification,
        template: ({value, renderContext, fieldConfig}) => <ItemIdentificationDisplay
          key={ItemField.BuyersItemIdentification}
          meta={ItemFieldMeta.BuyersItemIdentification}
          fieldConfig={fieldConfig}
          itemIdentification={value?.BuyersItemIdentification}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.SellersItemIdentification,
      { meta: ItemFieldMeta.SellersItemIdentification,
        template: ({value, renderContext, fieldConfig}) => <ItemIdentificationDisplay
          key={ItemField.SellersItemIdentification}
          meta={ItemFieldMeta.SellersItemIdentification}
          fieldConfig={fieldConfig}
          itemIdentification={value?.SellersItemIdentification}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.ManufacturersItemIdentification,
      { meta: ItemFieldMeta.ManufacturersItemIdentification,
        template: ({value, renderContext, fieldConfig}) => <ItemIdentificationDisplay
          key={ItemField.ManufacturersItemIdentification}
          meta={ItemFieldMeta.ManufacturersItemIdentification}
          fieldConfig={fieldConfig}
          itemIdentification={value?.ManufacturersItemIdentification}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.StandardItemIdentification,
      { meta: ItemFieldMeta.StandardItemIdentification,
        template: ({value, renderContext, fieldConfig}) => <ItemIdentificationDisplay
          key={ItemField.StandardItemIdentification}
          meta={ItemFieldMeta.StandardItemIdentification}
          fieldConfig={fieldConfig}
          itemIdentification={value?.StandardItemIdentification}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.CatalogueItemIdentification,
      { meta: ItemFieldMeta.CatalogueItemIdentification,
        template: ({value, renderContext, fieldConfig}) => <ItemIdentificationDisplay
          key={ItemField.CatalogueItemIdentification}
          meta={ItemFieldMeta.CatalogueItemIdentification}
          fieldConfig={fieldConfig}
          itemIdentification={value?.CatalogueItemIdentification}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.AdditionalItemIdentification,
      { meta: ItemFieldMeta.AdditionalItemIdentification,
        template: ({value, renderContext, fieldConfig}) => <ItemIdentificationDisplay
          key={ItemField.AdditionalItemIdentification}
          meta={ItemFieldMeta.AdditionalItemIdentification}
          fieldConfig={fieldConfig}
          itemIdentification={value?.AdditionalItemIdentification}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.CatalogueDocumentReference,
      { meta: ItemFieldMeta.CatalogueDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ItemField.CatalogueDocumentReference}
          meta={ItemFieldMeta.CatalogueDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.CatalogueDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.ItemSpecificationDocumentReference,
      { meta: ItemFieldMeta.ItemSpecificationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ItemField.ItemSpecificationDocumentReference}
          meta={ItemFieldMeta.ItemSpecificationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ItemSpecificationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.OriginCountry,
      { meta: ItemFieldMeta.OriginCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={ItemField.OriginCountry}
          meta={ItemFieldMeta.OriginCountry}
          fieldConfig={fieldConfig}
          country={value?.OriginCountry}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.CommodityClassification,
      { meta: ItemFieldMeta.CommodityClassification,
        template: ({value, renderContext, fieldConfig}) => <CommodityClassificationDisplay
          key={ItemField.CommodityClassification}
          meta={ItemFieldMeta.CommodityClassification}
          fieldConfig={fieldConfig}
          commodityClassification={value?.CommodityClassification}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.TransactionConditions,
      { meta: ItemFieldMeta.TransactionConditions,
        template: ({value, renderContext, fieldConfig}) => <TransactionConditionsDisplay
          key={ItemField.TransactionConditions}
          meta={ItemFieldMeta.TransactionConditions}
          fieldConfig={fieldConfig}
          transactionConditions={value?.TransactionConditions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.HazardousItem,
      { meta: ItemFieldMeta.HazardousItem,
        template: ({value, renderContext, fieldConfig}) => <HazardousItemDisplay
          key={ItemField.HazardousItem}
          meta={ItemFieldMeta.HazardousItem}
          fieldConfig={fieldConfig}
          hazardousItem={value?.HazardousItem}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.ClassifiedTaxCategory,
      { meta: ItemFieldMeta.ClassifiedTaxCategory,
        template: ({value, renderContext, fieldConfig}) => <TaxCategoryDisplay
          key={ItemField.ClassifiedTaxCategory}
          meta={ItemFieldMeta.ClassifiedTaxCategory}
          fieldConfig={fieldConfig}
          taxCategory={value?.ClassifiedTaxCategory}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.AdditionalItemProperty,
      { meta: ItemFieldMeta.AdditionalItemProperty,
        template: ({value, renderContext, fieldConfig}) => <ItemPropertyDisplay
          key={ItemField.AdditionalItemProperty}
          meta={ItemFieldMeta.AdditionalItemProperty}
          fieldConfig={fieldConfig}
          itemProperty={value?.AdditionalItemProperty}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.ManufacturerParty,
      { meta: ItemFieldMeta.ManufacturerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ItemField.ManufacturerParty}
          meta={ItemFieldMeta.ManufacturerParty}
          fieldConfig={fieldConfig}
          party={value?.ManufacturerParty}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.InformationContentProviderParty,
      { meta: ItemFieldMeta.InformationContentProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ItemField.InformationContentProviderParty}
          meta={ItemFieldMeta.InformationContentProviderParty}
          fieldConfig={fieldConfig}
          party={value?.InformationContentProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.OriginAddress,
      { meta: ItemFieldMeta.OriginAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={ItemField.OriginAddress}
          meta={ItemFieldMeta.OriginAddress}
          fieldConfig={fieldConfig}
          address={value?.OriginAddress}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.ItemInstance,
      { meta: ItemFieldMeta.ItemInstance,
        template: ({value, renderContext, fieldConfig}) => <ItemInstanceDisplay
          key={ItemField.ItemInstance}
          meta={ItemFieldMeta.ItemInstance}
          fieldConfig={fieldConfig}
          itemInstance={value?.ItemInstance}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.Certificate,
      { meta: ItemFieldMeta.Certificate,
        template: ({value, renderContext, fieldConfig}) => <CertificateDisplay
          key={ItemField.Certificate}
          meta={ItemFieldMeta.Certificate}
          fieldConfig={fieldConfig}
          certificate={value?.Certificate}
          renderContext={renderContext}
        />}
    ],

    [
      ItemField.Dimension,
      { meta: ItemFieldMeta.Dimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={ItemField.Dimension}
          meta={ItemFieldMeta.Dimension}
          fieldConfig={fieldConfig}
          dimension={value?.Dimension}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemDisplay<TFieldMeta>({ meta, fieldConfig, item, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemTypeName,
    meta,
    fieldConfig,
    item,
    renderContext,
    ItemSubElementsMap,
  )
}
