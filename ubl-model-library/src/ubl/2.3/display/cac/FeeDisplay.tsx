import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Fee } from  '../../model/cac/Fee'
import { FeeField, FeeFieldMeta, FeeTypeName } from  '../../meta/cac/FeeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Fee, void>
  fee: Fee[] | undefined
  renderContext: RenderContext
}

export const FeeSubElementsMap: SubElementsTemplatesMap<FeeField, Fee, void> = new Map([
    [
      FeeField.UBLExtensions,
      { meta: FeeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={FeeField.UBLExtensions}
          meta={FeeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      FeeField.FeeTypeCode,
      { meta: FeeFieldMeta.FeeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FeeField.FeeTypeCode}
          meta={FeeFieldMeta.FeeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.FeeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      FeeField.FeeAmount,
      { meta: FeeFieldMeta.FeeAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={FeeField.FeeAmount}
          meta={FeeFieldMeta.FeeAmount}
          fieldConfig={fieldConfig}
          amount={value?.FeeAmount}
          renderContext={renderContext}
        />}
    ],

    [
      FeeField.FeeDescription,
      { meta: FeeFieldMeta.FeeDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FeeField.FeeDescription}
          meta={FeeFieldMeta.FeeDescription}
          fieldConfig={fieldConfig}
          text={value?.FeeDescription}
          renderContext={renderContext}
        />}
    ]
]) 

export function FeeDisplay<TFieldMeta>({ meta, fieldConfig, fee, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    FeeTypeName,
    meta,
    fieldConfig,
    fee,
    renderContext,
    FeeSubElementsMap,
  )
}
