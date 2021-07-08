import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Declaration } from  '../../model/cac/Declaration'
import { DeclarationField, DeclarationFieldMeta, DeclarationTypeName } from  '../../meta/cac/DeclarationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EvidenceSuppliedDisplay } from './EvidenceSuppliedDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Declaration, void>
  declaration: Declaration[] | undefined
  renderContext: RenderContext
}

export const DeclarationSubElementsMap: SubElementsTemplatesMap<DeclarationField, Declaration, void> = new Map([
    [
      DeclarationField.UBLExtensions,
      { meta: DeclarationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DeclarationField.UBLExtensions}
          meta={DeclarationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DeclarationField.Name,
      { meta: DeclarationFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DeclarationField.Name}
          meta={DeclarationFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      DeclarationField.DeclarationTypeCode,
      { meta: DeclarationFieldMeta.DeclarationTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DeclarationField.DeclarationTypeCode}
          meta={DeclarationFieldMeta.DeclarationTypeCode}
          fieldConfig={fieldConfig}
          code={value?.DeclarationTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      DeclarationField.Description,
      { meta: DeclarationFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DeclarationField.Description}
          meta={DeclarationFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      DeclarationField.EvidenceSupplied,
      { meta: DeclarationFieldMeta.EvidenceSupplied,
        template: ({value, renderContext, fieldConfig}) => <EvidenceSuppliedDisplay
          key={DeclarationField.EvidenceSupplied}
          meta={DeclarationFieldMeta.EvidenceSupplied}
          fieldConfig={fieldConfig}
          evidenceSupplied={value?.EvidenceSupplied}
          renderContext={renderContext}
        />}
    ]
]) 

export function DeclarationDisplay<TFieldMeta>({ meta, fieldConfig, declaration, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DeclarationTypeName,
    meta,
    fieldConfig,
    declaration,
    renderContext,
    DeclarationSubElementsMap,
  )
}
