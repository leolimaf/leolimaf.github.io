import { useState } from "react";

import Navbar from './Navbar'
import Section from './Section'

export default function Banner() {

    const [isResumoAtivo, setIsResumoAtivo] = useState(false);

    const handleResumo = () => {
        setIsResumoAtivo((prevState) => !prevState);
      };

    return (
        <div className="min-h-screen px-9">
            <Navbar isResumoAtivo={isResumoAtivo} onHandleResumo={handleResumo} />
            <Section isResumoAtivo={isResumoAtivo} />
        </div>
    )
}