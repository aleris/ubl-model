import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SecondaryHazard } from  '../../model/cac/SecondaryHazard'
import { SecondaryHazardField, SecondaryHazardFieldMeta, SecondaryHazardTypeName } from  '../../meta/cac/SecondaryHazardMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<SecondaryHazard, void>
  secondaryHazard: SecondaryHazard[] | undefined
  renderContext: RenderContext
}

export const SecondaryHazardSubElementsMap: SubElementsTemplatesMap<SecondaryHazardField, SecondaryHazard, void> = new Map([
    [
      SecondaryHazardField.UBLExtensions,
      { meta: SecondaryHazardFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SecondaryHazardField.UBLExtensions}
          meta={SecondaryHazardFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SecondaryHazardField.ID,
      { meta: SecondaryHazardFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SecondaryHazardField.ID}
          meta={SecondaryHazardFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      SecondaryHazardField.PlacardNotation,
      { meta: SecondaryHazardFieldMeta.PlacardNotation,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SecondaryHazardField.PlacardNotation}
          meta={SecondaryHazardFieldMeta.PlacardNotation}
          fieldConfig={fieldConfig}
          text={value?.PlacardNotation}
          renderContext={renderContext}
        />}
    ],

    [
      SecondaryHazardField.PlacardEndorsement,
      { meta: SecondaryHazardFieldMeta.PlacardEndorsement,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SecondaryHazardField.PlacardEndorsement}
          meta={SecondaryHazardFieldMeta.PlacardEndorsement}
          fieldConfig={fieldConfig}
          text={value?.PlacardEndorsement}
          renderContext={renderContext}
        />}
    ],

    [
      SecondaryHazardField.EmergencyProceduresCode,
      { meta: SecondaryHazardFieldMeta.EmergencyProceduresCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SecondaryHazardField.EmergencyProceduresCode}
          meta={SecondaryHazardFieldMeta.EmergencyProceduresCode}
          fieldConfig={fieldConfig}
          code={value?.EmergencyProceduresCode}
          renderContext={renderContext}
        />}
    ],

    [
      SecondaryHazardField.Extension,
      { meta: SecondaryHazardFieldMeta.Extension,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SecondaryHazardField.Extension}
          meta={SecondaryHazardFieldMeta.Extension}
          fieldConfig={fieldConfig}
          text={value?.Extension}
          renderContext={renderContext}
        />}
    ]
]) 

export function SecondaryHazardDisplay<TFieldMeta>({ meta, fieldConfig, secondaryHazard, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SecondaryHazardTypeName,
    meta,
    fieldConfig,
    secondaryHazard,
    renderContext,
    SecondaryHazardSubElementsMap,
  )
}
