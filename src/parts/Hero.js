import React from 'react'

import GambarRumah from '../assets/images/gambar-rumah.png'
import FrameGambarRumah from '../assets/images/frame-gambar-rumah.png'
import IkonTuris from '../assets/images/icons/ikon-turis.svg'
import IkonKota from '../assets/images/icons/ikon-kota.svg'
import IkonWisata from '../assets/images/icons/ikon-wisata.svg'

import Button from '../elements/Button'
import formatNumber from '../utils/formatNumber'

export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
          top: props.refPilihanFavorit.current.offsetTop - 30,
          behavior: "smooth",
        });
      }

return (
    <section className="container pt-4">
        <div className="row align-items-center">
            <div className="col-auto pr-5" style={{ width: 530 }}>
                <h1 className="h2 font-weight-bold line-height-1 mb-3">
                    Lupakan Kerja Sejenak, <br/>
                    Mulai Liburan Indahmu
                </h1>
                <p 
                    className="mb-4 font-weight-light text-gray-500 w-75"
                    style={{ lineHeight: "170%" }}>
                    Kami sediakan yang kamu butuhkan untuk menikmati 
                    liburanmu dengan keluarga. Saatnya buat kenangan 
                    indah bersama keluarga.
                </p>
                <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                    Lihat Semua
                </Button>
                
                <div className='row' style={{ marginTop: 80 }}>
                    <div className='col-auto' style={{ marginRight: 35 }}>
                        <img 
                            width="36"
                            height="36" 
                            src={IkonTuris} 
                            alt={`${props.data.turis} turis`}
                        />
                        <h6 className="mt-3">
                            {formatNumber(props.data.turis)}{" "}
                            <span className="text-gray-500 font-weight-light">
                                turis
                            </span>
                        </h6>
                    </div>
                    <div className='col-auto' style={{ marginRight: 35 }}>
                        <img 
                            width="36"
                            height="36" 
                            src={IkonKota} 
                            alt={`${props.data.kota} kota`}
                        />
                        <h6 className="mt-3">
                            {formatNumber(props.data.kota)}{" "}
                            <span className="text-gray-500 font-weight-light">
                                kota
                            </span>
                        </h6>
                    </div>
                    <div className='col-auto'>
                        <img 
                            width="36"
                            height="36" 
                            src={IkonWisata} 
                            alt={`${props.data.wisata} wisata`}
                        />
                        <h6 className="mt-3">
                            {formatNumber(props.data.wisata)}{" "}
                            <span className="text-gray-500 font-weight-light">
                                wisata
                            </span>
                        </h6>
                    </div>
                </div>
            </div>
            
            <div className="col-6 pl-5">
                <div style={{ width: 520, height: 410 }}>
                    <img
                        src={GambarRumah}
                        alt="Rumah"
                        className="img-fluid position-absolute"
                        style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                    />
                    <img
                        src={FrameGambarRumah}
                        alt="Frame Rumah"
                        className="img-fluid position-absolute"
                        style={{ margin: "0 -15px -15px 0" }}
                    />
                </div>
          </div>
        </div>
    </section>
  )
}
