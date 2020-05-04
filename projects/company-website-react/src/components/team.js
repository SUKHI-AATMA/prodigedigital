import React from 'react';
import TitleIcon from '../img/icon/title-icon.png';
import TeamMember1 from '../img/team/people/people-1.jpg';
import TeamMember2 from '../img/team/people/people-2.jpg';
import TeamMember3 from '../img/team/people/people-3.jpg';
import TeamMember4 from '../img/team/people/people-4.jpg';

const Team = () => {
    return (
        <section className="team_people_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="team_people_text">
                            <div className="l_title">
                                <img src={TitleIcon} alt="" />
                                <h2>We build a strong team of great people</h2>
                            </div>
                            <p>From our studio in Mumbai, you will find us working across: Creative Web Design, Web Development, Branding & Digital Marketing.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team_img_inner">
                            <div className="row">
                                <div className="col-lg-6 col-6">
                                    <div className="team_img_item">
                                        <img src={TeamMember1} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6">
                                    <div className="team_img_item">
                                        <img src={TeamMember2} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6">
                                    <div className="team_img_item">
                                        <img src={TeamMember3} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6">
                                    <div className="team_img_item">
                                        <img src={TeamMember4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;