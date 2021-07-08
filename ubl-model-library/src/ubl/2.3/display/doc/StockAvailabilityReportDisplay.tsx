import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { StockAvailabilityReport } from  '../../model/doc/StockAvailabilityReport'
import { StockAvailabilityReportField, StockAvailabilityReportFieldMeta, StockAvailabilityReportTypeName } from  '../../meta/doc/StockAvailabilityReportMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { StockAvailabilityReportLineDisplay } from '../cac/StockAvailabilityReportLineDisplay'
import { SupplierPartyDisplay } from '../cac/SupplierPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<StockAvailabilityReport, void>
  stockAvailabilityReport: StockAvailabilityReport[] | undefined
  renderContext: RenderContext
}

export const StockAvailabilityReportSubElementsMap: SubElementsTemplatesMap<StockAvailabilityReportField, StockAvailabilityReport, void> = new Map([
    [
      StockAvailabilityReportField.UBLExtensions,
      { meta: StockAvailabilityReportFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={StockAvailabilityReportField.UBLExtensions}
          meta={StockAvailabilityReportFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.UBLVersionID,
      { meta: StockAvailabilityReportFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StockAvailabilityReportField.UBLVersionID}
          meta={StockAvailabilityReportFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.CustomizationID,
      { meta: StockAvailabilityReportFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StockAvailabilityReportField.CustomizationID}
          meta={StockAvailabilityReportFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.ProfileID,
      { meta: StockAvailabilityReportFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StockAvailabilityReportField.ProfileID}
          meta={StockAvailabilityReportFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.ProfileExecutionID,
      { meta: StockAvailabilityReportFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StockAvailabilityReportField.ProfileExecutionID}
          meta={StockAvailabilityReportFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.ID,
      { meta: StockAvailabilityReportFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StockAvailabilityReportField.ID}
          meta={StockAvailabilityReportFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.CopyIndicator,
      { meta: StockAvailabilityReportFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={StockAvailabilityReportField.CopyIndicator}
          meta={StockAvailabilityReportFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.UUID,
      { meta: StockAvailabilityReportFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StockAvailabilityReportField.UUID}
          meta={StockAvailabilityReportFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.IssueDate,
      { meta: StockAvailabilityReportFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={StockAvailabilityReportField.IssueDate}
          meta={StockAvailabilityReportFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.IssueTime,
      { meta: StockAvailabilityReportFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={StockAvailabilityReportField.IssueTime}
          meta={StockAvailabilityReportFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.Note,
      { meta: StockAvailabilityReportFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={StockAvailabilityReportField.Note}
          meta={StockAvailabilityReportFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.DocumentCurrencyCode,
      { meta: StockAvailabilityReportFieldMeta.DocumentCurrencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={StockAvailabilityReportField.DocumentCurrencyCode}
          meta={StockAvailabilityReportFieldMeta.DocumentCurrencyCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentCurrencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.InventoryPeriod,
      { meta: StockAvailabilityReportFieldMeta.InventoryPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={StockAvailabilityReportField.InventoryPeriod}
          meta={StockAvailabilityReportFieldMeta.InventoryPeriod}
          fieldConfig={fieldConfig}
          period={value?.InventoryPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.DocumentReference,
      { meta: StockAvailabilityReportFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={StockAvailabilityReportField.DocumentReference}
          meta={StockAvailabilityReportFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.Signature,
      { meta: StockAvailabilityReportFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={StockAvailabilityReportField.Signature}
          meta={StockAvailabilityReportFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.SellerSupplierParty,
      { meta: StockAvailabilityReportFieldMeta.SellerSupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={StockAvailabilityReportField.SellerSupplierParty}
          meta={StockAvailabilityReportFieldMeta.SellerSupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SellerSupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.RetailerCustomerParty,
      { meta: StockAvailabilityReportFieldMeta.RetailerCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={StockAvailabilityReportField.RetailerCustomerParty}
          meta={StockAvailabilityReportFieldMeta.RetailerCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.RetailerCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.InventoryReportingParty,
      { meta: StockAvailabilityReportFieldMeta.InventoryReportingParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={StockAvailabilityReportField.InventoryReportingParty}
          meta={StockAvailabilityReportFieldMeta.InventoryReportingParty}
          fieldConfig={fieldConfig}
          party={value?.InventoryReportingParty}
          renderContext={renderContext}
        />}
    ],

    [
      StockAvailabilityReportField.StockAvailabilityReportLine,
      { meta: StockAvailabilityReportFieldMeta.StockAvailabilityReportLine,
        template: ({value, renderContext, fieldConfig}) => <StockAvailabilityReportLineDisplay
          key={StockAvailabilityReportField.StockAvailabilityReportLine}
          meta={StockAvailabilityReportFieldMeta.StockAvailabilityReportLine}
          fieldConfig={fieldConfig}
          stockAvailabilityReportLine={value?.StockAvailabilityReportLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function StockAvailabilityReportDisplay<TFieldMeta>({ meta, fieldConfig, stockAvailabilityReport, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    StockAvailabilityReportTypeName,
    meta,
    fieldConfig,
    stockAvailabilityReport,
    renderContext,
    StockAvailabilityReportSubElementsMap,
  )
}
