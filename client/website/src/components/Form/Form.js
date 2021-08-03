import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createData, updateData } from '../../actions/quran'
import './styles.css'

const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const [quranData, setQuranData] = useState({ surah_id: '', arabic_name: '', latin_name: '', literal: '', aliases: '', classification: '', mysterious_letters: false, avail: '' })
    const quran = useSelector((state) => currentId ? state.quran.surat.find((surah) => surah._id === currentId) : null)
    const formScroll = useRef()

    useEffect(() => {
        if (quran) {
            setQuranData(quran)
            formScroll.current.scrollTo({ top: 0, behavior: 'smooth'})
        }

        if (!currentId) clear()
    }, [currentId, quran])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (currentId === 0) dispatch(createData(quranData))
        else dispatch(updateData(currentId, { ...quranData, surah_id: quranData.surah_id.replace(/\s+/g, '-').toLowerCase()}))
        
        clear()
    }

    const clear = () => {
        const input = document.getElementById('form').getElementsByTagName('input')
        for (let i = 0; i < input.length; i++) input[i].checked = false

        setCurrentId(0)
        setQuranData({ surah_id: '', arabic_name: '', latin_name: '', literal: '', aliases: '', classification: '', mysterious_letters: false, avail: '' })

        formScroll.current.scrollTo({ top: 0, behavior: 'smooth'})
    }
    
    return (
        <>
        <h2 className='form-title'>{currentId ? <>Edit Surah <span>{quran.latin_name}</span></> : <>Tambahkan informasi <span>data Surah</span></>}</h2>
        <div className='form-layout'>
            <div className='form-scroll' ref={formScroll}>
                <div className='form-content'>
                    <form className='form' id='form' autoComplete="off" onSubmit={handleSubmit}>
                        <label className='label'><span>Id</span> Surah</label>
                        <input className='field' name='surah_id' type='text' required value={quranData.surah_id} onChange={(e) => setQuranData({ ...quranData, surah_id: e.target.value })} />

                        <label className='label'>Nama Surah dalam <span>Arabic</span></label>
                        <input className='arabic field' name='arabic_name' type='text' required value={quranData.arabic_name} onChange={(e) => setQuranData({ ...quranData, arabic_name: e.target.value })} />
                        
                        <label className='label'>Nama Surah dalam <span>Latin</span></label>
                        <input className='field' name='latin_name' type='text' required value={quranData.latin_name} onChange={(e) => setQuranData({ ...quranData, latin_name: e.target.value })} />
                        
                        <label className='label'><span>Arti</span> dari Surah</label>
                        <input className='field' name='literal' type='text' required value={quranData.literal} onChange={(e) => setQuranData({ ...quranData, literal: e.target.value })} />
                        
                        <label className='label'><span>Klasifikasi</span> Surah</label>
                        <div className='radio'>
                            <label>
                                Makkiyah
                                <input name='classification' type='radio' required checked={quranData.classification === 'Makkiyah' ? true : false} value='Makkiyah' onChange={(e) => setQuranData({ ...quranData, classification: e.target.value })} />
                                <span className='toggle-radio'></span>
                            </label>
                            <label>
                                Madaniyah
                                <input name='classification' type='radio' required checked={quranData.classification === 'Madaniyah' ? true : false} value='Madaniyah' onChange={(e) => setQuranData({ ...quranData, classification: e.target.value })} />
                                <span className='toggle-radio'></span>
                            </label>
                        </div>
                        
                        <label className='label'><span>Nama lain</span> dari Surah <em>(pisahkan dengan tanda</em> &nbsp; <code><b>,</b></code> <em>)</em></label>
                        <textarea className='text-area' name='aliases' value={quranData.aliases} onChange={(e) => setQuranData({ ...quranData, aliases: e.target.value.split(',') })} ></textarea>
                        
                        <label className='label'><span>Faedah</span> dari Surah <em>(pisahkan dengan tanda</em> &nbsp; <code><b>,</b></code> <em>)</em></label>
                        <textarea className='text-area' name='avail' value={quranData.avail} onChange={(e) => setQuranData({ ...quranData, avail: e.target.value.split(',') })} ></textarea>
                        
                        <label className='label'>Ada huruf <span>Muqatta'at</span>?</label>
                        <label className='switch'>
                            <input id='mysterious_letters' name='mysterious_letters' type="checkbox" checked={quranData.mysterious_letters} onChange={(e) => setQuranData({ ...quranData, mysterious_letters: e.target.checked })} />
                            <span className="toggle-switch"></span>
                        </label>
                        <input className={currentId ? 'submit submit-edit' : 'submit'} type='submit' value={currentId ? 'Edit' : 'Tambahkan!'} />
                    </form>
                    <button className='reset' onClick={clear}>Reset</button>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Form
