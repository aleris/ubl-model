import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueLine } from  '../../model/cac/CatalogueLine'
import { CatalogueLineField, CatalogueLineFieldMeta, CatalogueLineTypeName } from  '../../meta/cac/CatalogueLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from './CustomerPartyDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ItemDisplay } from './ItemDisplay'
import { ItemComparisonDisplay } from './ItemComparisonDisplay'
import { ItemLocationQuantityDisplay } from './ItemLocationQuantityDisplay'
import { ItemPropertyDisplay } from './ItemPropertyDisplay'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { RelatedItemDisplay } from './RelatedItemDisplay'
import { SupplierPartyDisplay } from './SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CatalogueLine, void>
  catalogueLine: CatalogueLine[] | undefined
  renderContext: RenderContext
}

export const CatalogueLineSubElementsMap: SubElementsTemplatesMap<CatalogueLineField, CatalogueLine, void> = new Map([
    [
      CatalogueLineField.UBLExtensions,
      { meta: CatalogueLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CatalogueLineField.UBLExtensions}
          meta={CatalogueLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ID,
      { meta: CatalogueLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueLineField.ID}
          meta={CatalogueLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ActionCode,
      { meta: CatalogueLineFieldMeta.ActionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CatalogueLineField.ActionCode}
          meta={CatalogueLineFieldMeta.ActionCode}
          fieldConfig={fieldConfig}
          code={value?.ActionCode}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.LifeCycleStatusCode,
      { meta: CatalogueLineFieldMeta.LifeCycleStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CatalogueLineField.LifeCycleStatusCode}
          meta={CatalogueLineFieldMeta.LifeCycleStatusCode}
          fieldConfig={fieldConfig}
          code={value?.LifeCycleStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ContractSubdivision,
      { meta: CatalogueLineFieldMeta.ContractSubdivision,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueLineField.ContractSubdivision}
          meta={CatalogueLineFieldMeta.ContractSubdivision}
          fieldConfig={fieldConfig}
          text={value?.ContractSubdivision}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.Note,
      { meta: CatalogueLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueLineField.Note}
          meta={CatalogueLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.OrderableIndicator,
      { meta: CatalogueLineFieldMeta.OrderableIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={CatalogueLineField.OrderableIndicator}
          meta={CatalogueLineFieldMeta.OrderableIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.OrderableIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.OrderableUnit,
      { meta: CatalogueLineFieldMeta.OrderableUnit,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueLineField.OrderableUnit}
          meta={CatalogueLineFieldMeta.OrderableUnit}
          fieldConfig={fieldConfig}
          text={value?.OrderableUnit}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ContentUnitQuantity,
      { meta: CatalogueLineFieldMeta.ContentUnitQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={CatalogueLineField.ContentUnitQuantity}
          meta={CatalogueLineFieldMeta.ContentUnitQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ContentUnitQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.OrderQuantityIncrementNumeric,
      { meta: CatalogueLineFieldMeta.OrderQuantityIncrementNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={CatalogueLineField.OrderQuantityIncrementNumeric}
          meta={CatalogueLineFieldMeta.OrderQuantityIncrementNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.OrderQuantityIncrementNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.MinimumOrderQuantity,
      { meta: CatalogueLineFieldMeta.MinimumOrderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={CatalogueLineField.MinimumOrderQuantity}
          meta={CatalogueLineFieldMeta.MinimumOrderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumOrderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.MaximumOrderQuantity,
      { meta: CatalogueLineFieldMeta.MaximumOrderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={CatalogueLineField.MaximumOrderQuantity}
          meta={CatalogueLineFieldMeta.MaximumOrderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumOrderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.WarrantyInformation,
      { meta: CatalogueLineFieldMeta.WarrantyInformation,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueLineField.WarrantyInformation}
          meta={CatalogueLineFieldMeta.WarrantyInformation}
          fieldConfig={fieldConfig}
          text={value?.WarrantyInformation}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.PackLevelCode,
      { meta: CatalogueLineFieldMeta.PackLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CatalogueLineField.PackLevelCode}
          meta={CatalogueLineFieldMeta.PackLevelCode}
          fieldConfig={fieldConfig}
          code={value?.PackLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ContractorCustomerParty,
      { meta: CatalogueLineFieldMeta.ContractorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CatalogueLineField.ContractorCustomerParty}
          meta={CatalogueLineFieldMeta.ContractorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.ContractorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.SellerSupplierParty,
      { meta: CatalogueLineFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={CatalogueLineField.SellerSupplierParty}
          meta={CatalogueLineFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.WarrantyParty,
      { meta: CatalogueLineFieldMeta.WarrantyParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CatalogueLineField.WarrantyParty}
          meta={CatalogueLineFieldMeta.WarrantyParty}
          fieldConfig={fieldConfig}
          party={value?.WarrantyParty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.WarrantyValidityPeriod,
      { meta: CatalogueLineFieldMeta.WarrantyValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CatalogueLineField.WarrantyValidityPeriod}
          meta={CatalogueLineFieldMeta.WarrantyValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.WarrantyValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.LineValidityPeriod,
      { meta: CatalogueLineFieldMeta.LineValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CatalogueLineField.LineValidityPeriod}
          meta={CatalogueLineFieldMeta.LineValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.LineValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ItemComparison,
      { meta: CatalogueLineFieldMeta.ItemComparison,
        template: ({value, renderContext, fieldConfig}) => <ItemComparisonDisplay
          key={CatalogueLineField.ItemComparison}
          meta={CatalogueLineFieldMeta.ItemComparison}
          fieldConfig={fieldConfig}
          itemComparison={value?.ItemComparison}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ComponentRelatedItem,
      { meta: CatalogueLineFieldMeta.ComponentRelatedItem,
        template: ({value, renderContext, fieldConfig}) => <RelatedItemDisplay
          key={CatalogueLineField.ComponentRelatedItem}
          meta={CatalogueLineFieldMeta.ComponentRelatedItem}
          fieldConfig={fieldConfig}
          relatedItem={value?.ComponentRelatedItem}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.AccessoryRelatedItem,
      { meta: CatalogueLineFieldMeta.AccessoryRelatedItem,
        template: ({value, renderContext, fieldConfig}) => <RelatedItemDisplay
          key={CatalogueLineField.AccessoryRelatedItem}
          meta={CatalogueLineFieldMeta.AccessoryRelatedItem}
          fieldConfig={fieldConfig}
          relatedItem={value?.AccessoryRelatedItem}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.RequiredRelatedItem,
      { meta: CatalogueLineFieldMeta.RequiredRelatedItem,
        template: ({value, renderContext, fieldConfig}) => <RelatedItemDisplay
          key={CatalogueLineField.RequiredRelatedItem}
          meta={CatalogueLineFieldMeta.RequiredRelatedItem}
          fieldConfig={fieldConfig}
          relatedItem={value?.RequiredRelatedItem}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ReplacementRelatedItem,
      { meta: CatalogueLineFieldMeta.ReplacementRelatedItem,
        template: ({value, renderContext, fieldConfig}) => <RelatedItemDisplay
          key={CatalogueLineField.ReplacementRelatedItem}
          meta={CatalogueLineFieldMeta.ReplacementRelatedItem}
          fieldConfig={fieldConfig}
          relatedItem={value?.ReplacementRelatedItem}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ComplementaryRelatedItem,
      { meta: CatalogueLineFieldMeta.ComplementaryRelatedItem,
        template: ({value, renderContext, fieldConfig}) => <RelatedItemDisplay
          key={CatalogueLineField.ComplementaryRelatedItem}
          meta={CatalogueLineFieldMeta.ComplementaryRelatedItem}
          fieldConfig={fieldConfig}
          relatedItem={value?.ComplementaryRelatedItem}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.ReplacedRelatedItem,
      { meta: CatalogueLineFieldMeta.ReplacedRelatedItem,
        template: ({value, renderContext, fieldConfig}) => <RelatedItemDisplay
          key={CatalogueLineField.ReplacedRelatedItem}
          meta={CatalogueLineFieldMeta.ReplacedRelatedItem}
          fieldConfig={fieldConfig}
          relatedItem={value?.ReplacedRelatedItem}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.RequiredItemLocationQuantity,
      { meta: CatalogueLineFieldMeta.RequiredItemLocationQuantity,
        template: ({value, renderContext, fieldConfig}) => <ItemLocationQuantityDisplay
          key={CatalogueLineField.RequiredItemLocationQuantity}
          meta={CatalogueLineFieldMeta.RequiredItemLocationQuantity}
          fieldConfig={fieldConfig}
          itemLocationQuantity={value?.RequiredItemLocationQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.DocumentReference,
      { meta: CatalogueLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CatalogueLineField.DocumentReference}
          meta={CatalogueLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.Item,
      { meta: CatalogueLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={CatalogueLineField.Item}
          meta={CatalogueLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.KeywordItemProperty,
      { meta: CatalogueLineFieldMeta.KeywordItemProperty,
        template: ({value, renderContext, fieldConfig}) => <ItemPropertyDisplay
          key={CatalogueLineField.KeywordItemProperty}
          meta={CatalogueLineFieldMeta.KeywordItemProperty}
          fieldConfig={fieldConfig}
          itemProperty={value?.KeywordItemProperty}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.CallForTendersLineReference,
      { meta: CatalogueLineFieldMeta.CallForTendersLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={CatalogueLineField.CallForTendersLineReference}
          meta={CatalogueLineFieldMeta.CallForTendersLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.CallForTendersLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueLineField.CallForTendersDocumentReference,
      { meta: CatalogueLineFieldMeta.CallForTendersDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CatalogueLineField.CallForTendersDocumentReference}
          meta={CatalogueLineFieldMeta.CallForTendersDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.CallForTendersDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function CatalogueLineDisplay<TFieldMeta>({ meta, fieldConfig, catalogueLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CatalogueLineTypeName,
    meta,
    fieldConfig,
    catalogueLine,
    renderContext,
    CatalogueLineSubElementsMap,
  )
}
