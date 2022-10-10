import React from 'react';
import './Section02.css';

const Section02 = () => {
    return (
        <div className='section_02'>
            <div className='section_02_text'>
                <div className='section_02_text_inner'>
                    <h1>Explore the nature</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi non leo eget est consequat bibendum dictum et arcu.
                        Curabitur sapien leo, faucibus in libero in, vestibulum 
                        maximus riscus. Donec sagittis augue nec mauris rutrum
                        dapibus. Quisque lacinia nisi nec turpis pretium feugiat.
                        Nullam eu euismond ante.
                    </p>
                    <p>
                        Aliquam molestie vestibulum odio, in vehicula eros vehicula
                        et. Maecenas justo est, congue sed neque eget, finibus
                        viverra ipsum. Suspendisse potenti. Nam iaculis metus non
                        nibh porttitor malesuada.
                    </p>
                </div>                             
            </div>
            <div className='section_02_image'>
                <div className='section_02_image_inner'>
                    <a href='#explorethenature'>Explore the nature</a>
                </div>
            </div>
        </div>
    );
}

export default Section02;