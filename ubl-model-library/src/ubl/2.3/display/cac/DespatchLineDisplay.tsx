import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DespatchLine } from  '../../model/cac/DespatchLine'
import { DespatchLineField, DespatchLineFieldMeta, DespatchLineTypeName } from  '../../meta/cac/DespatchLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { OrderLineReferenceDisplay } from './OrderLineReferenceDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { ShipmentDisplay } from './ShipmentDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DespatchLine, void>
  despatchLine: DespatchLine[] | undefined
  renderContext: RenderContext
}

export const DespatchLineSubElementsMap: SubElementsTemplatesMap<DespatchLineField, DespatchLine, void> = new Map([
    [
      DespatchLineField.UBLExtensions,
      { meta: DespatchLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DespatchLineField.UBLExtensions}
          meta={DespatchLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.ID,
      { meta: DespatchLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchLineField.ID}
          meta={DespatchLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.UUID,
      { meta: DespatchLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DespatchLineField.UUID}
          meta={DespatchLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.Note,
      { meta: DespatchLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DespatchLineField.Note}
          meta={DespatchLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.LineStatusCode,
      { meta: DespatchLineFieldMeta.LineStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DespatchLineField.LineStatusCode}
          meta={DespatchLineFieldMeta.LineStatusCode}
          fieldConfig={fieldConfig}
          code={value?.LineStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.DeliveredQuantity,
      { meta: DespatchLineFieldMeta.DeliveredQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DespatchLineField.DeliveredQuantity}
          meta={DespatchLineFieldMeta.DeliveredQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.DeliveredQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.BackorderQuantity,
      { meta: DespatchLineFieldMeta.BackorderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DespatchLineField.BackorderQuantity}
          meta={DespatchLineFieldMeta.BackorderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.BackorderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.BackorderReason,
      { meta: DespatchLineFieldMeta.BackorderReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DespatchLineField.BackorderReason}
          meta={DespatchLineFieldMeta.BackorderReason}
          fieldConfig={fieldConfig}
          text={value?.BackorderReason}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.OutstandingQuantity,
      { meta: DespatchLineFieldMeta.OutstandingQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DespatchLineField.OutstandingQuantity}
          meta={DespatchLineFieldMeta.OutstandingQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.OutstandingQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.OutstandingReason,
      { meta: DespatchLineFieldMeta.OutstandingReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DespatchLineField.OutstandingReason}
          meta={DespatchLineFieldMeta.OutstandingReason}
          fieldConfig={fieldConfig}
          text={value?.OutstandingReason}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.OversupplyQuantity,
      { meta: DespatchLineFieldMeta.OversupplyQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={DespatchLineField.OversupplyQuantity}
          meta={DespatchLineFieldMeta.OversupplyQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.OversupplyQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.OrderLineReference,
      { meta: DespatchLineFieldMeta.OrderLineReference,
        template: ({value, renderContext, fieldConfig}) => <OrderLineReferenceDisplay
          key={DespatchLineField.OrderLineReference}
          meta={DespatchLineFieldMeta.OrderLineReference}
          fieldConfig={fieldConfig}
          orderLineReference={value?.OrderLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.DocumentReference,
      { meta: DespatchLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DespatchLineField.DocumentReference}
          meta={DespatchLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.Item,
      { meta: DespatchLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={DespatchLineField.Item}
          meta={DespatchLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      DespatchLineField.Shipment,
      { meta: DespatchLineFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={DespatchLineField.Shipment}
          meta={DespatchLineFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ]
]) 

export function DespatchLineDisplay<TFieldMeta>({ meta, fieldConfig, despatchLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DespatchLineTypeName,
    meta,
    fieldConfig,
    despatchLine,
    renderContext,
    DespatchLineSubElementsMap,
  )
}
