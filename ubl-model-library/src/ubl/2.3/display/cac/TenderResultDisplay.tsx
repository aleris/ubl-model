import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TenderResult
  meta: FieldMeta<T>
}

export default function TenderResultDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderResult ubl-TenderResultType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderResult ubl-UBLExtensions"
          meta={TenderResultFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderResultFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Identifier ubl-AwardID"
          meta={TenderResultFieldMeta.AwardID} 
          value={value.AwardID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Award Identifier"
              value={itemValue}
              meta={TenderResultFieldMeta.AwardID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Code ubl-TenderResultCode"
          meta={TenderResultFieldMeta.TenderResultCode} 
          value={value.TenderResultCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tender Result Code"
              value={itemValue}
              meta={TenderResultFieldMeta.TenderResultCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderResult ubl-Text ubl-Description"
          meta={TenderResultFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TenderResultFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Amount ubl-AdvertisementAmount"
          meta={TenderResultFieldMeta.AdvertisementAmount} 
          value={value.AdvertisementAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Advertisement"
              value={itemValue}
              meta={TenderResultFieldMeta.AdvertisementAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Date ubl-AwardDate"
          meta={TenderResultFieldMeta.AwardDate} 
          value={value.AwardDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Award Date"
              value={itemValue}
              meta={TenderResultFieldMeta.AwardDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Time ubl-AwardTime"
          meta={TenderResultFieldMeta.AwardTime} 
          value={value.AwardTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Award Time"
              value={itemValue}
              meta={TenderResultFieldMeta.AwardTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Quantity ubl-ReceivedTenderQuantity"
          meta={TenderResultFieldMeta.ReceivedTenderQuantity} 
          value={value.ReceivedTenderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Received Tender Quantity"
              value={itemValue}
              meta={TenderResultFieldMeta.ReceivedTenderQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Amount ubl-LowerTenderAmount"
          meta={TenderResultFieldMeta.LowerTenderAmount} 
          value={value.LowerTenderAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Lower Tender Amount"
              value={itemValue}
              meta={TenderResultFieldMeta.LowerTenderAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Amount ubl-HigherTenderAmount"
          meta={TenderResultFieldMeta.HigherTenderAmount} 
          value={value.HigherTenderAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Higher Tender Amount"
              value={itemValue}
              meta={TenderResultFieldMeta.HigherTenderAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Date ubl-StartDate"
          meta={TenderResultFieldMeta.StartDate} 
          value={value.StartDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Start Date"
              value={itemValue}
              meta={TenderResultFieldMeta.StartDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Quantity ubl-ReceivedElectronicTenderQuantity"
          meta={TenderResultFieldMeta.ReceivedElectronicTenderQuantity} 
          value={value.ReceivedElectronicTenderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Received Electronic Tender Quantity"
              value={itemValue}
              meta={TenderResultFieldMeta.ReceivedElectronicTenderQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderResult ubl-Quantity ubl-ReceivedForeignTenderQuantity"
          meta={TenderResultFieldMeta.ReceivedForeignTenderQuantity} 
          value={value.ReceivedForeignTenderQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Received Foreign Tender Quantity"
              value={itemValue}
              meta={TenderResultFieldMeta.ReceivedForeignTenderQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderResult ubl-Contract"
          meta={TenderResultFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Contract"
              value={itemValue}
              meta={TenderResultFieldMeta.Contract}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderResult ubl-TenderedProject ubl-AwardedTenderedProject"
          meta={TenderResultFieldMeta.AwardedTenderedProject} 
          value={value.AwardedTenderedProject}
          itemDisplay={ (itemValue: TenderedProject, key: string | number) =>
            <TenderedProjectDisplay
              key={key}
              label="Awarded Tendered Project"
              value={itemValue}
              meta={TenderResultFieldMeta.AwardedTenderedProject}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderResult ubl-Period ubl-ContractFormalizationPeriod"
          meta={TenderResultFieldMeta.ContractFormalizationPeriod} 
          value={value.ContractFormalizationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Contract Formalization Period"
              value={itemValue}
              meta={TenderResultFieldMeta.ContractFormalizationPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderResult ubl-SubcontractTerms"
          meta={TenderResultFieldMeta.SubcontractTerms} 
          value={value.SubcontractTerms}
          itemDisplay={ (itemValue: SubcontractTerms, key: string | number) =>
            <SubcontractTermsDisplay
              key={key}
              label="Subcontract Terms"
              value={itemValue}
              meta={TenderResultFieldMeta.SubcontractTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderResult ubl-WinningParty"
          meta={TenderResultFieldMeta.WinningParty} 
          value={value.WinningParty}
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
