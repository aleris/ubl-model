import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PostAwardProcess } from  '../../model/cac/PostAwardProcess'
import { PostAwardProcessField, PostAwardProcessFieldMeta, PostAwardProcessTypeName } from  '../../meta/cac/PostAwardProcessMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PostAwardProcess, void>
  postAwardProcess: PostAwardProcess[] | undefined
  renderContext: RenderContext
}

export const PostAwardProcessSubElementsMap: SubElementsTemplatesMap<PostAwardProcessField, PostAwardProcess, void> = new Map([
    [
      PostAwardProcessField.UBLExtensions,
      { meta: PostAwardProcessFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PostAwardProcessField.UBLExtensions}
          meta={PostAwardProcessFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PostAwardProcessField.ElectronicCatalogueUsageIndicator,
      { meta: PostAwardProcessFieldMeta.ElectronicCatalogueUsageIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PostAwardProcessField.ElectronicCatalogueUsageIndicator}
          meta={PostAwardProcessFieldMeta.ElectronicCatalogueUsageIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ElectronicCatalogueUsageIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      PostAwardProcessField.ElectronicInvoiceAcceptedIndicator,
      { meta: PostAwardProcessFieldMeta.ElectronicInvoiceAcceptedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PostAwardProcessField.ElectronicInvoiceAcceptedIndicator}
          meta={PostAwardProcessFieldMeta.ElectronicInvoiceAcceptedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ElectronicInvoiceAcceptedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      PostAwardProcessField.ElectronicOrderUsageIndicator,
      { meta: PostAwardProcessFieldMeta.ElectronicOrderUsageIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PostAwardProcessField.ElectronicOrderUsageIndicator}
          meta={PostAwardProcessFieldMeta.ElectronicOrderUsageIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ElectronicOrderUsageIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      PostAwardProcessField.ElectronicPaymentUsageIndicator,
      { meta: PostAwardProcessFieldMeta.ElectronicPaymentUsageIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PostAwardProcessField.ElectronicPaymentUsageIndicator}
          meta={PostAwardProcessFieldMeta.ElectronicPaymentUsageIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ElectronicPaymentUsageIndicator}
          renderContext={renderContext}
        />}
    ]
]) 

export function PostAwardProcessDisplay<TFieldMeta>({ meta, fieldConfig, postAwardProcess, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PostAwardProcessTypeName,
    meta,
    fieldConfig,
    postAwardProcess,
    renderContext,
    PostAwardProcessSubElementsMap,
  )
}
