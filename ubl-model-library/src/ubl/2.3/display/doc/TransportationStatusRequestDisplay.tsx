import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportationStatusRequest } from  '../../model/doc/TransportationStatusRequest'
import { TransportationStatusRequestField, TransportationStatusRequestFieldMeta, TransportationStatusRequestTypeName } from  '../../meta/doc/TransportationStatusRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ConsignmentDisplay } from '../cac/ConsignmentDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from '../cac/LocationDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportationStatusRequest, void>
  transportationStatusRequest: TransportationStatusRequest[] | undefined
  renderContext: RenderContext
}

export const TransportationStatusRequestSubElementsMap: SubElementsTemplatesMap<TransportationStatusRequestField, TransportationStatusRequest, void> = new Map([
    [
      TransportationStatusRequestField.UBLExtensions,
      { meta: TransportationStatusRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportationStatusRequestField.UBLExtensions}
          meta={TransportationStatusRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.UBLVersionID,
      { meta: TransportationStatusRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusRequestField.UBLVersionID}
          meta={TransportationStatusRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.CustomizationID,
      { meta: TransportationStatusRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusRequestField.CustomizationID}
          meta={TransportationStatusRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.ProfileID,
      { meta: TransportationStatusRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusRequestField.ProfileID}
          meta={TransportationStatusRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.ProfileExecutionID,
      { meta: TransportationStatusRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusRequestField.ProfileExecutionID}
          meta={TransportationStatusRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.ID,
      { meta: TransportationStatusRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusRequestField.ID}
          meta={TransportationStatusRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.CarrierAssignedID,
      { meta: TransportationStatusRequestFieldMeta.CarrierAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusRequestField.CarrierAssignedID}
          meta={TransportationStatusRequestFieldMeta.CarrierAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.CarrierAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.UUID,
      { meta: TransportationStatusRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusRequestField.UUID}
          meta={TransportationStatusRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.IssueDate,
      { meta: TransportationStatusRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportationStatusRequestField.IssueDate}
          meta={TransportationStatusRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.IssueTime,
      { meta: TransportationStatusRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportationStatusRequestField.IssueTime}
          meta={TransportationStatusRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.Name,
      { meta: TransportationStatusRequestFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationStatusRequestField.Name}
          meta={TransportationStatusRequestFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.Description,
      { meta: TransportationStatusRequestFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationStatusRequestField.Description}
          meta={TransportationStatusRequestFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.Note,
      { meta: TransportationStatusRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationStatusRequestField.Note}
          meta={TransportationStatusRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.ShippingOrderID,
      { meta: TransportationStatusRequestFieldMeta.ShippingOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportationStatusRequestField.ShippingOrderID}
          meta={TransportationStatusRequestFieldMeta.ShippingOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.ShippingOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.OtherInstruction,
      { meta: TransportationStatusRequestFieldMeta.OtherInstruction,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportationStatusRequestField.OtherInstruction}
          meta={TransportationStatusRequestFieldMeta.OtherInstruction}
          fieldConfig={fieldConfig}
          text={value?.OtherInstruction}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.TransportationStatusTypeCode,
      { meta: TransportationStatusRequestFieldMeta.TransportationStatusTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportationStatusRequestField.TransportationStatusTypeCode}
          meta={TransportationStatusRequestFieldMeta.TransportationStatusTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TransportationStatusTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.SenderParty,
      { meta: TransportationStatusRequestFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportationStatusRequestField.SenderParty}
          meta={TransportationStatusRequestFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.ReceiverParty,
      { meta: TransportationStatusRequestFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportationStatusRequestField.ReceiverParty}
          meta={TransportationStatusRequestFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.TransportExecutionPlanDocumentReference,
      { meta: TransportationStatusRequestFieldMeta.TransportExecutionPlanDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportationStatusRequestField.TransportExecutionPlanDocumentReference}
          meta={TransportationStatusRequestFieldMeta.TransportExecutionPlanDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TransportExecutionPlanDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.Consignment,
      { meta: TransportationStatusRequestFieldMeta.Consignment,
        template: ({value, renderContext, fieldConfig}) => <ConsignmentDisplay
          key={TransportationStatusRequestField.Consignment}
          meta={TransportationStatusRequestFieldMeta.Consignment}
          fieldConfig={fieldConfig}
          consignment={value?.Consignment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.DocumentReference,
      { meta: TransportationStatusRequestFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportationStatusRequestField.DocumentReference}
          meta={TransportationStatusRequestFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.Signature,
      { meta: TransportationStatusRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TransportationStatusRequestField.Signature}
          meta={TransportationStatusRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.RequestedStatusLocation,
      { meta: TransportationStatusRequestFieldMeta.RequestedStatusLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportationStatusRequestField.RequestedStatusLocation}
          meta={TransportationStatusRequestFieldMeta.RequestedStatusLocation}
          fieldConfig={fieldConfig}
          location={value?.RequestedStatusLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportationStatusRequestField.RequestedStatusPeriod,
      { meta: TransportationStatusRequestFieldMeta.RequestedStatusPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportationStatusRequestField.RequestedStatusPeriod}
          meta={TransportationStatusRequestFieldMeta.RequestedStatusPeriod}
          fieldConfig={fieldConfig}
          period={value?.RequestedStatusPeriod}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportationStatusRequestDisplay<TFieldMeta>({ meta, fieldConfig, transportationStatusRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportationStatusRequestTypeName,
    meta,
    fieldConfig,
    transportationStatusRequest,
    renderContext,
    TransportationStatusRequestSubElementsMap,
  )
}
