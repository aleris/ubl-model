import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderReference } from  '../../model/cac/OrderReference'
import { OrderReferenceField, OrderReferenceFieldMeta, OrderReferenceTypeName } from  '../../meta/cac/OrderReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<OrderReference, void>
  orderReference: OrderReference[] | undefined
  renderContext: RenderContext
}

export const OrderReferenceSubElementsMap: SubElementsTemplatesMap<OrderReferenceField, OrderReference, void> = new Map([
    [
      OrderReferenceField.UBLExtensions,
      { meta: OrderReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OrderReferenceField.UBLExtensions}
          meta={OrderReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderReferenceField.ID,
      { meta: OrderReferenceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderReferenceField.ID}
          meta={OrderReferenceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderReferenceField.SalesOrderID,
      { meta: OrderReferenceFieldMeta.SalesOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderReferenceField.SalesOrderID}
          meta={OrderReferenceFieldMeta.SalesOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.SalesOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderReferenceField.CopyIndicator,
      { meta: OrderReferenceFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={OrderReferenceField.CopyIndicator}
          meta={OrderReferenceFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      OrderReferenceField.UUID,
      { meta: OrderReferenceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={OrderReferenceField.UUID}
          meta={OrderReferenceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      OrderReferenceField.IssueDate,
      { meta: OrderReferenceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={OrderReferenceField.IssueDate}
          meta={OrderReferenceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      OrderReferenceField.IssueTime,
      { meta: OrderReferenceFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={OrderReferenceField.IssueTime}
          meta={OrderReferenceFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      OrderReferenceField.CustomerReference,
      { meta: OrderReferenceFieldMeta.CustomerReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderReferenceField.CustomerReference}
          meta={OrderReferenceFieldMeta.CustomerReference}
          fieldConfig={fieldConfig}
          text={value?.CustomerReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderReferenceField.OrderTypeCode,
      { meta: OrderReferenceFieldMeta.OrderTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderReferenceField.OrderTypeCode}
          meta={OrderReferenceFieldMeta.OrderTypeCode}
          fieldConfig={fieldConfig}
          code={value?.OrderTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderReferenceField.DocumentReference,
      { meta: OrderReferenceFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderReferenceField.DocumentReference}
          meta={OrderReferenceFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function OrderReferenceDisplay<TFieldMeta>({ meta, fieldConfig, orderReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OrderReferenceTypeName,
    meta,
    fieldConfig,
    orderReference,
    renderContext,
    OrderReferenceSubElementsMap,
  )
}
