import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Legislation } from  '../../model/cac/Legislation'
import { LegislationField, LegislationFieldMeta, LegislationTypeName } from  '../../meta/cac/LegislationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LanguageDisplay } from './LanguageDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Legislation, void>
  legislation: Legislation[] | undefined
  renderContext: RenderContext
}

export const LegislationSubElementsMap: SubElementsTemplatesMap<LegislationField, Legislation, void> = new Map([
    [
      LegislationField.UBLExtensions,
      { meta: LegislationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LegislationField.UBLExtensions}
          meta={LegislationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LegislationField.ID,
      { meta: LegislationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LegislationField.ID}
          meta={LegislationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      LegislationField.Title,
      { meta: LegislationFieldMeta.Title,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LegislationField.Title}
          meta={LegislationFieldMeta.Title}
          fieldConfig={fieldConfig}
          text={value?.Title}
          renderContext={renderContext}
        />}
    ],

    [
      LegislationField.Description,
      { meta: LegislationFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LegislationField.Description}
          meta={LegislationFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      LegislationField.JurisdictionLevel,
      { meta: LegislationFieldMeta.JurisdictionLevel,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LegislationField.JurisdictionLevel}
          meta={LegislationFieldMeta.JurisdictionLevel}
          fieldConfig={fieldConfig}
          text={value?.JurisdictionLevel}
          renderContext={renderContext}
        />}
    ],

    [
      LegislationField.Article,
      { meta: LegislationFieldMeta.Article,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={LegislationField.Article}
          meta={LegislationFieldMeta.Article}
          fieldConfig={fieldConfig}
          text={value?.Article}
          renderContext={renderContext}
        />}
    ],

    [
      LegislationField.URI,
      { meta: LegislationFieldMeta.URI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LegislationField.URI}
          meta={LegislationFieldMeta.URI}
          fieldConfig={fieldConfig}
          identifier={value?.URI}
          renderContext={renderContext}
        />}
    ],

    [
      LegislationField.Language,
      { meta: LegislationFieldMeta.Language,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={LegislationField.Language}
          meta={LegislationFieldMeta.Language}
          fieldConfig={fieldConfig}
          language={value?.Language}
          renderContext={renderContext}
        />}
    ],

    [
      LegislationField.JurisdictionRegionAddress,
      { meta: LegislationFieldMeta.JurisdictionRegionAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={LegislationField.JurisdictionRegionAddress}
          meta={LegislationFieldMeta.JurisdictionRegionAddress}
          fieldConfig={fieldConfig}
          address={value?.JurisdictionRegionAddress}
          renderContext={renderContext}
        />}
    ]
]) 

export function LegislationDisplay<TFieldMeta>({ meta, fieldConfig, legislation, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LegislationTypeName,
    meta,
    fieldConfig,
    legislation,
    renderContext,
    LegislationSubElementsMap,
  )
}
