import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AttestationLine } from  '../../model/cac/AttestationLine'
import { AttestationLineField, AttestationLineFieldMeta, AttestationLineTypeName } from  '../../meta/cac/AttestationLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CriterionItemDisplay } from './CriterionItemDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AttestationLine, void>
  attestationLine: AttestationLine[] | undefined
  renderContext: RenderContext
}

export const AttestationLineSubElementsMap: SubElementsTemplatesMap<AttestationLineField, AttestationLine, void> = new Map([
    [
      AttestationLineField.UBLExtensions,
      { meta: AttestationLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AttestationLineField.UBLExtensions}
          meta={AttestationLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationLineField.ID,
      { meta: AttestationLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttestationLineField.ID}
          meta={AttestationLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationLineField.TypeCode,
      { meta: AttestationLineFieldMeta.TypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={AttestationLineField.TypeCode}
          meta={AttestationLineFieldMeta.TypeCode}
          fieldConfig={fieldConfig}
          code={value?.TypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationLineField.Description,
      { meta: AttestationLineFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AttestationLineField.Description}
          meta={AttestationLineFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationLineField.CriterionItem,
      { meta: AttestationLineFieldMeta.CriterionItem,
        template: ({value, renderContext, fieldConfig}) => <CriterionItemDisplay
          key={AttestationLineField.CriterionItem}
          meta={AttestationLineFieldMeta.CriterionItem}
          fieldConfig={fieldConfig}
          criterionItem={value?.CriterionItem}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationLineField.SubAttestationLine,
      { meta: AttestationLineFieldMeta.SubAttestationLine,
        template: ({value, renderContext, fieldConfig}) => <AttestationLineDisplay
          key={AttestationLineField.SubAttestationLine}
          meta={AttestationLineFieldMeta.SubAttestationLine}
          fieldConfig={fieldConfig}
          attestationLine={value?.SubAttestationLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function AttestationLineDisplay<TFieldMeta>({ meta, fieldConfig, attestationLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AttestationLineTypeName,
    meta,
    fieldConfig,
    attestationLine,
    renderContext,
    AttestationLineSubElementsMap,
  )
}
