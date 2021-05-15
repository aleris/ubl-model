import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProjectLot } from  '../../model/cac/ProcurementProjectLot'
import { ProcurementProjectLotFieldMeta } from  '../../meta/cac/ProcurementProjectLotMeta'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ProcurementProjectDisplay from './ProcurementProjectDisplay'
import { ProcurementProject } from '../../model/cac/ProcurementProject'
import TenderingProcessDisplay from './TenderingProcessDisplay'
import { TenderingProcess } from '../../model/cac/TenderingProcess'
import TenderingTermsDisplay from './TenderingTermsDisplay'
import { TenderingTerms } from '../../model/cac/TenderingTerms'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ProcurementProjectLot | undefined
  meta: FieldMeta<T>
}

export default function ProcurementProjectLotDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ProcurementProjectLot">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ProcurementProjectLotFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ProcurementProjectLotFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-LegalDocumentReference"
            label="Legal Document Reference"
            items={value.LegalDocumentReference}
            meta={ProcurementProjectLotFieldMeta.LegalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Legal Document Reference"
                value={itemValue}
                meta={ProcurementProjectLotFieldMeta.LegalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-TechnicalDocumentReference"
            label="Technical Document Reference"
            items={value.TechnicalDocumentReference}
            meta={ProcurementProjectLotFieldMeta.TechnicalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Technical Document Reference"
                value={itemValue}
                meta={ProcurementProjectLotFieldMeta.TechnicalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-RequiredDocumentReference"
            label="Required Document Reference"
            items={value.RequiredDocumentReference}
            meta={ProcurementProjectLotFieldMeta.RequiredDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Required Document Reference"
                value={itemValue}
                meta={ProcurementProjectLotFieldMeta.RequiredDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ProvidedDocumentReference"
            label="Provided Document Reference"
            items={value.ProvidedDocumentReference}
            meta={ProcurementProjectLotFieldMeta.ProvidedDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Provided Document Reference"
                value={itemValue}
                meta={ProcurementProjectLotFieldMeta.ProvidedDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={ProcurementProjectLotFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={ProcurementProjectLotFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <TenderingTermsDisplay
            label="Tendering Terms"
            value={value.TenderingTerms?.[0]}
            meta={ProcurementProjectLotFieldMeta.TenderingTerms}
          />

          <TenderingProcessDisplay
            label="Tendering Process"
            value={value.TenderingProcess?.[0]}
            meta={ProcurementProjectLotFieldMeta.TenderingProcess}
          />

          <ProcurementProjectDisplay
            label="Procurement Project"
            value={value.ProcurementProject?.[0]}
            meta={ProcurementProjectLotFieldMeta.ProcurementProject}
          />
        </div>
    </div>
  )
}
