import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RequestForQuotationLine } from  '../../model/cac/RequestForQuotationLine'
import { RequestForQuotationLineField, RequestForQuotationLineFieldMeta, RequestForQuotationLineTypeName } from  '../../meta/cac/RequestForQuotationLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LineItemDisplay } from './LineItemDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RequestForQuotationLine, void>
  requestForQuotationLine: RequestForQuotationLine[] | undefined
  renderContext: RenderContext
}

export const RequestForQuotationLineSubElementsMap: SubElementsTemplatesMap<RequestForQuotationLineField, RequestForQuotationLine, void> = new Map([
    [
      RequestForQuotationLineField.UBLExtensions,
      { meta: RequestForQuotationLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RequestForQuotationLineField.UBLExtensions}
          meta={RequestForQuotationLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationLineField.ID,
      { meta: RequestForQuotationLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForQuotationLineField.ID}
          meta={RequestForQuotationLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationLineField.UUID,
      { meta: RequestForQuotationLineFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RequestForQuotationLineField.UUID}
          meta={RequestForQuotationLineFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationLineField.Note,
      { meta: RequestForQuotationLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RequestForQuotationLineField.Note}
          meta={RequestForQuotationLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationLineField.OptionalLineItemIndicator,
      { meta: RequestForQuotationLineFieldMeta.OptionalLineItemIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={RequestForQuotationLineField.OptionalLineItemIndicator}
          meta={RequestForQuotationLineFieldMeta.OptionalLineItemIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.OptionalLineItemIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationLineField.PrivacyCode,
      { meta: RequestForQuotationLineFieldMeta.PrivacyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={RequestForQuotationLineField.PrivacyCode}
          meta={RequestForQuotationLineFieldMeta.PrivacyCode}
          fieldConfig={fieldConfig}
          code={value?.PrivacyCode}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationLineField.SecurityClassificationCode,
      { meta: RequestForQuotationLineFieldMeta.SecurityClassificationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={RequestForQuotationLineField.SecurityClassificationCode}
          meta={RequestForQuotationLineFieldMeta.SecurityClassificationCode}
          fieldConfig={fieldConfig}
          code={value?.SecurityClassificationCode}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationLineField.DocumentReference,
      { meta: RequestForQuotationLineFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={RequestForQuotationLineField.DocumentReference}
          meta={RequestForQuotationLineFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      RequestForQuotationLineField.LineItem,
      { meta: RequestForQuotationLineFieldMeta.LineItem,
        template: ({value, renderContext, fieldConfig}) => <LineItemDisplay
          key={RequestForQuotationLineField.LineItem}
          meta={RequestForQuotationLineFieldMeta.LineItem}
          fieldConfig={fieldConfig}
          lineItem={value?.LineItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function RequestForQuotationLineDisplay<TFieldMeta>({ meta, fieldConfig, requestForQuotationLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RequestForQuotationLineTypeName,
    meta,
    fieldConfig,
    requestForQuotationLine,
    renderContext,
    RequestForQuotationLineSubElementsMap,
  )
}
