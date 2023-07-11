import { useRouter } from "next/router";
import styles from "../../styles/banking.module.css"

function Letsconnect() {
  const router = useRouter();

  const contact = () => {
    router.push("/contact-us")
  }

  return (
    <div className="col-md-12 p-0  ">
      <div className={styles.connect_background}>
        <div className="col-md-12 text-center display_h pt-5 pb-4 ">
          <div className="col-md-12">
            <h6 className={`description_text_web`}>Get in touch – let us create the digital brain of your organisation.</h6>
            <h4 className="mt-4 background_button_dark1"><b>Let’s Connect</b></h4>
            <button class="btn btn-dark px-5 background_button_dark animated_button_banner bg-dark text-light py-2 px-5 mb-4" onClick={() => contact()}>
              <span class="button-text">Contact Us</span>
              <span class="animation-layer"></span>
            </button>
          </div>
        </div>
        <div className="col-md-12 text-center display_pc pt-5 pb-2 ">
          <div className="col-md-12">
            <h6 className={styles.p_banner}>With Our Future-Proof Software Solutions</h6>
            <h4 className=" background_button_dark1"><b>Lets Connect</b></h4>
            {/* <button onClick={() => contact()} className="btn btn-danger  background_button_dark2 mb-4">Contact Us</button> */}
            <button class="btn btn-danger  background_button_dark2 mb-4 animated_button_banner" onClick={() => contact()}>
              <span class="button-text">Contact Us</span>
              <span class="animation-layer"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Letsconnect