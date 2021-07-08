import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EvidenceSupplied } from  '../../model/cac/EvidenceSupplied'
import { EvidenceSuppliedField, EvidenceSuppliedFieldMeta, EvidenceSuppliedTypeName } from  '../../meta/cac/EvidenceSuppliedMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EvidenceSupplied, void>
  evidenceSupplied: EvidenceSupplied[] | undefined
  renderContext: RenderContext
}

export const EvidenceSuppliedSubElementsMap: SubElementsTemplatesMap<EvidenceSuppliedField, EvidenceSupplied, void> = new Map([
    [
      EvidenceSuppliedField.UBLExtensions,
      { meta: EvidenceSuppliedFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EvidenceSuppliedField.UBLExtensions}
          meta={EvidenceSuppliedFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceSuppliedField.ID,
      { meta: EvidenceSuppliedFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EvidenceSuppliedField.ID}
          meta={EvidenceSuppliedFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ]
]) 

export function EvidenceSuppliedDisplay<TFieldMeta>({ meta, fieldConfig, evidenceSupplied, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EvidenceSuppliedTypeName,
    meta,
    fieldConfig,
    evidenceSupplied,
    renderContext,
    EvidenceSuppliedSubElementsMap,
  )
}
