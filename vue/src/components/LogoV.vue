
<template>
  <svg width="125" height="125" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">

    <rect width="30" height="30" stroke="#ffffff" fill="transparent"></rect>
    <rect width="30" height="30" x="120" stroke="#ffffff" fill="transparent"></rect>
    <rect width="30" height="30" x="60" y="120" stroke="#ffffff" fill="transparent"></rect>

    <line x1="0" y1="0" x2="60" y2="120" stroke="#ffffff"></line>
    <line x1="0" y1="30" x2="60" y2="150" stroke="#ffffff"></line>
    <line x1="30" y1="0" x2="90" y2="120" stroke="#ffffff"></line>
    <line x1="30" y1="30" x2="90" y2="150" stroke="#ffffff"></line>

    <line x1="120" y1="0" x2="60" y2="120" stroke="#ffffff"></line>
    <line x1="120" y1="30" x2="60" y2="150" stroke="#ffffff"></line>
    <line x1="150" y1="0" x2="90" y2="120" stroke="#ffffff"></line>
    <line x1="150" y1="30" x2="90" y2="150" stroke="#ffffff"></line>

    <line x1="14" y1="18" x2="71" y2="147" stroke="#00bd7e" stroke-width="2" stroke-dasharray="65 1 170 79 26 2 25 153 102 " opacity="0.5" style=" animation-duration: 7s; "></line>
    <line x1="16" y1="11" x2="70" y2="149" stroke="#00bd7e" stroke-width="0" stroke-dasharray="26 1 35 77 13 47 95 166 181 " opacity="0.78" style=" animation-duration: 5s; "></line>
    <line x1="3" y1="12" x2="89" y2="123" stroke="#00bd7e" stroke-width="1" stroke-dasharray="66 40 59 93 17 31 58 50 162 " opacity="0.79" style=" animation-duration: 5s; "></line>
    <line x1="12" y1="28" x2="66" y2="130" stroke="#00bd7e" stroke-width="1" stroke-dasharray="91 16 47 60 31 14 15 125 50 " opacity="0.25" style=" animation-duration: 1s; "></line>
    <line class="alter_direction_animation" x1="82" y1="138" x2="127" y2="17" stroke="#00bd7e" stroke-width="2" stroke-dasharray="37 37 192 13 17 20 97 111 138 " opacity="0.28" style=" animation-duration: 3s; "></line>
    <line class="alter_direction_animation" x1="87" y1="137" x2="124" y2="2" stroke="#00bd7e" stroke-width="3" stroke-dasharray="1 48 43 89 38 46 33 129 39 " opacity="0.7" style=" animation-duration: 9s; "></line>
    <line class="alter_direction_animation" x1="71" y1="132" x2="143" y2="3" stroke="#00bd7e" stroke-width="2" stroke-dasharray="68 11 32 2 7 32 92 68 178 " opacity="0.10" style=" animation-duration: 9s; "></line>
    <line class="alter_direction_animation" x1="67" y1="129" x2="124" y2="4" stroke="#00bd7e" stroke-width="0" stroke-dasharray="65 43 14 95 49 28 74 141 79 " opacity="0.45" style=" animation-duration: 7s; "></line>
    <line class="alter_direction_animation" x1="62" y1="124" x2="125" y2="8" stroke="#00bd7e" stroke-width="3" stroke-dasharray="67 13 182 52 28 28 86 17 174 " opacity="0.83" style=" animation-duration: 3s; "></line>
  </svg>
</template>

<style scoped>

svg * {
  stroke-width: 1%;
}

line {
  stroke-dashoffset: 1000;
  -webkit-animation: dash linear infinite;
          animation: dash linear infinite;
  -webkit-animation-direction: alternate, reverse, normal;
          animation-direction: alternate, reverse, normal;
}
line.alter_direction_animation {
  animation: dash reverse infinite;
  -webkit-animation-direction: alternate, reverse, normal;
          animation-direction: alternate, reverse, normal;
}

@-webkit-keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
