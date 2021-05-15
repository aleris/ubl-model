import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PartyLegalEntity } from  '../../model/cac/PartyLegalEntity'
import { PartyLegalEntityFieldMeta } from  '../../meta/cac/PartyLegalEntityMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CorporateRegistrationSchemeDisplay from './CorporateRegistrationSchemeDisplay'
import { CorporateRegistrationScheme } from '../../model/cac/CorporateRegistrationScheme'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import ShareholderPartyDisplay from './ShareholderPartyDisplay'
import { ShareholderParty } from '../../model/cac/ShareholderParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PartyLegalEntity | undefined
  meta: FieldMeta<T>
}

export default function PartyLegalEntityDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PartyLegalEntity">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PartyLegalEntityFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Registration Name"
            value={value.RegistrationName?.[0]}
            meta={PartyLegalEntityFieldMeta.RegistrationName}
          />

          <IdentifierDisplay
            label="Company Identifier"
            value={value.CompanyID?.[0]}
            meta={PartyLegalEntityFieldMeta.CompanyID}
          />

          <DateDisplay
            label="Registration Date"
            value={value.RegistrationDate?.[0]}
            meta={PartyLegalEntityFieldMeta.RegistrationDate}
          />

          <DateDisplay
            label="Registration Expiration Date"
            value={value.RegistrationExpirationDate?.[0]}
            meta={PartyLegalEntityFieldMeta.RegistrationExpirationDate}
          />

          <CodeDisplay
            label="Company Legal Form Code"
            value={value.CompanyLegalFormCode?.[0]}
            meta={PartyLegalEntityFieldMeta.CompanyLegalFormCode}
          />

          <TextDisplay
            label="Company Legal Form"
            value={value.CompanyLegalForm?.[0]}
            meta={PartyLegalEntityFieldMeta.CompanyLegalForm}
          />

          <IndicatorDisplay
            label="Sole Proprietorship Indicator"
            value={value.SoleProprietorshipIndicator?.[0]}
            meta={PartyLegalEntityFieldMeta.SoleProprietorshipIndicator}
          />

          <CodeDisplay
            label="Company Liquidation Status Code"
            value={value.CompanyLiquidationStatusCode?.[0]}
            meta={PartyLegalEntityFieldMeta.CompanyLiquidationStatusCode}
          />

          <AmountDisplay
            label="Corporate Stock Amount"
            value={value.CorporateStockAmount?.[0]}
            meta={PartyLegalEntityFieldMeta.CorporateStockAmount}
          />

          <IndicatorDisplay
            label="Fully Paid Shares Indicator"
            value={value.FullyPaidSharesIndicator?.[0]}
            meta={PartyLegalEntityFieldMeta.FullyPaidSharesIndicator}
          />

          <AddressDisplay
            label="Registration Address"
            value={value.RegistrationAddress?.[0]}
            meta={PartyLegalEntityFieldMeta.RegistrationAddress}
          />

          <CorporateRegistrationSchemeDisplay
            label="Corporate Registration Scheme"
            value={value.CorporateRegistrationScheme?.[0]}
            meta={PartyLegalEntityFieldMeta.CorporateRegistrationScheme}
          />

          <PartyDisplay
            label="Head Office Party"
            value={value.HeadOfficeParty?.[0]}
            meta={PartyLegalEntityFieldMeta.HeadOfficeParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ShareholderParty"
            label="Shareholder Party"
            items={value.ShareholderParty}
            meta={PartyLegalEntityFieldMeta.ShareholderParty} 
            itemDisplay={ (itemValue: ShareholderParty, key: string | number) =>
              <ShareholderPartyDisplay
                key={key}
                label="Shareholder Party"
                value={itemValue}
                meta={PartyLegalEntityFieldMeta.ShareholderParty}
              />
            }
          />
        </div>
    </div>
  )
}
