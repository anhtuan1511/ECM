import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="border-b border-b-gray-200 py-5">
        <div className="max-w-[1202px] mx-auto">
          <div className="flex justify-between">
            <div className="flex gap-10">
              <div className="font-bold text-3xl">Logo</div>
              <div className="flex items-center gap-5 font-medium">
                <a href="Home">Home</a>
                <a href="About">About</a>
                <a href="Shop">Shop</a>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-3.5 h-3.5 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <div className="bg-[#008ECC] mt-32 text-[#ffff]">
        <div className="max-w-[1202px]  py-20 mx-auto">
          <div className="grid grid-cols-3 gap-24">
            <div className="">
              <h4 className="mb-[34px] ">
                <svg
                  width="217"
                  height="44"
                  viewBox="0 0 217 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.8074 0.18585L16.945 23.5333L8.08255 0.18585H0V33.0116H5.7665V8.50264L14.0381 30.1542H19.8519L28.1235 8.50264V33.0116H33.89V0.18585H25.8074Z"
                    fill="white"
                  />
                  <path
                    d="M51.3549 33.4762C55.3253 33.4762 58.4685 32.1056 61.0445 29.2946L57.0742 25.8796C55.4198 27.6917 53.5292 28.3421 51.4022 28.3421C47.6918 28.3421 45.9902 26.2978 45.4939 23.2545H61.7063C61.8244 22.9293 61.919 21.9768 61.919 21.0243C61.919 15.8437 59.2484 9.31573 50.9768 9.31573C42.9888 9.31573 39.3965 15.4488 39.3965 21.4889C39.3965 27.7381 43.2251 33.4762 51.3549 33.4762ZM45.4939 19.1658C46.0375 16.2619 47.5264 14.0781 50.9295 14.0781C53.4347 14.0781 55.4671 15.3094 56.0579 17.7022C56.1997 18.1668 56.247 18.6547 56.247 19.1658H45.4939Z"
                    fill="white"
                  />
                  <path
                    d="M77.6114 29.3875C73.4047 28.8765 70.4978 28.83 70.4978 26.925C70.4978 26.3907 70.7105 25.9958 71.1832 25.6938C72.5303 26.2746 74.0428 26.5998 75.6735 26.5998C80.8492 26.5998 85.2686 23.301 85.2686 18.1204C85.2686 16.6103 84.9141 15.2397 84.2523 14.0781L87.6792 11.3601L84.6777 7.75924L81.0619 10.8025C79.4784 9.85005 77.5405 9.31573 75.4844 9.31573C70.2615 9.31573 65.7948 12.8004 65.7948 17.8416C65.7948 19.886 66.5274 21.7212 67.7564 23.1848C66.362 24.3928 65.5585 25.8796 65.5585 27.924C65.5585 30.1542 66.5038 31.548 67.8745 32.4541L65.1331 34.7307C65.0858 34.963 65.0386 35.1954 65.0386 35.7297C65.0386 40.4921 68.9144 44 76.3589 44C82.2199 44 86.8047 41.491 86.8047 36.2408C86.8047 30.9208 82.0781 29.9683 77.6114 29.3875ZM75.6735 13.7064C78.2022 13.7064 79.5493 15.4488 79.5493 17.8881C79.5493 20.2577 78.2495 21.9768 75.6735 21.9768C73.1211 21.9768 71.7504 20.2577 71.7504 17.8881C71.7504 15.4488 73.1684 13.7064 75.6735 13.7064ZM76.3116 39.6325C73.452 39.6325 70.9941 38.8194 70.3088 36.4963L70.167 35.8691L71.4431 33.7782C72.8848 34.057 74.35 34.1732 75.579 34.2893C79.5021 34.6843 81.3455 35.1024 81.3455 36.868C81.3455 38.7265 79.3603 39.6325 76.3116 39.6325Z"
                    fill="white"
                  />
                  <path
                    d="M100.11 9.31573C95.4545 9.31573 92.4531 11.3601 90.1843 14.4034L94.6037 17.5396C95.6199 15.8437 97.4397 14.264 100.157 14.264C103.915 14.264 104.955 15.7276 105.073 19.1658H98.6686C93.3748 19.1658 89.2626 20.8384 89.2626 25.8796C89.2626 30.735 92.9966 33.4762 97.8414 33.4762C100.536 33.4762 103.679 32.3147 105.215 29.9219L105.569 33.0116H110.32V18.9335C110.32 13.265 106.538 9.31573 100.11 9.31573ZM98.9995 28.6906C96.4234 28.6906 95.1709 27.5987 95.1709 26.0655C95.1709 24.6019 96.3762 23.2545 98.9995 23.2545H105.097V23.4403C104.742 26.1816 102.544 28.6906 98.9995 28.6906Z"
                    fill="white"
                  />
                  <path
                    d="M143.17 0.18585L134.307 23.5333L125.445 0.18585H117.362V33.0116H123.129V8.50264L131.401 30.1542H137.214L145.486 8.50264V33.0116H151.252V0.18585H143.17Z"
                    fill="white"
                  />
                  <path
                    d="M167.607 9.31573C162.951 9.31573 159.949 11.3601 157.681 14.4034L162.1 17.5396C163.116 15.8437 164.936 14.264 167.654 14.264C171.412 14.264 172.451 15.7276 172.57 19.1658H166.165C160.871 19.1658 156.759 20.8384 156.759 25.8796C156.759 30.735 160.493 33.4762 165.338 33.4762C168.032 33.4762 171.175 32.3147 172.711 29.9219L173.066 33.0116H177.816V18.9335C177.816 13.265 174.035 9.31573 167.607 9.31573ZM166.496 28.6906C163.92 28.6906 162.667 27.5987 162.667 26.0655C162.667 24.6019 163.873 23.2545 166.496 23.2545H172.593V23.4403C172.239 26.1816 170.041 28.6906 166.496 28.6906Z"
                    fill="white"
                  />
                  <path
                    d="M183.984 33.0116H189.562V23.208C189.562 17.3073 192.374 14.8448 195.068 14.8448C195.99 14.8448 196.865 15.1235 197.644 15.6346L200.268 10.9884C199.133 9.85005 197.503 9.31573 195.943 9.31573C193.296 9.31573 190.625 10.8955 189.609 13.7064V9.80359H183.984V33.0116Z"
                    fill="white"
                  />
                  <path
                    d="M212.699 33.4762C214.424 33.4762 216.126 33.1045 217 32.7793V27.6452C216.22 28.0169 214.92 28.4815 213.715 28.4815C212.202 28.4815 211.092 27.831 211.092 25.6008V14.5428H217V9.80359H211.092V0L205.42 4.04224V9.80359H201.52V14.5428H205.325V26.5998C205.325 30.8279 208.09 33.4762 212.699 33.4762Z"
                    fill="white"
                  />
                </svg>
              </h4>
              <p className="text-[#ffff] mb-[20px]">Contact Us</p>
              <div className="flex gap-3 mb-4 ">
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7226 14.0602C16.4672 13.9289 15.1945 13.3055 14.9578 13.2211C14.7211 13.132 14.5476 13.0898 14.3765 13.3523C14.2031 13.6125 13.7109 14.1914 13.5562 14.3672C13.4062 14.5406 13.2539 14.5617 12.9984 14.4328C11.4797 13.6734 10.4836 13.0781 9.48279 11.3602C9.21794 10.9031 9.74763 10.9359 10.2422 9.94922C10.3265 9.77578 10.2844 9.62813 10.2187 9.49688C10.1531 9.36563 9.63748 8.09531 9.42185 7.57734C9.21326 7.07344 8.99763 7.14375 8.8406 7.13437C8.6906 7.125 8.51951 7.125 8.34607 7.125C8.17263 7.125 7.89373 7.19063 7.65701 7.44609C7.42029 7.70625 6.75232 8.33203 6.75232 9.60234C6.75232 10.8727 7.6781 12.1031 7.80466 12.2766C7.93591 12.45 9.62576 15.0563 12.2203 16.1789C13.8609 16.8867 14.5031 16.9477 15.3234 16.8258C15.8226 16.7508 16.8515 16.2023 17.0648 15.5953C17.2781 14.9906 17.2781 14.4727 17.2148 14.3648C17.1515 14.25 16.9781 14.1844 16.7226 14.0602Z"
                      fill="white"
                    />
                    <path
                      d="M21.6844 7.93125C21.1547 6.67266 20.3953 5.54297 19.4274 4.57266C18.4594 3.60469 17.3297 2.84297 16.0688 2.31563C14.7797 1.77422 13.4109 1.5 12 1.5H11.9531C10.5328 1.50703 9.15704 1.78828 7.86329 2.34141C6.61407 2.87578 5.49376 3.63516 4.53517 4.60312C3.57657 5.57109 2.82423 6.69609 2.30392 7.95C1.76485 9.24844 1.49298 10.6289 1.50001 12.0492C1.50704 13.6758 1.8961 15.2906 2.62501 16.7344V20.2969C2.62501 20.8922 3.10782 21.375 3.70314 21.375H7.26798C8.71173 22.1039 10.3266 22.493 11.9531 22.5H12.0024C13.4063 22.5 14.768 22.2281 16.05 21.6961C17.3039 21.1734 18.4313 20.4234 19.3969 19.4648C20.3649 18.5063 21.1266 17.3859 21.6586 16.1367C22.2117 14.843 22.493 13.4672 22.5 12.0469C22.507 10.6195 22.2305 9.23438 21.6844 7.93125ZM18.143 18.1969C16.5 19.8234 14.3203 20.7188 12 20.7188H11.9602C10.5469 20.7117 9.14298 20.3602 7.90314 19.6992L7.70626 19.5938H4.40626V16.2938L4.30079 16.0969C3.63985 14.857 3.28829 13.4531 3.28126 12.0398C3.27189 9.70312 4.16485 7.50937 5.80314 5.85703C7.43907 4.20469 9.62579 3.29062 11.9625 3.28125H12.0024C13.1742 3.28125 14.3109 3.50859 15.382 3.95859C16.4274 4.39687 17.3649 5.02734 18.1711 5.83359C18.975 6.6375 19.6078 7.57734 20.0461 8.62266C20.5008 9.70547 20.7281 10.8539 20.7234 12.0398C20.7094 14.3742 19.793 16.5609 18.143 18.1969Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="">
                  <p>Whats App</p>
                  <span>+1 202-918-2132</span>
                </div>
              </div>
              <div>
                <div>
                  <svg
                    width="163"
                    height="43"
                    viewBox="0 0 163 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.1484 37.1484H40.375V33.7344H43.7969V32.5078H40.375V29.0859H39.1484V32.5078H35.7344V33.7344H39.1484V37.1484ZM49.0938 26.9609V27.7266C49.0938 28.4141 48.7031 28.7031 47.9922 28.7031H46.3906V29.9844H49.0312V38H50.6797V26.9609H49.0938ZM61.0391 36.4766C62.9453 35.3672 65.6094 32.7812 65.6094 30.1875C65.6094 28.0312 64.1484 26.8281 62.1328 26.8281C59.7656 26.8281 58.3984 28.6875 58.3984 30.7656L60.0391 30.875C60.0781 29.5703 60.625 28.3359 62.1484 28.3359C63.3594 28.3359 63.9297 29.1172 63.9297 30.1484C63.9297 32.9141 60.5156 35.3047 58.3438 36.6328V38H66.1719V36.4766H61.0391ZM71.4766 38.1484C74.3672 38.1484 75.2188 35.25 75.2188 32.5C75.2188 29.7344 74.3359 26.7969 71.3672 26.7969C68.1016 26.7969 67.6172 30.1094 67.6172 32.4766C67.6172 34.8359 68.1328 38.1484 71.4766 38.1484ZM71.4375 36.5625C69.4688 36.5625 69.2656 34.3516 69.2656 32.4766C69.2656 30.5938 69.4688 28.4141 71.3672 28.4141C73.2266 28.4141 73.4844 30.5234 73.4844 32.4688C73.4844 34.375 73.2422 36.5625 71.4375 36.5625ZM79.3828 36.4766C81.2891 35.3672 83.9531 32.7812 83.9531 30.1875C83.9531 28.0312 82.4922 26.8281 80.4766 26.8281C78.1094 26.8281 76.7422 28.6875 76.7422 30.7656L78.3828 30.875C78.4219 29.5703 78.9688 28.3359 80.4922 28.3359C81.7031 28.3359 82.2734 29.1172 82.2734 30.1484C82.2734 32.9141 78.8594 35.3047 76.6875 36.6328V38H84.5156V36.4766H79.3828ZM86.3359 33.8672H90.7812V32.6406H86.3359V33.8672ZM96.5781 26.8125C94.4141 26.8125 92.6562 28.5156 92.6562 30.6016C92.6562 32.3047 93.8359 33.7188 95.375 34.1719C95.8984 34.3359 96.4531 34.375 97 34.2969L94.6953 38H96.6094L99.9141 32.6094C100.273 32.0234 100.516 31.3438 100.516 30.5859C100.516 28.5156 98.75 26.8125 96.5781 26.8125ZM96.5781 32.8359C95.3125 32.8359 94.2969 31.8281 94.2969 30.6094C94.2969 29.3828 95.3125 28.375 96.5781 28.375C97.8516 28.375 98.875 29.3828 98.875 30.6016C98.875 31.8281 97.8516 32.8359 96.5781 32.8359ZM105.688 26.9609V27.7266C105.688 28.4141 105.297 28.7031 104.586 28.7031H102.984V29.9844H105.625V38H107.273V26.9609H105.688ZM114.867 38.1484C116.891 38.1484 118.82 37.0703 118.82 34.8438C118.82 33.5859 118.188 32.5781 117.062 32.0234C117.789 31.5234 118.25 30.7109 118.25 29.75C118.25 27.9141 116.656 26.8125 114.875 26.8125C113.148 26.8125 111.5 27.8672 111.5 29.7422C111.5 30.6797 111.922 31.4922 112.68 32.0234C111.609 32.5547 110.914 33.5547 110.914 34.8594C110.914 37.0547 112.836 38.1484 114.867 38.1484ZM114.906 31.5391C113.844 31.5391 113.156 30.8594 113.156 29.8281C113.156 28.75 113.977 28.2109 114.898 28.2109C115.906 28.2109 116.648 28.8359 116.648 29.8828C116.648 30.9141 115.914 31.5391 114.906 31.5391ZM114.859 36.7031C113.633 36.7031 112.555 36.0547 112.555 34.6719C112.555 33.3984 113.516 32.6406 114.859 32.6406C116.18 32.6406 117.156 33.3984 117.156 34.6875C117.156 36.0547 116.102 36.7031 114.859 36.7031ZM120.648 33.8672H125.094V32.6406H120.648V33.8672ZM129.68 36.4766C131.586 35.3672 134.25 32.7812 134.25 30.1875C134.25 28.0312 132.789 26.8281 130.773 26.8281C128.406 26.8281 127.039 28.6875 127.039 30.7656L128.68 30.875C128.719 29.5703 129.266 28.3359 130.789 28.3359C132 28.3359 132.57 29.1172 132.57 30.1484C132.57 32.9141 129.156 35.3047 126.984 36.6328V38H134.812V36.4766H129.68ZM140.016 26.9609V27.7266C140.016 28.4141 139.625 28.7031 138.914 28.7031H137.312V29.9844H139.953V38H141.602V26.9609H140.016ZM149.117 38.1484C151.273 38.1484 153.133 36.9688 153.133 34.7891C153.133 33.4453 152.344 32.4609 150.852 32.1016C151.984 31.6562 152.539 30.8125 152.539 29.7734C152.539 27.9297 150.914 26.8125 149.086 26.8125C147.195 26.8125 145.625 28 145.625 30.0156L147.211 30.1172C147.227 29.0391 147.984 28.375 149.109 28.375C150.141 28.375 150.93 28.9375 150.93 29.9766C150.93 31.0312 150.383 31.5625 148.609 31.5625V32.8594C149.93 32.8594 151.531 32.9766 151.531 34.6562C151.531 35.9375 150.438 36.6016 149.148 36.6016C147.727 36.6016 146.703 35.8203 146.703 34.4844L145.102 34.5781C145.102 36.9375 146.922 38.1484 149.117 38.1484ZM157.195 36.4766C159.102 35.3672 161.766 32.7812 161.766 30.1875C161.766 28.0312 160.305 26.8281 158.289 26.8281C155.922 26.8281 154.555 28.6875 154.555 30.7656L156.195 30.875C156.234 29.5703 156.781 28.3359 158.305 28.3359C159.516 28.3359 160.086 29.1172 160.086 30.1484C160.086 32.9141 156.672 35.3047 154.5 36.6328V38H162.328V36.4766H157.195Z"
                      fill="white"
                    />
                    <path
                      d="M41.0234 16.1328C43.1875 16.1328 44.8125 15.0703 45.6797 13.0703L44.4062 12.5469C43.7422 14.1406 42.6562 14.8203 41.0234 14.8203C38.3828 14.8203 37.2734 12.8984 37.2734 10.4141C37.2734 7.89844 38.4922 6.125 41.0469 6.125C42.7031 6.125 43.8672 6.78906 44.375 8.375L45.6641 7.85938C44.8281 5.85938 43.2422 4.8125 41.0625 4.8125C37.6094 4.8125 35.9062 7.27344 35.9062 10.4688C35.9062 13.6562 37.6172 16.1328 41.0234 16.1328ZM50.0703 8.0625C48.6406 8.0625 47.7031 8.66406 46.9453 9.70312L47.9609 10.4375C48.4297 9.71094 49.0938 9.21875 50.0859 9.21875C51.5625 9.21875 52.0625 9.92969 52.0703 11.4531H49.8594C47.9375 11.4531 46.6406 12.0703 46.6406 13.6875C46.6406 15.2344 47.7969 16.1328 49.3828 16.1328C50.4531 16.1328 51.5312 15.625 52.0859 14.6094L52.1719 16H53.2734V11.2422C53.2734 9.30469 52.1172 8.0625 50.0703 8.0625ZM49.6406 15C48.5781 15 48 14.4922 48 13.7344C48 12.9453 48.625 12.4219 49.9375 12.4219H52.0703V12.9297C51.8125 14.1016 50.9609 15 49.6406 15ZM57.1328 16.1328C57.5078 16.1328 57.9766 16.0703 58.3359 15.9922L58.3281 14.875C58.1016 14.9141 57.8828 14.9375 57.7266 14.9375C57.0859 14.9375 56.9531 14.5547 56.9531 14.0312V4.96094H55.625V14.3828C55.625 15.5781 56.0938 16.1328 57.1328 16.1328ZM61.4922 16.1328C61.8672 16.1328 62.3359 16.0703 62.6953 15.9922L62.6875 14.875C62.4609 14.9141 62.2422 14.9375 62.0859 14.9375C61.4453 14.9375 61.3125 14.5547 61.3125 14.0312V4.96094H59.9844V14.3828C59.9844 15.5781 60.4531 16.1328 61.4922 16.1328ZM72.5312 16.1328C75.2969 16.1328 76.5781 14.4609 76.5781 11.7266V4.96094H75.2031V11.625C75.2031 13.6641 74.4766 14.7969 72.5312 14.7969C70.6016 14.7969 69.875 13.6719 69.875 11.6562V4.96094H68.5V11.8047C68.5 14.4766 69.7734 16.1328 72.5312 16.1328ZM81.5938 16.1328C83.1016 16.1328 84.4609 15.3359 84.4609 13.6953C84.4609 10.75 80.0938 11.8125 80.0938 10.125C80.0938 9.53906 80.6484 9.11719 81.5312 9.11719C82.4453 9.11719 83.0234 9.64062 83.3672 10.2656L84.3906 9.71094C83.8281 8.67188 82.8438 8.0625 81.5781 8.0625C80.0781 8.0625 78.8281 8.82812 78.8281 10.2969C78.8281 13.1016 83.1562 11.9062 83.1562 13.7578C83.1562 14.4453 82.6094 15.0234 81.5312 15.0234C80.3828 15.0234 79.7266 14.3047 79.4609 13.5625L78.3906 14.0312C78.7812 15.2188 80.0156 16.1328 81.5938 16.1328Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-xl mt-8">Download App</p>
                <div className="mt-5">
                  <img src="/Group 200.png" alt="" />
                </div>
              </div>
            </div>
            <div>
              <p className="border-b-2 border-[#ffff] pb-4 text-lg font-semibold">
                Most Popular Categories
              </p>
              <ul className="	list-disc pl-12  ">
                <li className="mt-6 font-medium ">Staples</li>
                <li className="mt-6 font-medium ">Beverages</li>
                <li className="mt-6 font-medium ">Personal Care</li>
                <li className="mt-6 font-medium ">Home Care</li>
                <li className="mt-6 font-medium ">Baby Care</li>
                <li className="mt-6 font-medium ">Vegetables & Fruits</li>
                <li className="mt-6 font-medium ">Snacks & Foods</li>
                <li className="mt-6 font-medium ">Dairy & Bakery</li>
              </ul>
            </div>
            <div>
              <p className="border-b-2 border-[#ffff] pb-4 text-lg font-semibold">
                Customer Services
              </p>
              <ul className="	list-disc pl-12  ">
                <li className="mt-6 font-medium "> About Us </li>
                <li className="mt-6 font-medium ">Terms & Conditions </li>
                <li className="mt-6 font-medium ">FAQ </li>
                <li className="mt-6 font-medium ">Privacy Policy </li>
                <li className="mt-6 font-medium ">E-waste Policy </li>
                <li className="mt-6 font-medium ">
                  Cancellation & Return Policy{" "}
                </li>
              </ul>
            </div>

          </div>
          <p className="mt-[80px] border-[#05ABF3] border-t-2 py-[30px] text-center text-xl ">
          © 2022 All rights reserved. Reliance Retail Ltd.
          </p>
        </div>
      </div>
    </>
  );
}