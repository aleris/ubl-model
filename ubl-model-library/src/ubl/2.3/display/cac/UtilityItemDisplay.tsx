import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { UtilityItem } from  '../../model/cac/UtilityItem'
import { UtilityItemField, UtilityItemFieldMeta, UtilityItemTypeName } from  '../../meta/cac/UtilityItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractDisplay } from './ContractDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TaxCategoryDisplay } from './TaxCategoryDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<UtilityItem, void>
  utilityItem: UtilityItem[] | undefined
  renderContext: RenderContext
}

export const UtilityItemSubElementsMap: SubElementsTemplatesMap<UtilityItemField, UtilityItem, void> = new Map([
    [
      UtilityItemField.UBLExtensions,
      { meta: UtilityItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={UtilityItemField.UBLExtensions}
          meta={UtilityItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.ID,
      { meta: UtilityItemFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UtilityItemField.ID}
          meta={UtilityItemFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.SubscriberID,
      { meta: UtilityItemFieldMeta.SubscriberID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UtilityItemField.SubscriberID}
          meta={UtilityItemFieldMeta.SubscriberID}
          fieldConfig={fieldConfig}
          identifier={value?.SubscriberID}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.SubscriberType,
      { meta: UtilityItemFieldMeta.SubscriberType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UtilityItemField.SubscriberType}
          meta={UtilityItemFieldMeta.SubscriberType}
          fieldConfig={fieldConfig}
          text={value?.SubscriberType}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.SubscriberTypeCode,
      { meta: UtilityItemFieldMeta.SubscriberTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={UtilityItemField.SubscriberTypeCode}
          meta={UtilityItemFieldMeta.SubscriberTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SubscriberTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.Description,
      { meta: UtilityItemFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UtilityItemField.Description}
          meta={UtilityItemFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.PackQuantity,
      { meta: UtilityItemFieldMeta.PackQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={UtilityItemField.PackQuantity}
          meta={UtilityItemFieldMeta.PackQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.PackQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.PackSizeNumeric,
      { meta: UtilityItemFieldMeta.PackSizeNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={UtilityItemField.PackSizeNumeric}
          meta={UtilityItemFieldMeta.PackSizeNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.PackSizeNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.ConsumptionType,
      { meta: UtilityItemFieldMeta.ConsumptionType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UtilityItemField.ConsumptionType}
          meta={UtilityItemFieldMeta.ConsumptionType}
          fieldConfig={fieldConfig}
          text={value?.ConsumptionType}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.ConsumptionTypeCode,
      { meta: UtilityItemFieldMeta.ConsumptionTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={UtilityItemField.ConsumptionTypeCode}
          meta={UtilityItemFieldMeta.ConsumptionTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ConsumptionTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.CurrentChargeType,
      { meta: UtilityItemFieldMeta.CurrentChargeType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UtilityItemField.CurrentChargeType}
          meta={UtilityItemFieldMeta.CurrentChargeType}
          fieldConfig={fieldConfig}
          text={value?.CurrentChargeType}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.CurrentChargeTypeCode,
      { meta: UtilityItemFieldMeta.CurrentChargeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={UtilityItemField.CurrentChargeTypeCode}
          meta={UtilityItemFieldMeta.CurrentChargeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CurrentChargeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.OneTimeChargeType,
      { meta: UtilityItemFieldMeta.OneTimeChargeType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UtilityItemField.OneTimeChargeType}
          meta={UtilityItemFieldMeta.OneTimeChargeType}
          fieldConfig={fieldConfig}
          text={value?.OneTimeChargeType}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.OneTimeChargeTypeCode,
      { meta: UtilityItemFieldMeta.OneTimeChargeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={UtilityItemField.OneTimeChargeTypeCode}
          meta={UtilityItemFieldMeta.OneTimeChargeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.OneTimeChargeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.TaxCategory,
      { meta: UtilityItemFieldMeta.TaxCategory,
        template: ({value, renderContext, fieldConfig}) => <TaxCategoryDisplay
          key={UtilityItemField.TaxCategory}
          meta={UtilityItemFieldMeta.TaxCategory}
          fieldConfig={fieldConfig}
          taxCategory={value?.TaxCategory}
          renderContext={renderContext}
        />}
    ],

    [
      UtilityItemField.Contract,
      { meta: UtilityItemFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={UtilityItemField.Contract}
          meta={UtilityItemFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ]
]) 

export function UtilityItemDisplay<TFieldMeta>({ meta, fieldConfig, utilityItem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    UtilityItemTypeName,
    meta,
    fieldConfig,
    utilityItem,
    renderContext,
    UtilityItemSubElementsMap,
  )
}
