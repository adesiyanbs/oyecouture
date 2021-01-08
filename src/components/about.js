import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css';
import '../styles/about.css';


function About() {
    return (
        <div>
            <div className="logoplace"></div>

            <h2 className="bodyh2">oyecouture</h2>
            <p>BESPOKE</p>
            <section id="top">
                <header>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </header>
            </section>
            <section id="about">
                <div class="abt-container">
                    <h1>About</h1>
                    <h4>OYECOUTURE</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae adipisci ducimus, provident harum
                    magni exercitationem, doloremque laboriosam porro aspernatur consequuntur fuga quidem quo sequi odit
                    autem officia est inventore iure! Natus mollitia ipsam ratione dolores laborum minus. Accusamus ab error
                    reiciendis unde dolores. Maiores delectus vel laudantium cum in itaque blanditiis aliquid quisquam est,
                    eius labore accusantium, at expedita ut, optio magni iusto! Facilis amet est dolor deserunt sapiente
                    eligendi illum ipsum nisi eius minima non perferendis rerum minus sed, corporis unde pariatur voluptas
                    enim nam error libero. Nihil, ad?
            </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam iusto ea voluptatum molestiae
                    neque, quidem, necessitatibus repellat est explicabo rem nemo laborum corporis at error dolores sit
                    provident, cumque libero iure commodi dolore. Corporis, recusandae esse non aliquam cum ex maiores
                    assumenda temporibus ducimus, eos perferendis dolore quas officiis!
            </p>
                </div>
            </section>
            <div className="logoplace"></div>

            <footer>Copyright oyecouture 2020 </footer>


        </div>
    )

}

export default About