import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Language } from  '../../model/cac/Language'
import { LanguageField, LanguageFieldMeta, LanguageTypeName } from  '../../meta/cac/LanguageMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Language, void>
  language: Language[] | undefined
  renderContext: RenderContext
}

export const LanguageSubElementsMap: SubElementsTemplatesMap<LanguageField, Language, void> = new Map([
    [
      LanguageField.UBLExtensions,
      { meta: LanguageFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LanguageField.UBLExtensions}
          meta={LanguageFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LanguageField.ID,
      { meta: LanguageFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LanguageField.ID}
          meta={LanguageFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      LanguageField.Name,
      { meta: LanguageFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LanguageField.Name}
          meta={LanguageFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      LanguageField.LocaleCode,
      { meta: LanguageFieldMeta.LocaleCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LanguageField.LocaleCode}
          meta={LanguageFieldMeta.LocaleCode}
          fieldConfig={fieldConfig}
          code={value?.LocaleCode}
          renderContext={renderContext}
        />}
    ]
]) 

export function LanguageDisplay<TFieldMeta>({ meta, fieldConfig, language, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LanguageTypeName,
    meta,
    fieldConfig,
    language,
    renderContext,
    LanguageSubElementsMap,
  )
}
