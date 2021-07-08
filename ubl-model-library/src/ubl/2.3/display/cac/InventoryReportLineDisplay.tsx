import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { InventoryReportLine } from  '../../model/cac/InventoryReportLine'
import { InventoryReportLineField, InventoryReportLineFieldMeta, InventoryReportLineTypeName } from  '../../meta/cac/InventoryReportLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { LocationDisplay } from './LocationDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<InventoryReportLine, void>
  inventoryReportLine: InventoryReportLine[] | undefined
  renderContext: RenderContext
}

export const InventoryReportLineSubElementsMap: SubElementsTemplatesMap<InventoryReportLineField, InventoryReportLine, void> = new Map([
    [
      InventoryReportLineField.UBLExtensions,
      { meta: InventoryReportLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={InventoryReportLineField.UBLExtensions}
          meta={InventoryReportLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportLineField.ID,
      { meta: InventoryReportLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={InventoryReportLineField.ID}
          meta={InventoryReportLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportLineField.Note,
      { meta: InventoryReportLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={InventoryReportLineField.Note}
          meta={InventoryReportLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportLineField.Quantity,
      { meta: InventoryReportLineFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={InventoryReportLineField.Quantity}
          meta={InventoryReportLineFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportLineField.InventoryValueAmount,
      { meta: InventoryReportLineFieldMeta.InventoryValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={InventoryReportLineField.InventoryValueAmount}
          meta={InventoryReportLineFieldMeta.InventoryValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.InventoryValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportLineField.AvailabilityDate,
      { meta: InventoryReportLineFieldMeta.AvailabilityDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={InventoryReportLineField.AvailabilityDate}
          meta={InventoryReportLineFieldMeta.AvailabilityDate}
          fieldConfig={fieldConfig}
          date={value?.AvailabilityDate}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportLineField.AvailabilityStatusCode,
      { meta: InventoryReportLineFieldMeta.AvailabilityStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={InventoryReportLineField.AvailabilityStatusCode}
          meta={InventoryReportLineFieldMeta.AvailabilityStatusCode}
          fieldConfig={fieldConfig}
          code={value?.AvailabilityStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportLineField.Item,
      { meta: InventoryReportLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={InventoryReportLineField.Item}
          meta={InventoryReportLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      InventoryReportLineField.InventoryLocation,
      { meta: InventoryReportLineFieldMeta.InventoryLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={InventoryReportLineField.InventoryLocation}
          meta={InventoryReportLineFieldMeta.InventoryLocation}
          fieldConfig={fieldConfig}
          location={value?.InventoryLocation}
          renderContext={renderContext}
        />}
    ]
]) 

export function InventoryReportLineDisplay<TFieldMeta>({ meta, fieldConfig, inventoryReportLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    InventoryReportLineTypeName,
    meta,
    fieldConfig,
    inventoryReportLine,
    renderContext,
    InventoryReportLineSubElementsMap,
  )
}
