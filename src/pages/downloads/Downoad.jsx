import {useEffect} from 'react'

// import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import style from './Download.module.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function Download() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
        <Navbar download_state = 'active'/>
        <main className={style.download_container} data-aos="fade-up" data-aos-duration="3000">
            <section className={style.webtools}>
              <div className={style.title}>Web Development Softwares</div>
              <div className={style.cards}>
                <div className={style.card}>
                  <img src="./images/gitbash.png" alt="" />
                  <div className={style.card_body}>
                    <p>Application for Microsoft Windows that provides a Bash emulation environment to use the Git version control system.</p>
                    <Link to="/files/Git-2.44.0-64-bit.exe" target="_blank" download>
                      <div className={style.card_btn}>DOWNLOAD</div>
                    </Link>
                  </div>
                </div>
                <div className={style.card}>
                  <img src="./images/vscode.jpg" alt="" />
                  <div className={style.card_body}>
                    <p>Visual Studio Code (VS Code) is a free, powerful, and lightweight source code editor created by Microsoft.</p>
                    <Link to="/files/VSCodeSetup.exe" target="_blank" download>
                      <div className={style.card_btn}>DOWNLOAD</div>
                    </Link>
                  </div>
                </div>                
              </div>
            </section>

            <section className={style.repairtools}>
              <div className={style.title}>Repairs Softwares</div>
              <div className={style.cards}>
                <div className={style.card}>
                  <img src="./images/rufus.jpg" alt="" />
                  <div className={style.card_body}>
                    <p>Software for making bootable usb drive. supports both GPT and MBR</p> 
                    <Link to="/files/rufus-4.7.zip" target="_blank" download>               
                      <div className={style.card_btn}>DOWNLOAD</div>
                    </Link>
                  </div>
                </div>
                <div className={style.card}>
                  <img src="./images/yumi.png" alt="" />
                  <div className={style.card_body}>
                    <p>Software for making bootable usb drive. supports both GPT and MBR</p>
                    <Link to="/files/YUMI-exFAT-1.0.2.8.exe" target="_blank" download>
                      <div className={style.card_btn}>DOWNLOAD</div>
                    </Link>
                  </div>
                </div>
                <div className={style.card}>
                  <img src="./images/winrar.png" alt="" />
                  <div className={style.card_body}>
                    <p>WinRAR is a powerful archiver extractor tool, and can open all popular file formats.</p>
                    <Link to="/files/winrar-x64-531.exe" target="_blank" download>
                      <div className={style.card_btn}>DOWNLOAD</div>
                    </Link>
                  </div>
                </div>
                <div className={style.card}>
                  <img src="./images/kms.jpg" alt="" />
                  <div className={style.card_body}>
                    <p>Activator that helps users activate their MS Office & Windows operating system.</p>
                    <Link to="/files/KMSAuto.zip" target="_blank" download>
                      <div className={style.card_btn}>DOWNLOAD</div>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}
