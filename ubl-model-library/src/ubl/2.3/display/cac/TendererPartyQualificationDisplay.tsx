import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererPartyQualification } from  '../../model/cac/TendererPartyQualification'
import { TendererPartyQualificationField, TendererPartyQualificationFieldMeta, TendererPartyQualificationTypeName } from  '../../meta/cac/TendererPartyQualificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ProcurementProjectLotDisplay } from './ProcurementProjectLotDisplay'
import { QualifyingPartyDisplay } from './QualifyingPartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TendererPartyQualification, void>
  tendererPartyQualification: TendererPartyQualification[] | undefined
  renderContext: RenderContext
}

export const TendererPartyQualificationSubElementsMap: SubElementsTemplatesMap<TendererPartyQualificationField, TendererPartyQualification, void> = new Map([
    [
      TendererPartyQualificationField.UBLExtensions,
      { meta: TendererPartyQualificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TendererPartyQualificationField.UBLExtensions}
          meta={TendererPartyQualificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TendererPartyQualificationField.InterestedProcurementProjectLot,
      { meta: TendererPartyQualificationFieldMeta.InterestedProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={TendererPartyQualificationField.InterestedProcurementProjectLot}
          meta={TendererPartyQualificationFieldMeta.InterestedProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.InterestedProcurementProjectLot}
          renderContext={renderContext}
        />}
    ],

    [
      TendererPartyQualificationField.MainQualifyingParty,
      { meta: TendererPartyQualificationFieldMeta.MainQualifyingParty,
        template: ({value, renderContext, fieldConfig}) => <QualifyingPartyDisplay
          key={TendererPartyQualificationField.MainQualifyingParty}
          meta={TendererPartyQualificationFieldMeta.MainQualifyingParty}
          fieldConfig={fieldConfig}
          qualifyingParty={value?.MainQualifyingParty}
          renderContext={renderContext}
        />}
    ],

    [
      TendererPartyQualificationField.AdditionalQualifyingParty,
      { meta: TendererPartyQualificationFieldMeta.AdditionalQualifyingParty,
        template: ({value, renderContext, fieldConfig}) => <QualifyingPartyDisplay
          key={TendererPartyQualificationField.AdditionalQualifyingParty}
          meta={TendererPartyQualificationFieldMeta.AdditionalQualifyingParty}
          fieldConfig={fieldConfig}
          qualifyingParty={value?.AdditionalQualifyingParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function TendererPartyQualificationDisplay<TFieldMeta>({ meta, fieldConfig, tendererPartyQualification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TendererPartyQualificationTypeName,
    meta,
    fieldConfig,
    tendererPartyQualification,
    renderContext,
    TendererPartyQualificationSubElementsMap,
  )
}
