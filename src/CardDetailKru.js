import React from 'react'
import './App.scss';

const CardDetailKru = () =>{
    return (
        <div className='cardDetail'>
            <div className='detailWawancara'>
             <h4>Detail Wawancara</h4>
            <ul>
                <li>NAMA : Christopher Ivan Gunardi</li>
                    <li>Fakultas : STEI</li>
                    <li>Jurusan : Teknik Telekomunikasi</li>
                    <li>Angkatan : 2019</li>
                    <li>Ketika wawancara membahas berbagai hal(karena minimal wawancara 30 menit), 
                        seperti bagaimana kuliah di jurusan teknik telekomunikasi, alasan mengikuti arc, internship, dunia webdev kedepan, dan lainnya
                    </li>
            </ul>
            </div>
        </div>
    )
}

export default CardDetailKru
