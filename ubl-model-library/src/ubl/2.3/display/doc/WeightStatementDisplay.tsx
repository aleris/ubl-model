import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { WeightStatement } from  '../../model/doc/WeightStatement'
import { WeightStatementField, WeightStatementFieldMeta, WeightStatementTypeName } from  '../../meta/doc/WeightStatementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { ShipmentDisplay } from '../cac/ShipmentDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<WeightStatement, void>
  weightStatement: WeightStatement[] | undefined
  renderContext: RenderContext
}

export const WeightStatementSubElementsMap: SubElementsTemplatesMap<WeightStatementField, WeightStatement, void> = new Map([
    [
      WeightStatementField.UBLExtensions,
      { meta: WeightStatementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={WeightStatementField.UBLExtensions}
          meta={WeightStatementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.UBLVersionID,
      { meta: WeightStatementFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WeightStatementField.UBLVersionID}
          meta={WeightStatementFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.CustomizationID,
      { meta: WeightStatementFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WeightStatementField.CustomizationID}
          meta={WeightStatementFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.ProfileID,
      { meta: WeightStatementFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WeightStatementField.ProfileID}
          meta={WeightStatementFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.ProfileExecutionID,
      { meta: WeightStatementFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WeightStatementField.ProfileExecutionID}
          meta={WeightStatementFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.ID,
      { meta: WeightStatementFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WeightStatementField.ID}
          meta={WeightStatementFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.UUID,
      { meta: WeightStatementFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WeightStatementField.UUID}
          meta={WeightStatementFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.IssueDate,
      { meta: WeightStatementFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={WeightStatementField.IssueDate}
          meta={WeightStatementFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.IssueTime,
      { meta: WeightStatementFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={WeightStatementField.IssueTime}
          meta={WeightStatementFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.WeightStatementTypeCode,
      { meta: WeightStatementFieldMeta.WeightStatementTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={WeightStatementField.WeightStatementTypeCode}
          meta={WeightStatementFieldMeta.WeightStatementTypeCode}
          fieldConfig={fieldConfig}
          code={value?.WeightStatementTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.Signature,
      { meta: WeightStatementFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={WeightStatementField.Signature}
          meta={WeightStatementFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.SenderParty,
      { meta: WeightStatementFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={WeightStatementField.SenderParty}
          meta={WeightStatementFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.ReceiverParty,
      { meta: WeightStatementFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={WeightStatementField.ReceiverParty}
          meta={WeightStatementFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.WeighingParty,
      { meta: WeightStatementFieldMeta.WeighingParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={WeightStatementField.WeighingParty}
          meta={WeightStatementFieldMeta.WeighingParty}
          fieldConfig={fieldConfig}
          party={value?.WeighingParty}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.ShipperParty,
      { meta: WeightStatementFieldMeta.ShipperParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={WeightStatementField.ShipperParty}
          meta={WeightStatementFieldMeta.ShipperParty}
          fieldConfig={fieldConfig}
          party={value?.ShipperParty}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.ResponsibleParty,
      { meta: WeightStatementFieldMeta.ResponsibleParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={WeightStatementField.ResponsibleParty}
          meta={WeightStatementFieldMeta.ResponsibleParty}
          fieldConfig={fieldConfig}
          party={value?.ResponsibleParty}
          renderContext={renderContext}
        />}
    ],

    [
      WeightStatementField.Shipment,
      { meta: WeightStatementFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={WeightStatementField.Shipment}
          meta={WeightStatementFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ]
]) 

export function WeightStatementDisplay<TFieldMeta>({ meta, fieldConfig, weightStatement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    WeightStatementTypeName,
    meta,
    fieldConfig,
    weightStatement,
    renderContext,
    WeightStatementSubElementsMap,
  )
}
