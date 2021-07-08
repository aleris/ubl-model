import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { LotsGroup } from  '../../model/cac/LotsGroup'
import { LotsGroupField, LotsGroupFieldMeta, LotsGroupTypeName } from  '../../meta/cac/LotsGroupMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ProcurementProjectLotDisplay } from './ProcurementProjectLotDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<LotsGroup, void>
  lotsGroup: LotsGroup[] | undefined
  renderContext: RenderContext
}

export const LotsGroupSubElementsMap: SubElementsTemplatesMap<LotsGroupField, LotsGroup, void> = new Map([
    [
      LotsGroupField.UBLExtensions,
      { meta: LotsGroupFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LotsGroupField.UBLExtensions}
          meta={LotsGroupFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LotsGroupField.LotLotsGroupID,
      { meta: LotsGroupFieldMeta.LotLotsGroupID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LotsGroupField.LotLotsGroupID}
          meta={LotsGroupFieldMeta.LotLotsGroupID}
          fieldConfig={fieldConfig}
          identifier={value?.LotLotsGroupID}
          renderContext={renderContext}
        />}
    ],

    [
      LotsGroupField.ProcurementProjectLot,
      { meta: LotsGroupFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={LotsGroupField.ProcurementProjectLot}
          meta={LotsGroupFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ]
]) 

export function LotsGroupDisplay<TFieldMeta>({ meta, fieldConfig, lotsGroup, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LotsGroupTypeName,
    meta,
    fieldConfig,
    lotsGroup,
    renderContext,
    LotsGroupSubElementsMap,
  )
}
