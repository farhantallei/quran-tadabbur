import React from 'react'

const Ayah = ({ count, ayahData }) => {
    return (
        <div className="card-ayah">
            <div className="card-ayah-action">
                <div className='index'>{count}</div>
                <button className='card-ayah-edit' onClick={() => {}}><svg xmlns="http://www.w3.org/2000/svg" fill="#c7c7cc" viewBox="0 0 30 12"><circle cx="3.5" cy="6" r="3.5"/><circle cx="26.5" cy="6" r="3.5"/><circle cx="15" cy="6" r="3.5"/></svg></button>
            </div>
            <div className="card-ayah-content">
                <div className="arabic card-ayah-arabic">{ayahData.ayah?.arabic.map((arabic, i, array) => (array.length - 1 === i) ? arabic : `${arabic} `)}</div>
                <div className="card-latin-letters">
                    <div className="card-ayah-latin">{ayahData.ayah?.latin.map((latin, i, array) => (array.length - 1 === i) ? latin : `${latin} `)}</div>
                    <div className="card-ayah-translation">{ayahData.ayah?.translation.map((translation, i, array) => (array.length - 1 === i) ? translation : `${translation} `)}</div>
                </div>
            </div>
        </div>
    )
}

export default Ayah
