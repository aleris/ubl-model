import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingParty } from  '../../model/cac/ContractingParty'
import { ContractingPartyField, ContractingPartyFieldMeta, ContractingPartyTypeName } from  '../../meta/cac/ContractingPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContractingActivityDisplay } from './ContractingActivityDisplay'
import { ContractingPartyTypeDisplay } from './ContractingPartyTypeDisplay'
import { ContractingRepresentationTypeDisplay } from './ContractingRepresentationTypeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ContractingParty, void>
  contractingParty: ContractingParty[] | undefined
  renderContext: RenderContext
}

export const ContractingPartySubElementsMap: SubElementsTemplatesMap<ContractingPartyField, ContractingParty, void> = new Map([
    [
      ContractingPartyField.UBLExtensions,
      { meta: ContractingPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractingPartyField.UBLExtensions}
          meta={ContractingPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingPartyField.BuyerProfileURI,
      { meta: ContractingPartyFieldMeta.BuyerProfileURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractingPartyField.BuyerProfileURI}
          meta={ContractingPartyFieldMeta.BuyerProfileURI}
          fieldConfig={fieldConfig}
          identifier={value?.BuyerProfileURI}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingPartyField.ContractingPartyType,
      { meta: ContractingPartyFieldMeta.ContractingPartyType,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyTypeDisplay
          key={ContractingPartyField.ContractingPartyType}
          meta={ContractingPartyFieldMeta.ContractingPartyType}
          fieldConfig={fieldConfig}
          contractingPartyType={value?.ContractingPartyType}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingPartyField.ContractingActivity,
      { meta: ContractingPartyFieldMeta.ContractingActivity,
        template: ({value, renderContext, fieldConfig}) => <ContractingActivityDisplay
          key={ContractingPartyField.ContractingActivity}
          meta={ContractingPartyFieldMeta.ContractingActivity}
          fieldConfig={fieldConfig}
          contractingActivity={value?.ContractingActivity}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingPartyField.ContractingRepresentationType,
      { meta: ContractingPartyFieldMeta.ContractingRepresentationType,
        template: ({value, renderContext, fieldConfig}) => <ContractingRepresentationTypeDisplay
          key={ContractingPartyField.ContractingRepresentationType}
          meta={ContractingPartyFieldMeta.ContractingRepresentationType}
          fieldConfig={fieldConfig}
          contractingRepresentationType={value?.ContractingRepresentationType}
          renderContext={renderContext}
        />}
    ],

    [
      ContractingPartyField.Party,
      { meta: ContractingPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ContractingPartyField.Party}
          meta={ContractingPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractingPartyDisplay<TFieldMeta>({ meta, fieldConfig, contractingParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractingPartyTypeName,
    meta,
    fieldConfig,
    contractingParty,
    renderContext,
    ContractingPartySubElementsMap,
  )
}
