import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { UBLExtension } from  '../../model/ext/UBLExtension'
import { UBLExtensionField, UBLExtensionFieldMeta, UBLExtensionTypeName } from  '../../meta/ext/UBLExtensionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ExtensionContentDisplay } from './ExtensionContentDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<UBLExtension, void>
  ublExtension: UBLExtension[] | undefined
  renderContext: RenderContext
}

export const UBLExtensionSubElementsMap: SubElementsTemplatesMap<UBLExtensionField, UBLExtension, void> = new Map([
    [
      UBLExtensionField.ID,
      { meta: UBLExtensionFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UBLExtensionField.ID}
          meta={UBLExtensionFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      UBLExtensionField.Name,
      { meta: UBLExtensionFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UBLExtensionField.Name}
          meta={UBLExtensionFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      UBLExtensionField.ExtensionAgencyID,
      { meta: UBLExtensionFieldMeta.ExtensionAgencyID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UBLExtensionField.ExtensionAgencyID}
          meta={UBLExtensionFieldMeta.ExtensionAgencyID}
          fieldConfig={fieldConfig}
          identifier={value?.ExtensionAgencyID}
          renderContext={renderContext}
        />}
    ],

    [
      UBLExtensionField.ExtensionAgencyName,
      { meta: UBLExtensionFieldMeta.ExtensionAgencyName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UBLExtensionField.ExtensionAgencyName}
          meta={UBLExtensionFieldMeta.ExtensionAgencyName}
          fieldConfig={fieldConfig}
          text={value?.ExtensionAgencyName}
          renderContext={renderContext}
        />}
    ],

    [
      UBLExtensionField.ExtensionVersionID,
      { meta: UBLExtensionFieldMeta.ExtensionVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UBLExtensionField.ExtensionVersionID}
          meta={UBLExtensionFieldMeta.ExtensionVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.ExtensionVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      UBLExtensionField.ExtensionAgencyURI,
      { meta: UBLExtensionFieldMeta.ExtensionAgencyURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UBLExtensionField.ExtensionAgencyURI}
          meta={UBLExtensionFieldMeta.ExtensionAgencyURI}
          fieldConfig={fieldConfig}
          identifier={value?.ExtensionAgencyURI}
          renderContext={renderContext}
        />}
    ],

    [
      UBLExtensionField.ExtensionURI,
      { meta: UBLExtensionFieldMeta.ExtensionURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UBLExtensionField.ExtensionURI}
          meta={UBLExtensionFieldMeta.ExtensionURI}
          fieldConfig={fieldConfig}
          identifier={value?.ExtensionURI}
          renderContext={renderContext}
        />}
    ],

    [
      UBLExtensionField.ExtensionReasonCode,
      { meta: UBLExtensionFieldMeta.ExtensionReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={UBLExtensionField.ExtensionReasonCode}
          meta={UBLExtensionFieldMeta.ExtensionReasonCode}
          fieldConfig={fieldConfig}
          code={value?.ExtensionReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      UBLExtensionField.ExtensionReason,
      { meta: UBLExtensionFieldMeta.ExtensionReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UBLExtensionField.ExtensionReason}
          meta={UBLExtensionFieldMeta.ExtensionReason}
          fieldConfig={fieldConfig}
          text={value?.ExtensionReason}
          renderContext={renderContext}
        />}
    ],

    [
      UBLExtensionField.ExtensionContent,
      { meta: UBLExtensionFieldMeta.ExtensionContent,
        template: ({value, renderContext, fieldConfig}) => <ExtensionContentDisplay
          key={UBLExtensionField.ExtensionContent}
          meta={UBLExtensionFieldMeta.ExtensionContent}
          fieldConfig={fieldConfig}
          extensionContent={value?.ExtensionContent}
          renderContext={renderContext}
        />}
    ]
]) 

export function UBLExtensionDisplay<TFieldMeta>({ meta, fieldConfig, ublExtension, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    UBLExtensionTypeName,
    meta,
    fieldConfig,
    ublExtension,
    renderContext,
    UBLExtensionSubElementsMap,
  )
}
