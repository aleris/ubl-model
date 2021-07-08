import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemInstance } from  '../../model/cac/ItemInstance'
import { ItemInstanceField, ItemInstanceFieldMeta, ItemInstanceTypeName } from  '../../meta/cac/ItemInstanceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemPropertyDisplay } from './ItemPropertyDisplay'
import { LotIdentificationDisplay } from './LotIdentificationDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemInstance, void>
  itemInstance: ItemInstance[] | undefined
  renderContext: RenderContext
}

export const ItemInstanceSubElementsMap: SubElementsTemplatesMap<ItemInstanceField, ItemInstance, void> = new Map([
    [
      ItemInstanceField.UBLExtensions,
      { meta: ItemInstanceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemInstanceField.UBLExtensions}
          meta={ItemInstanceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInstanceField.ProductTraceID,
      { meta: ItemInstanceFieldMeta.ProductTraceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemInstanceField.ProductTraceID}
          meta={ItemInstanceFieldMeta.ProductTraceID}
          fieldConfig={fieldConfig}
          identifier={value?.ProductTraceID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInstanceField.ManufactureDate,
      { meta: ItemInstanceFieldMeta.ManufactureDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ItemInstanceField.ManufactureDate}
          meta={ItemInstanceFieldMeta.ManufactureDate}
          fieldConfig={fieldConfig}
          date={value?.ManufactureDate}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInstanceField.ManufactureTime,
      { meta: ItemInstanceFieldMeta.ManufactureTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ItemInstanceField.ManufactureTime}
          meta={ItemInstanceFieldMeta.ManufactureTime}
          fieldConfig={fieldConfig}
          time={value?.ManufactureTime}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInstanceField.BestBeforeDate,
      { meta: ItemInstanceFieldMeta.BestBeforeDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ItemInstanceField.BestBeforeDate}
          meta={ItemInstanceFieldMeta.BestBeforeDate}
          fieldConfig={fieldConfig}
          date={value?.BestBeforeDate}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInstanceField.RegistrationID,
      { meta: ItemInstanceFieldMeta.RegistrationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemInstanceField.RegistrationID}
          meta={ItemInstanceFieldMeta.RegistrationID}
          fieldConfig={fieldConfig}
          identifier={value?.RegistrationID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInstanceField.SerialID,
      { meta: ItemInstanceFieldMeta.SerialID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemInstanceField.SerialID}
          meta={ItemInstanceFieldMeta.SerialID}
          fieldConfig={fieldConfig}
          identifier={value?.SerialID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInstanceField.AdditionalItemProperty,
      { meta: ItemInstanceFieldMeta.AdditionalItemProperty,
        template: ({value, renderContext, fieldConfig}) => <ItemPropertyDisplay
          key={ItemInstanceField.AdditionalItemProperty}
          meta={ItemInstanceFieldMeta.AdditionalItemProperty}
          fieldConfig={fieldConfig}
          itemProperty={value?.AdditionalItemProperty}
          renderContext={renderContext}
        />}
    ],

    [
      ItemInstanceField.LotIdentification,
      { meta: ItemInstanceFieldMeta.LotIdentification,
        template: ({value, renderContext, fieldConfig}) => <LotIdentificationDisplay
          key={ItemInstanceField.LotIdentification}
          meta={ItemInstanceFieldMeta.LotIdentification}
          fieldConfig={fieldConfig}
          lotIdentification={value?.LotIdentification}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemInstanceDisplay<TFieldMeta>({ meta, fieldConfig, itemInstance, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemInstanceTypeName,
    meta,
    fieldConfig,
    itemInstance,
    renderContext,
    ItemInstanceSubElementsMap,
  )
}
