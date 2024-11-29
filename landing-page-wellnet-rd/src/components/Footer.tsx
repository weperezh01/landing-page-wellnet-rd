import "../styles/Footer.css";

//Fake data
const footerSections = [
    {
        title: "Quick links",
        links: [
            { text: "About Us", url: "" },
            { text: "Careers", url: "" },
            { text: "Contact Us", url: "" },
        ],
    },
    {
        title: "Siguenos",
        links: [
            { text: "Facebook", url: "https://facebook.com" },
            { text: "Twitter", url: "https://twitter.com" },
            { text: "Instagram", url: "https://instagram.com" },
        ],
    },
];

const contactoSections = {
    telefono: [
        { phone: "8291236578" }
    ],
    correo: [
        { email: "correopordefault@gmail.com" }
    ],
    direccion: [
        { direccion: "Espaillat, Rep. Dom." }
    ],
    acercaDe: "Somo una empresa dedicada a realizar servicios de internet. La mejor empresa que hay en el mercado de servicios de internet y más, ven y confia.",
    copyRight: "copyright @ 2024 by EM Software",
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>About us</h3>
                    <p>
                        {contactoSections.acercaDe}
                    </p>
                </div>

                {
                    footerSections.map((section, index) => {
                        return (
                            <div key={index} className="box">
                                <h3>{section.title}</h3>
                                {
                                    <a title="" href="#">{section.links.map((link, linkIndex) => {
                                        return (
                                            <a key={linkIndex} href={link.url}>{link.text}</a>
                                        )
                                    })}</a>
                                }
                            </div>
                        )
                    })
                }

                {
                    <div className="box">
                        <h3>Contacto react</h3>
                        <div className="info">
                            <i className="fas fa-phone"></i>
                            {
                                contactoSections.telefono.map((phone, index) => {
                                    return(
                                        <p>{`+${phone.phone}`}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="info">
                            <i className="fas fa-envelope"></i>
                            {
                                contactoSections.correo.map((correo, index) => {
                                    return(
                                        <p>{`${correo.email}`}</p>
                                    )

                                })
                            }
                        </div>
                        <div className="info">
                            <i className="fas fa-map-marker-alt"></i>
                            {
                                contactoSections.direccion.map((direccion, index) => {
                                    return(
                                        <p>{`${direccion.direccion}`}</p>
                                    )

                                })
                            }
                        </div>
                    </div>
                }               
            </div>

            <h1 className="credit">&copy; {contactoSections.copyRight} </h1>
        </div>
    );
};

export default Footer;
