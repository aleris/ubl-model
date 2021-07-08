import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { WebSiteAccess } from  '../../model/cac/WebSiteAccess'
import { WebSiteAccessField, WebSiteAccessFieldMeta, WebSiteAccessTypeName } from  '../../meta/cac/WebSiteAccessMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<WebSiteAccess, void>
  webSiteAccess: WebSiteAccess[] | undefined
  renderContext: RenderContext
}

export const WebSiteAccessSubElementsMap: SubElementsTemplatesMap<WebSiteAccessField, WebSiteAccess, void> = new Map([
    [
      WebSiteAccessField.UBLExtensions,
      { meta: WebSiteAccessFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={WebSiteAccessField.UBLExtensions}
          meta={WebSiteAccessFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      WebSiteAccessField.URI,
      { meta: WebSiteAccessFieldMeta.URI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WebSiteAccessField.URI}
          meta={WebSiteAccessFieldMeta.URI}
          fieldConfig={fieldConfig}
          identifier={value?.URI}
          renderContext={renderContext}
        />}
    ],

    [
      WebSiteAccessField.Password,
      { meta: WebSiteAccessFieldMeta.Password,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WebSiteAccessField.Password}
          meta={WebSiteAccessFieldMeta.Password}
          fieldConfig={fieldConfig}
          text={value?.Password}
          renderContext={renderContext}
        />}
    ],

    [
      WebSiteAccessField.Login,
      { meta: WebSiteAccessFieldMeta.Login,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WebSiteAccessField.Login}
          meta={WebSiteAccessFieldMeta.Login}
          fieldConfig={fieldConfig}
          text={value?.Login}
          renderContext={renderContext}
        />}
    ]
]) 

export function WebSiteAccessDisplay<TFieldMeta>({ meta, fieldConfig, webSiteAccess, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    WebSiteAccessTypeName,
    meta,
    fieldConfig,
    webSiteAccess,
    renderContext,
    WebSiteAccessSubElementsMap,
  )
}
