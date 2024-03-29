import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createData, updateData } from '../../actions/quran'

const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const [quranData, setQuranData] = useState({ chapter_id: '', arabic_name: '', latin_name: '', literal: '', aliases: '', classification: '', mysterious_letters: '', avail: '', total_verses: '', total_rukus: '' })
    const quran = useSelector((state) => currentId ? state.quran.chapters.find((chapter) => chapter._id === currentId) : null)
    const formScroll = useRef()

    useEffect(() => {
        if (quran) {
            setQuranData({ ...quran, aliases: quran.aliases.join('|'), mysterious_letters: quran.mysterious_letters.join('|'), avail: quran.avail.join('|') })
            formScroll.current.scrollTo({ top: 0, behavior: 'smooth'})
        }

        if (!currentId) clear()
    }, [currentId, quran])

    const handleSubmit = (e) => {
        e.preventDefault()

        const submitData = { ...quranData, chapter_id: quranData.chapter_id.replace(/\s+/g, '-').toLowerCase(), aliases: quranData.aliases.split('|'), mysterious_letters: quranData.mysterious_letters.split('|'), avail: quranData.avail.split('|') }

        if (currentId === 0) dispatch(createData(submitData))
        else dispatch(updateData(currentId, submitData))
        
        clear()
    }

    const clear = () => {
        const input = document.getElementById('form').getElementsByTagName('input')
        for (let i = 0; i < input.length; i++) input[i].checked = false

        setCurrentId(0)
        setQuranData({ chapter_id: '', arabic_name: '', latin_name: '', literal: '', aliases: '', classification: '', mysterious_letters: '', avail: '', total_verses: '', total_rukus: '' })

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
                        <input className='field' name='chapter_id' type='text' required value={quranData.chapter_id} onChange={(e) => setQuranData({ ...quranData, chapter_id: e.target.value })} />

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
                        
                        <label className='label'><span>Nama lain</span> dari Surah <em>(pisahkan dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                        <textarea className='text-area' name='aliases' value={quranData.aliases} onChange={(e) => setQuranData({ ...quranData, aliases: e.target.value })} ></textarea>
                        
                        <label className='label'><span>Faedah</span> dari Surah <em>(pisahkan dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                        <textarea className='text-area' name='avail' value={quranData.avail} onChange={(e) => setQuranData({ ...quranData, avail: e.target.value })} ></textarea>

                        <label className='label'>Huruf <span>Muqatta'at</span> <em>(pisahkan dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                        <input className='arabic field' name='mysterious_letters' type='text' value={quranData.mysterious_letters} onChange={(e) => setQuranData({ ...quranData, mysterious_letters: e.target.value })} />
                        
                        <label className='label'>Total <span>Ayat</span></label>
                        <input className='field' name='total_verses' type='text' required value={quranData.total_verses} onChange={(e) => setQuranData({ ...quranData, total_verses: e.target.value })} />
                        
                        <label className='label'>Total <span>Ruku</span></label>
                        <input className='field' name='total_rukus' type='text' required value={quranData.total_rukus} onChange={(e) => setQuranData({ ...quranData, total_rukus: e.target.value })} />

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
