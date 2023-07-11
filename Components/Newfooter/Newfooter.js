import Head from "next/head";
import styles from "../../styles/index.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export default function Newfooter() {
  // const [newnav, setNewnav] = useState(false);
  // const [num1, setNum1] = useState(8);
  // const [num2, setNum2] = useState(9);
  // const [check, setCheck] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');
  // const [sum, setSum] = useState('');
  // const [subcri, setSubcri] = useState(true);

  // // useEffect(() => {
  // //   const summ =() =>{
  // //     setSum=num1+num2;
  // // }
  // //  }, []);


  // useEffect(() => {

  //   setSum(num1 + num2)

  // }, [num1, num2]);



  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let res = await fetch("https://httpbin.org/post", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         customerName: name,
  //         customerEmail: email,
  //         subject: subject,
  //         message: message
  //       }),
  //     });
  //     let resJson = await res.json();
  //     if (res.status === 200) {
  //       setSubcri(false);
  //       setName('');
  //       setEmail('');
  //       setSubject('');
  //       setMessage('');
  //       // toast.success("We will get back to you shortly");
  //     } else {
  //       setMessage("Some error occured");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };






  const router = useRouter();
  const twitter = () => {
    router.push(" https://twitter.com/selteq1")
  }

  const facebook = () => {
    router.push("https://www.facebook.com/seltequk/")
  }

  const linkedIn = () => {
    router.push("/https://www.linkedin.com/company/seltequk/mycompany/")
  }

  const Instagram = () => {
    router.push("https://www.instagram.com/selteq.solution/")
  }

  return (
    <>
      <Head>

        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        {/* fontasome V5 cdn  */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Head>
      <main className={styles.main_head}>
        <div className="col-md-12 px-md-5 px-0 bacground_c_b py-5">
          {/* <ToastContainer /> */}
          <div className="col-md-12 px-md-5 px-0">
            <div className="row">
              <div className="col-md-5">
                <div className="col-md-12">
                  <h4 className="red_foter">CONTACT US</h4>
                </div>
                <form
                // action="https://formspree.io/f/myyaqbve"
                //  action="https://formspree.io/f/xrgvwojd"
                // action="https://formspree.io/f/mgebjpql"
                action="https://formspree.io/f/xrgvwojd"
                 method="POST"
                //  onSubmit={handleSubmit}
                 >
                  <div className="col-md-12">
                    <label className="color_label mt-3">Name</label>
                    <input
                    required
                      className="form-control background_input_sub"
                      type="text"
                      name="Name"
                      // value={name}
                      // onChange={(event) => setName(event.target.value)}
                     
                    />
                    <label className="color_label mt-3">Email</label>
                    <input
                    required
                    Name="Email"
                      // value={email}
                      // onChange={(event) => setEmail(event.target.value)}
                      className="form-control background_input_sub"
                      type="text"
                    />
                    <label className="color_label mt-3">Subject</label>
                    <input
                    required
                    Name="Subject"
                      // value={subject}
                      // onChange={(event) => setSubject(event.target.value)}
                      className="form-control background_input_sub"
                      type="text"
                    />
                    <label className="color_label mt-3">Message</label>
                    <textarea
                    required
                    Name="Message"
                      // value={message}
                      // onChange={(event) => setMessage(event.target.value)}
                      className="form-control background_input_sub"
                      rows={4}
                      type="text"
                    ></textarea>
                    <div className="col-md-12 text-right px-0 mt-4">
                    <button type="submit" className="btn btn-danger btn_color_subs px-4 ">
                                <span class="button-text">Subscribe</span>
                                <span class="animation-layer"></span>
                              </button>
                    </div>
                  </div>
                  {/* <div className="col-md-12 mt-4">
                    <div className="row">

                      <div className="col-md-6 col-6 dflex m-auto">
                        <span className="pt-2 pr-3"> {num1} + {num2} </span>
                        <input
                          onChange={(event) => setCheck(event.target.value)}
                          className="form-control form-control-lg  background_input_sub1"
                          type="number"
                          maxLength={2}
                        />
                      </div>

                      {sum == check ? (
                        <>
                          {subcri ? (
                            <div className="col-md-6 col-6 text-right">
                              <button type="submit" className="btn btn-danger btn_color_subs px-4 animated_button_banner">
                                <span class="button-text">Subscribe</span>
                                <span class="animation-layer"></span>
                              </button>
                            </div>
                          ) : (
                            <div className="col-md-6 col-6 text-right">
                              <button type="submit" className="btn btn-success btn_color_subs1 px-4">
                                {" "}
                                Sent{" "}
                              </button>
                            </div>
                          )}
                        </>

                      ) : (
                        <div className="col-md-6 col-6 text-right">
                          <button disabled className="btn btn-danger btn_color_subs px-4 animated_button_banner">
                            {" "}
                            <span class="button-text">Sum numbers</span>
                            <span class="animation-layer"></span>
                          </button>
                        </div>
                      )}

                    </div>
                  </div> */}
                </form>
              </div>
              <div className="col-md-1"> </div>
              <div className="col-md-6">
                <div className="col-md-12 margin_tt_f">
                  <h4 className="red_foter">ABOUT US</h4>
                  <p className="p_footer mt-4">
                    Selteq, headquartered in London, is an ultimate IT solutions
                    provider aimed at helping organizations embark on innovation
                    to achieve competitiveness. We focus on streamlining
                    business processes via our cutting-edge technological
                    reforms.
                  </p>
                  <p className="p_footer1 mt-5">
                    <a className="hover_phone" href="mailto: someone@yoursite.com">
                      <i class="far fa-envelope"></i>
                      &nbsp;&nbsp;contact@selteq.net
                    </a>
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="p_footer1 mt-2">
                        <a className="hover_phone" href="tel: +1 650 999 6951">
                          <i class="fas fa-mobile-alt"></i>&nbsp;&nbsp;UK +44 800
                          4488 994
                        </a>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="p_footer1 mt-2"><a className="hover_phone" href="tel: +1 650 999 6951">USA +1 650 999 6951</a></p>
                    </div>
                    <div className="col-md-6">
                      <p className="p_footer1 mt-2 mb-0">
                        <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;UK
                      </p>
                      <p className="p_footer2 mt-2">
                        <a className="hover_phone" href="https://www.google.com/maps/place/2+Portman+St,+London+W1H+6DU,+UK/@51.5141277,-0.1580091,17z/data=!3m1!4b1!4m6!3m5!1s0x48760532d8f02959:0x71f6ca6770751a68!8m2!3d51.5141244!4d-0.1558204!16s%2Fg%2F11gfj724n7" target="_blank" rel="noreferrer">
                          Portman House, 2 Portman St, London W1H 6DU,United
                          Kingdom
                        </a>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="p_footer1 mt-2 mb-0">
                        <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;USA
                      </p>
                      <p className="p_footer2 mt-2">
                        <a className="hover_phone" href="https://www.google.com/maps/place/125+University+Ave,+Palo+Alto,+CA+94301,+USA/@37.444042,-122.1659282,17z/data=!3m1!4b1!4m6!3m5!1s0x808fbb3752f85d95:0xfd3d148988499a80!8m2!3d37.4440378!4d-122.1637395!16s%2Fg%2F11bw3wxd68" target="_blank" rel="noreferrer">
                          125 University Avenue, Palo Alto, CA 94301. USA
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 p-0 mt-4">
                    <span onClick={() => twitter()} className="color_i_r">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span onClick={() => facebook()} className="color_i_r pl-3">
                      <i class="fab fa-facebook-f"></i>
                    </span>
                    <span onClick={() => linkedIn()} className="color_i_r pl-3">
                      <i class="fab fa-linkedin-in"></i>
                    </span>
                    <span onClick={() => Instagram()} className="color_i_r pl-3">
                      <i class="fab fa-instagram"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
