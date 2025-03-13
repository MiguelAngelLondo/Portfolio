import React from 'react';
import './Certificates.css';

export const Certificates = () => {
    return (
        <main>
            <div className="certificates">
                <h1>Certificates</h1>
                <div className="certifi">
                    <p>Certificado 1:&nbsp;&nbsp; </p>
                    <p> Curso Basico de RPA</p>


                </div>
                <div className="certifi">
                    <p>Certificado 2:&nbsp;&nbsp; </p>
                    <p> Introduccion PIX Master</p>
                </div>

                <div className="certifi">
                    <p>Certificado 3:&nbsp;&nbsp; </p>
                    <p> Introducctorio RPA</p>
                </div>

                <div className="certifi">
                    <p>Certificado 4:&nbsp;&nbsp; </p>
                    <p> Servicios de terceros PIX Master RPA</p>
                </div>

                <div className="certifi">
                    <p>Certificado 5:&nbsp;&nbsp; </p>
                    <p> Bachiller tenico</p>
                </div>

                <div className="certifi">
                    <p>Certificado 6:&nbsp;&nbsp; </p>
                    <p> Tecnico en Analisis y Desarrollo de Software</p>

                </div>

            </div>


            <div className='ShowCertificates'>

                <div id='cert-1'>

                    <embed src="../../../src/assets/Certificates/BasicoRPA.pdf" type="" />
                </div>

                <div id='cert-2'>

                    <embed src="../../../src/assets/Certificates/IntroduccionPixMaster.pdf" type="" />
                </div>

                <div id='cert-3'>

                    <embed src="../../../src/assets/Certificates/IntroductorioRPA.pdf" type="" />
                </div>

                <div id='cert-4'>

                    <embed src="../../../src/assets/Certificates/ServiciosdetercerosPixMaster.pdf" type="" />
                </div>

                <div id='cert-5'>

                    <embed src="../../../src/assets/Certificates/ServiciosdetercerosPixMaster.pdf" type="" />
                </div>


        <p>aaaaaaaaaaaaaaaaaaa</p>

            </div>
        </main>
    );
};