import React from 'react'

const Footer = () => {

    const footerLinks = (ele) => {
        const allfooterLinks = document.querySelectorAll('.footerLinks');
        switch (ele) {
            case 0:
                allfooterLinks.forEach((item, index) => index === 0 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 1:
                allfooterLinks.forEach((item, index) => index === 1 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 2:
                allfooterLinks.forEach((item, index) => index === 2 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 3:
                allfooterLinks.forEach((item, index) => index === 3 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 4:
                allfooterLinks.forEach((item, index) => index === 4 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 5:
                allfooterLinks.forEach((item, index) => index === 5 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;

            default:
                allfooterLinks.forEach((item) => item.style.opacity = 1);
                break;
        }
    };

    const backToNormal = () => {
        const allfooterLinks = document.querySelectorAll('.footerLinks');
        allfooterLinks.forEach((item) => item.style.opacity = 1);   

    };

    return (
        <>
            <footer>
                <h1>
                    Let's<br />#ConnectOnCutting?
                </h1>

                <aside onMouseLeave={backToNormal}>
                    <a data-cursorpointermini={true} onMouseOver={() => footerLinks(0)} href="/" className="footerLinks" >Home</a>
                    <a data-cursorpointermini={true} onMouseOver={() => footerLinks(1)} href="https://www.mbachaiwala.com/about/" className="footerLinks" target={"_blank"}>Story</a>
                    <a data-cursorpointermini={true} onMouseOver={() => footerLinks(2)} href="/media" target={"_blank"} className="footerLinks">Media</a>
                    <a data-cursorpointermini={true} onMouseOver={() => footerLinks(3)} href="/franchise" target={"_blank"} className="footerLinks">Franchises</a>
                    <a data-cursorpointermini={true} onMouseOver={() => footerLinks(4)} href="https://www.instagram.com/mbachaiwalaind/" target={"_blank"} className="footerLinks">Events</a>
                    <a data-cursorpointermini={true} onMouseOver={() => footerLinks(5)} href="https://www.mbachaiwala.com/contact/" target={"_blank"} className="footerLinks">Chai wala cares</a>

                </aside>
                <div>
                    <h5>Email</h5>
                    <a href="mailto: Info@mbachaiwala.com">Info@mbachaiwala.com</a>
                    <a href="mailto: franchise@mbachaiwala.com">Franchise@mbachaiwala.com</a>
                </div>
                <div>
                    <h5>Phone</h5>
                    <a href="tel: +917222905222">+91 722 290 5222</a>
                </div>
                <p>© COPYRIGHT - MBA CHAIWALA.</p>
            </footer>
            <div className="footer"></div> {/* Just for an overlay */}
        </>

    )
}

export default Footer