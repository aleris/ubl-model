import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderLine } from  '../../model/cac/OrderLine'
import { OrderLineField, OrderLineFieldMeta, OrderLineTypeName } from  '../../meta/cac/OrderLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { LineItemDisplay } from './LineItemDisplay'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { OrderLineReferenceDisplay } from './OrderLineReferenceDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<OrderLine, void>
  orderLine: OrderLine[] | undefined
  renderContext: RenderContext
}

export const OrderLineSubElementsMap: SubElementsTemplatesMap<OrderLineField, OrderLine, void> = new Map([
    [
      OrderLineField.UBLExtensions,
      { meta: OrderLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OrderLineField.UBLExtensions}
          meta={OrderLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.SubstitutionStatusCode,
      { meta: OrderLineFieldMeta.SubstitutionStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={OrderLineField.SubstitutionStatusCode}
          meta={OrderLineFieldMeta.SubstitutionStatusCode}
          fieldConfig={fieldConfig}
          code={value?.SubstitutionStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.Note,
      { meta: OrderLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={OrderLineField.Note}
          meta={OrderLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.LineItem,
      { meta: OrderLineFieldMeta.LineItem,
        template: ({value, renderContext, fieldConfig}) => <LineItemDisplay
          key={OrderLineField.LineItem}
          meta={OrderLineFieldMeta.LineItem}
          fieldConfig={fieldConfig}
          lineItem={value?.LineItem}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.SellerProposedSubstituteLineItem,
      { meta: OrderLineFieldMeta.SellerProposedSubstituteLineItem,
        template: ({value, renderContext, fieldConfig}) => <LineItemDisplay
          key={OrderLineField.SellerProposedSubstituteLineItem}
          meta={OrderLineFieldMeta.SellerProposedSubstituteLineItem}
          fieldConfig={fieldConfig}
          lineItem={value?.SellerProposedSubstituteLineItem}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.SellerSubstitutedLineItem,
      { meta: OrderLineFieldMeta.SellerSubstitutedLineItem,
        template: ({value, renderContext, fieldConfig}) => <LineItemDisplay
          key={OrderLineField.SellerSubstitutedLineItem}
          meta={OrderLineFieldMeta.SellerSubstitutedLineItem}
          fieldConfig={fieldConfig}
          lineItem={value?.SellerSubstitutedLineItem}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.BuyerProposedSubstituteLineItem,
      { meta: OrderLineFieldMeta.BuyerProposedSubstituteLineItem,
        template: ({value, renderContext, fieldConfig}) => <LineItemDisplay
          key={OrderLineField.BuyerProposedSubstituteLineItem}
          meta={OrderLineFieldMeta.BuyerProposedSubstituteLineItem}
          fieldConfig={fieldConfig}
          lineItem={value?.BuyerProposedSubstituteLineItem}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.CatalogueLineReference,
      { meta: OrderLineFieldMeta.CatalogueLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={OrderLineField.CatalogueLineReference}
          meta={OrderLineFieldMeta.CatalogueLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.CatalogueLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.QuotationLineReference,
      { meta: OrderLineFieldMeta.QuotationLineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={OrderLineField.QuotationLineReference}
          meta={OrderLineFieldMeta.QuotationLineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.QuotationLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.OrderLineReference,
      { meta: OrderLineFieldMeta.OrderLineReference,
        template: ({value, renderContext, fieldConfig}) => <OrderLineReferenceDisplay
          key={OrderLineField.OrderLineReference}
          meta={OrderLineFieldMeta.OrderLineReference}
          fieldConfig={fieldConfig}
          orderLineReference={value?.OrderLineReference}
          renderContext={renderContext}
        />}
    ],

    [
      OrderLineField.DocumentReference,
      { meta: OrderLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={OrderLineField.DocumentReference}
          meta={OrderLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function OrderLineDisplay<TFieldMeta>({ meta, fieldConfig, orderLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OrderLineTypeName,
    meta,
    fieldConfig,
    orderLine,
    renderContext,
    OrderLineSubElementsMap,
  )
}
