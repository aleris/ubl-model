import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderPreparation } from  '../../model/cac/TenderPreparation'
import { TenderPreparationField, TenderPreparationFieldMeta, TenderPreparationTypeName } from  '../../meta/cac/TenderPreparationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EncryptionDataDisplay } from './EncryptionDataDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ProcurementProjectLotDisplay } from './ProcurementProjectLotDisplay'
import { TenderRequirementDisplay } from './TenderRequirementDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderPreparation, void>
  tenderPreparation: TenderPreparation[] | undefined
  renderContext: RenderContext
}

export const TenderPreparationSubElementsMap: SubElementsTemplatesMap<TenderPreparationField, TenderPreparation, void> = new Map([
    [
      TenderPreparationField.UBLExtensions,
      { meta: TenderPreparationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderPreparationField.UBLExtensions}
          meta={TenderPreparationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderPreparationField.TenderEnvelopeID,
      { meta: TenderPreparationFieldMeta.TenderEnvelopeID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderPreparationField.TenderEnvelopeID}
          meta={TenderPreparationFieldMeta.TenderEnvelopeID}
          fieldConfig={fieldConfig}
          identifier={value?.TenderEnvelopeID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderPreparationField.TenderEnvelopeTypeCode,
      { meta: TenderPreparationFieldMeta.TenderEnvelopeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderPreparationField.TenderEnvelopeTypeCode}
          meta={TenderPreparationFieldMeta.TenderEnvelopeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TenderEnvelopeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderPreparationField.Description,
      { meta: TenderPreparationFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderPreparationField.Description}
          meta={TenderPreparationFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TenderPreparationField.OpenTenderID,
      { meta: TenderPreparationFieldMeta.OpenTenderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderPreparationField.OpenTenderID}
          meta={TenderPreparationFieldMeta.OpenTenderID}
          fieldConfig={fieldConfig}
          identifier={value?.OpenTenderID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderPreparationField.ProcurementProjectLot,
      { meta: TenderPreparationFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={TenderPreparationField.ProcurementProjectLot}
          meta={TenderPreparationFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ],

    [
      TenderPreparationField.DocumentTenderRequirement,
      { meta: TenderPreparationFieldMeta.DocumentTenderRequirement,
        template: ({value, renderContext, fieldConfig}) => <TenderRequirementDisplay
          key={TenderPreparationField.DocumentTenderRequirement}
          meta={TenderPreparationFieldMeta.DocumentTenderRequirement}
          fieldConfig={fieldConfig}
          tenderRequirement={value?.DocumentTenderRequirement}
          renderContext={renderContext}
        />}
    ],

    [
      TenderPreparationField.TenderEncryptionData,
      { meta: TenderPreparationFieldMeta.TenderEncryptionData,
        template: ({value, renderContext, fieldConfig}) => <EncryptionDataDisplay
          key={TenderPreparationField.TenderEncryptionData}
          meta={TenderPreparationFieldMeta.TenderEncryptionData}
          fieldConfig={fieldConfig}
          encryptionData={value?.TenderEncryptionData}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderPreparationDisplay<TFieldMeta>({ meta, fieldConfig, tenderPreparation, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderPreparationTypeName,
    meta,
    fieldConfig,
    tenderPreparation,
    renderContext,
    TenderPreparationSubElementsMap,
  )
}
