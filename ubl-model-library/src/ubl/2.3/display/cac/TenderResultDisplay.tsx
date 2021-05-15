import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderResult } from  '../../model/cac/TenderResult'
import { TenderResultFieldMeta } from  '../../meta/cac/TenderResultMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractDisplay from './ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import SubcontractTermsDisplay from './SubcontractTermsDisplay'
import { SubcontractTerms } from '../../model/cac/SubcontractTerms'
import TenderedProjectDisplay from './TenderedProjectDisplay'
import { TenderedProject } from '../../model/cac/TenderedProject'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'
import WinningPartyDisplay from './WinningPartyDisplay'
import { WinningParty } from '../../model/cac/WinningParty'

type Props<T> = {
  label: string
  value: TenderResult | undefined
  meta: FieldMeta<T>
}

export default function TenderResultDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderResult">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderResultFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Award Identifier"
            value={value.AwardID?.[0]}
            meta={TenderResultFieldMeta.AwardID}
          />

          <CodeDisplay
            label="Tender Result Code"
            value={value.TenderResultCode?.[0]}
            meta={TenderResultFieldMeta.TenderResultCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TenderResultFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TenderResultFieldMeta.Description}
              />
            }
          />

          <AmountDisplay
            label="Advertisement"
            value={value.AdvertisementAmount?.[0]}
            meta={TenderResultFieldMeta.AdvertisementAmount}
          />

          <DateDisplay
            label="Award Date"
            value={value.AwardDate?.[0]}
            meta={TenderResultFieldMeta.AwardDate}
          />

          <TimeDisplay
            label="Award Time"
            value={value.AwardTime?.[0]}
            meta={TenderResultFieldMeta.AwardTime}
          />

          <QuantityDisplay
            label="Received Tender Quantity"
            value={value.ReceivedTenderQuantity?.[0]}
            meta={TenderResultFieldMeta.ReceivedTenderQuantity}
          />

          <AmountDisplay
            label="Lower Tender Amount"
            value={value.LowerTenderAmount?.[0]}
            meta={TenderResultFieldMeta.LowerTenderAmount}
          />

          <AmountDisplay
            label="Higher Tender Amount"
            value={value.HigherTenderAmount?.[0]}
            meta={TenderResultFieldMeta.HigherTenderAmount}
          />

          <DateDisplay
            label="Start Date"
            value={value.StartDate?.[0]}
            meta={TenderResultFieldMeta.StartDate}
          />

          <QuantityDisplay
            label="Received Electronic Tender Quantity"
            value={value.ReceivedElectronicTenderQuantity?.[0]}
            meta={TenderResultFieldMeta.ReceivedElectronicTenderQuantity}
          />

          <QuantityDisplay
            label="Received Foreign Tender Quantity"
            value={value.ReceivedForeignTenderQuantity?.[0]}
            meta={TenderResultFieldMeta.ReceivedForeignTenderQuantity}
          />

          <ContractDisplay
            label="Contract"
            value={value.Contract?.[0]}
            meta={TenderResultFieldMeta.Contract}
          />

          <TenderedProjectDisplay
            label="Awarded Tendered Project"
            value={value.AwardedTenderedProject?.[0]}
            meta={TenderResultFieldMeta.AwardedTenderedProject}
          />

          <PeriodDisplay
            label="Contract Formalization Period"
            value={value.ContractFormalizationPeriod?.[0]}
            meta={TenderResultFieldMeta.ContractFormalizationPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-SubcontractTerms"
            label="Subcontract Terms"
            items={value.SubcontractTerms}
            meta={TenderResultFieldMeta.SubcontractTerms} 
            itemDisplay={ (itemValue: SubcontractTerms, key: string | number) =>
              <SubcontractTermsDisplay
                key={key}
                label="Subcontract Terms"
                value={itemValue}
                meta={TenderResultFieldMeta.SubcontractTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-WinningParty"
            label="Winning Party"
            items={value.WinningParty}
            meta={TenderResultFieldMeta.WinningParty} 
            itemDisplay={ (itemValue: WinningParty, key: string | number) =>
              <WinningPartyDisplay
                key={key}
                label="Winning Party"
                value={itemValue}
                meta={TenderResultFieldMeta.WinningParty}
              />
            }
          />
        </div>
    </div>
  )
}
