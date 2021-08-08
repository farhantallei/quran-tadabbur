import React from 'react'

const Verse = ({ currentVerseIndex, verseData, rukuIndex, verseIndex, setRukuIndex, setVerseIndex }) => {
    const handleVerseEdit = () => {
        setRukuIndex(rukuIndex)
        setVerseIndex(verseIndex)
    }

    return (
        <div className="card-verse">
            <div className="card-verse-action">
                <div className='index'>{currentVerseIndex(rukuIndex, verseIndex)}</div>
                <button className='card-verse-edit' onClick={handleVerseEdit}><svg xmlns="http://www.w3.org/2000/svg" fill="#c7c7cc" viewBox="0 0 30 12"><circle cx="3.5" cy="6" r="3.5"/><circle cx="26.5" cy="6" r="3.5"/><circle cx="15" cy="6" r="3.5"/></svg></button>
            </div>
            <div className="card-verse-content">
                <div className="arabic card-verse-arabic">{verseData.verse?.arabic.map((arabic, i, array) => (array.length - 1 === i) ? arabic : `${arabic} `)}</div>
                <div className="card-latin-letters">
                    <div className="card-verse-latin">{verseData.verse?.latin.map((latin, i, array) => (array.length - 1 === i) ? latin : `${latin} `)}</div>
                    <div className="card-verse-translation">{verseData.verse?.translation.map((translation, i, array) => (array.length - 1 === i) ? translation : `${translation} `)}</div>
                </div>
            </div>
        </div>
    )
}

export default Verse
