import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { QualificationResolution } from  '../../model/cac/QualificationResolution'
import { QualificationResolutionField, QualificationResolutionFieldMeta, QualificationResolutionTypeName } from  '../../meta/cac/QualificationResolutionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { ProcurementProjectLotDisplay } from './ProcurementProjectLotDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<QualificationResolution, void>
  qualificationResolution: QualificationResolution[] | undefined
  renderContext: RenderContext
}

export const QualificationResolutionSubElementsMap: SubElementsTemplatesMap<QualificationResolutionField, QualificationResolution, void> = new Map([
    [
      QualificationResolutionField.UBLExtensions,
      { meta: QualificationResolutionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={QualificationResolutionField.UBLExtensions}
          meta={QualificationResolutionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationResolutionField.AdmissionCode,
      { meta: QualificationResolutionFieldMeta.AdmissionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={QualificationResolutionField.AdmissionCode}
          meta={QualificationResolutionFieldMeta.AdmissionCode}
          fieldConfig={fieldConfig}
          code={value?.AdmissionCode}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationResolutionField.ExclusionReason,
      { meta: QualificationResolutionFieldMeta.ExclusionReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualificationResolutionField.ExclusionReason}
          meta={QualificationResolutionFieldMeta.ExclusionReason}
          fieldConfig={fieldConfig}
          text={value?.ExclusionReason}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationResolutionField.Resolution,
      { meta: QualificationResolutionFieldMeta.Resolution,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualificationResolutionField.Resolution}
          meta={QualificationResolutionFieldMeta.Resolution}
          fieldConfig={fieldConfig}
          text={value?.Resolution}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationResolutionField.ResolutionDate,
      { meta: QualificationResolutionFieldMeta.ResolutionDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={QualificationResolutionField.ResolutionDate}
          meta={QualificationResolutionFieldMeta.ResolutionDate}
          fieldConfig={fieldConfig}
          date={value?.ResolutionDate}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationResolutionField.ResolutionTime,
      { meta: QualificationResolutionFieldMeta.ResolutionTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={QualificationResolutionField.ResolutionTime}
          meta={QualificationResolutionFieldMeta.ResolutionTime}
          fieldConfig={fieldConfig}
          time={value?.ResolutionTime}
          renderContext={renderContext}
        />}
    ],

    [
      QualificationResolutionField.ProcurementProjectLot,
      { meta: QualificationResolutionFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={QualificationResolutionField.ProcurementProjectLot}
          meta={QualificationResolutionFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ]
]) 

export function QualificationResolutionDisplay<TFieldMeta>({ meta, fieldConfig, qualificationResolution, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    QualificationResolutionTypeName,
    meta,
    fieldConfig,
    qualificationResolution,
    renderContext,
    QualificationResolutionSubElementsMap,
  )
}
