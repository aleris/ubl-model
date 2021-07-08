import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Regulation } from  '../../model/cac/Regulation'
import { RegulationField, RegulationFieldMeta, RegulationTypeName } from  '../../meta/cac/RegulationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Regulation, void>
  regulation: Regulation[] | undefined
  renderContext: RenderContext
}

export const RegulationSubElementsMap: SubElementsTemplatesMap<RegulationField, Regulation, void> = new Map([
    [
      RegulationField.UBLExtensions,
      { meta: RegulationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RegulationField.UBLExtensions}
          meta={RegulationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RegulationField.Name,
      { meta: RegulationFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RegulationField.Name}
          meta={RegulationFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      RegulationField.LegalReference,
      { meta: RegulationFieldMeta.LegalReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RegulationField.LegalReference}
          meta={RegulationFieldMeta.LegalReference}
          fieldConfig={fieldConfig}
          text={value?.LegalReference}
          renderContext={renderContext}
        />}
    ],

    [
      RegulationField.OntologyURI,
      { meta: RegulationFieldMeta.OntologyURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RegulationField.OntologyURI}
          meta={RegulationFieldMeta.OntologyURI}
          fieldConfig={fieldConfig}
          identifier={value?.OntologyURI}
          renderContext={renderContext}
        />}
    ]
]) 

export function RegulationDisplay<TFieldMeta>({ meta, fieldConfig, regulation, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RegulationTypeName,
    meta,
    fieldConfig,
    regulation,
    renderContext,
    RegulationSubElementsMap,
  )
}
