import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { WebSite } from  '../../model/cac/WebSite'
import { WebSiteField, WebSiteFieldMeta, WebSiteTypeName } from  '../../meta/cac/WebSiteMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'
import { WebSiteAccessDisplay } from './WebSiteAccessDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<WebSite, void>
  webSite: WebSite[] | undefined
  renderContext: RenderContext
}

export const WebSiteSubElementsMap: SubElementsTemplatesMap<WebSiteField, WebSite, void> = new Map([
    [
      WebSiteField.UBLExtensions,
      { meta: WebSiteFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={WebSiteField.UBLExtensions}
          meta={WebSiteFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      WebSiteField.ID,
      { meta: WebSiteFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WebSiteField.ID}
          meta={WebSiteFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      WebSiteField.Name,
      { meta: WebSiteFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WebSiteField.Name}
          meta={WebSiteFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      WebSiteField.Description,
      { meta: WebSiteFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WebSiteField.Description}
          meta={WebSiteFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      WebSiteField.WebSiteTypeCode,
      { meta: WebSiteFieldMeta.WebSiteTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={WebSiteField.WebSiteTypeCode}
          meta={WebSiteFieldMeta.WebSiteTypeCode}
          fieldConfig={fieldConfig}
          code={value?.WebSiteTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      WebSiteField.URI,
      { meta: WebSiteFieldMeta.URI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WebSiteField.URI}
          meta={WebSiteFieldMeta.URI}
          fieldConfig={fieldConfig}
          identifier={value?.URI}
          renderContext={renderContext}
        />}
    ],

    [
      WebSiteField.WebSiteAccess,
      { meta: WebSiteFieldMeta.WebSiteAccess,
        template: ({value, renderContext, fieldConfig}) => <WebSiteAccessDisplay
          key={WebSiteField.WebSiteAccess}
          meta={WebSiteFieldMeta.WebSiteAccess}
          fieldConfig={fieldConfig}
          webSiteAccess={value?.WebSiteAccess}
          renderContext={renderContext}
        />}
    ]
]) 

export function WebSiteDisplay<TFieldMeta>({ meta, fieldConfig, webSite, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    WebSiteTypeName,
    meta,
    fieldConfig,
    webSite,
    renderContext,
    WebSiteSubElementsMap,
  )
}
