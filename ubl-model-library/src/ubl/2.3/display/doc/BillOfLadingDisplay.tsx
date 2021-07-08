import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BillOfLading } from  '../../model/doc/BillOfLading'
import { BillOfLadingField, BillOfLadingFieldMeta, BillOfLadingTypeName } from  '../../meta/doc/BillOfLadingMeta'
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
  fieldConfig?: FieldConfig<BillOfLading, void>
  billOfLading: BillOfLading[] | undefined
  renderContext: RenderContext
}

export const BillOfLadingSubElementsMap: SubElementsTemplatesMap<BillOfLadingField, BillOfLading, void> = new Map([
    [
      BillOfLadingField.UBLExtensions,
      { meta: BillOfLadingFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={BillOfLadingField.UBLExtensions}
          meta={BillOfLadingFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.UBLVersionID,
      { meta: BillOfLadingFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BillOfLadingField.UBLVersionID}
          meta={BillOfLadingFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.CustomizationID,
      { meta: BillOfLadingFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BillOfLadingField.CustomizationID}
          meta={BillOfLadingFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.ProfileID,
      { meta: BillOfLadingFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BillOfLadingField.ProfileID}
          meta={BillOfLadingFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.ProfileExecutionID,
      { meta: BillOfLadingFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BillOfLadingField.ProfileExecutionID}
          meta={BillOfLadingFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.ID,
      { meta: BillOfLadingFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BillOfLadingField.ID}
          meta={BillOfLadingFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.CarrierAssignedID,
      { meta: BillOfLadingFieldMeta.CarrierAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BillOfLadingField.CarrierAssignedID}
          meta={BillOfLadingFieldMeta.CarrierAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.CarrierAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.UUID,
      { meta: BillOfLadingFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BillOfLadingField.UUID}
          meta={BillOfLadingFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.IssueDate,
      { meta: BillOfLadingFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={BillOfLadingField.IssueDate}
          meta={BillOfLadingFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.IssueTime,
      { meta: BillOfLadingFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={BillOfLadingField.IssueTime}
          meta={BillOfLadingFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.Name,
      { meta: BillOfLadingFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={BillOfLadingField.Name}
          meta={BillOfLadingFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.Description,
      { meta: BillOfLadingFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={BillOfLadingField.Description}
          meta={BillOfLadingFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.Note,
      { meta: BillOfLadingFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={BillOfLadingField.Note}
          meta={BillOfLadingFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.DocumentStatusCode,
      { meta: BillOfLadingFieldMeta.DocumentStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={BillOfLadingField.DocumentStatusCode}
          meta={BillOfLadingFieldMeta.DocumentStatusCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.ShippingOrderID,
      { meta: BillOfLadingFieldMeta.ShippingOrderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BillOfLadingField.ShippingOrderID}
          meta={BillOfLadingFieldMeta.ShippingOrderID}
          fieldConfig={fieldConfig}
          identifier={value?.ShippingOrderID}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.ToOrderIndicator,
      { meta: BillOfLadingFieldMeta.ToOrderIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={BillOfLadingField.ToOrderIndicator}
          meta={BillOfLadingFieldMeta.ToOrderIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ToOrderIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.AdValoremIndicator,
      { meta: BillOfLadingFieldMeta.AdValoremIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={BillOfLadingField.AdValoremIndicator}
          meta={BillOfLadingFieldMeta.AdValoremIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.AdValoremIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.DeclaredCarriageValueAmount,
      { meta: BillOfLadingFieldMeta.DeclaredCarriageValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={BillOfLadingField.DeclaredCarriageValueAmount}
          meta={BillOfLadingFieldMeta.DeclaredCarriageValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredCarriageValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.OtherInstruction,
      { meta: BillOfLadingFieldMeta.OtherInstruction,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={BillOfLadingField.OtherInstruction}
          meta={BillOfLadingFieldMeta.OtherInstruction}
          fieldConfig={fieldConfig}
          text={value?.OtherInstruction}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.ConsignorParty,
      { meta: BillOfLadingFieldMeta.ConsignorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={BillOfLadingField.ConsignorParty}
          meta={BillOfLadingFieldMeta.ConsignorParty}
          fieldConfig={fieldConfig}
          party={value?.ConsignorParty}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.CarrierParty,
      { meta: BillOfLadingFieldMeta.CarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={BillOfLadingField.CarrierParty}
          meta={BillOfLadingFieldMeta.CarrierParty}
          fieldConfig={fieldConfig}
          party={value?.CarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.FreightForwarderParty,
      { meta: BillOfLadingFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={BillOfLadingField.FreightForwarderParty}
          meta={BillOfLadingFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.Shipment,
      { meta: BillOfLadingFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={BillOfLadingField.Shipment}
          meta={BillOfLadingFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.DocumentReference,
      { meta: BillOfLadingFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={BillOfLadingField.DocumentReference}
          meta={BillOfLadingFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.ExchangeRate,
      { meta: BillOfLadingFieldMeta.ExchangeRate,
        template: ({value, renderContext, fieldConfig}) => <ExchangeRateDisplay
          key={BillOfLadingField.ExchangeRate}
          meta={BillOfLadingFieldMeta.ExchangeRate}
          fieldConfig={fieldConfig}
          exchangeRate={value?.ExchangeRate}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.DocumentDistribution,
      { meta: BillOfLadingFieldMeta.DocumentDistribution,
        template: ({value, renderContext, fieldConfig}) => <DocumentDistributionDisplay
          key={BillOfLadingField.DocumentDistribution}
          meta={BillOfLadingFieldMeta.DocumentDistribution}
          fieldConfig={fieldConfig}
          documentDistribution={value?.DocumentDistribution}
          renderContext={renderContext}
        />}
    ],

    [
      BillOfLadingField.Signature,
      { meta: BillOfLadingFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={BillOfLadingField.Signature}
          meta={BillOfLadingFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function BillOfLadingDisplay<TFieldMeta>({ meta, fieldConfig, billOfLading, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    BillOfLadingTypeName,
    meta,
    fieldConfig,
    billOfLading,
    renderContext,
    BillOfLadingSubElementsMap,
  )
}
