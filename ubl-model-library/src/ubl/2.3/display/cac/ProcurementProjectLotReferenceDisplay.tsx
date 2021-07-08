import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProjectLotReference } from  '../../model/cac/ProcurementProjectLotReference'
import { ProcurementProjectLotReferenceField, ProcurementProjectLotReferenceFieldMeta, ProcurementProjectLotReferenceTypeName } from  '../../meta/cac/ProcurementProjectLotReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ProcurementProjectLotReference, void>
  procurementProjectLotReference: ProcurementProjectLotReference[] | undefined
  renderContext: RenderContext
}

export const ProcurementProjectLotReferenceSubElementsMap: SubElementsTemplatesMap<ProcurementProjectLotReferenceField, ProcurementProjectLotReference, void> = new Map([
    [
      ProcurementProjectLotReferenceField.UBLExtensions,
      { meta: ProcurementProjectLotReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ProcurementProjectLotReferenceField.UBLExtensions}
          meta={ProcurementProjectLotReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ProcurementProjectLotReferenceField.ID,
      { meta: ProcurementProjectLotReferenceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProcurementProjectLotReferenceField.ID}
          meta={ProcurementProjectLotReferenceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ]
]) 

export function ProcurementProjectLotReferenceDisplay<TFieldMeta>({ meta, fieldConfig, procurementProjectLotReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ProcurementProjectLotReferenceTypeName,
    meta,
    fieldConfig,
    procurementProjectLotReference,
    renderContext,
    ProcurementProjectLotReferenceSubElementsMap,
  )
}
