import { useEffect, useState } from "react";

interface SectionProps {
    isResumoAtivo: boolean;
  }

export default function Section(props: SectionProps) {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(false);
        setTimeout(() => {
          setIsActive(true);
        }, 10);
      }, [props.isResumoAtivo]);

    return (
        <div>
            {props.isResumoAtivo ? (
                <div className={`space-y-8 mx-auto max-w-screen-lg p-2 ${isActive ? 'animate-fade-in' : 'invisible'}`}>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Sobre mim:</h2>
                        <p>Sou um desenvolvedor de softwares determinado em criar soluções eficientes e seguras, aplicando as melhores práticas de desenvolvimento e acompanhando as tendências tecnológicas. Intrigado em entender como as aplicações funcionam, estou sempre trabalhando em vários projetos, pois gosto de me desafiar e adquirir novos conhecimentos.</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Interesses e Objetivos:</h2>
                        <p>Atualmente, estou me dedicando mais a aperfeiçoar meus conhecimentos no desenvolvimento de aplicações web, utilizando principalmente a linguagem de programação C# e a plataforma .NET. Também tenho buscado aprimorar meu aprendizado em bancos de dados, testes automatizados, arquiteturas baseadas em microsserviços e computação em nuvem.</p>
                        <p>Tenho como perspectiva para o futuro me especializar na engenharia de softwares e continuar trabalhando de maneira ágil, para que assim eu possa me desenvolver profissionalmente, alcançando melhores resultados.</p>
                    </div>
                </div>
            ) : (
            <div className={`${isActive ? 'animate-fade-in' : 'invisible'}`}>
                <img src="https://github.com/leolimaf.png" alt="Leonardo Lima - Perfil" className="mx-auto rounded-full w-[12rem] h-[12rem] border-2" />
                <div className="text-center py-10">
                    <h2 className="text-4xl py-1 font-medium">Leonardo Lima</h2>
                    <h3 className="text-2xl py-1 font-thin">Desenvolvedor .NET</h3>
                    <p className="text-2xl py-1 font-thin">Confira meu perfil no&nbsp;
                        <a className={`text-pink-500 font-medium link-github`} target="_blank" href="https://github.com/leolimaf">GitHub</a>
                    </p>
                </div>
            </div>
            )}
        </div>
    )
}