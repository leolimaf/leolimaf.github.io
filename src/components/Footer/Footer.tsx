import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram  } from 'react-icons/ai'

export default function Footer() {
    return(
        <div id="footer" className="bg-purple-950 p-8">
            <ul className="flex justify-center gap-7 text-4xl">
                <li>
                    <a className="link-icon-linkedin" href="https://linkedin.com/in/leonardolimaf" target="_blank">
                        <AiFillLinkedin />
                    </a>
                </li>
                <li>
                    <a className="link-icon-github" href="https://github.com/leolimaf" target="_blank">
                        <AiFillGithub />
                    </a>
                </li>
                <li>
                    <a className="link-icon-instagram" href="https://instagram.com/leolimaf54" target="_blank">
                        <AiOutlineInstagram />
                    </a>
                </li>
            </ul>
        </div>
    )
}