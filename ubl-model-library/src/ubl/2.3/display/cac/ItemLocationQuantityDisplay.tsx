import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemLocationQuantity } from  '../../model/cac/ItemLocationQuantity'
import { ItemLocationQuantityField, ItemLocationQuantityFieldMeta, ItemLocationQuantityTypeName } from  '../../meta/cac/ItemLocationQuantityMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { DeliveryUnitDisplay } from './DeliveryUnitDisplay'
import { DependentPriceReferenceDisplay } from './DependentPriceReferenceDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { PackageDisplay } from './PackageDisplay'
import { PriceDisplay } from './PriceDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TaxCategoryDisplay } from './TaxCategoryDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemLocationQuantity, void>
  itemLocationQuantity: ItemLocationQuantity[] | undefined
  renderContext: RenderContext
}

export const ItemLocationQuantitySubElementsMap: SubElementsTemplatesMap<ItemLocationQuantityField, ItemLocationQuantity, void> = new Map([
    [
      ItemLocationQuantityField.UBLExtensions,
      { meta: ItemLocationQuantityFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemLocationQuantityField.UBLExtensions}
          meta={ItemLocationQuantityFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.LeadTimeMeasure,
      { meta: ItemLocationQuantityFieldMeta.LeadTimeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ItemLocationQuantityField.LeadTimeMeasure}
          meta={ItemLocationQuantityFieldMeta.LeadTimeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.LeadTimeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.MinimumQuantity,
      { meta: ItemLocationQuantityFieldMeta.MinimumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ItemLocationQuantityField.MinimumQuantity}
          meta={ItemLocationQuantityFieldMeta.MinimumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.MaximumQuantity,
      { meta: ItemLocationQuantityFieldMeta.MaximumQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ItemLocationQuantityField.MaximumQuantity}
          meta={ItemLocationQuantityFieldMeta.MaximumQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.HazardousRiskIndicator,
      { meta: ItemLocationQuantityFieldMeta.HazardousRiskIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ItemLocationQuantityField.HazardousRiskIndicator}
          meta={ItemLocationQuantityFieldMeta.HazardousRiskIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.HazardousRiskIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.TradingRestrictions,
      { meta: ItemLocationQuantityFieldMeta.TradingRestrictions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemLocationQuantityField.TradingRestrictions}
          meta={ItemLocationQuantityFieldMeta.TradingRestrictions}
          fieldConfig={fieldConfig}
          text={value?.TradingRestrictions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.ApplicableTerritoryAddress,
      { meta: ItemLocationQuantityFieldMeta.ApplicableTerritoryAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={ItemLocationQuantityField.ApplicableTerritoryAddress}
          meta={ItemLocationQuantityFieldMeta.ApplicableTerritoryAddress}
          fieldConfig={fieldConfig}
          address={value?.ApplicableTerritoryAddress}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.Price,
      { meta: ItemLocationQuantityFieldMeta.Price,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={ItemLocationQuantityField.Price}
          meta={ItemLocationQuantityFieldMeta.Price}
          fieldConfig={fieldConfig}
          price={value?.Price}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.DeliveryUnit,
      { meta: ItemLocationQuantityFieldMeta.DeliveryUnit,
        template: ({value, renderContext, fieldConfig}) => <DeliveryUnitDisplay
          key={ItemLocationQuantityField.DeliveryUnit}
          meta={ItemLocationQuantityFieldMeta.DeliveryUnit}
          fieldConfig={fieldConfig}
          deliveryUnit={value?.DeliveryUnit}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.ApplicableTaxCategory,
      { meta: ItemLocationQuantityFieldMeta.ApplicableTaxCategory,
        template: ({value, renderContext, fieldConfig}) => <TaxCategoryDisplay
          key={ItemLocationQuantityField.ApplicableTaxCategory}
          meta={ItemLocationQuantityFieldMeta.ApplicableTaxCategory}
          fieldConfig={fieldConfig}
          taxCategory={value?.ApplicableTaxCategory}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.Package,
      { meta: ItemLocationQuantityFieldMeta.Package,
        template: ({value, renderContext, fieldConfig}) => <PackageDisplay
          key={ItemLocationQuantityField.Package}
          meta={ItemLocationQuantityFieldMeta.Package}
          fieldConfig={fieldConfig}
          packageValue={value?.Package}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.AllowanceCharge,
      { meta: ItemLocationQuantityFieldMeta.AllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={ItemLocationQuantityField.AllowanceCharge}
          meta={ItemLocationQuantityFieldMeta.AllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.AllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      ItemLocationQuantityField.DependentPriceReference,
      { meta: ItemLocationQuantityFieldMeta.DependentPriceReference,
        template: ({value, renderContext, fieldConfig}) => <DependentPriceReferenceDisplay
          key={ItemLocationQuantityField.DependentPriceReference}
          meta={ItemLocationQuantityFieldMeta.DependentPriceReference}
          fieldConfig={fieldConfig}
          dependentPriceReference={value?.DependentPriceReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemLocationQuantityDisplay<TFieldMeta>({ meta, fieldConfig, itemLocationQuantity, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemLocationQuantityTypeName,
    meta,
    fieldConfig,
    itemLocationQuantity,
    renderContext,
    ItemLocationQuantitySubElementsMap,
  )
}
