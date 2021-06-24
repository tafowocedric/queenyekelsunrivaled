import React, { Fragment, useEffect, useState } from 'react';
import PublicContainer from '../container/PublicContainer';
import validate from '../../hooks/FormValidation';
import useForm from '../../hooks/useForm';
import Spinner from '../utils/Spinner';
import Toast from '../utils/Toast';

import '../../css/pages/About.css';

import boss_img from '../../assets/about/bossyekel.png';

import about_footer1 from '../../assets/about/about_footer1.jpg';
import about_footer2 from '../../assets/about/about_footer2.jpg';
import about_footer3 from '../../assets/about/about_footer3.jpg';
import about_footer4 from '../../assets/about/about_footer4.jpg';
import about_footer5 from '../../assets/about/about_footer5.jpg';
import { addSubscriber } from '../../api';

const About = () => {
    const [toastState, setToastState] = useState({});
    const [showSpinner, setShowSpinner] = useState(false);
    const [toastType, setToastType] = useState({ type: '', icon: '' });

    const handleOnSubmit = async () => {
        setIsSubmitting(false);

        const response = await addSubscriber(values);
        const { data } = response.data;

        if (!response.ok) return setErrors(data);

        setToastType({ type: 'success', icon: 'IconSuccess' });
        return setToastState(data);
    };

    const { handleChange, handleSubmit, values, errors, setErrors, setIsSubmitting } = useForm(handleOnSubmit, validate, setShowSpinner, ['email']);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setToastState(errors);
            return setToastType({ type: 'error', icon: 'IconError' });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

    useEffect(() => {
        setShowSpinner(false);
        setIsSubmitting(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toastState]);

    return (
        <Fragment>
            <Spinner visible={showSpinner} className='full-width' size={56} />

            <PublicContainer footer images={[about_footer1, about_footer2, about_footer3, about_footer4, about_footer5]}>
                <div className='toast-container'>{toastState && Object.keys(toastState).map((key, i) => <Fragment key={i}>{toastState[key] && <Toast message={toastState[key]} iconName={toastType.icon} className={`nth-${i}`} type={toastType.type} toast_key={key} state={toastState} setState={setToastState} />}</Fragment>)}</div>

                <div className='about'>
                    {/* ABOUT PAGE BANNER */}
                    <div className='page-banner-area'>
                        <div className='page-banner-content'>
                            <h2>About</h2>
                            <ul>
                                <li>
                                    <a href='index.html'>Home</a>
                                </li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>

                    {/* SECTION ONE */}
                    <section className='who-we-are'>
                        <div className='container'>
                            <div className='who-we-are-container'>
                                <div className='who-we-are-content'>
                                    <span>About</span>
                                    <h3>Learn About Our Work and Cultural Activities</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul className='who-we-are-list'>
                                        <li>
                                            <span>
                                                <p>1</p>
                                            </span>
                                            <p>Homelike Environment</p>
                                        </li>
                                        <li>
                                            <span>
                                                <p>2</p>
                                            </span>
                                            <p>Quality Educators</p>
                                        </li>
                                        <li>
                                            <span>
                                                <p>3</p>
                                            </span>
                                            <p>Safety and Security</p>
                                        </li>
                                        <li>
                                            <span>
                                                <p>4</p>
                                            </span>
                                            <p>Play to Learn</p>
                                        </li>
                                    </ul>
                                    <div className='who-we-are-btn default-btn'>
                                        <a href='' className=''>
                                            Read More
                                        </a>
                                    </div>
                                </div>

                                <div className='who-we-are-image-wrap'>
                                    <img src={boss_img} alt='img' />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION TWO */}
                    <section className='fun-facts-area'>
                        <div className='container'>
                            <div className='fun-fact-elements'>
                                <div className='single-fun-fact'>
                                    <h3>400</h3>
                                    <p>Students</p>
                                </div>
                                <div className='single-fun-fact bg-1'>
                                    <h3>25</h3>
                                    <p>Teachers</p>
                                </div>
                                <div className='single-fun-fact bg-2'>
                                    <h3>400</h3>
                                    <p>Classroom</p>
                                </div>
                                <div className='single-fun-fact bg-3'>
                                    <h3>A</h3>
                                    <p>School Bus</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION THREE */}
                    <section className='teacher-area'>
                        <div className='container'>
                            <div className='single-teacher-text-item'>
                                <span>Expert Teacher</span>
                                <h3>Our Online Instructor</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className='teacher-btn default-btn'>
                                    <a href=''>Instructor Profile</a>
                                </div>
                            </div>

                            <div className='single-teacher-item'>
                                <div className='overlay'>
                                    <div className='image'>
                                        <img src='' alt='' />
                                        <div className='content'>
                                            <h3>James Bond</h3>
                                            <span>Music Teacher</span>
                                            <ul className='social'>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-facebook'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-google-plus'></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='single-teacher-item'>
                                <div className='overlay'>
                                    <div className='image'>
                                        <img src='' alt='' />
                                        <div className='content'>
                                            <h3>James Bond</h3>
                                            <span>Music Teacher</span>
                                            <ul className='social'>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-facebook'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-google-plus'></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='single-teacher-item'>
                                <div className='overlay'>
                                    <div className='image'>
                                        <img src='' alt='' />
                                        <div className='content'>
                                            <h3>James Bond</h3>
                                            <span>Music Teacher</span>
                                            <ul className='social'>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-facebook'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-google-plus'></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='single-teacher-item'>
                                <div className='overlay'>
                                    <div className='image'>
                                        <img src='' alt='' />
                                        <div className='content'>
                                            <h3>James Bond</h3>
                                            <span>Music Teacher</span>
                                            <ul className='social'>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-facebook'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-google-plus'></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='single-teacher-item'>
                                <div className='overlay'>
                                    <div className='image'>
                                        <img src='' alt='' />
                                        <div className='content'>
                                            <h3>James Bond</h3>
                                            <span>Music Teacher</span>
                                            <ul className='social'>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-facebook'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='//#'>
                                                        <i className='bx bx1-google-plus'></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* NEWSLETTER SECTION */}

                    <div className='newsletter-area'>
                        <div className='container'>
                            <div className='newsletter-content'>
                                <h2>Do You Want To Know Get Update What’s Upcoming</h2>
                            </div>
                            <div className='newsletter-form-content'>
                                <form action='' onSubmit={handleSubmit} className='newsletter-form'>
                                    <input type='email' onChange={handleChange} className='input-newsletter' value={values?.email || ''} name='email' id='' placeholder='Enter Email Address' />
                                    <button type='submit'>Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </PublicContainer>
        </Fragment>
    );
};

export default About;
