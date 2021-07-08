import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportProgressStatus } from  '../../model/doc/TransportProgressStatus'
import { TransportProgressStatusField, TransportProgressStatusFieldMeta, TransportProgressStatusTypeName } from  '../../meta/doc/TransportProgressStatusMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportMeansDisplay } from '../cac/TransportMeansDisplay'
import { TransportScheduleDisplay } from '../cac/TransportScheduleDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportProgressStatus, void>
  transportProgressStatus: TransportProgressStatus[] | undefined
  renderContext: RenderContext
}

export const TransportProgressStatusSubElementsMap: SubElementsTemplatesMap<TransportProgressStatusField, TransportProgressStatus, void> = new Map([
    [
      TransportProgressStatusField.UBLExtensions,
      { meta: TransportProgressStatusFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportProgressStatusField.UBLExtensions}
          meta={TransportProgressStatusFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.UBLVersionID,
      { meta: TransportProgressStatusFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusField.UBLVersionID}
          meta={TransportProgressStatusFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.CustomizationID,
      { meta: TransportProgressStatusFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusField.CustomizationID}
          meta={TransportProgressStatusFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.ProfileID,
      { meta: TransportProgressStatusFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusField.ProfileID}
          meta={TransportProgressStatusFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.ProfileExecutionID,
      { meta: TransportProgressStatusFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusField.ProfileExecutionID}
          meta={TransportProgressStatusFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.ID,
      { meta: TransportProgressStatusFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusField.ID}
          meta={TransportProgressStatusFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.CopyIndicator,
      { meta: TransportProgressStatusFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportProgressStatusField.CopyIndicator}
          meta={TransportProgressStatusFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.UUID,
      { meta: TransportProgressStatusFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusField.UUID}
          meta={TransportProgressStatusFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.IssueDate,
      { meta: TransportProgressStatusFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportProgressStatusField.IssueDate}
          meta={TransportProgressStatusFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.IssueTime,
      { meta: TransportProgressStatusFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportProgressStatusField.IssueTime}
          meta={TransportProgressStatusFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.Note,
      { meta: TransportProgressStatusFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportProgressStatusField.Note}
          meta={TransportProgressStatusFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.StatusAvailableIndicator,
      { meta: TransportProgressStatusFieldMeta.StatusAvailableIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportProgressStatusField.StatusAvailableIndicator}
          meta={TransportProgressStatusFieldMeta.StatusAvailableIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.StatusAvailableIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.Signature,
      { meta: TransportProgressStatusFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TransportProgressStatusField.Signature}
          meta={TransportProgressStatusFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.SenderParty,
      { meta: TransportProgressStatusFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportProgressStatusField.SenderParty}
          meta={TransportProgressStatusFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.ReceiverParty,
      { meta: TransportProgressStatusFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportProgressStatusField.ReceiverParty}
          meta={TransportProgressStatusFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.SourceIssuerParty,
      { meta: TransportProgressStatusFieldMeta.SourceIssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportProgressStatusField.SourceIssuerParty}
          meta={TransportProgressStatusFieldMeta.SourceIssuerParty}
          fieldConfig={fieldConfig}
          party={value?.SourceIssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.TransportProgressStatusRequestDocumentReference,
      { meta: TransportProgressStatusFieldMeta.TransportProgressStatusRequestDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportProgressStatusField.TransportProgressStatusRequestDocumentReference}
          meta={TransportProgressStatusFieldMeta.TransportProgressStatusRequestDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportProgressStatusRequestDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.TransportMeans,
      { meta: TransportProgressStatusFieldMeta.TransportMeans,
        template: ({value, renderContext, fieldConfig}) => <TransportMeansDisplay
          key={TransportProgressStatusField.TransportMeans}
          meta={TransportProgressStatusFieldMeta.TransportMeans}
          fieldConfig={fieldConfig}
          transportMeans={value?.TransportMeans}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusField.TransportSchedule,
      { meta: TransportProgressStatusFieldMeta.TransportSchedule,
        template: ({value, renderContext, fieldConfig}) => <TransportScheduleDisplay
          key={TransportProgressStatusField.TransportSchedule}
          meta={TransportProgressStatusFieldMeta.TransportSchedule}
          fieldConfig={fieldConfig}
          transportSchedule={value?.TransportSchedule}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportProgressStatusDisplay<TFieldMeta>({ meta, fieldConfig, transportProgressStatus, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportProgressStatusTypeName,
    meta,
    fieldConfig,
    transportProgressStatus,
    renderContext,
    TransportProgressStatusSubElementsMap,
  )
}
