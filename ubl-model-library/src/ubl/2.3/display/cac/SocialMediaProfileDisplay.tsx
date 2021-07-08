import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SocialMediaProfile } from  '../../model/cac/SocialMediaProfile'
import { SocialMediaProfileField, SocialMediaProfileFieldMeta, SocialMediaProfileTypeName } from  '../../meta/cac/SocialMediaProfileMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<SocialMediaProfile, void>
  socialMediaProfile: SocialMediaProfile[] | undefined
  renderContext: RenderContext
}

export const SocialMediaProfileSubElementsMap: SubElementsTemplatesMap<SocialMediaProfileField, SocialMediaProfile, void> = new Map([
    [
      SocialMediaProfileField.UBLExtensions,
      { meta: SocialMediaProfileFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SocialMediaProfileField.UBLExtensions}
          meta={SocialMediaProfileFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SocialMediaProfileField.ID,
      { meta: SocialMediaProfileFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SocialMediaProfileField.ID}
          meta={SocialMediaProfileFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      SocialMediaProfileField.Name,
      { meta: SocialMediaProfileFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SocialMediaProfileField.Name}
          meta={SocialMediaProfileFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      SocialMediaProfileField.SocialMediaTypeCode,
      { meta: SocialMediaProfileFieldMeta.SocialMediaTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SocialMediaProfileField.SocialMediaTypeCode}
          meta={SocialMediaProfileFieldMeta.SocialMediaTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SocialMediaTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      SocialMediaProfileField.URI,
      { meta: SocialMediaProfileFieldMeta.URI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SocialMediaProfileField.URI}
          meta={SocialMediaProfileFieldMeta.URI}
          fieldConfig={fieldConfig}
          identifier={value?.URI}
          renderContext={renderContext}
        />}
    ]
]) 

export function SocialMediaProfileDisplay<TFieldMeta>({ meta, fieldConfig, socialMediaProfile, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SocialMediaProfileTypeName,
    meta,
    fieldConfig,
    socialMediaProfile,
    renderContext,
    SocialMediaProfileSubElementsMap,
  )
}
