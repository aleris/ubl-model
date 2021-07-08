import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { VerifiedGrossMass } from  '../../model/cac/VerifiedGrossMass'
import { VerifiedGrossMassField, VerifiedGrossMassFieldMeta, VerifiedGrossMassTypeName } from  '../../meta/cac/VerifiedGrossMassMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<VerifiedGrossMass, void>
  verifiedGrossMass: VerifiedGrossMass[] | undefined
  renderContext: RenderContext
}

export const VerifiedGrossMassSubElementsMap: SubElementsTemplatesMap<VerifiedGrossMassField, VerifiedGrossMass, void> = new Map([
    [
      VerifiedGrossMassField.UBLExtensions,
      { meta: VerifiedGrossMassFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={VerifiedGrossMassField.UBLExtensions}
          meta={VerifiedGrossMassFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.ID,
      { meta: VerifiedGrossMassFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={VerifiedGrossMassField.ID}
          meta={VerifiedGrossMassFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.WeighingDate,
      { meta: VerifiedGrossMassFieldMeta.WeighingDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={VerifiedGrossMassField.WeighingDate}
          meta={VerifiedGrossMassFieldMeta.WeighingDate}
          fieldConfig={fieldConfig}
          date={value?.WeighingDate}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.WeighingTime,
      { meta: VerifiedGrossMassFieldMeta.WeighingTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={VerifiedGrossMassField.WeighingTime}
          meta={VerifiedGrossMassFieldMeta.WeighingTime}
          fieldConfig={fieldConfig}
          time={value?.WeighingTime}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.WeighingMethodCode,
      { meta: VerifiedGrossMassFieldMeta.WeighingMethodCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={VerifiedGrossMassField.WeighingMethodCode}
          meta={VerifiedGrossMassFieldMeta.WeighingMethodCode}
          fieldConfig={fieldConfig}
          code={value?.WeighingMethodCode}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.WeighingDeviceID,
      { meta: VerifiedGrossMassFieldMeta.WeighingDeviceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={VerifiedGrossMassField.WeighingDeviceID}
          meta={VerifiedGrossMassFieldMeta.WeighingDeviceID}
          fieldConfig={fieldConfig}
          identifier={value?.WeighingDeviceID}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.WeighingDeviceType,
      { meta: VerifiedGrossMassFieldMeta.WeighingDeviceType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={VerifiedGrossMassField.WeighingDeviceType}
          meta={VerifiedGrossMassFieldMeta.WeighingDeviceType}
          fieldConfig={fieldConfig}
          text={value?.WeighingDeviceType}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.GrossMassMeasure,
      { meta: VerifiedGrossMassFieldMeta.GrossMassMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={VerifiedGrossMassField.GrossMassMeasure}
          meta={VerifiedGrossMassFieldMeta.GrossMassMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossMassMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.WeighingParty,
      { meta: VerifiedGrossMassFieldMeta.WeighingParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={VerifiedGrossMassField.WeighingParty}
          meta={VerifiedGrossMassFieldMeta.WeighingParty}
          fieldConfig={fieldConfig}
          party={value?.WeighingParty}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.ShipperParty,
      { meta: VerifiedGrossMassFieldMeta.ShipperParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={VerifiedGrossMassField.ShipperParty}
          meta={VerifiedGrossMassFieldMeta.ShipperParty}
          fieldConfig={fieldConfig}
          party={value?.ShipperParty}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.ResponsibleParty,
      { meta: VerifiedGrossMassFieldMeta.ResponsibleParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={VerifiedGrossMassField.ResponsibleParty}
          meta={VerifiedGrossMassFieldMeta.ResponsibleParty}
          fieldConfig={fieldConfig}
          party={value?.ResponsibleParty}
          renderContext={renderContext}
        />}
    ],

    [
      VerifiedGrossMassField.DocumentReference,
      { meta: VerifiedGrossMassFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={VerifiedGrossMassField.DocumentReference}
          meta={VerifiedGrossMassFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function VerifiedGrossMassDisplay<TFieldMeta>({ meta, fieldConfig, verifiedGrossMass, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    VerifiedGrossMassTypeName,
    meta,
    fieldConfig,
    verifiedGrossMass,
    renderContext,
    VerifiedGrossMassSubElementsMap,
  )
}
