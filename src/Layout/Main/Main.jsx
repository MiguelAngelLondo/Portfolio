import React from 'react';
import './Main.css';
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import me from '../../assets/Images/me.jpeg';

export const Main = () => {
    return (
        <main>
            <section className='about-section'>
                <h1>About Me</h1>
                <div className='about-card'>
                    <img src={me} alt="About Me" />
                    <div className='card-content'>
                        <p className='presentation'>⭕ Hello, My Name is <strong>Miguel Angel Londoño.</strong> I am a passionate front-end and back-end programmer, and I am currently on my path as a programmer. I have good habits both personally and in programming. I want to be an excellent programmer, but above all, I want to be a good person.</p>
                    </div>
                </div>
            </section>
            <section className='english-level-section'>
                <h2>⏺ English Level ⏺</h2>
                <p className='english-level'> 🌐 My English level is B1 Advanced.</p>
            </section>
        </main>
    );
}