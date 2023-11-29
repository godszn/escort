import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-end mx-auto sm:pr-5 pr-[38px] pt-[38px] w-full">
        <div className="h-[1062px] sm:h-[910px] md:h-[918px] max-w-[1401px] mt-[11px] mx-auto md:px-5 relative w-full">
          <div className="bg-white-A700 h-[862px] mx-auto w-[97%]"></div>
          <div className="absolute h-[1062px] sm:h-[899px] md:h-[907px] inset-[0] justify-center m-auto w-full">
            <div className="bg-gradient10  md:h-[819px] h-[862px] mx-auto pb-[42px] w-[97%] md:w-full">
              <Img
                className="h-[756px] mx-auto object-cover w-full"
                src="images/img_loginbannerpng.png"
                alt="loginbannerpng"
              />
              <Img
                className="absolute h-[819px] inset-x-[0] mx-auto top-[0]"
                src="images/img_loginbannermasksvg.svg"
                alt="loginbannermask"
              />
            </div>
            <div className="absolute h-[1062px] sm:h-[899px] md:h-[907px] inset-[0] justify-center m-auto pb-[163px] w-full">
              <Img
                className="h-[899px] mx-auto object-cover"
                src="images/img_loginbannerlinessvg.png"
                alt="loginbannerline"
              />
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto md:px-10 sm:px-5 px-[114px] top-[8%] w-[97%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start py-6 w-full">
                    <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[161px] w-full">
                      <div className="h-[734px] md:h-[859px] relative w-[97%] md:w-full">
                        <div className="absolute bg-gradient11  flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-md w-[98%]">
                          <Img
                            className="h-[734px] md:h-auto object-cover rounded-tl-md rounded-tr-md w-full"
                            src="images/img_pseudo_734x750.png"
                            alt="pseudo"
                          />
                        </div>
                        <div className="absolute flex flex-col md:gap-10 gap-[60px] h-max inset-y-[0] justify-start my-auto right-[0] w-[94%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] w-[88%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                                size="txtMontserratSemiBold52WhiteA700"
                              >
                                Get started,
                              </Text>
                            </div>
                            <Text
                              className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                              size="txtMontserratRegular24Gray50"
                            >
                              Sign up to get started finding your partner!
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className=" name-wrap md:gap-5 grid md:grid-cols-1 grid-cols-2 min-h-[auto] w-[91%]">
                              <div className="h-[52px] relative w-full">
                                <div className=" w-full full absolute border-b-2 border-solid border-white-A700_7f h-[52px] inset-[0] justify-center m-auto w-[93%]"></div>
                                <div className="absolute w-full flex flex-col inset-x-[0] items-start justify-start mx-auto top-[27%]">
                                  <Text
                                    className="text-[15px] text-pink-50"
                                    size="txtMontserratRegular15"
                                  >
                                    First Name
                                  </Text>
                                </div>
                              </div>
                              <div className="h-[52px] w-full  pl-[11px] relative w-full">
                                <div className="absolute full  border-b-2 border-solid border-white-A700_7f h-[52px] inset-[0] justify-center m-auto w-[93%]"></div>
                                <div className="absolute w-full flex flex-col inset-x-[0] items-start justify-start mx-auto top-[29%]">
                                  <Text
                                    className="text-[15px] text-pink-50"
                                    size="txtMontserratRegular15"
                                  >
                                    Last Name
                                  </Text>
                                </div>
                              </div>
                              <div className="h-[52px] w-full  pl-[11px] relative w-full">
                                <div className="absolute full  border-b-2 border-solid border-white-A700_7f h-[52px] inset-[0] justify-center m-auto w-[93%]"></div>
                                <div className="absolute w-full flex flex-col inset-x-[0] items-start justify-start mx-auto top-[29%]">
                                  <Text
                                    className="text-[15px] text-pink-50"
                                    size="txtMontserratRegular15"
                                  >
                                    Username
                                  </Text>
                                </div>
                              </div>
                              <div className="h-[52px] w-full  pl-[11px] relative w-full">
                                <div className="absolute full  border-b-2 border-solid border-white-A700_7f h-[52px] inset-[0] justify-center m-auto w-[93%]"></div>
                                <div className="absolute w-full flex flex-col inset-x-[0] items-start justify-start mx-auto top-[27%]">
                                  <Text
                                    className="text-[15px] text-pink-50"
                                    size="txtMontserratRegular15"
                                  >
                                    Email
                                  </Text>
                                </div>
                              </div>
                              <div className="h-[52px]  w-full  pl-[11px] relative w-full">
                                <div className="absolute full  border-b-2 border-solid border-white-A700_7f h-[52px] inset-[0] justify-center m-auto w-[93%]"></div>
                                <div className="absolute w-full flex flex-col inset-x-[0] items-start justify-start mx-auto top-[27%]">
                                  <Text
                                    className="text-[15px] text-pink-50"
                                    size="txtMontserratRegular15"
                                  >
                                    Password
                                  </Text>
                                </div>
                              </div>
                              <div className="h-[52px] w-full  pl-[11px] relative w-full">
                                <div className="absolute full border-b-2 border-solid border-white-A700_7f h-[52px] inset-[0] justify-center m-auto w-[93%]"></div>
                                <div className="absoluteflex flex-col inset-x-[0] items-start justify-start mx-auto top-[27%]">
                                  <Text
                                    className="text-[15px] text-pink-50"
                                    size="txtMontserratRegular15"
                                  >
                                    Confirm Password
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-5 pr-0.5 py-0.5 w-[88%] md:w-full">
                              <div className="border-2 border-gray-500 border-solid h-4 md:mt-0 mt-[3px] rounded-sm w-4"></div>
                              <Text
                                className="md:ml-[0] ml-[19px] md:mt-0 mt-[3px] text-base text-gray-200_02"
                                size="txtMontserratRegular16Gray20002"
                              >
                                By creating your account, you agree to our{" "}
                              </Text>
                              <div className="md:h-[21px] h-[22px] md:ml-[0] ml-[3px] relative w-[17%] md:w-full">
                                <div className="absolute border-b border-dashed border-white-A700_84 bottom-[0] h-[21px] inset-x-[0] mx-auto w-full"></div>
                                <Text
                                  className="absolute inset-x-[0] mx-auto text-base text-white-A700 top-[0] w-max"
                                  size="txtMontserratRegular16WhiteA700"
                                >
                                  Terms of use
                                </Text>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[3px] md:mt-0 mt-0.5 text-base text-gray-200_02"
                                size="txtMontserratRegular16Gray20002"
                              >
                                {" "}
                                &{" "}
                              </Text>
                              <div className="h-[22px] md:ml-[0] ml-[3px] md:mt-0 mt-0.5 relative w-[18%] md:w-full">
                                <div className="absolute border-b border-dashed border-white-A700_84 h-[22px] inset-[0] justify-center m-auto w-full"></div>
                                <a
                                  href="javascript:"
                                  className="absolute h-max inset-[0] justify-center m-auto text-base text-white-A700 w-max"
                                >
                                  <Text size="txtMontserratRegular16WhiteA700">
                                    Privacy Policy
                                  </Text>
                                </a>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[50px] w-[99%] md:w-full">
                              <Button
                                className="capitalize cursor-pointer min-w-[150px] rounded-[30px] text-center text-xl tracking-[0.50px]"
                                color="orange_600_90"
                                size="2xl"
                                variant="fill"
                              >
                                Register
                              </Button>
                              <div className="flex sm:flex-col flex-row font-roboto gap-[5px] items-start justify-center">
                                <a
                                  href="javascript:"
                                  className="text-sm text-white-A700"
                                >
                                  <Text size="txtRobotoRegular14">
                                    Already have an account?
                                  </Text>
                                </a>
                                <a className="mr-[215px] sm:mt-0 mt-0.5 text-indigo-200 text-sm">
                                  <Text
                                    className="common-pointer"
                                    size="txtRobotoRegular14Indigo200"
                                    onClick={() => navigate("/login")}
                                  >
                                    Log In
                                  </Text>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        className="cursor-pointer min-w-[110px] rounded-[23px] text-center text-lg tracking-[0.50px]"
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
        </div>
      </div>
    </>
  );
};

export default SignupPage;
