import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>about us</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                        labore voluptatibus ducimus eum libero, accusantium mollitia quam
                        dignissimos itaque aliquam odio reprehenderit! Sint aspernatur, recusandae
                        vitae libero natus voluptates quaerat?
                    </p>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#">home</a>
                    <a href="#">features</a>
                    <a href="#">about</a>
                    <a href="#">review</a>
                    <a href="#">pricing</a>
                    <a href="#">contact</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="#">facebook</a>
                    <a href="#">instagram</a>
                    <a href="#">pinterest</a>
                    <a href="#">twitter</a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <div className="info">
                        <i className="fas fa-phone"></i>
                        <p>+123-456-7890 <br />+333-222-1111 </p>
                    </div>
                    <div className="info">
                        <i className="fas fa-envelope"></i>
                        <p>randomemail@gmail.com <br /> otheremail@gmail.com </p>
                    </div>
                    <div className="info">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Espaillat, Rep. Dom. </p>
                    </div>
                </div>
            </div>

            <h1 className="credit">&copy; copyright @ 2021 by EM Software </h1>
        </div>
    )
}

export default Footer