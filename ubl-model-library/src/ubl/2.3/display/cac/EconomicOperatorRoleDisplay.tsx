import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EconomicOperatorRole } from  '../../model/cac/EconomicOperatorRole'
import { EconomicOperatorRoleField, EconomicOperatorRoleFieldMeta, EconomicOperatorRoleTypeName } from  '../../meta/cac/EconomicOperatorRoleMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EconomicOperatorRole, void>
  economicOperatorRole: EconomicOperatorRole[] | undefined
  renderContext: RenderContext
}

export const EconomicOperatorRoleSubElementsMap: SubElementsTemplatesMap<EconomicOperatorRoleField, EconomicOperatorRole, void> = new Map([
    [
      EconomicOperatorRoleField.UBLExtensions,
      { meta: EconomicOperatorRoleFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EconomicOperatorRoleField.UBLExtensions}
          meta={EconomicOperatorRoleFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorRoleField.RoleCode,
      { meta: EconomicOperatorRoleFieldMeta.RoleCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EconomicOperatorRoleField.RoleCode}
          meta={EconomicOperatorRoleFieldMeta.RoleCode}
          fieldConfig={fieldConfig}
          code={value?.RoleCode}
          renderContext={renderContext}
        />}
    ],

    [
      EconomicOperatorRoleField.RoleDescription,
      { meta: EconomicOperatorRoleFieldMeta.RoleDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EconomicOperatorRoleField.RoleDescription}
          meta={EconomicOperatorRoleFieldMeta.RoleDescription}
          fieldConfig={fieldConfig}
          text={value?.RoleDescription}
          renderContext={renderContext}
        />}
    ]
]) 

export function EconomicOperatorRoleDisplay<TFieldMeta>({ meta, fieldConfig, economicOperatorRole, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EconomicOperatorRoleTypeName,
    meta,
    fieldConfig,
    economicOperatorRole,
    renderContext,
    EconomicOperatorRoleSubElementsMap,
  )
}
