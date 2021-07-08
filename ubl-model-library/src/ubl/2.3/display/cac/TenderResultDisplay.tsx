import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderResult } from  '../../model/cac/TenderResult'
import { TenderResultField, TenderResultFieldMeta, TenderResultTypeName } from  '../../meta/cac/TenderResultMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractDisplay } from './ContractDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { SubcontractTermsDisplay } from './SubcontractTermsDisplay'
import { TenderedProjectDisplay } from './TenderedProjectDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'
import { WinningPartyDisplay } from './WinningPartyDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderResult, void>
  tenderResult: TenderResult[] | undefined
  renderContext: RenderContext
}

export const TenderResultSubElementsMap: SubElementsTemplatesMap<TenderResultField, TenderResult, void> = new Map([
    [
      TenderResultField.UBLExtensions,
      { meta: TenderResultFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderResultField.UBLExtensions}
          meta={TenderResultFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.AwardID,
      { meta: TenderResultFieldMeta.AwardID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderResultField.AwardID}
          meta={TenderResultFieldMeta.AwardID}
          fieldConfig={fieldConfig}
          identifier={value?.AwardID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.TenderResultCode,
      { meta: TenderResultFieldMeta.TenderResultCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderResultField.TenderResultCode}
          meta={TenderResultFieldMeta.TenderResultCode}
          fieldConfig={fieldConfig}
          code={value?.TenderResultCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.Description,
      { meta: TenderResultFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderResultField.Description}
          meta={TenderResultFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.AdvertisementAmount,
      { meta: TenderResultFieldMeta.AdvertisementAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderResultField.AdvertisementAmount}
          meta={TenderResultFieldMeta.AdvertisementAmount}
          fieldConfig={fieldConfig}
          amount={value?.AdvertisementAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.AwardDate,
      { meta: TenderResultFieldMeta.AwardDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderResultField.AwardDate}
          meta={TenderResultFieldMeta.AwardDate}
          fieldConfig={fieldConfig}
          date={value?.AwardDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.AwardTime,
      { meta: TenderResultFieldMeta.AwardTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TenderResultField.AwardTime}
          meta={TenderResultFieldMeta.AwardTime}
          fieldConfig={fieldConfig}
          time={value?.AwardTime}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.ReceivedTenderQuantity,
      { meta: TenderResultFieldMeta.ReceivedTenderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderResultField.ReceivedTenderQuantity}
          meta={TenderResultFieldMeta.ReceivedTenderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ReceivedTenderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.LowerTenderAmount,
      { meta: TenderResultFieldMeta.LowerTenderAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderResultField.LowerTenderAmount}
          meta={TenderResultFieldMeta.LowerTenderAmount}
          fieldConfig={fieldConfig}
          amount={value?.LowerTenderAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.HigherTenderAmount,
      { meta: TenderResultFieldMeta.HigherTenderAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderResultField.HigherTenderAmount}
          meta={TenderResultFieldMeta.HigherTenderAmount}
          fieldConfig={fieldConfig}
          amount={value?.HigherTenderAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.StartDate,
      { meta: TenderResultFieldMeta.StartDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderResultField.StartDate}
          meta={TenderResultFieldMeta.StartDate}
          fieldConfig={fieldConfig}
          date={value?.StartDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.ReceivedElectronicTenderQuantity,
      { meta: TenderResultFieldMeta.ReceivedElectronicTenderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderResultField.ReceivedElectronicTenderQuantity}
          meta={TenderResultFieldMeta.ReceivedElectronicTenderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ReceivedElectronicTenderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.ReceivedForeignTenderQuantity,
      { meta: TenderResultFieldMeta.ReceivedForeignTenderQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderResultField.ReceivedForeignTenderQuantity}
          meta={TenderResultFieldMeta.ReceivedForeignTenderQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ReceivedForeignTenderQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.Contract,
      { meta: TenderResultFieldMeta.Contract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={TenderResultField.Contract}
          meta={TenderResultFieldMeta.Contract}
          fieldConfig={fieldConfig}
          contract={value?.Contract}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.AwardedTenderedProject,
      { meta: TenderResultFieldMeta.AwardedTenderedProject,
        template: ({value, renderContext, fieldConfig}) => <TenderedProjectDisplay
          key={TenderResultField.AwardedTenderedProject}
          meta={TenderResultFieldMeta.AwardedTenderedProject}
          fieldConfig={fieldConfig}
          tenderedProject={value?.AwardedTenderedProject}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.ContractFormalizationPeriod,
      { meta: TenderResultFieldMeta.ContractFormalizationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderResultField.ContractFormalizationPeriod}
          meta={TenderResultFieldMeta.ContractFormalizationPeriod}
          fieldConfig={fieldConfig}
          period={value?.ContractFormalizationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.SubcontractTerms,
      { meta: TenderResultFieldMeta.SubcontractTerms,
        template: ({value, renderContext, fieldConfig}) => <SubcontractTermsDisplay
          key={TenderResultField.SubcontractTerms}
          meta={TenderResultFieldMeta.SubcontractTerms}
          fieldConfig={fieldConfig}
          subcontractTerms={value?.SubcontractTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TenderResultField.WinningParty,
      { meta: TenderResultFieldMeta.WinningParty,
        template: ({value, renderContext, fieldConfig}) => <WinningPartyDisplay
          key={TenderResultField.WinningParty}
          meta={TenderResultFieldMeta.WinningParty}
          fieldConfig={fieldConfig}
          winningParty={value?.WinningParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderResultDisplay<TFieldMeta>({ meta, fieldConfig, tenderResult, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderResultTypeName,
    meta,
    fieldConfig,
    tenderResult,
    renderContext,
    TenderResultSubElementsMap,
  )
}
