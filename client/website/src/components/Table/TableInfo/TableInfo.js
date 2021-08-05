import React from 'react'

const TableInfo = ({ surah, isLoading }) => {
    return (
        <div className="table">
            <div className="table-head">{isLoading ? '' : !surah ? 'Tidak ditemukan' : surah.latin_name}</div>
            <div className="table-layout">
                <div className="table-scroll">
                    <div className="table-container">
                        {isLoading ? 'Tunggu ya' : !surah ? '404' : (
                        <><div className="table-content-info">
                            <div className="info-alias">{surah.aliases.map((aliases, i, array) => (array.length - 1 === i) ? aliases : `${aliases} ● `)}</div>
                            <div className="info-arabic arabic">{surah.arabic_name}</div>
                            <div className="info-literal">{surah.literal}</div>
                            <div className="info-ayat">- ayat</div>
                        </div>
                        <div className="table-separator"><svg width="100%" height="6" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" rx="3" fill="#f2f2f7" /></svg></div>
                        <div className="table-col-2-grid">
                            <div className="table-col-info">
                                <div className="table-col-head">Muqatta'at</div>
                                {(surah.mysterious_letters.length === 1) && (surah.mysterious_letters[0] === '') ? <div className="info-none">none</div> : <div className="info-mysteriousLetters">{surah.mysterious_letters.map((letters, i, array) => (array.length - 1 === i) ? letters : `${letters} ● `)}</div>}
                            </div>
                            <div className="table-col-info">
                                <div className="table-col-head">Klasifikasi</div>
                                <div className="info-classification">{surah.classification}</div>
                            </div>
                        </div>
                        <div className="table-separator"><svg width="100%" height="6" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" rx="3" fill="#f2f2f7" /></svg></div>
                        <div className="table-content-info">
                            <div className="table-content-head">Faedah / Keutamaan</div>
                            {(surah.avail.length === 1) && (surah.avail[0] === '') ? (
                                <div className="info-none">none</div>
                            ) : surah.avail.map((avail, i, array) => (array.length - 1 === i) ? (
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
