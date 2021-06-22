import React from 'react';
import PublicContainer from '../container/PublicContainer';

import Input from '../utils/Input';
import Button from '../utils/Button';

const RequestRegistration = () => {
    return (
        <PublicContainer footer footer_image>
            <div className='enroll-now-page'>
                <div className='page-banner-area'>
                    <div className='container'>
                        <div className='page-banner-content'>
                            <h2>Enroll Now</h2>
                        </div>
                    </div>
                </div>
                <section className='enrollment-form mg-t-50 pd-b-50'>
                    <div className='container grid'>
                        <div className='image-section col-lg-2 col-md-2 col-sm-12 col-xs-12'></div>
                        <div className='form-wrapper col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                            <h2 className='mg-b-20'>REGISTRATION FORM</h2>
                            <form action='' className='grid enroll-form'>
                                <div className='grid inner-grid col-lg-12 col-md-12 col-sm-12 col-xs-12' id='child-info'>
                                    <h2 className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>Child Information:</h2>
                                    <div className='col-lg-8 col-md-7 col-sm-7 col-xs-12'>
                                        <Input type='text' name='child_name' label='Name of Child' />
                                    </div>
                                    <div className='col-lg-4 col-md-5 col-sm-5 col-xs-12'>
                                        <Input type='number' name='no_siblings' label='Siblings Attending' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                                        <Input type='number' name='age' label='Age' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                                        <Input type='date' name='date_of_birth' label='DOB' />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                                        <Input type='radio' options={['male', 'female']} name='gender' label='Gender' />
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <Input type='radio' options={['1', '2', '3']} name='level' label='Level' className='justify-space-between' />
                                    </div>
                                </div>
                                <div className='grid inner-grid col-lg-12 col-md-12 col-sm-12 col-xs-12' id='parent-info'>
                                    <h2 className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>Parent Information:</h2>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <Input type='text' name='parent_name' label='Name of Parent(s)' />
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <Input type='text' name='guardian_name' label='Name of Guardian(s)' />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <Input type='text' name='address' label='Address' />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                        <Input type='text' name='contact' label='Contact' />
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <Input type='radio' options={['yes', 'no']} name='subscribe' label='Do you receive text messages on this contact? if not, please' className='mg-b-5' />
                                        <Input type='text' name='alt_contact' label='Indicate text message contact' />
                                    </div>
                                </div>
                                <div className='grid inner-grid col-lg-12 col-md-12 col-sm-12 col-xs-12' id='medical-info'>
                                    <h2 className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>Child Medical Information:</h2>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <Input type='textarea' name='medical_cond' label='Medical conditions(s)' className='extend-height' />
                                    </div>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <Input type='textarea' name='allegies' label='Allegies' className='extend-height' />
                                    </div>
                                </div>
                                <div className='grid inner-grid col-lg-12 col-md-12 col-sm-12 col-xs-12' id='declaration'>
                                    <h2 className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>Declaration:</h2>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                        <p>
                                            I, &nbsp;
                                            <Input type='text' name='certify_name' label='Full Name' />
                                            &nbsp;hereby certify to the best of my knowledge that the above information is true and accurate. I understand that in the event that my information is found to be false or misleading, the applicant will be disqualified and fees forfeited at Queen Yekel's. Unrivaled Nursery and Kindergarten. All information provided will be treated with strict confidence. I understand that payment of fees confirms my registration and acknowledgement that I have read,
                                            understood and agree to all Terms and conditions of the said school.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-lg-5 col-md-6 col-sm-6 col-xs-12'>
                                    <Button type='submit' className=''>
                                        <span>Submit Request</span>
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div className='image-section col-lg-2 col-md-2 col-sm-12 col-xs-12'></div>
                    </div>
                </section>
            </div>
        </PublicContainer>
    );
};

export default RequestRegistration;
