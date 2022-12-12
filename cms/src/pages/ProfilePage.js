import { useAuth0 } from "@auth0/auth0-react";
import * as React from "react";
import "../style.css";

/* eslint-disable */
export function ProfilePage() {
    const { user } = useAuth0();
    return <>
        {user && <div className="header__wrapper_profile">
            <div className="cols__container">
                <div className="left__col">
                    <div className="img__container">
                        <img src={user.picture} alt="Anna Smith" />
                        <span></span>
                    </div>
                    <h2>{user.name}</h2>
                    <p>UX/UI Designer</p>
                    <p>{user.email}</p>

                    <ul className="about" >
                        <li><span>4,073</span>Followers</li>
                        <li><span>322</span>Following</li>
                        <li><span>200,543</span>Attraction</li>
                    </ul >

                    <div className="content" >
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
                            erat volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl
                            ligula egestas nulla.
                        </p>
                    </div >
                </div >
                <div className="right__col" >
                    <nav>
                        <ul>
                            <li><a href="">photos</a></li>
                        </ul>
                        {/* <button>Follow</button> */}
                    </nav>

                    <div className="photos" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU" alt="Photo" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU" alt="Photo" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU" alt="Photo" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU" alt="Photo" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU" alt="Photo" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU" alt="Photo" />
                    </div >
                </div >
            </div >
        </div >}
    </>
}