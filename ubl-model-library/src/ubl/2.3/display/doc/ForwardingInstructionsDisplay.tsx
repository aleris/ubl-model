import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForwardingInstructions } from  '../../model/doc/ForwardingInstructions'
import { ForwardingInstructionsField, ForwardingInstructionsFieldMeta, ForwardingInstructionsTypeName } from  '../../meta/doc/ForwardingInstructionsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentDistributionDisplay } from '../cac/DocumentDistributionDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { ExchangeRateDisplay } from '../cac/ExchangeRateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { ShipmentDisplay } from '../cac/ShipmentDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ForwardingInstructions, void>
  forwardingInstructions: ForwardingInstructions[] | undefined
  renderContext: RenderContext
}

export const ForwardingInstructionsSubElementsMap: SubElementsTemplatesMap<ForwardingInstructionsField, ForwardingInstructions, void> = new Map([
    [
      ForwardingInstructionsField.UBLExtensions,
      { meta: ForwardingInstructionsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ForwardingInstructionsField.UBLExtensions}
          meta={ForwardingInstructionsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.UBLVersionID,
      { meta: ForwardingInstructionsFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForwardingInstructionsField.UBLVersionID}
          meta={ForwardingInstructionsFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.CustomizationID,
      { meta: ForwardingInstructionsFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForwardingInstructionsField.CustomizationID}
          meta={ForwardingInstructionsFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.ProfileID,
      { meta: ForwardingInstructionsFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForwardingInstructionsField.ProfileID}
          meta={ForwardingInstructionsFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.ProfileExecutionID,
      { meta: ForwardingInstructionsFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForwardingInstructionsField.ProfileExecutionID}
          meta={ForwardingInstructionsFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.ID,
      { meta: ForwardingInstructionsFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForwardingInstructionsField.ID}
          meta={ForwardingInstructionsFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.CarrierAssignedID,
      { meta: ForwardingInstructionsFieldMeta.CarrierAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForwardingInstructionsField.CarrierAssignedID}
          meta={ForwardingInstructionsFieldMeta.CarrierAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.CarrierAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.UUID,
      { meta: ForwardingInstructionsFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForwardingInstructionsField.UUID}
          meta={ForwardingInstructionsFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.IssueDate,
      { meta: ForwardingInstructionsFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ForwardingInstructionsField.IssueDate}
          meta={ForwardingInstructionsFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.IssueTime,
      { meta: ForwardingInstructionsFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ForwardingInstructionsField.IssueTime}
          meta={ForwardingInstructionsFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.Name,
      { meta: ForwardingInstructionsFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ForwardingInstructionsField.Name}
          meta={ForwardingInstructionsFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.Description,
      { meta: ForwardingInstructionsFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ForwardingInstructionsField.Description}
          meta={ForwardingInstructionsFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.Note,
      { meta: ForwardingInstructionsFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ForwardingInstructionsField.Note}
          meta={ForwardingInstructionsFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.DocumentStatusCode,
      { meta: ForwardingInstructionsFieldMeta.DocumentStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ForwardingInstructionsField.DocumentStatusCode}
          meta={ForwardingInstructionsFieldMeta.DocumentStatusCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.ShippingOrderID,
      { meta: ForwardingInstructionsFieldMeta.ShippingOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ForwardingInstructionsField.ShippingOrderID}
          meta={ForwardingInstructionsFieldMeta.ShippingOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.ShippingOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.ToOrderIndicator,
      { meta: ForwardingInstructionsFieldMeta.ToOrderIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ForwardingInstructionsField.ToOrderIndicator}
          meta={ForwardingInstructionsFieldMeta.ToOrderIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ToOrderIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.AdValoremIndicator,
      { meta: ForwardingInstructionsFieldMeta.AdValoremIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ForwardingInstructionsField.AdValoremIndicator}
          meta={ForwardingInstructionsFieldMeta.AdValoremIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.AdValoremIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.DeclaredCarriageValueAmount,
      { meta: ForwardingInstructionsFieldMeta.DeclaredCarriageValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ForwardingInstructionsField.DeclaredCarriageValueAmount}
          meta={ForwardingInstructionsFieldMeta.DeclaredCarriageValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredCarriageValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.OtherInstruction,
      { meta: ForwardingInstructionsFieldMeta.OtherInstruction,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ForwardingInstructionsField.OtherInstruction}
          meta={ForwardingInstructionsFieldMeta.OtherInstruction}
          fieldConfig={fieldConfig}
          text={value?.OtherInstruction}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.ConsignorParty,
      { meta: ForwardingInstructionsFieldMeta.ConsignorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ForwardingInstructionsField.ConsignorParty}
          meta={ForwardingInstructionsFieldMeta.ConsignorParty}
          fieldConfig={fieldConfig}
          party={value?.ConsignorParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.CarrierParty,
      { meta: ForwardingInstructionsFieldMeta.CarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ForwardingInstructionsField.CarrierParty}
          meta={ForwardingInstructionsFieldMeta.CarrierParty}
          fieldConfig={fieldConfig}
          party={value?.CarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.FreightForwarderParty,
      { meta: ForwardingInstructionsFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ForwardingInstructionsField.FreightForwarderParty}
          meta={ForwardingInstructionsFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.Shipment,
      { meta: ForwardingInstructionsFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={ForwardingInstructionsField.Shipment}
          meta={ForwardingInstructionsFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.DocumentReference,
      { meta: ForwardingInstructionsFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ForwardingInstructionsField.DocumentReference}
          meta={ForwardingInstructionsFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.ExchangeRate,
      { meta: ForwardingInstructionsFieldMeta.ExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={ForwardingInstructionsField.ExchangeRate}
          meta={ForwardingInstructionsFieldMeta.ExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.ExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.DocumentDistribution,
      { meta: ForwardingInstructionsFieldMeta.DocumentDistribution,
        template: ({value, renderContext, fieldConfig}) => <DocumentDistributionDisplay
          key={ForwardingInstructionsField.DocumentDistribution}
          meta={ForwardingInstructionsFieldMeta.DocumentDistribution}
          fieldConfig={fieldConfig}
          documentDistribution={value?.DocumentDistribution}
          renderContext={renderContext}
        />}
    ],

    [
      ForwardingInstructionsField.Signature,
      { meta: ForwardingInstructionsFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ForwardingInstructionsField.Signature}
          meta={ForwardingInstructionsFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function ForwardingInstructionsDisplay<TFieldMeta>({ meta, fieldConfig, forwardingInstructions, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ForwardingInstructionsTypeName,
    meta,
    fieldConfig,
    forwardingInstructions,
    renderContext,
    ForwardingInstructionsSubElementsMap,
  )
}
