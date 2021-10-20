import React from 'react';
import "animate.css";
import Footer from '../Footer/Footer';
import MenuBar from '../Menubar/MenuBar';



const Page = () => {
    return (
        <div>
            <div>
                <div className="about-header py-5" >
                    <MenuBar></MenuBar>
                </div>


                <div className="animate__animated animate__bounceanimate__animated animate__fadeInTopRight" >
                    <h1 className="p-4 body-name">Pregnancy Diet Chart</h1>

                    <p> Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.Et harum quidem rerum facilis est et expedita distinctio..Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.Et harum quidem rerum facilis est et expedita distinctio.Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt</p>
                    <div className="row">
                        <div className="col-md-6 p-2 card">
                            <h2 className="text-info">News</h2>
                            <p> The office is located 100 meters from the metro station and 500
                                meters from the A2 route, which provides easy access both by metro
                                and other means of transport.See our doctor’s schedule and make an
                                appointment.</p>
                        </div>
                        <div className="col-md-6 p-2 card">
                            <h2 className="text-info">Weekly Report </h2>
                            <ul class="list-group">
                                <li class="list-group-item">ROUTINE</li>
                                <li class="list-group-item">doctors Meetings schedule</li>
                                <li class="list-group-item">WEEKLY REPORT</li>
                                <li class="list-group-item">PROJECT SUBMIT</li>
                                <li class="list-group-item"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-2">
                        <h1 className="body-name">  Doctors Opinion </h1>
                        <p>We love that Yeti carries their brand and voice onto the contact us page with a beautiful image of a hiker.They add to this with a cheeky line of text,  “While we're good with smoke signals, there are simpler ways for us to get in touch and answer your questions.”

                            While all these elements are great and there’s plenty of essential information present (hours, corporate address, etc.), the page does lack a form.The “Send an Email” call-to-action might be better served as a form in a lightbox, instead of opening up in a brand new tab.</p>
                    </div>
                </div>



                <div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Page;