import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Duty } from  '../../model/cac/Duty'
import { DutyField, DutyFieldMeta, DutyTypeName } from  '../../meta/cac/DutyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TaxCategoryDisplay } from './TaxCategoryDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Duty, void>
  duty: Duty[] | undefined
  renderContext: RenderContext
}

export const DutySubElementsMap: SubElementsTemplatesMap<DutyField, Duty, void> = new Map([
    [
      DutyField.UBLExtensions,
      { meta: DutyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DutyField.UBLExtensions}
          meta={DutyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DutyField.Amount,
      { meta: DutyFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={DutyField.Amount}
          meta={DutyFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      DutyField.Duty,
      { meta: DutyFieldMeta.Duty,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DutyField.Duty}
          meta={DutyFieldMeta.Duty}
          fieldConfig={fieldConfig}
          text={value?.Duty}
          renderContext={renderContext}
        />}
    ],

    [
      DutyField.DutyCode,
      { meta: DutyFieldMeta.DutyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DutyField.DutyCode}
          meta={DutyFieldMeta.DutyCode}
          fieldConfig={fieldConfig}
          code={value?.DutyCode}
          renderContext={renderContext}
        />}
    ],

    [
      DutyField.TaxCategory,
      { meta: DutyFieldMeta.TaxCategory,
        template: ({value, renderContext, fieldConfig}) => <TaxCategoryDisplay
          key={DutyField.TaxCategory}
          meta={DutyFieldMeta.TaxCategory}
          fieldConfig={fieldConfig}
          taxCategory={value?.TaxCategory}
          renderContext={renderContext}
        />}
    ]
]) 

export function DutyDisplay<TFieldMeta>({ meta, fieldConfig, duty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DutyTypeName,
    meta,
    fieldConfig,
    duty,
    renderContext,
    DutySubElementsMap,
  )
}
