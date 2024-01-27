import img from "../public/3d_shape_3 1.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const [passVisible, setPassVisible] = useState<boolean>(false);
  const passwordVisibility = () => {
    setPassVisible((prevVisible) => !prevVisible);
  };
  return (
    <div className="h-full">
      <div className="py-[40px] px-[60px] overflow-hidden min-h-screen flex flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="203"
          height="28"
          viewBox="0 0 203 28"
          fill="none"
        >
          <path
            d="M0 3.41309V0.380859H2.63672V3.41309H0ZM0 21.8555V6.29883H2.63672V21.8555H0Z"
            fill="#2F2F2F"
          />
          <path
            d="M6.88477 21.8555V0.380859H9.72656V11.0303L20.3906 0.380859H24.2432L15.2344 9.08203L24.6387 21.8555H20.8887L13.2422 10.9863L9.72656 14.4141V21.8555H6.88477Z"
            fill="#2F2F2F"
          />
          <path
            d="M26.6748 21.8555V6.29883H29.0479V8.51074C30.1904 6.80176 31.8408 5.94727 33.999 5.94727C34.9365 5.94727 35.7959 6.11816 36.5771 6.45996C37.3682 6.79199 37.959 7.23145 38.3496 7.77832C38.7402 8.3252 39.0137 8.97461 39.1699 9.72656C39.2676 10.2148 39.3164 11.0693 39.3164 12.29V21.8555H36.6797V12.3926C36.6797 11.3184 36.5771 10.5176 36.3721 9.99023C36.167 9.45312 35.8008 9.02832 35.2734 8.71582C34.7559 8.39355 34.1455 8.23242 33.4424 8.23242C32.3193 8.23242 31.3477 8.58887 30.5273 9.30176C29.7168 10.0146 29.3115 11.3672 29.3115 13.3594V21.8555H26.6748Z"
            fill="#2F2F2F"
          />
          <path
            d="M42.3926 14.0771C42.3926 11.1963 43.1934 9.0625 44.7949 7.67578C46.1328 6.52344 47.7637 5.94727 49.6875 5.94727C51.8262 5.94727 53.5742 6.65039 54.9316 8.05664C56.2891 9.45312 56.9678 11.3867 56.9678 13.8574C56.9678 15.8594 56.665 17.4365 56.0596 18.5889C55.4639 19.7314 54.5898 20.6201 53.4375 21.2549C52.2949 21.8896 51.0449 22.207 49.6875 22.207C47.5098 22.207 45.7471 21.5088 44.3994 20.1123C43.0615 18.7158 42.3926 16.7041 42.3926 14.0771ZM45.1025 14.0771C45.1025 16.0693 45.5371 17.5635 46.4062 18.5596C47.2754 19.5459 48.3691 20.0391 49.6875 20.0391C50.9961 20.0391 52.085 19.541 52.9541 18.5449C53.8232 17.5488 54.2578 16.0303 54.2578 13.9893C54.2578 12.0654 53.8184 10.6104 52.9395 9.62402C52.0703 8.62793 50.9863 8.12988 49.6875 8.12988C48.3691 8.12988 47.2754 8.62305 46.4062 9.60938C45.5371 10.5957 45.1025 12.085 45.1025 14.0771Z"
            fill="#2F2F2F"
          />
          <path
            d="M62.9443 21.8555L58.1836 6.29883H60.9082L64.3066 18.6182C64.3457 18.4521 64.6143 17.3828 65.1123 15.4102L67.5879 6.29883H70.2979L72.627 15.3223L73.4033 18.2959L74.2969 15.293L76.9629 6.29883H79.5264L74.6631 21.8555H71.9238L69.4482 12.5391L68.8477 9.8877L65.6982 21.8555H62.9443Z"
            fill="#2F2F2F"
          />
          <path
            d="M82.1338 21.8555V0.380859H91.6553C93.5693 0.380859 95.0244 0.576172 96.0205 0.966797C97.0166 1.34766 97.8125 2.02637 98.4082 3.00293C99.0039 3.97949 99.3018 5.05859 99.3018 6.24023C99.3018 7.76367 98.8086 9.04785 97.8223 10.0928C96.8359 11.1377 95.3125 11.8018 93.252 12.085C94.0039 12.4463 94.5752 12.8027 94.9658 13.1543C95.7959 13.916 96.582 14.8682 97.3242 16.0107L101.06 21.8555H97.4854L94.6436 17.3877C93.8135 16.0986 93.1299 15.1123 92.5928 14.4287C92.0557 13.7451 91.5723 13.2666 91.1426 12.9932C90.7227 12.7197 90.293 12.5293 89.8535 12.4219C89.5312 12.3535 89.0039 12.3193 88.2715 12.3193H84.9756V21.8555H82.1338ZM84.9756 9.8584H91.084C92.3828 9.8584 93.3984 9.72656 94.1309 9.46289C94.8633 9.18945 95.4199 8.75977 95.8008 8.17383C96.1816 7.57812 96.3721 6.93359 96.3721 6.24023C96.3721 5.22461 96.001 4.38965 95.2588 3.73535C94.5264 3.08105 93.3643 2.75391 91.7725 2.75391H84.9756V9.8584Z"
            fill="#2F2F2F"
          />
          <path
            d="M102.905 11.3965C102.905 7.83203 103.862 5.04395 105.776 3.03223C107.69 1.01074 110.161 0 113.188 0C115.171 0 116.958 0.473633 118.55 1.4209C120.142 2.36816 121.353 3.69141 122.183 5.39062C123.022 7.08008 123.442 8.99902 123.442 11.1475C123.442 13.3252 123.003 15.2734 122.124 16.9922C121.245 18.7109 120 20.0146 118.389 20.9033C116.777 21.7822 115.039 22.2217 113.174 22.2217C111.152 22.2217 109.346 21.7334 107.754 20.7568C106.162 19.7803 104.956 18.4473 104.136 16.7578C103.315 15.0684 102.905 13.2812 102.905 11.3965ZM105.835 11.4404C105.835 14.0283 106.528 16.0693 107.915 17.5635C109.312 19.0479 111.06 19.79 113.159 19.79C115.298 19.79 117.056 19.0381 118.433 17.5342C119.819 16.0303 120.513 13.8965 120.513 11.1328C120.513 9.38477 120.215 7.86133 119.619 6.5625C119.033 5.25391 118.169 4.24316 117.026 3.53027C115.894 2.80762 114.619 2.44629 113.203 2.44629C111.191 2.44629 109.458 3.13965 108.003 4.52637C106.558 5.90332 105.835 8.20801 105.835 11.4404Z"
            fill="#2F2F2F"
          />
          <path
            d="M126.152 14.9561L128.833 14.7217C128.96 15.7959 129.253 16.6797 129.712 17.373C130.181 18.0566 130.903 18.6133 131.88 19.043C132.856 19.4629 133.955 19.6729 135.176 19.6729C136.26 19.6729 137.217 19.5117 138.047 19.1895C138.877 18.8672 139.492 18.4277 139.893 17.8711C140.303 17.3047 140.508 16.6895 140.508 16.0254C140.508 15.3516 140.312 14.7656 139.922 14.2676C139.531 13.7598 138.887 13.335 137.988 12.9932C137.412 12.7686 136.138 12.4219 134.165 11.9531C132.192 11.4746 130.811 11.0254 130.02 10.6055C128.994 10.0684 128.228 9.4043 127.72 8.61328C127.222 7.8125 126.973 6.91895 126.973 5.93262C126.973 4.84863 127.28 3.83789 127.896 2.90039C128.511 1.95312 129.409 1.23535 130.591 0.74707C131.772 0.258789 133.086 0.0146484 134.531 0.0146484C136.123 0.0146484 137.524 0.273438 138.735 0.791016C139.956 1.29883 140.894 2.05078 141.548 3.04688C142.202 4.04297 142.554 5.1709 142.603 6.43066L139.878 6.63574C139.731 5.27832 139.233 4.25293 138.384 3.55957C137.544 2.86621 136.299 2.51953 134.648 2.51953C132.93 2.51953 131.675 2.83691 130.884 3.47168C130.103 4.09668 129.712 4.85352 129.712 5.74219C129.712 6.51367 129.99 7.14844 130.547 7.64648C131.094 8.14453 132.52 8.65723 134.824 9.18457C137.139 9.70215 138.726 10.1562 139.585 10.5469C140.835 11.123 141.758 11.8555 142.354 12.7441C142.949 13.623 143.247 14.6387 143.247 15.791C143.247 16.9336 142.92 18.0127 142.266 19.0283C141.611 20.0342 140.669 20.8203 139.438 21.3867C138.218 21.9434 136.841 22.2217 135.308 22.2217C133.364 22.2217 131.733 21.9385 130.415 21.3721C129.106 20.8057 128.076 19.9561 127.324 18.8232C126.582 17.6807 126.191 16.3916 126.152 14.9561Z"
            fill="#2F2F2F"
          />
          <path
            d="M147.539 21.8555V18.8525H150.542V21.8555H147.539Z"
            fill="#2F2F2F"
          />
          <path
            d="M165.293 19.9365C164.316 20.7666 163.374 21.3525 162.466 21.6943C161.567 22.0361 160.601 22.207 159.565 22.207C157.856 22.207 156.543 21.792 155.625 20.9619C154.707 20.1221 154.248 19.0527 154.248 17.7539C154.248 16.9922 154.419 16.2988 154.761 15.6738C155.112 15.0391 155.566 14.5312 156.123 14.1504C156.689 13.7695 157.324 13.4814 158.027 13.2861C158.545 13.1494 159.326 13.0176 160.371 12.8906C162.5 12.6367 164.067 12.334 165.073 11.9824C165.083 11.6211 165.088 11.3916 165.088 11.2939C165.088 10.2197 164.839 9.46289 164.341 9.02344C163.667 8.42773 162.666 8.12988 161.338 8.12988C160.098 8.12988 159.18 8.34961 158.584 8.78906C157.998 9.21875 157.563 9.98535 157.28 11.0889L154.702 10.7373C154.937 9.63379 155.322 8.74512 155.859 8.07129C156.396 7.3877 157.173 6.86523 158.188 6.50391C159.204 6.13281 160.381 5.94727 161.719 5.94727C163.047 5.94727 164.126 6.10352 164.956 6.41602C165.786 6.72852 166.396 7.12402 166.787 7.60254C167.178 8.07129 167.451 8.66699 167.607 9.38965C167.695 9.83887 167.739 10.6494 167.739 11.8213V15.3369C167.739 17.7881 167.793 19.3408 167.9 19.9951C168.018 20.6396 168.242 21.2598 168.574 21.8555H165.82C165.547 21.3086 165.371 20.6689 165.293 19.9365ZM165.073 14.0479C164.116 14.4385 162.681 14.7705 160.767 15.0439C159.683 15.2002 158.916 15.376 158.467 15.5713C158.018 15.7666 157.671 16.0547 157.427 16.4355C157.183 16.8066 157.061 17.2217 157.061 17.6807C157.061 18.3838 157.324 18.9697 157.852 19.4385C158.389 19.9072 159.17 20.1416 160.195 20.1416C161.211 20.1416 162.114 19.9219 162.905 19.4824C163.696 19.0332 164.277 18.4229 164.648 17.6514C164.932 17.0557 165.073 16.1768 165.073 15.0146V14.0479Z"
            fill="#2F2F2F"
          />
          <path
            d="M171.841 27.8174V6.29883H174.243V8.32031C174.81 7.5293 175.449 6.93848 176.162 6.54785C176.875 6.14746 177.739 5.94727 178.755 5.94727C180.083 5.94727 181.255 6.28906 182.271 6.97266C183.286 7.65625 184.053 8.62305 184.57 9.87305C185.088 11.1133 185.347 12.4756 185.347 13.96C185.347 15.5518 185.059 16.9873 184.482 18.2666C183.916 19.5361 183.086 20.5127 181.992 21.1963C180.908 21.8701 179.766 22.207 178.564 22.207C177.686 22.207 176.895 22.0215 176.191 21.6504C175.498 21.2793 174.927 20.8105 174.478 20.2441V27.8174H171.841ZM174.229 14.165C174.229 16.167 174.634 17.6465 175.444 18.6035C176.255 19.5605 177.236 20.0391 178.389 20.0391C179.561 20.0391 180.562 19.5459 181.392 18.5596C182.231 17.5635 182.651 16.0254 182.651 13.9453C182.651 11.9629 182.241 10.4785 181.421 9.49219C180.61 8.50586 179.639 8.0127 178.506 8.0127C177.383 8.0127 176.387 8.54004 175.518 9.59473C174.658 10.6396 174.229 12.1631 174.229 14.165Z"
            fill="#2F2F2F"
          />
          <path
            d="M188.54 27.8174V6.29883H190.942V8.32031C191.509 7.5293 192.148 6.93848 192.861 6.54785C193.574 6.14746 194.438 5.94727 195.454 5.94727C196.782 5.94727 197.954 6.28906 198.97 6.97266C199.985 7.65625 200.752 8.62305 201.27 9.87305C201.787 11.1133 202.046 12.4756 202.046 13.96C202.046 15.5518 201.758 16.9873 201.182 18.2666C200.615 19.5361 199.785 20.5127 198.691 21.1963C197.607 21.8701 196.465 22.207 195.264 22.207C194.385 22.207 193.594 22.0215 192.891 21.6504C192.197 21.2793 191.626 20.8105 191.177 20.2441V27.8174H188.54ZM190.928 14.165C190.928 16.167 191.333 17.6465 192.144 18.6035C192.954 19.5605 193.936 20.0391 195.088 20.0391C196.26 20.0391 197.261 19.5459 198.091 18.5596C198.931 17.5635 199.351 16.0254 199.351 13.9453C199.351 11.9629 198.94 10.4785 198.12 9.49219C197.31 8.50586 196.338 8.0127 195.205 8.0127C194.082 8.0127 193.086 8.54004 192.217 9.59473C191.357 10.6396 190.928 12.1631 190.928 14.165Z"
            fill="#2F2F2F"
          />
        </svg>
        <h1 className="mt-12 font-extrabold font-[#2F2F2F] text-5xl font-montserrat">
          Регистрация
        </h1>
        <div className="flex justify-between flex-auto">
          <div>
            <div className="flex mt-10 z-10">
              <div className="flex flex-col mr-5">
                <p className="text-black font-normal text-lg leading-1 font-montserrat">
                  Необходимые данные
                </p>
                <input
                  className="mt-8 p-6 h-20 w-[460px] rounded-lg border-[2F2F2F] border-2 "
                  type="text"
                  placeholder="Введите ФИО"
                />
                <input
                  className="mt-8 p-6 h-20 w-[460px] rounded-lg border-[2F2F2F] border-2 "
                  type="number"
                  placeholder="Введите номер телефона"
                />
                <input
                  className="mt-8 p-6 h-20 w-[460px] rounded-lg border-[2F2F2F] border-2"
                  type="text"
                  placeholder="Введите электронную почту"
                />
              </div>
              <div>
                <p className="text-black font-normal text-lg leading-1 font-montserrat">
                  Пароль и промокод
                </p>
                <div className="relative flex items-center mt-8">
                  <input
                    className="p-6 h-20 w-[460px] rounded-lg border-[2F2F2F] border-2"
                    type={passVisible ? "text" : "password"}
                    placeholder="Введите пароль"
                  />
                  <button
                    className="absolute right-7"
                    onClick={passwordVisibility}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"
                        fill="#2F2F2F"
                      />
                    </svg>
                  </button>
                </div>
                <div className="relative flex items-center mt-8">
                  <input
                    className="p-6 h-20 w-[460px] rounded-lg border-[2F2F2F] border-2 xl:w-[400px]"
                    type="text"
                    placeholder="Промокод"
                  />
                  <button className="absolute right-0 rounded-r-lg bg-[#232323] h-full">
                    <p className="text-xl font-bold leading-1 text-white mx-5">
                      Применить
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <input
              style={{
                background:
                  "linear-gradient(90deg, #E81CFF 5.65%, #E81CFF 5.66%, #45CAFF 97.49%)",
              }}
              className="cursor-pointer mt-[40px] py-5 px-10 rounded-lg text-2xl leading-1 text-white font-montserrat"
              type="submit"
              value="Зарегистрироваться"
            />
            <div className="mt-[33px] flex items-center gap-2.5">
              <input type="checkbox" className="w-[27px] h-[27px]" />
              <label className="leading-1 font-normal text-2F2F2F text-sm font-montserrat">
                Я согласен с{" "}
                <a className="underline" href="#">
                  условиями обработки данных
                </a>
              </label>
            </div>
          </div>
          <img
            className="max-w-[1000px] max-h-[600px] rotate-[-108.128deg]"
            src={img}
            alt="Img"
          />
        </div>
        <div className="flex items-center justify-center mt-[50px]">
          <Link to="/login">
            <button className="z-10 cursor-pointer flex items-center mr-5 font-semibold text-2xl leading-1 text-2F2F2F font-montserrat">
              <span className="mr-5">Уже есть аккаунт?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10.486 15.922C10.3403 16.0729 10.2596 16.275 10.2615 16.4847C10.2633 16.6945 10.3474 16.8951 10.4958 17.0435C10.6441 17.1918 10.8447 17.2759 11.0545 17.2777C11.2642 17.2796 11.4663 17.1989 11.6172 17.0532L15.8844 12.77C15.9217 12.7329 15.9512 12.6887 15.9714 12.6401C15.9915 12.5915 16.0019 12.5394 16.0019 12.4868C16.0019 12.4342 15.9915 12.3821 15.9714 12.3335C15.9512 12.2849 15.9217 12.2408 15.8844 12.2036L11.6172 7.92201C11.4663 7.77628 11.2642 7.69565 11.0545 7.69747C10.8447 7.69929 10.6441 7.78343 10.4958 7.93175C10.3474 8.08008 10.2633 8.28073 10.2615 8.49049C10.2596 8.70025 10.3403 8.90233 10.486 9.05321L13.1196 11.6996H2.39961C2.18744 11.6996 1.98395 11.7839 1.83392 11.9339C1.68389 12.084 1.59961 12.2874 1.59961 12.4996C1.59961 12.7118 1.68389 12.9153 1.83392 13.0653C1.98395 13.2153 2.18744 13.2996 2.39961 13.2996H13.1196L10.486 15.922ZM19.1996 2.09961H8.79961C8.58744 2.09961 8.38395 2.18389 8.23392 2.33392C8.0839 2.48395 7.99961 2.68744 7.99961 2.89961C7.99961 3.11178 8.0839 3.31527 8.23392 3.46529C8.38395 3.61532 8.58744 3.69961 8.79961 3.69961H18.3996C18.6118 3.69961 18.8153 3.7839 18.9653 3.93392C19.1153 4.08395 19.1996 4.28744 19.1996 4.49961V20.4996C19.1996 20.7118 19.1153 20.9153 18.9653 21.0653C18.8153 21.2153 18.6118 21.2996 18.3996 21.2996H8.39961C8.18744 21.2996 7.98395 21.3839 7.83392 21.5339C7.6839 21.684 7.59961 21.8874 7.59961 22.0996C7.59961 22.3118 7.6839 22.5153 7.83392 22.6653C7.98395 22.8153 8.18744 22.8996 8.39961 22.8996H19.1996C19.624 22.8996 20.0309 22.731 20.331 22.431C20.631 22.1309 20.7996 21.724 20.7996 21.2996V3.69961C20.7996 3.27526 20.631 2.8683 20.331 2.56824C20.0309 2.26818 19.624 2.09961 19.1996 2.09961Z"
                  fill="#2F2F2F"
                />
              </svg>
              Войти
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
