import profile from '../assets/images/profile.jpg'

export default function Banner() {

    return (
        <div className="min-h-screen px-9">
            <nav className="flex justify-between py-8 mb-12">
                <h1 className="text-xl italic">leolimaf</h1>
                <ul className="flex items-center">
                    <li>
                        <a className={`bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded-md ml-8
                        `} href="#">Resumo</a>
                    </li>
                </ul>
            </nav>
            <img src={profile} alt="Leonardo Lima - Profile" className="mx-auto rounded-full w-[12rem] h-[12rem] border-2" />
            <div className="text-center py-10">
                <h2 className="text-4xl py-1 font-medium">Leonardo Lima</h2>
                <h3 className="text-2xl py-1 font-thin">Desenvolvedor Back-End</h3>
                <p className="text-2xl py-1 font-thin">Confira meus projetos no&nbsp;
                    <a className="text-pink-500 underline" target="_blank" href="https://github.com/leolimaf">GitHub</a>
                </p>
            </div>
        </div>
    )
}