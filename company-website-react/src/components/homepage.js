import React, {Fragment} from 'react';
import HomepageBanner from './homepage-banner';
import CompanyFeature from './company-feature';
import Testimonials from './testimonials';
import Team from './team';
import GetInTouch from './get-in-touch';
import ContactUsDetails from './contact-us-details';

const Homepage = () => {
    return (
        <Fragment>
            <HomepageBanner />
            <CompanyFeature />
            <Testimonials />
            <Team />
            <GetInTouch />
            <ContactUsDetails />
        </Fragment>
    )
}

export default Homepage;