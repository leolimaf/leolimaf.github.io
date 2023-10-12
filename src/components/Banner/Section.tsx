import profile from '../../assets/images/profile.jpg'

interface SectionProps {
    isResumoAtivo: boolean;
  }

export default function Section(props: SectionProps) {

    return (
        <div>
            {props.isResumoAtivo ? (
                <div></div>
            ) : (
            <div>
                <img src={profile} alt="Leonardo Lima - Perfil" className="mx-auto rounded-full w-[12rem] h-[12rem] border-2" />
                <div className="text-center py-10">
                    <h2 className="text-4xl py-1 font-medium">Leonardo Lima</h2>
                    <h3 className="text-2xl py-1 font-thin">Desenvolvedor Back-End</h3>
                    <p className="text-2xl py-1 font-thin">Confira meu perfil no&nbsp;
                        <a className={`text-pink-500 no-underline hover:underline`} target="_blank" href="https://github.com/leolimaf">GitHub</a>
                    </p>
                </div>
            </div>
            )}
        </div>
    )
}