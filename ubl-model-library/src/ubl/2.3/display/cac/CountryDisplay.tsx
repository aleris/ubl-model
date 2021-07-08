import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Country } from  '../../model/cac/Country'
import { CountryField, CountryFieldMeta, CountryTypeName } from  '../../meta/cac/CountryMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Country, void>
  country: Country[] | undefined
  renderContext: RenderContext
}

export const CountrySubElementsMap: SubElementsTemplatesMap<CountryField, Country, void> = new Map([
    [
      CountryField.UBLExtensions,
      { meta: CountryFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CountryField.UBLExtensions}
          meta={CountryFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CountryField.IdentificationCode,
      { meta: CountryFieldMeta.IdentificationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CountryField.IdentificationCode}
          meta={CountryFieldMeta.IdentificationCode}
          fieldConfig={fieldConfig}
          code={value?.IdentificationCode}
          renderContext={renderContext}
        />}
    ],

    [
      CountryField.Name,
      { meta: CountryFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CountryField.Name}
          meta={CountryFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ]
]) 

export function CountryDisplay<TFieldMeta>({ meta, fieldConfig, country, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CountryTypeName,
    meta,
    fieldConfig,
    country,
    renderContext,
    CountrySubElementsMap,
  )
}
