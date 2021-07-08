import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PriceList } from  '../../model/cac/PriceList'
import { PriceListField, PriceListFieldMeta, PriceListTypeName } from  '../../meta/cac/PriceListMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PriceList, void>
  priceList: PriceList[] | undefined
  renderContext: RenderContext
}

export const PriceListSubElementsMap: SubElementsTemplatesMap<PriceListField, PriceList, void> = new Map([
    [
      PriceListField.UBLExtensions,
      { meta: PriceListFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PriceListField.UBLExtensions}
          meta={PriceListFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PriceListField.ID,
      { meta: PriceListFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PriceListField.ID}
          meta={PriceListFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PriceListField.StatusCode,
      { meta: PriceListFieldMeta.StatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PriceListField.StatusCode}
          meta={PriceListFieldMeta.StatusCode}
          fieldConfig={fieldConfig}
          code={value?.StatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      PriceListField.ValidityPeriod,
      { meta: PriceListFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={PriceListField.ValidityPeriod}
          meta={PriceListFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      PriceListField.PreviousPriceList,
      { meta: PriceListFieldMeta.PreviousPriceList,
        template: ({value, renderContext, fieldConfig}) => <PriceListDisplay
          key={PriceListField.PreviousPriceList}
          meta={PriceListFieldMeta.PreviousPriceList}
          fieldConfig={fieldConfig}
          priceList={value?.PreviousPriceList}
          renderContext={renderContext}
        />}
    ]
]) 

export function PriceListDisplay<TFieldMeta>({ meta, fieldConfig, priceList, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PriceListTypeName,
    meta,
    fieldConfig,
    priceList,
    renderContext,
    PriceListSubElementsMap,
  )
}
