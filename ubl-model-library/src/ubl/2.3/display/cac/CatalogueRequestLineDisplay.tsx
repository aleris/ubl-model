import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueRequestLine } from  '../../model/cac/CatalogueRequestLine'
import { CatalogueRequestLineField, CatalogueRequestLineFieldMeta, CatalogueRequestLineTypeName } from  '../../meta/cac/CatalogueRequestLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { ItemLocationQuantityDisplay } from './ItemLocationQuantityDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CatalogueRequestLine, void>
  catalogueRequestLine: CatalogueRequestLine[] | undefined
  renderContext: RenderContext
}

export const CatalogueRequestLineSubElementsMap: SubElementsTemplatesMap<CatalogueRequestLineField, CatalogueRequestLine, void> = new Map([
    [
      CatalogueRequestLineField.UBLExtensions,
      { meta: CatalogueRequestLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CatalogueRequestLineField.UBLExtensions}
          meta={CatalogueRequestLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestLineField.ID,
      { meta: CatalogueRequestLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueRequestLineField.ID}
          meta={CatalogueRequestLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestLineField.ContractSubdivision,
      { meta: CatalogueRequestLineFieldMeta.ContractSubdivision,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueRequestLineField.ContractSubdivision}
          meta={CatalogueRequestLineFieldMeta.ContractSubdivision}
          fieldConfig={fieldConfig}
          text={value?.ContractSubdivision}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestLineField.Note,
      { meta: CatalogueRequestLineFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueRequestLineField.Note}
          meta={CatalogueRequestLineFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestLineField.LineValidityPeriod,
      { meta: CatalogueRequestLineFieldMeta.LineValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CatalogueRequestLineField.LineValidityPeriod}
          meta={CatalogueRequestLineFieldMeta.LineValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.LineValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestLineField.RequiredItemLocationQuantity,
      { meta: CatalogueRequestLineFieldMeta.RequiredItemLocationQuantity,
        template: ({value, renderContext, fieldConfig}) => <ItemLocationQuantityDisplay
          key={CatalogueRequestLineField.RequiredItemLocationQuantity}
          meta={CatalogueRequestLineFieldMeta.RequiredItemLocationQuantity}
          fieldConfig={fieldConfig}
          itemLocationQuantity={value?.RequiredItemLocationQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueRequestLineField.Item,
      { meta: CatalogueRequestLineFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={CatalogueRequestLineField.Item}
          meta={CatalogueRequestLineFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ]
]) 

export function CatalogueRequestLineDisplay<TFieldMeta>({ meta, fieldConfig, catalogueRequestLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CatalogueRequestLineTypeName,
    meta,
    fieldConfig,
    catalogueRequestLine,
    renderContext,
    CatalogueRequestLineSubElementsMap,
  )
}
