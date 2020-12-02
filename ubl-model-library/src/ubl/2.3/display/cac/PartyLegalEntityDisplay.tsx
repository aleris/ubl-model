import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: PartyLegalEntity
  meta: FieldMeta<T>
}

export default function PartyLegalEntityDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PartyLegalEntityFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.RegistrationName} 
          value={value.RegistrationName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PartyLegalEntityFieldMeta.RegistrationName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.CompanyID} 
          value={value.CompanyID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PartyLegalEntityFieldMeta.CompanyID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.RegistrationDate} 
          value={value.RegistrationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PartyLegalEntityFieldMeta.RegistrationDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.RegistrationExpirationDate} 
          value={value.RegistrationExpirationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PartyLegalEntityFieldMeta.RegistrationExpirationDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.CompanyLegalFormCode} 
          value={value.CompanyLegalFormCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PartyLegalEntityFieldMeta.CompanyLegalFormCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.CompanyLegalForm} 
          value={value.CompanyLegalForm}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PartyLegalEntityFieldMeta.CompanyLegalForm} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.SoleProprietorshipIndicator} 
          value={value.SoleProprietorshipIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PartyLegalEntityFieldMeta.SoleProprietorshipIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.CompanyLiquidationStatusCode} 
          value={value.CompanyLiquidationStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PartyLegalEntityFieldMeta.CompanyLiquidationStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.CorporateStockAmount} 
          value={value.CorporateStockAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PartyLegalEntityFieldMeta.CorporateStockAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.FullyPaidSharesIndicator} 
          value={value.FullyPaidSharesIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PartyLegalEntityFieldMeta.FullyPaidSharesIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.RegistrationAddress} 
          value={value.RegistrationAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={PartyLegalEntityFieldMeta.RegistrationAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.CorporateRegistrationScheme} 
          value={value.CorporateRegistrationScheme}
          itemDisplay={ (itemValue: CorporateRegistrationScheme, key: string | number) =>
            <CorporateRegistrationSchemeDisplay key={key} meta={PartyLegalEntityFieldMeta.CorporateRegistrationScheme} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.HeadOfficeParty} 
          value={value.HeadOfficeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PartyLegalEntityFieldMeta.HeadOfficeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyLegalEntityFieldMeta.ShareholderParty} 
          value={value.ShareholderParty}
          itemDisplay={ (itemValue: ShareholderParty, key: string | number) =>
            <ShareholderPartyDisplay key={key} meta={PartyLegalEntityFieldMeta.ShareholderParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
