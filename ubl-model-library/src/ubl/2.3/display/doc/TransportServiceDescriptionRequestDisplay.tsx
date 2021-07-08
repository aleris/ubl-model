import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportServiceDescriptionRequest } from  '../../model/doc/TransportServiceDescriptionRequest'
import { TransportServiceDescriptionRequestField, TransportServiceDescriptionRequestFieldMeta, TransportServiceDescriptionRequestTypeName } from  '../../meta/doc/TransportServiceDescriptionRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportationServiceDisplay } from '../cac/TransportationServiceDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportServiceDescriptionRequest, void>
  transportServiceDescriptionRequest: TransportServiceDescriptionRequest[] | undefined
  renderContext: RenderContext
}

export const TransportServiceDescriptionRequestSubElementsMap: SubElementsTemplatesMap<TransportServiceDescriptionRequestField, TransportServiceDescriptionRequest, void> = new Map([
    [
      TransportServiceDescriptionRequestField.UBLExtensions,
      { meta: TransportServiceDescriptionRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportServiceDescriptionRequestField.UBLExtensions}
          meta={TransportServiceDescriptionRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.UBLVersionID,
      { meta: TransportServiceDescriptionRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionRequestField.UBLVersionID}
          meta={TransportServiceDescriptionRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.CustomizationID,
      { meta: TransportServiceDescriptionRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionRequestField.CustomizationID}
          meta={TransportServiceDescriptionRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.ProfileID,
      { meta: TransportServiceDescriptionRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionRequestField.ProfileID}
          meta={TransportServiceDescriptionRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.ProfileExecutionID,
      { meta: TransportServiceDescriptionRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionRequestField.ProfileExecutionID}
          meta={TransportServiceDescriptionRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.ID,
      { meta: TransportServiceDescriptionRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionRequestField.ID}
          meta={TransportServiceDescriptionRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.CopyIndicator,
      { meta: TransportServiceDescriptionRequestFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportServiceDescriptionRequestField.CopyIndicator}
          meta={TransportServiceDescriptionRequestFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.UUID,
      { meta: TransportServiceDescriptionRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportServiceDescriptionRequestField.UUID}
          meta={TransportServiceDescriptionRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.IssueDate,
      { meta: TransportServiceDescriptionRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportServiceDescriptionRequestField.IssueDate}
          meta={TransportServiceDescriptionRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.IssueTime,
      { meta: TransportServiceDescriptionRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportServiceDescriptionRequestField.IssueTime}
          meta={TransportServiceDescriptionRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.Note,
      { meta: TransportServiceDescriptionRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportServiceDescriptionRequestField.Note}
          meta={TransportServiceDescriptionRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.ServiceInformationPreferenceCode,
      { meta: TransportServiceDescriptionRequestFieldMeta.ServiceInformationPreferenceCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportServiceDescriptionRequestField.ServiceInformationPreferenceCode}
          meta={TransportServiceDescriptionRequestFieldMeta.ServiceInformationPreferenceCode}
          fieldConfig={fieldConfig}
          code={value?.ServiceInformationPreferenceCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.Signature,
      { meta: TransportServiceDescriptionRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TransportServiceDescriptionRequestField.Signature}
          meta={TransportServiceDescriptionRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.SenderParty,
      { meta: TransportServiceDescriptionRequestFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportServiceDescriptionRequestField.SenderParty}
          meta={TransportServiceDescriptionRequestFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.ReceiverParty,
      { meta: TransportServiceDescriptionRequestFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportServiceDescriptionRequestField.ReceiverParty}
          meta={TransportServiceDescriptionRequestFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.TransportServiceProviderParty,
      { meta: TransportServiceDescriptionRequestFieldMeta.TransportServiceProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportServiceDescriptionRequestField.TransportServiceProviderParty}
          meta={TransportServiceDescriptionRequestFieldMeta.TransportServiceProviderParty}
          fieldConfig={fieldConfig}
          party={value?.TransportServiceProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportServiceDescriptionRequestField.TransportationService,
      { meta: TransportServiceDescriptionRequestFieldMeta.TransportationService,
        template: ({value, renderContext, fieldConfig}) => <TransportationServiceDisplay
          key={TransportServiceDescriptionRequestField.TransportationService}
          meta={TransportServiceDescriptionRequestFieldMeta.TransportationService}
          fieldConfig={fieldConfig}
          transportationService={value?.TransportationService}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportServiceDescriptionRequestDisplay<TFieldMeta>({ meta, fieldConfig, transportServiceDescriptionRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportServiceDescriptionRequestTypeName,
    meta,
    fieldConfig,
    transportServiceDescriptionRequest,
    renderContext,
    TransportServiceDescriptionRequestSubElementsMap,
  )
}
