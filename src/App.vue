<script setup lang="ts">
const price = 0.05
</script>

<template>
  <main class="main">
    <div class="app-container">
      <Header/>
      <main class="flex mobile:flex-col justify-around items-center my-8 mobile:mt-0 mobile:mb-[44px]">
        <video
          autoplay
          muted
          loop
          preload="metadata"
          class="mobile:w-full mobile:h-[410px] w-[520px] h-[565px] scale-[1.5]"
        >
        <source src="./assets/video/nft.webm" type="video/webm" />
        <source src="./assets/video/nft.mp4" type="video/mp4" />
        </video>
        <div >
          <div class="mobile:text-[32px] mobile:leading-[35px] text-[50px] leading-[49px] font-neus text-center max-w-[520px] relative">Metavzorkovna Membership NFT
            <div class="absolute right-0 -bottom-2 mobile:-bottom-3 rotate-[-7deg] rounded-full bg-[#A7D2FF] text-black font-inter uppercase text-xs px-[15px] py-[4px] mobile:text-[10px] mobile:leading-[23px] mobile:px-[10px] mobile:py-0">1 year validity</div>
          </div>
          <div class="mt-[37px] mb-[22px] flex flex-col items-center justify-center">
            <div class="flex mobile:text-[26px] text-[32px] leading-[45px] items-center font-work font-medium">
            <EthIcon class="mr-2.5" />
            TBA ETH
            </div>
            <p class="text-base text-[#565656] font-work">Mint cost</p>
          </div>
          <div class="flex flex-col space-y-[13px] font-work font-light italic items-center">
            <BaseButton class="max-w-[300px] mobile:max-w-full" color="pink" size="large" block>Mint</BaseButton>
            <p>
              Minted 0 / 500
            </p>
          </div>
        </div>
      </main>
      <section>
        <p class="mobile:text-[24px] mobile:leading-[34px] mobile:max-w-[280px] mobile:mx-auto text-[45px] leading-[44px] font-neus text-center">NFT/Membership Benefits & Utility
        </p>
        <div class="grid grid-cols-3 mobile:grid-cols-1 gap-y-[50px] mobile:gap-y-[24px] gap-x-[130px] mobile:gap-x-[0] items-stretch justify-between w-full mt-[48px] mobile:mt-[30px]">
          <div class="flex mobile:flex-col mobile:text-center items-center space-x-[24px] mobile:space-x-0 mobile:space-y-3">
            <img src="./assets/img/crown.svg" alt="">
            <p class="text-[18px] leading-[22px] flex flex-col">1 NFT = 1 Physical Membership Card <span class="text-[#9D9D9D]">(valid for 1 year)</span> </p>
          </div>
          <div class="flex mobile:flex-col mobile:text-center items-center space-x-[24px] mobile:space-x-0 mobile:space-y-3">
            <img src="./assets/img/percent.svg" alt="">
            <p class="text-[18px] leading-[22px]">Discount 13% at the bar of Vzorkovna private club</p>
          </div>
          <div class="flex mobile:flex-col mobile:text-center items-center space-x-[24px] mobile:space-x-0 mobile:space-y-3">
            <img src="./assets/img/vip.svg" alt="">
            <p class="text-[18px] leading-[22px]">Access to closed spots within the bar</p>
          </div>
          <div class="flex mobile:flex-col mobile:text-center items-center space-x-[24px] mobile:space-x-0 mobile:space-y-3">
            <img src="./assets/img/watches.svg" alt="">
            <p class="text-[18px] leading-[22px]">No queue / line wait when entring the bar</p>
          </div>
          <div class="flex mobile:flex-col mobile:text-center items-center space-x-[24px] mobile:space-x-0 mobile:space-y-3">
            <img src="./assets/img/person.svg" alt="">
            <p class="text-[18px] leading-[22px]">Bring 1 person with you</p>
          </div>
          <div class="flex mobile:flex-col mobile:text-center items-center space-x-[24px] mobile:space-x-0 mobile:space-y-3">
            <img src="./assets/img/merch.svg" alt="">
            <p class="text-[18px] leading-[22px]">Exclusive merch</p>
          </div>
        </div>
      </section>
      <section class="mt-[160px]">
        <div class="relative mobile:text-[30px] mobile:leading-[37.5px] mobile:max-w-[305px] mobile:mx-auto text-[45px] leading-[44px] font-neus text-center">As soon as Metavzorkovna is ready
            <div class="absolute left-1/2 translate-x-[-50%] top-[-30px] mobile:top-[-45px] mobile:w-[180px] rotate-[-7deg] rounded-full bg-[#A7D2FF] text-black font-inter uppercase text-xs px-[15px] py-[4px] mobile:text-[10px] mobile:leading-[23px] mobile:px-[10px] mobile:py-0">And much much more</div>
        </div>
        <div class="flex mobile:flex-col mobile:space-y-[20px] justify-between items-stretch mobile:items-center mt-[48px]">
          <div class="max-w-[408.91px] flex flex-col items-center rounded-[13px] border border-[#464646]">
            <img class="rounded-t-[13px]" src="./assets/img/galery.png" alt="">
            <p class="p-5 pt-6 pb-[42px] font-montserrat text-white/80">NFTs will allow to bid on spots where artists will are able to <span class="text-white/100 underline"> display their works in both real world and metaverse</span></p>
          </div>
          <div class="max-w-[408.91px] flex flex-col items-center rounded-[13px] border border-[#464646]">
            <img class="rounded-t-[13px]" src="./assets/img/club.png" alt="">
            <p class="p-5 pt-6 pb-[42px] font-montserrat text-white/80">NFTs will grant <span class="text-white/100 underline"> free access to future events</span> in both real club and metaverse</p>
          </div>
          <div class="max-w-[408.91px] flex flex-col items-center rounded-[13px] border border-[#464646]">
            <img class="rounded-t-[13px]" src="./assets/img/dj.png" alt="">
            <p class="p-5 pt-6 pb-[42px] font-montserrat text-white/80">NFTs will allow music artists to <span class="text-white/100 underline">hold concerts in the metaverse</span> and translate it into the real club</p>
          </div>
        </div>
      </section>
      <section class="flex mobile:flex-col mobile:space-y-[55px] justify-between items-start mobile:items-center mt-[235px] mobile:mt-[105px]">
        <div class="max-w-[550px] mobile:max-w-full">
        <div class="mobile:text-[30px] mobile:leading-[37.5px] mobile:max-w-[280px] mobile:text-left text-[45px] leading-[44px] font-neus text-left">Metavzorkovna Concept</div>
        <p class="text-white/60 text-[18px] leading-[31px] mt-[14px]">Moving one of the most known private clubs in Prague into the Metaverse. First step is launching an NFT collection which will serve as digital membership passes. If successful, we will start building the replica of Vzorkovna in the Metaverse.</p>
        <BaseButton class="w-1/2 mobile:w-full mt-[33px]" icon="external-link" underline block>Vzorkovna</BaseButton>
        </div>
        <img src="./assets/img/concept.png" alt="">
      </section>
      <section class="mt-[200px] mobile:mt-[86px] mobile:flex mobile:flex-row-reverse mobile:justify-center mobile:gap-[22px]">
        <div class="flex mobile:flex-col gap-x-[8%] mobile:gap-x-0 justify-start items-start">
          <div class="hidden mobile:block font-neus text-left mobile:text-[30px] mobile:leading-[38px]">
            <p>Mint</p>
            <p>progress map</p>
          </div>
          <div class=" bg-[#212121]/60 rounded-md max-w-[332px] p-4 text-center text-base relative mobile:mt-[14px]">
            At any sell out you are eligible for all the benefits seen above
            <div class="absolute -bottom-2 left-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-[#212121]/60 border-r-[8px] border-r-transparent
             mobile:bottom-[40%] mobile:-left-4 mobile:border-t-[8px] mobile:border-t-transparent mobile:border-r-[8px] mobile:border-r-[#212121]/60 mobile:border-b-[8px] mobile:border-b-transparent
            "></div>
          </div>
          <div class=" bg-[#212121]/60 rounded-md max-w-[332px] p-4 text-center text-base relative mobile:mt-[64px]">
            At 50% + 1 sell out we will start the development of Metavzorkovna
            <div class="absolute -bottom-2 left-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-[#212121]/60 border-r-[8px] border-r-transparent 
             mobile:bottom-[40%] mobile:-left-4 mobile:border-t-[8px] mobile:border-t-transparent mobile:border-r-[8px] mobile:border-r-[#212121]/60 mobile:border-b-[8px] mobile:border-b-transparent
            "></div>
          </div>
        </div>
        <div class="w-[88%] mobile:w-2.5 mobile:h-[379px] h-2.5 bg-[#212121] rounded-[26px] relative mt-[34px] mobile:mt-0">
          <div  class="absolute rounder-[13px] z-10 bg-[#A7D2FF] rounded-[26px] left-0 h-full mobile:h-[55%] w-[57%] mobile:w-full"></div>
          <span class="absolute mobile:top-[50%] mobile:left-8 top-8 left-[50%] text-[34px] leading-[33px] mobile:text-[28px] mobile:leading-[27px]">50%</span>
          <span class="absolute mobile:top-[90%] mobile:left-8 top-8 right-0 text-[34px] leading-[33px] mobile:text-[28px] mobile:leading-[27px]">100%</span>
        </div>
        <div class=" mt-4 text-[45px] mobile:hidden leading-[44px]  font-neus text-left">
            <p>Mint</p>
            <p>progress map</p>
          </div>
      </section>
      <section class="mt-[210px] mobile:mt-[105px] pb-[145px] mobile:pb-[125px]">
        <p class="text-[45px] mobile:text-[30px] leading-[44px] mobile:leading-[37.5px] font-neus text-center mobile:text-left">Metaverse onboarding</p>
        <p class="text-white/60 text-[18px] mobile:text-sm leading-[31px] mt-[14px] max-w-[630px] mobile:max-w-full mx-auto text-center mobile:text-left">Thanks to our partners we are having the opportunity to transition and extend our business into the metaverse and be a part of the future.</p>
          <div class="flex flex-col items-center mx-auto w-1/3 mobile:w-full mobile:mt-[112px]">
              <img class="w-[466px] h-[292px] mobile:w-[153px] mobile:h-[115px]" src="./assets/img/vinum-logo.svg" alt="">
              <span class="font-work text-[31px] leading-[41px mobile:text-sm font-light italic mt-[80px] mb-[32px]">Provided by</span>
              <BaseButton href="https://www.vinum-web3.xyz/" class="scale-[1.4 mobile:scale-1" underline icon="external-link" block>
                Vinum Web3
              </BaseButton>
          </div>
      </section>
    </div>
  </main>
  <Footer/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
body,
html {
  position: relative;
  overflow-x: hidden;
  max-width: 100%;
}
.app-container {
  max-width: 1290px;
  margin: 0 auto;
  padding: 12px;
}
.main {
  color: #fff;
  background-color: black;
}
</style>
