import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CommodityClassification } from  '../../model/cac/CommodityClassification'
import { CommodityClassificationField, CommodityClassificationFieldMeta, CommodityClassificationTypeName } from  '../../meta/cac/CommodityClassificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CommodityClassification, void>
  commodityClassification: CommodityClassification[] | undefined
  renderContext: RenderContext
}

export const CommodityClassificationSubElementsMap: SubElementsTemplatesMap<CommodityClassificationField, CommodityClassification, void> = new Map([
    [
      CommodityClassificationField.UBLExtensions,
      { meta: CommodityClassificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CommodityClassificationField.UBLExtensions}
          meta={CommodityClassificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CommodityClassificationField.NatureCode,
      { meta: CommodityClassificationFieldMeta.NatureCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CommodityClassificationField.NatureCode}
          meta={CommodityClassificationFieldMeta.NatureCode}
          fieldConfig={fieldConfig}
          code={value?.NatureCode}
          renderContext={renderContext}
        />}
    ],

    [
      CommodityClassificationField.CargoTypeCode,
      { meta: CommodityClassificationFieldMeta.CargoTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CommodityClassificationField.CargoTypeCode}
          meta={CommodityClassificationFieldMeta.CargoTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CargoTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      CommodityClassificationField.CommodityCode,
      { meta: CommodityClassificationFieldMeta.CommodityCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CommodityClassificationField.CommodityCode}
          meta={CommodityClassificationFieldMeta.CommodityCode}
          fieldConfig={fieldConfig}
          code={value?.CommodityCode}
          renderContext={renderContext}
        />}
    ],

    [
      CommodityClassificationField.ItemClassificationCode,
      { meta: CommodityClassificationFieldMeta.ItemClassificationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CommodityClassificationField.ItemClassificationCode}
          meta={CommodityClassificationFieldMeta.ItemClassificationCode}
          fieldConfig={fieldConfig}
          code={value?.ItemClassificationCode}
          renderContext={renderContext}
        />}
    ]
]) 

export function CommodityClassificationDisplay<TFieldMeta>({ meta, fieldConfig, commodityClassification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CommodityClassificationTypeName,
    meta,
    fieldConfig,
    commodityClassification,
    renderContext,
    CommodityClassificationSubElementsMap,
  )
}
