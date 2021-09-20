import React from 'react'

const TableInfo = ({ isLoading, chapter, ruku }) => {
    return (
        <div className="table">
            <div className="table-head">{isLoading ? '' : !chapter ? 'Tidak ditemukan' : chapter.latin_name}</div>
            <div className="table-layout">
                <div className="table-scroll">
                    <div className="table-container">
                        {isLoading ? 'Tunggu ya' : !chapter ? '404' : (
                        <><div className="table-content-info">
                            <div className="info-alias">{chapter.aliases.map((aliases, i, array) => (array.length - 1 === i) ? aliases : `${aliases} ● `)}</div>
                            <div className="info-arabic arabic">{chapter.arabic_name}</div>
                            <div className="info-literal">{chapter.literal}</div>
                            {/* <div className="info-verse">{ruku.length} rukuʻ ● {ruku.flat().length} ayat</div> */}
                            <div className="info-verse">{chapter.total_rukus} rukuʻ ● {chapter.total_verses} ayat</div>
                        </div>
                        <div className="table-separator"><svg width="100%" height="6" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" rx="3" fill="#f2f2f7" /></svg></div>
                        <div className="table-col-2-grid">
                            <div className="table-col-info">
                                <div className="table-col-head">Muqatta'at</div>
                                {(chapter.mysterious_letters.length === 1) && (chapter.mysterious_letters[0] === '') ? <div className="info-none">none</div> : <div className="info-mysteriousLetters">{chapter.mysterious_letters.map((letters, i, array) => (array.length - 1 === i) ? letters : `${letters} ● `)}</div>}
                            </div>
                            <div className="table-col-info">
                                <div className="table-col-head">Klasifikasi</div>
                                <div className="info-classification">{chapter.classification}</div>
                            </div>
                        </div>
                        <div className="table-separator"><svg width="100%" height="6" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" rx="3" fill="#f2f2f7" /></svg></div>
                        <div className="table-content-info">
                            <div className="table-content-head">Faedah / Keutamaan</div>
                            {(chapter.avail.length === 1) && (chapter.avail[0] === '') ? (
                                <div className="info-none">none</div>
                            ) : chapter.avail.map((avail, i, array) => (array.length - 1 === i) ? (
                                <div key={i} className="table-content-list last">
                                    <div className="index-avail">
                                        <div className="dot-list"><svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%"r="50%" fill="#f2f2f7" /></svg></div>
                                    </div>
                                    <div className="info-avail last">{avail}</div>
                                </div> ) : (
                                <div key={i} className="table-content-list">
                                    <div className="index-avail">
                                        <div className="dot-list"><svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%"r="50%" fill="#f2f2f7" /></svg></div>
                                        <div className="space-list" />
                                    </div>
                                    <div className="info-avail">{avail}</div>
                                </div> )
                            )}
                        </div>
                        <div className="table-footend"><svg width="100%" height="15" xmlns="http://www.w3.org/2000/svg"><circle cx="calc(50% - 27px)" cy="50%"r="7.5" fill="#f2f2f7" /><circle cx="50%" cy="50%"r="7.5" fill="#f2f2f7" /><circle cx="calc(50% + 27px)" cy="50%"r="7.5" fill="#f2f2f7" /></svg></div></>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableInfo
