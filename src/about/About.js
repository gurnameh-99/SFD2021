import './About.css'

const About = () => {
    var imageName = require('./imguse1.png')
    var imageName2 = require('./imguse2.jpg')

    return (
        <div className="allpart">
            <div className="intro">
                <h2>About Software Freedom Day</h2>
                <p>SFD is a worldwide celebration of Free and Open Source Software (FOSS). Our goal in this celebration is to educate the worldwide public about the benefits of using high quality FOSS in education, in government, at home, and in business -- in short, everywhere! The non-profit organization Software Freedom International coordinates SFD at a global level, providing support, giveaways and a point of collaboration,
                    but volunteer teams around the world organize the local SFD events to impact their own communities.</p>
                <img className="imageuse1" src={imageName.default} />
            </div>
            <div className="other1">
                <br />
                <h4>Vision</h4>
                <p>Our vision is to empower all people to freely connect, create and share in a digital world that is participatory, transparent, and sustainable.</p>
                <h4>Objectives</h4>
                <p>
                    <ul>
                        <li>To celebrate software freedom and the people behind it</li>
                        <li>To foster a general understanding of software freedom, and encourage adoption of free software and open standards</li>
                        <li>To create more equal access to opportunities through the use of participatory technologies</li>
                        <li>To promote constructive dialogue on responsibilities and rights in the information society</li>
                        <li>To be inclusive of organizations and individuals that share our Vision</li>
                        <li>To be pragmatic, transparent, and responsible as an organisation</li>
                    </ul>
                </p>
                <h3>What's Free Software?</h3>
                <p>Free software is software that gives you the user the freedom to share, study and modify it. We call this free software because the user is free. To use free software is to make a political and ethical choice asserting the right to learn, and share what we learn with others.Warp Framework - A fast and
                    slick theme framework which provides a rich tool set to develop cross-platform themes.</p>
                <img className="imageuse2" src={imageName2.default} />

            </div>
            <div className="other2">
                <h4>About the organization behind SFD</h4>
                <p>Started in 2004 to promote Free Software with Software Freedom Day, Digital Freedom Foundation later registered as a charity in the USA under the Software Freedom International name in 2007, is the non-profit organization at the origin of Software Freedom Day, Education Freedom Day and Hardware Freedom Day. The name change came progressively starting in 2011 in order to reflect the changes in our directions and also because we had to change registration territory. </p>

                <p>   In 2016 DFF has taken the responsibility of running the Document Freedom Day to promote open standards to each corner of the world. </p>

                <p> DFF has transitioned over the past ten years from a marketing events organizer to advocate the user of Free Software to an organization which has broaden its scope to digital knowledge in general covering free software, open hardware and content (OER, free culture), and assembled or created all the required pieces to drive an educational project aimed at educating the people in needs.</p>

                <p>As a worldwide organization with hundreds of local groups and associations taking part in our efforts, we hope to extend our reach into the Open Education field to every corner of the world in the long run. </p>    

                 <p>   DFF handles sponsorship contracts, official team registrations, sending out schwags to teams, the annual Best SFD Event Competition, and marketing Software Freedom Day, Document Freedom Day, Education Freedom Day and Hardware Freedom Day. Hundreds of teams around the world manage the local celebrations and help to send out an educational global message. So do drop by and attend an SFD, DFD, EFD and HFD events nearby! </p>

                  <p>  The vision of DFF is to provide access to knowledge via technology in which everybody can participate and learn from.</p>
            </div>
        </div>
    );
}

export default About;