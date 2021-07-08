import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Prize } from  '../../model/cac/Prize'
import { PrizeField, PrizeFieldMeta, PrizeTypeName } from  '../../meta/cac/PrizeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Prize, void>
  prize: Prize[] | undefined
  renderContext: RenderContext
}

export const PrizeSubElementsMap: SubElementsTemplatesMap<PrizeField, Prize, void> = new Map([
    [
      PrizeField.UBLExtensions,
      { meta: PrizeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PrizeField.UBLExtensions}
          meta={PrizeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PrizeField.PreviousRankNumberNumeric,
      { meta: PrizeFieldMeta.PreviousRankNumberNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={PrizeField.PreviousRankNumberNumeric}
          meta={PrizeFieldMeta.PreviousRankNumberNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.PreviousRankNumberNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      PrizeField.PreviousCancellationReasonValueAmount,
      { meta: PrizeFieldMeta.PreviousCancellationReasonValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PrizeField.PreviousCancellationReasonValueAmount}
          meta={PrizeFieldMeta.PreviousCancellationReasonValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.PreviousCancellationReasonValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      PrizeField.PreviousCancellationReasonDescription,
      { meta: PrizeFieldMeta.PreviousCancellationReasonDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PrizeField.PreviousCancellationReasonDescription}
          meta={PrizeFieldMeta.PreviousCancellationReasonDescription}
          fieldConfig={fieldConfig}
          text={value?.PreviousCancellationReasonDescription}
          renderContext={renderContext}
        />}
    ]
]) 

export function PrizeDisplay<TFieldMeta>({ meta, fieldConfig, prize, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PrizeTypeName,
    meta,
    fieldConfig,
    prize,
    renderContext,
    PrizeSubElementsMap,
  )
}
