import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementAdditionalType } from  '../../model/cac/ProcurementAdditionalType'
import { ProcurementAdditionalTypeField, ProcurementAdditionalTypeFieldMeta, ProcurementAdditionalTypeTypeName } from  '../../meta/cac/ProcurementAdditionalTypeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ProcurementAdditionalType, void>
  procurementAdditionalType: ProcurementAdditionalType[] | undefined
  renderContext: RenderContext
}

export const ProcurementAdditionalTypeSubElementsMap: SubElementsTemplatesMap<ProcurementAdditionalTypeField, ProcurementAdditionalType, void> = new Map([
    [
      ProcurementAdditionalTypeField.UBLExtensions,
      { meta: ProcurementAdditionalTypeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ProcurementAdditionalTypeField.UBLExtensions}
          meta={ProcurementAdditionalTypeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementAdditionalTypeField.ProcurementTypeCode,
      { meta: ProcurementAdditionalTypeFieldMeta.ProcurementTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ProcurementAdditionalTypeField.ProcurementTypeCode}
          meta={ProcurementAdditionalTypeFieldMeta.ProcurementTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ProcurementTypeCode}
          renderContext={renderContext}
        />}
    ]
]) 

export function ProcurementAdditionalTypeDisplay<TFieldMeta>({ meta, fieldConfig, procurementAdditionalType, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ProcurementAdditionalTypeTypeName,
    meta,
    fieldConfig,
    procurementAdditionalType,
    renderContext,
    ProcurementAdditionalTypeSubElementsMap,
  )
}
