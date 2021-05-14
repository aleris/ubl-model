import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererPartyQualification } from  '../../model/cac/TendererPartyQualification'
import { TendererPartyQualificationFieldMeta } from  '../../meta/cac/TendererPartyQualificationMeta'
import ProcurementProjectLotDisplay from './ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import QualifyingPartyDisplay from './QualifyingPartyDisplay'
import { QualifyingParty } from '../../model/cac/QualifyingParty'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TendererPartyQualification
  meta: FieldMeta<T>
}

export default function TendererPartyQualificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TendererPartyQualification ubl-TendererPartyQualificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TendererPartyQualification ubl-UBLExtensions"
          meta={TendererPartyQualificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TendererPartyQualificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererPartyQualification ubl-ProcurementProjectLot ubl-InterestedProcurementProjectLot"
          meta={TendererPartyQualificationFieldMeta.InterestedProcurementProjectLot} 
          value={value.InterestedProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Interested Procurement Project Lot"
              value={itemValue}
              meta={TendererPartyQualificationFieldMeta.InterestedProcurementProjectLot}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TendererPartyQualification ubl-QualifyingParty ubl-MainQualifyingParty"
          meta={TendererPartyQualificationFieldMeta.MainQualifyingParty} 
          value={value.MainQualifyingParty}
          itemDisplay={ (itemValue: QualifyingParty, key: string | number) =>
            <QualifyingPartyDisplay
              key={key}
              label="Main Qualifying Party"
              value={itemValue}
              meta={TendererPartyQualificationFieldMeta.MainQualifyingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererPartyQualification ubl-QualifyingParty ubl-AdditionalQualifyingParty"
          meta={TendererPartyQualificationFieldMeta.AdditionalQualifyingParty} 
          value={value.AdditionalQualifyingParty}
          itemDisplay={ (itemValue: QualifyingParty, key: string | number) =>
            <QualifyingPartyDisplay
              key={key}
              label="Additional Qualifying Party"
              value={itemValue}
              meta={TendererPartyQualificationFieldMeta.AdditionalQualifyingParty}
            />
          }
        />
        </div>
    </div>
  )
}
