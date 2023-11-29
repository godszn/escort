import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, List, Text } from "components";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat gap-[42px] items-center justify-end mx-auto w-full">
        <Img
          className="h-2.5 sm:h-auto object-cover w-full"
          src="images/img_pseudo.png"
          alt="pseudo"
        />
        <div className="h-[1062px] md:h-[897px] md:px-5 relative w-full">
          <div className="absolute h-[1062px] md:h-[897px] inset-[0] justify-center m-auto w-[98%] md:w-full">
            <div className="bg-gradient10  md:h-[819px] h-[859px] mx-auto pb-[39px] w-[97%] md:w-full">
              <Img
                className="h-[756px] mx-auto object-cover w-full"
                src="images/img_loginbannerpng.png"
                alt="loginbannerpng"
              />
              <Img
                className="absolute h-[819px] loginimg items-center inset-x-[0] mx-auto top-[0]"
                src="images/img_loginbannermasksvg.svg"
                alt="loginbannermask"
              />
            </div>
            <div className="absolute h-[1062px] md:h-[897px] inset-[0] justify-center m-auto pb-[165px] w-full">
              <Img
                className="h-[897px] mx-auto object-cover"
                src="images/img_loginbannerlinessvg.png"
                alt="loginbannerline"
              />
              <div className="absolute h-[779px] sm:h-[789px] inset-x-[0] mx-auto md:px-10 sm:px-5 px-[74px] top-[8%] w-[97%] md:w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[84%]">
                  <div className="flex flex-col items-center justify-start py-6 w-full">
                    <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[185px] w-full">
                      <div className="bg-gradient11  h-[731px] sm:h-[741px] relative rounded-md w-full">
                        <div className="h-[731px] sm:h-[741px] m-auto w-full">
                          <Img
                            className="h-[731px] m-auto object-cover rounded-md w-full"
                            src="images/img_pseudo_731x750.png"
                            alt="pseudo_One"
                          />
                          <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[89%]">
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] w-[95%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                                  size="txtMontserratSemiBold52WhiteA700"
                                >
                                  Welcome back,
                                </Text>
                              </div>
                              <Text
                                className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                                size="txtMontserratRegular24Gray50"
                              >
                                Login to your account to continue.
                              </Text>
                            </div>
                            <div className="flex flex-col font-roboto items-center justify-start mt-[5px] w-[88%] md:w-full">
                              <div className="flex flex-col items-start justify-start pt-0.5 px-0.5 w-full">
                                <Text
                                  className="md:ml-[0] ml-[17px] text-[13px] text-white-A700"
                                  size="txtRobotoRegular13"
                                >
                                  Note: you can also log in using your existing
                                  Ladies-Forum account. Simply log in here!
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col font-montserrat items-center justify-start md:ml-[0] ml-[23px] mt-[34px] w-[95%] md:w-full">
                              <List
                                className="flex flex-col gap-5 items-center w-full"
                                orientation="vertical"
                              >
                                <div className="flex flex-1 flex-col items-center justify-start my-0 pb-[35px] w-full">
                                  <div className="border-b-2 border-solid border-white-A700_7f flex flex-col items-center justify-start py-3.5 w-full">
                                    <div className="flex flex-col items-start justify-start mb-[3px] w-full">
                                      <Text
                                        className="text-[15px] text-pink-50"
                                        size="txtMontserratRegular15"
                                      >
                                        Username or Email
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-col items-center justify-start my-0 pb-[35px] w-full">
                                  <div className="border-b-2 border-solid border-white-A700_7f flex flex-col items-center justify-start py-3.5 w-full">
                                    <div className="flex flex-col items-start justify-start mb-[3px] w-full">
                                      <Text
                                        className="text-[15px] text-pink-50"
                                        size="txtMontserratRegular15"
                                      >
                                        Password
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between my-0 w-full">
                                  <Button
                                    className="capitalize cursor-pointer log min-w-[150px] rounded-[30px] text-center text-xl tracking-[0.50px]"
                                    color="orange_600"
                                    size="2xl"
                                    variant="fill"
                                  >
                                    Login
                                  </Button>
                                  <Button
                                    className="common-pointer bg-transparent cursor-pointer min-w-[162px] text-center text-lg text-pink-50"
                                    onClick={() =>
                                      navigate("/forgotpasswordone")
                                    }
                                    size="xs"
                                  >
                                    Forgot Password?
                                  </Button>
                                </div>
                              </List>
                            </div>
                            <div className="flex sm:flex-col flex-row font-inter gap-[26px] items-start justify-between md:ml-[0] ml-[11px] mt-[50px] p-2.5 w-[99%] md:w-full">
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[66px] fb sm:ml-[0] ml-[5px] rounded-[5px]"
                                leftIcon={
                                  <Img
                                    className="h-5 mb-px mr-2"
                                    src="images/img_svg_white_a700.svg"
                                    alt="SVG"
                                  />
                                }
                                shape="round"
                                color="orange_600"
                                size="xl"
                                variant="fill"
                              >
                                <div className="text-[15px] text-center">
                                    Login with Facebook
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center dc mb-[66px] mr-[7px] rounded-[5px]"
                                leftIcon={
                                  <Img
                                    className="h-5 mb-px mr-[9px]"
                                    src="images/img_svg_white_a700_20x20.svg"
                                    alt="SVG"
                                  />
                                }
                                shape="round"
                                color="orange_600"
                                size="xl"
                                variant="fill"
                              >
                                <div className="text-[14.88px] text-center">
                                    Login with Discord
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col font-roboto md:gap-10 gap-[608px] rum h-max inset-y-[0] justify-start my-auto right-[3%] w-[72%]">
                          <div className="flex flex-row faq gap-[22px] items-start justify-end md:ml-[0] ml-[411px] w-[24%] md:w-full">
                            <div className="flex flex-col items-center pr-2 justify-end">
                              <Text
                                className="text-[10.5px] text-white-A700"
                                size="txtRobotoRegular105"
                              >
                                Help/FAQ
                              </Text>
                            </div>
                            <div className="flex flex-col items-center pl-2 justify-start w-[46%]">
                              <div className="flex flex-row items-center justify-start w-full">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_microphone.svg"
                                  alt="microphone"
                                />
                                <div className="flex flex-col items-end justify-start pl-2">
                                  <Text
                                    className="h-[15px] text-white-A700 text-xs"
                                    size="txtRobotoRegular12"
                                  >
                                    EN
                                  </Text>
                                </div>
                                <Img
                                  className="h-2.5"
                                  src="images/img_arrowup.svg"
                                  alt="arrowup"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col font-inter h-12 md:h-auto items-start justify-start goog mr-[115px] w-[590px] sm:w-full">
                            <div className="bg-gray-100 border border-gray-100 border-solid flex flex-col h-12 md:h-auto goog-wrap items-start justify-start px-[17px] py-3.5 rounded-lg w-full">
                              <div
                                className="common-pointer flex flex-row gap-[9px] items-center justify-start md:px-10 sm:px-5 px-[104px] w-full"
                                onClick={() => googleSignIn()}
                              >
                                <Img
                                  className="h-5 md:h-auto object-cover w-5"
                                  src="images/img_4a8758006edf934.png"
                                  alt="4a8758006edf934"
                                />
                                <Text
                                  className="text-[15px] text-black-900_01 text-center"
                                  size="txtInterSemiBold15"
                                >
                                  Sign up with Google
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[28%] flex flex-col font-roboto inset-x-[0] items-center justify-end mx-auto">
                  <Text
                    className="text-center text-sm text-white-A700"
                    size="txtRobotoRegular14"
                  >
                    Imprint Privacy policy Terms of use
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-end mx-auto py-4 top-[0] w-[97%]">
                <div className="flex flex-col items-end justify-start md:px-10 sm:px-5 px-[50px] w-full">
                  <div className="flex flex-row items-center justify-end w-[19%] md:w-full">
                    <div className="flex flex-col items-center justify-end p-[11px]">
                      <a
                        href="javascript:"
                        className="mt-0.5 text-blue_gray-900_01 text-center text-lg tracking-[0.50px]"
                      >
                        <Text size="txtMontserratMedium18Bluegray90001">
                          Login
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-col items-center justify-start px-2.5 w-[55%]">
                      <Button
                        className="cursor-pointer reg min-w-[110px] rounded-[23px] text-center text-lg tracking-[0.50px]"
                        color="white_A700"
                        size="xl"
                        variant="fill"
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] logo-wrap items-start justify-end mx-auto top-[1%] w-full">
            <div className="bg-gray-200_01 flex flex-col items-center justify-start md:ml-[0] logo ml-[564px] p-1 w-[17%] md:w-full">
              <div className="flex flex-col items-center justify-start p-4 w-full">
                <Img
                  className="h-9 md:h-auto object-cover w-full"
                  src="images/img_logopng.png"
                  alt="logopng"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
