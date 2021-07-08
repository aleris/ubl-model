import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SecurityClearanceTerm } from  '../../model/cac/SecurityClearanceTerm'
import { SecurityClearanceTermField, SecurityClearanceTermFieldMeta, SecurityClearanceTermTypeName } from  '../../meta/cac/SecurityClearanceTermMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<SecurityClearanceTerm, void>
  securityClearanceTerm: SecurityClearanceTerm[] | undefined
  renderContext: RenderContext
}

export const SecurityClearanceTermSubElementsMap: SubElementsTemplatesMap<SecurityClearanceTermField, SecurityClearanceTerm, void> = new Map([
    [
      SecurityClearanceTermField.UBLExtensions,
      { meta: SecurityClearanceTermFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SecurityClearanceTermField.UBLExtensions}
          meta={SecurityClearanceTermFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SecurityClearanceTermField.Code,
      { meta: SecurityClearanceTermFieldMeta.Code,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SecurityClearanceTermField.Code}
          meta={SecurityClearanceTermFieldMeta.Code}
          fieldConfig={fieldConfig}
          code={value?.Code}
          renderContext={renderContext}
        />}
    ],

    [
      SecurityClearanceTermField.Description,
      { meta: SecurityClearanceTermFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SecurityClearanceTermField.Description}
          meta={SecurityClearanceTermFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function SecurityClearanceTermDisplay<TFieldMeta>({ meta, fieldConfig, securityClearanceTerm, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SecurityClearanceTermTypeName,
    meta,
    fieldConfig,
    securityClearanceTerm,
    renderContext,
    SecurityClearanceTermSubElementsMap,
  )
}
