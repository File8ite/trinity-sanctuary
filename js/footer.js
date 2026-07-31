document.addEventListener("DOMContentLoaded", () => {

    const footer = document.getElementById("footer");

    if (!footer) return;


    footer.innerHTML = `

    <div class="container">

        <div class="footer-grid">


            <!-- BRAND -->

            <div class="footer-brand">

                <h2>
                    RCCG Trinity Sanctuary
                </h2>

                <span>
                    Continent 11 Headquarters
                </span>


                <p>
                    A place of worship, fellowship, and spiritual growth.
                    We welcome you to experience God's presence with us.
                </p>


                <div class="footer-social">

                <span class="social-title">
                    Follow Trinity Sanctuary
                </span>

                <a href="https://www.facebook.com/rccgtrinitysanctuarykaduna?mibextid=LQQPHg" 
                target="_blank"
                aria-label="Facebook">

                    <i class="fa-brands fa-facebook-f"></i>

                </a>


                <a href="https://www.instagram.com/reel/DaaGHIKolm0/?igsh=YnZwdDB3c2w2aGl1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">

                    <i class="fa-brands fa-instagram"></i>

                </a>


                <a href="https://youtube.com/shorts/WA3PF8ebi9g?si=CrLz3ebXIGm8umzB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube">

                    <i class="fa-brands fa-youtube"></i>

                </a>


                <a href="https://vt.tiktok.com/ZSCpq7K42/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok">

                    <i class="fa-brands fa-tiktok"></i>

                </a>

            </div>

            </div>



            <!-- QUICK LINKS -->

            <div class="footer-links">

                <h3>
                    Quick Links
                </h3>


                <ul>

                    <li>
                        <a href="index.html">
                            Home
                        </a>
                    </li>


                    <li>
                        <a href="about.html">
                            About Us
                        </a>
                    </li>


                    <li>
                        <a href="ministries.html">
                            Ministries
                        </a>
                    </li>


                    <li>
                        <a href="sermons.html">
                            Sermons
                        </a>
                    </li>


                    <li>
                        <a href="events.html">
                            Events
                        </a>
                    </li>


                    <li>
                        <a href="give.html">
                            Online Giving
                        </a>
                    </li>


                    <li>
                        <a href="contact.html">
                            Contact
                        </a>
                    </li>

                </ul>

            </div>




            <!-- CONTACT -->

            <div class="footer-contact">


                <h3>
                    Contact & Address
                </h3>



                <p>

                    <i class="fa-solid fa-location-dot"></i>

                    RCCG Trinity Sanctuary,
                    No.1 Redeemed Close,
                    Off Bank Road,
                    Opposite Keystone Bank,
                    Singah Roundabout,
                    Kaduna North,
                    Kaduna State, Nigeria.

                </p>



                <p>

                    <i class="fa-solid fa-phone"></i>

                    +234 803 882 4894

                </p>




                <p>

                    <i class="fa-solid fa-envelope"></i>

                    info@rccgtrinitysanctuary.com

                </p>


            </div>


            <!-- NEWSLETTER SUBSCRIPTION (LEGAL & COMPLIANT) -->

            <div class="footer-newsletter">

                <h3>
                    Stay Connected
                </h3>

                <p class="newsletter-desc">
                    Subscribe to receive weekly sermon notes, event announcements, and spiritual updates directly in your inbox.
                </p>

                <form id="footer-newsletter-form" class="newsletter-form" action="https://formsubmit.co/info@rccgtrinitysanctuary.com" method="POST">
                    
                    <div class="newsletter-input-box">
                        <input type="email" id="newsletter-email" name="subscriber_email" placeholder="Enter your email address..." required aria-label="Email address for newsletter updates">
                        <button type="submit" class="btn-subscribe" aria-label="Subscribe to newsletter">
                            <span>Subscribe</span> <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>

                    <div class="privacy-consent-box">
                        <label class="consent-label">
                            <input type="checkbox" id="newsletter-consent" name="consent_agreed" required>
                            <span>I agree to receive newsletter updates from RCCG Trinity Sanctuary. I can unsubscribe at any time.</span>
                        </label>
                        <span class="privacy-note">
                            <i class="fa-solid fa-shield-halved"></i> We respect your privacy. Zero spam. Your data is protected under NDPR / GDPR.
                        </span>
                    </div>

                </form>

            </div>


        </div>



        <div class="footer-bottom">


            <p>
                © 2026 RCCG Trinity Sanctuary. All Rights Reserved.
            </p>


            <p>
                A Home for every soul. A place to grow in faith, love, and community.
            </p>


        </div>



    </div>

    `;

});