import { useRouter } from "next/router";
import React from "react";

function Iotmobile(props) {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us")
  }

  return (
    <div className="col-md-12 px-0">
      {props?.object ? (
        <>
          {/* section1  */}
          <div className="col-md-12 px-0 background_pic_iot">
            <div className="container padding_sectin_1">
              <div className="col-md-12 px-0">
                <p className="heading_s1">{props.object.main_heading}</p>
                <p className="sub_heading_s1">
                  {props.object.sub_main_heading}
                </p>
                <p className="des_s1">
                  {props.object.main_heading_description}
                </p>
                {/* <button className="btn btn-danger background_button_s1" onClick={() => contact()}>
                  {" "}
                  BOOK CONSULTATION{" "}
                </button> */}
                <button class="animated_button_banner mb-5 py-2 px-3" onClick={() => contact()}>
                  <span class="button-text">BOOK CONSULTATION</span>
                  <span class="animation-layer"></span>
                </button>

              </div>
            </div>
          </div>
          {/* section2  */}
          <div className="col-md-12 px-0">
            <div className="container">
              <div className="col-md-12 px-0 pt-4">
                <p className="sec_2heading">{props.object.Section2_heading}</p>
                <p className="sev_2_des">{props.object.Section2_description}</p>
              </div>
              <div className="col-md-12 px-0 pt-4">
                <div className="row">
                  {props?.object?.Section2_detail?.map((item, index) => {
                    return (
                      <>
                        <div className="col-md-6 m-auto">
                          <p className="text_sec2_head mb-2 ">
                            {item.sub_detail_heading}
                          </p>
                          <p className="text_sec2_head_sub">
                            {item.sub_detail_description}
                          </p>
                        </div>
                        <div className="col-md-6">
                          {index % 2 === 0 ? (
                            <img
                              className="img-fluid"
                              src="https://1864597015.rsc.cdn77.org/selteq/images/cloudy.png"
                            />
                          ) : (
                            <img
                              className="img-fluid"
                              src="https://1864597015.rsc.cdn77.org/selteq/images/f.png"
                            />
                          )}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* section3  */}
          <div className="col-md-12 px-0 background_s3">
            <div className="col-md-12 px-0">
              <div className="container">
                <div className="col-md-12 px-0 pt-4">
                  <p className="s3_heading">{props.object.Section3_heading}</p>
                  <p className="s3_subheading">
                    {props.object.Section3_description}
                  </p>
                </div>
              </div>
            </div>
            <div className="container mt-5 pt-2">
              <div className="col-md-12">
                <div className="row">
                  {/* cards  */}
                  {props?.object?.Section3_detail?.map((item, index) => {
                    return (
                      <div className="col-md-4 ">
                        <div className="col-md-12 background_cards text-center px-2">
                          <p className="textcard_ead pt-5">
                            {item.sub_detail_heading}
                          </p>
                          <div className="col-md-12">
                            <img
                              className="img-fluid"
                              src="https://1864597015.rsc.cdn77.org/selteq/images/m3.png"
                            />
                          </div>
                          <p className="textcard_ead1 pt-3">
                            {item.sub_detail_description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {/* cards  */}
                  {/* <div className="col-md-4 ">
                <div className="col-md-12 background_cards text-center">
                  <p className="textcard_ead pt-5">Data Storage & Retrieval</p>
                  <div className="col-md-12">
                    <img
                      className="img-fluid"
                      src="https://1864597015.rsc.cdn77.org/selteq/images/m1.png"
                    />
                  </div>
                  <p className="textcard_ead1 pt-3">
                    Secure and reliable storage solutions for your IoT data,
                    including on-premises and cloud-based options.
                  </p>
                </div>
              </div> */}
                  {/* cards  */}
                  {/* <div className="col-md-4 ">
                <div className="col-md-12 background_cards text-center">
                  <p className="textcard_ead pt-5">
                    Data Visualisation & Reporting
                  </p>
                  <div className="col-md-12">
                    <img
                      className="img-fluid"
                      src="https://1864597015.rsc.cdn77.org/selteq/images/m2.png"
                    />
                  </div>
                  <p className="textcard_ead1 pt-3">
                    Visualise your data in an easy-to-understand format. Create
                    custom dashboards and export data in various formats for
                    further analysis.
                  </p>
                </div>
              </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="container">
                <div className="col-md-12 mt-4 pt-5">
                  <p className="s3_heading">{props.object.Section4_heading}</p>
                  <p className="s3_subheading">
                    {props.object.Section4_description}
                  </p>
                </div>
              </div>
              <div className="container-fluid pb-5">
                <div className="row">
                  <div className="col-md-8">
                    <div className="row">
                      {props?.object?.Section4_detail?.map((item, index) => {
                        return (
                          <div className="col-md-3">
                            <div className="col-md-12 bg_card_4 ">
                              <div className="row pt-3">
                                <div className="col-md-3 col-3 m-auto ">
                                  <img
                                    className="img-fluid "
                                    src="https://1864597015.rsc.cdn77.org/selteq/images/i1.png"
                                  />
                                </div>
                                <div className="col-md-8 col-8 pl-0 m-auto">
                                  <p className="font_card_text">
                                    {item.sub_detail_heading}
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <p className="font_subtext">
                                  {item.sub_detail_description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {/* <div className="col-md-3">
                    <div className="col-md-12 bg_card_4 ">
                      <div className="row pt-3">
                        <div className="col-md-3 col-3 m-auto ">
                          <img
                            className="img-fluid "
                            src="https://1864597015.rsc.cdn77.org/selteq/images/i1.png"
                          />
                        </div>
                        <div className="col-md-8 col-8 pl-0 m-auto">
                          <p className="font_card_text">
                            Cloud Integration for Data Storage
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <p className="font_subtext">
                          Integrating IoT devices with cloud-based storage &
                          analysis platforms. Efficient storage of large amounts
                          of data generated by IoT devices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="col-md-12 bg_card_4 ">
                      <div className="row pt-3">
                        <div className="col-md-3 col-3 m-auto ">
                          <img
                            className="img-fluid "
                            src="https://1864597015.rsc.cdn77.org/selteq/images/i1.png"
                          />
                        </div>
                        <div className="col-md-8 col-8 pl-0 m-auto">
                          <p className="font_card_text">
                            Cloud Integration for Data Storage
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <p className="font_subtext">
                          Integrating IoT devices with cloud-based storage &
                          analysis platforms. Efficient storage of large amounts
                          of data generated by IoT devices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="col-md-12 bg_card_4 ">
                      <div className="row pt-3">
                        <div className="col-md-3 col-3 m-auto ">
                          <img
                            className="img-fluid "
                            src="https://1864597015.rsc.cdn77.org/selteq/images/i1.png"
                          />
                        </div>
                        <div className="col-md-8 col-8 pl-0 m-auto">
                          <p className="font_card_text">
                            Cloud Integration for Data Storage
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <p className="font_subtext">
                          Integrating IoT devices with cloud-based storage &
                          analysis platforms. Efficient storage of large amounts
                          of data generated by IoT devices.
                        </p>
                      </div>
                    </div>
                  </div> */}
                    </div>
                  </div>
                  <div className="col-md-4 m-auto pt-5 pb-4">
                    <img
                      className="img-fluid"
                      src="https://1864597015.rsc.cdn77.org/selteq/images/computer.png"
                    />
                  </div>
                </div>
                <div className="col-md-12 pt-3">
                  <button class="animated_button_banner my-5 py-3 px-5" onClick={() => contact()}>
                    <span class="button-text">BOOK CONSULTATION</span>
                    <span class="animation-layer"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* section4  */}
          <div className="col-md-12 background_s4 ">
            <div className="col-md-12 padding_custome ">
              <p className="heading_s5 mt-5 text-center">
                {" "}
                {props.object.Section5_heading}
              </p>
              <p className="heading_s45_1 ">
                {props.object.Section5_description}
              </p>
              <div className="col-md-12 pl-0">
                <div className="row pt-5 mt-5">
                  <div className="col-md-12 px-0">
                    <div className="row">
                      {props?.object?.Section5_detail?.map((item, index) => {
                        return (
                          <div className="col-md-4">
                            <div className="row">
                              <div className="col-md-2 col-2 text-right">
                                <img
                                  className="img-fluid"
                                  src="https://1864597015.rsc.cdn77.org/selteq/images/dot.png"
                                />
                              </div>
                              <div className="col-md-10 col-10 px-0">
                                <p className="text_s4_h">
                                  {item.sub_detail_heading}
                                </p>
                                <p className="sub_des">
                                  {item.sub_detail_description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {/* <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-2 col-2 text-right">
                        <img
                          className="img-fluid"
                          src="https://1864597015.rsc.cdn77.org/selteq/images/dot.png"
                        />
                      </div>
                      <div className="col-md-10 col-10 px-0">
                        <p className="text_s4_h">
                          End-To-End Encryption for Secure Data Transfer
                        </p>
                        <p className="sub_des">
                          Helps prevent unauthorised access to data while its in
                          transit. It includes regular security testing to
                          ensure the system remains secure over time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-2 col-2 text-right">
                        <img
                          className="img-fluid"
                          src="https://1864597015.rsc.cdn77.org/selteq/images/dot.png"
                        />
                      </div>
                      <div className="col-md-10 col-10 px-0">
                        <p className="text_s4_h">
                          End-To-End Encryption for Secure Data Transfer
                        </p>
                        <p className="sub_des">
                          Helps prevent unauthorised access to data while its in
                          transit. It includes regular security testing to
                          ensure the system remains secure over time.
                        </p>
                      </div>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {props?.object?.Section6_detail ? (
              <div className="col-md-12 padding_top_s6  text-left">
                <p className="heading_s5 mt-5">
                  {" "}
                  {props.object.Section6_heading}
                </p>
                <p className="heading_s45_1 ">
                  {props.object.Section6_description}
                </p>
                <div className="row pt-5 ">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        {props?.object?.Section6_detail?.map((item, index) => {
                          return (
                            <div className="col-md-4 ">
                              <div className="row pr-4">
                                <div className="col-md-2 col-2 text-right">
                                  <img
                                    className="img-fluid"
                                    src="https://1864597015.rsc.cdn77.org/selteq/images/dot.png"
                                  />
                                </div>
                                <div className="col-md-10 col-10 px-0">
                                  <p className="text_s4_h">
                                    {item.sub_detail_heading}
                                  </p>
                                  <p className="sub_des">
                                    {item.sub_detail_description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        {/* <div className="col-md-4 ">
                      <div className="row pr-4">
                        <div className="col-md-2 col-2 text-right">
                          <img
                            className="img-fluid"
                            src="https://1864597015.rsc.cdn77.org/selteq/images/dot.png"
                          />
                        </div>
                        <div className="col-md-10 col-10 px-0">
                          <p className="text_s4_h">
                            End-To-End Encryption for Secure Data Transfer
                          </p>
                          <p className="sub_des">
                            Helps prevent unauthorised access to data while its
                            in transit. It includes regular security testing to
                            ensure the system remains secure over time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="row pr-4">
                        <div className="col-md-2 col-2 text-right">
                          <img
                            className="img-fluid"
                            src="https://1864597015.rsc.cdn77.org/selteq/images/dot.png"
                          />
                        </div>
                        <div className="col-md-10 col-10 px-0">
                          <p className="text_s4_h">
                            End-To-End Encryption for Secure Data Transfer
                          </p>
                          <p className="sub_des">
                            Helps prevent unauthorised access to data while its
                            in transit. It includes regular security testing to
                            ensure the system remains secure over time.
                          </p>
                        </div>
                      </div>
                    </div> */}
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                          <button class="animated_button_banner mt-5 mb-5 py-3 px-5" onClick={() => contact()}>
                            <span class="button-text">BOOK CONSULTATION</span>
                            <span class="animation-layer"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </div>
  );
}

export default Iotmobile;
