import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TendererPartyQualification | undefined
  meta: FieldMeta<T>
}

export default function TendererPartyQualificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TendererPartyQualification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TendererPartyQualificationFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ProcurementProjectLot ubl-InterestedProcurementProjectLot"
            label="Interested Procurement Project Lot"
            items={value.InterestedProcurementProjectLot}
            meta={TendererPartyQualificationFieldMeta.InterestedProcurementProjectLot} 
            itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
              <ProcurementProjectLotDisplay
                key={key}
                label="Interested Procurement Project Lot"
                value={itemValue}
                meta={TendererPartyQualificationFieldMeta.InterestedProcurementProjectLot}
              />
            }
          />

          <QualifyingPartyDisplay
            label="Main Qualifying Party"
            value={value.MainQualifyingParty?.[0]}
            meta={TendererPartyQualificationFieldMeta.MainQualifyingParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-QualifyingParty ubl-AdditionalQualifyingParty"
            label="Additional Qualifying Party"
            items={value.AdditionalQualifyingParty}
            meta={TendererPartyQualificationFieldMeta.AdditionalQualifyingParty} 
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
