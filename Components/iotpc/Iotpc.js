import { useRouter } from "next/router";
import React from "react";

function Iotpc(props) {
  const router = useRouter();
  const contact = () => {
    router.push("/contact-us")
  }

  return (
    <div className="col-md-12 px-0">
      {props?.object ? (
        <>
          {/* section1  */}
          <div className="col-md-12 background_pic_iot">
            <div className="container padding_sectin_1">
              <div className="col-md-11">
                <p className="heading_s1">{props.object.main_heading}</p>
                <p className="sub_heading_s1 py-0 mt-0">
                  {props.object.sub_main_heading}
                </p>
                <p className="des_s1 py-0 mt-0">
                  {props.object.main_heading_description}
                </p>

                {/* <button className="btn btn-danger background_button_s1 button_animated_effects" onClick={() => contact()}>
                  {" "}
                  BOOK CONSULTATION{" "}
                </button> */}
                <br />
                <button class="animated_button_banner py-3 px-5" onClick={() => contact()}>
                  <span class="button-text">BOOK CONSULTATION</span>
                  <span class="animation-layer"></span>
                </button>

                {/* <button class="animated_button_banner" onClick={() => contact()}> BOOK CONSULTATION</button> */}

              </div>
            </div>
          </div>
          {/* section2  */}
          <div className="col-md-12">
            <div className="container">
              <div className="col-md-12">
                <p className="sec_2heading">{props.object.Section2_heading}</p>
                <p className="sev_2_des">{props.object.Section2_description}</p>
              </div>
              <div className="col-md-12 pt-4">
                {props?.object?.Section2_detail?.map((item, index) => {

                  return (
                    <>
                      {index % 2 === 0 ? (
                        <div className="row">
                          <div className="col-md-6 m-auto">
                            <p className="text_sec2_head mb-2 ">
                              {item.sub_detail_heading}
                            </p>
                            <p className="text_sec2_head_sub">
                              {item.sub_detail_description}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <img
                              className="img-fluid"
                              src="https://1864597015.rsc.cdn77.org/selteq/images/cloudy.png"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-md-6">
                            <img
                              className="img-fluid"
                              src="https://1864597015.rsc.cdn77.org/selteq/images/f.png"
                            />
                          </div>
                          <div className="col-md-6 m-auto pl-5">
                            <p className="text_sec2_head mb-2 ">
                              {item.sub_detail_heading}
                            </p>
                            <p className="text_sec2_head_sub">
                              {item.sub_detail_description}
                            </p>
                          </div>
                          <div className="col-md-12 text-center">
                            {/* <button className="btn btn-danger background_button_s2" onClick={() => contact()}>
                              {" "}
                              BOOK CONSULTATION{" "}
                            </button> */}
                            <button class="animated_button_banner py-3 px-5 my-5" onClick={() => contact()}>
                              <span class="button-text">BOOK CONSULTATION</span>
                              <span class="animation-layer"></span>
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          {/* section3  */}
          <div className="col-md-12 background_s3">
            <div className="col-md-12">
              <div className="container">
                <div className="col-md-12">
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
                  {props?.object?.Section3_detail?.map((item, index) => {
                    return (
                      <div className="col-md-4 ">
                        <div className="col-md-12 background_cards text-center">
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
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="container">
                <div className="col-md-12 mt-4 pt-5 pb-5">
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
                            <div className="col-md-12 bg_card_4 text-center">
                              <img
                                className="img-fluid pt-5"
                                src="https://1864597015.rsc.cdn77.org/selteq/images/i1.png"
                              />
                              <div className="text-left pt-4 mt-2 px-2">
                                <p className="font_card_text">
                                  {item.sub_detail_heading}
                                </p>
                                <p className="font_subtext">
                                  {item.sub_detail_description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    </div>
                  </div>
                  <div className="col-md-4 m-auto">
                    <img
                      className="img-fluid"
                      src="https://1864597015.rsc.cdn77.org/selteq/images/computer.png"
                    />
                  </div>
                </div>
                <div className="col-md-12 text-center pt-3">
                  <button class="animated_button_banner py-3 px-5 my-5" onClick={() => contact()}>
                    <span class="button-text">BOOK CONSULTATION</span>
                    <span class="animation-layer"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* section4  */}
          <div className="col-md-12 background_s4 px-5">
            <div className="col-md-12  padding_custome ">
              <div className="col-md-7 px-0">
                <p className="heading_s5 pl-5 mt-5">
                  {" "}
                  {props.object.Section5_heading}
                </p>
                <p className="heading_s45_1 pl-5">
                  {props.object.Section5_description}
                </p>
              </div>
              <div className="row pt-5 mt-5">
                <div className="col-md-10">
                  <div className="row">
                    {props?.object?.Section5_detail?.map((item, index) => {
                      return (
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-2 text-right">
                              <img
                                className="img-fluid"
                                src="https://1864597015.rsc.cdn77.org/selteq/images/dot.png"
                              />
                            </div>
                            <div className="col-md-10 px-0">
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
                  </div>
                </div>
              </div>
            </div>

            {props?.object?.Section6_detail ? (
              <div className="text-right">
                {/* <p className="heading_s5 pl-5 mt-5 text-end">
                  {props.object.Section6_heading}
                </p>
                <p className="heading_s45_1 pl-5 text-end">
                  {props.object.Section6_description}
                </p> */}
                <div className="row pt-5 ">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8 px-0">

                      <p className="heading_s5 pl-5 mt-5 text-left margin_left_contents">
                        {props.object.Section6_heading}
                      </p>
                      <p className="heading_s45_1 pl-5 text-left margin_left_contents">
                        {props.object.Section6_description}
                      </p>
                      <div className="row">
                        {props?.object?.Section6_detail?.map((item, index) => {
                          return (
                            <div className="col-md-6 px-0">
                              <div className="row">
                                <div className="col-md-10 px-0">
                                  <p className="text_s4_h mt-3 text-left">
                                    <img
                                      className="img-fluid"
                                      src="https://1864597015.rsc.cdn77.org/selteq/images/dot.png"
                                    />{" "}
                                    &nbsp;&nbsp; {item.sub_detail_heading}
                                  </p>
                                  <p className="sub_des text-left">
                                    {item.sub_detail_description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        <div className="col-md-12 px-5 text-right">
                          <div className="col-md-12">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="d-flex justify-content-end">
              <button class="animated_button_banner py-3 px-5 my-5" onClick={() => contact()}>
                <span class="button-text">BOOK CONSULTATION</span>
                <span class="animation-layer"></span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </div>
  );
}

export default Iotpc;
