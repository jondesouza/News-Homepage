import React from 'react'
import './Main.css'
import news1 from '../assets/images/news1.jpg'
import news2 from '../assets/images/news2.jpg'
import news3 from '../assets/images/news3.jpg'

const mainContent = () => {
    return (
        <main className='main-content'>
            <h1 className='headline'>
                The Bright Future of Web 3.0?
            </h1>
            <div className="img1-nh"></div>
            <div className="content-big">
                <p>We dive into the next evolution of the web that claims to put the power of the plataforms back into the hands of the people. But it is realy fulfilling its promise?</p>

                <div className="content-button"><a href="/">Read more</a></div>
            </div>
            <div className="hotnews">
                <h2>New</h2>
                <div className="news">
                    <h3><a href="/">Hydrogen vs Electric Cars</a></h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <div className="news">
                    <h3><a href="/">The Downsides of AI Artistry</a></h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <div className="news finalnews">
                    <h3><a href="/">Is VC Funding Drying Up?</a></h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
            <div className="smallnews1">
                <img src={news1} alt="news" />
                <div className="content-small">
                    <h4>01</h4>
                    <h5><a href="/">Reviving Retro PCs</a></h5>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="smallnews2">
                <img src={news2} alt="news" />
                <div className="content-small">
                    <h4>02</h4>
                    <h5><a href="/">Top 10 Laptops of 2022</a></h5>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="smallnews3">
                <img src={news3} alt="news" />
                <div className="content-small">
                    <h4>03</h4>
                    <h5><a href="/">The Growth of Gaming</a></h5>
                    <p>How pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </main>
    )
}

export default mainContent