import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Clause } from  '../../model/cac/Clause'
import { ClauseField, ClauseFieldMeta, ClauseTypeName } from  '../../meta/cac/ClauseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Clause, void>
  clause: Clause[] | undefined
  renderContext: RenderContext
}

export const ClauseSubElementsMap: SubElementsTemplatesMap<ClauseField, Clause, void> = new Map([
    [
      ClauseField.UBLExtensions,
      { meta: ClauseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ClauseField.UBLExtensions}
          meta={ClauseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ClauseField.ID,
      { meta: ClauseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ClauseField.ID}
          meta={ClauseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ClauseField.Content,
      { meta: ClauseFieldMeta.Content,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ClauseField.Content}
          meta={ClauseFieldMeta.Content}
          fieldConfig={fieldConfig}
          text={value?.Content}
          renderContext={renderContext}
        />}
    ]
]) 

export function ClauseDisplay<TFieldMeta>({ meta, fieldConfig, clause, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ClauseTypeName,
    meta,
    fieldConfig,
    clause,
    renderContext,
    ClauseSubElementsMap,
  )
}
