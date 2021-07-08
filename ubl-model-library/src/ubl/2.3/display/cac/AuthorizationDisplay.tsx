import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Authorization } from  '../../model/cac/Authorization'
import { AuthorizationField, AuthorizationFieldMeta, AuthorizationTypeName } from  '../../meta/cac/AuthorizationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CertificateDisplay } from './CertificateDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Authorization, void>
  authorization: Authorization[] | undefined
  renderContext: RenderContext
}

export const AuthorizationSubElementsMap: SubElementsTemplatesMap<AuthorizationField, Authorization, void> = new Map([
    [
      AuthorizationField.UBLExtensions,
      { meta: AuthorizationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AuthorizationField.UBLExtensions}
          meta={AuthorizationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AuthorizationField.PurposeCode,
      { meta: AuthorizationFieldMeta.PurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AuthorizationField.PurposeCode}
          meta={AuthorizationFieldMeta.PurposeCode}
          fieldConfig={fieldConfig}
          code={value?.PurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      AuthorizationField.Purpose,
      { meta: AuthorizationFieldMeta.Purpose,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AuthorizationField.Purpose}
          meta={AuthorizationFieldMeta.Purpose}
          fieldConfig={fieldConfig}
          text={value?.Purpose}
          renderContext={renderContext}
        />}
    ],

    [
      AuthorizationField.ValidityPeriod,
      { meta: AuthorizationFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={AuthorizationField.ValidityPeriod}
          meta={AuthorizationFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      AuthorizationField.Certificate,
      { meta: AuthorizationFieldMeta.Certificate,
        template: ({value, renderContext, fieldConfig}) => <CertificateDisplay
          key={AuthorizationField.Certificate}
          meta={AuthorizationFieldMeta.Certificate}
          fieldConfig={fieldConfig}
          certificate={value?.Certificate}
          renderContext={renderContext}
        />}
    ]
]) 

export function AuthorizationDisplay<TFieldMeta>({ meta, fieldConfig, authorization, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AuthorizationTypeName,
    meta,
    fieldConfig,
    authorization,
    renderContext,
    AuthorizationSubElementsMap,
  )
}
