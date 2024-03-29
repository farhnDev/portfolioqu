export default function LandingPage() {
    return (
        <section className={'pt-48 pb-12 dark:bg-dark'} id={'home'}>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className={'text-base font-semibold text-primary md:text-xl '}>Hai Apa Kabar 💕saya <span
                            className={'block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white'}>Farhan Maulana Pangestu</span>
                        </h1>
                        <h2 className={'font-medium text-lg mb-5 text-secondary lg:text-2xl'}>Junior Web <span
                            className={'text-dark dark:text-white'}>Developer</span></h2>
                        <p className={'font-medium text-secondary mb-10 leading-relaxed'}>Terkadang merasa lelah itu
                            wajar, tetapi ingat kata menyerah itu <span
                                className={'text-dark font-bold dark:text-white'}>Kurang AJ4R!</span></p>
                        <a href="#contact"
                           className={'text-base font-semibold text-white py-3 px-8 bg-primary hover:opacity-75 rounded-full transition duration-300 ease-in-out'}>Contact
                            Me</a>
                        <a href="/resume.pdf" target={'_blank'} rel="noreferrer"
                           className={'text-base font-semibold text-dark ml-4 py-3 px-8 border dark:text-white border-dark dark:border-white rounded-full lg:hidden'}>
                            Resume
                        </a>

                    </div>
                    <div className={'w-full self-end px-4 lg:w-1/2'}>
                        <div className={'relative mt-10 lg:mt-0 lg:right-0'}>
                            <img src="/img/11.png" alt="" className={'relative max-w-full mx-auto brightness-110 object-cover z-10'}/>
                            <span className={'absolute -bottom-5 left-1/2 -translate-x-1/2 lg:scale-110 '}>
                                    <svg width={'400'} height={'400'} viewBox="0 0 200 200"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#08BDBA"
                                              d="M49.9,-64.8C64.2,-58.4,74.7,-43.1,77.7,-26.9C80.6,-10.8,75.9,6.2,70.6,23.2C65.4,40.1,59.6,57.1,47.8,66.7C35.9,76.2,18,78.4,1.5,76.3C-15,74.3,-30,68.2,-43.3,59.1C-56.5,49.9,-68,37.9,-72.9,23.5C-77.8,9.1,-76.2,-7.5,-68.9,-20C-61.6,-32.5,-48.6,-40.8,-36.2,-47.7C-23.8,-54.6,-11.9,-60.2,3,-64.3C17.9,-68.4,35.7,-71.1,49.9,-64.8Z"
                                              transform="translate(100 100) scale(1)"/>
                                    </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}