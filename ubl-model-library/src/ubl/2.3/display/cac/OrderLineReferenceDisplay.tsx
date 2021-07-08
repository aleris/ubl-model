import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderLineReference } from  '../../model/cac/OrderLineReference'
import { OrderLineReferenceField, OrderLineReferenceFieldMeta, OrderLineReferenceTypeName } from  '../../meta/cac/OrderLineReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { OrderReferenceDisplay } from './OrderReferenceDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<OrderLineReference, void>
  orderLineReference: OrderLineReference[] | undefined
  renderContext: RenderContext
}

export const OrderLineReferenceSubElementsMap: SubElementsTemplatesMap<OrderLineReferenceField, OrderLineReference, void> = new Map([
    [
      OrderLineReferenceField.UBLExtensions,
      { meta: OrderLineReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OrderLineReferenceField.UBLExtensions}
          meta={OrderLineReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineReferenceField.LineID,
      { meta: OrderLineReferenceFieldMeta.LineID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderLineReferenceField.LineID}
          meta={OrderLineReferenceFieldMeta.LineID}
          fieldConfig={fieldConfig}
          identifier={value?.LineID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineReferenceField.SalesOrderLineID,
      { meta: OrderLineReferenceFieldMeta.SalesOrderLineID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderLineReferenceField.SalesOrderLineID}
          meta={OrderLineReferenceFieldMeta.SalesOrderLineID}
          fieldConfig={fieldConfig}
          identifier={value?.SalesOrderLineID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineReferenceField.UUID,
      { meta: OrderLineReferenceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderLineReferenceField.UUID}
          meta={OrderLineReferenceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineReferenceField.LineStatusCode,
      { meta: OrderLineReferenceFieldMeta.LineStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderLineReferenceField.LineStatusCode}
          meta={OrderLineReferenceFieldMeta.LineStatusCode}
          fieldConfig={fieldConfig}
          code={value?.LineStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineReferenceField.OrderReference,
      { meta: OrderLineReferenceFieldMeta.OrderReference,
        template: ({value, renderContext, fieldConfig}) => <OrderReferenceDisplay
          key={OrderLineReferenceField.OrderReference}
          meta={OrderLineReferenceFieldMeta.OrderReference}
          fieldConfig={fieldConfig}
          orderReference={value?.OrderReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function OrderLineReferenceDisplay<TFieldMeta>({ meta, fieldConfig, orderLineReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OrderLineReferenceTypeName,
    meta,
    fieldConfig,
    orderLineReference,
    renderContext,
    OrderLineReferenceSubElementsMap,
  )
}
