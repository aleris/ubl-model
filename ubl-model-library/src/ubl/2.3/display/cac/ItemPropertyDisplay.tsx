import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemProperty } from  '../../model/cac/ItemProperty'
import { ItemPropertyField, ItemPropertyFieldMeta, ItemPropertyTypeName } from  '../../meta/cac/ItemPropertyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DimensionDisplay } from './DimensionDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemPropertyGroupDisplay } from './ItemPropertyGroupDisplay'
import { ItemPropertyRangeDisplay } from './ItemPropertyRangeDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { PropertyIdentificationDisplay } from './PropertyIdentificationDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemProperty, void>
  itemProperty: ItemProperty[] | undefined
  renderContext: RenderContext
}

export const ItemPropertySubElementsMap: SubElementsTemplatesMap<ItemPropertyField, ItemProperty, void> = new Map([
    [
      ItemPropertyField.UBLExtensions,
      { meta: ItemPropertyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemPropertyField.UBLExtensions}
          meta={ItemPropertyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.ID,
      { meta: ItemPropertyFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemPropertyField.ID}
          meta={ItemPropertyFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.Name,
      { meta: ItemPropertyFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemPropertyField.Name}
          meta={ItemPropertyFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.NameCode,
      { meta: ItemPropertyFieldMeta.NameCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ItemPropertyField.NameCode}
          meta={ItemPropertyFieldMeta.NameCode}
          fieldConfig={fieldConfig}
          code={value?.NameCode}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.TestMethod,
      { meta: ItemPropertyFieldMeta.TestMethod,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemPropertyField.TestMethod}
          meta={ItemPropertyFieldMeta.TestMethod}
          fieldConfig={fieldConfig}
          text={value?.TestMethod}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.Value,
      { meta: ItemPropertyFieldMeta.Value,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemPropertyField.Value}
          meta={ItemPropertyFieldMeta.Value}
          fieldConfig={fieldConfig}
          text={value?.Value}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.ValueQuantity,
      { meta: ItemPropertyFieldMeta.ValueQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ItemPropertyField.ValueQuantity}
          meta={ItemPropertyFieldMeta.ValueQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ValueQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.ValueQualifier,
      { meta: ItemPropertyFieldMeta.ValueQualifier,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemPropertyField.ValueQualifier}
          meta={ItemPropertyFieldMeta.ValueQualifier}
          fieldConfig={fieldConfig}
          text={value?.ValueQualifier}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.ImportanceCode,
      { meta: ItemPropertyFieldMeta.ImportanceCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ItemPropertyField.ImportanceCode}
          meta={ItemPropertyFieldMeta.ImportanceCode}
          fieldConfig={fieldConfig}
          code={value?.ImportanceCode}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.ListValue,
      { meta: ItemPropertyFieldMeta.ListValue,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemPropertyField.ListValue}
          meta={ItemPropertyFieldMeta.ListValue}
          fieldConfig={fieldConfig}
          text={value?.ListValue}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.UsabilityPeriod,
      { meta: ItemPropertyFieldMeta.UsabilityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ItemPropertyField.UsabilityPeriod}
          meta={ItemPropertyFieldMeta.UsabilityPeriod}
          fieldConfig={fieldConfig}
          period={value?.UsabilityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.ItemPropertyGroup,
      { meta: ItemPropertyFieldMeta.ItemPropertyGroup,
        template: ({value, renderContext, fieldConfig}) => <ItemPropertyGroupDisplay
          key={ItemPropertyField.ItemPropertyGroup}
          meta={ItemPropertyFieldMeta.ItemPropertyGroup}
          fieldConfig={fieldConfig}
          itemPropertyGroup={value?.ItemPropertyGroup}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.RangeDimension,
      { meta: ItemPropertyFieldMeta.RangeDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={ItemPropertyField.RangeDimension}
          meta={ItemPropertyFieldMeta.RangeDimension}
          fieldConfig={fieldConfig}
          dimension={value?.RangeDimension}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.ItemPropertyRange,
      { meta: ItemPropertyFieldMeta.ItemPropertyRange,
        template: ({value, renderContext, fieldConfig}) => <ItemPropertyRangeDisplay
          key={ItemPropertyField.ItemPropertyRange}
          meta={ItemPropertyFieldMeta.ItemPropertyRange}
          fieldConfig={fieldConfig}
          itemPropertyRange={value?.ItemPropertyRange}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.StandardPropertyIdentification,
      { meta: ItemPropertyFieldMeta.StandardPropertyIdentification,
        template: ({value, renderContext, fieldConfig}) => <PropertyIdentificationDisplay
          key={ItemPropertyField.StandardPropertyIdentification}
          meta={ItemPropertyFieldMeta.StandardPropertyIdentification}
          fieldConfig={fieldConfig}
          propertyIdentification={value?.StandardPropertyIdentification}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyField.SubItemProperty,
      { meta: ItemPropertyFieldMeta.SubItemProperty,
        template: ({value, renderContext, fieldConfig}) => <ItemPropertyDisplay
          key={ItemPropertyField.SubItemProperty}
          meta={ItemPropertyFieldMeta.SubItemProperty}
          fieldConfig={fieldConfig}
          itemProperty={value?.SubItemProperty}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemPropertyDisplay<TFieldMeta>({ meta, fieldConfig, itemProperty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemPropertyTypeName,
    meta,
    fieldConfig,
    itemProperty,
    renderContext,
    ItemPropertySubElementsMap,
  )
}
