import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemManagementProfile } from  '../../model/cac/ItemManagementProfile'
import { ItemManagementProfileField, ItemManagementProfileFieldMeta, ItemManagementProfileTypeName } from  '../../meta/cac/ItemManagementProfileMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ItemDisplay } from './ItemDisplay'
import { ItemLocationQuantityDisplay } from './ItemLocationQuantityDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemManagementProfile, void>
  itemManagementProfile: ItemManagementProfile[] | undefined
  renderContext: RenderContext
}

export const ItemManagementProfileSubElementsMap: SubElementsTemplatesMap<ItemManagementProfileField, ItemManagementProfile, void> = new Map([
    [
      ItemManagementProfileField.UBLExtensions,
      { meta: ItemManagementProfileFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemManagementProfileField.UBLExtensions}
          meta={ItemManagementProfileFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.FrozenPeriodDaysNumeric,
      { meta: ItemManagementProfileFieldMeta.FrozenPeriodDaysNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ItemManagementProfileField.FrozenPeriodDaysNumeric}
          meta={ItemManagementProfileFieldMeta.FrozenPeriodDaysNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.FrozenPeriodDaysNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.MinimumInventoryQuantity,
      { meta: ItemManagementProfileFieldMeta.MinimumInventoryQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ItemManagementProfileField.MinimumInventoryQuantity}
          meta={ItemManagementProfileFieldMeta.MinimumInventoryQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MinimumInventoryQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.MultipleOrderQuantity,
      { meta: ItemManagementProfileFieldMeta.MultipleOrderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ItemManagementProfileField.MultipleOrderQuantity}
          meta={ItemManagementProfileFieldMeta.MultipleOrderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MultipleOrderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.OrderIntervalDaysNumeric,
      { meta: ItemManagementProfileFieldMeta.OrderIntervalDaysNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ItemManagementProfileField.OrderIntervalDaysNumeric}
          meta={ItemManagementProfileFieldMeta.OrderIntervalDaysNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.OrderIntervalDaysNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.ReplenishmentOwnerDescription,
      { meta: ItemManagementProfileFieldMeta.ReplenishmentOwnerDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemManagementProfileField.ReplenishmentOwnerDescription}
          meta={ItemManagementProfileFieldMeta.ReplenishmentOwnerDescription}
          fieldConfig={fieldConfig}
          text={value?.ReplenishmentOwnerDescription}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.TargetServicePercent,
      { meta: ItemManagementProfileFieldMeta.TargetServicePercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={ItemManagementProfileField.TargetServicePercent}
          meta={ItemManagementProfileFieldMeta.TargetServicePercent}
          fieldConfig={fieldConfig}
          numeric={value?.TargetServicePercent}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.TargetInventoryQuantity,
      { meta: ItemManagementProfileFieldMeta.TargetInventoryQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ItemManagementProfileField.TargetInventoryQuantity}
          meta={ItemManagementProfileFieldMeta.TargetInventoryQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TargetInventoryQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.EffectivePeriod,
      { meta: ItemManagementProfileFieldMeta.EffectivePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ItemManagementProfileField.EffectivePeriod}
          meta={ItemManagementProfileFieldMeta.EffectivePeriod}
          fieldConfig={fieldConfig}
          period={value?.EffectivePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.Item,
      { meta: ItemManagementProfileFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={ItemManagementProfileField.Item}
          meta={ItemManagementProfileFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      ItemManagementProfileField.ItemLocationQuantity,
      { meta: ItemManagementProfileFieldMeta.ItemLocationQuantity,
        template: ({value, renderContext, fieldConfig}) => <ItemLocationQuantityDisplay
          key={ItemManagementProfileField.ItemLocationQuantity}
          meta={ItemManagementProfileFieldMeta.ItemLocationQuantity}
          fieldConfig={fieldConfig}
          itemLocationQuantity={value?.ItemLocationQuantity}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemManagementProfileDisplay<TFieldMeta>({ meta, fieldConfig, itemManagementProfile, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemManagementProfileTypeName,
    meta,
    fieldConfig,
    itemManagementProfile,
    renderContext,
    ItemManagementProfileSubElementsMap,
  )
}
