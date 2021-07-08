import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PartyLegalEntity } from  '../../model/cac/PartyLegalEntity'
import { PartyLegalEntityField, PartyLegalEntityFieldMeta, PartyLegalEntityTypeName } from  '../../meta/cac/PartyLegalEntityMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CorporateRegistrationSchemeDisplay } from './CorporateRegistrationSchemeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from './PartyDisplay'
import { ShareholderPartyDisplay } from './ShareholderPartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PartyLegalEntity, void>
  partyLegalEntity: PartyLegalEntity[] | undefined
  renderContext: RenderContext
}

export const PartyLegalEntitySubElementsMap: SubElementsTemplatesMap<PartyLegalEntityField, PartyLegalEntity, void> = new Map([
    [
      PartyLegalEntityField.UBLExtensions,
      { meta: PartyLegalEntityFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PartyLegalEntityField.UBLExtensions}
          meta={PartyLegalEntityFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.RegistrationName,
      { meta: PartyLegalEntityFieldMeta.RegistrationName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PartyLegalEntityField.RegistrationName}
          meta={PartyLegalEntityFieldMeta.RegistrationName}
          fieldConfig={fieldConfig}
          text={value?.RegistrationName}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.CompanyID,
      { meta: PartyLegalEntityFieldMeta.CompanyID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PartyLegalEntityField.CompanyID}
          meta={PartyLegalEntityFieldMeta.CompanyID}
          fieldConfig={fieldConfig}
          identifier={value?.CompanyID}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.RegistrationDate,
      { meta: PartyLegalEntityFieldMeta.RegistrationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PartyLegalEntityField.RegistrationDate}
          meta={PartyLegalEntityFieldMeta.RegistrationDate}
          fieldConfig={fieldConfig}
          date={value?.RegistrationDate}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.RegistrationExpirationDate,
      { meta: PartyLegalEntityFieldMeta.RegistrationExpirationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PartyLegalEntityField.RegistrationExpirationDate}
          meta={PartyLegalEntityFieldMeta.RegistrationExpirationDate}
          fieldConfig={fieldConfig}
          date={value?.RegistrationExpirationDate}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.CompanyLegalFormCode,
      { meta: PartyLegalEntityFieldMeta.CompanyLegalFormCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PartyLegalEntityField.CompanyLegalFormCode}
          meta={PartyLegalEntityFieldMeta.CompanyLegalFormCode}
          fieldConfig={fieldConfig}
          code={value?.CompanyLegalFormCode}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.CompanyLegalForm,
      { meta: PartyLegalEntityFieldMeta.CompanyLegalForm,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PartyLegalEntityField.CompanyLegalForm}
          meta={PartyLegalEntityFieldMeta.CompanyLegalForm}
          fieldConfig={fieldConfig}
          text={value?.CompanyLegalForm}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.SoleProprietorshipIndicator,
      { meta: PartyLegalEntityFieldMeta.SoleProprietorshipIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PartyLegalEntityField.SoleProprietorshipIndicator}
          meta={PartyLegalEntityFieldMeta.SoleProprietorshipIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.SoleProprietorshipIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.CompanyLiquidationStatusCode,
      { meta: PartyLegalEntityFieldMeta.CompanyLiquidationStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PartyLegalEntityField.CompanyLiquidationStatusCode}
          meta={PartyLegalEntityFieldMeta.CompanyLiquidationStatusCode}
          fieldConfig={fieldConfig}
          code={value?.CompanyLiquidationStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.CorporateStockAmount,
      { meta: PartyLegalEntityFieldMeta.CorporateStockAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PartyLegalEntityField.CorporateStockAmount}
          meta={PartyLegalEntityFieldMeta.CorporateStockAmount}
          fieldConfig={fieldConfig}
          amount={value?.CorporateStockAmount}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.FullyPaidSharesIndicator,
      { meta: PartyLegalEntityFieldMeta.FullyPaidSharesIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PartyLegalEntityField.FullyPaidSharesIndicator}
          meta={PartyLegalEntityFieldMeta.FullyPaidSharesIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.FullyPaidSharesIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.RegistrationAddress,
      { meta: PartyLegalEntityFieldMeta.RegistrationAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={PartyLegalEntityField.RegistrationAddress}
          meta={PartyLegalEntityFieldMeta.RegistrationAddress}
          fieldConfig={fieldConfig}
          address={value?.RegistrationAddress}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.CorporateRegistrationScheme,
      { meta: PartyLegalEntityFieldMeta.CorporateRegistrationScheme,
        template: ({value, renderContext, fieldConfig}) => <CorporateRegistrationSchemeDisplay
          key={PartyLegalEntityField.CorporateRegistrationScheme}
          meta={PartyLegalEntityFieldMeta.CorporateRegistrationScheme}
          fieldConfig={fieldConfig}
          corporateRegistrationScheme={value?.CorporateRegistrationScheme}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.HeadOfficeParty,
      { meta: PartyLegalEntityFieldMeta.HeadOfficeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PartyLegalEntityField.HeadOfficeParty}
          meta={PartyLegalEntityFieldMeta.HeadOfficeParty}
          fieldConfig={fieldConfig}
          party={value?.HeadOfficeParty}
          renderContext={renderContext}
        />}
    ],

    [
      PartyLegalEntityField.ShareholderParty,
      { meta: PartyLegalEntityFieldMeta.ShareholderParty,
        template: ({value, renderContext, fieldConfig}) => <ShareholderPartyDisplay
          key={PartyLegalEntityField.ShareholderParty}
          meta={PartyLegalEntityFieldMeta.ShareholderParty}
          fieldConfig={fieldConfig}
          shareholderParty={value?.ShareholderParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function PartyLegalEntityDisplay<TFieldMeta>({ meta, fieldConfig, partyLegalEntity, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PartyLegalEntityTypeName,
    meta,
    fieldConfig,
    partyLegalEntity,
    renderContext,
    PartyLegalEntitySubElementsMap,
  )
}
