import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AwardingCriterionResponse } from  '../../model/cac/AwardingCriterionResponse'
import { AwardingCriterionResponseField, AwardingCriterionResponseFieldMeta, AwardingCriterionResponseTypeName } from  '../../meta/cac/AwardingCriterionResponseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AwardingCriterionResponse, void>
  awardingCriterionResponse: AwardingCriterionResponse[] | undefined
  renderContext: RenderContext
}

export const AwardingCriterionResponseSubElementsMap: SubElementsTemplatesMap<AwardingCriterionResponseField, AwardingCriterionResponse, void> = new Map([
    [
      AwardingCriterionResponseField.UBLExtensions,
      { meta: AwardingCriterionResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AwardingCriterionResponseField.UBLExtensions}
          meta={AwardingCriterionResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionResponseField.ID,
      { meta: AwardingCriterionResponseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardingCriterionResponseField.ID}
          meta={AwardingCriterionResponseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionResponseField.AwardingCriterionID,
      { meta: AwardingCriterionResponseFieldMeta.AwardingCriterionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AwardingCriterionResponseField.AwardingCriterionID}
          meta={AwardingCriterionResponseFieldMeta.AwardingCriterionID}
          fieldConfig={fieldConfig}
          identifier={value?.AwardingCriterionID}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionResponseField.AwardingCriterionDescription,
      { meta: AwardingCriterionResponseFieldMeta.AwardingCriterionDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingCriterionResponseField.AwardingCriterionDescription}
          meta={AwardingCriterionResponseFieldMeta.AwardingCriterionDescription}
          fieldConfig={fieldConfig}
          text={value?.AwardingCriterionDescription}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionResponseField.Description,
      { meta: AwardingCriterionResponseFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AwardingCriterionResponseField.Description}
          meta={AwardingCriterionResponseFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionResponseField.Quantity,
      { meta: AwardingCriterionResponseFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={AwardingCriterionResponseField.Quantity}
          meta={AwardingCriterionResponseFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionResponseField.Amount,
      { meta: AwardingCriterionResponseFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={AwardingCriterionResponseField.Amount}
          meta={AwardingCriterionResponseFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      AwardingCriterionResponseField.SubordinateAwardingCriterionResponse,
      { meta: AwardingCriterionResponseFieldMeta.SubordinateAwardingCriterionResponse,
        template: ({value, renderContext, fieldConfig}) => <AwardingCriterionResponseDisplay
          key={AwardingCriterionResponseField.SubordinateAwardingCriterionResponse}
          meta={AwardingCriterionResponseFieldMeta.SubordinateAwardingCriterionResponse}
          fieldConfig={fieldConfig}
          awardingCriterionResponse={value?.SubordinateAwardingCriterionResponse}
          renderContext={renderContext}
        />}
    ]
]) 

export function AwardingCriterionResponseDisplay<TFieldMeta>({ meta, fieldConfig, awardingCriterionResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AwardingCriterionResponseTypeName,
    meta,
    fieldConfig,
    awardingCriterionResponse,
    renderContext,
    AwardingCriterionResponseSubElementsMap,
  )
}
