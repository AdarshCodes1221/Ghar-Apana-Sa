import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="padding innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className='orangeText'>Our Contact</span>
          <span className='primaryText'>Easy to Contact Us</span>
          <span className='secondaryText'>
            We're dedicated to providing top-tier service, focused on your satisfaction.
            Every step of the way, we ensure your needs are met with care and efficiency.
          </span>

          {/* Contact Modes */}
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              
              {/* Call Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>9279791201</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call Now
                </div>
              </div>

              {/* Chat Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>6207023033</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Chat Now
                </div>
              </div>

              {/* Video Call Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Video-Call</span>
                    <span className='secondaryText'>9279791201</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Video-Call Now
                </div>
              </div>

              {/* Message Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>9279791201</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Message Now
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="c-right">
          <div className="image-container">
            <img src='./contact.jpg' alt='Contact' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
