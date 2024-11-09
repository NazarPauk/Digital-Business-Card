import React from "react"

export default function Header(){
    return(
        <header className="card__header" >
            <div className="card__photo-wrapper">
                <img className="card__photo" src="https://image.png" alt=""/>
            </div>
            <div className="card__wrapper">
                <h2 className="card__username">Laura Smith</h2>
                <h3 className="card__position">Frontend Developer</h3>
                <a className="card__link" href="">laurasmith.website</a>
                <nav className="card__contacts">
                    <button className="card__contact-btn">
                        <svg  className="card__contact-icon"  xmlns="http://www.w3.org/2000/svg"><path d="M2.102 4.707 8.5 7.906l6.398-3.199A1.6 1.6 0 0 0 13.3 3.2H3.7a1.6 1.6 0 0 0-1.598 1.507Z" fill="#1E1F26"/><path d="m14.9 6.494-6.4 3.2-6.4-3.2V11.2a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6V6.494Z" fill="#1E1F26"/></svg>
                        Email
                    </button>
                    <button className="card__contact-btn_color_blue card__contact-btn ">
                        <svg       className="card__contact-icon"  xmlns="http://www.w3.org/2000/svg"><path d="M13.714 1.333H2.283a.956.956 0 0 0-.95.962v11.41c0 .53.426.962.95.962h11.431a.96.96 0 0 0 .953-.962V2.295a.959.959 0 0 0-.953-.962Zm-8.35 11.429H3.386V6.399h1.98v6.363h-.004ZM4.374 5.53a1.146 1.146 0 1 1 .001-2.293 1.146 1.146 0 0 1-.001 2.293Zm8.396 7.232h-1.976V9.667c0-.738-.015-1.688-1.027-1.688-1.03 0-1.188.804-1.188 1.634v3.149H6.604V6.399H8.5v.869h.027c.265-.5.91-1.027 1.872-1.027 2 0 2.372 1.319 2.372 3.033v3.488Z" fill="#fff"/></svg>
                        LinkendIn
                    </button>
                </nav>

            </div>
        </header>
    )
}