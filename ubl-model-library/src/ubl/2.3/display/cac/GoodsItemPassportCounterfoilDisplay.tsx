import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItemPassportCounterfoil } from  '../../model/cac/GoodsItemPassportCounterfoil'
import { GoodsItemPassportCounterfoilField, GoodsItemPassportCounterfoilFieldMeta, GoodsItemPassportCounterfoilTypeName } from  '../../meta/cac/GoodsItemPassportCounterfoilMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { GoodsItemDisplay } from './GoodsItemDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from './LocationDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<GoodsItemPassportCounterfoil, void>
  goodsItemPassportCounterfoil: GoodsItemPassportCounterfoil[] | undefined
  renderContext: RenderContext
}

export const GoodsItemPassportCounterfoilSubElementsMap: SubElementsTemplatesMap<GoodsItemPassportCounterfoilField, GoodsItemPassportCounterfoil, void> = new Map([
    [
      GoodsItemPassportCounterfoilField.UBLExtensions,
      { meta: GoodsItemPassportCounterfoilFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={GoodsItemPassportCounterfoilField.UBLExtensions}
          meta={GoodsItemPassportCounterfoilFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.ID,
      { meta: GoodsItemPassportCounterfoilFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemPassportCounterfoilField.ID}
          meta={GoodsItemPassportCounterfoilFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.GoodsItemPassportID,
      { meta: GoodsItemPassportCounterfoilFieldMeta.GoodsItemPassportID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemPassportCounterfoilField.GoodsItemPassportID}
          meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItemPassportID}
          fieldConfig={fieldConfig}
          identifier={value?.GoodsItemPassportID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.FinalReexportationDate,
      { meta: GoodsItemPassportCounterfoilFieldMeta.FinalReexportationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={GoodsItemPassportCounterfoilField.FinalReexportationDate}
          meta={GoodsItemPassportCounterfoilFieldMeta.FinalReexportationDate}
          fieldConfig={fieldConfig}
          date={value?.FinalReexportationDate}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.Note,
      { meta: GoodsItemPassportCounterfoilFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GoodsItemPassportCounterfoilField.Note}
          meta={GoodsItemPassportCounterfoilFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.CustomsOfficeLocation,
      { meta: GoodsItemPassportCounterfoilFieldMeta.CustomsOfficeLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={GoodsItemPassportCounterfoilField.CustomsOfficeLocation}
          meta={GoodsItemPassportCounterfoilFieldMeta.CustomsOfficeLocation}
          fieldConfig={fieldConfig}
          location={value?.CustomsOfficeLocation}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.GoodsItem,
      { meta: GoodsItemPassportCounterfoilFieldMeta.GoodsItem,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemDisplay
          key={GoodsItemPassportCounterfoilField.GoodsItem}
          meta={GoodsItemPassportCounterfoilFieldMeta.GoodsItem}
          fieldConfig={fieldConfig}
          goodsItem={value?.GoodsItem}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.ExportationDocumentReference,
      { meta: GoodsItemPassportCounterfoilFieldMeta.ExportationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsItemPassportCounterfoilField.ExportationDocumentReference}
          meta={GoodsItemPassportCounterfoilFieldMeta.ExportationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ExportationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.ImportationDocumentReference,
      { meta: GoodsItemPassportCounterfoilFieldMeta.ImportationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsItemPassportCounterfoilField.ImportationDocumentReference}
          meta={GoodsItemPassportCounterfoilFieldMeta.ImportationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ImportationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.ReexportationDocumentReference,
      { meta: GoodsItemPassportCounterfoilFieldMeta.ReexportationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsItemPassportCounterfoilField.ReexportationDocumentReference}
          meta={GoodsItemPassportCounterfoilFieldMeta.ReexportationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReexportationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.ReimportationDocumentReference,
      { meta: GoodsItemPassportCounterfoilFieldMeta.ReimportationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsItemPassportCounterfoilField.ReimportationDocumentReference}
          meta={GoodsItemPassportCounterfoilFieldMeta.ReimportationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReimportationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemPassportCounterfoilField.VoucherDocumentReference,
      { meta: GoodsItemPassportCounterfoilFieldMeta.VoucherDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsItemPassportCounterfoilField.VoucherDocumentReference}
          meta={GoodsItemPassportCounterfoilFieldMeta.VoucherDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.VoucherDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function GoodsItemPassportCounterfoilDisplay<TFieldMeta>({ meta, fieldConfig, goodsItemPassportCounterfoil, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    GoodsItemPassportCounterfoilTypeName,
    meta,
    fieldConfig,
    goodsItemPassportCounterfoil,
    renderContext,
    GoodsItemPassportCounterfoilSubElementsMap,
  )
}
