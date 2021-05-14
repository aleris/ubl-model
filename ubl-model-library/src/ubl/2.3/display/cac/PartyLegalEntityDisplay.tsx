import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PartyLegalEntity
  meta: FieldMeta<T>
}

export default function PartyLegalEntityDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PartyLegalEntity ubl-PartyLegalEntityType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PartyLegalEntity ubl-UBLExtensions"
          meta={PartyLegalEntityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Text ubl-RegistrationName"
          meta={PartyLegalEntityFieldMeta.RegistrationName} 
          value={value.RegistrationName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Registration Name"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.RegistrationName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Identifier ubl-CompanyID"
          meta={PartyLegalEntityFieldMeta.CompanyID} 
          value={value.CompanyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Company Identifier"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.CompanyID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Date ubl-RegistrationDate"
          meta={PartyLegalEntityFieldMeta.RegistrationDate} 
          value={value.RegistrationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Registration Date"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.RegistrationDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Date ubl-RegistrationExpirationDate"
          meta={PartyLegalEntityFieldMeta.RegistrationExpirationDate} 
          value={value.RegistrationExpirationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Registration Expiration Date"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.RegistrationExpirationDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Code ubl-CompanyLegalFormCode"
          meta={PartyLegalEntityFieldMeta.CompanyLegalFormCode} 
          value={value.CompanyLegalFormCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Company Legal Form Code"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.CompanyLegalFormCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Text ubl-CompanyLegalForm"
          meta={PartyLegalEntityFieldMeta.CompanyLegalForm} 
          value={value.CompanyLegalForm}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Company Legal Form"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.CompanyLegalForm}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Indicator ubl-SoleProprietorshipIndicator"
          meta={PartyLegalEntityFieldMeta.SoleProprietorshipIndicator} 
          value={value.SoleProprietorshipIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Sole Proprietorship Indicator"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.SoleProprietorshipIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Code ubl-CompanyLiquidationStatusCode"
          meta={PartyLegalEntityFieldMeta.CompanyLiquidationStatusCode} 
          value={value.CompanyLiquidationStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Company Liquidation Status Code"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.CompanyLiquidationStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Amount ubl-CorporateStockAmount"
          meta={PartyLegalEntityFieldMeta.CorporateStockAmount} 
          value={value.CorporateStockAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Corporate Stock Amount"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.CorporateStockAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PartyLegalEntity ubl-Indicator ubl-FullyPaidSharesIndicator"
          meta={PartyLegalEntityFieldMeta.FullyPaidSharesIndicator} 
          value={value.FullyPaidSharesIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Fully Paid Shares Indicator"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.FullyPaidSharesIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PartyLegalEntity ubl-Address ubl-RegistrationAddress"
          meta={PartyLegalEntityFieldMeta.RegistrationAddress} 
          value={value.RegistrationAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Registration Address"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.RegistrationAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PartyLegalEntity ubl-CorporateRegistrationScheme"
          meta={PartyLegalEntityFieldMeta.CorporateRegistrationScheme} 
          value={value.CorporateRegistrationScheme}
          itemDisplay={ (itemValue: CorporateRegistrationScheme, key: string | number) =>
            <CorporateRegistrationSchemeDisplay
              key={key}
              label="Corporate Registration Scheme"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.CorporateRegistrationScheme}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PartyLegalEntity ubl-Party ubl-HeadOfficeParty"
          meta={PartyLegalEntityFieldMeta.HeadOfficeParty} 
          value={value.HeadOfficeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Head Office Party"
              value={itemValue}
              meta={PartyLegalEntityFieldMeta.HeadOfficeParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PartyLegalEntity ubl-ShareholderParty"
          meta={PartyLegalEntityFieldMeta.ShareholderParty} 
          value={value.ShareholderParty}
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
