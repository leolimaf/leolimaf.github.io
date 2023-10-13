import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface NavbarProps {
    isResumoAtivo: boolean;
    onHandleResumo: () => void;
  }

export default function Navbar(props: NavbarProps) {

    return (
        <nav className="flex justify-between py-8 mb-8">
            <h1 className="text-xl italic">leolimaf</h1>
            <ul className="flex items-center">
                <li>
                <button
                    onClick={props.onHandleResumo}
                    className={`bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded-md ml-8 flex items-center`}>
                    Resumo&nbsp;{props.isResumoAtivo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
                </li>
            </ul>
        </nav>
    )
}