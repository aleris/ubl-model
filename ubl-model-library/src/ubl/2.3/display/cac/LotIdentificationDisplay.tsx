import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { LotIdentification } from  '../../model/cac/LotIdentification'
import { LotIdentificationField, LotIdentificationFieldMeta, LotIdentificationTypeName } from  '../../meta/cac/LotIdentificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemPropertyDisplay } from './ItemPropertyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<LotIdentification, void>
  lotIdentification: LotIdentification[] | undefined
  renderContext: RenderContext
}

export const LotIdentificationSubElementsMap: SubElementsTemplatesMap<LotIdentificationField, LotIdentification, void> = new Map([
    [
      LotIdentificationField.UBLExtensions,
      { meta: LotIdentificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LotIdentificationField.UBLExtensions}
          meta={LotIdentificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LotIdentificationField.LotNumberID,
      { meta: LotIdentificationFieldMeta.LotNumberID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LotIdentificationField.LotNumberID}
          meta={LotIdentificationFieldMeta.LotNumberID}
          fieldConfig={fieldConfig}
          identifier={value?.LotNumberID}
          renderContext={renderContext}
        />}
    ],

    [
      LotIdentificationField.ExpiryDate,
      { meta: LotIdentificationFieldMeta.ExpiryDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={LotIdentificationField.ExpiryDate}
          meta={LotIdentificationFieldMeta.ExpiryDate}
          fieldConfig={fieldConfig}
          date={value?.ExpiryDate}
          renderContext={renderContext}
        />}
    ],

    [
      LotIdentificationField.AdditionalItemProperty,
      { meta: LotIdentificationFieldMeta.AdditionalItemProperty,
        template: ({value, renderContext, fieldConfig}) => <ItemPropertyDisplay
          key={LotIdentificationField.AdditionalItemProperty}
          meta={LotIdentificationFieldMeta.AdditionalItemProperty}
          fieldConfig={fieldConfig}
          itemProperty={value?.AdditionalItemProperty}
          renderContext={renderContext}
        />}
    ]
]) 

export function LotIdentificationDisplay<TFieldMeta>({ meta, fieldConfig, lotIdentification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LotIdentificationTypeName,
    meta,
    fieldConfig,
    lotIdentification,
    renderContext,
    LotIdentificationSubElementsMap,
  )
}
