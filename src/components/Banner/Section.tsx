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
                <div className={`space-y-8 mx-auto max-w-screen-lg p-2 ${isActive ? 'animate-fade-in' : ''}`}>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Sobre mim:</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Interesses e Objetivos:</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            ) : (
            <div className={`${isActive ? 'animate-fade-in active' : ''}`}>
                <img src="https://avatars.githubusercontent.com/u/23489043?v=4" alt="Leonardo Lima - Perfil" className="mx-auto rounded-full w-[12rem] h-[12rem] border-2" />
                <div className="text-center py-10">
                    <h2 className="text-4xl py-1 font-medium">Leonardo Lima</h2>
                    <h3 className="text-2xl py-1 font-thin">Desenvolvedor .NET</h3>
                    <p className="text-2xl py-1 font-thin">Confira meu perfil no&nbsp;
                        <a className={`text-pink-500 link-github`} target="_blank" href="https://github.com/leolimaf">GitHub</a>
                    </p>
                </div>
            </div>
            )}
        </div>
    )
}