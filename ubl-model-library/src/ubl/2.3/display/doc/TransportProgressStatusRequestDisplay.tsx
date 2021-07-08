import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportProgressStatusRequest } from  '../../model/doc/TransportProgressStatusRequest'
import { TransportProgressStatusRequestField, TransportProgressStatusRequestFieldMeta, TransportProgressStatusRequestTypeName } from  '../../meta/doc/TransportProgressStatusRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LocationDisplay } from '../cac/LocationDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportMeansDisplay } from '../cac/TransportMeansDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportProgressStatusRequest, void>
  transportProgressStatusRequest: TransportProgressStatusRequest[] | undefined
  renderContext: RenderContext
}

export const TransportProgressStatusRequestSubElementsMap: SubElementsTemplatesMap<TransportProgressStatusRequestField, TransportProgressStatusRequest, void> = new Map([
    [
      TransportProgressStatusRequestField.UBLExtensions,
      { meta: TransportProgressStatusRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportProgressStatusRequestField.UBLExtensions}
          meta={TransportProgressStatusRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.UBLVersionID,
      { meta: TransportProgressStatusRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusRequestField.UBLVersionID}
          meta={TransportProgressStatusRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.CustomizationID,
      { meta: TransportProgressStatusRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusRequestField.CustomizationID}
          meta={TransportProgressStatusRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.ProfileID,
      { meta: TransportProgressStatusRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusRequestField.ProfileID}
          meta={TransportProgressStatusRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.ProfileExecutionID,
      { meta: TransportProgressStatusRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusRequestField.ProfileExecutionID}
          meta={TransportProgressStatusRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.ID,
      { meta: TransportProgressStatusRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusRequestField.ID}
          meta={TransportProgressStatusRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.CopyIndicator,
      { meta: TransportProgressStatusRequestFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportProgressStatusRequestField.CopyIndicator}
          meta={TransportProgressStatusRequestFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.UUID,
      { meta: TransportProgressStatusRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportProgressStatusRequestField.UUID}
          meta={TransportProgressStatusRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.IssueDate,
      { meta: TransportProgressStatusRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportProgressStatusRequestField.IssueDate}
          meta={TransportProgressStatusRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.IssueTime,
      { meta: TransportProgressStatusRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportProgressStatusRequestField.IssueTime}
          meta={TransportProgressStatusRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.Note,
      { meta: TransportProgressStatusRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportProgressStatusRequestField.Note}
          meta={TransportProgressStatusRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.Signature,
      { meta: TransportProgressStatusRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TransportProgressStatusRequestField.Signature}
          meta={TransportProgressStatusRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.SenderParty,
      { meta: TransportProgressStatusRequestFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportProgressStatusRequestField.SenderParty}
          meta={TransportProgressStatusRequestFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.ReceiverParty,
      { meta: TransportProgressStatusRequestFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportProgressStatusRequestField.ReceiverParty}
          meta={TransportProgressStatusRequestFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.TransportMeans,
      { meta: TransportProgressStatusRequestFieldMeta.TransportMeans,
        template: ({value, renderContext, fieldConfig}) => <TransportMeansDisplay
          key={TransportProgressStatusRequestField.TransportMeans}
          meta={TransportProgressStatusRequestFieldMeta.TransportMeans}
          fieldConfig={fieldConfig}
          transportMeans={value?.TransportMeans}
          renderContext={renderContext}
        />}
    ],

    [
      TransportProgressStatusRequestField.StatusLocation,
      { meta: TransportProgressStatusRequestFieldMeta.StatusLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportProgressStatusRequestField.StatusLocation}
          meta={TransportProgressStatusRequestFieldMeta.StatusLocation}
          fieldConfig={fieldConfig}
          location={value?.StatusLocation}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportProgressStatusRequestDisplay<TFieldMeta>({ meta, fieldConfig, transportProgressStatusRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportProgressStatusRequestTypeName,
    meta,
    fieldConfig,
    transportProgressStatusRequest,
    renderContext,
    TransportProgressStatusRequestSubElementsMap,
  )
}
