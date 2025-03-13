import React from 'react';
import { NavLink } from 'react-router-dom';
import './Certificates.css';

export const Certificates = () => {
    return (
        <div className="certificates">
            <h1>Certificates</h1>
            
            <div className="certifi">
                <NavLink className='anchor-studies' to="https://drive.google.com/file/d/1fl7tWKadZ-oQRi2VkLJP_tS3Ifyqbz3t/view?usp=drive_link">
                    <p>Certificate 1: </p>
                    <span className='c-description'>Introductory Course PIX Master RPA</span>
                </NavLink>
            </div>
            
            <div className="certifi">
                <NavLink className='anchor-studies' to="https://drive.google.com/file/d/1LK0-KQqyuX_C4VRBC1z-YkDLh1eGZffq/view?usp=drive_link">
                    <p>Certificate 2: </p>
                    <span className='c-description'>Introductory RPA</span>
                </NavLink>
            </div>
            
            <div className="certifi">
                <NavLink className='anchor-studies' to="https://drive.google.com/file/d/1BuA2DY-s9wcaAeo6O7eRdZAEsrrlRiIv/view?usp=drive_link">
                    <p>Certificate 3:</p> <span className='c-description'>Basic RPA Course</span>
                </NavLink>
            </div>
            
            <div className="certifi">
                <NavLink className='anchor-studies' to="https://drive.google.com/file/d/1w6WJi8oY9WKiPE9XBuCGwzp3E4rBNiBF/view?usp=drive_link">
                    <p>Certificate 4:</p>
                    <span className='c-description'>Third Party Services PIX Master RPA</span>
                </NavLink>
            </div>
            
            <div className="certifi">
                <NavLink className='anchor-studies' to="#">
                    <p>Certificate 5: </p>
                    <span className='c-description'>Technical High School Diploma</span>
                </NavLink>
            </div>
            
            <div className="certifi">
                <NavLink className='anchor-studies' to="#">
                    <p>Certificate 6: </p>
                    <span className='c-description'>Technician in Software Analysis and Development</span>
                </NavLink>
            </div>
        </div>
    );
};

